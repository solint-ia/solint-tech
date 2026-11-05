import { Section } from "@/components/layout";
import { CrmModuleCarousel } from "@/components/features";
import { Reveal, SectionHeading } from "@/components/ui";
import { crmModules, crmModulesSection } from "@/config/content/crm";

/** Módulos do CRM: carrossel de ícones coloridos com painel do módulo selecionado. */
export function CrmModulesSection() {
  return (
    <Section id="modulos" className="border-t border-accent/10">
      <SectionHeading
        eyebrow={crmModulesSection.eyebrow}
        title={crmModulesSection.title}
        description={crmModulesSection.description}
        className="mb-[clamp(28px,4vw,44px)] max-w-[960px]"
      />
      <Reveal delay={0.06}>
        <CrmModuleCarousel modules={crmModules} />
      </Reveal>
    </Section>
  );
}
