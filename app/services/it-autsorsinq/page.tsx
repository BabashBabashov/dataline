"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { useState, useEffect } from "react"

export default function ITAutsorsinqPage() {
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
            src="/images/services/it-autsorsinq.jpg"
            alt="İT Autsorsinq"
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
                    İT Autsorsinq
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
              İnformasiya sisteminin qurulması və idarə olunması üzrə işlərin kənar təşkilata həvalə olunmasıdır. Təkcə böyük şirkətlərin deyil, eyni zamanda orta və kiçik biznes nümayəndələrinin də yüksək səviyyədə qurulmuş informasiya texnologiyalarının infrastrukturuna ehtiyacı vardır. Bunun üçün isə kifayət qədər vəsait tələb olunur. Bu zaman İT Autsorsinq xidmətindən faydalanmaq sərfəlidir.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              İT Autsorsinqin üstünlükləri:
            </h2>

            {/* Quality Service */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Keyfiyyətli xidmət
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Data Line şirkəti göstərdiyi xidmətlərin keyfiyyətinə və icra müddətinə görə maddi məsuliyyət daşıyır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Biz müştərilərimizə həftənin 7 günü 24 saat ərzində fasiləsiz və operativ xidmət göstəririk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Komandamız İnformasiya Texnologiyalarının müxtəlif istiqamətləri üzrə ixtisaslaşmış peşəkarlardan təşkil olunmuşdur və bu bizə istənilən problemi daha tez və dəqiq həll etməyə imkan yaradır.</span>
                </li>
              </ul>
            </div>

            {/* Financial Benefits */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Maliyyə, vaxt və şəxsi resurslara qənaət
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>İT Autsorsinq xidmətlərinin dəyəri, daimi işçinin əmək haqqından daha aşağıdır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Ofisdə daimi işçi üçün yer ayırmağa ehtiyac yoxdur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Əmək müqaviləsi bağlamırsınız.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Əmək haqqından vergi ödəmirsiniz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Kompüter, proqram təminatı və ofis texnikasının alınması, çatdırılması və quraşdırılması, ofis texnikasının təmiri, kartriclərin doldurulması, mini ATS-in köklənməsi, vebsaytın yenilənməsi və bunun kimi digər xidmətlər üçün müxtəlif təşkilatlara müraciət etmənizə ehtiyac yoxdur. Biz Sizin vaxtınıza qənaət etmək üçün bu işləri öz öhdəliyimizə götürməyə hazırıq.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Kompüter və ofis texnikasını, proqram təminatını topdanşatış qiymətlərlə əldə edirsiniz. Alınmış texnikaya zəmanət verilir.</span>
                </li>
              </ul>
            </div>

            {/* Commitment */}
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-medium">
                Data Line şirkəti qəbul olunmuş müraciətlərin icra müddətinə və göstərilmiş xidmətin keyfiyyətinə görə öhdəlik götürən və maddi məsuliyyət daşıyan bir şirkətdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
