import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta, CallCta, WhatsAppGlyph } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { home } from "@/config/home";
import { site } from "@/config/site";
import { mailtoLink, telLink, waLink } from "@/lib/utils";

const a = site.address;
const addressLine = `${a.street}, ${a.suburb}, ${a.city}, ${a.province}${a.postalCode ? `, ${a.postalCode}` : ""}`;
const mapQuery = encodeURIComponent(`${addressLine}, ${a.country}`);
const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`;

function ClosingDatum() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-2">
      <span className="label text-ink-muted">IMATEC · {site.based}</span>
      <span className="label text-ink-muted">Serving the office-automation trade nationally</span>
    </div>
  );
}

/**
 * `index` numbers this closing section locally (default "07"). `showMap` switches
 * to the two-column Get-in-touch layout with contact details and a responsive,
 * lazy-loaded Google Map (used on the homepage / contact).
 */
export function FinalCta({ index = "07", showMap = false }: { index?: string; showMap?: boolean }) {
  const c = home.finalCta;

  if (showMap) {
    return (
      <section className="bg-steel-soft" aria-labelledby="final-cta-heading">
        <div className="container py-16 md:py-24">
          <SectionMark index={index} label="Get in touch" spec="WhatsApp · Call · Email · Visit" />

          <div className="mt-10 grid gap-x-14 gap-y-12 lg:grid-cols-2 lg:items-start">
            {/* Left — message + actions */}
            <div>
              <Reveal>
                <p className="label text-brand-ink">{c.eyebrow}</p>
                <h2 id="final-cta-heading" className="mt-3 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3rem] lg:leading-[1.03] font-semibold tracking-tight text-ink text-balance">
                  {c.heading}
                </h2>
                <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{c.sub}</p>
              </Reveal>
              <Reveal preset="fadeUpItem">
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:max-w-md">
                  <WhatsAppCta label="WhatsApp IMATEC" message="Hi IMATEC, I have an enquiry." size="lg" dataCta="final-whatsapp" />
                  <CallCta size="lg" />
                </div>
              </Reveal>
            </div>

            {/* Right — contact details + map */}
            <Reveal preset="fadeUpItem">
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={waLink()} className="inline-flex items-center gap-2.5 text-ink-2 hover:text-brand-ink transition-colors" data-cta="final-wa-detail">
                    <WhatsAppGlyph className="w-4 h-4 text-whatsapp" /> WhatsApp us
                  </a>
                </li>
                <li>
                  <a href={telLink()} className="inline-flex items-center gap-2.5 text-ink-2 hover:text-brand-ink transition-colors">
                    <Phone className="w-4 h-4 text-ink-muted" /> {site.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={mailtoLink()} className="inline-flex items-center gap-2.5 text-ink-2 hover:text-brand-ink transition-colors break-all">
                    <Mail className="w-4 h-4 text-ink-muted" /> {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-ink-2">
                  <MapPin className="w-4 h-4 text-ink-muted mt-0.5 shrink-0" />
                  <span>{addressLine}</span>
                </li>
              </ul>

              <div className="mt-5 relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-panel border border-hair">
                <iframe
                  title={`IMATEC location — ${addressLine}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </Reveal>
          </div>

          <ClosingDatum />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-steel-soft" aria-labelledby="final-cta-heading">
      <div className="container py-16 md:py-24">
        <SectionMark index={index} label="Get in touch" spec="WhatsApp · Call · Email" />

        <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label text-brand-ink">{c.eyebrow}</p>
              <h2 id="final-cta-heading" className="mt-3 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02] font-semibold tracking-tight text-ink text-balance">
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

        <ClosingDatum />
      </div>
    </section>
  );
}
