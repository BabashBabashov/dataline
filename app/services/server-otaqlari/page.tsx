import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServerOtaqlariPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Title */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Xidmətlərə geri
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-center">
            Server Otaqları
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              IT sistemi təşkil edən bütün avadanlıqların və serverlərin təhlükəsiz, etibarlı və fasiləsiz fəaliyyətini təmin etmək üçün istifadə olunur. Server otağında optimal mühitin yaradılması üçün aşağıdakı göstəricilər nəzərə alınmalıdır.
            </p>
          </div>

          {/* Environmental Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Optimal mühit göstəriciləri:
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
              Zəruri avadanlıqlar:
            </h2>

            <p className="text-muted-foreground mb-8">
              Server otağındakı avadanlıqların fasiləsiz fəaliyyətini və təhlükəsizliyini təmin etmək üçün aşağıdakı avadanlıqları quraşdırmaq lazımdır:
            </p>

            {/* Enerji sistemi */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                1. Enerji sistemi
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

            {/* Mikroiqlim qurğuları */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                2. Mikroiqlim qurğuları
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

            {/* Təhlükəsizlik qurğuları */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                3. Təhlükəsizlik qurğuları
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Girişə nəzarət qurğusu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Mühafizə xəbərdarlıq qurğusu (siqnalizasiya)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Yangın xəbərdarlıq qurğusu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Video müşahidə qurğusu (kamera)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Avtomatik yanğınsöndürmə sistemi</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Server otaqlarınızın qurulmasında Data Line şirkətinə güvənə bilərsiniz.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
