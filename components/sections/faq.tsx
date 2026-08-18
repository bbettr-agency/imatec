import { FaqAccordion } from "@/components/sections/faq-accordion";
import { home } from "@/config/home";

export function Faq() {
  return <FaqAccordion eyebrow={home.faq.eyebrow} heading={home.faq.heading} items={home.faq.items} bg="ground" />;
}
