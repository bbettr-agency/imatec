import { site } from "@/config/site";

/** Minimal class combiner (kept dependency-free per SYSTEM/02 minimal-JS rule). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Build a WhatsApp click-to-chat link with an optional pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(): string {
  return `tel:${site.contact.phoneE164}`;
}

export function mailtoLink(subject?: string): string {
  const base = `mailto:${site.contact.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
