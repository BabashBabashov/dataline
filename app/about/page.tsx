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
        <div className="absolute left-0 lg:right-[128px] top-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[534px] w-full lg:w-[calc(100%-128px)]">
          <Image
            src="/images/certificates/banner1.svg"
            alt="Dataline MMC - Niyə Biz"
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
                    NİYƏ BİZ
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px]" />
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground text-justify">
              2015-ci ildə yaradılmış Dataline şirkəti qısa müddət ərzində İT autsorsinq, İT xidmətlərinin göstərilməsi, sistem inteqrasiyası, serverlərin qurulması, nəzarət sistemləri, kommunikasiya üzrə ixtisaslaşıb və öz müştərilərinə xidmət göstərməkdədir. Şirkətimiz yüksək ixtisaslı təcrübəli gənc mütəxəssislərdən təşkil olunmuşdur. Şirkətimizin əsas məqsədi müştərilərə keyfiyyətli İT autsorsinq təklif etməkdir. Şirkətimiz cavan olmasına baxmayaraq müştərilərimiz ilə şəffaf və möhkəm əlaqəlar qurur və Dataline brendini etibarlı tərəfdaş kimi formalaşdırmağa səy göstəririk. Biz hər bir müştərimizə fərdi şəkildə yanaşırıq.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Keyfiyyətli Xidmət</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Yüksək standartlara uyğun peşəkar həllər</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Peşəkar Komanda</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Təcrübəli gənc mütəxəssislər</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">2015-ci ildən</h3>
              <p className="text-muted-foreground text-sm sm:text-base">İllərdir təcrübə və etibar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Separator Line */}
          <div className="w-full h-px bg-border mb-10 sm:mb-16" />

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-10 sm:mb-16">
            SERTİFİKATLAR
          </h2>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
