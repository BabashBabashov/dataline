"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ContactSection } from "@/components/contact-section"

export default function PortfolioPage() {
  const [cardVisible, setCardVisible] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<'card' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute left-0 lg:right-[128px] top-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[534px] w-full lg:w-[calc(100%-128px)]">
          <Image
            src="/images/portfolio/banner1.jpg"
            alt="Dataline MMC - Portfel"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
        
        {/* Spacer for banner */}
        <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[534px]" />

        {/* Navy strip */}
        <div className="h-[10px] sm:h-[15px] bg-primary lg:mr-[128px]" />

        {/* Centered overlapping card */}
        <div className="relative lg:absolute z-10 lg:pointer-events-none lg:right-0 lg:md:right-[272px] lg:top-[267px] -mt-8 sm:-mt-12 lg:mt-0 px-4 sm:px-6 lg:px-0">
          <div className="lg:pointer-events-auto">
            <div className="overflow-hidden w-full max-w-[90vw] sm:max-w-[600px] lg:w-[685px] mx-auto lg:mx-0">
              <div
                className={`shadow-2xl transition-transform ${
                  cardVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{
                  backgroundColor: hoveredSection === 'card' ? '#E8E8E8' : '#F2F2F2',
                  transform: hoveredSection === 'card' ? 'scale(1.02)' : 'scale(1)',
                  transitionDuration: '1.5s',
                  transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)'
                }}
                onMouseEnter={() => setHoveredSection('card')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="p-6 sm:p-8 md:p-12 text-center flex flex-col justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:h-[445px]">
                  <div className="w-12 sm:w-16 h-0.5 bg-primary mb-4 sm:mb-6 mx-auto transition-all duration-300"
                       style={{ width: hoveredSection === 'card' ? '120px' : '64px' }} />
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance">
                    PORTFEL
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base mt-3 sm:mt-4">
                    Əməkdaşlıq etdiyimiz şirkətlər
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px]" />
      </section>

      {/* Partners/Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Tərəfdaşlarımız
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Bizimlə əməkdaşlıq edən etibarlı şirkətlərin logoları
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Partner logos - 29 items */}
            {[...Array(29)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all hover:scale-105 p-3 sm:p-4"
              >
                <Image
                  src={`/images/portfolio/${index + 1}.png`}
                  alt={`Tərəfdaş ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
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