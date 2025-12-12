import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Placeholder - implement email sending in /lib/email.ts
  return NextResponse.json({ ok: true })
}
