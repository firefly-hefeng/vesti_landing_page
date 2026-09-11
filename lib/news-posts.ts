import type { Lang } from "@/lib/i18n"

export interface NewsPostSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface NewsPostLink {
  label: string
  href: string
}

export interface NewsPost {
  slug: string
  date: string
  title: string
  excerpt: string
  sections: NewsPostSection[]
  links?: NewsPostLink[]
}

const releaseLinks: NewsPostLink[] = [
  {
    label: "Chrome Web Store",
    href: "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo",
  },
  {
    label: "Desktop installer (Windows, v0.3.2)",
    href: "/downloads/Vesti-0.3.2-Setup.exe",
  },
  {
    label: "Extension manual package (v1.2.0-rc.8)",
    href: "/downloads/vesti-extension-1.2.0-rc.8.zip",
  },
  {
    label: "GitHub",
    href: "https://github.com/firefly-hefeng/VESTI",
  },
]

const skillsLink: NewsPostLink[] = [
  {
    label: "GitHub — VESTI-SKILLS",
    href: "https://github.com/firefly-hefeng/VESTI-SKILLS",
  },
]

// Newest first. To publish a new post, add an entry at the top of each array.
export const newsPostsByLang: Record<Lang, NewsPost[]> = {
  en: [
    {
      slug: "vesti-skills-open-sourced",
      date: "2026-09-09",
      title:
        "VESTI Skills: open-source memory and handoff skills for coding agents",
      excerpt:
        "Two MIT-licensed skills — vesti-memory for memory recall and vesti-handoff for structured handoff — now documented on this site, with setup instructions for kimi-code, Claude Code, Codex and Cursor.",
      sections: [
        {
          paragraphs: [
            "VESTI Skills make your AI coding agent remember everything you have done, and hand the work over to the next agent intact. vesti-memory recalls past work through progressive disclosure on top of the VESTI desktop app; vesti-handoff generates a schema-based handoff pack and works standalone.",
          ],
        },
      ],
      links: skillsLink,
    },
    {
      slug: "vesti-desktop-0-3-1-and-extension-1-2-0-rc-9",
      date: "2026-09-09",
      title:
        "Double release: Vesti desktop v0.3.1 and browser extension v1.2.0-rc.9",
      excerpt:
        "Vesti now captures agent work on both surfaces where it happens: AI conversations in the browser, and CLI coding-agent sessions on your machine.",
      sections: [
        {
          paragraphs: [
            "Vesti is the working-memory engine for domain-specific agents. Today we are shipping both halves of the capture loop: the 心迹 Vesti browser extension at v1.2.0-rc.9 (released 2026-08-16) and the Vesti desktop app at v0.3.1 (released 2026-09-09).",
          ],
        },
        {
          heading: "Vesti desktop app v0.3.1",
          bullets: [
            "Captures local CLI coding-agent sessions — Claude Code, Cursor, Kimi Code and Codex.",
            "L0–L3 layered memory: deterministic layers at the bottom, LLM layers on top, and the original transcript always rebuildable.",
            "Built-in MCP server with 9 read-only tools, so any coding agent can mount your memory.",
            "Beta membership with a points system, and an opt-in data-contribution program (rewarded with points, used as RL training data, PII filtered on both ends).",
            "Bring your own key via a generic OpenAI-compatible interface.",
          ],
        },
        {
          heading: "心迹 Vesti browser extension v1.2.0-rc.9",
          bullets: [
            "Auto-captures web conversations across 8 AI platforms: ChatGPT, Claude, Gemini, DeepSeek, Tongyi, Doubao, Kimi and Yuanbao.",
            "Structured AST capture — code, tables and formulas stay intact instead of collapsing into plain text.",
            "Local-first storage in IndexedDB, with FTS5-grade search, vector recall and a knowledge graph.",
            "A Gardener agent organizes your library automatically.",
            "Gold medal, national finals, 2026 AI Hackathon Tour.",
          ],
        },
        {
          heading: "Download",
          paragraphs: [
            "The browser extension is available on the Chrome Web Store or as a verified manual package. The desktop app ships as a Windows installer. Source and documentation live on GitHub.",
          ],
        },
      ],
      links: releaseLinks,
    },
    {
      slug: "vesti-0-3-0",
      date: "2026-07-23",
      title: "Vesti App 0.3.0 officially released — capture every agent conversation",
      excerpt:
        "The Vesti desktop app is live: automatically collect, explore, organize and retain AI agent conversations, turning scattered chats into durable knowledge.",
      sections: [
        {
          paragraphs: [
            "Vesti moves AI conversations from the browser onto your desktop: it automatically captures sessions from local coding agents and the web, then lets you explore, organize and build on them locally. The full release announcement has the complete feature tour and screenshots.",
          ],
        },
      ],
      links: [
        { label: "Read the full announcement", href: "/news/vesti-0-3-0" },
      ],
    },
  ],
  zh: [
    {
      slug: "vesti-skills-open-sourced",
      date: "2026-09-09",
      title: "VESTI Skills:为编码 Agent 开源的记忆与交接技能包",
      excerpt:
        "两个 MIT 协议的开源技能——负责记忆召回的 vesti-memory 与负责结构化交接的 vesti-handoff——现已在本站提供文档,并附 kimi-code、Claude Code、Codex、Cursor 的配置方法。",
      sections: [
        {
          paragraphs: [
            "VESTI Skills 让你的 AI 编程 Agent 记得你做过的一切,并把工作完整交给下一个 Agent。vesti-memory 基于 VESTI 桌面端,以渐进披露的方式召回过往工作;vesti-handoff 生成 schema 化交接包,独立可用。",
          ],
        },
      ],
      links: skillsLink,
    },
    {
      slug: "vesti-desktop-0-3-1-and-extension-1-2-0-rc-9",
      date: "2026-09-09",
      title: "双发布:Vesti 桌面端 v0.3.1 与浏览器扩展 v1.2.0-rc.9",
      excerpt:
        "Vesti 现在覆盖 Agent 工作的两个现场:浏览器里的 AI 对话,以及你本机的 CLI 编程 Agent 会话。",
      sections: [
        {
          paragraphs: [
            "Vesti 是面向专有场景 Agent 的工作记忆引擎。今天我们同时发布捕获闭环的两半:心迹 Vesti 浏览器扩展 v1.2.0-rc.9(2026-08-16 发布)与 Vesti 桌面端 v0.3.1(2026-09-09 发布)。",
          ],
        },
        {
          heading: "Vesti 桌面端 v0.3.1",
          bullets: [
            "捕获本机 CLI 编程 Agent 会话——Claude Code、Cursor、Kimi Code、Codex。",
            "L0–L3 分层记忆:确定性层在下、LLM 层在上,原始会话始终可重建。",
            "内置 MCP server,9 个只读工具,任何编码 Agent 均可挂载你的记忆。",
            "Beta 会员积分体系,以及可选的数据贡献计划(赠积分,用于 RL 训练数据,PII 双端过滤)。",
            "通用 OpenAI 兼容接口,支持自带 key(BYOK)。",
          ],
        },
        {
          heading: "心迹 Vesti 浏览器扩展 v1.2.0-rc.9",
          bullets: [
            "自动捕获 8 个 AI 平台的网页对话:ChatGPT、Claude、Gemini、DeepSeek、通义、豆包、Kimi、元宝。",
            "结构化 AST 捕获——代码、表格、公式保持原样,不塌成纯文本。",
            "IndexedDB 本地优先存储,FTS5 级检索 + 向量召回 + 知识图谱。",
            "Gardener Agent 自动整理你的记忆库。",
            "2026 AI Hackathon Tour 全国总决赛金奖。",
          ],
        },
        {
          heading: "下载",
          paragraphs: [
            "浏览器扩展可在 Chrome 应用商店安装,或使用验证过的手动安装包;桌面端提供 Windows 安装包。源码与文档见 GitHub。",
          ],
        },
      ],
      links: releaseLinks,
    },
    {
      slug: "vesti-0-3-0",
      date: "2026-07-23",
      title: "Vesti APP 正式发布|获取与 Agent 的对话",
      excerpt:
        "Vesti 桌面版正式上线:自动收集、探索、整理与沉淀,让散落的 AI Agent 对话重新成为可持续使用的知识。",
      sections: [
        {
          paragraphs: [
            "Vesti 从浏览器里的 AI 对话来到桌面上的 Agent 对话:自动收集本机与网页端会话,在本地完成探索、整理与沉淀。完整功能介绍与截图见发布稿全文。",
          ],
        },
      ],
      links: [{ label: "阅读发布稿全文", href: "/news/vesti-0-3-0" }],
    },
  ],
}
