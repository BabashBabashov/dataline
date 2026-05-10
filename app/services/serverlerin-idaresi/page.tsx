import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServerlerinIdaresiPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <section className="relative">
        {/* Banner Background */}
        <div className="h-[220px] bg-gradient-to-br from-primary/20 to-primary/5" />
        
        {/* Blue Strip that card will overlap */}
        <div className="h-40" style={{ backgroundColor: '#1A2B6D' }} />

        {/* Back Link */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors bg-primary/50 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Xidmətlərə geri
          </Link>
        </div>

        {/* Overlapping Service Card - Starting from middle of navy strip */}
        <div className="absolute left-0 right-0 top-[280px] md:top-[300px] z-10 pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="flex justify-center pointer-events-auto">
              <div className="relative max-w-3xl w-full">
                {/* Offset Frame */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 border border-primary-foreground/40 pointer-events-none" aria-hidden="true" />
                
                {/* Card */}
                <div className="relative bg-background p-12 md:p-16 shadow-xl">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight text-balance" style={{ color: '#1A2B6D' }}>
                    Serverlərin İdarə Olunması
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Serverlərə və sistem proqram təminatına peşəkar dəstək xidməti. Əksər işçilərin səmərəli fəaliyyəti serverin etibarlı və fasiləsiz işindən asılıdır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[180px]" />
      </section>

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
