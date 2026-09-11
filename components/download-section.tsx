"use client"

import { useState } from "react"
import { ChevronDown, Download, ExternalLink } from "lucide-react"

import {
  getPrimaryInstallHref,
  isExternalPrimaryInstall,
  marketingLinks,
} from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function DownloadSection() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.download : en.download
  const [isOpen, setIsOpen] = useState(false)
  const primaryHref = getPrimaryInstallHref()
  const isExternal = isExternalPrimaryInstall()

  return (
    <section
      id="download"
      className="scroll-mt-24 px-6 py-16 md:px-8 md:py-20"
    >
      <div className="page-shell">
        <div className="mx-auto mb-10 max-w-[620px] text-center">
          <p className="section-kicker">{d.kicker}</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            {d.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[38ch] text-balance text-base leading-7 text-text-secondary">
            {d.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="lovable-panel flex flex-col p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
              {d.extension.meta} · v{marketingLinks.extensionVersion}
            </p>
            <h3 className="mt-3 text-[1.35rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
              {d.extension.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {d.extension.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={primaryHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="lovable-button-primary gap-2"
              >
                {isExternal ? d.extension.store : d.extension.installNow}
                {isExternal ? (
                  <ExternalLink className="h-4 w-4" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
              </a>
              <a
                href={marketingLinks.extensionDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary gap-2"
              >
                <Download className="h-4 w-4" />
                {d.extension.manualZip}
              </a>
            </div>

            <div className="mt-auto pt-6">
              <div className="border-t border-border-subtle pt-5">
                <button
                  type="button"
                  onClick={() => setIsOpen((value) => !value)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  {d.extension.manualSteps}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-150 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <ol className="mt-4 space-y-2 text-sm leading-7 text-text-secondary">
                    {d.extension.steps.map((step, index) => (
                      <li key={step}>
                        {index === 1 ? (
                          <>
                            {step.split("chrome://extensions")[0]}
                            <code className="rounded bg-[rgba(252,251,248,0.92)] px-1.5 py-0.5 font-mono text-xs text-text-primary">
                              chrome://extensions
                            </code>
                            {step.split("chrome://extensions")[1]}
                          </>
                        ) : (
                          step
                        )}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </article>

          <article className="lovable-panel flex flex-col p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
              {d.desktop.meta} · v{marketingLinks.appVersion}
            </p>
            <h3 className="mt-3 text-[1.35rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">
              {d.desktop.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {d.desktop.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={marketingLinks.appDownloads.windows}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-primary gap-2"
              >
                <Download className="h-4 w-4" />
                {d.desktop.downloadWindows}
              </a>
              <a
                href={marketingLinks.appDownloads.linux}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary gap-2"
              >
                <Download className="h-4 w-4" />
                {d.desktop.linux}
              </a>
              <a
                href={marketingLinks.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary gap-2"
              >
                {d.desktop.github}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-auto pt-6">
              <div className="border-t border-border-subtle pt-5">
                <p className="text-[11px] leading-5 text-text-tertiary">
                  {d.desktop.smartScreenHint}
                </p>
                <p className="mt-2 break-all font-mono text-[11px] leading-5 text-text-secondary select-all">
                  SHA-256: {marketingLinks.appSha256}
                </p>
                <p className="mt-2 font-mono text-[11px] leading-5 text-text-tertiary">
                  {d.desktop.macosSoon}
                </p>
              </div>
            </div>
          </article>
        </div>

        <p className="mx-auto mt-6 max-w-[620px] text-center text-xs leading-6 text-text-tertiary">
          {d.note}
        </p>
      </div>
    </section>
  )
}
