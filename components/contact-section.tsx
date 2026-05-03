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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground text-center mb-12">Contact Us</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* First + Last name */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-primary-foreground text-sm font-semibold">
                First Name <span className="text-accent">*</span>
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
                Last Name <span className="text-accent">*</span>
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
              Email <span className="text-accent">*</span>
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
              Message
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
              Submit
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-primary-foreground text-sm">
          <p>
            <span className="font-semibold">Address.</span> 500 Terry Francine Street, San Francine, CA 94158
          </p>
          <p>
            <span className="font-semibold">Tel.</span> 123-456-7890
          </p>
          <p>
            <span className="font-semibold">Email.</span> info@mysite.com
          </p>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 flex items-center justify-between text-primary-foreground/80 text-sm">
          <p>
            &copy; 2026 by ITG. Powered and secured by{" "}
            <a href="#" className="underline hover:text-primary-foreground">
              ITG
            </a>
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
