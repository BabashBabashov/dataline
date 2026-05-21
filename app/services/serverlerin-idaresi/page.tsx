"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { useState, useEffect } from "react"

export default function ServerlerinIdaresiPage() {
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
            src="/images/services/serverlerin-idaresi.jpg"
            alt="Serverlərin İdarə Olunması"
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
                    Serverlərin İdarə Olunması
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
              Data Line şirkətinin Texniki Dəstək Qrupunda serverlərin və sistem proqram təminatının idarə olunması üzrə ixtisaslaşmış peşəkarlar fəaliyyət göstərir.
            </p>
          </div>

          {/* Data Line Expertise */}
          <div className="mb-12">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent mb-8">
              <p className="text-foreground leading-relaxed">
                Belə peşəkarların daimi işə qəbul olunması çox baha başa gəlir. Bu səbəbdən serverlərin və sistem proqram təminatının idarə olunması üzrə işlərin, bu işlər üzrə ixtisaslaşmış İT şirkətə həvalə olunması təşkilat üçün daha səmərəlidir.
              </p>
            </div>

            {/* Services List */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təmin edilən xidmətlər
            </h2>

            <div className="space-y-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Server avadanlıqlarının və sistem proqram təminatının monitorinqi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Nasazlıqların diaqnostikası" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Avadanlıqların işindəki nasazlıqların aradan qaldırılması üçün təkliflərin hazırlanması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Avadanlıqlar üzrə müntəzəm texniki xidmətin aparılması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının yazılması və köklənməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının yenilənməsi və patçların yazılması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının işinə dair məsləhətlərin verilməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının qəzadan sonra işçi vəziyyətinin bərpa olunması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Serverlərdə şəbəkə hücumlarına və viruslara qarşı müdafiə sisteminin qurulması və idarə olunması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Məlumatların və sistem proqram təminatının ehtiyat surətlərinin çıxarılması" }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="mt-0.5">{service.icon}</div>
                  <p className="text-foreground">{service.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Xidmətin göstərilmə prosesi
            </h2>

            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  İlkin araşdırma
                </h3>
                <p className="text-foreground leading-relaxed">
                  Xidmət göstərilməzdən əvvəl Sifarişçinin server kompleksində ilkin araşdırma aparılır.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Təkliflərin hazırlanması
                </h3>
                <p className="text-foreground leading-relaxed">
                  Araşdırmanın nəticələrinə əsasən serverin təkmilləşdirilməsi üçün müxtəlif təkliflər hazırlanır və Sifarişçiyə təqdim edilir.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Xidmətin göstərilməsi
                </h3>
                <p className="text-foreground leading-relaxed">
                  Serverlərin idarə olunması əsasən məsafədən idarəetmə vasitəsi ilə həyata keçirilir.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Serverlərinizin etibarlı və fasiləsiz işi üçün Data Line şirkətinə güvənə bilərsiniz. Peşəkar komandamız 7/24 dəstək xidməti ilə yanınızdadır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
