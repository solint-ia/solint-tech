import { Section } from "@/components/layout";
import { ProjectGrid } from "@/components/features";
import { SectionHeading } from "@/components/ui";
import { portfolioProjects, portfolioSection } from "@/config/content/solucoes";

/** Seção de portfólio de produtos e soluções — Dark Glassmorphic. */
export function PortfolioSection() {
  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow={portfolioSection.eyebrow}
        title={portfolioSection.title}
        description={portfolioSection.note}
        className="mb-[clamp(40px,5vw,60px)]"
      />
      <ProjectGrid projects={portfolioProjects} imageLabel={portfolioSection.imageLabel} />
    </Section>
  );
}
