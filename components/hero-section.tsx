"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const slides = [
  { image: "/images/body1.jpg", alt: "Yanğın təhlükəsizliyi sistemi" },
  { image: "/images/body2.jpg", alt: "Səs sistemi" },
  { image: "/images/body3.jpg", alt: "Çağrı sistemi" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredSection, setHoveredSection] = useState<'plus' | 'text' | null>(null)
  const [cardVisible, setCardVisible] = useState(false)

  useEffect(() => {
    setCardVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative">
      {/* Background Image Carousel with navy bottom strip */}
      <div className="relative h-[534px]" style={{ width: 'calc(100% - 128px)', marginRight: '128px' }}>
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-primary/5" />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Əvvəlki slayd"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-primary rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Növbəti slayd"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-primary rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`${index + 1}. slayd`}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navy strip that the card will overlap */}
      <div className="h-[15px] bg-primary" style={{ marginRight: '128px', width: 'calc(100% - 128px)' }} />

      {/* Overlapping Content Card - positioned absolutely to span both sections */}
      <div className="absolute z-30 pointer-events-none right-0 md:right-[272px] top-[267px] md:top-[267px]">
        <div
          className="overflow-hidden w-[90vw] md:w-[685px] h-[400px] md:h-[445px]"
        >
          <div
            className={`pointer-events-auto transition-transform duration-1000 ease-out w-[90vw] md:w-[685px] h-[400px] md:h-[445px] ${
              cardVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="shadow-2xl h-full" style={{ backgroundColor: '#F2F2F2' }}>
              <div className="p-12 text-center flex flex-col justify-center h-full">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                  Dataline xoş gəlmisiniz!
                </h1>

                <div className="w-16 h-0.5 bg-primary mb-4 mx-auto" />

                <p className="text-muted-foreground text-sm leading-relaxed">
                  2015-ci ildə yaradılmış Dataline şirkəti qısa müddət ərzində İT autsorsinq, İT xidmətlərinin göstərilməsi, sistem inteqrasiyası, serverlərin qurulması, nəzarət sistemləri, kommunikasiya üzrə ixtisaslaşıb və öz müştərilərinə xidmət göstərməkdədir. Şirkətimiz yüksək ixtisaslı təcrübəli gənc mütəxəssislərdən təşkil olunmuşdur. Şirkətimizin əsas məqsədi müştərilərə keyfiyyətli İT autsorsinq təklif etməkdir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button box outside card at bottom right */}
      <div className="absolute z-30 pointer-events-auto inline-flex shadow-lg right-0 md:right-[272px] top-[calc(267px+400px)] md:top-[calc(267px+445px)]">
            <Link href="/services" className="inline-flex">
              {/* Left: Blue square with + */}
              <div
                className={`flex items-center justify-center w-12 h-12 text-primary-foreground transition-colors ${
                  hoveredSection === 'plus' ? 'bg-red-600' : hoveredSection === 'text' ? 'bg-primary' : 'bg-primary'
                }`}
                onMouseEnter={() => setHoveredSection('plus')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <Plus className="h-6 w-6" />
              </div>
              
              {/* Right: Red box with text */}
              <div
                className={`flex items-center justify-center px-6 py-3 text-white text-sm font-medium transition-colors ${
                  hoveredSection === 'text' ? 'bg-primary' : hoveredSection === 'plus' ? 'bg-red-600' : 'bg-red-600'
                }`}
                onMouseEnter={() => setHoveredSection('text')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                Daha çox öyrən
              </div>
            </Link>
          </div>

      {/* Spacer to account for overlapping card on mobile/desktop */}
      <div className="h-[280px] md:h-[320px]" />
    </section>
  )
}
