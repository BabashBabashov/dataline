"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const topServices = [
  {
    title: "IT Autsorsinq",
    description: "IT xidmətlərinin dəyəri daimi işçinin əmək haqqından daha aşağıdır. Vergi ödəmək lazım deyil.",
  },
  {
    title: "Server otaqları",
    description: "IT avadanlıqlarının təhlükəsiz və fasiləsiz fəaliyyəti üçün optimal mühit.",
  },
  {
    title: "Serverlərin qurulması",
    description: "İnternet çıxışı, e-poçt və məlumatların idarə olunması.",
  },
]

const bottomServices = [
  {
    title: "Serverlərin idarə olunması",
    description: "Peşəkar komanda tərəfindən serverlərin və sistemin idarə olunması.",
  },
  {
    title: "Şəbəkələrin qurulması",
    description: "Sürətli və təhlükəsiz İT şəbəkə həlləri.",
  },
  {
    title: "Şəbəkələrin idarəsi",
    description: "LAN/WAN şəbəkəsi və İT infrastrukturunun dizaynı və quraşdırılması.",
  },
]

function ServiceCard({
  title,
  description,
  variant = "onDark",
  delay = 0,
}: {
  title: string
  description: string
  variant?: "onDark" | "onLight"
  delay?: number
}) {
  const frameClass =
    variant === "onDark"
      ? "border-primary-foreground/40"
      : "border-primary/30"

  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Offset frame behind the card (bottom-right) */}
      <div
        className={`absolute inset-0 translate-x-2 translate-y-2 border ${frameClass} pointer-events-none`}
        aria-hidden="true"
      />
      {/* Card content */}
      <div className="relative bg-secondary p-5 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center text-accent text-sm font-medium hover:underline"
        >
          <span className="mr-1">+</span> Ətraflı
        </Link>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [stripVisible, setStripVisible] = useState(false)
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStripVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (stripRef.current) {
      observer.observe(stripRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services">
      {/* Navy section: heading + description only */}
      <div
        ref={stripRef}
        className={`bg-primary pt-12 sm:pt-16 md:pt-20 pb-0 transition-all duration-700 ${
          stripVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              XİDMƏTLƏR
            </h2>
            <p className="text-primary-foreground/80 text-sm max-w-xl leading-relaxed">
              Dataline MMC olaraq, peşəkar İT həlləri, yanğın təhlükəsizliyi sistemləri və səs sistemləri sahəsində keyfiyyətli xidmətlər təqdim edirik.
            </p>
          </div>
        </div>
      </div>

      {/* Overlap band: top half navy, bottom half white */}
      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-primary"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-background" aria-hidden="true" />
        <div className="relative container mx-auto px-4 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-start">
              {topServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  variant="onDark"
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White section: second row of cards */}
      <div className="bg-background pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-start">
              {bottomServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  variant="onLight"
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
