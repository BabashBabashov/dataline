import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function SesSistemleriPage() {
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
                    Səs Sistemləri
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Dataline MMC olaraq obyektlər üçün müasir və etibarlı səs və musiqi sistemlərinin layihələndirilməsi, quraşdırılması və texniki xidməti sahəsində kompleks həllər təqdim edirik.
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
              Sistemlər məkanın təyinatına, sahəsinə və akustik xüsusiyyətlərinə uyğun şəkildə seçilir və konfiqurasiya olunur. Məqsədimiz – obyekt daxilində aydın, balanslı və keyfiyyətli səs mühitinin yaradılmasıdır.
            </p>
          </div>

          {/* Applications */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Tətbiq sahələri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, title: "Ofis mərkəzləri", description: "BG və musiqi sistemi" },
                { icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>, title: "Ticarət obyektləri", description: "Mağaza və mall sistemləri" },
                { icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, title: "Hotellər", description: "Lobi və otaq sistemləri" },
                { icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, title: "Restoranlar", description: "Zona səs sistemləri" },
                { icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>, title: "Təhsil müəssisələri", description: "Sinif və auditoriya sistemləri" },
                { icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, title: "Konfrans zalları", description: "Tədbir və konfrans sistemləri" }
              ].map((app, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">{app.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{app.title}</h3>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Xidmətlərimizə daxildir
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Tavan və divar tipli kolonların montajı", description: "Məkanın dizaynına uyğun müxtəlif tipli akustik sistemlərin quraşdırılması" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Multi-zone (çox zonalı) sistemlər", description: "Fərqli zonalar üçün ayrı-ayrı idarə oluna bilən səs sistemləri" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Mərkəzləşdirilmiş və lokal idarəetmə", description: "Bütün sistemin və ya ayrı zonaların mərkəzdən və ya yerindən idarə olunması" },
                { icon: <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />, title: "Bluetooth, USB və IP audio inteqrasiyası", description: "Müasir bağlantı texnologiyaları ilə wireless və kabel bağlantı imkanları" }
              ].map((service, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Üstünlüklərimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Yüksək keyfiyyət</h3>
                <p className="text-muted-foreground text-sm">Aydın və balanslı səs ötürülməsi</p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Estetik inteqrasiya</h3>
                <p className="text-muted-foreground text-sm">Məkan dizaynına uyğun həllər</p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Texniki dəstək</h3>
                <p className="text-muted-foreground text-sm">Peşəkar quraşdırma və xidmət</p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Səs sisteminiz üçün Dataline MMC-yə güvənə bilərsiniz. Peşəkar komandamız sizin üçün ən keyfiyyətli həlləri hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
