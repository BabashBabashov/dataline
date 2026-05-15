"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("#")) return pathname === "/" && href === window.location.hash
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Dataline MMC home">
            <Image
              src="/images/logo.png"
              alt="Dataline MMC Logo"
              width={200}
              height={80}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-10 absolute top-1/2 -translate-y-1/2" style={{ width: 'calc(100% - 128px)', height: '50px', right: '128px' }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-bold tracking-wide transition-colors ${
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
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-2 text-[15px] font-bold tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-primary hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
