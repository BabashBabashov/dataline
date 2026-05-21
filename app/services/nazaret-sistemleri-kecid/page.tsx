"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { useState, useEffect } from "react"

export default function NazaretSistemleriKecidPage() {
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
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <section className="relative">
        {/* Banner Image */}
        <div className="absolute right-0 top-0 bottom-0 h-[534px] md:h-[534px] h-[139px] md:w-[calc(100%-128px)] md:right-[128px] w-full right-0">
          <Image
            src="/images/services/nazaret-sistemleri-kecid.jpeg"
            alt="Nəzarət Sistemləri (Keçid)"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        {/* Spacer for banner */}
        <div className="h-[534px] md:h-[534px] h-[139px]" />

        {/* Navy strip that the card will overlap */}
        <div className="h-[15px] bg-primary mr-[128px] md:mr-[128px] mr-0" />

        {/* Back Link */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors bg-primary/50 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Xidmətlərə geri
          </Link>
        </div>

        {/* Overlapping Content Card - positioned absolutely to span both sections */}
        <div className="absolute z-30 pointer-events-none left-1/2 -translate-x-1/2 top-[418px] md:top-[418px] top-[90px]">
          <div
            className="overflow-hidden w-[729px] h-[263px] md:w-[729px] md:h-[263px] w-[273px] h-[98px]"
          >
            <div
              className={`pointer-events-auto transition-transform w-[729px] h-[263px] md:w-[729px] md:h-[263px] w-[273px] h-[98px] ${
                cardVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ transitionDuration: '1.5s', transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
            >
              <div className="shadow-2xl h-full" style={{ backgroundColor: hoveredSection === 'card' ? '#E8E8E8' : '#F2F2F2' }}
                   onMouseEnter={() => setHoveredSection('card')}
                   onMouseLeave={() => setHoveredSection(null)}>
                <div className="p-12 text-center flex flex-col justify-center h-full md:p-12 md:py-12 p-2 py-2">
                  <h1 className="text-primary mb-4 text-balance font-spinaker md:text-[66px] text-[18px]">
                    Nəzarət Sistemləri (Keçid)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card on mobile/desktop */}
        <div className="h-[130px] md:h-[130px] h-[50px]" />
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Dataline şirkəti müasir Biometrik sistemlər, kartlı keçid, barmaq izi, üz tanıma ilə keçid sistemləri təklif edir. Ofislərdə qurulan bu sistem personalın işə davamiyyətinə nəzarət etməyə imkan verir.
            </p>
          </div>

          {/* Systems */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Sistemlər
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Biometrik sistemlər
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Barmaq izi ilə tanıma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Üz tanıma sistemi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Kartlı keçid</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Fiziki nəzarət sistemləri
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Turniket sistemləri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Şlaqbaum sistemləri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Biometrik sistemlərlə inteqrasiya</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Software Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Proqram təminatı
            </h2>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">İmkanlar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Girişlərin kart, barmaq izi, üz tanıma ilə edilməsi" },
                  { icon: <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Gün ərzində neçə giriş-çıxış etdiklərinə nəzarət" },
                  { icon: <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Gündəlik gecikmələri göstərilməsi" },
                  { icon: <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Keçidlərə limitin qoyulması, keçidlərin günlərə görə nizamlanması" },
                  { icon: <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, text: "Proqramın gündəlik, həftəlik, illik raporlarının verilməsi" },
                  { icon: <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, text: "Məlumatların Excel və 1C proqramına ötürülməsi" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="mt-0.5">{feature.icon}</div>
                    <p className="text-foreground text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Üstünlüklər
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Təhlükəsizlik</h3>
                <p className="text-muted-foreground text-sm">
                  Yüksək səviyyəli biometrik müdafiə
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Hesabatlıq</h3>
                <p className="text-muted-foreground text-sm">
                  Detallı giriş-çıxış hesabatları
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Avtomatlaşdırma</h3>
                <p className="text-muted-foreground text-sm">
                  Tam avtomatik nəzarət sistemi
                </p>
              </div>
            </div>
          </div>

          {/* Integration */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              İnteqrasiya imkanları
            </h2>

            <div className="space-y-4">
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">1C proqramı ilə inteqrasiya</h3>
                    <p className="text-muted-foreground">
                      Məlumatların avtomatik olaraq 1C mühasibatlıq proqramına ötürülməsi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Excel ixracı</h3>
                    <p className="text-muted-foreground">
                      Bütün məlumatların Excel formatında ixrac edilə bilər
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Müxtəlif raporlar</h3>
                    <p className="text-muted-foreground">
                      Gündəlik, həftəlik və illik hesabatların hazırlanması
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Keçid nəzarət sisteminiz peşəkar qurulması və konfiqurasiyası üçün Dataline şirkətinə güvənə bilərsiniz. Ən müasir biometrik həlləri təklif edirik.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
