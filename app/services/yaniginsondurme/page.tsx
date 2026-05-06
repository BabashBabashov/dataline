import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function YangingsondurmePage() {
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
            Yanğınsöndürmə Sistemləri
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Təhlükəsizlik prioritetdir</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Yanğından mühafizə sistemləri yalnız qanunvericiliyin tələbi deyil, eyni zamanda biznesinizin və əməkdaşlarınızın təhlükəsizliyinin təminatıdır.
            </p>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-semibold text-lg">
                Dataline MMC olaraq biz sizə risklərin minimuma endirilməsi və maksimum təhlükəsizlik üçün kompleks həllər təqdim edirik.
              </p>
            </div>
          </div>

          {/* Fire Suppression Systems */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Yanğınsöndürmə sistemləri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Sprinkler sistemləri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Avtomatik olaraq aktivləşən və yanğını söndürən su əsaslı sistemlər
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Qazlı söndürmə sistemləri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Server otaqları üçün ideal, avadanlıqlara zərər verməyən qazlı həllər
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Köpüklü və su əsaslı sistemlər
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Müxtəlif növ yanğınlar üçün effektiv köpüklü və su söndürmə sistemləri
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Avtomatik və manual aktivasiya
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Həm avtomatik, həm də əl ilə aktivləşdirilə bilən mexanizmlər
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Sistemin üstünlükləri
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Maksimum təhlükəsizlik",
                  description: "Risklərin minimuma endirilməsi və əməkdaşların təhlükəsizliyinin təmini"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Qanunvericiliyə uyğunluq",
                  description: "Bütün sistemlər qanunvericilik tələblərinə tam uyğundur"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Kompleks həllər",
                  description: "Hər bir obyekt üçün fərdi yanaşma və optimal həllər"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Peşəkar quraşdırma",
                  description: "Təcrübəli mütəxəssislər tərəfindən düzgün quraşdırma və konfiqurasiya"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Tətbiq sahələri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Server otaqları</h3>
                <p className="text-muted-foreground text-sm">
                  Qazlı söndürmə sistemləri ilə avadanlıqların qorunması
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Ofis binaları</h3>
                <p className="text-muted-foreground text-sm">
                  Sprinkler sistemləri ilə tam müdafiə
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Sənaye obyektləri</h3>
                <p className="text-muted-foreground text-sm">
                  Xüsusi həllər ilə sənaye təhlükəsizliyi
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Yanğınsöndürmə sisteminiz üçün Dataline MMC-yə güvənə bilərsiniz. Peşəkar komandamız sizin üçün ən təhlükəsiz həlləri hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
