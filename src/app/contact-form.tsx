"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/data/projects";

const labels = {
  es: {
    heading: "Cuéntame qué necesitas construir.",
    intro: "El formulario envía tu mensaje directamente a mi correo.",
    name: "Tu nombre", email: "Tu correo", message: "¿En qué te puedo ayudar?",
    submit: "Enviar mensaje", sending: "Enviando…", success: "Listo. Recibí tu mensaje y te responderé pronto.",
    error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.",
    direct: "También puedes escribirme a",
  },
  en: {
    heading: "Tell me what you need to build.",
    intro: "The form sends your message directly to my inbox.",
    name: "Your name", email: "Your email", message: "How can I help?",
    submit: "Send message", sending: "Sending…", success: "Message received. I’ll get back to you soon.",
    error: "The message could not be sent. Try again or email me directly.",
    direct: "You can also email me at",
  },
} satisfies Record<Locale, Record<string, string>>;

export function ContactForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ message: string; error: boolean } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setStatus({ message: t.success, error: false });
      form.reset();
    } catch {
      setStatus({ message: t.error, error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-form-section" id="contact" aria-labelledby="contact-form-title" lang={locale}>
      <div className="contact-form-intro">
        <p className="eyebrow">{locale === "es" ? "CONTACTO DIRECTO" : "DIRECT CONTACT"}</p>
        <h2 id="contact-form-title">{t.heading}</h2>
        <p>{t.intro}</p>
        <p className="contact-direct">{t.direct} <a href="mailto:aldhairvera15@gmail.com">aldhairvera15@gmail.com</a></p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>{t.name}<input name="name" type="text" autoComplete="name" maxLength={120} required /></label>
        <label>{t.email}<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label>{t.message}<textarea name="message" rows={5} maxLength={5000} required /></label>
        <div className="contact-form-actions">
          <button className="button button-primary" type="submit" disabled={sending}>{sending ? t.sending : t.submit}<span aria-hidden="true">↗</span></button>
          <p className={status?.error ? "form-status form-status-error" : "form-status"} aria-live={status?.error ? "assertive" : "polite"} role={status?.error ? "alert" : "status"}>{status?.message ?? ""}</p>
        </div>
      </form>
    </section>
  );
}
