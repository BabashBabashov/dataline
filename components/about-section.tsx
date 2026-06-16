import Image from "next/image"
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Məmnun Müştəri" },
    { icon: Award, value: "10+", label: "İl Təcrübə" },
    { icon: TrendingUp, value: "98%", label: "Uğur Nisbəti" },
  ]

  const features = [
    "Sertifikatlı peşəkar İT mütəxəssisləri komandası",
    "24/7 müştəri dəstəyi xidməti",
    "Biznesiniz üçün fərdi həllər",
    "Sənayedə aparıcı təhlükəsizlik standartları",
  ]

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/about-team.jpg"
                alt="Peşəkar İT məsləhətçi komandamız"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent block */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 hidden md:block w-32 sm:w-48 h-32 sm:h-48 bg-primary -z-0" />
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 hidden md:block w-24 sm:w-32 h-24 sm:h-32 border-4 border-accent -z-0" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 sm:w-12 bg-accent" />
              <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase">HAQQIMIZDA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary text-balance leading-tight">
              Texnologiya ilə Biznesinizin İnkişafı
            </h2>

            <p className="text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">
              Dataline MMC olaraq, texnologiyaların biznesinizə güc qatmalı, deyil, məsələlər yaradmalıdır düşüncəsindəyik. 2015-ci ildən bəri,
              müxtəlif ölçülü şirkətlərin İT dünyasında etibarlı və təhlükəsiz şəkildə istiqamətlənməsinə kömək edirik.
              Məqsədimiz - innovativ, etibarlı və ölçülə bilən həllər təqdim etməklə real biznes nəticələri əldə etməkdir.
            </p>

            <ul className="flex flex-col gap-2 sm:gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 mt-2 border-t border-border">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex flex-col gap-1 sm:gap-2">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    <div className="text-xl sm:text-2xl md:text-3xl font-serif text-primary">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
