import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function MiniAtsIpTelefoniyaPage() {
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
            Mini ATS və İP Telefoniya
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Müasir rabitə həlləri</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Dataline şirkəti sizə ən müasir mini ATS və İP telefoniya sistemlərinin satışını, quraşdırılması və inteqrasiyasını təklif edir. Təklif etdiyimiz sistemlərlə rahat rabitə əlaqəsinə sahib olacaqsınız.
            </p>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-semibold">
                Hətta dünyanın müxtəlif yerlərində olsanız belə ofislərinizlə daxili nömrənizlə əlaqə yarada bilərsiniz. Həmişə əlaqədə qalın!
              </p>
            </div>
          </div>

          {/* Mini ATS Systems */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Mini ATS Sistemləri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Daxili rabitə
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Ofis daxilində pulsuz daxili nömrələr vasitəsi ilə rabitə
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Gözləmə və yönləndirmə
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Zənglərin gözləməyə qoyulması və istənilən nömrəyə yönləndirilməsi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Səsli bildiriş
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Giriş edən zənglər üçün avtomatik səsli cavab və salamlama mesajları
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Zəng tarixçəsi
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Bütün gələn, gedən və itirilmiş zənglərin qeydiyyatı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IP Telephony */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              İP Telefoniya
            </h2>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <p className="text-foreground leading-relaxed">
                İP telefoniya sistemi vasitəsi ilə internet bağlantısı olan hər yerdən ofis nömrənizlə zəng edə və zəng qəbul edə bilərsiniz. Kompüter, smartfon və ya İP telefon vasitəsi ilə daim əlaqədə olun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Qlobal əlaqə
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dünyanın hər yerindən ofislərlə əlaqə yaratma imkanı
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Sərfəli zənglər
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Beynəlxalq zənglər üçün sərfəli tariflər
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Mobil tətbiq
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Smartfonda ofis nömrənizi istifadə etmə imkanı
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Video zənglər
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Yüksək keyfiyyətli video konfrans imkanı
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
                  title: "Daxili nömrələr",
                  description: "Ofis daxilində pulsuz daxili zənglər və rabitə"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Qeyri-məhdud zonalar",
                  description: "Dünyanın hər yerindən ofislərlə əlaqə qurma imkanı"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Yüksək keyfiyyət",
                  description: "HD səs keyfiyyəti və aydın rabitə"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Avtomatlaşdırma",
                  description: "Zənglərin avtomatik yönləndirilməsi və cavablandırılması"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Qeydiyyat və hesabat",
                  description: "Bütün zənglərin tarixçəsi və hesabatlığı"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />,
                  title: "Asan inteqrasiya",
                  description: "Mövcud sistemlərlə asan inteqrasiya və genişlənmə imkanı"
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>,
                  title: "Ofislər",
                  description: "Korporativ rabitə"
                },
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>,
                  title: "Mağazalar",
                  description: "Satış nöqtələri"
                },
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>,
                  title: "Hotellər",
                  description: "Mehmanxana sistemləri"
                },
                {
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>,
                  title: "Səhiyyə",
                  description: "Klinika və xəstəxanalar"
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
              Mini ATS və İP telefoniya sisteminiz üçün Dataline şirkətinə güvənə bilərsiniz. Professional komandamız sizin üçün ən müasir və sərfəli rabitə həllərini hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
