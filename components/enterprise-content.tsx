"use client"

import Image from "next/image"
import { ArrowRight, ArrowUpRight, Database, KeyRound, Network, Package } from "lucide-react"

import { marketingLinks } from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

const platformIcons = [Package, Network, KeyRound, Database]

export function EnterpriseContent() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.enterprise : en.enterprise

  return (
    <main className="px-6 py-16 md:px-8 md:py-20">
      <div className="page-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-kicker">{d.hero.kicker}</p>
          <h1 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-text-primary">
            {d.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-balance text-[1.05rem] leading-7 text-text-secondary">
            {d.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={marketingLinks.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lovable-button-primary min-w-[148px] gap-2"
            >
              {d.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#cases"
              className="lovable-button-secondary min-w-[148px] gap-2"
            >
              {d.hero.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {d.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.72)] px-4 py-4 text-center"
            >
              <dd className="font-mono text-[1.6rem] font-medium tracking-[-0.03em] text-text-primary">
                {stat.value}
              </dd>
              <dt className="mt-1 text-[12px] leading-5 text-text-secondary">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <section className="mt-14 lovable-panel p-6 md:p-8">
          <p className="section-kicker">{d.paradigm.kicker}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {d.paradigm.steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.72)] p-5"
              >
                <p className="font-mono text-[11px] tracking-[0.14em] text-text-tertiary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[1.05rem] font-medium tracking-[-0.02em] text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
                {index < d.paradigm.steps.length - 1 && (
                  <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-text-tertiary md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="section-kicker">{d.differentiators.kicker}</p>
            <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
              {d.differentiators.title}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {d.differentiators.items.map((item, index) => (
              <article key={item.title} className="lovable-card p-6">
                <p className="font-mono text-[11px] tracking-[0.14em] text-text-tertiary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[1.1rem] font-medium leading-7 tracking-[-0.02em] text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="cases" className="mt-16 scroll-mt-24">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="section-kicker">{d.cases.kicker}</p>
            <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
              {d.cases.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {d.cases.items.map((item) => (
              <article
                key={item.title}
                className="lovable-panel flex flex-col p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border-default bg-[rgba(28,28,28,0.03)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-primary">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-text-tertiary">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-4 text-[1.3rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium leading-6 text-text-secondary">
                  {d.cases.labels.client}: {item.client}
                </p>

                <div className="mt-5 space-y-5 border-t border-border-subtle pt-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                      {d.cases.labels.painPoints}
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-text-secondary">
                      {item.painPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                      {d.cases.labels.solution}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {"gallery" in item && item.gallery && (
                  <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                    {item.gallery.map((shot) => (
                      <figure key={shot.src} className="shrink-0">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={960}
                          height={600}
                          className="h-40 w-auto rounded-lg border border-border-subtle"
                        />
                        <figcaption className="mt-1.5 max-w-[240px] text-[12px] leading-5 text-text-tertiary">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-5">
                  <div className="rounded-xl border border-border-subtle bg-[rgba(28,28,28,0.02)] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                      {d.cases.labels.outcomes}
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-6 text-text-primary">
                      {item.outcomes}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="fde" className="mt-16 scroll-mt-24">
          <div className="lovable-panel p-6 md:p-10">
            <div className="max-w-[640px]">
              <p className="section-kicker">{d.fde.kicker}</p>
              <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
                {d.fde.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-text-secondary">
                {d.fde.subtitle}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {d.fde.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.72)] p-5"
                >
                  <p className="font-mono text-[11px] tracking-[0.14em] text-text-tertiary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[1.05rem] font-medium tracking-[-0.02em] text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="section-kicker">{d.verticals.kicker}</p>
          <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
            {d.verticals.title}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.verticals.items.map((item) => (
              <article key={item.title} className="lovable-card p-6">
                <h3 className="text-[1.1rem] font-medium leading-7 tracking-[-0.02em] text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="section-kicker">{d.platform.kicker}</p>
            <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
              {d.platform.title}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {d.platform.items.map((capability, index) => {
              const Icon = platformIcons[index % platformIcons.length]

              return (
                <article key={capability.name} className="lovable-card p-6 md:p-7">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.92)]">
                    <Icon className="h-4 w-4 text-text-primary" />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {capability.name}
                  </p>
                  <h3 className="mt-2 text-[1.25rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {capability.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
            {d.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-balance text-base leading-7 text-text-secondary">
            {d.contact.subtitle}
          </p>
          <p className="mx-auto mt-3 max-w-[52ch] text-balance text-[13px] leading-6 text-text-tertiary">
            {d.contact.teamNote}{" "}
            <a
              href="/about"
              className="underline decoration-border-default underline-offset-4 transition-colors duration-150 hover:text-text-secondary"
            >
              {d.contact.teamNoteLink}
            </a>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={marketingLinks.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lovable-button-primary min-w-[148px] gap-2"
            >
              {d.contact.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
