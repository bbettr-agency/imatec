import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { waLink, telLink, mailtoLink } from "@/lib/utils";
import { WhatsAppGlyph } from "@/components/funnel/channel-ctas";

const year = 2026; // build-year constant (no runtime Date needed)

/**
 * Footer — deep graphite anchor that clearly ends the site. Light-on-dark, WCAG-safe
 * (body ≈7:1, labels ≈5:1), IMATEC blue kept as the single accent. The tone change
 * from the light final-CTA into the dark footer is the intentional transition — no rule.
 */
export function Footer() {
  const a = site.address;
  const link = "text-white/70 hover:text-white transition-colors";
  return (
    <footer className="bg-[#1b2128] text-white/70">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold tracking-tight text-white">
              IMA<span className="text-[#5aa9f0]">TEC</span>
            </p>
            <p className="mt-3 text-sm text-white/65 max-w-[32ch]">{site.descriptionShort}</p>
            <p className="mt-4 label text-white/45">
              Based in {site.based} · Serving the trade nationally
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <p className="label text-white/50">What we do</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className={`text-sm ${link}`}>{s.nav}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="label text-white/50">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/" className={`text-sm ${link}`}>Home</Link></li>
              <li><Link href="/about" className={`text-sm ${link}`}>About</Link></li>
              <li><Link href="/contact" className={`text-sm ${link}`}>Contact</Link></li>
              <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className={`text-sm ${link}`}>Facebook</a></li>
              <li><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={`text-sm ${link}`}>Instagram</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="label text-white/50">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={waLink()} className={`inline-flex items-center gap-2 ${link}`}>
                  <WhatsAppGlyph className="w-4 h-4 text-whatsapp" /> WhatsApp us
                </a>
              </li>
              <li>
                <a href={telLink()} className={`inline-flex items-center gap-2 ${link}`}>
                  <Phone className="w-4 h-4 text-white/45" /> {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoLink()} className={`inline-flex items-center gap-2 break-all ${link}`}>
                  <Mail className="w-4 h-4 text-white/45" /> {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/65">
                <MapPin className="w-4 h-4 text-white/45 mt-0.5 shrink-0" />
                <span>
                  {a.street}, {a.suburb}, {a.city}, {a.province}
                  {a.postalCode ? `, ${a.postalCode}` : ""}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/45">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>
            Website designed &amp; developed by{" "}
            <a href="https://www.bbettragency.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
