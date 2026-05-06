import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function TexnikiDestekPage() {
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
            Texniki Dəstək
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Kompüterlərə xidmət</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Kompüterlərin etibarlı və fasiləsiz işi, təşkilatın uğurlu fəaliyyəti üçün vacib şərtdir. Bu gün kompüterlər çoxlu sayda funksiyaları icra edirlər və onların xarab olması satış şöbəsinin, mühasibatlığın və hətta bütün təşkilatın fəaliyyətini ən uyğun olmayan anda dayandıra bilər.
            </p>
            <p className="text-muted-foreground mt-4">
              Bu sür halların qarşısını almaq üçün DATALINE şirkəti aşağıdakı xidmətləri təklif edir:
            </p>
          </div>

          {/* Services List */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təmin edilən xidmətlər
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Kompüter və avadanlıqların xarab olmasının və aşınmasının qarşısını alan profilaktik tədbirlərin aparılması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Kompüterlərin və periferiyaların (printer, skaner, faks və s.) operativ təmiri və dəyişdirilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "İstifadəçilərə kompüterə, proqram təminatına və digər avadanlıqlara aid konsultasiyaların verilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Nasazlıqların diaqnostika olunması, proqram təminatında və avadanlıqlarda problemlərin aradan qaldırılması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Virus yoluxmuş kompüter və notbukların diaqnostikası və müalicəsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "İstismar olunan avadanlıqların yenilənməsi ilə bağlı təkliflərin hazırlanması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Ofis daxilində işçilərin yerdəyişməsi zamanı kompüterlərin demontaj olunması, köçürülməsi və montaj olunması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Printerlərin, faksların və kseroks aparatlarının tükənən materiallarının dəyişdirilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Periferiyaların qoşulması və köklənməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Mini ATS-lərin satışı, qurulması, montajı, proqramlaşdırılması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Viruslardan və xakerlərdən müdafiə sisteminin yaradılması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Kompüterlərin köklənməsi və avadanlıqların yenilənməsi (upgrade)"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Proqram təminatının köklənməsi və yenilənməsi"
                }
              ].map((service, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{service.icon}</div>
                    <p className="text-foreground text-sm">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Delivery Method */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Xidmətin göstərilmə üsulları
            </h2>

            <div className="space-y-6">
              {/* Remote Support */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Məsafədən dəstək</h3>
                    <p className="text-foreground leading-relaxed">
                      DATALINE şirkətinin əməkdaşları ilk olaraq məsafədən idarəetmə vasitələrinin köməyi ilə xidmət göstərir. Bu üsul sürətli və səmərəli həll yolu kimi prioritetdir.
                    </p>
                  </div>
                </div>
              </div>

              {/* On-site Support */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Yerdə dəstək</h3>
                    <p className="text-foreground leading-relaxed">
                      Əgər məsafədən idarəetmə üsulu ilə tam xidmət göstərmək mümkün deyilsə, Sifarişçinin ünvanına İT mütəxəssis göndərilir.
                    </p>
                  </div>
                </div>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Operativ həll</h3>
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
                <h3 className="text-lg font-semibold text-primary mb-2">Profilaktika</h3>
                <p className="text-muted-foreground text-sm">
                  Problemlərin qarşısını alan müntəzəm tədbirlər
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Peşəkar komanda</h3>
                <p className="text-muted-foreground text-sm">
                  Təcrübəli İT mütəxəssisləri tərəfindən dəstək
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Kompüterlərinizin və avadanlıqlarınızın etibarlı işi üçün DATALINE şirkətinə güvənə bilərsiniz. 7/24 texniki dəstək xidməti ilə yanınızdayıq.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
