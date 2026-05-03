import Image from "next/image"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative h-[420px] md:h-[480px]">
          <Image
            src="/images/industries-hero.jpg"
            alt="Dataline MMC - Niyə Biz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>

        {/* Navy strip that the card will overlap */}
        <div className="h-16 bg-primary" />

        {/* Centered overlapping card */}
        <div className="absolute left-0 right-0 top-[240px] md:top-[280px] z-10 pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="flex justify-center pointer-events-auto">
              <div className="bg-background max-w-2xl w-full shadow-xl">
                <div className="p-10 md:p-14 text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
                    NİYƏ BİZ
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[200px] md:h-[180px]" />
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary p-8 md:p-12 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-justify">
              2015-ci ildə yaradılmış Dataline şirkəti qısa müddət ərzində İT autsorsinq, İT xidmətlərinin göstərilməsi, sistem inteqrasiyası, serverlərin qurulması, nəzarət sistemləri, kommunikasiya üzrə ixtisaslaşıb və öz müştərilərinə xidmət göstərməkdədir. Şirkətimiz yüksək ixtisaslı təcrübəli gənc mütəxəssislərdən təşkil olunmuşdur. Şirkətimizin əsas məqsədi müştərilərə keyfiyyətli İT autsorsinq təklif etməkdir. Şirkətimiz cavan olmasına baxmayaraq müştərilərimiz ilə şəffaf və möhkəm əlaqəlar qurur və Dataline brendini etibarlı tərəfdaş kimi formalaşdırmağa səy göstəririk. Biz hər bir müştərimizə fərdi şəkildə yanaşırıq.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Keyfiyyətli Xidmət</h3>
              <p className="text-muted-foreground">Yüksək standartlara uyğun peşəkar həllər</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Peşəkar Komanda</h3>
              <p className="text-muted-foreground">Təcrübəli gənc mütəxəssislər</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">2015-ci ildən</h3>
              <p className="text-muted-foreground">İllərdir təcrübə və etibar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Separator Line */}
          <div className="w-full h-px bg-border mb-16" />

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            SERTİFİKATLAR
          </h2>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-secondary rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-center p-6">
                  <svg
                    className="w-20 h-20 text-primary/30 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-muted-foreground text-sm">
                    Sertifikat {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
