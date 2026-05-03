import { IndustriesHero } from "@/components/industries-hero"
import { IndustriesList } from "@/components/industries-list"
import { ContactSection } from "@/components/contact-section"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <IndustriesHero />
      <IndustriesList />
      <ContactSection />
    </main>
  )
}
