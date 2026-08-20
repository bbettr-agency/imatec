import { Mail } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta, CallCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { home } from "@/config/home";
import { site } from "@/config/site";
import { mailtoLink } from "@/lib/utils";

/** `index` lets a host page number this closing section in its own local datum
 *  sequence (default "07" is the homepage position). */
export function FinalCta({ index = "07" }: { index?: string }) {
  const c = home.finalCta;
  return (
    <section className="bg-steel-soft border-t border-hair" aria-labelledby="final-cta-heading">
      <div className="container py-16 md:py-24">
        <SectionMark index={index} label="Get in touch" spec="WhatsApp · Call · Email" />

        <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label text-brand-ink">{c.eyebrow}</p>
              <h2
                id="final-cta-heading"
                className="mt-3 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02] font-semibold tracking-tight text-ink text-balance"
              >
                {c.heading}
              </h2>
              <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{c.sub}</p>
            </Reveal>
          </div>

          <Reveal preset="fadeUpItem" className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:max-w-sm lg:ml-auto">
              <WhatsAppCta label="WhatsApp IMATEC" message="Hi IMATEC, I have an enquiry." size="lg" dataCta="final-whatsapp" className="w-full" />
              <div className="grid grid-cols-2 gap-3">
                <CallCta size="lg" className="w-full" />
                <Button href={mailtoLink("Enquiry via imatec.co.za")} variant="quiet" size="lg" external dataCta="final-email" className="w-full">
                  <Mail className="w-4 h-4" aria-hidden="true" /> Email
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Closing datum */}
        <div className="mt-14 border-t border-hair-strong pt-4 flex flex-wrap items-center justify-between gap-2">
          <span className="label text-ink-muted">IMATEC · {site.based}</span>
          <span className="label text-ink-muted">Serving the office-automation trade nationally</span>
        </div>
      </div>
    </section>
  );
}
