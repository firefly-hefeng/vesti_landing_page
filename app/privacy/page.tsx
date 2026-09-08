import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "隐私政策 — Vesti",
  description: "Vesti 如何收集、处理与保护你的数据：本地优先存储、LLM 处理链路、可选的数据贡献。",
}

const sections = [
  {
    title: "1. 本地优先的存储",
    body: [
      "Vesti 捕获的对话（来自浏览器插件、Codex、Cursor、Kimi Code、Claude Code 等）默认只保存在你自己的设备上：桌面端存放在用户目录下的 .vesti 数据目录，浏览器插件存放在浏览器本地 IndexedDB 中。你的对话库不默认上传任何服务器。",
      "卸载应用或插件不会删除这些数据；如需彻底清除，请手动删除对应数据目录。",
    ],
  },
  {
    title: "2. LLM 处理：对话内容何时离开本机",
    body: [
      "摘要、语义检索、日报、思维导图等功能需要调用大语言模型，此时相关对话文本会被发送至模型服务进行处理。Vesti 提供两种模式：",
      "开箱即用（默认）：请求经 Vesti 网关（vesti.world）转发至第三方模型服务（当前为 DeepSeek / 阿里云百炼），API 密钥仅保存在我们的服务器上，你无需任何配置。网关不存储你的对话内容，仅在内存中完成流式转发，并按请求记录匿名化的用量（token 数）用于积分计量。",
      "自带密钥（BYOK）：请求直接发送至你自己配置的 OpenAI 兼容端点，不经过 Vesti 服务器。",
      "你可以随时在设置中切换模式。",
    ],
  },
  {
    title: "3. 数据贡献：可选，默认关闭",
    body: [
      "为改进模型与产品，Vesti 提供可选的「数据贡献」计划：仅在 agent/CLI 场景下的编码会话会被收集，浏览器端对话从不进入该计划。",
      "默认关闭。注册与使用 Vesti 均不需要同意数据贡献。首次开启将一次性赠送 2,000 积分，之后可随时在「设置 → 数据贡献」中关闭，关闭即停止上传。",
      "所有贡献的会话都会经过两层个人信息过滤：命中手机号、邮箱、身份证号、银行卡号、私钥或 API key 模式的会话将被整条丢弃，不会上传。",
    ],
  },
  {
    title: "4. 我们不做的",
    body: [
      "不投放广告，不出售或出租任何用户数据；",
      "不内置第三方行为分析（analytics）或崩溃上报 SDK；",
      "不在未明确告知的情况下收集任何与功能无关的信息。",
    ],
  },
  {
    title: "5. 账号与积分",
    body: [
      "注册会员仅用于积分计量与会员权益，会员注册同样不要求开启数据贡献。积分用量由网关按 token 数匿名计量。",
    ],
  },
  {
    title: "6. 联系我们",
    body: [
      "对本政策有任何疑问，可通过 GitHub 仓库 issue 或官网用户群与我们联系。政策更新将发布于本页。",
      "最近更新：2026 年 9 月。",
    ],
  },
] as const

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
        <div className="page-shell">
          <header className="max-w-[760px]">
            <p className="section-kicker">Privacy</p>
            <h1 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-text-primary">
              隐私政策
            </h1>
            <p className="mt-5 max-w-[46ch] text-base leading-7 text-text-secondary">
              我们尽量用一页说清楚：什么数据留在本机、什么会离开、为什么，以及你如何控制。
            </p>
          </header>

          <div className="mt-12 max-w-[760px] space-y-10 border-t border-border-subtle pt-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
