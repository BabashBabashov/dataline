import { NextRequest, NextResponse } from 'next/server'

// Rate limiting store (in-memory, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 5 // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/&/g, '&amp;')
}

// Validate and sanitize email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

// CORS headers
const getCorsHeaders = (origin: string) => {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['https://dataline.az', 'http://localhost:3000']
  const isAllowed = allowedOrigins.includes(origin) || allowedOrigins.includes('*')

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  const headers = getCorsHeaders(origin)

  // Rate limiting
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Həddindən artıq sorğu. Zəhmət olmasa bir dəqiqə sonra yenidən cəhd edin.' },
      { status: 429, headers }
    )
  }

  try {
    const body = await request.json()
    let { firstName, lastName, email, message } = body

    // Validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Zəruri xanalar doldurulmalıdır' },
        { status: 400, headers }
      )
    }

    // Type checking
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Yanlış məlumat formatı' },
        { status: 400, headers }
      )
    }

    // Length validation
    if (firstName.length > 100 || lastName.length > 100) {
      return NextResponse.json(
        { error: 'Ad və soyad çox uzundur (maksimum 100 simvol)' },
        { status: 400, headers }
      )
    }

    if (message && typeof message === 'string' && message.length > 5000) {
      return NextResponse.json(
        { error: 'Mesaj çox uzundur (maksimum 5000 simvol)' },
        { status: 400, headers }
      )
    }

    // Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Düzgün e-poçt ünvanı daxil edin' },
        { status: 400, headers }
      )
    }

    // Sanitize inputs
    firstName = sanitizeInput(firstName.trim())
    lastName = sanitizeInput(lastName.trim())
    email = email.trim().toLowerCase()
    message = message ? sanitizeInput(message.trim()) : ''

    // Log the contact (for development)
    console.log('[Dataline MMC] Yeni əlaqə forması:', {
      firstName,
      lastName,
      email,
      message: message ? '...' : '',
      timestamp: new Date().toISOString(),
      ip: ip.substring(0, 20) // Partial IP for privacy
    })

    // TODO: Integrate email service (Resend, SendGrid, etc.) when ready
    // For production use, install an email package and configure it here

    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.'
      },
      { status: 200, headers }
    )

  } catch (error) {
    console.error('[Dataline MMC] Form submission error:', error)
    return NextResponse.json(
      { error: 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.' },
      { status: 500, headers }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  const headers = getCorsHeaders(origin)

  return new NextResponse(null, {
    status: 204,
    headers
  })
}
