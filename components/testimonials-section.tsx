"use client"

import { useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dataline MMC ilə əməkdaşlıq bizim üçün böyük uğur oldu. Peşəkar komanda və keyfiyyətli xidmətləri sayəsində biznesimiz daha səmərəli işləyir.",
    name: "Əli Vəliyev",
    title: "CEO, Tech Solutions AZ",
  },
  {
    quote:
      "Yanğın təhlükəsizliyi sistemlərinin quraşdırılmasında göstərdikləri peşəkar yanaşma və operativlik üçün təşəkkür edirik. Etibarlı tərəfdaşdır.",
    name: "Ləman Həsənova",
    title: "Direktor, Bina Menecment",
  },
  {
    quote:
      "İT infrastrukturumuzun qurulmasında Dataline MMC-nin töhfələri əvəzsizdir. Hər zaman dəstək və həllər üçün yaxınınızdaylar.",
    name: "Rəşad Məmmədov",
    title: "CTO, Digital Group",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const current = testimonials[currentIndex]

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <section className="bg-secondary py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl text-primary font-medium mb-6 sm:mb-8 md:mb-12">
          RƏYLƏR
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Əvvəlki rəy"
            className="absolute left-0 sm:left-2 md:-left-16 top-1/2 -translate-y-1/2 text-primary hover:text-accent transition-colors p-2 z-10"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          {/* Testimonial Content */}
          <div className="text-center px-8 sm:px-12 md:px-20">
            <blockquote 
              className={`text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif leading-relaxed mb-6 sm:mb-8 text-balance transition-opacity duration-500 ${
                isAnimating ? 'opacity-50' : 'opacity-100'
              }`}
            >
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-6 sm:mt-8">
              <p className="text-accent text-sm font-medium mb-1">
                {current.name}
              </p>
              <p className="text-accent text-xs sm:text-sm">{current.title}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Növbəti rəy"
            className="absolute right-0 sm:right-2 md:-right-16 top-1/2 -translate-y-1/2 text-primary hover:text-accent transition-colors p-2 z-10"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentIndex(idx)
                  setTimeout(() => setIsAnimating(false), 500)
                }
              }}
              aria-label={`Rəy ${idx + 1}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                idx === currentIndex ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
