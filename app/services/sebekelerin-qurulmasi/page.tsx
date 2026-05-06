import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function SebekelerinKurulmasiPage() {
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
            Şəbəkələrin Qurulması
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Niyə sürətli və təhlükəsiz şəbəkə vacibdir?</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Bildiyiniz kimi dünya artıq internet vasitəsi ilə çox kiçik hala düşüb, istədiyiniz vaxt istədiyiniz məlumatı ala bilirsiniz. Bunun üçün sizin İT şəbəkəniz sürətli və təhlükəsiz olmalıdır. Data Line sizə bu mövzuda şəbəkə sistemlərinin ilkin hissəsi olan kabelləşmə işindən başlayaraq, ən üst cihazların sazlanmasına qədər olan bütün işləri tam, sürətli və təhlükəsiz şəkildə yerinə yetirə bilər.
            </p>
          </div>

          {/* Data Line Approach */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Data Line yanaşması
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-5 bg-primary/5 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">
                  Biz şirkət olaraq bu mövzuda sertifikatlı mühəndislərimizlə işi layihələndirib sizin razılığınızı alandan sonra operativ şəkildə işi icra edib, təhvil veririk.
                </p>
              </div>

              <div className="flex items-start gap-3 p-5 bg-primary/5 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">
                  Müasir test cihazları ilə şəbəkəni test edib nəticələrini təqdim edirik.
                </p>
              </div>
            </div>
          </div>

          {/* Network Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təklif edilən şəbəkə həlləri
            </h2>

            <p className="text-muted-foreground mb-6">
              Data Line aşağıdakı şəbəkə həllərini müştərilərə təklif edir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "LAN şəbəkələri",
                  description: "Simli və simsiz (WiFi) local şəbəkələrin tətbiqi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "WAN şəbəkələri",
                  description: "Korporativ şəbəkələrin tətbiqi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Məsafədən çıxış",
                  description: "İnformasiya sistemlərinin resurslarına məsafədən çıxışın təşkil edilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Korporativ şəbəkələr",
                  description: "Çoxfunksiyalı korporativ şəbəkələrin tətbiq edilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Telekommunikasiya",
                  description: "Şəbəkə infrastrukturlarının yaradılması və müasirləşdirilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  title: "Texniki dəstək",
                  description: "Avadanlığa texniki dəstək"
                }
              ].map((solution, index) => (
                <div key={index} className="bg-secondary p-5 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-0.5">{solution.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-8">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              İş prossesi
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Layihələndirmə</h3>
                    <p className="text-foreground leading-relaxed">
                      Sertifikatlı mühəndislərimiz tərəfindən şəbəkə sisteminin professional şəkildə layihələndirilməsi
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Razılaşma</h3>
                    <p className="text-foreground leading-relaxed">
                      Layihənin təqdim edilməsi və müştərinin razılığının alınması
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">İcra</h3>
                    <p className="text-foreground leading-relaxed">
                      Kabelləşmə işindən başlayaraq avadanlıqların sazlanmasına qədər olan bütün işlərin operativ şəkildə icrası
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Test və təhvil</h3>
                    <p className="text-foreground leading-relaxed">
                      Müasir test cihazları ilə şəbəkənin test edilməsi və nəticələrin təqdim edilməsi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Şəbəkə infrastrukturunuzun sürətli, təhlükəsiz və etibarlı olması üçün Data Line şirkətinə güvənə bilərsiniz.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
