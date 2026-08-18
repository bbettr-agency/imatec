"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "@/config/site";
import { waLink } from "@/lib/utils";
import { WhatsAppGlyph } from "@/components/funnel/channel-ctas";

type Variant = "recoating" | "parts" | "general";

const COMPONENTS = ["Fuser roller", "Hot roller", "Pressure roller", "Not sure / other"];

/** Capture marketing attribution on first paint (persisted for the session). */
function useAttribution() {
  const ref = useRef<Record<string, string>>({});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    const attr: Record<string, string> = {};
    keys.forEach((k) => {
      const v = p.get(k);
      if (v) attr[k] = v;
    });
    attr.landing_page = window.location.pathname;
    attr.referrer = document.referrer || "direct";
    ref.current = attr;
  }, []);
  return ref;
}

function summariseForWhatsApp(fd: FormData, variant: Variant): string {
  const g = (k: string) => (fd.get(k) as string) || "";
  const lines = [`Hi IMATEC, enquiry from your website (${variant}):`, `Name: ${g("name")}`];
  if (variant === "recoating") {
    lines.push(`Brand: ${g("brand")}`, `Model: ${g("model")}`, `Component: ${g("component")}`, `Quantity: ${g("quantity")}`);
  }
  if (variant === "parts") lines.push(`Brand: ${g("brand")}`, `Part / model: ${g("part")}`);
  if (g("message")) lines.push(`Details: ${g("message")}`);
  if (g("phone")) lines.push(`Phone: ${g("phone")}`);
  return lines.filter(Boolean).join("\n");
}

const inputBase =
  "w-full rounded-btn border border-hair-strong bg-paper px-3.5 py-2.5 text-ink text-[0.95rem] placeholder:text-ink-muted focus-visible:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const labelBase = "block text-sm font-semibold text-ink mb-1.5";

export function EnquiryForm({ variant = "general" }: { variant?: Variant }) {
  const attribution = useAttribution();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "wa">("idle");
  const [waHref, setWaHref] = useState<string>(waLink());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_gotcha")) return;

    setStatus("sending");
    const payload: Record<string, unknown> = { variant, ...attribution.current };
    fd.forEach((v, k) => (payload[k] = v));

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("done");
        return;
      }
      // Not configured / upstream issue → WhatsApp fallback, no lead lost.
      setWaHref(waLink(summariseForWhatsApp(fd, variant)));
      setStatus("wa");
    } catch {
      setWaHref(waLink(summariseForWhatsApp(fd, variant)));
      setStatus("wa");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-panel border border-brand/25 bg-brand-soft/60 p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-brand mx-auto" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-extrabold text-ink">Thank you — we&apos;ve got it</h3>
        <p className="mt-2 text-ink-2 text-sm measure mx-auto">
          Your enquiry is with the IMATEC team. We&apos;ll be in touch shortly. Need us faster?{" "}
          <a className="text-brand-ink font-semibold" href={waLink()}>WhatsApp us</a>.
        </p>
      </div>
    );
  }

  if (status === "wa") {
    return (
      <div className="rounded-panel border border-hair bg-steel-soft p-8 text-center">
        <h3 className="text-xl font-extrabold text-ink">One tap to send</h3>
        <p className="mt-2 text-ink-2 text-sm measure mx-auto">
          Send your enquiry straight to us on WhatsApp — we&apos;ve pre-filled the details for you.
        </p>
        <a
          href={waHref}
          data-cta="enquiry-wa-fallback"
          className="mt-5 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-btn bg-whatsapp text-[#04310f] font-bold text-sm px-5"
        >
          <WhatsAppGlyph className="w-[1.05em] h-[1.05em]" /> Send on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelBase}>Your name</label>
          <input id="name" name="name" required autoComplete="name" className={inputBase} placeholder="First and last name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>Best number to reach you</label>
          <input id="phone" name="phone" required type="tel" inputMode="tel" autoComplete="tel" className={inputBase} placeholder="e.g. 082 000 0000" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>Email <span className="font-normal text-ink-muted">(optional)</span></label>
        <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={inputBase} placeholder="you@company.co.za" />
      </div>

      {variant === "recoating" && (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="brand" className={labelBase}>Printer / copier brand</label>
              <select id="brand" name="brand" className={inputBase} defaultValue="">
                <option value="" disabled>Select a brand</option>
                {site.brands.map((b) => <option key={b} value={b}>{b}</option>)}
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="model" className={labelBase}>Model <span className="font-normal text-ink-muted">(if known)</span></label>
              <input id="model" name="model" className={inputBase} placeholder="e.g. Ricoh MP C3003" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="component" className={labelBase}>Component</label>
              <select id="component" name="component" className={inputBase} defaultValue="">
                <option value="" disabled>Select a component</option>
                {COMPONENTS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className={labelBase}>Quantity</label>
              <input id="quantity" name="quantity" type="number" inputMode="numeric" min={1} defaultValue={1} className={inputBase} />
            </div>
          </div>
        </>
      )}

      {variant === "parts" && (
        <div>
          <label htmlFor="part" className={labelBase}>Brand, model &amp; part needed</label>
          <input id="part" name="part" required className={inputBase} placeholder="e.g. Kyocera TASKalfa 3011i — pickup roller" />
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelBase}>
          {variant === "recoating" ? "What's happening with the roller?" : "How can we help?"}
        </label>
        <textarea id="message" name="message" rows={4} className={inputBase} placeholder={variant === "recoating" ? "e.g. marking pages, worn surface, print defects…" : "Tell us what you need"} />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-ink-2">
        <input type="checkbox" name="consent" required className="mt-1 w-4 h-4 accent-[color:theme(colors.brand.DEFAULT)]" />
        <span>I agree that IMATEC may contact me about this enquiry. (POPIA)</span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        data-cta={`enquiry-submit-${variant}`}
        className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-btn bg-brand-cta text-white font-bold text-sm px-6 shadow-cta hover:bg-brand-ink transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : <>Send enquiry <Send className="w-4 h-4" aria-hidden="true" /></>}
      </button>
      <p className="text-xs text-ink-muted">No obligation · We reply on WhatsApp in business hours.</p>
    </form>
  );
}
