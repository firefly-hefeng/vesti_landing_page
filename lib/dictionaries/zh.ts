import type { Dict } from "./en"

export const zh: Dict = {
  nav: {
    features: "特性",
    demo: "演示",
    skills: "技能包",
    enterprise: "企业服务",
    news: "动态",
    about: "关于",
    github: "GitHub",
    install: "安装",
  },
  newsStrip: {
    label: "动态",
  },
  hero: {
    kicker: "Vesti · 智能体工作记忆",
    title: "面向专有场景 Agent 的工作记忆引擎",
    subtitle:
      "Vesti 捕获每一次 Agent 对话，整理为结构化的本地记忆，并在任何 Agent 需要时把上下文喂回去。",
    install: "立即安装",
    watchDemo: "观看演示",
    libraryTitle: "Vesti 记忆库",
    libraryHint: "搜索并重开",
    screenshotAlt: "Vesti 侧栏:以可检索的时间线展示已保存的 AI 对话。",
  },
  enterpriseBand: {
    kicker: "企业服务 · FDE",
    title: "企业知识 Agent,FDE 式交付",
    description:
      "我们的工程师进驻你的团队,用 4–20 周把一个真实场景变成跑得起来、测得出数、可一键复测的 Agent 系统——私有化部署、证据链输出、人工做最终关卡。",
    cta: "了解企业服务",
    stats: [
      { value: "4", label: "个 FDE 交付项目" },
      { value: "1", label: "个国企标杆已交付" },
      { value: "60→2", label: "分钟完成一次合规咨询" },
    ],
  },
  teamBand: {
    kicker: "团队",
    title: "七个学科,一套记忆栈",
    description:
      "来自南京大学、复旦大学、上海交通大学的跨学科团队——AI Hackathon Tour 全国总决赛金奖、GOSIM Paris 2026 Frontier Creators 入选团队。63 天、463 次提交,从零到上线。",
    cta: "认识团队",
    photoAlt: "Vesti 团队在南京。",
  },
  features: {
    kicker: "特性",
    title: "不尚形式,强于回想",
    items: [
      {
        title: "自动捕获",
        description: "对话完成后自动保存,无需手动导出。",
      },
      {
        title: "极速检索",
        description: "秒级找回过去的提示词、笔记与决策。",
      },
      {
        title: "本地优先",
        description: "对话历史只保存在你自己的设备上。",
      },
      {
        title: "清晰复现",
        description: "重开当时的完整会话,而不是从头再来。",
      },
    ],
  },
  demo: {
    kicker: "演示",
    title: "一次看完记忆闭环",
    subtitle: "捕获会话,事后检索,快速找回上下文",
    fallback: "你的浏览器不支持视频播放。",
  },
  skills: {
    kicker: "技能包",
    title: "为编码 Agent 准备的开源技能",
    subtitle:
      "VESTI Skills(MIT 开源)让你的 AI 编程 Agent 记得你做过的一切,并把工作完整交给下一个 Agent。",
    cards: [
      {
        name: "vesti-memory",
        tagline: "为任意 Agent 会话提供记忆召回。",
        description:
          "渐进披露:会话开始自动拉取项目上下文包,再从会话索引逐层下钻到文件定位与具体轮次原文。",
        bullets: [
          "会话开始自动加载上下文包——状态卡、活跃文件、未决问题。",
          "通过 vesti_search、vesti_search_files、vesti_timeline、vesti_get_turns 逐层下钻。",
          "换 Agent 不必重新交代背景,/compact 之后决策理由不再丢失。",
        ],
        requirement: "依赖本机运行 VESTI 桌面端并注册 vesti-mcp。",
      },
      {
        name: "vesti-handoff",
        tagline: "Agent 之间的结构化交接。",
        description:
          "生成 schema 化交接包——goal、state、files、failedPaths、verification、nextSteps,让下一个 Agent 从证据出发,而不是从信任出发。",
        bullets: [
          "核心规则只有一条:接手先验证——先复跑 verification.lastCommand。",
          "独立可用,不依赖 VESTI。",
          "与 VESTI 桌面端 Relay Pack schema 对齐。",
        ],
        requirement: "独立可用——无需 VESTI。",
      },
    ],
    install: {
      kicker: "安装",
      title: "把技能装进你的 Agent",
      description:
        "在 Kimi Code 或 Claude Code 里一条命令搞定,也可以手动拷贝到任意 Agent 的 skills 目录。",
      githubCta: "GitHub — VESTI-SKILLS",
      justTell: {
        label: "直接告诉你的 Agent",
        prompt:
          "从 GitHub 安装 VESTI 技能包:把 https://github.com/firefly-hefeng/VESTI-SKILLS clone 到临时目录,将 skills/vesti-memory 和 skills/vesti-handoff 拷贝到你的用户级 skills 目录(Kimi Code 为 ~/.kimi-code/skills/,Claude Code 为 ~/.claude/skills/,或其他工具的等价目录),然后列出已安装的内容,并告诉我是否需要重启或开启新会话。",
        note: "把这段话发给 Kimi Code、Claude Code、Codex 或任何有 shell 能力的 Agent——它会自己完成 clone、拷贝与验证。技能在新会话中生效。",
      },
      oneCommand: {
        label: "一条命令安装",
        recommended: "推荐",
        kimiNote: "安装后运行 /reload 生效。",
      },
      manual: {
        label: "手动安装",
        headers: ["Agent", "用户级", "项目级"],
        rows: [
          {
            agent: "kimi-code",
            userLevel: "cp -r skills/<name> ~/.kimi-code/skills/",
            projectLevel: ".kimi-code/skills/",
          },
          {
            agent: "Claude Code",
            userLevel: "cp -r skills/<name> ~/.claude/skills/",
            projectLevel: ".claude/skills/",
          },
          {
            agent: "Codex / Cursor 等",
            userLevel: "按该工具的 skills/prompt 约定引入 SKILL.md 全文",
            projectLevel: "同用户级",
          },
        ],
      },
      deps: "vesti-handoff 独立可用;vesti-memory 需要 VESTI 桌面端(或 @vesti/mcp)提供 MCP 工具。",
    },
  },
  download: {
    kicker: "下载",
    title: "两款产品,一个记忆闭环",
    subtitle: "在 Agent 真正工作的地方捕获——浏览器里,以及本机的 CLI 编程 Agent 里",
    extension: {
      meta: "浏览器扩展",
      title: "心迹 Vesti 浏览器扩展",
      description:
        "自动捕获 ChatGPT、Claude、Gemini、DeepSeek、通义、豆包、Kimi、元宝八大平台的网页对话——结构化、可检索、本地优先。",
      store: "Chrome 应用商店",
      installNow: "立即安装",
      manualZip: "手动安装包",
      manualSteps: "手动安装步骤",
      steps: [
        "下载并解压安装包。",
        "打开 chrome://extensions。",
        "开启开发者模式。",
        "选择“加载已解压的扩展程序”并选中该文件夹。",
      ],
    },
    desktop: {
      meta: "桌面应用 · Windows",
      title: "面向编程 Agent 的 Vesti 桌面端",
      description:
        "捕获 Claude Code、Cursor、Kimi Code、Codex 的本机会话,沉淀为 L0–L3 分层记忆系统,内置 MCP server,任何 Agent 均可挂载。",
      downloadWindows: "下载 Windows 版",
      linux: "Linux(AppImage)",
      github: "GitHub",
      smartScreenHint:
        "Windows 首次安装若出现 SmartScreen 蓝色警告,点击「更多信息 → 仍要运行」即可(安装包暂未做代码签名,证书在筹备中)。下载后可核对下方 SHA-256。",
      macosSoon: "macOS 版本即将推出。",
    },
    note: "安装包由官网服务器直接提供:Windows 与自托管 Linux AppImage 现已可用,macOS 版本即将推出。",
  },
  footer: {
    copyright: "© 2026 心迹群岛(南京)智能科技有限公司",
    skills: "技能包",
    enterprise: "企业服务",
    news: "动态",
    about: "关于",
    privacy: "隐私政策",
    github: "GitHub",
    install: "安装",
    userGroup: "用户群",
    userGroupHint: "微信扫码加入用户群。二维码 7 天有效期,失效后我们会尽快更新。",
  },
  enterprise: {
    hero: {
      kicker: "企业服务",
      title: "本地优先的企业知识 Agent,FDE 式交付",
      subtitle:
        "我们的工程师进驻你的团队,用 4–20 周把一个真实场景变成跑得起来、测得出数、可一键复测的 Agent 系统。",
      ctaPrimary: "在 GitHub 上联系",
      ctaSecondary: "交付案例",
      stats: [
        { value: "4", label: "个 FDE 交付项目" },
        { value: "4–20", label: "周交付到生产" },
        { value: "60→2", label: "分钟完成合规咨询" },
        { value: "20/20", label: "国企标杆真实案例评测" },
      ],
    },
    paradigm: {
      kicker: "交付主线",
      steps: [
        {
          title: "采集与解析",
          description: "真实业务数据,合规采集。",
        },
        {
          title: "结构化知识库",
          description: "条款级、可编辑、归你所有。",
        },
        {
          title: "Agent 输出",
          description: "每条结论都带证据链。",
        },
        {
          title: "人工复核",
          description: "最终关卡永远是人。",
        },
      ],
    },
    differentiators: {
      kicker: "为什么是 Vesti",
      title: "三条写进交付标准的承诺",
      items: [
        {
          title: "数据不出边界",
          description:
            "本地化/私有化部署,纯内网可跑,SHA-256 审计留痕;满足国企合规与等保 2.0 要求。",
        },
        {
          title: "AI 绝不越权",
          description:
            "证据分级、无据拒答、分歧上交人工。AI 提建议,人来做决定——我们敢把这条写进交付标准。",
        },
        {
          title: "效果可量化",
          description:
            "每次交付附带回归测试集与量化 KPI;验收是现场一键复测,不是看演示。",
        },
      ],
    },
    cases: {
      kicker: "交付案例",
      title: "已交付、可量化、可复测",
      labels: {
        client: "客户",
        painPoints: "痛点",
        solution: "解决方案",
        outcomes: "量化成果",
      },
      items: [
        {
          tag: "国企合规",
          status: "已交付",
          client: "某大型国有企业(文化央企直属剧院)",
          title: "为国有演艺机构打造的合规 Agent",
          painPoints: [
            "全院规章制度散落,合规咨询靠翻文件。",
            "审查靠人工,慢且标准不一。",
            "国企合规要求高——私有化、信创、等保 2.0 三级。",
          ],
          solution:
            "规章制度全量结构化入库(条款级),在其上构建条款级可溯源的合规问答、文档审查、写作辅助与制度比对——FTS5 + 向量混合召回、证据分级、无依据拒答;主备双模型链路可纯内网运行;SHA-256 审计链。驻场开发四个业务智能体:采购七阶段、采购陪办、合同深审、专家议会。",
          outcomes:
            "135 份制度、8,148 条结构化条款;123 项回归测试全过、真实案例评测 20/20;合规咨询 60 分钟 → 2 分钟、合同审查 3 小时 → 3 分钟;代表甲方参加集团首届 AI 应用创新大赛。",
          gallery: [
            {
              src: "/cases/gov-chat.png",
              caption: "条款级证据可溯源的合规智能问答",
              alt: "合规智能问答界面,回答附条款级引用。",
            },
            {
              src: "/cases/gov-review.png",
              caption: "文档审查",
              alt: "合规 Agent 的文档审查工作台。",
            },
            {
              src: "/cases/gov-library.png",
              caption: "制度知识库",
              alt: "结构化制度知识库界面。",
            },
          ],
        },
        {
          tag: "营销内容",
          status: "正式签约",
          client: "某旅游品牌",
          title: "为旅游品牌打造的社媒内容工作台",
          painPoints: [
            "3 个企业账号(2 小红书 + 1 抖音),内容全靠人工追热点、写稿。",
            "账号不可登录,只能从外部公开采集。",
            "要按各账号风格每日稳定产出。",
          ],
          solution:
            "合规采集(真实浏览器驱动、不读 Cookie、不绕验证码)建成树状可编辑知识库;跨平台热点聚类看板(可跟/观望/避雷);Kimi k3 结构化产出每日脚本与推文;多 Agent 审稿,≥85 分才放行;交互式改稿,并按租户时区推送每日简报。",
          outcomes:
            "141 条语料建库,知识库质量分 94.4;生成成品经主编审核 86–92 分全部通过;一键公网预览 + 端到端验证脚本。",
        },
        {
          tag: "工业文档",
          status: "已交付 v2 终版",
          client: "某轮胎制造商(出口认证)",
          title: "工业标准 OCR Agent",
          painPoints: [
            "78 页扫描版菲律宾国标 PNS 25:1994 需要全自动结构化。",
            "每项参数必须带条款号、英文原文逐字证据、页码、置信度。",
            "不允许编造。",
          ],
          solution:
            "PyMuPDF 160 DPI 渲染 + RapidOCR 本地识别,按坐标重建表格;DeepSeek 推理模型全文逐条抽取;确定性校验 + LLM 复核,不合格重抽取,多轮质检;与人工值不一致的一律标记“需要人工审核”。",
          outcomes:
            "48 项参数逐项带证据链与页码溯源;22 项解析参数中 21 项高置信;v2 定稿交付,甲方反馈后迭代为审核口径。",
        },
        {
          tag: "自用工具 · 可产品化",
          status: "v2 已日常使用",
          client: "蜂觅 BeeMi(KOL 发现,自用)",
          title: "KOL 发现 Agent",
          painPoints: [
            "推广选达人靠人工刷平台。",
            "一句话需求(“小红书情侣博主、5 万粉以上、预算 2 万、30 个”)到可联系清单之间没有系统。",
          ],
          solution:
            "自然语言需求 → 结构化查找条件(规则兜底 + Kimi AI 解析)→ WebBridge 合规采集公开主页 → S–D 互动评级与 CPM 估算 → 筛选、跟进并导出商务物料。零依赖本地应用,双击即用。",
          outcomes:
            "v2 日常在用,25 条真实达人入库,支撑 GEO 推广业务交付链路——强调链路跑通,而非数据规模。",
        },
      ],
    },
    fde: {
      kicker: "交付模式",
      title: "驻场工程师交付,不是 PPT",
      subtitle: "4–20 周驻场节奏——交接不绑定我们",
      steps: [
        {
          title: "驻场调研",
          description: "工程师进驻你的团队,先砍掉伪需求,再谈开发。",
        },
        {
          title: "私有化构建",
          description: "系统为你的场景而建,在你的边界之内。",
        },
        {
          title: "带回归测试集交付",
          description: "每次交付附带回归测试集与量化 KPI。",
        },
        {
          title: "一键复测验收",
          description:
            "验收是现场一键复测。合同可约定验收指标与复测方式;交接包含完整代码、运行库与文档,不绑定我们。",
        },
      ],
    },
    verticals: {
      kicker: "主攻方向",
      title: "三个垂域",
      items: [
        {
          title: "国企/事业单位制度合规",
          description: "主攻方向——一个标杆,到集团体系,到国资市场。",
        },
        {
          title: "营销内容生产与达人投放",
          description: "现金流业务——内容工作台与达人工具。",
        },
        {
          title: "工业标准文档结构化",
          description: "技术名片——工业级文档结构化。",
        },
      ],
    },
    platform: {
      kicker: "平台层",
      title: "每次交付背后的记忆栈",
      items: [
        {
          name: "@vesti/memory-core",
          title: "记忆内核授权",
          description:
            "Vesti 记忆内核以可嵌入包的形式授权——无 Electron、无网络依赖。LLM 与 embedding 均为注入式接口,可跑在你自己的模型上,嵌入任何企业 Agent 系统。",
        },
        {
          name: "vesti-mcp",
          title: "MCP 集成",
          description:
            "生产级 MCP server,让组织内每个 Agent 挂载统一记忆层。任何 MCP 兼容的 Agent 均可接入,跨工具、跨团队共享召回。",
        },
        {
          name: "vesti-gate + 认证服务端",
          title: "私有化部署",
          description:
            "vesti-gate 是把 key 藏在服务端的流式 LLM 网关,逐请求计量、按 IP 限流、多上游 failover——已在生产环境运行。配套会员/认证服务端规格:PostgreSQL 16、Ed25519 JWT、微信/QQ OAuth,支持完全私有化部署。",
        },
        {
          name: "RL 数据管线",
          title: "数据合作",
          description:
            "建立在用户显式同意之上的会话数据采集管线,PII 双端过滤,境内服务器存储,面向 RL 训练场景。",
        },
      ],
    },
    contact: {
      title: "在做需要记忆的 Agent?",
      subtitle: "通过 GitHub 联系我们——开个 issue 或发起讨论,我们会回复",
      cta: "通过 GitHub 联系",
      teamNote:
        "由南京大学、复旦大学、上海交通大学团队打造——AI Hackathon Tour 全国总决赛金奖、GOSIM Paris 2026 Frontier Creators 入选团队。",
      teamNoteLink: "认识团队",
    },
  },
  about: {
    hero: {
      kicker: "关于",
      title: "一支真把东西做出来的团队",
      subtitle:
        "Vesti 是本地优先的 AI 记忆基础设施,由一支来自南京大学、复旦大学、上海交通大学的跨学科团队在南京打造。",
    },
    teamIntro: {
      kicker: "团队",
      title: "七个学科,一套记忆栈",
      description:
        "7 名核心成员、6 人全职,覆盖计算生物学、软件工程、人工智能、金融、社会学、哲学、信息技术 7 个学科。团队共事 2–3 年以上,63 天、463 次提交,从零到上线。",
      photoAlt: "Vesti 团队在南京。",
    },
    company: {
      kicker: "公司",
      facts: [
        { label: "公司", value: "心迹群岛(南京)智能科技有限公司" },
        {
          label: "成立",
          value: "2026 年 4 月 28 日 · 注册于南京市建邺区科技企业孵化器",
        },
        {
          label: "定位",
          value: "本地优先的 AI 记忆基础设施与下游 Agent 服务",
        },
        { label: "开源", value: "核心代码 MIT 开源 · GitHub 388 stars" },
        { label: "知识产权", value: "2 项软件著作权申请中 · 1 项专利" },
        {
          label: "商业化",
          value: "Freemium 订阅制,2026 年 7 月启动付费——首月付费用户 100+,留存率 52%",
        },
      ],
    },
    members: {
      kicker: "核心成员",
      items: [
        {
          name: "He Feng · 何锋",
          role: "创始人 & CEO",
          school: "南京大学 计算生物学",
          highlight:
            "iGEM 国际大赛金牌 + AI 赛道单项最佳(学生队长);负责系统架构与 Agent 流水线;持有专利 1 项。",
          photoAlt: "何锋个人照片",
        },
        {
          name: "Cao Zheng · 曹政",
          role: "CTO · 系统架构",
          school: "南京大学 软件工程",
          highlight:
            "美团跨端框架开发实习,覆盖 iOS/Android/鸿蒙三端;南京大学 OpenHarmony 俱乐部主席。",
        },
        {
          name: "Su Yicheng · 苏祎成",
          role: "产品架构 · Agent",
          school: "复旦大学 哲学 + 统计",
          highlight:
            "设计 Agent 决策链与分类置信度体系;建立 Prompt-as-Code 版本化管理机制。",
        },
        {
          name: "Gong Zihan · 龚子涵",
          role: "AI 工程 · RAG",
          school: "复旦大学 金融 + AI",
          highlight: "负责本地 RAG 检索管线——Recall@5 = 1.000,万条向量扫描 < 40ms。",
        },
        {
          name: "Huang Chenxi · 黄晨熙",
          role: "设计 · UX",
          school: "南京大学 社会学",
          highlight: "负责用户研究与产品视觉;建立 800+ 种子用户反馈机制。",
        },
        {
          name: "Fan Sizhe · 范思哲",
          role: "运营 · 增长",
          school: "南京大学 信息技术",
          highlight:
            "科大讯飞校园大使;腾讯青科实训营产品经理;AI Hackathon Tour 全国联赛队长。",
        },
        {
          name: "Wang Xinyu · 王馨雨",
          role: "研发",
          school: "上海交通大学 直博(计算生物学)",
          highlight:
            "中国国际大学生创新大赛国家级铜奖 ×2;全国大学生生命科学竞赛国家二等奖 ×2。",
        },
      ],
    },
    milestones: {
      kicker: "里程碑",
      items: [
        {
          date: "2026.02",
          title: "项目启动",
          description: "跨学科团队组建,63 天完成核心开发。",
        },
        {
          date: "2026.04",
          title: "上架与金奖",
          description:
            "产品上架 Chrome Web Store;AI Hackathon Tour 全国总决赛金奖(赛道最佳),周志华院士等出席颁奖;公司注册成立,落地建邺区孵化器。",
        },
        {
          date: "2026.05",
          title: "GOSIM 巴黎",
          description:
            "入选 GOSIM Paris 2026 Frontier Creators Spotlight,赴巴黎 Station F 展出,获 Audience Favorite Award。",
        },
        {
          date: "2026.06",
          title: "奖项与种子资金",
          description:
            "南客松 S2 赛道金奖(阶跃星辰特别金奖);建邺创业大赛一等奖(参赛项目第一,奖金 2 万元);获 Delta X 种子期资助。",
        },
        {
          date: "2026.07",
          title: "产品矩阵与付费",
          description:
            "扩展 + 桌面应用 + Skill + MCP 产品矩阵上线;启动付费运营,首月付费用户 100+,留存率 52%。",
        },
      ],
      mediaKicker: "媒体与社区",
      media: [
        "《人民日报》《南京发布》等媒体报道。",
        "中科院他山青年系列专题分享。",
        "受邀入驻南京大学科创实验室。",
      ],
    },
    gallery: {
      kicker: "瞬间",
      items: [
        { caption: "Vesti 团队在南京。" },
        { caption: "AI Hackathon Tour 全国总决赛金奖颁奖。" },
        { caption: "与 AI Hackathon Tour 决赛选手合影。" },
        { caption: "GOSIM 2026,巴黎 Station F 的 Vesti 展台。" },
        { caption: "GOSIM Paris 2026 Frontier Creators Spotlight 证书。" },
        { caption: "GOSIM Paris 2026 Audience Favorite Award 颁奖。" },
        { caption: "南客松 S2 金奖。" },
      ],
    },
    contact: {
      kicker: "联系方式",
      title: "与我们合作",
      person: "何锋,创始人 & CEO",
      address: "南京市建邺区永初路 8 号 T4 栋 12 层 1205-78",
    },
  },
  news: {
    kicker: "动态",
    title: "发布与动态",
    backHome: "← 返回首页",
  },
}
