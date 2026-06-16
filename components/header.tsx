"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Ana Səhifə", href: "/" },
  { label: "Niyə Biz", href: "/about" },
  { label: "Xidmətlər", href: "/services" },
  { label: "Portfel", href: "/portfolio" },
  { label: "Əlaqə", href: "/#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("#")) return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border/40' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Dataline MMC home">
            <Image
              src="/images/logo.png"
              alt="Dataline MMC Logo"
              width={200}
              height={80}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-[15px] font-bold tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-primary hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-border/40 bg-background/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-3 px-4 text-sm font-bold tracking-wide transition-colors rounded-lg ${
                  isActive(item.href)
                    ? "text-accent bg-accent/10"
                    : "text-primary hover:text-accent hover:bg-accent/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
