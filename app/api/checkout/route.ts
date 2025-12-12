import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Placeholder - create Stripe session in /lib/stripe.ts
  return NextResponse.json({ ok: true })
}
