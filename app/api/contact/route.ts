import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Optional: Use Resend for email sending
// const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Optional: Send email using Resend
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({
    //     from: 'onboarding@resend.dev',
    //     to: 'info@dataline.az',
    //     subject: `Yeni əlaqə forması - ${firstName} ${lastName}`,
    //     html: `
    //       <h2>Yeni əlaqə forması</h2>
    //       <p><strong>Ad:</strong> ${firstName}</p>
    //       <p><strong>Soyad:</strong> ${lastName}</p>
    //       <p><strong>E-poçt:</strong> ${email}</p>
    //       <p><strong>Mesaj:</strong></p>
    //       <p>${message || 'Mesaj yoxdur'}</p>
    //     `
    //   })
    // }

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
