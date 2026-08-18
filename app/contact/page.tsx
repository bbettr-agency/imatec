import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { EnquiryForm } from "@/components/funnel/enquiry-form";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Reveal } from "@/engine/motion";
import { site } from "@/config/site";
import { pages } from "@/config/pages";
import { telLink, mailtoLink } from "@/lib/utils";

const p = pages.contact;
const a = site.address;

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

      <section className="section bg-ground">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Contact methods */}
            <Reveal>
              <div>
                <p className="label text-brand-ink">Reach us</p>
                <h2 className="mt-3 text-2xl font-extrabold text-ink">The fastest ways to talk to IMATEC</h2>
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
                      <p className="text-ink-2 text-sm">Message us any time — we reply on WhatsApp in business hours.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Enquiry form */}
            <Reveal preset="fadeUpItem">
              <div className="rounded-panel border border-hair bg-paper p-6 sm:p-8 shadow-card">
                <h2 className="text-xl font-extrabold text-ink">{p.formHeading}</h2>
                <p className="mt-2 text-sm text-ink-2 measure">{p.formSub}</p>
                <div className="mt-6">
                  <EnquiryForm variant="general" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
