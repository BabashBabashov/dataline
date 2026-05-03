"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "Jason Strauss",
    title: "CEO of ML Associates",
  },
  {
    quote:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "Sarah Mitchell",
    title: "CTO of TechFlow Inc.",
  },
  {
    quote:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "David Chen",
    title: "Director at InnovateCorp",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[currentIndex]

  return (
    <section className="bg-secondary py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl text-primary font-medium mb-8 md:mb-12">
          Testimonials
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-primary hover:text-accent transition-colors p-2"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          {/* Testimonial Content */}
          <div className="text-center px-12 md:px-20">
            <blockquote className="text-primary text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8 text-balance">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-accent text-sm font-medium mb-1">
                {current.name}
              </p>
              <p className="text-accent text-sm">{current.title}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-primary hover:text-accent transition-colors p-2"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
