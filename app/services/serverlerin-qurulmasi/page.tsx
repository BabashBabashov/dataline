import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ServerlerinKurulmasiPage() {
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
                    Serverlərin Qurulması
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Server - böyük həcmdə informasiyanın emalı üçün nəzərdə tutulmuş xüsusi kompüterdir. Biz müxtəlif növ serverlərin peşəkar quraşdırılmasını həyata keçiririk.
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
              Server istifadəçilərin İNTERNET şəbəkəsinə çıxışının təmin olunması, elektron məktubların göndərilməsi, məlumatların saxlanması kimi kritik işləri yerinə yetirir.
            </p>
          </div>

          {/* Server Types */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Server növləri
            </h2>

            <div className="space-y-4">
              {[
                { title: "Domain Controller", desc: "Domain içərisindəki istifadəçi hesablarının idarə edilməsi və kimlik doğrulamaları" },
                { title: "File Server", desc: "Böyük həcmdə yaddaşa malik və fayl əməliyyatları üçün optimallaşdırılmış server" },
                { title: "FTP Server", desc: "Verilənlərin transfer protokolu ilə faylların sürətli şəkildə köçürülməsi" },
                { title: "Web Server", desc: "Web səhifələrinin internet üzərində yayınında məsuliyyət daşıyan server" },
                { title: "Mail Server", desc: "Elektron məktubların bir kompüterdən digərinə ötürülməsini təmin edən sistem" },
                { title: "Firewall & Proxy Server", desc: "Şəbəkə təhlükəsizliyi və nəzarət üçün keçid nöqtəsi" },
                { title: "Antivirus Server", desc: "Bütün kompüterləri bir mərkəzdən antivirusla qorumaq imkanı" },
                { title: "DB Server", desc: "Verilənlər bazasının yerləşdiyi və idarə olunduğu server" },
                { title: "Terminal Server", desc: "Uzaqdan giriş ilə server resurslarının istifadəsi imkanı" },
                { title: "Print Server", desc: "Printerlərin kollektiv istifadəsi üçün xüsusi həll" },
                { title: "SharePoint", desc: "Daxili web saytların yaradılması və sənədlərin idarə edilməsi" },
                { title: "ESXi Virtualization", desc: "Linux əsaslı virtuallaşdırma sistemi ilə resurslara qənaət" },
                { title: "Hyper-V Virtualization", desc: "Microsoft hypervisor əsaslı virtuallaşdırma sistemi" }
              ].map((server, index) => (
                <div key={index} className="bg-primary/5 p-5 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    {server.title}
                  </h3>
                  <p className="text-muted-foreground text-sm ml-7">
                    {server.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Line Solutions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Data Line şəbəkə həlləri
            </h2>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>LAN şəbəkələrinin (simli və simsiz - WiFi local şəbəkələr) tətbiqi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>WAN şəbəkələrinin (korporativ şəbəkələr) tətbiqi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>İnformasiya sistemlərinin resurslarına məsafədən çıxışın təşkil edilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Çoxfunksiyalı korporativ şəbəkələrin tətbiq edilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Telekommunikasiya şəbəkə infrastrukturlarının yaradılması və müasirləşdirilməsi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Avadanlığa texniki dəstək</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <p className="text-primary font-medium">
              Serverlərinizin peşəkar quraşdırılması üçün Data Line şirkətinə güvənə bilərsiniz. Təcrübəli komandamız sizin üçün ən müasir həlləri hazırlamağa hazırdır.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
