"use client"

import type React from "react"

import { useState } from "react"
import { ChevronUp } from "lucide-react"

// Toast notification component
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  return (
    <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
    }`}>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="text-white/80 hover:text-white ml-2" aria-label="Bağla">
          ✕
        </button>
      </div>
    </div>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 5000)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    // Client-side validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      showToast('Zəhmət olmasa bütün zəruri xanaları doldurun (*)', 'error')
      return
    }

    if (formData.firstName.length > 100 || formData.lastName.length > 100) {
      showToast('Ad və soyad çox uzundur (maksimum 100 simvol)', 'error')
      return
    }

    if (!validateEmail(formData.email)) {
      showToast('Düzgün e-poçt ünvanı daxil edin', 'error')
      return
    }

    if (formData.message && formData.message.length > 5000) {
      showToast('Mesaj çox uzundur (maksimum 5000 simvol)', 'error')
      return
    }

    setIsSubmitting(true)

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
        showToast(data.message || 'Mesajınız uğurla göndərildi!', 'success')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else if (response.status === 429) {
        showToast('Həddindən artıq sorğu. Zəhmət olmasa bir dəqiqə sonra yenidən cəhd edin.', 'error')
      } else {
        showToast(data.error || 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.', 'error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      showToast('Xəta baş verdi. Zəhmət olmasa internet bağlantınızı yoxlayın və yenidən cəhd edin.', 'error')
    } finally {
      setIsSubmitting(false)
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
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
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
                maxLength={100}
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
                maxLength={100}
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
              maxLength={254}
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
              maxLength={5000}
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-0 border-b border-primary-foreground/60 text-primary-foreground px-0 py-2 focus:outline-none focus:border-primary-foreground transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-primary-foreground text-xl font-serif hover:text-accent transition-colors px-8 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Göndərilir...' : 'Göndər'}
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4 text-primary-foreground text-sm">
          <div className="flex items-center gap-2 flex-wrap justify-center">
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
