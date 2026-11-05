import { Section } from "@/components/layout";
import { CrmTour } from "@/components/features";
import { Reveal, SectionHeading } from "@/components/ui";
import {
  crmScreens,
  crmTour,
  crmTourSection,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/config/content/crm";

/** "Por dentro da plataforma": tour em abas pelas telas reais do CRM. */
export function CrmTourSection() {
  return (
    <Section id="plataforma">
      <SectionHeading
        eyebrow={crmTourSection.eyebrow}
        title={crmTourSection.title}
        description={crmTourSection.description}
        className="mb-[clamp(36px,5vw,60px)]"
      />
      <Reveal delay={0.06}>
        <CrmTour items={crmTour} screens={crmScreens} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />
      </Reveal>
    </Section>
  );
}
