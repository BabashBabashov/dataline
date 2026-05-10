import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ITAutsorsinqPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <section className="relative">
        {/* Banner Image */}
        <div className="relative h-[200px] md:h-[220px]">
          <Image
            src="/images/services/it-autsorsinq.jpg"
            alt="İT Autsorsinq"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>

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
                    İT Autsorsinq
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    İT xidmətlərinin dəyəri daimi işçinin əmək haqqından daha aşağıdır. Vergi ödəmək lazım deyil.
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
              İnformasiya sisteminin qurulması və idarə olunması üzrə işlərin kənar təşkilata həvalə olunmasıdır. Təkcə böyük şirkətlərin deyil, eyni zamanda orta və kiçik biznes nümayəndələrinin də yüksək səviyyədə qurulmuş informasiya texnologiyalarının infrastrukturuna ehtiyacı vardır. Bunun üçün isə kifayət qədər vəsait tələb olunur. Bu zaman İT Autsorsinq xidmətindən faydalanmaq sərfəlidir.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              İT Autsorsinqin üstünlükləri:
            </h2>

            {/* Quality Service */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Keyfiyyətli xidmət
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Data Line şirkəti göstərdiyi xidmətlərin keyfiyyətinə və icra müddətinə görə maddi məsuliyyət daşıyır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Biz müştərilərimizə həftənin 7 günü 24 saat ərzində fasiləsiz və operativ xidmət göstəririk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Komandamız İnformasiya Texnologiyalarının müxtəlif istiqamətləri üzrə ixtisaslaşmış peşəkarlardan təşkil olunmuşdur və bu bizə istənilən problemi daha tez və dəqiq həll etməyə imkan yaradır.</span>
                </li>
              </ul>
            </div>

            {/* Financial Benefits */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Maliyyə, vaxt və şəxsi resurslara qənaət
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>İT Autsorsinq xidmətlərinin dəyəri, daimi işçinin əmək haqqından daha aşağıdır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Ofisdə daimi işçi üçün yer ayırmağa ehtiyac yoxdur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Əmək müqaviləsi bağlamırsınız.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Əmək haqqından vergi ödəmirsiniz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Kompüter, proqram təminatı və ofis texnikasının alınması, çatdırılması və quraşdırılması, ofis texnikasının təmiri, kartriclərin doldurulması, mini ATS-in köklənməsi, vebsaytın yenilənməsi və bunun kimi digər xidmətlər üçün müxtəlif təşkilatlara müraciət etmənizə ehtiyac yoxdur. Biz Sizin vaxtınıza qənaət etmək üçün bu işləri öz öhdəliyimizə götürməyə hazırıq.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Kompüter və ofis texnikasını, proqram təminatını topdanşatış qiymətlərlə əldə edirsiniz. Alınmış texnikaya zəmanət verilir.</span>
                </li>
              </ul>
            </div>

            {/* Commitment */}
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-medium">
                Data Line şirkəti qəbul olunmuş müraciətlərin icra müddətinə və göstərilmiş xidmətin keyfiyyətinə görə öhdəlik götürən və maddi məsuliyyət daşıyan bir şirkətdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
