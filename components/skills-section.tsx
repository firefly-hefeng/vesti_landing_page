"use client"

import { ArrowUpRight, ChevronDown, GitBranch, Layers } from "lucide-react"

import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

const skillsRepoUrl = "https://github.com/firefly-hefeng/VESTI-SKILLS"

const skillIcons = [Layers, GitBranch]

const oneCommandInstalls = [
  {
    agent: "Kimi Code",
    lines: ["/plugins install https://github.com/firefly-hefeng/VESTI-SKILLS"],
    noteKey: "kimi" as const,
  },
  {
    agent: "Claude Code",
    lines: [
      "/plugin marketplace add firefly-hefeng/VESTI-SKILLS",
      "/plugin install vesti-skills@vesti-skills",
    ],
    noteKey: null,
  },
]

export function SkillsSection() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.skills : en.skills

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-16 md:px-8 md:py-20"
    >
      <div className="page-shell">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <p className="section-kicker">{d.kicker}</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            {d.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-balance text-base leading-7 text-text-secondary">
            {d.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {d.cards.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length]

            return (
              <article key={skill.name} className="lovable-card p-6 md:p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.92)]">
                  <Icon className="h-4 w-4 text-text-primary" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                  {skill.name}
                </p>
                <h3 className="mt-2 text-[1.25rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                  {skill.tagline}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {skill.description}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-text-secondary">
                  {skill.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border-subtle pt-4 text-[13px] leading-6 text-text-tertiary">
                  {skill.requirement}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-4 lovable-panel p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
            <div>
              <p className="section-kicker">{d.install.kicker}</p>
              <h3 className="mt-3 text-[1.25rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                {d.install.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {d.install.description}
              </p>
              <a
                href={skillsRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary mt-5 gap-2 px-4 py-2.5 text-[13px]"
              >
                {d.install.githubCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="min-w-0">
              <div className="rounded-xl border border-border-default bg-[rgba(252,251,248,0.9)]">
                <div className="border-b border-border-subtle px-4 py-2.5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                    {d.install.justTell.label}
                  </p>
                </div>
                <div className="p-4">
                  <div className="rounded-lg border border-border-subtle bg-[rgba(28,28,28,0.92)] px-3.5 py-2.5">
                    <p className="whitespace-pre-wrap font-mono text-[12.5px] leading-6 text-[rgba(247,244,237,0.92)]">
                      {d.install.justTell.prompt}
                    </p>
                  </div>
                  <p className="mt-2 text-[12px] leading-5 text-text-tertiary">
                    {d.install.justTell.note}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-border-default bg-[rgba(252,251,248,0.9)]">
                <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2.5">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                    {d.install.oneCommand.label}
                  </p>
                  <span className="rounded-full border border-border-subtle bg-[rgba(28,28,28,0.03)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
                    {d.install.oneCommand.recommended}
                  </span>
                </div>
                <div className="space-y-3 p-4">
                  {oneCommandInstalls.map((install) => (
                    <div key={install.agent}>
                      <p className="mb-1.5 text-[13px] font-medium text-text-primary">
                        {install.agent}
                      </p>
                      <div className="overflow-x-auto rounded-lg border border-border-subtle bg-[rgba(28,28,28,0.92)] px-3.5 py-2.5">
                        {install.lines.map((line) => (
                          <code
                            key={line}
                            className="block whitespace-nowrap font-mono text-[12.5px] leading-6 text-[rgba(247,244,237,0.92)]"
                          >
                            {line}
                          </code>
                        ))}
                      </div>
                      {install.noteKey === "kimi" && (
                        <p className="mt-1.5 text-[12px] leading-5 text-text-tertiary">
                          {d.install.oneCommand.kimiNote}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <details className="group mt-4 rounded-xl border border-border-subtle">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary [&::-webkit-details-marker]:hidden">
                  {d.install.manual.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-150 group-open:rotate-180" />
                </summary>
                <div className="border-t border-border-subtle px-4 py-4">
                  <div className="overflow-x-auto rounded-lg border border-border-subtle bg-[rgba(28,28,28,0.92)] px-3.5 py-2.5">
                    <code className="whitespace-nowrap font-mono text-[12.5px] leading-6 text-[rgba(247,244,237,0.92)]">
                      git clone https://github.com/firefly-hefeng/VESTI-SKILLS.git
                    </code>
                  </div>
                  <div className="mt-3 overflow-x-auto rounded-lg border border-border-subtle">
                    <table className="w-full min-w-[520px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-border-subtle bg-[rgba(28,28,28,0.02)]">
                          {d.install.manual.headers.map((header) => (
                            <th
                              key={header}
                              className="px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {d.install.manual.rows.map((row) => (
                          <tr
                            key={row.agent}
                            className="border-b border-border-subtle last:border-b-0"
                          >
                            <td className="px-4 py-3 text-sm font-medium text-text-primary">
                              {row.agent}
                            </td>
                            <td className="px-4 py-3 font-mono text-[12px] leading-5 text-text-secondary">
                              {row.userLevel}
                            </td>
                            <td className="px-4 py-3 font-mono text-[12px] leading-5 text-text-secondary">
                              {row.projectLevel}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              <p className="mt-4 text-[13px] leading-6 text-text-tertiary">
                {d.install.deps}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
