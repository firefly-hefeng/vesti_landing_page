"use client"

import Image from "next/image"
import Link from "next/link"

import {
  assetPath,
  getPrimaryInstallHref,
  isExternalPrimaryInstall,
  marketingLinks,
} from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

const navLinkClass =
  "text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"

export function Navbar() {
  const { lang, setLang } = useLanguage()
  const d = lang === "zh" ? zh.nav : en.nav
  const installHref = getPrimaryInstallHref()
  const isExternal = isExternalPrimaryInstall()

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle/80 bg-[rgba(247,244,237,0.82)] backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between px-6 md:px-8">
        <Link href={assetPath("/")} className="flex items-center gap-3">
          <Image
            src={assetPath("/logo.svg")}
            alt="Vesti logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-text-primary">
            Vesti
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link href={assetPath("/#features")} className={navLinkClass}>
            {d.features}
          </Link>
          <Link href={assetPath("/#demo")} className={navLinkClass}>
            {d.demo}
          </Link>
          <Link href={assetPath("/#skills")} className={navLinkClass}>
            {d.skills}
          </Link>
          <Link href={assetPath("/enterprise")} className={navLinkClass}>
            {d.enterprise}
          </Link>
          <Link href={assetPath("/news")} className={navLinkClass}>
            {d.news}
          </Link>
          <Link href={assetPath("/about")} className={navLinkClass}>
            {d.about}
          </Link>
          <a
            href={marketingLinks.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            {d.github}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            aria-label="Switch language / 切换语言"
            className="inline-flex items-center gap-1 rounded-lg border border-border-default bg-[rgba(252,251,248,0.88)] px-2.5 py-1.5 font-mono text-[12px] text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            <span className={lang === "en" ? "font-semibold text-text-primary" : ""}>
              EN
            </span>
            <span className="text-text-tertiary">/</span>
            <span className={lang === "zh" ? "font-semibold text-text-primary" : ""}>
              中
            </span>
          </button>
          <a
            href={installHref}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="lovable-button-secondary px-4 py-2.5 text-[13px]"
          >
            {d.install}
          </a>
        </div>
      </div>
    </nav>
  )
}
