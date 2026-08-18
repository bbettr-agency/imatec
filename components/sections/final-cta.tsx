import { Mail } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { WhatsAppCta, CallCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { home } from "@/config/home";
import { mailtoLink } from "@/lib/utils";

export function FinalCta() {
  const c = home.finalCta;
  return (
    <section className="section bg-paper" aria-labelledby="final-cta-heading">
      <div className="container">
        <Reveal>
          <div className="rounded-panel border border-brand/20 bg-brand-soft/60 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div className="max-w-3xl">
              <p className="label text-brand-ink">{c.eyebrow}</p>
              <h2 id="final-cta-heading" className="mt-3 text-[1.7rem] leading-[1.15] sm:text-4xl font-extrabold text-ink text-balance">
                {c.heading}
              </h2>
              <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{c.sub}</p>
              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <WhatsAppCta label="WhatsApp IMATEC" message="Hi IMATEC, I have an enquiry." size="lg" dataCta="final-whatsapp" />
                <CallCta size="lg" />
                <Button href={mailtoLink("Enquiry via imatec.co.za")} variant="quiet" size="lg" external dataCta="final-email">
                  <Mail className="w-4 h-4" aria-hidden="true" /> Email us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
