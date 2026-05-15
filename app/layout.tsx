import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { FloatingIcons } from '@/components/floating-icons'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dataline MMC - IT Konsaltinq və Xidmətlər',
  description: 'Professional IT konsaltinq və xidmətlər, bulud həlləri, idarə olunan IT xidmətləri və fəlakət bərpası.',
  keywords: ['IT konsaltinq', 'IT xidmətləri', 'Dataline MMC', 'server', 'şəbəkə', 'yanğın sistemi'],
  generator: 'v0.app',
  metadataBase: new URL('https://dataline.az'),
  openGraph: {
    title: 'Dataline MMC - IT Konsaltinq və Xidmətlər',
    description: 'Professional IT konsaltinq və xidmətlər',
    url: 'https://dataline.az',
    siteName: 'Dataline MMC',
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dataline MMC - IT Konsaltinq və Xidmətlər',
    description: 'Professional IT konsaltinq və xidmətlər',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="az" className="bg-background">
      <body className="font-sans antialiased pt-16">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dataline MMC",
              url: "https://dataline.az",
              logo: "https://dataline.az/images/logo.png",
              description: "IT konsaltinq və xidmətlər",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ə.Rəcəbli str.25",
                addressLocality: "N.Nərimanov",
                addressCountry: "AZ"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+994-12-408-35-35",
                contactType: "customer service"
              }
            })
          }}
        />
        <Header />
        {children}
        <FloatingIcons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
