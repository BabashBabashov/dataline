"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ContactSection } from "@/components/contact-section"

export default function ServicesPage() {
  const [cardVisible, setCardVisible] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<'card' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative lg:absolute lg:right-[128px] lg:top-0 lg:bottom-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[534px] w-full lg:w-[calc(100%-128px)]">
          <Image
            src="/images/services/banner1.jpg"
            alt="Dataline MMC - Xidmətlər"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
        
        {/* Spacer for banner */}
        <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[534px]" />

        {/* Navy strip */}
        <div className="h-[10px] sm:h-[15px] bg-primary lg:mr-[128px]" />

        {/* Centered overlapping card */}
        <div className="relative lg:absolute z-10 lg:pointer-events-none lg:right-0 lg:md:right-[272px] lg:top-[267px] -mt-8 sm:-mt-12 lg:mt-0 px-4 sm:px-6 lg:px-0">
          <div className="lg:pointer-events-auto">
            <div className="overflow-hidden w-full max-w-[90vw] sm:max-w-[600px] lg:w-[685px] mx-auto lg:mx-0">
              <div
                className={`shadow-2xl transition-transform ${
                  cardVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{
                  backgroundColor: hoveredSection === 'card' ? '#E8E8E8' : '#F2F2F2',
                  transform: hoveredSection === 'card' ? 'scale(1.02)' : 'scale(1)',
                  transitionDuration: '1.5s',
                  transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)'
                }}
                onMouseEnter={() => setHoveredSection('card')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="p-6 sm:p-8 md:p-12 text-center flex flex-col justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:h-[445px]">
                  <div className="w-12 sm:w-16 h-0.5 bg-primary mb-4 sm:mb-6 mx-auto transition-all duration-300"
                       style={{ width: hoveredSection === 'card' ? '120px' : '64px' }} />
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance">
                    XİDMƏTLƏR
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base mt-3 sm:mt-4">
                    Peşəkar həllər və keyfiyyətli xidmətlər
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px]" />
      </section>

      {/* Services Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary p-6 sm:p-8 text-center flex flex-col justify-center items-center rounded-lg shadow-lg mb-10 sm:mb-16 min-h-[150px] sm:min-h-[200px]">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground text-justify">
              Biz əminik ki, tez bir zamanda sizin problemlərinizi həll edib sizə ən yaxşı xidmətləri təqdim edəcəyik. Siz asanlıqla problemlərinizi bizim şirkətə etibar edə bilərsiniz.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
              <div key={index} className="bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed whitespace-pre-line mb-3 sm:mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-medium hover:underline"
                >
                  <span className="text-base sm:text-lg">+</span> Daha çox öyrən
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
