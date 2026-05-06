import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function YangingSiqnalizasiyaPage() {
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
            Yanğın Siqnalizasiya
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Təhlükəsizlik birinci prioritetdir</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Yanğın riskləri yaşayış, ofis, sənaye və istehsalat obyektləri üçün ciddi təhlükə yaradır. Dataline MMC olaraq biz, beynəlxalq standartlara uyğun, müasir və etibarlı yanğından mühafizə sistemlərinin layihələndirilməsi, quraşdırılması və texniki xidməti sahəsində peşəkar həllər təqdim edirik.
            </p>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-semibold text-lg">
                Məqsədimiz — insan həyatının, əmlakın və biznesinizin fasiləsiz fəaliyyətinin qorunmasını təmin etməkdir.
              </p>
            </div>
          </div>

          {/* Fire Alarm Systems */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Yanğın siqnalizasiya sistemləri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Avtomatik tüstü və istilik detektorları
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Yüksək həssaslıqla tüstü və istilik dəyişikliklərini müəyyən edən avtomatik sensorlar
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Ünvanlı və ünvanlı olmayan sistemlər
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Təhlükənin məkanını dəqiq müəyyən edən ünvanlı sistemlər
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Səsli və işıqlı xəbərdarlıq qurğuları
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Təcili evacuasiya üçün səsli siqnallar və işıqlı indikatorlar
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
                      Mərkəzi idarəetmə panelləri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Bütün sistemi idarə edən və monitorinq edən mərkəzi panellər
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Sistemin xüsusiyyətləri
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Beynəlxalq standartlara uyğunluq",
                  description: "Bütün avadanlıqlar beynəlxalq təhlükəsizlik standartlarına uyğundur"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Müasir texnologiya",
                  description: "Ən son texnologiyalarla təchiz edilmiş detektorlar və sensorlar"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Peşəkar quraşdırma",
                  description: "Təcrübəli mütəxəssislər tərəfindən düzgün quraşdırma və konfiqurasiya"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Texniki xidmət",
                  description: "Sistemin davamlı və etibarlı işi üçün müntəzəm texniki xidmət"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>,
                  title: "Yaşayış binaları",
                  description: "Mənzillər və yaşayış kompleksləri"
                },
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>,
                  title: "Ofislər",
                  description: "Biznes mərkəzləri və ofis binaları"
                },
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>,
                  title: "Sənaye obyektləri",
                  description: "Zavodlar və istehsalat sahələri"
                },
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>,
                  title: "İstehsalat obyektləri",
                  description: "Anbarlar və logistika mərkəzləri"
                }
              ].map((app, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Yanğına qarşı müdafiə sisteminiz üçün Dataline MMC-yə güvənə bilərsiniz. Peşəkar komandamız sizin üçün ən təhlükəsiz həlləri hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
