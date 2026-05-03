import Image from "next/image"
import { ContactSection } from "@/components/contact-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative h-[420px] md:h-[480px]">
          <Image
            src="/images/industries-hero.jpg"
            alt="Dataline MMC - Xidmətlər"
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
                    Nəyə Görə Biz?
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="h-[200px] md:h-[180px]" />
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary p-8 md:p-12 rounded-lg shadow-lg mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-justify">
              Biz əminik ki, tez bir zamanda sizin problemlərinizi həll edib sizə ən yaxşı xidmətləri təqdim edəcəyik. Siz asanlıqla problemlərinizi bizim şirkətə etibar edə bilərsiniz.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IT Autsorsinq",
                description: "IT Autsorsinq xidmətlərinin dəyəri, daimi işçinin əmək haqqından daha aşağıdır. Ofisdə daimi işçi üçün yer ayırmağa ehtiyac yoxdur. Əmək müqaviləsi bağlamırsınız. Əmək haqqından vergi ödəmirsiniz"
              },
              {
                title: "Server otaqlarının qurulması",
                description: "IT sistemi təşkil edən bütün avadanlıqların və serverlərin təhlükəsiz, etibarlı və fasiləsiz fəaliyyətini təmin etmək üçün istifadə olunur. Server otağında optimal mühitin yaradılması üçün aşağıdakı göstəricilər nəzərə alınmalıdır"
              },
              {
                title: "Serverlərin qurulması",
                description: "İstifadəçilərin İNTERNET şəbəkəsinə çıxışının təmin olunması və idarə edilməsi, elektron məktubların göndərilməsi və qabul edilməsi, məlumatların saxlanılması və onlardan istifadə qaydalarının müəyyən edilməsi kimi işləri yerinə yetirir"
              },
              {
                title: "Serverlərin idarə olunması",
                description: "Dataline şirkətinin Texniki Dəstək Qrupunda serverlərin və sistem proqram təminatının idarə olunması üzrə ixtisaslaşmış, zəngin bilik və təcrübəyə malik peşəkarlar fəaliyyət göstərir"
              },
              {
                title: "Şəbəkələrin qurulması",
                description: "Bildiyiniz kimi dünya artıq internet vasitəsi ilə çox kiçik hala düşüb, istədiyiniz vaxt istədiyiniz məlumatı ala bilirsiniz. Bunun üçün sizin İT şəbəkəniz sürətli və təhlükəsiz olmalıdır"
              },
              {
                title: "Şəbəkələrin idarə olunması",
                description: "LAN/WAN şəbəkəsi və İT infrastrukturunun dizaynı, quraşdırılması və yaranan problemlərin aradan qaldırılması"
              },
              {
                title: "WEB səhifələrin yaradılması",
                description: "Biz sifarişçilərimizin tələb və istəkləri əsasında, onların fəaliyyət sahələrinin əsas elementlərini nəzərə çarpdıran orijinal və yüksək zövqlü veb-saytların yaradılması üzrə tam xidmətlər kompleksini təklif edirik"
              },
              {
                title: "Texniki dəstək",
                description: "Kompüterlərin etibarlı və fasiləsiz işi, təşkilatın uğurlu fəaliyyəti üçün vacib şərtdir. Bu gün kompüterlər çoxlu sayda funksiyaları icra edirlər və onların xarab olması satış şöbəsinin, mühasibatlığın və hətta bütün təşkilatın faəliyyətini ən uyğun olmayan anda dayandıra bilər"
              },
              {
                title: "Yanğın siqnalizasiya sistemləri",
                description: "• Avtomatik tüstü və istilik detektorları\n• Ünvanlı və ünvanlı olmayan sistemlər\n• Səsli və işıqlı xəbərdarlıq qurğuları\n• Mərkəzi idarəetmə panelləri"
              },
              {
                title: "Yanğınsöndürmə sistemləri",
                description: "• Sprinkler sistemləri\n• Qazlı söndürmə sistemləri (server otaqları üçün ideal)\n• Köpüklü və su əsaslı sistemlər\n• Avtomatik və manual aktivasiya mexanizmləri\n\nYanğından mühafizə sistemləri yalnız qanunvericiliyin tələbi deyil, eyni zamanda biznesinizin və əməkdaşlarınızın təhlükəsizliyinin təminatıdır."
              },
              {
                title: "Peşəkar səs sistemləri",
                description: "• Gücləndirici (usilitel) sistemlərinin quraşdırılması\n• Akustik kolon və subwoofer sistemləri\n• Mikser və DSP avadanlıqlarının sazlanması\n• Konfrans və tədbir məkanları üçün səsləndirmə həlləri"
              }
            ].map((service, index) => (
              <div key={index} className="bg-secondary rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-1 aspect-video md:aspect-square bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>
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
