import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { LegalBody } from "@/components/sections/legal-body";
import { JsonLd, webPageJsonLd } from "@/lib/jsonld";
import { site, pageUpdated } from "@/config/site";

/**
 * Website terms of use (the site itself — NOT trading terms for recoating or
 * parts, which IMATEC confirms with each quote). CLIENT REVIEW before relying on it.
 */

const TITLE = "Website Terms of Use";
const DESCRIPTION =
  "The terms that apply when you use imatec.co.za, the website of IMATEC, a fuser roller recoating and printer parts specialist in Centurion, South Africa.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/terms" });

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/terms", name: `${TITLE} · IMATEC`, description: DESCRIPTION })} />
      <PageHero
        eyebrow="Legal"
        title="Website terms of use"
        sub="The terms that apply when you use this website. Work you order from us is covered by the quote we give you."
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Terms of use", path: "/terms" }]}
      />
      <LegalBody updated={pageUpdated["/terms"]}>
        <div>
          <h2>1. About this website</h2>
          <p>This website is operated by {site.legalName} (&ldquo;IMATEC&rdquo;) of {site.based}, South Africa. By using it, you agree to these terms.</p>
        </div>
        <div>
          <h2>2. Information on the site</h2>
          <p>We describe our recoating service and the products we supply as accurately as we can, but the information is general. Whether a roller can be recoated, and the price, availability and turnaround of any work or product, are confirmed in the quote we give you for your specific enquiry.</p>
        </div>
        <div>
          <h2>3. Quotes and orders</h2>
          <p>Sending an enquiry does not create an order. Any work or supply is agreed separately, on the terms set out in our quote or invoice.</p>
        </div>
        <div>
          <h2>4. Trademarks</h2>
          <p>Printer and copier brand names and logos shown on this site (such as {site.brands.slice(0, 5).join(", ")} and others) belong to their respective owners. They are shown only to indicate the equipment we supply parts for and work on, and do not imply any partnership or endorsement. Mr McKenic and Vacu-Tec are the names of the product ranges we supply.</p>
        </div>
        <div>
          <h2>5. Our content</h2>
          <p>The text, photographs and design of this website belong to IMATEC unless stated otherwise. You may share links to it, but please don&apos;t copy its content for commercial use without our permission.</p>
        </div>
        <div>
          <h2>6. Links to other sites</h2>
          <p>Links to other websites (such as WhatsApp, Facebook, Instagram or Google Maps) are provided for convenience. We are not responsible for their content or privacy practices.</p>
        </div>
        <div>
          <h2>7. Liability</h2>
          <p>To the extent permitted by law, including the Consumer Protection Act where it applies, IMATEC is not liable for loss arising from reliance on general information on this website. Nothing in these terms limits rights you have under South African law.</p>
        </div>
        <div>
          <h2>8. Privacy</h2>
          <p>How we handle personal information is explained in our <Link href="/privacy">privacy policy</Link>.</p>
        </div>
        <div>
          <h2>9. Governing law and contact</h2>
          <p>These terms are governed by the laws of South Africa. Questions? Email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or call {site.contact.phoneDisplay}.</p>
        </div>
      </LegalBody>
    </>
  );
}
