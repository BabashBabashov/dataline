import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    // Validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Zəruri xanalar doldurulmalıdır' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Düzgün e-poçt ünvanı daxil edin' },
        { status: 400 }
      )
    }

    // Log the contact (for development)
    console.log('[Dataline MMC] Yeni əlaqə forması:', {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Integrate email service (Resend, SendGrid, etc.) when ready
    // For production use, install an email package and configure it here

    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('[Dataline MMC] Form submission error:', error)
    return NextResponse.json(
      { error: 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
