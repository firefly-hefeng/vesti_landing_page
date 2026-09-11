"use client"

import { assetPath, marketingLinks } from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function DemoVideo() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.demo : en.demo

  return (
    <section
      id="demo"
      className="scroll-mt-24 px-6 py-16 md:px-8 md:py-20"
    >
      <div className="page-shell">
        <div className="mx-auto mb-8 max-w-[620px] text-center">
          <p className="section-kicker">{d.kicker}</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            {d.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[32ch] text-balance text-base leading-7 text-text-secondary">
            {d.subtitle}
          </p>
        </div>

        <div className="lovable-media-frame p-3 md:p-4">
          <video
            className="aspect-video w-full rounded-[1.1rem] border border-border-subtle"
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
            poster={assetPath("/library.png")}
          >
            <source src={marketingLinks.demoVideoUrl} type="video/mp4" />
            {d.fallback}
          </video>
        </div>
      </div>
    </section>
  )
}
