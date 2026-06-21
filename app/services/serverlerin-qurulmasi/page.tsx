"use client"

import { ServiceHero } from "@/components/service-hero"
import { ContactSection } from "@/components/contact-section"
import { CheckCircle2 } from "lucide-react"

export default function ServerlerinKurulmasiPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner Section with Card Starting from Navy Strip Middle */}
      <ServiceHero
        title="Serverlərin Qurulması"
        imageSrc="/images/services/serverlerin-qurulmasi.jpg"
        imageAlt="Serverlərin Qurulması"
      />

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
