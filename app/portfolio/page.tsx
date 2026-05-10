import Image from "next/image"
import { ContactSection } from "@/components/contact-section"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative h-[420px] md:h-[480px]">
          <Image
            src="/images/industries-hero.jpg"
            alt="Dataline MMC - Portfel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>

        {/* Navy strip that the card will overlap */}
        <div className="h-16 bg-primary" />

        {/* Centered overlapping card */}
        <div className="absolute left-0 right-0 top-[240px] md:top-[280px] z-10 pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="flex justify-center pointer-events-auto">
              <div className="bg-background max-w-2xl w-full shadow-xl">
                <div className="p-10 md:p-14 text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
                    PORTFEL
                  </h1>
                  <p className="text-muted-foreground text-sm mt-4">
                    Əməkdaşlıq etdiyimiz şirkətlər
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[200px] md:h-[180px]" />
      </section>

      {/* Partners/Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tərəfdaşlarımız
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bizimlə əməkdaşlıq edən etibarlı şirkətlərin logoları
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Partner logos - 17 items */}
            {[...Array(17)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all hover:scale-105 p-4"
              >
                <Image
                  src={`/images/portfolio/${index + 1}.png`}
                  alt={`Tərəfdaş ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
