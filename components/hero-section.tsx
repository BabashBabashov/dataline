"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

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
    const timer = setTimeout(() => {
      setCardVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative">
      {/* Background Image Carousel */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[534px] w-full lg:w-[calc(100%-128px)] lg:mr-[128px]">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/5" />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Əvvəlki slayd"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-primary rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Növbəti slayd"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-primary rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`${index + 1}. slayd`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navy strip */}
      <div className="h-[10px] sm:h-[15px] bg-primary w-full lg:w-[calc(100%-128px)] lg:mr-[128px]" />

      {/* Overlapping Content Card */}
      <div className="relative lg:absolute lg:z-30 lg:pointer-events-none lg:right-0 lg:md:right-[272px] lg:top-1/2 lg:-translate-y-1/2 lg:md:top-[267px] lg:md:translate-y-0 -mt-8 sm:-mt-12 lg:mt-0 px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden w-full max-w-[90vw] sm:max-w-[600px] lg:w-[685px] mx-auto lg:mx-0">
          <div
            className={`pointer-events-auto transition-transform ${
              cardVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ transitionDuration: '1.5s', transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
          >
            <div className="shadow-2xl" style={{ backgroundColor: '#F2F2F2' }}>
              <div className="p-6 sm:p-8 md:p-12 text-center flex flex-col justify-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                  Dataline xoş gəlmisiniz!
                </h1>

                <div className="w-12 sm:w-16 h-0.5 bg-primary mb-4 mx-auto" />

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  2015-ci ildə yaradılmış Dataline şirkəti qısa müddət ərzində İT autsorsinq, İT xidmətlərinin göstərilməsi, sistem inteqrasiyası, serverlərin qurulması, nəzarət sistemləri, kommunikasiya üzrə ixtisaslaşıb və öz müştərilərinə xidmət göstərməkdədir. Şirkətimiz yüksək ixtisaslı təcrübəli gənc mütəxəssislərdən təşkil olunmuşdur. Şirkətimizin əsas məqsədi müştərilərə keyfiyyətli İT autsorsinq təklif etməkdir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button box */}
      <div className="relative lg:absolute lg:z-30 lg:pointer-events-auto lg:inline-flex lg:shadow-lg lg:right-0 lg:md:right-[272px] lg:top-[calc(267px+445px)] mt-4 sm:mt-6 lg:mt-0 flex justify-center lg:justify-start px-4 sm:px-6 lg:px-0">
        <Link href="/services" className="inline-flex">
          {/* Left: Blue square with + */}
          <div
            className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground transition-colors ${
              hoveredSection === 'plus' ? 'bg-red-600' : hoveredSection === 'text' ? 'bg-primary' : 'bg-primary'
            }`}
            onMouseEnter={() => setHoveredSection('plus')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          
          {/* Right: Red box with text */}
          <div
            className={`flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-white text-xs sm:text-sm font-medium transition-colors ${
              hoveredSection === 'text' ? 'bg-primary' : hoveredSection === 'plus' ? 'bg-red-600' : 'bg-red-600'
            }`}
            onMouseEnter={() => setHoveredSection('text')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            Daha çox öyrən
          </div>
        </Link>
      </div>

      {/* Spacer */}
      <div className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]" />
    </section>
  )
}
