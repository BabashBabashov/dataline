import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function SebekelerinIdaresiPage() {
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
            Şəbəkələrin İdarə Olunması
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Peşəkar şəbəkə idarəetməsi</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Şəbəkə infrastrukturunun davamlı və səmərəli işi üçün peşəkar idarəetmə vacibdir. Data Line şirkəti olaraq, LAN/WAN şəbəkələrinizin və İT infrastrukturunuzun dizaynı, quraşdırılması və yaranan problemlərin aradan qaldırılması üzrə tam həll təklif edirik.
            </p>
          </div>

          {/* Services List */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təmin edilən xidmətlər
            </h2>

            <div className="space-y-4">
              {/* Service 1 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      LAN/WAN şəbəkəsi və İT infrastrukturunun idarə olunması
                    </h3>
                    <p className="text-muted-foreground">
                      Şəbəkə və İT infrastrukturunun dizaynı, quraşdırılması və yaranan problemlərin aradan qaldırılması
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Şəbəkə avadanlıqlarının optimallaşdırılması
                    </h3>
                    <p className="text-muted-foreground">
                      Şəbəkə avadanlıqlarının funksionallığını maksimum səviyyədə artırmaq, təhlükəsizlik üçün ətraflı icra planlarını hazırlamaq
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Avadanlıqların konfiqurasiyası
                    </h3>
                    <p className="text-muted-foreground">
                      Router, Switch və Firewall-ları müştərinin standartlarına uyğun olaraq konfiqurasiya edilməsi
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Problemlərin həlli
                    </h3>
                    <p className="text-muted-foreground">
                      Şəbəkə problemlərini müəyyən edib həll etmək
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Monitorinq sistemi
                    </h3>
                    <p className="text-muted-foreground">
                      Monitorinq sistemi vasitəsilə infrastruktur elementlərinin konfiqurasiyası və monitorinqini aparmaq
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 6 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Trafikin optimallaşdırılması
                    </h3>
                    <p className="text-muted-foreground">
                      Şəbəkənin yüklənilməsi və trafikin optimallaşdırılması
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 7 */}
              <div className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Sistemlərin quraşdırılması və sənədləşdirilməsi
                    </h3>
                    <p className="text-muted-foreground">
                      Avadanlıq və proqram təminatı sistemləri, o cümlədən yeni sistemlərin quraşdırılması və sənədləşdirilməsi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Üstünlüklərimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Sürətli həll</h3>
                <p className="text-muted-foreground text-sm">
                  Problemlərin tez müəyyən edilməsi və aradan qaldırılması
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Təhlükəsizlik</h3>
                <p className="text-muted-foreground text-sm">
                  Maksimum təhlükəsizlik üçün ətraflı icra planları
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Davamlı izləmə və performans optimallaşdırılması
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Şəbəkə infrastrukturunuzun peşəkar idarə olunması üçün Data Line şirkətinə güvənə bilərsiniz. 7/24 dəstək xidməti ilə yanınızdayıq.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
