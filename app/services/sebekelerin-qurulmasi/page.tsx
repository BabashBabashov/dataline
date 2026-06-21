"use client"

import { ServiceHero } from "@/components/service-hero"
import { ContactSection } from "@/components/contact-section"
import { CheckCircle2 } from "lucide-react"

export default function SebekelerinKurulmasiPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServiceHero
        title="Şəbəkələrin Qurulması"
        imageSrc="/images/services/sebekelerin-qurulmasi.jpg"
        imageAlt="Şəbəkələrin Qurulması"
      />

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              İT şəbəkəniz sürətli və təhlükəsiz olmalıdır. Biz sertifikatlı mühəndislərimizlə layihələndirmədən təhvilə qədər tam xidmət göstəririk.
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
              {[
                {
                  step: "1",
                  title: "Layihələndirmə",
                  description: "Sertifikatlı mühəndislərimiz tərəfindən şəbəkə sisteminin professional şəkildə layihələndirilməsi"
                },
                {
                  step: "2",
                  title: "Razılaşma",
                  description: "Layihənin təqdim edilməsi və müştərinin razılığının alınması"
                },
                {
                  step: "3",
                  title: "İcra",
                  description: "Kabelləşmə işindən başlayaraq avadanlıqların sazlanmasına qədər olan bütün işlərin operativ şəkildə icrası"
                },
                {
                  step: "4",
                  title: "Test və təhvil",
                  description: "Müasir test cihazları ilə şəbəkənin test edilməsi və nəticələrin təqdim edilməsi"
                }
              ].map((process, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-xl">{process.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{process.title}</h3>
                      <p className="text-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Şəbəkə infrastrukturunuzun sürətli, təhlükəsiz və etibarlı olması üçün Data Line şirkətinə güvənə bilərsiniz.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
