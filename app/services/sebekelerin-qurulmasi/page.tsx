"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { useState, useEffect } from "react"

export default function SebekelerinKurulmasiPage() {
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
            src="/images/services/sebekelerin-qurulmasi.jpg"
            alt="Şəbəkələrin Qurulması"
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
                    Şəbəkələrin Qurulması
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
              İT şəbəkəniz sürətli və təhlükəsiz olmalıdır. Biz sertifikatlı mühəndislərimizlə layihələndirmədən təhvilə qədər tam xidmət göstəririk.
            </p>
          </div>

          {/* Data Line Approach */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Data Line yanaşması
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-5 bg-primary/5 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">
                  Biz şirkət olaraq bu mövzuda sertifikatlı mühəndislərimizlə işi layihələndirib sizin razılığınızı alandan sonra operativ şəkildə işi icra edib, təhvil veririk.
                </p>
              </div>

              <div className="flex items-start gap-3 p-5 bg-primary/5 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">
                  Müasir test cihazları ilə şəbəkəni test edib nəticələrini təqdim edirik.
                </p>
              </div>
            </div>
          </div>

          {/* Network Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təklif edilən şəbəkə həlləri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "LAN şəbəkələri",
                  description: "Simli və simsiz (WiFi) local şəbəkələrin tətbiqi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "WAN şəbəkələri",
                  description: "Korporativ şəbəkələrin tətbiqi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Məsafədən çıxış",
                  description: "İnformasiya sistemlərinin resurslarına məsafədən çıxışın təşkil edilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Korporativ şəbəkələr",
                  description: "Çoxfunksiyalı korporativ şəbəkələrin tətbiq edilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Telekommunikasiya",
                  description: "Şəbəkə infrastrukturlarının yaradılması və müasirləşdirilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Texniki dəstək",
                  description: "Avadanlığa texniki dəstək"
                }
              ].map((solution, index) => (
                <div key={index} className="bg-secondary p-5 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-0.5">{solution.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-8">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              İş prossesi
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Layihələndirmə",
                  description: "Sertifikatlı mühəndislərimiz tərəfindən şəbəkə sisteminin professional şəkildə layihələndirilməsi"
                },
                {
                  step: "2",
                  title: "Razılaşma",
                  description: "Layihənin təqdim edilməsi və müştərinin razılığının alınması"
                },
                {
                  step: "3",
                  title: "İcra",
                  description: "Kabelləşmə işindən başlayaraq avadanlıqların sazlanmasına qədər olan bütün işlərin operativ şəkildə icrası"
                },
                {
                  step: "4",
                  title: "Test və təhvil",
                  description: "Müasir test cihazları ilə şəbəkənin test edilməsi və nəticələrin təqdim edilməsi"
                }
              ].map((process, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-xl">{process.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{process.title}</h3>
                      <p className="text-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Şəbəkə infrastrukturunuzun sürətli, təhlükəsiz və etibarlı olması üçün Data Line şirkətinə güvənə bilərsiniz.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
