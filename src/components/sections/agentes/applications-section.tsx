"use client";

// Client component porque injeta dados que carregam componentes de ícone: eles
// não atravessam a fronteira servidor→cliente, então a injeção acontece aqui.
import { Section } from "@/components/layout";
import { ApplicationsConstellation } from "@/components/features";
import { Reveal, SectionHeading } from "@/components/ui";
import { agentApplications, applicationsSection } from "@/config/content/agentes";

/** Seção "Como podemos ajudar": constelação assimétrica de aplicações. */
export function ApplicationsSection() {
  return (
    <Section id="ajuda" spacing="compact" className="!pb-12 sm:!pb-18">
      <SectionHeading
        eyebrow={applicationsSection.eyebrow}
        title={applicationsSection.title}
        description={applicationsSection.description}
        className="mb-[clamp(36px,5vw,52px)]"
      />
      <Reveal>
        <ApplicationsConstellation applications={agentApplications} />
      </Reveal>
    </Section>
  );
}
