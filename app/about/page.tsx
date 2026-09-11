import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About — Vesti",
  description:
    "The team behind Vesti: local-first AI memory infrastructure, built in Nanjing by an interdisciplinary team from NJU, Fudan and SJTU.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  )
}
