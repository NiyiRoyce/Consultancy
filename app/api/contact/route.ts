import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const result = await sendContactEmail(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}
