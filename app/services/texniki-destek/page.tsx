import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function TexnikiDestekPage() {
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
                    Texniki Dəstək
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Kompüterlərin etibarlı və fasiləsiz işi, təşkilatın uğurlu fəaliyyəti üçün vacibdir. DATALINE şirkəti profilaktik tədbirlərdən operativ təmirə qədər tam xidmət təklif edir.
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
              Kompüter xarab olması satış şöbəsinin, mühasibatlığın və hətta bütün təşkilatın fəaliyyətini dayandıra bilər. Bu sür halların qarşısını almaq üçün burayıq.
            </p>
          </div>

          {/* Services List */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Təmin edilən xidmətlər</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Profilaktik tədbirlərin aparılması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Kompüterlərin operativ təmiri" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Konsultasiyaların verilməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Nasazlıqların aradan qaldırılması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Virus diaqnostikası və müalicəsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Avadanlıqların yenilənməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Kompüterlərin köçürülməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Printer və kseroks xidməti" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Periferiyaların qoşulması" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Mini ATS xidmətləri" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Virus müdafiə sistemi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Kompüterlərin yenilənməsi" },
                { icon: <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />, text: "Proqramların köklənməsi" }
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

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Üstünlüklərimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Operativ həll</h3>
                <p className="text-muted-foreground text-sm">Problemlərin tez həlli</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Profilaktika</h3>
                <p className="text-muted-foreground text-sm">Müntəzəm tədbirlər</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Peşəkar komanda</h3>
                <p className="text-muted-foreground text-sm">Təcrübəli İT mütəxəssisləri</p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Kompüterlərinizin etibarlı işi üçün DATALINE şirkətinə güvənə bilərsiniz. 7/24 texniki dəstək xidməti ilə yanınızdayıq.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
