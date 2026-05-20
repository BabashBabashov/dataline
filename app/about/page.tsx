"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
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
        <div className="absolute right-0 top-0 bottom-0 h-[534px]" style={{ width: 'calc(100% - 128px)', right: '128px' }}>
          <Image
            src="/images/certificates/banner1.svg"
            alt="Dataline MMC - Niyə Biz"
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
              className="overflow-hidden w-[90vw] md:w-[685px] h-[400px] md:h-[445px]"
            >
              <div
                className={`shadow-2xl h-full transition-transform w-[90vw] md:w-[685px] h-[400px] md:h-[445px] ${
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
                <div className="p-12 text-center flex flex-col justify-center h-full">
                  <div className="w-16 h-0.5 bg-primary mb-6 mx-auto transition-all duration-300"
                       style={{ width: hoveredSection === 'card' ? '120px' : '64px' }} />
                  <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
                    NİYƏ BİZ
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[280px] md:h-[320px]" />
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary p-8 md:p-12 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-justify">
              2015-ci ildə yaradılmış Dataline şirkəti qısa müddət ərzində İT autsorsinq, İT xidmətlərinin göstərilməsi, sistem inteqrasiyası, serverlərin qurulması, nəzarət sistemləri, kommunikasiya üzrə ixtisaslaşıb və öz müştərilərinə xidmət göstərməkdədir. Şirkətimiz yüksək ixtisaslı təcrübəli gənc mütəxəssislərdən təşkil olunmuşdur. Şirkətimizin əsas məqsədi müştərilərə keyfiyyətli İT autsorsinq təklif etməkdir. Şirkətimiz cavan olmasına baxmayaraq müştərilərimiz ilə şəffaf və möhkəm əlaqəlar qurur və Dataline brendini etibarlı tərəfdaş kimi formalaşdırmağa səy göstəririk. Biz hər bir müştərimizə fərdi şəkildə yanaşırıq.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Keyfiyyətli Xidmət</h3>
              <p className="text-muted-foreground">Yüksək standartlara uyğun peşəkar həllər</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Peşəkar Komanda</h3>
              <p className="text-muted-foreground">Təcrübəli gənc mütəxəssislər</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">2015-ci ildən</h3>
              <p className="text-muted-foreground">İllərdir təcrübə və etibar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Separator Line */}
          <div className="w-full h-px bg-border mb-16" />

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            SERTİFİKATLAR
          </h2>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              'cisco.png',
              'mcsa.png',
              'mcts.jpg',
              'win2007-1.jpg',
              'win2007-2.png',
              'win2008-1.jpg',
              'win2008-2.jpg',
              'win2008-3.png',
              'win2012.png'
            ].map((filename, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <Image
                  src={`/images/certificates/${filename}`}
                  alt={`Sertifikat ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
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
