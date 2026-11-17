import { site, pageUpdated } from "@/config/site";
import { services } from "@/config/services";
import { pages } from "@/config/pages";
import { home } from "@/config/home";

/**
 * /llms.txt — a plain-markdown map of the site for AI assistants (llmstxt.org).
 * Generated from config so it never drifts from the pages. Truth gate applies:
 * only facts already published on the site.
 */
export const dynamic = "force-static";

const a = site.address;
const u = (path: string) => (path === "/" ? site.url : `${site.url}${path}`);

function body() {
  const svc = services.map((s) => `- [${s.name}](${u(`/${s.slug}`)}): ${s.summary}`).join("\n");
  const faq = [...home.faq.items, ...pages.recoating.faq.items]
    .map((f) => `- **${f.q}** ${f.a}`)
    .join("\n");

  return `# ${site.legalName}

> ${site.name} is a specialist office-automation workshop in ${site.based}, South Africa. It recoats worn fuser, hot and pressure rollers for printers and copiers (renewing the worn surface so the original metal core goes back into service instead of being replaced), and supplies workshop-tested printer and copier parts, toner, consumables, Vacu-Tec service vacuums and Mr McKenic maintenance products to dealers, technicians and businesses across South Africa.

Key facts:
- Name: ${site.legalName} (also written IMATEC), the South African business at imatec.co.za. It is a different company from the other businesses named "Imatec" abroad (for example in Luxembourg or New Zealand).
- Location: ${a.street}, ${a.suburb}, ${a.city}, ${a.province}${a.postalCode ? ` ${a.postalCode}` : ""}, ${a.country}. Serves customers nationwide.
- Experience: ${site.yearsExperience} years in the office-automation industry.
- Brands supported: ${site.brands.join(", ")} and others.
- Contact: WhatsApp or phone ${site.contact.phoneDisplay}; email ${site.contact.email}.
- Pricing and turnaround are quoted per roller or part on enquiry; they are not published.

## Services and products

${svc}

## Company

- [About IMATEC](${u("/about")}): history, what sets the workshop apart.
- [Contact](${u("/contact")}): WhatsApp, phone, email, workshop address and map.

## Frequently asked questions

${faq}

## Optional

- [Home](${u("/")}): overview of all four capabilities.
- [Privacy policy](${u("/privacy")}): POPIA notice.
- [Terms of use](${u("/terms")})
- [Sitemap](${u("/sitemap.xml")})

Last updated: ${Object.values(pageUpdated).sort().at(-1)}
`;
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
