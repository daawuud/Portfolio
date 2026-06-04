"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Unable to submit message");
      }

      setState("success");
      setMessage("Thank you. Your message has been sent successfully.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Sorry, your message could not be sent. Please email me directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Full name
          <input name="full_name" required className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email address
          <input name="email" type="email" required className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Company or organization
          <input name="company" className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Subject
          <input name="subject" required className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
          Message
          <textarea name="message" required rows={6} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
        </label>
      </div>
      <button type="submit" disabled={state === "loading"} className="button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-70">
        <Send size={18} /> {state === "loading" ? "Sending..." : "Send message"}
      </button>
      {message ? (
        <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${state === "success" ? "bg-teal-50 text-teal-800" : "bg-red-50 text-red-700"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
