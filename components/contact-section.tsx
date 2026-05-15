"use client"

import type React from "react"

import { useState } from "react"
import { ChevronUp } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Zəhmət olmasa bütün zəruri xanaları doldurun (*)')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert(data.message || 'Mesajınız uğurla göndərildi!')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        alert(data.error || 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Xəta baş verdi. Zəhmət olmasa internet bağlantınızı yoxlayın və yenidən cəhd edin.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: '#1A2B6D' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground text-center mb-12">ƏLAQƏ</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* First + Last name */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-primary-foreground text-sm font-semibold">
                Ad <span className="text-accent">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent border-0 border-b border-primary-foreground/60 text-primary-foreground px-0 py-2 focus:outline-none focus:border-primary-foreground transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-primary-foreground text-sm font-semibold">
                Soyad <span className="text-accent">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border-0 border-b border-primary-foreground/60 text-primary-foreground px-0 py-2 focus:outline-none focus:border-primary-foreground transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-primary-foreground text-sm font-semibold">
              E-poçt <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-0 border-b border-primary-foreground/60 text-primary-foreground px-0 py-2 focus:outline-none focus:border-primary-foreground transition-colors"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-primary-foreground text-sm font-semibold">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-0 border-b border-primary-foreground/60 text-primary-foreground px-0 py-2 focus:outline-none focus:border-primary-foreground transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-primary-foreground text-xl font-serif hover:text-accent transition-colors px-8 py-2"
            >
              Göndər
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4 text-primary-foreground text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Ünvan:</span> Ə.Rəcəbli str.25, N.Nərimanov
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Tel:</span> +994 12 408 35 35
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Mob:</span> +994 70 707 47 37
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Email:</span> info@dataline.az
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 flex items-center justify-between text-primary-foreground/80 text-sm">
          <p>
            &copy; 2026 Dataline MMC. Bütün hüquqlar qorunur.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 flex items-center justify-center border border-primary-foreground/40 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
