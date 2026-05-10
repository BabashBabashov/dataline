import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function WebSehifelerPage() {
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
                    Web Səhifələr
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Sifarişçilərimizin tələb və istəkləri əsasında, orijinal və yüksək zövqlü veb-saytların yaradılması üzrə tam xidmətlər kompleksi təqdim edirik.
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
              Dizaynerlərimizin peşəkarlığı və yaradıcılıq ambisiyaları müxtəlif növ layihələrin həyata keçirilməsinə imkan verir. Sizə müasir, rahat və funksional veb-saytlar işləyib hazırlayırıq.
            </p>
          </div>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Təqdim edilən xidmətlər</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Korporativ veb-saytlar", description: "Şirkətlər üçün professional saytlar" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "İmic saytları", description: "Brend imici üçün dizayn həlləri" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Loqotiplər", description: "Yaddaqalan loqotiplər" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Reklam-poliqrafiya", description: "Marketinq vasitələri" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Arxitektura dizaynı", description: "Memarlıq layihələri" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "İnteryer dizaynı", description: "Daxili məkan dizaynı" }
              ].map((service, index) => (
                <div key={index} className="bg-secondary p-5 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-0.5">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-9">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Veb-saytlarımızın xüsusiyyətləri</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Müasir</h3>
                <p className="text-muted-foreground text-sm">Ən son texnologiyalar</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Rahat</h3>
                <p className="text-muted-foreground text-sm">İntuитив interfeys</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Funksional</h3>
                <p className="text-muted-foreground text-sm">Tam funksionallıq</p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Veb-saytınızın peşəkar hazırlanması üçün Data Line şirkətinə güvənə bilərsiniz. Sizin üçün ən yaxşı həlləri hazırlamağa hazırıq.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
