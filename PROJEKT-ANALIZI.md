# Dataline MMC - Layihə Analizi

## 📋 Layihə Xülasəsi

**Layihə Adı:** Dataline MMC Veb Saytı  
**Layihə Növü:** Korporativ veb sayt  
**Texnologiya:** Next.js 16.2.0, React 19, TypeScript, Tailwind CSS  
**Dil:** Azərbaycan dili (az)  
**Versiya:** 1.0.0  

---

## 🏗️ Layihə Strukturu

### Ümumi Baxış
```
dataline-mmc/
├── app/                          # Next.js App Router
│   ├── api/                      # API marşrutları
│   │   └── contact/              # Əlaqə forması API
│   ├── services/                 # Xidmətlər səhifələri (15 səhifə)
│   ├── about/                    # Haqqımızda səhifəsi
│   ├── portfolio/                # Portfel səhifəsi
│   ├── layout.tsx                # Kök layout
│   ├── page.tsx                  # Ana səhifə
│   └── globals.css               # Qlobal stillər
├── components/                   # React komponentləri
│   ├── ui/                       # Shadcn/ui komponentləri (60+)
│   ├── header.tsx                # Naviqasiya header
│   ├── hero-section.tsx          # Hero slayder
│   ├── services-section.tsx      # Xidmətlər bölməsi
│   ├── about-section.tsx         # Haqqımızda bölməsi
│   ├── contact-section.tsx       # Əlaqə bölməsi
│   ├── testimonials-section.tsx  # Rəylər bölməsi
│   ├── floating-icons.tsx        # Sosial media ikonları
│   └── ...                       # Digər komponentlər
├── public/                       # Statik fayllar
│   └── images/                   # Şəkillər
│       ├── services/             # Xidmət şəkilləri
│       ├── portfolio/            # Portfel şəkilləri (17 şəkil)
│       └── certificates/         # Sertifikatlar (9 şəkil)
├── hooks/                        # Custom hooks
├── lib/                          # Utiliti funksiyaları
└── styles/                       # Əlavə stillər
```

---

## 🎨 Dizayn və UX Xüsusiyyətləri

### Rəng Palitrası
- **Əsas rəng (Primary):** `#1A2B6D` (Tünd göy)
- **Aksent rəngi:** `#DC2626` (Qırmızı) - Hover effektləri üçün
- **Background:** `#F2F2F2` - Kartlar üçün
- **Secondary:** Yüngül boz tonlar

### Dizayn Motifləri
1. **Asimetrik Layout:** Sağ tərəfdə 128px boşluq
2. **Üst-üstə düşən kartlar:** Animasiyalı giriş effektləri
3. **Offset çərçivələr:** Kartların arxasında kölgə effekti
4. **Navy strip:** Bölmələr arasında göy zolaqlar

### Animasiyalar
- **Kart girişi:** Cubic-bezier(0.32, 0.72, 0, 1) - 1.5s
- **Hover effektləri:** Scale və rəng dəyişiklikləri
- **Slayder:** Avtomatik 5 saniyə interval

---

## 🛠️ Texniki Stack

### Frontend Framework
- **Next.js 16.2.0** - React framework
- **React 19** - UI library
- **TypeScript 5.7.3** - Type safety

### UI Komponentləri
- **Radix UI** - Aksesibil komponentlər (20+ paket)
- **Lucide React** - İkonlar
- **Tailwind CSS 4.2.0** - Styling
- **Class Variance Authority** - Variant management
- **Sonner** - Toast notifications

### Form və Validation
- **React Hook Form 7.54.1**
- **Zod 3.24.1** - Schema validation
- **@hookform/resolvers** - Form resolver

### Digər Bibliotekalar
- **next-themes** - Dark mode support
- **recharts** - Chart library
- **embla-carousel-react** - Carousel
- **date-fns** - Date utilities

---

## 📄 Səhifə Strukturu

### 1. Ana Səhifə (`/`)
**Komponentlər:**
- HeroSection - Slayder şəkilləri ilə
- ServicesSection - 6 əsas xidmət kartı
- TestimonialsSection - Müştəri rəyləri
- AboutSection - Şirkət haqqında
- ContactSection - Əlaqə forması

**Xüsusiyyətlər:**
- 3 slayd avtomatik dəyişiklik
- Animasiyalı kart girişi
- Responsive dizayn

### 2. Haqqımızda Səhifəsi (`/about`)
**Bölmələr:**
- Hero banner və kart
- Şirkət təsviri
- 3 xüsusiyyət kartı (Keyfiyyət, Komanda, 2015-ci il)
- 9 sertifikat şəkli
- Əlaqə bölməsi

**Sertifikatlar:**
- Cisco, MCSA, MCTS
- Windows 2007/2008/2012 sertifikatları

### 3. Xidmətlər Səhifəsi (`/services`)
**15 Xidmət Kateqoriyası:**
1. İT Autsorsinq
2. Server otaqları
3. Serverlərin qurulması
4. Serverlərin idarəsi
5. Şəbəkələrin qurulması
6. Şəbəkələrin idarəsi
7. WEB səhifələr
8. Texniki dəstək
9. Yanğın siqnalizasiya
10. Yanğınsöndürmə
11. Səs sistemləri
12. Səs sistemlərinin qurulması
13. Nəzarət sistemləri (Kamera)
14. Nəzarət sistemləri (Keçid)
15. Mini ATS və İP telefoniya

**Hər xidmət səhifəsi ehtiva edir:**
- Hero banner və kart
- Təsvir bölməsi
- Xüsusiyyətlər siyahısı
- Tətbiq sahələri
- Əlaqə forması

### 4. Portfel Səhifəsi (`/portfolio`)
- 17 tərəfdaş şirkət loqosu
- Grid layout (4 column)
- Hover effektləri

---

## 🔌 API Marşrutları

### POST `/api/contact`
**Təyinat:** Əlaqə forması məlumatlarını qəbul etmək

**Request Body:**
```typescript
{
  firstName: string    // Zəruri
  lastName: string     // Zəruri
  email: string        // Zəruri, email format validation
  message: string      // İxtiyari
}
```

**Response:**
- `200` - Uğur: `{ success: true, message: string }`
- `400` - Validation error: `{ error: string }`
- `500` - Server error: `{ error: string }`

**CORS:** OPTIONS endpoint dəstəklənir

**Qeyd:** Hal-hazırda yalnız console log edir. Email integrasiyası üçün TODO var.

---

## 🧩 Komponent Arxitekturası

### Client Komponentləri
- `"use client"` directive ilə işarələnib
- State management (useState, useEffect)
- Event handlers
- Interactive features

### Server Komponentləri
- Default Next.js server components
- Metadata generation
- Static rendering

### UI Komponentləri (Shadcn/ui)
60+ hazır komponent:
- Button, Input, Card, Dialog
- Navigation, Dropdown, Tabs
- Form, Calendar, Chart
- və s.

---

## 🌐 SEO və Metadata

### OpenGraph və Twitter Cards
```typescript
openGraph: {
  title: 'Dataline MMC - IT Konsaltinq və Xidmətlər'
  url: 'https://dataline.az'
  locale: 'az_AZ'
  type: 'website'
}
```

### Structured Data (Schema.org)
```json
{
  "@type": "Organization",
  "name": "Dataline MMC",
  "url": "https://dataline.az",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ə.Rəcəbli str.25",
    "addressLocality": "N.Nərimanov",
    "addressCountry": "AZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+994-12-408-35-35"
  }
}
```

### Faviconlar
- Light mode: `/icon-light-32x32.png`
- Dark mode: `/icon-dark-32x32.png`
- SVG: `/icon.svg`
- Apple: `/apple-icon.png`

---

## 📱 Responsive Dizayn

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Xüsusiyyətləri
- Hamburger menu
- Touch-friendly buttons
- Single column layouts
- Reduced animations

---

## 🎯 Şirkət Məlumatları

### Ünvan
Ə.Rəcəbli str.25, N.Nərimanov, Azərbaycan

### Əlaqə
- **Telefon:** +994 12 408 35 35
- **Mobil:** +994 70 707 47 37
- **Email:** info@dataline.az

### Sosial Media
- Facebook: https://www.facebook.com/dataline.az
- Instagram: https://www.instagram.com/dataline_mmc/
- LinkedIn: https://www.linkedin.com/company/dataline-mmc/

---

## 🔧 Təhlükəsizlik və Performans

### Təhlükəsizlik
- Input validation (Zod schemas)
- Email format validation
- SQL injection protection (No direct DB access)
- XSS protection (React auto-escaping)

### Performans
- SWC minification enabled
- Image optimization (Next.js Image component)
- Code splitting (App Router)
- Compression enabled
- React Strict Mode

---

## 🚀 Deployment və Build

### Build Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint ."
}
```

### Vercel Analytics
- Production mode aktiv
- Automatic integration

---

## 📝 Gələcək İmprovmentlər (TODO)

### Birinci Prioritet
1. **Email İntegrasiyası:** Contact form üçün email service (Resend/SendGrid)
2. **Database:** Müştəri məlumatları üçün DB
3. **Admin Panel:** Məzmun idarəetməsi
4. **Multi-dil Dəstəyi:** İngilis, Rus dilləri

### İkinci Prioritet
1. **Blog:** İT məqalələri bölümü
2. **Case Studies:** Layihə tədqiqatları
3. **Testimonials Management:** Admin panel
4. **Analytics:** Google/Plausible integration

### Üçüncü Prioritet
1. **Dark Mode:** next-themes configuration
2. **Search:** Full-text search
3. **Live Chat:** Chat widget integration
4. **CMS:** Headless CMS integration

---

## 📦 Asılılıqlar

### Production Dependencies (60+)
```json
{
  "@hookform/resolvers": "^3.9.1",
  "@vercel/analytics": "1.6.1",
  "@radix-ui/*": "20+ packages",
  "next": "16.2.0",
  "react": "^19",
  "react-dom": "^19",
  "typescript": "5.7.3"
}
```

### Dev Dependencies
```json
{
  "@tailwindcss/postcss": "^4.2.0",
  "@types/node": "^22",
  "@types/react": "^19",
  "tailwindcss": "^4.2.0"
}
```

---

## 🎨 Dizayn Prinsipləri

### 1. Konsistentlik
- Eyni rəng palitrası
- Uniform spacing
- Consistent typography

### 2. Aksesibilitat
- ARIA labels
- Keyboard navigation
- Semantic HTML
- Focus indicators

### 3. Performance
- Lazy loading images
- Code splitting
- Minimal bundle size
- Optimized re-renders

### 4. UX Focus
- Clear CTAs
- Intuitive navigation
- Fast feedback
- Error handling

---

## 🔍 Kod Keyfiyyəti

### TypeScript
- Strict mode enabled
- Path aliases (`@/*`)
- Type definitions complete

### Conventions
- Functional components
- Hooks for state management
- Prop interfaces
- Error boundaries

### Best Practices
- Component composition
- Reusable UI components
- Consistent naming
- Code organization

---

## 📊 Statistika

- **Səhifə sayı:** 19 (ana + about + services + 15 xidmət + portfolio)
- **Komponent sayı:** 70+ (60 UI + custom)
- **Şəkil sayı:** 40+ (portfolio, services, certificates)
- **Xidmət kateqoriyası:** 15
- **Sertifikat:** 9
- **Tərəfdaş:** 17

---

## 💰 Biznes Təklif

### Xidmətlər
1. **İT Autsorsinq** - 7/24 dəstək
2. **Server Həlləri** - Qurulma və idarə
3. **Şəbəkə Həlləri** - LAN/WAN
4. **Təhlükəsizlik** - Kamera, keçid sistemləri
5. **Rabitə** - Mini ATS, İP telefoniya
6. **Yanğın Təhlükəsizliyi** - Siqnalizasiya, söndürmə
7. **Səs Sistemləri** - Peşəkar avadanlıq
8. **Web Həlləri** - Sayt inkişafı

### Target Auditoriya
- Şirkətlər (B2B)
- Ofis binaları
- Hotellər
- Sənaye obyektləri
- Ticarət mərkəzləri

---

## 🎓 Texniki Təcrübə

### Sertifikatlar
- Cisco Certified
- MCSA (Microsoft Certified Solutions Associate)
- MCTS (Microsoft Certified Technology Specialist)
- Windows Server 2007/2008/2012

### Komanda
- Yüksək ixtisaslı gənc mütəxəssislər
- 2015-ci ildən bəri təcrübə
- 500+ məmnun müştəri
- 98% uğur nisbəti

---

## 📞 Əlaqə Forması

### Validasiya Qaydaları
1. Ad, Soyad, Email - zəruri
2. Email format validation
3. Azərbaycan dilində xəta mesajları
4. Client və server-side validation

### Form Handler
```typescript
handleSubmit → POST /api/contact
  ↓
Validation (firstName, lastName, email)
  ↓
Success: Reset form + Success message
Error: Alert error message
```

---

## 🌍 Sosial Media İnteqrasiyası

### Fixed Icons (Desktop)
- Sol tərəfdə vertical placement
- Facebook, Instagram, LinkedIn
- Hover effektləri

### Chat Button (Bottom Right)
- Fixed position
- MessageCircle icon
- Açmaq üçün hazır (handler yoxdur)

---

## 📸 İmage Optimization

### Next.js Image Component
- Lazy loading
- Responsive sizing
- Priority loading for above-fold
- Unoptimized mode enabled (config)

### Image Directories
- `/images/services/` - Service banners
- `/images/portfolio/` - Partner logos
- `/images/certificates/` - Certificates
- `/images/` - General images

---

## 🔗 Naviqasiya Strukturu

### Header Menu
1. Ana Səhifə → `/`
2. Niyə Biz → `/about`
3. Xidmətlər → `/services`
4. Portfel → `/portfolio`
5. Əlaqə → `/#contact`

### Active State
- Current page highlighting
- Hash-based anchor detection
- Hover effects

### Mobile Menu
- Hamburger toggle
- Full-width overlay
- Auto-close on navigation

---

## ⚡ Performans Metrics

### Optimization
- SWC minification
- Automatic compression
- Image unoptimized (config choice)
- Code splitting

### Bundle Size
- Next.js runtime optimized
- Tree-shaking enabled
- Dynamic imports for heavy components

---

## 🛡️ Error Handling

### Form Errors
- Client-side validation
- Server-side validation
- User-friendly error messages (Azərbaycan dilində)

### API Errors
- Try-catch blocks
- Console logging
- Graceful degradation

---

## 📋 Checklist

### Development
- [x] Next.js setup
- [x] TypeScript configuration
- [x] Tailwind CSS setup
- [x] Shadcn/ui integration
- [x] Component structure
- [x] Page routing
- [x] API routes
- [x] Form validation

### Content
- [x] Homepage
- [x] About page
- [x] Services page
- [x] 15 Service detail pages
- [x] Portfolio page
- [x] Contact form
- [x] Testimonials

### SEO
- [x] Metadata
- [x] OpenGraph
- [x] Structured data
- [x] Favicon
- [x] Sitemap (recommended)

### Future
- [ ] Email integration
- [ ] Database setup
- [ ] Admin panel
- [ ] Blog system
- [ ] Multi-language
- [ ] Dark mode
- [ ] Search functionality

---

## 📝 Qeydlər

### Kod Standartları
- TypeScript strict mode
- Functional components
- Hooks for state
- Props interface definitions
- Consistent naming conventions

### Styling Approach
- Tailwind utility classes
- Custom CSS in globals.css
- Component-level styles
- Responsive-first design

### Testing Recommendations
1. Unit tests for utilities
2. Component tests for UI
3. E2E tests for forms
4. Performance testing
5. Accessibility testing

---

## 🎉 Nəticə

**Dataline MMC** veb saytı müasir texnologiyalarla qurulmuş, Azərbaycan bazarında İT xidmətləri təqdim edən şirkətin peşəkar korporativ saytıdır. Layihə Next.js 16, React 19 və TypeScript əsasında inkişaf etdirilib və yüksək performans, SEO-optimallaşdırma və aksesibilitat xüsusiyyətlərinə malikdir.

---

*Dokument: 2025-01-21 tarixində yaradılıb*  
*Versiya: 1.0.0*  
*Layihə: Dataline MMC Veb Saytı*
