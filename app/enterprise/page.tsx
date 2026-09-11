import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnterpriseContent } from "@/components/enterprise-content"

export const metadata: Metadata = {
  title: "Enterprise — Vesti",
  description:
    "Local-first enterprise knowledge agents, delivered FDE-style: private deployment, evidence chains, human review as the final gate, measurable acceptance.",
}

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <EnterpriseContent />
      <Footer />
    </>
  )
}
