import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function SesSistemlerininKurulmasiPage() {
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
            Səs Sistemlərinin Qurulması
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Professional Audio Systems */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Peşəkar səs sistemləri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Gücləndirici sistemlər
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Yüksək keyfiyyətli gücləndirici (amplifier) sistemlərinin quraşdırılması
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Akustik kolon və subwoofer sistemləri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Müxtəlif növ akustik kolonların və subwoofer sistemlərinin quraşdırılması
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
                      Mikser və DSP avadanlıqları
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Mikser və DSP (Digital Signal Processing) avadanlıqlarının professional sazlanması
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Konfrans və tədbir məkanları
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Konfrans və tədbir məkanları üçün professional səsləndirmə həlləri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call Systems */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Çağrı Sistemləri
            </h2>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <p className="text-foreground leading-relaxed">
                Tərəfimizdən təqdim edilən çağırış sistemləri xəstəxana, klinika və digər səhiyyə müəssisələrində operativ əlaqə və sürətli reaksiya təmin etmək üçün nəzərdə tutulub. Sistemlər pasiyent təhlükəsizliyini artırır, personalın işini optimallaşdırır və xidmət keyfiyyətini yüksəldir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  text: "Təcili hallarda operativ müdaxilə imkanı yaradır"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  text: "Pasiyent–personal əlaqəsini sürətləndirir"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  text: "Xidmət keyfiyyətini və nəzarəti artırır"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  text: "İş prosesini avtomatlaşdırır"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{benefit.icon}</div>
                    <p className="text-foreground">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Components */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Sistem Komponentləri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Yataq başı çağırış düyməsi",
                  "Təcili çağırış funksiyası",
                  "Kabel və ya simsiz modul seçimləri",
                  "Mərkəzi monitor və ya LED ekran",
                  "Otaq və yataq nömrəsinin göstərilməsi",
                  "Səsli və vizual bildiriş",
                  "Kabel və ya IP əsaslı həllər",
                  "Avtomatik qeydiyyat və hesabat sistemi"
                ].map((component, index) => (
                  <div key={index} className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{component}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Üstünlüklərimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Etibarlılıq</h3>
                <p className="text-muted-foreground text-sm">
                  Yüksək keyfiyyətli avadanlıq və komponentlər
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Peşəkar quraşdırma</h3>
                <p className="text-muted-foreground text-sm">
                  Təcrübəli mütəxəssislər tərəfindən düzgün quraşdırma
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Texniki dəstək</h3>
                <p className="text-muted-foreground text-sm">
                  Müntəzəm texniki xidmət və dəstək
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Səs sisteminizin peşəkar qurulması və çağrı sistemləri üçün Dataline MMC-yə güvənə bilərsiniz. Həllərimiz səhiyyə müəssisələri, konfrans zalları və digər obyektlər üçün optimallaşdırılıb.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
