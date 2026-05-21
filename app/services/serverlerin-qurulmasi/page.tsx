"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { useState, useEffect } from "react"

export default function ServerlerinKurulmasiPage() {
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
            src="/images/services/serverlerin-qurulmasi.jpg"
            alt="Serverlərin Qurulması"
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
                    Serverlərin Qurulması
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
              Server istifadəçilərin İNTERNET şəbəkəsinə çıxışının təmin olunması, elektron məktubların göndərilməsi, məlumatların saxlanması kimi kritik işləri yerinə yetirir.
            </p>
          </div>

          {/* Server Types */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Server növləri
            </h2>

            <div className="space-y-4">
              {[
                { title: "Domain Controller", desc: "Domain içərisindəki istifadəçi hesablarının idarə edilməsi və kimlik doğrulamaları" },
                { title: "File Server", desc: "Böyük həcmdə yaddaşa malik və fayl əməliyyatları üçün optimallaşdırılmış server" },
                { title: "FTP Server", desc: "Verilənlərin transfer protokolu ilə faylların sürətli şəkildə köçürülməsi" },
                { title: "Web Server", desc: "Web səhifələrinin internet üzərində yayınında məsuliyyət daşıyan server" },
                { title: "Mail Server", desc: "Elektron məktubların bir kompüterdən digərinə ötürülməsini təmin edən sistem" },
                { title: "Firewall & Proxy Server", desc: "Şəbəkə təhlükəsizliyi və nəzarət üçün keçid nöqtəsi" },
                { title: "Antivirus Server", desc: "Bütün kompüterləri bir mərkəzdən antivirusla qorumaq imkanı" },
                { title: "DB Server", desc: "Verilənlər bazasının yerləşdiyi və idarə olunduğu server" },
                { title: "Terminal Server", desc: "Uzaqdan giriş ilə server resurslarının istifadəsi imkanı" },
                { title: "Print Server", desc: "Printerlərin kollektiv istifadəsi üçün xüsusi həll" },
                { title: "SharePoint", desc: "Daxili web saytların yaradılması və sənədlərin idarə edilməsi" },
                { title: "ESXi Virtualization", desc: "Linux əsaslı virtuallaşdırma sistemi ilə resurslara qənaət" },
                { title: "Hyper-V Virtualization", desc: "Microsoft hypervisor əsaslı virtuallaşdırma sistemi" }
              ].map((server, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    {server.title}
                  </h3>
                  <p className="text-muted-foreground text-sm ml-7">
                    {server.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Line Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Data Line şəbəkə həlləri
            </h2>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>LAN şəbəkələrinin (simli və simsiz - WiFi local şəbəkələr) tətbiqi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>WAN şəbəkələrinin (korporativ şəbəkələr) tətbiqi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>İnformasiya sistemlərinin resurslarına məsafədən çıxışın təşkil edilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Çoxfunksiyalı korporativ şəbəkələrin tətbiq edilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Telekommunikasiya şəbəkə infrastrukturlarının yaradılması və müasirləşdirilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Avadanlığa texniki dəstək</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Serverlərinizin peşəkar quraşdırılması üçün Data Line şirkətinə güvənə bilərsiniz. Təcrübəli komandamız sizin üçün ən müasir həlləri hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
