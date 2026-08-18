"use client";

import { Phone } from "lucide-react";
import { useScrollPast } from "@/engine/motion";
import { waLink, telLink } from "@/lib/utils";
import { WhatsAppGlyph } from "@/components/funnel/channel-ctas";
import { cn } from "@/lib/utils";

/** Mobile-only sticky conversion bar. Appears after the hero scrolls out so it
 *  doesn't compete with the hero's own CTAs. Call + WhatsApp, weighted. */
export function StickyCta() {
  const past = useScrollPast(620);

  return (
    <div
      className={cn(
        "lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-bench",
        past ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!past}
    >
      <div className="bg-paper/95 backdrop-blur-md border-t border-hair shadow-nav">
        <div className="container flex items-stretch gap-2.5 py-2.5">
          <a
            href={telLink()}
            data-cta="call-sticky"
            className="flex-[1] inline-flex items-center justify-center gap-2 min-h-[48px] rounded-btn border border-hair-strong text-ink font-bold text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" /> Call
          </a>
          <a
            href={waLink("Hi IMATEC, I have an enquiry.")}
            data-cta="whatsapp-sticky"
            className="flex-[1.7] inline-flex items-center justify-center gap-2 min-h-[48px] rounded-btn bg-whatsapp text-[#04310f] font-bold text-sm"
          >
            <WhatsAppGlyph className="w-[1.05em] h-[1.05em]" /> WhatsApp IMATEC
          </a>
        </div>
      </div>
    </div>
  );
}
