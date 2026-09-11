"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { newsPostsByLang } from "@/lib/news-posts"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function NewsStrip() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.newsStrip : en.newsStrip
  const latest = newsPostsByLang[lang][0]

  if (!latest) {
    return null
  }

  return (
    <div className="px-6 md:px-8">
      <div className="page-shell">
        <Link
          href={`/news#${latest.slug}`}
          className="group flex items-center justify-center gap-3 rounded-full border border-border-subtle bg-[rgba(252,251,248,0.72)] px-4 py-2 text-[13px] text-text-secondary transition-colors duration-150 hover:text-text-primary"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
            {d.label}
          </span>
          <span className="truncate">{latest.title}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
