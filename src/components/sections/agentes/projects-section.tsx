import { Section } from "@/components/layout";
import { ProjectGrid } from "@/components/features";
import { SectionHeading } from "@/components/ui";
import { agentProjects, projectsSection } from "@/config/content/agentes";

/** Seção de projetos e cases de Agentes de IA — Dark Glassmorphic. */
export function ProjectsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.note}
        className="mb-[clamp(40px,5vw,60px)]"
      />
      <ProjectGrid
        projects={agentProjects}
        imageLabel={projectsSection.imageLabel}
        imageHeight={150}
      />
    </Section>
  );
}
