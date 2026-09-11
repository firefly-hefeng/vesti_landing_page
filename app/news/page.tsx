import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsContent } from "@/components/news-content"

export const metadata: Metadata = {
  title: "News — Vesti",
  description:
    "Release notes and updates from Vesti, the working-memory engine for domain-specific agents.",
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <NewsContent />
      <Footer />
    </>
  )
}
