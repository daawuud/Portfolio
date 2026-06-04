import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase/client";

export async function POST(request: Request) {
  const body = await request.json();
  const fullName = String(body.full_name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const company = String(body.company ?? "").trim();

  if (!fullName || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, fallback: true });
  }

  const { error } = await supabase.from("contact_messages").insert({
    full_name: fullName,
    email,
    company,
    subject,
    message
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
