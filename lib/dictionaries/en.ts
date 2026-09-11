export const en = {
  nav: {
    features: "Features",
    demo: "Demo",
    skills: "Skills",
    enterprise: "Enterprise",
    news: "News",
    about: "About",
    github: "GitHub",
    install: "Install",
  },
  newsStrip: {
    label: "News",
  },
  hero: {
    kicker: "Vesti · working memory for agents",
    title: "The working-memory engine for domain-specific agents.",
    subtitle:
      "Vesti captures every agent conversation, organizes it into structured local memory, and serves it back to any agent that needs the context.",
    install: "Install",
    watchDemo: "Watch demo",
    libraryTitle: "Vesti library",
    libraryHint: "Search and reopen",
    screenshotAlt:
      "Vesti side panel showing saved AI conversations in a searchable timeline.",
  },
  enterpriseBand: {
    kicker: "Enterprise · FDE",
    title: "Enterprise knowledge agents, delivered FDE-style.",
    description:
      "Our engineers embed with your team and turn one real scenario into a running, measurable, re-testable agent system in 4–20 weeks — private deployment, evidence chains, humans at the final gate.",
    cta: "Explore Enterprise",
    stats: [
      { value: "4", label: "FDE deliveries to date" },
      { value: "1", label: "SOE lighthouse delivered" },
      { value: "60→2", label: "minutes for a compliance answer" },
    ],
  },
  teamBand: {
    kicker: "Team",
    title: "Seven disciplines, one memory stack.",
    description:
      "An interdisciplinary team from Nanjing University, Fudan and SJTU — gold medalists at the AI Hackathon Tour national finals and GOSIM Paris 2026 Frontier Creators. Zero to launch in 63 days, 463 commits.",
    cta: "Meet the team",
    photoAlt: "The Vesti team in Nanjing.",
  },
  features: {
    kicker: "Features",
    title: "Short on ceremony, strong on recall.",
    items: [
      {
        title: "Auto-capture",
        description: "Save finished conversations without exporting anything.",
      },
      {
        title: "Fast search",
        description: "Find past prompts, notes, and decisions in seconds.",
      },
      {
        title: "Local-first",
        description: "Keep your conversation history on your own machine.",
      },
      {
        title: "Clear recall",
        description: "Reopen the exact thread instead of starting over.",
      },
    ],
  },
  demo: {
    kicker: "Demo",
    title: "See the memory loop in one pass.",
    subtitle: "Capture the thread, search it later, and reopen the context fast.",
    fallback: "Your browser does not support video playback.",
  },
  skills: {
    kicker: "Skills",
    title: "Open-source skills for coding agents.",
    subtitle:
      "VESTI Skills (MIT) make your AI coding agent remember everything you have done — and hand the work over to the next agent, intact.",
    cards: [
      {
        name: "vesti-memory",
        tagline: "Memory recall for any agent session.",
        description:
          "Progressive disclosure: pull the project context pack at session start, then drill from session index to file locations to exact turns.",
        bullets: [
          "Auto-loads a context pack on session start — state card, active files, open questions.",
          "Drills down through vesti_search, vesti_search_files, vesti_timeline and vesti_get_turns.",
          "No more re-briefing a new agent, or losing decision rationale after /compact.",
        ],
        requirement:
          "Requires the VESTI desktop app running locally with vesti-mcp registered.",
      },
      {
        name: "vesti-handoff",
        tagline: "Structured handoff between agents.",
        description:
          "Generates a schema-based handoff pack — goal, state, files, failedPaths, verification, nextSteps — so the next agent starts from proof, not trust.",
        bullets: [
          "One rule: verify before you take over — rerun verification.lastCommand first.",
          "Works standalone, no VESTI dependency.",
          "Schema-aligned with the VESTI desktop app's Relay Pack.",
        ],
        requirement: "Standalone — works without VESTI.",
      },
    ],
    install: {
      kicker: "Install",
      title: "Add the skills to your agent.",
      description:
        "One command in Kimi Code or Claude Code — or copy the skills manually into any agent's skills directory.",
      githubCta: "GitHub — VESTI-SKILLS",
      justTell: {
        label: "Just tell your agent",
        prompt:
          "Install the VESTI skills from GitHub: clone https://github.com/firefly-hefeng/VESTI-SKILLS to a temp dir, copy skills/vesti-memory and skills/vesti-handoff into your user-level skills directory (~/.kimi-code/skills/ for Kimi Code, ~/.claude/skills/ for Claude Code, or your tool's equivalent), then list what you installed and tell me whether a restart or new session is needed.",
        note: "Paste this to Kimi Code, Claude Code, Codex or any shell-capable agent — it clones, copies and verifies by itself. Skills activate in a new session.",
      },
      oneCommand: {
        label: "One-command install",
        recommended: "Recommended",
        kimiNote: "Run /reload afterwards to activate.",
      },
      manual: {
        label: "Manual install",
        headers: ["Agent", "User-level", "Project-level"],
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
            agent: "Codex / Cursor / others",
            userLevel:
              "Import the full SKILL.md per the tool's skills/prompt convention",
            projectLevel: "Same as user-level",
          },
        ],
      },
      deps: "vesti-handoff works standalone. vesti-memory needs the VESTI desktop app (or @vesti/mcp) providing the MCP tools.",
    },
  },
  download: {
    kicker: "Download",
    title: "Two products, one memory loop.",
    subtitle:
      "Capture agent work where it happens — in the browser, and in your local CLI coding agents.",
    extension: {
      meta: "Browser extension",
      title: "心迹 Vesti for the browser",
      description:
        "Auto-capture conversations across ChatGPT, Claude, Gemini, DeepSeek, Tongyi, Doubao, Kimi and Yuanbao — structured, searchable, local-first.",
      store: "Chrome Web Store",
      installNow: "Install now",
      manualZip: "Manual ZIP",
      manualSteps: "Manual install steps",
      steps: [
        "Download and unzip the package.",
        "Open chrome://extensions.",
        "Enable Developer mode.",
        "Choose Load unpacked and select the folder.",
      ],
    },
    desktop: {
      meta: "Desktop app · Windows",
      title: "Vesti for coding agents",
      description:
        "Capture Claude Code, Cursor, Kimi Code and Codex sessions into an L0–L3 layered memory system, with a built-in MCP server any agent can mount.",
      downloadWindows: "Download for Windows",
      linux: "Linux (AppImage)",
      github: "GitHub",
      smartScreenHint:
        "Windows may show a blue SmartScreen prompt on first install — click \"More info → Run anyway\" (the installer is not code-signed yet; a certificate is in the works). Verify the installer SHA-256 below.",
      macosSoon: "The macOS build is coming soon.",
    },
    note: "Installers are served directly from this site: Windows and a self-hosted Linux AppImage are available now, with macOS on the way.",
  },
  footer: {
    copyright: "© 2026 Xinji Qundao (Nanjing) Intelligence Technology Co., Ltd.",
    skills: "Skills",
    enterprise: "Enterprise",
    news: "News",
    about: "About",
    privacy: "Privacy",
    github: "GitHub",
    install: "Install",
    userGroup: "User group",
    userGroupHint:
      "Scan with WeChat to join the user group. The QR code is valid for 7 days and will be refreshed when it expires.",
  },
  enterprise: {
    hero: {
      kicker: "Enterprise",
      title: "Local-first enterprise knowledge agents, delivered FDE-style.",
      subtitle:
        "We embed with your team and turn one real scenario into a running, measurable, re-testable agent system in 4–20 weeks.",
      ctaPrimary: "Talk to us on GitHub",
      ctaSecondary: "Case studies",
      stats: [
        { value: "4", label: "FDE deliveries" },
        { value: "4–20", label: "weeks to production" },
        { value: "60→2", label: "min for a compliance answer" },
        { value: "20/20", label: "real-case eval, SOE lighthouse" },
      ],
    },
    paradigm: {
      kicker: "The delivery pipeline",
      steps: [
        {
          title: "Capture & parse",
          description: "Real business data, collected compliantly.",
        },
        {
          title: "Structured knowledge base",
          description: "Clause-level, editable, owned by you.",
        },
        {
          title: "Agent output",
          description: "Every claim carries an evidence chain.",
        },
        {
          title: "Human review",
          description: "The final gate is always a person.",
        },
      ],
    },
    differentiators: {
      kicker: "Why Vesti",
      title: "Three commitments, written into delivery standards.",
      items: [
        {
          title: "Data never leaves your perimeter.",
          description:
            "Local or private deployment, running on a pure intranet, with a SHA-256 audit trail. Passes SOE compliance and MLPS 2.0 requirements.",
        },
        {
          title: "AI never oversteps.",
          description:
            "Evidence grading, refuse-to-answer without basis, disagreements routed to humans. AI advises, humans decide — we dare write this into the delivery standard.",
        },
        {
          title: "Results are measurable.",
          description:
            "Every delivery ships with regression test sets and quantified KPIs. Acceptance is a one-click re-run on site, not a demo.",
        },
      ],
    },
    cases: {
      kicker: "Case studies",
      title: "Delivered, measured, re-runnable.",
      labels: {
        client: "Client",
        painPoints: "Pain points",
        solution: "Solution",
        outcomes: "Outcomes",
      },
      items: [
        {
          tag: "SOE compliance",
          status: "Delivered",
          client:
            "a large state-owned enterprise (a performing-arts institution of a central SOE group)",
          title: "Compliance agent for a state-owned performing-arts institution",
          painPoints: [
            "Rules and regulations scattered across the institution — compliance questions meant digging through files.",
            "Reviews done by hand: slow, and inconsistent between reviewers.",
            "SOE-grade requirements: private deployment, Xinchuang stack, MLPS 2.0 Level 3.",
          ],
          solution:
            "We structured the entire rules system into a clause-level knowledge base, then built clause-level traceable compliance Q&A, document review, writing assistance and regulation comparison on top — FTS5 + vector hybrid recall with evidence grading and refuse-without-basis, a primary/fallback dual-model link that runs fully on the intranet, and a SHA-256 audit chain. Four business agents were developed on site: 7-stage procurement, procurement co-pilot, deep contract review and an expert panel.",
          outcomes:
            "135 documents, 8,148 structured clauses. 123 regression tests passing, 20/20 on the real-case eval. Compliance consultation 60 min → 2 min; contract review 3 h → 3 min. Selected to represent the client at the group's first AI application innovation competition.",
          gallery: [
            {
              src: "/cases/gov-chat.png",
              caption: "Compliance Q&A with clause-level evidence",
              alt: "Compliance Q&A agent answering with clause-level citations.",
            },
            {
              src: "/cases/gov-review.png",
              caption: "Document review",
              alt: "Document review workspace of the compliance agent.",
            },
            {
              src: "/cases/gov-library.png",
              caption: "The rules & regulations knowledge base",
              alt: "Structured knowledge base of rules and regulations.",
            },
          ],
        },
        {
          tag: "Marketing content",
          status: "Signed",
          client: "a travel brand",
          title: "Social-media content workbench for a travel brand",
          painPoints: [
            "Three enterprise accounts (2 Xiaohongshu + 1 Douyin) — trend-watching and drafting all by hand.",
            "Accounts can't be logged into; only external public-data collection is allowed.",
            "Daily output must stay stable, in each account's own voice.",
          ],
          solution:
            "Compliant collection via real-browser automation (no cookies read, no captcha bypass) builds an editable tree-structured knowledge base; a cross-platform hot-topic board clusters trends into use-now / watch / caution; Kimi k3 produces daily scripts and posts in a structured pipeline; a multi-agent review stage only passes pieces scoring ≥85; interactive revision, plus a daily brief in the tenant's timezone.",
          outcomes:
            "141 corpus entries; knowledge-base quality score 94.4. Finished pieces passed editor review at 86–92. One-click public preview plus an end-to-end verification script.",
        },
        {
          tag: "Industrial documents",
          status: "v2 final delivered",
          client: "A tire manufacturer (export certification)",
          title: "Industrial standards OCR agent",
          painPoints: [
            "The 78-page scanned Philippine national standard PNS 25:1994 had to be structured fully automatically.",
            "Every parameter must carry clause number, verbatim English evidence, page number and confidence.",
            "Nothing may be fabricated.",
          ],
          solution:
            "PyMuPDF 160-DPI rendering + RapidOCR local recognition, with tables reconstructed from coordinates; a DeepSeek reasoning model extracts clause by clause over the full text; deterministic checks plus LLM re-review run multi-round quality control with re-extraction on failure; anything inconsistent with human values is flagged “needs human review”.",
          outcomes:
            "48 parameters, each with an evidence chain and page traceability; 21 of 22 parsed parameters at high confidence. v2 final delivered, then iterated to the review standard after client feedback.",
        },
        {
          tag: "Internal tool · productizable",
          status: "v2 in daily use",
          client: "BeeMi (KOL discovery, in-house)",
          title: "KOL discovery agent",
          painPoints: [
            "Finding creators for promotion meant manually browsing platforms.",
            "No system between a one-sentence need (“30 couple bloggers on Xiaohongshu, 50k+ followers, ¥20k budget”) and a contactable list.",
          ],
          solution:
            "Natural-language needs → structured search criteria (rule-based, with Kimi AI parsing) → compliant collection of public profiles via WebBridge → S–D engagement grading with CPM estimates → filter, follow up, and export business materials. A zero-dependency local app, double-click to run.",
          outcomes:
            "v2 in daily use with 25 real creators in the pool, supporting our GEO promotion delivery chain — the point is the working loop, not data scale.",
        },
      ],
    },
    fde: {
      kicker: "Delivery model",
      title: "Forward Deployed Engineers, not slide decks.",
      subtitle:
        "A 4–20 week embedded rhythm — and a handoff that never locks you in.",
      steps: [
        {
          title: "On-site discovery",
          description:
            "We embed with your team and cut the fake requirements before anything gets built.",
        },
        {
          title: "Private build",
          description:
            "The system is built for your scenario, inside your perimeter.",
        },
        {
          title: "Delivery with regression sets",
          description:
            "Every delivery ships with regression test sets and quantified KPIs.",
        },
        {
          title: "One-click acceptance",
          description:
            "Acceptance is a one-click re-run on site. Contracts can fix the metrics and the re-run method; handoff includes full code, runtime and docs — no lock-in to us.",
        },
      ],
    },
    verticals: {
      kicker: "Where we focus",
      title: "Three verticals.",
      items: [
        {
          title: "SOE & public-institution compliance",
          description:
            "The flagship track — one lighthouse, then the group system, then the broader SOE market.",
        },
        {
          title: "Marketing content & creator placement",
          description:
            "The cash-flow line — content workbenches and KOL tooling.",
        },
        {
          title: "Industrial standards structuring",
          description:
            "The technical calling card — industrial-grade document structuring.",
        },
      ],
    },
    platform: {
      kicker: "Platform",
      title: "The memory stack behind every delivery.",
      items: [
        {
          name: "@vesti/memory-core",
          title: "Memory core licensing",
          description:
            "The Vesti memory kernel as an embeddable package — no Electron, no network dependency. LLM and embedding interfaces are injected, so it runs inside any enterprise agent system on your own models.",
        },
        {
          name: "vesti-mcp",
          title: "MCP integration",
          description:
            "A production MCP server that gives every agent in your organization one unified memory layer. Mount it from any MCP-compatible agent and share recall across tools and teams.",
        },
        {
          name: "vesti-gate + auth server",
          title: "Private deployment",
          description:
            "vesti-gate is a streaming LLM gateway that keeps keys server-side, meters per request, rate-limits per IP, and fails over across upstreams — running in production today. Paired with our membership/auth service spec: PostgreSQL 16, Ed25519 JWT, WeChat/QQ OAuth, fully deployable on your own infrastructure.",
        },
        {
          name: "RL data pipeline",
          title: "Data partnership",
          description:
            "A session-data collection pipeline built on explicit user consent, with PII filtering on both ends and storage on servers in mainland China — structured for RL training workloads.",
        },
      ],
    },
    contact: {
      title: "Building agents that need to remember?",
      subtitle:
        "Reach us through GitHub — open an issue or start a discussion and we will respond.",
      cta: "Contact via GitHub",
      teamNote:
        "Built by a team from Nanjing University, Fudan and SJTU — gold medalists at the AI Hackathon Tour national finals and GOSIM Paris 2026 Frontier Creators.",
      teamNoteLink: "Meet the team",
    },
  },
  about: {
    hero: {
      kicker: "About",
      title: "Built by a team that ships.",
      subtitle:
        "Vesti is local-first AI memory infrastructure, built in Nanjing by an interdisciplinary team from Nanjing University, Fudan University and Shanghai Jiao Tong University.",
    },
    teamIntro: {
      kicker: "The team",
      title: "Seven disciplines, one memory stack.",
      description:
        "Seven core members, six full-time — spanning computational biology, software engineering, AI, finance, sociology, philosophy and information technology. The team has worked together for two to three years, and went from zero to launch in 63 days and 463 commits.",
      photoAlt: "The Vesti team in Nanjing.",
    },
    company: {
      kicker: "Company",
      facts: [
        {
          label: "Company",
          value:
            "Xinji Qundao (Nanjing) Intelligence Technology Co., Ltd.",
        },
        {
          label: "Founded",
          value: "April 28, 2026 · Jianye District tech incubator, Nanjing",
        },
        {
          label: "Focus",
          value:
            "Local-first AI memory infrastructure and downstream agent services",
        },
        { label: "Open source", value: "Core code under MIT · 388 GitHub stars" },
        { label: "IP", value: "2 software copyrights pending · 1 patent" },
        {
          label: "Business",
          value:
            "Freemium since 2026-07 — 100+ paying users in month one, 52% retention",
        },
      ],
    },
    members: {
      kicker: "Core members",
      items: [
        {
          name: "He Feng · 何锋",
          role: "Founder & CEO",
          school: "Computational Biology, Nanjing University",
          highlight:
            "iGEM gold medalist and Best in AI track as student team captain. Leads system architecture and the agent pipeline. Holds one patent.",
          photoAlt: "Portrait of He Feng",
        },
        {
          name: "Cao Zheng · 曹政",
          role: "CTO · Systems Architecture",
          school: "Software Engineering, Nanjing University",
          highlight:
            "Cross-platform framework engineering intern at Meituan, shipping across iOS, Android and HarmonyOS. President of NJU's OpenHarmony club.",
        },
        {
          name: "Su Yicheng · 苏祎成",
          role: "Product Architecture · Agent",
          school: "Philosophy & Statistics, Fudan University",
          highlight:
            "Designed the agent decision chain and the classification confidence system. Built the Prompt-as-Code version management workflow.",
        },
        {
          name: "Gong Zihan · 龚子涵",
          role: "AI Engineering · RAG",
          school: "Finance & AI, Fudan University",
          highlight:
            "Owns the local RAG retrieval pipeline — Recall@5 of 1.000, with 10k-vector scans in under 40 ms.",
        },
        {
          name: "Huang Chenxi · 黄晨熙",
          role: "Design · UX",
          school: "Sociology, Nanjing University",
          highlight:
            "Leads user research and product visuals. Built the feedback loop across 800+ seed users.",
        },
        {
          name: "Fan Sizhe · 范思哲",
          role: "Operations · Growth",
          school: "Information Technology, Nanjing University",
          highlight:
            "iFlytek campus ambassador and Tencent youth sci-tech product manager trainee. Team captain at the AI Hackathon Tour national league.",
        },
        {
          name: "Wang Xinyu · 王馨雨",
          role: "R&D",
          school: "Direct PhD track, Computational Biology, SJTU",
          highlight:
            "Two national bronze awards at the China International College Students' Innovation Competition and two national second prizes at the National Undergraduate Life Science Competition.",
        },
      ],
    },
    milestones: {
      kicker: "Milestones",
      items: [
        {
          date: "2026.02",
          title: "Project kickoff",
          description:
            "An interdisciplinary team comes together — core development done in 63 days.",
        },
        {
          date: "2026.04",
          title: "Launch and gold",
          description:
            "Live on the Chrome Web Store. Gold Medal, best in track, at the AI Hackathon Tour national finals — with Academician Zhou Zhihua among the presenters. The company incorporates in the Jianye incubator.",
        },
        {
          date: "2026.05",
          title: "GOSIM Paris",
          description:
            "Selected for the GOSIM Paris 2026 Frontier Creators Spotlight; exhibits at Station F and wins the Audience Favorite Award.",
        },
        {
          date: "2026.06",
          title: "Awards and seed funding",
          description:
            "Gold Medal (StepFun special gold) at Nankesong S2. First prize — top of all entries — at the Jianye Entrepreneurship Competition. Delta X seed funding secured.",
        },
        {
          date: "2026.07",
          title: "Product matrix and paid plans",
          description:
            "Extension, desktop app, Skills and MCP ship as one matrix. Paid plans go live: 100+ paying users in the first month, 52% retention.",
        },
      ],
      mediaKicker: "Media & community",
      media: [
        "Covered by People's Daily and Nanjing Release.",
        "Featured talk at the CAS Tashan Youth series.",
        "Invited into Nanjing University's sci-tech innovation lab.",
      ],
    },
    gallery: {
      kicker: "Moments",
      items: [
        { caption: "The Vesti team in Nanjing." },
        { caption: "Gold Medal ceremony, AI Hackathon Tour national finals." },
        { caption: "With fellow finalists at the AI Hackathon Tour." },
        { caption: "The Vesti booth at Station F, Paris — GOSIM 2026." },
        {
          caption: "Frontier Creators Spotlight certificate, GOSIM Paris 2026.",
        },
        { caption: "Audience Favorite Award, GOSIM Paris 2026." },
        { caption: "Gold Medal, Nankesong S2." },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Work with us.",
      person: "He Feng, Founder & CEO",
      address: "Room 1205-78, T4-12F, 8 Yongchu Rd, Jianye District, Nanjing",
    },
  },
  news: {
    kicker: "News",
    title: "Releases and updates.",
    backHome: "← Back to home",
  },
}

export type Dict = typeof en
