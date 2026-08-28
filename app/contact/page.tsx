import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { BrandRailBand } from "@/components/sections/brand-rail";
import { EnquiryForm } from "@/components/funnel/enquiry-form";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { SectionMark } from "@/components/ui/section-mark";
import { Reveal } from "@/engine/motion";
import { site } from "@/config/site";
import { pages } from "@/config/pages";
import { telLink, mailtoLink } from "@/lib/utils";

const p = pages.contact;
const a = site.address;

// Keyless Google Maps embed of the verified workshop address (no API key required).
const addressLine = `${a.street}, ${a.suburb}, ${a.city}, ${a.province}${a.postalCode ? `, ${a.postalCode}` : ""}`;
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(`${addressLine}, ${a.country}`)}&z=15&output=embed`;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />

      <BrandRailBand label="Across the major office-automation brands" />

      <section className="section bg-ground">
        <div className="container">
          <SectionMark index="01" label="Reach us" spec="WhatsApp · Call · Email · Visit" className="mb-9" />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Contact methods */}
            <Reveal>
              <div>
                <h2 className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">The fastest ways to talk to IMATEC</h2>
                <div className="mt-6">
                  <WhatsAppCta label="WhatsApp IMATEC" message="Hi IMATEC, I have an enquiry." size="lg" dataCta="contact-whatsapp" />
                </div>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-ink mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="label text-ink-muted">Phone</p>
                      <a href={telLink()} className="text-ink font-semibold hover:text-brand-ink transition-colors">{site.contact.phoneDisplay}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-ink mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="label text-ink-muted">Email</p>
                      <a href={mailtoLink("Enquiry via imatec.co.za")} className="text-ink font-semibold hover:text-brand-ink transition-colors break-all">{site.contact.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-ink mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="label text-ink-muted">Workshop</p>
                      <p className="text-ink font-semibold">{a.street}, {a.suburb}</p>
                      <p className="text-ink-2 text-sm">{a.city}, {a.province}{a.postalCode ? `, ${a.postalCode}` : ""}</p>
                      <p className="mt-1 text-sm text-ink-muted">Based in {site.based} · Serving the trade nationally</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-ink mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="label text-ink-muted">Hours</p>
                      <p className="text-ink-2 text-sm">Message us any time. We reply on WhatsApp in business hours.</p>
                    </div>
                  </li>
                </ul>

                {/* Compact location map — verified workshop address, lazy-loaded, keyless embed */}
                <div className="mt-8 relative aspect-[4/3] sm:aspect-[16/9] w-full max-w-lg overflow-hidden rounded-panel border border-hair">
                  <iframe
                    title={`IMATEC workshop location — ${addressLine}`}
                    src={mapSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </Reveal>

            {/* Enquiry form */}
            <Reveal preset="fadeUpItem">
              <div className="rounded-panel border border-hair bg-paper p-6 sm:p-8 shadow-card">
                <h2 className="text-xl font-bold text-ink">{p.formHeading}</h2>
                <p className="mt-2 text-sm text-ink-2 measure">{p.formSub}</p>
                <div className="mt-6">
                  <EnquiryForm variant="general" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Closing datum */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-2">
            <span className="label text-ink-muted">IMATEC · {site.based}</span>
            <span className="label text-ink-muted">Serving the office-automation trade nationally</span>
          </div>
        </div>
      </section>
    </>
  );
}
