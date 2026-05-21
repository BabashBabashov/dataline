"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { useState, useEffect } from "react"

export default function SebekelerinIdaresiPage() {
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
            src="/images/services/sebekelerin-idaresi.jpg"
            alt="Şəbəkələrin İdarə Olunması"
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
                    Şəbəkələrin İdarə Olunması
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
              Peşəkar şəbəkə idarəetməsi ilə biznesinizin İT infrastrukturunu maksimum səviyyədə idarə edin.
            </p>
          </div>

          {/* Services List */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təmin edilən xidmətlər
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "LAN/WAN şəbəkəsi və İT infrastrukturunun idarə olunması",
                  description: "Şəbəkə və İT infrastrukturunun dizaynı, quraşdırılması və yaranan problemlərin aradan qaldırılması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "Şəbəkə avadanlıqlarının optimallaşdırılması",
                  description: "Şəbəkə avadanlıqlarının funksionallığını maksimum səviyyədə artırmaq, təhlükəsizlik üçün ətraflı icra planlarını hazırlamaq"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "Avadanlıqların konfiqurasiyası",
                  description: "Router, Switch və Firewall-ları müştərinin standartlarına uyğun olaraq konfiqurasiya edilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "Problemlərin həlli",
                  description: "Şəbəkə problemlərini müəyyən edib həll etmək"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "Monitorinq sistemi",
                  description: "Monitorinq sistemi vasitəsilə infrastruktur elementlərinin konfiqurasiyası və monitorinqini aparmaq"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "Trafikin optimallaşdırılması",
                  description: "Şəbəkənin yüklənilməsi və trafikin optimallaşdırılması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />,
                  title: "Sistemlərin quraşdırılması və sənədləşdirilməsi",
                  description: "Avadanlıq və proqram təminatı sistemləri, o cümlədən yeni sistemlərin quraşdırılması və sənədləşdirilməsi"
                }
              ].map((service, index) => (
                <div key={index} className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="flex items-start gap-3">
                    {service.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Üstünlüklərimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Sürətli həll</h3>
                <p className="text-muted-foreground text-sm">
                  Problemlərin tez müəyyən edilməsi və aradan qaldırılması
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Təhlükəsizlik</h3>
                <p className="text-muted-foreground text-sm">
                  Maksimum təhlükəsizlik üçün ətraflı icra planları
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Davamlı izləmə və performans optimallaşdırılması
                </p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Şəbəkə infrastrukturunuzun peşəkar idarə olunması üçün Data Line şirkətinə güvənə bilərsiniz. 7/24 dəstək xidməti ilə yanınızdayıq.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
