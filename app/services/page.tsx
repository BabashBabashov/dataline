"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ContactSection } from "@/components/contact-section"

export default function ServicesPage() {
  const [cardVisible, setCardVisible] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<'card' | null>(null)

  useEffect(() => {
    setCardVisible(true)
  }, [])
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute right-0 top-0 bottom-0 h-[534px]" style={{ width: 'calc(100% - 128px)', right: '128px' }}>
          <Image
            src="/images/services/banner1.jpg"
            alt="Dataline MMC - Xidmətlər"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
        
        {/* Spacer for banner */}
        <div className="h-[534px]" />

        {/* Navy strip that the card will overlap */}
        <div className="h-[15px] bg-primary mr-[128px]" />

        {/* Centered overlapping card - overlaps banner, navy strip, and white background */}
        <div className="absolute z-10 pointer-events-none right-0 md:right-[272px] top-[267px]">
          <div className="pointer-events-auto">
            <div
              className={`overflow-hidden transition-all duration-1000 ease-out w-[90vw] md:w-[685px] h-[400px] md:h-[445px] ${
                cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div
                className="shadow-2xl h-full transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: hoveredSection === 'card' ? '#E8E8E8' : '#F2F2F2',
                  transform: hoveredSection === 'card' ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredSection('card')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="p-12 text-center flex flex-col justify-center h-full">
                  <div className="w-16 h-0.5 bg-primary mb-6 mx-auto transition-all duration-300"
                       style={{ width: hoveredSection === 'card' ? '120px' : '64px' }} />
                  <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
                    XİDMƏTLƏR
                  </h1>
                  <p className="text-muted-foreground text-base mt-4">
                    Peşəkar həllər və keyfiyyətli xidmətlər
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[280px] md:h-[320px]" />
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary p-8 text-center flex flex-col justify-center items-center rounded-lg shadow-lg mb-16 min-h-[200px]">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-justify">
              Biz əminik ki, tez bir zamanda sizin problemlərinizi həll edib sizə ən yaxşı xidmətləri təqdim edəcəyik. Siz asanlıqla problemlərinizi bizim şirkətə etibar edə bilərsiniz.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IT Autsorsinq",
                slug: "it-autsorsinq",
                description: "İT xidmətlərinin dəyəri daimi işçinin əmək haqqından daha aşağıdır. Ofisdə daimi işçi üçün yer ayırmağa ehtiyac yoxdur. Əmək müqaviləsi bağlamırsınız. Əmək haqqından vergi ödəmirsiniz.\n\nBiz sizin üçün səmərəli həll."
              },
              {
                title: "Server otaqları",
                slug: "server-otaqlari",
                description: "İT sistemini təşkil edən bütün avadanlıqların və serverlərin təhlükəsiz fəaliyyəti üçün istifadə olunur. Server otağında optimal mühitin yaradılması üçün xüsusi göstəricilər nəzərə alınmalıdır.\n\nBiz peşəkar yanaşma təklif edirik."
              },
              {
                title: "Serverlərin qurulması",
                slug: "serverlerin-qurulmasi",
                description: "İstifadəçilərin İNTERNET şəbəkəsinə çıxışının təmin olunması və idarə edilməsi. Elektron məktubların göndərilməsi və qabul edilməsi. Məlumatların saxlanılması və idarə olunması.\n\nTam həll təklif edirik."
              },
              {
                title: "Serverlərin idarəsi",
                slug: "serverlerin-idaresi",
                description: "Texniki Dəstək Qrupunda serverlərin və sistem proqram təminatının idarə olunması üzrə ixtisaslaşmış peşəkarlar fəaliyyət göstərir. Zəngin bilik və təcrübə.\n\n7/24 dəstək xidməti."
              },
              {
                title: "Şəbəkələrin qurulması",
                slug: "sebekelerin-qurulmasi",
                description: "Dünya artıq internet vasitəsi ilə çox kiçik hala düşüb. İstədiyiniz vaxt istədiyiniz məlumatı ala bilirsiniz. Bunun üçün İT şəbəkəniz sürətli və təhlükəsiz olmalıdır.\n\nBiz sizi qoruyuruq."
              },
              {
                title: "Şəbəkələrin idarəsi",
                slug: "sebekelerin-idaresi",
                description: "LAN/WAN şəbəkəsi və İT infrastrukturunun dizaynı və quraşdırılması. Yaranan problemlərin aradan qaldırılması və texniki dəstək.\n\nSürətli həll üsulları."
              },
              {
                title: "WEB səhifələr",
                slug: "web-sehifeler",
                description: "Sifarişçilərimizin tələb və istəkləri əsasında, onların fəaliyyət sahələrinin əsas elementlərini nəzərə çarpdıran orijinal və yüksək zövqlü veb-saytların yaradılması.\n\nMüasir dizayn həlləri."
              },
              {
                title: "Texniki dəstək",
                slug: "texniki-destek",
                description: "Kompüterlərin etibarlı və fasiləsiz işi, təşkilatın uğurlu fəaliyyəti üçün vacib şərtdir. Bu gün kompüterlər çoxlu sayda funksiyaları icra edirlər.\n\nBiz hər zaman yanınızdayıq."
              },
              {
                title: "Yanğın siqnalizasiya",
                slug: "yanigin-siqnalizasiya",
                description: "Avtomatik tüstü və istilik detektorlarının quraşdırılması. Ünvanlı və ünvanlı olmayan sistemlərin tətbiqi. Səsli və işıqlı xəbərdarlıq qurğuları.\n\nMərkəzi idarəetmə panelləri ilə."
              },
              {
                title: "Yanğınsöndürmə",
                slug: "yaniginsondurme",
                description: "Sprinkler sistemlərinin quraşdırılması. Qazlı söndürmə sistemləri (server otaqları üçün ideal). Köpüklü və su əsaslı sistemlər. Avtomatik və manual aktivasiya.\n\nTəhlükəsizlik standartlarına uyğun."
              },
              {
                title: "Səs sistemləri",
                slug: "ses-sistemleri",
                description: "Gücləndirici sistemlərin quraşdırılması. Akustik kolon və subwoofer sistemləri. Mikser və DSP avadanlıqlarının sazlanması. Konfrans və tədbirlər üçün həllər.\n\nYüksək keyfiyyətli səs."
              },
              {
                title: "Səs sistemlərinin qurulması",
                slug: "ses-sistemlerinin-qurulmasi",
                description: "Peşəkar səs sistemlərinin layihələndirilməsi və quraşdırılması. Akustik hesablamalar və optimal avadanlıq seçimi. Müxtəlif məkanlar üçün fərdi həllər.\n\nTəcrübəli komanda ilə."
              },
              {
                title: "Nəzarət sistemləri (Kamera)",
                slug: "nazaret-sistemleri-kamera",
                description: "Kamera video müşahidə sistemlərinin qurulması. Analoq, Wifi, İP və PTZ kameralar. DVR və NVR qurğuları. İnternet üzərindən istənilən nöqtədən nəzarət.\n\nMüasir texnologiya ilə."
              },
              {
                title: "Nəzarət sistemləri (Keçid)",
                slug: "nazaret-sistemleri-kecid",
                description: "Biometrik sistemlər, kartlı keçid, barmaq izi və üz tanıma. Turniket və şlaqbaum sistemləri. Personalın giriş-çıxışına nəzarət və hesabatlar.\n\nTam avtomatlaşdırılmış həll."
              },
              {
                title: "Mini ATS və İP telefoniya",
                slug: "mini-ats-ip-telefoniya",
                description: "Müasir mini ATS və İP telefoniya sistemləri. Dünyanın hər yerindən ofislərlə əlaqə. Daxili nömrələr və rahat rabitə. Yüksək keyfiyyətli quraşdırılma.\n\nHəmişə əlaqədə qalın."
              }
            ].map((service, index) => (
              <div key={index} className="bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                >
                  <span className="text-lg">+</span> Daha çox öyrən
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
