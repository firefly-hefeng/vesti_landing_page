"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function EnterpriseBand() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.enterpriseBand : en.enterpriseBand

  return (
    <section className="px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="lovable-panel grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center md:p-8">
          <div className="max-w-[560px]">
            <p className="section-kicker">{d.kicker}</p>
            <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-text-primary">
              {d.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary md:text-base md:leading-7">
              {d.description}
            </p>
            <Link
              href="/enterprise"
              className="lovable-button-secondary mt-6 gap-2 px-4 py-2.5 text-[13px]"
            >
              {d.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-3 md:grid-cols-1">
            {d.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.72)] px-4 py-3.5"
              >
                <dd className="font-mono text-[1.5rem] font-medium tracking-[-0.03em] text-text-primary">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-[12px] leading-5 text-text-secondary">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
