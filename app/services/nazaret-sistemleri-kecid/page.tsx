import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function NazaretSistemleriKecidPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <section className="relative">
        {/* Banner Background */}
        <div className="h-[220px] bg-gradient-to-br from-primary/20 to-primary/5" />
        
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
        <div className="absolute left-0 right-0 top-[280px] md:top-[300px] z-10 pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="flex justify-center pointer-events-auto">
              <div className="relative max-w-3xl w-full">
                {/* Offset Frame */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 border border-primary-foreground/40 pointer-events-none" aria-hidden="true" />
                
                {/* Card */}
                <div className="relative bg-background p-12 md:p-16 shadow-xl">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight text-balance" style={{ color: '#1A2B6D' }}>
                    Nəzarət Sistemləri (Keçid)
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Dataline şirkəti müasir Biometrik sistemlər, kartlı keçid, barmaq izi, üz tanıma ilə keçid sistemləri təklif edir. Ofislərdə qurulan bu sistem personalın işə davamiyyətinə nəzarət etməyə imkan verir.
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
              Müasir keçid nəzarət sistemləri ilə obyektinizin təhlükəsizliyini artırın. Personalın işə giriş-çıxış saatlarına nəzarət edin və bütün məlumatları yadda saxlayın.
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
                  <CheckCircle2 className="w-6 h-6 text-accent" />
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
                  <CheckCircle2 className="w-6 h-6 text-accent" />
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
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                    text: "Girişlərin kart, barmaq izi, üz tanıma ilə edilməsi"
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                    text: "Gün ərzində neçə giriş-çıxış etdiklərinə nəzarət"
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                    text: "Gündəlik gecikmələri göstərilməsi"
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                    text: "Keçidlərə limitin qoyulması, keçidlərin günlərə görə nizamlanması"
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                    text: "Proqramın gündəlik, həftəlik, illik raporlarının verilməsi"
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                    text: "Məlumatların Excel və 1C proqramına ötürülməsi"
                  }
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
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
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
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
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
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
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
