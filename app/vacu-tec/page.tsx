import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/page-hero";
import { TextSection } from "@/components/ui/text-section";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { pages } from "@/config/pages";

const p = pages.vacuTec;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/vacu-tec",
});

export default function VacuTecPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("vacu-tec")) }} />

      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Vacu-Tec", path: "/vacu-tec" }]}
        image={{ src: "/images/vacu-tec.jpg", alt: "The IMATEC Vacu-Tec service vacuum cleaner with hose and collection tray", label: "Built by IMATEC" }}
        actions={<WhatsAppCta label="Enquire About Vacu-Tec" message="Hi IMATEC, I'd like to enquire about a Vacu-Tec service vacuum." size="lg" dataCta="vacutec-hero" />}
      />

      <TextSection eyebrow={p.story.eyebrow} heading={p.story.heading} bg="ground">
        <p>{p.story.body}</p>
      </TextSection>

      <TextSection
        eyebrow={p.forWho.eyebrow}
        heading={p.forWho.heading}
        bg="paper"
        actions={<WhatsAppCta label="Ask about the range" message="Hi IMATEC, please tell me about the Vacu-Tec range, specs and pricing." size="lg" dataCta="vacutec-range" />}
      >
        <p>{p.forWho.body}</p>
      </TextSection>

      <FinalCta />
    </>
  );
}
