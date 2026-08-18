import { NextResponse } from "next/server";

/**
 * Enquiry transport → GoHighLevel webhook (OS standard backend).
 * Until GHL_WEBHOOK_URL is configured, returns `not-configured` so the client
 * falls back to WhatsApp with the enquiry pre-filled (no lead is ever lost).
 */
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad-request" }, { status: 400 });
  }

  // Honeypot — silently accept and drop bots.
  if (data._gotcha) return NextResponse.json({ ok: true });

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 200 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, reason: "upstream" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, reason: "error" }, { status: 502 });
  }
}
