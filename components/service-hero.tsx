"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

interface ServiceHeroProps {
  title: string
  imageSrc: string
  imageAlt: string
}

export function ServiceHero({ title, imageSrc, imageAlt }: ServiceHeroProps) {
  const [cardVisible, setCardVisible] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<'card' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative">
      {/* Banner Image - absolute on all screens */}
      <div className="absolute left-0 lg:right-[128px] top-0 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[534px] w-full lg:w-[calc(100%-128px)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      {/* Spacer for banner area */}
      <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[534px]" />

      {/* Navy strip */}
      <div className="h-[10px] sm:h-[15px] bg-primary lg:mr-[128px]" />

      {/* Back Link */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-white hover:text-accent transition-colors bg-primary/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Xidmətlərə geri</span>
          <span className="sm:hidden">Geri</span>
        </Link>
      </div>

      {/* Overlapping Content Card */}
      <div className="relative lg:absolute z-10 lg:pointer-events-none lg:left-1/2 lg:-translate-x-1/2 lg:top-[418px] -mt-6 sm:-mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
        <div className="lg:pointer-events-auto">
          <div className="overflow-hidden w-full max-w-[90vw] sm:max-w-[600px] lg:w-[729px] mx-auto lg:mx-0">
            <div
              className={`shadow-2xl transition-transform ${
                cardVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{
                backgroundColor: hoveredSection === 'card' ? '#E8E8E8' : '#F2F2F2',
                transitionDuration: '1.5s',
                transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)'
              }}
              onMouseEnter={() => setHoveredSection('card')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center flex flex-col justify-center min-h-[100px] sm:min-h-[150px] md:min-h-[200px] lg:h-[263px]">
                <h1 className="text-primary text-balance font-spinaker text-xl sm:text-3xl md:text-4xl lg:text-[66px]">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for card overlap area */}
      <div className="h-[60px] sm:h-[80px] md:h-[100px] lg:h-[130px]" />
    </section>
  )
}
