import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServerlerinIdaresiPage() {
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
            Serverlərin İdarə Olunması
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <h2 className="text-xl font-bold text-primary mb-4">Niyə peşəkar dəstək vacibdir?</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Əksər işçilərin səmərəli fəaliyyəti serverin etibarlı və fasiləsiz işindən asılıdır. Serverlərdə yaranmış problem İNTERNET şəbəkəsinə çıxışın itməsinə, elektron poçt sisteminin dayanmasına və qiymətli məlumatların itməsinə səbəb ola bilər. Bu səbəbdən serverlərə və sistem proqram təminatına peşəkarlar tərəfindən daimi xidmət göstərilməlidir.
            </p>
          </div>

          {/* Data Line Expertise */}
          <div className="mb-12">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent mb-8">
              <p className="text-foreground leading-relaxed">
                Data Line şirkətinin Texniki Dəstək Qrupunda serverlərin və sistem proqram təminatının idarə olunması üzrə ixtisaslaşmış, zəngin bilik və təcrübəyə malik peşəkarlar fəaliyyət göstərir. Belə peşəkarların daimi işə qəbul olunması çox baha başa gəlir. Bu səbəbdən serverlərin və sistem proqram təminatının idarə olunması üzrə işlərin, bu işlər üzrə ixtisaslaşmış İT şirkətə həvalə olunması təşkilat üçün daha səmərəlidir.
              </p>
            </div>

            {/* Services List */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təmin edilən xidmətlər
            </h2>

            <p className="text-muted-foreground mb-6">
              Data Line şirkəti "Serverlərin və sistem proqram təminatının idarə olunması" xidməti çərçivəsində aşağıdakıları təmin edir:
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Server avadanlıqlarının və sistem proqram təminatının monitorinqi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Nasazlıqların diaqnostikası"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Avadanlıqların işindəki nasazlıqların aradan qaldırılması üçün təkliflərin hazırlanması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Avadanlıqlar üzrə müntəzəm texniki xidmətin aparılması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Sistem proqram təminatının yazılması və köklənməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Sistem proqram təminatının yenilənməsi və patçların yazılması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Sistem proqram təminatının işinə dair məsləhətlərin verilməsi"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Sistem proqram təminatının qəzadan sonra işçi vəziyyətinin bərpa olunması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Serverlərdə şəbəkə hücumlarına və viruslara qarşı müdafiə sisteminin qurulması və idarə olunması"
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />,
                  text: "Məlumatların və sistem proqram təminatının ehtiyat surətlərinin çıxarılması"
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="mt-0.5">
                    {service.icon}
                  </div>
                  <p className="text-foreground">{service.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Xidmətin göstərilmə prosesi
            </h2>

            <div className="space-y-6">
              {/* Initial Assessment */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  İlkin araşdırma
                </h3>
                <p className="text-foreground leading-relaxed">
                  Xidmət göstərilməzdən əvvəl Sifarişçinin server kompleksində ilkin araşdırma aparılır.
                </p>
              </div>

              {/* Proposal */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Təkliflərin hazırlanması
                </h3>
                <p className="text-foreground leading-relaxed">
                  Araşdırmanın nəticələrinə əsasən serverin təkmilləşdirilməsi üçün müxtəlif təkliflər hazırlanır və Sifarişçiyə təqdim edilir. Bu zaman Sizin istəklərinizi və mütəxəssislərimizin tövsiyyələrini nəzərə alaraq ən sərfəli variantda Sizin probleminiz həll olunur.
                </p>
              </div>

              {/* Service Delivery */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Xidmətin göstərilməsi
                </h3>
                <p className="text-foreground leading-relaxed">
                  Serverlərin idarə olunması əsasən məsafədən idarəetmə vasitəsi ilə həyata keçirilir. Məsafədən idarəetmə vasitəsi ilə tam xidmət göstərmək mümkün olmadıqda Sifarişçinin ünvanına İT Administrator göndərilir.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium text-lg leading-relaxed">
              Serverlərinizin etibarlı və fasiləsiz işi üçün Data Line şirkətinə güvənə bilərsiniz. Peşəkar komandamız 7/24 dəstək xidməti ilə yanınızdadır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
