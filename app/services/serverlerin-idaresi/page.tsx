"use client"

import { CheckCircle2 } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { ContactSection } from "@/components/contact-section"

export default function ServerlerinIdaresiPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServiceHero
        title="Serverlərin İdarə Olunması"
        imageSrc="/images/services/serverlerin-idaresi.jpg"
        imageAlt="Serverlərin İdarə Olunması"
      />

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg shadow-lg mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Data Line şirkətinin Texniki Dəstək Qrupunda serverlərin və sistem proqram təminatının idarə olunması üzrə ixtisaslaşmış peşəkarlar fəaliyyət göstərir.
            </p>
          </div>

          {/* Data Line Expertise */}
          <div className="mb-12">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent mb-8">
              <p className="text-foreground leading-relaxed">
                Belə peşəkarların daimi işə qəbul olunması çox baha başa gəlir. Bu səbəbdən serverlərin və sistem proqram təminatının idarə olunması üzrə işlərin, bu işlər üzrə ixtisaslaşmış İT şirkətə həvalə olunması təşkilat üçün daha səmərəlidir.
              </p>
            </div>

            {/* Services List */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Təmin edilən xidmətlər
            </h2>

            <div className="space-y-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Server avadanlıqlarının və sistem proqram təminatının monitorinqi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Nasazlıqların diaqnostikası" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Avadanlıqların işindəki nasazlıqların aradan qaldırılması üçün təkliflərin hazırlanması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Avadanlıqlar üzrə müntəzəm texniki xidmətin aparılması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının yazılması və köklənməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının yenilənməsi və patçların yazılması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının işinə dair məsləhətlərin verilməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Sistem proqram təminatının qəzadan sonra işçi vəziyyətinin bərpa olunması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Serverlərdə şəbəkə hücumlarına və viruslara qarşı müdafiə sisteminin qurulması və idarə olunması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Məlumatların və sistem proqram təminatının ehtiyat surətlərinin çıxarılması" }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="mt-0.5">{service.icon}</div>
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
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  İlkin araşdırma
                </h3>
                <p className="text-foreground leading-relaxed">
                  Xidmət göstərilməzdən əvvəl Sifarişçinin server kompleksində ilkin araşdırma aparılır.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Təkliflərin hazırlanması
                </h3>
                <p className="text-foreground leading-relaxed">
                  Araşdırmanın nəticələrinə əsasən serverin təkmilləşdirilməsi üçün müxtəlif təkliflər hazırlanır və Sifarişçiyə təqdim edilir.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Xidmətin göstərilməsi
                </h3>
                <p className="text-foreground leading-relaxed">
                  Serverlərin idarə olunması əsasən məsafədən idarəetmə vasitəsi ilə həyata keçirilir.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Serverlərinizin etibarlı və fasiləsiz işi üçün Data Line şirkətinə güvənə bilərsiniz. Peşəkar komandamız 7/24 dəstək xidməti ilə yanınızdadır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
