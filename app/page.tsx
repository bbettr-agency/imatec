import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { RecoatVsReplace } from "@/components/sections/recoat-vs-replace";
import { WhyImatec } from "@/components/sections/why-imatec";
import { Process } from "@/components/sections/process";
import { Coverage } from "@/components/sections/coverage";
import { Story } from "@/components/sections/story";
import { Faq } from "@/components/sections/faq";
import { BrandRailBand } from "@/components/sections/brand-rail";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd, webPageJsonLd } from "@/lib/jsonld";

const TITLE = "Fuser / Hot Roller Recoating & Printer Parts | IMATEC";
const DESCRIPTION =
  "IMATEC recoats worn fuser & hot rollers instead of replacing them, and supplies workshop-tested printer & copier parts and consumables to the SA trade.";

export const metadata = buildMetadata({
  title: TITLE,
  absolute: true,
  // Social-preview title leads with the brand (matches the branded share image).
  ogTitle: "IMATEC | Print Solutions, Parts & Fuser / Hot Roller Coating",
  description: DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/", name: TITLE, description: DESCRIPTION })} />
      <Hero />
      {/* Merged: brand & parts coverage (left) + capability index (right). */}
      <Coverage index="01" />
      <RecoatVsReplace />
      <WhyImatec />
      <Process />
      <Story />
      <Faq />
      {/* A deliberate compact repeat of the brand motif before conversion. */}
      <BrandRailBand label="One workshop, every major brand" />
      <FinalCta index="06" showMap />
    </>
  );
}
