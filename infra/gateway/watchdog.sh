#!/bin/bash
# vesti-gate 看门狗:每分钟由 cron 调用。
# 健康检查连续 2 次失败 → systemctl restart vesti-gate,并按需推送告警。
# 告警渠道:读取 /opt/vesti-gate/.env 的 ALERT_WEBHOOK_URL(企业微信/钉钉机器人
# 自动适配消息格式,其余按 { text } POST;留空则只记日志)。
STATE=/var/lib/vesti-gate/watchdog-fails
LOG=/var/log/vesti-gate/watchdog.log
mkdir -p /var/lib/vesti-gate /var/log/vesti-gate

port=$(grep -s '^LISTEN_PORT=' /opt/vesti-gate/.env | cut -d= -f2-)
port=${port:-8787}

if curl -fsS -m 5 "http://127.0.0.1:${port}/health" >/dev/null 2>&1; then
  echo 0 > "$STATE"
  exit 0
fi

n=$(cat "$STATE" 2>/dev/null || echo 0)
n=$((n + 1))
echo "$n" > "$STATE"
echo "$(date -Is) health check failed ($n)" >> "$LOG"

if [ "$n" -ge 2 ]; then
  echo "$(date -Is) restarting vesti-gate" >> "$LOG"
  systemctl restart vesti-gate
  echo 0 > "$STATE"
  webhook=$(grep -s '^ALERT_WEBHOOK_URL=' /opt/vesti-gate/.env | cut -d= -f2-)
  if [ -n "$webhook" ]; then
    case "$webhook" in
      *qyapi.weixin.qq.com*|*oapi.dingtalk.com*)
        payload='{"msgtype":"text","text":{"content":"[vesti-gate] 健康检查连续失败,已自动重启"}}' ;;
      *)
        payload='{"text":"[vesti-gate] 健康检查连续失败,已自动重启"}' ;;
    esac
    curl -fsS -m 5 -X POST "$webhook" -H 'content-type: application/json' -d "$payload" >> "$LOG" 2>&1
  fi
fi
