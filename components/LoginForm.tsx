"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const supabase = getSupabaseClient();

    if (!supabase) {
      setMessage("Supabase environment variables are not configured. Dashboard preview is available.");
      setLoading(false);
      router.push("/admin/dashboard");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Email
        <input name="email" type="email" required className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Password
        <input name="password" type="password" required className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
      </label>
      <button className="button-primary" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
      {message ? <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">{message}</p> : null}
    </form>
  );
}
