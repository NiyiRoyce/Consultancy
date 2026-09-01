import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348118482904"

function buildWhatsAppText({ name, email, subject, message }: {
  name: string
  email: string
  subject: string
  message: string
}) {
  return [
    "New contact form submission",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n")
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const payload = {
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      subject: String(body.subject ?? "").trim(),
      message: String(body.message ?? "").trim(),
    }

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppText(payload)
    )}`

    const result = await sendContactEmail(payload)

    return NextResponse.json({
      success: result.success,
      whatsappUrl,
      emailSent: result.success,
    })
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}
