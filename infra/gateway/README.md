# Vesti 网关基础设施(vesti.world 服务器)

服务器:`8.153.195.205`(root)。本目录是 `/opt/vesti-gate/` 的版本化备份与部署源。

## 文件对应关系

| 本目录 | 服务器路径 | 说明 |
|---|---|---|
| `server.mjs` | `/opt/vesti-gate/server.mjs` | 网关主进程:key 池轮询、failover、熔断、SSE 透传、PII 复查、计量 |
| `crowdfund.mjs` / `crowdfund-page.mjs` | 同目录 | 众筹兑换与公开页 |
| `watchdog.sh` | `/opt/vesti-gate/watchdog.sh` | 看门狗,root crontab 每分钟:`* * * * * /opt/vesti-gate/watchdog.sh` |
| `vesti-gate.service` | `/etc/systemd/system/vesti-gate.service` | systemd 单元(Restart=always) |
| `vesti-gate.logrotate` | `/etc/logrotate.d/vesti-gate` | 日志周轮转保留 8 份 |
| `nginx-vesti-gate.conf` | nginx sites 配置 | 反代到 127.0.0.1:8787 |

**注意**:`/opt/vesti-gate/.env`(上游 key、CLIENT_TOKEN、ALERT_WEBHOOK_URL)不进版本库。

## 监控与告警

- `GET /health` — 公开,存活与 key 池概览。
- `GET /status` — 需 `x-vesti-service-token`,各路由请求/限流/全挂计数 + 每条上游的
  尝试/成功/失败/熔断状态。
- key 熔断:单条上游连续失败 5 次(`KEY_EJECT_AFTER_FAILS`)剔出轮询 10 分钟
  (`KEY_EJECT_COOLDOWN_MS`),自动半开归队。
- 告警:全池不可用、key 熔断、看门狗重启时推送 `ALERT_WEBHOOK_URL`
  (企业微信/钉钉机器人自动适配消息格式,其余按 `{ text }` POST),同类 10 分钟节流。

## 部署变更流程

改本目录文件 → `scp` 到服务器对应路径 → `node --check` → 备份原文件 →
`systemctl restart vesti-gate` → 验证 `/health` 与 `/status`。
