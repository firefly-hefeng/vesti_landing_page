"use client"

import Image from "next/image"
import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react"

import { marketingLinks } from "@/lib/marketing-config"
import { useLanguage } from "@/lib/i18n"
import { en } from "@/lib/dictionaries/en"
import { zh } from "@/lib/dictionaries/zh"

const galleryImages = [
  "/about/team.jpg",
  "/about/hackathon-award.jpg",
  "/about/hackathon-group.jpg",
  "/about/gosim-booth.jpg",
  "/about/gosim-cert.jpg",
  "/about/gosim-award.jpg",
  "/about/nks-award.jpg",
]

export function AboutContent() {
  const { lang } = useLanguage()
  const d = lang === "zh" ? zh.about : en.about

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
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
          <div className="lovable-media-frame overflow-hidden p-0">
            <Image
              src="/about/team.jpg"
              alt={d.teamIntro.photoAlt}
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">{d.teamIntro.kicker}</p>
            <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-text-primary">
              {d.teamIntro.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-text-secondary">
              {d.teamIntro.description}
            </p>
          </div>
        </div>

        <div className="mt-14 lovable-panel p-6 md:p-8">
          <p className="section-kicker">{d.company.kicker}</p>
          <dl className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
            {d.company.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14">
          <p className="section-kicker">{d.members.kicker}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {d.members.items.map((member) => (
              <article key={member.name} className="lovable-card p-6">
                {"photoAlt" in member && member.photoAlt ? (
                  <Image
                    src="/about/hefeng.jpg"
                    alt={member.photoAlt}
                    width={128}
                    height={128}
                    className="mb-5 h-16 w-16 rounded-full border border-border-subtle object-cover"
                  />
                ) : (
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-border-subtle bg-[rgba(252,251,248,0.92)] font-mono text-sm text-text-tertiary">
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-[1.1rem] font-medium leading-7 tracking-[-0.02em] text-text-primary">
                  {member.name}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                  {member.role}
                </p>
                <p className="mt-2 text-[13px] font-medium leading-6 text-text-secondary">
                  {member.school}
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {member.highlight}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="section-kicker">{d.milestones.kicker}</p>
          <div className="mt-6 lovable-panel p-6 md:p-8">
            <ol className="relative space-y-8 border-l border-border-subtle pl-6">
              {d.milestones.items.map((milestone) => (
                <li key={milestone.date} className="relative">
                  <span className="absolute -left-[27.5px] top-1.5 h-2.5 w-2.5 rounded-full border border-border-default bg-[rgba(252,251,248,1)]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {milestone.date}
                  </p>
                  <h3 className="mt-1.5 text-[1.05rem] font-medium tracking-[-0.02em] text-text-primary">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                    {milestone.description}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-border-subtle pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                {d.milestones.mediaKicker}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-text-secondary">
                {d.milestones.media.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="section-kicker">{d.gallery.kicker}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {d.gallery.items.map((item, index) => (
              <figure
                key={galleryImages[index]}
                className="lovable-card overflow-hidden p-0"
              >
                <Image
                  src={galleryImages[index]}
                  alt={item.caption}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-[13px] leading-5 text-text-secondary">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14 lovable-panel p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <p className="section-kicker">{d.contact.kicker}</p>
              <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-text-primary">
                {d.contact.title}
              </h2>
              <div className="mt-4 space-y-2 text-sm leading-6 text-text-secondary">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-text-tertiary" />
                  {d.contact.person} ·{" "}
                  <a
                    href="mailto:221505011@smail.nju.edu.cn"
                    className="text-text-primary underline decoration-border-default underline-offset-4 transition-colors duration-150 hover:decoration-text-primary"
                  >
                    221505011@smail.nju.edu.cn
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-text-tertiary" />
                  +86 137-7868-0901
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-text-tertiary" />
                  {d.contact.address}
                </p>
              </div>
            </div>
            <div className="flex md:justify-end">
              <a
                href={marketingLinks.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lovable-button-secondary gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
