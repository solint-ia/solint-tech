"use client";

import { Section } from "@/components/layout";
import { SectionHeading, SectionMarker } from "@/components/ui";
import { ServiceCarousel } from "@/components/features";
import { serviceAreas, serviceAreasSection } from "@/config/content/home";

/** Seção "Áreas de atuação": carrossel 3D das três frentes da Solint. */
export function ServiceAreasSection() {
  return (
    <Section id="atuacao" backdrop={<SectionMarker label={serviceAreasSection.eyebrow} />}>
      <SectionHeading
        eyebrow={serviceAreasSection.eyebrow}
        title={serviceAreasSection.title}
        description={serviceAreasSection.description}
        className="mb-[clamp(44px,6vw,72px)] max-w-[760px]"
      />
      <ServiceCarousel areas={serviceAreas} hint={serviceAreasSection.hint} />
    </Section>
  );
}
