"use client"

import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

import {
  assetPath,
  getPrimaryInstallHref,
  isExternalPrimaryInstall,
  marketingLinks,
} from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function Hero() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.hero : en.hero
  const installHref = getPrimaryInstallHref()
  const isExternal = isExternalPrimaryInstall()

  return (
    <section className="px-6 pb-14 pt-16 md:px-8 md:pb-16 md:pt-20">
      <div className="page-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-kicker">{d.kicker}</p>
          <h1 className="mt-4 text-balance text-[clamp(2.8rem,6vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-text-primary">
            {d.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[44ch] text-balance text-[1.05rem] leading-7 text-text-secondary">
            {d.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={installHref}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="lovable-button-primary min-w-[148px] gap-2"
            >
              {d.install}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="lovable-button-secondary min-w-[148px] gap-2">
              <Play className="h-4 w-4" />
              {d.watchDemo}
            </a>
          </div>
        </div>

        <div className="mt-10 lovable-media-frame p-3 md:mt-12 md:p-4">
          <div className="mb-3 flex items-center justify-between rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.9)] px-4 py-3">
            <p className="text-sm font-medium text-text-primary">{d.libraryTitle}</p>
            <p className="text-sm text-text-tertiary">{d.libraryHint}</p>
          </div>
          <Image
            src={assetPath(marketingLinks.libraryScreenshotUrl)}
            alt={d.screenshotAlt}
            width={1388}
            height={868}
            className="w-full rounded-[1.1rem] border border-border-subtle"
            priority
          />
        </div>
      </div>
    </section>
  )
}
