"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function TeamBand() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.teamBand : en.teamBand

  return (
    <section className="px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="lovable-panel grid gap-6 p-6 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:items-center md:gap-8 md:p-8">
          <div className="overflow-hidden rounded-xl border border-border-subtle">
            <Image
              src="/about/team.jpg"
              alt={d.photoAlt}
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">{d.kicker}</p>
            <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-text-primary">
              {d.title}
            </h2>
            <p className="mt-3 max-w-[56ch] text-sm leading-6 text-text-secondary md:text-base md:leading-7">
              {d.description}
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary underline decoration-border-default underline-offset-4 transition-colors duration-150 hover:decoration-text-primary"
            >
              {d.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
