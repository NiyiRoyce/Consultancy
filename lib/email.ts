import { Resend } from "resend"

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(payload: ContactPayload) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "Contact Form <no-reply@yourdomain.com>",
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: payload.email,
      subject: `New contact from ${payload.name}`,
      html: `
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false }
  }
}
