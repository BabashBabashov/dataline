import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function WebSehifelerPage() {
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
            WEB Səhifələr
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Peşəkar veb-sayt hazırlanması</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Biz sifarişçilərimizin tələb və istəkləri əsasında, onların fəaliyyət sahələrinin əsas elementlərini nəzərə çarpdıran orijinal və yüksək zövqlü veb-saytların yaradılması üzrə tam xidmətlər kompleksini təklif edirik.
            </p>
          </div>

          {/* Design Expertise */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Dizayn bacarıqlarımız
            </h2>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent mb-8">
              <p className="text-foreground leading-relaxed">
                Dizaynerlərimizin peşəkarlığı, yüksək zövqləri və ağılasığmaz yaradıcılıq ambisiyaları müxtəlif növ layihələrin həyata keçirilməsinə imkan verir. Firma stillərinin yaradılması, loqotiplər, satış nişanları, reklam-poliqrafiya məhsullarının hazırlanması, korporativ və imic saytlarının yaradılması, arxitektura dizaynı, interyer dizaynı və illüsturasiyaları fəaliyyətimizin əsasını təşkil edir.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Yanaşmamız
            </h2>

            <div className="bg-accent/10 p-6 rounded-lg mb-8">
              <p className="text-primary font-medium text-lg leading-relaxed">
                Öz individuallığımızı qoruyaraq, sifarişçilərimizin fikirlərinə hörmətlə yanaşır, fəaliyyət sahələrini və tələblərini öyrənir, istəklərini həyata keçiririk.
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-foreground leading-relaxed">
                Müştərilərimizin zövqünü oxşayan müasir, rahat, funksional və nəfis veb-saytlar işləyib hazırlayırıq.
              </p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təqdim edilən xidmətlər
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Korporativ veb-saytlar",
                  description: "Şirkətlər üçün professional veb-saytların yaradılması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "İmic saytları",
                  description: "Brend imicini gücləndirən müasir dizayn həlləri"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Firma stilləri",
                  description: "Şirkətin vizual identinin yaradılması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Loqotiplər",
                  description: "Yaradıcı və yaddaqalan loqotiplərin hazırlanması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Satış nişanları",
                  description: "Effektiv marketinq vasitələrinin yaradılması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Reklam-poliqrafiya",
                  description: "Poliqrafiya məhsullarının dizaynı"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Arxitektura dizaynı",
                  description: "Memarlıq layihələrinin vizual dizaynı"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "İnteryer dizaynı",
                  description: "Daxili məkanların dizayn həlləri"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "İllüstrasiyalar",
                  description: "Orijinal qrafik illüstrasiyaların yaradılması"
                }
              ].map((service, index) => (
                <div key={index} className="bg-secondary p-5 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-0.5">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-9">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Veb-saytlarımızın xüsusiyyətləri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Müasir</h3>
                <p className="text-muted-foreground text-sm">
                  Ən son texnologiyalar və dizayn trendləri
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Rahat</h3>
                <p className="text-muted-foreground text-sm">
                  İstifadəsi asan və intuитив interfeys
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Funksional</h3>
                <p className="text-muted-foreground text-sm">
                  Bütün lazımi funksionallıq və xüsusiyyətlər
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Nəfis</h3>
                <p className="text-muted-foreground text-sm">
                  Yüksək zövqlü və estetik görünüş
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Təhlükəsiz</h3>
                <p className="text-muted-foreground text-sm">
                  SSL sertifikatı və təhlükəsizlik protokolları
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Mobil uyumlu</h3>
                <p className="text-muted-foreground text-sm">
                  Bütün cihazlarda mükəmməl görünüş
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Veb-saytınızın peşəkar hazırlanması üçün Data Line şirkətinə güvənə bilərsiniz. Sizin üçün ən yaxşı həlləri hazırlamağa hazırıq.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
