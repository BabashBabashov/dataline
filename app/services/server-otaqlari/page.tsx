"use client"

import { ServiceHero } from "@/components/service-hero"
import { ContactSection } from "@/components/contact-section"
import { CheckCircle2 } from "lucide-react"

export default function ServerOtaqlariPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <ServiceHero
        title="Server Otaqları"
        imageSrc="/images/services/server-otaqlari.jpg"
        imageAlt="Server Otaqları"
      />

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Server otağında optimal mühitin yaradılması üçün professional yanaşma və zəruri avadanlıqların quraşdırılması vacibdir.
            </p>
          </div>

          {/* Environmental Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Optimal mühit göstəriciləri
            </h2>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Otaqdakı havanın temperaturu:</strong> 18°C – 24°C</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Havanın nisbi rütubətliliyi:</strong> 30% - 55%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>İşıqlandırma səviyyəsi:</strong> 540 lk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Required Equipment */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Zəruri avadanlıqlar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Enerji sistemi
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Generator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>UPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Paylayıcı qurğu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Mikroiqlim
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Kondisioner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Havalandırma sistemi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Təhlükəsizlik
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Girişə nəzarət qurğusu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Mühafizə siqnalizasiyası</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Yangın xəbərdarlığı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Video müşahidə</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Avtomatik yanğınsöndürmə</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Server otaqlarınızın qurulmasında Data Line şirkətinə güvənə bilərsiniz. Professional komandamız sizin üçün ən müasir həlləri hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
