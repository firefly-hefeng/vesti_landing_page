"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users } from "lucide-react"

import { assetPath, marketingLinks } from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

export function Footer() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.footer : en.footer
  const [qrOpen, setQrOpen] = useState(false)

  return (
    <footer className="px-6 pb-10 pt-2 md:px-8 md:pb-12">
      <div className="page-shell">
        <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Image
              src={assetPath("/logo.svg")}
              alt="Vesti logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-sm font-medium text-text-primary">Vesti</span>
            <span className="text-[13px] text-text-tertiary">
              {d.copyright}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <Link
              href={assetPath("/#skills")}
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.skills}
            </Link>
            <Link
              href={assetPath("/enterprise")}
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.enterprise}
            </Link>
            <Link
              href={assetPath("/news")}
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.news}
            </Link>
            <Link
              href={assetPath("/about")}
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.about}
            </Link>
            <Link
              href={assetPath("/privacy")}
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.privacy}
            </Link>
            <a
              href={marketingLinks.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.github}
            </a>
            <Link
              href={assetPath("/#download")}
              className="transition-colors duration-150 hover:text-text-primary"
            >
              {d.install}
            </Link>
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-text-tertiary transition-colors duration-150 hover:text-text-secondary"
            >
              苏ICP备2026054650号-1
            </a>
            <span
              className="relative"
              onMouseEnter={() => setQrOpen(true)}
              onMouseLeave={() => setQrOpen(false)}
            >
              <button
                type="button"
                onClick={() => setQrOpen((value) => !value)}
                aria-expanded={qrOpen}
                className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-text-primary"
              >
                <Users className="h-3.5 w-3.5" />
                {d.userGroup}
              </button>
              {qrOpen && (
                <div className="absolute bottom-full right-0 z-30 mb-3 w-52 rounded-2xl border border-border-default bg-[rgba(252,251,248,0.98)] p-3 shadow-[0_16px_40px_-16px_rgba(31,36,64,0.35)]">
                  <Image
                    src={assetPath("/user-group-qr.jpg")}
                    alt={d.userGroup}
                    width={416}
                    height={618}
                    className="w-full rounded-xl"
                  />
                  <p className="mt-2 text-xs leading-5 text-text-tertiary">
                    {d.userGroupHint}
                  </p>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
