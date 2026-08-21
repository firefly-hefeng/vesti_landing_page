"use client"

import { useState } from "react"
import { AppWindow, ChevronDown, Download, ExternalLink, Puzzle } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { messages } from "@/lib/i18n"
import { marketingLinks } from "@/lib/marketing-config"

const appPlatforms = [
  { id: "windows", href: marketingLinks.appDownloads.windows, primary: true },
  { id: "macos", href: marketingLinks.appDownloads.macos, primary: false },
  { id: "linux", href: marketingLinks.appDownloads.linux, primary: false },
] as const

const cardClass =
  "group rounded-2xl border border-border-default bg-[rgba(252,251,248,0.72)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(66,83,202,0.35)] hover:shadow-[0_16px_40px_-16px_rgba(66,83,202,0.28)]"

export function DownloadSection() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useLanguage()
  const copy = messages[locale].download

  return (
    <section id="download" className="scroll-mt-24 px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="lovable-panel p-6 md:p-8">
          <div className="max-w-[620px]">
            <p className="section-kicker">{copy.kicker}</p>
            <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-base leading-7 text-text-secondary">{copy.description}</p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <article className={cardClass}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf0ff] text-[#4253ca] transition-colors duration-200 group-hover:bg-[#4253ca] group-hover:text-white">
                    <AppWindow className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-text-primary">{copy.app}</h3>
                    <p className="text-xs text-text-tertiary">v{marketingLinks.appVersion}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#edf0ff] px-2.5 py-1 text-[10px] font-medium text-[#4253ca]">{copy.beta}</span>
              </div>
              <p className="mt-4 min-h-[72px] text-sm leading-6 text-text-secondary">{copy.appBody}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {appPlatforms.map((platform) =>
                  platform.href ? (
                    <a
                      key={platform.id}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${platform.primary ? "lovable-button-primary" : "lovable-button-secondary"} gap-1.5 px-3 py-2 text-xs`}
                    >
                      <Download className="h-3.5 w-3.5" />
                      {copy[platform.id]}
                    </a>
                  ) : (
                    <button
                      key={platform.id}
                      type="button"
                      disabled
                      title={copy.comingSoon}
                      className="lovable-button-secondary cursor-not-allowed gap-1.5 px-3 py-2 text-xs opacity-45"
                    >
                      {copy[platform.id]}
                    </button>
                  ),
                )}
              </div>
            </article>

            <article className={cardClass}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f7ec] text-[#257a45] transition-colors duration-200 group-hover:bg-[#257a45] group-hover:text-white">
                    <Puzzle className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-text-primary">{copy.extension}</h3>
                    <p className="text-xs text-text-tertiary">v{marketingLinks.extensionVersion}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#e9f7ec] px-2.5 py-1 text-[10px] font-medium text-[#257a45]">{copy.available}</span>
              </div>
              <p className="mt-4 min-h-[72px] text-sm leading-6 text-text-secondary">{copy.extensionBody}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={marketingLinks.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lovable-button-primary gap-1.5 px-3 py-2 text-xs"
                >
                  {copy.store}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={marketingLinks.extensionDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lovable-button-secondary gap-1.5 px-3 py-2 text-xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  {copy.manual}
                </a>
              </div>
            </article>
          </div>

          <p className="mt-4 text-xs leading-6 text-text-tertiary">{copy.releaseHint}</p>

          <div className="mt-5 border-t border-border-subtle pt-5">
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-expanded={isOpen}
            >
              {copy.manualTitle}
              <ChevronDown className={`h-4 w-4 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <ol className="mt-4 space-y-2 text-sm leading-7 text-text-secondary">
                {copy.manualSteps.map((step, index) => (
                  <li key={step}>{index + 1}. {step}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
