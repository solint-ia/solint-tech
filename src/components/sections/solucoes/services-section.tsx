import { Section } from "@/components/layout";
import { ServicesInteractiveTabs } from "@/components/features";
import { SectionHeading } from "@/components/ui";
import { servicesSection, solutionPillars } from "@/config/content/solucoes";

/** Seção de Soluções com abas interativas modernas, consolidação em 3 pilares e live preview. */
export function ServicesSection() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        description={servicesSection.description}
        className="mb-[clamp(36px,5vw,56px)]"
      />
      <ServicesInteractiveTabs pillars={solutionPillars} />
    </Section>
  );
}
