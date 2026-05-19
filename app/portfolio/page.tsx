"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ContactSection } from "@/components/contact-section"

export default function PortfolioPage() {
  const [cardVisible, setCardVisible] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<'card' | null>(null)

  useEffect(() => {
    setCardVisible(true)
  }, [])
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute right-0 top-0 bottom-0 h-[534px]" style={{ width: 'calc(100% - 128px)', right: '128px' }}>
          <Image
            src="/images/portfolio/banner1.jpg"
            alt="Dataline MMC - Portfel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
        
        {/* Spacer for banner */}
        <div className="h-[534px]" />

        {/* Navy strip that the card will overlap */}
        <div className="h-[15px] bg-primary mr-[128px]" />

        {/* Centered overlapping card */}
        <div className="absolute z-10 pointer-events-none right-0 md:right-[272px] top-[267px]">
          <div className="pointer-events-auto">
            <div
              className={`overflow-hidden transition-all duration-1000 ease-out w-[90vw] md:w-[685px] h-[400px] md:h-[445px] ${
                cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div
                className="shadow-2xl h-full transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: hoveredSection === 'card' ? '#E8E8E8' : '#F2F2F2',
                  transform: hoveredSection === 'card' ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredSection('card')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="p-12 text-center flex flex-col justify-center h-full">
                  <div className="w-16 h-0.5 bg-primary mb-6 mx-auto transition-all duration-300"
                       style={{ width: hoveredSection === 'card' ? '120px' : '64px' }} />
                  <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
                    PORTFEL
                  </h1>
                  <p className="text-muted-foreground text-base mt-4">
                    Əməkdaşlıq etdiyimiz şirkətlər
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[280px] md:h-[320px]" />
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
