import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { LegalBody } from "@/components/sections/legal-body";
import { JsonLd, webPageJsonLd } from "@/lib/jsonld";
import { site, pageUpdated } from "@/config/site";

/**
 * POPIA privacy notice. Describes ONLY what the site actually does today
 * (enquiry form → CRM webhook / WhatsApp fallback; consent-gated analytics;
 * Google Maps embed). CLIENT REVIEW: confirm the Information Officer's name
 * and registration with the Information Regulator, and update if processing
 * changes (e.g. new tools added in GTM).
 */

const TITLE = "Privacy Policy (POPIA)";
const DESCRIPTION =
  "How IMATEC collects, uses and protects the personal information you share through imatec.co.za, and your rights under South Africa's POPI Act.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/privacy" });

const a = site.address;
const address = `${a.street}, ${a.suburb}, ${a.city}, ${a.province}${a.postalCode ? `, ${a.postalCode}` : ""}`;

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/privacy", name: `${TITLE} · IMATEC`, description: DESCRIPTION })} />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        sub="How IMATEC handles the personal information you share with us, in line with the Protection of Personal Information Act 4 of 2013 (POPIA)."
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Privacy policy", path: "/privacy" }]}
      />
      <LegalBody updated={pageUpdated["/privacy"]}>
        <div>
          <h2>1. Who we are</h2>
          <p>
            {site.legalName} (&ldquo;IMATEC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the responsible party for personal
            information collected through this website. We are based at {address}, South Africa.
          </p>
        </div>

        <div>
          <h2>2. What we collect</h2>
          <ul>
            <li><strong>Enquiry details you give us:</strong> your name, phone number, and optionally your email address, company, the printer/copier brand and model, the part or component, and your message.</li>
            <li><strong>Messages you send us directly</strong> on WhatsApp, by phone or by email.</li>
            <li><strong>Basic technical data</strong> that any website receives (such as your IP address and browser type), handled by our hosting provider to deliver and secure the site.</li>
            <li><strong>Analytics data, only if you accept it.</strong> If analytics are switched on, a consent banner asks you first; nothing loads unless you choose &ldquo;accept&rdquo;. Your choice is stored in your own browser.</li>
            <li><strong>Campaign information</strong> in the link you arrived from (such as UTM tags or ad click IDs), attached to an enquiry so we know which advert or listing led you to us.</li>
          </ul>
        </div>

        <div>
          <h2>3. Why we use it</h2>
          <ul>
            <li>To respond to your enquiry, quote, and supply the service or products you ask about.</li>
            <li>To keep a record of our communication with you.</li>
            <li>With your consent, to understand how the website is used and improve it.</li>
          </ul>
          <p className="mt-3">We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>
        </div>

        <div>
          <h2>4. Who we share it with</h2>
          <p>We share personal information only with service providers that help us run the website and handle enquiries, under appropriate confidentiality and security obligations:</p>
          <ul className="mt-3">
            <li>our website host (Vercel);</li>
            <li>our customer-relationship management system, which receives website enquiries;</li>
            <li>WhatsApp (Meta), if you choose to contact us that way;</li>
            <li>Google, if you accept analytics cookies, and for the embedded map on our contact page.</li>
          </ul>
          <p className="mt-3">Some of these providers store information outside South Africa. Where that happens, we rely on them being subject to laws or binding agreements that provide an adequate level of protection, as POPIA requires.</p>
        </div>

        <div>
          <h2>5. How long we keep it</h2>
          <p>We keep enquiry information for as long as we need it to deal with your enquiry and any resulting work, and to meet our legal and accounting obligations. After that it is deleted or de-identified.</p>
        </div>

        <div>
          <h2>6. How we protect it</h2>
          <p>The website is served only over encrypted HTTPS, and we limit access to enquiry information to the people at IMATEC who need it to help you.</p>
        </div>

        <div>
          <h2>7. Your rights</h2>
          <p>Under POPIA you may:</p>
          <ul className="mt-3">
            <li>ask whether we hold personal information about you, and request a copy of it;</li>
            <li>ask us to correct, update or delete it;</li>
            <li>object to its processing, or withdraw consent you have given;</li>
            <li>lodge a complaint with the Information Regulator (South Africa) at <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>.</li>
          </ul>
        </div>

        <div>
          <h2>8. Contact our Information Officer</h2>
          <p>
            To exercise any of these rights or ask a question about this policy, email{" "}
            <a href={`mailto:${site.contact.email}?subject=POPIA%20request`}>{site.contact.email}</a>, call {site.contact.phoneDisplay}, or write to us at {address}.
          </p>
        </div>

        <div>
          <h2>9. Changes to this policy</h2>
          <p>We may update this policy when the way we handle information changes. The date at the top shows when it was last updated.</p>
        </div>
      </LegalBody>
    </>
  );
}
