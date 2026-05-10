import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServerOtaqlariPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <section className="relative">
        {/* Blue Strip that card will overlap */}
        <div className="h-40" style={{ backgroundColor: '#1A2B6D' }} />

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

        {/* Overlapping Service Card - Starting from middle of navy strip */}
        <div className="absolute left-0 right-0 top-[120px] md:top-[120px] z-10 pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="flex justify-center pointer-events-auto">
              <div className="relative max-w-3xl w-full">
                {/* Offset Frame */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 border border-primary-foreground/40 pointer-events-none" aria-hidden="true" />
                
                {/* Card */}
                <div className="relative bg-background p-12 md:p-16 shadow-xl">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight text-balance" style={{ color: '#1A2B6D' }}>
                    Server Otaqları
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    IT sistemi təşkil edən bütün avadanlıqların və serverlərin təhlükəsiz, etibarlı və fasiləsiz fəaliyyətini təmin etmək üçün professional həllər təklif edirik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[180px]" />
      </section>

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
