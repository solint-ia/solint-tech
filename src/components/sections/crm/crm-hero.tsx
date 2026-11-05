import { HeroMesh } from "@/components/layout";
import { CrmTour, TypedHeading } from "@/components/features";
import { Reveal, SectionMarker } from "@/components/ui";
import { crmHero, crmScreens, crmTour, SCREEN_HEIGHT, SCREEN_WIDTH } from "@/config/content/crm";

/**
 * Hero do Solint CRM: título alinhado à esquerda e, logo abaixo, a vitrine do
 * produto (menu de módulos + captura real + barra do módulo ativo).
 */
export function CrmHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-[clamp(56px,8vw,100px)] lg:pt-40">
      <SectionMarker label={crmHero.marker} position="hero" />
      <HeroMesh pattern="grid" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <Reveal>
            <span className="mb-4 block text-xs/[1.4] font-semibold tracking-[0.2em] text-accent uppercase">
              {crmHero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <TypedHeading
              lead={crmHero.titleLead}
              typed={crmHero.titleTyped}
              tail={crmHero.titleTail}
              className="mb-5 text-[clamp(2.1rem,4.4vw,3.4rem)]/[1.08]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="m-0 max-w-[600px] text-pretty text-[clamp(1rem,1.3vw,1.14rem)]/[1.65] font-light text-muted">
              {crmHero.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14} distance={40} className="mt-[clamp(36px,5vw,56px)]">
          <CrmTour items={crmTour} screens={crmScreens} width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />
        </Reveal>
      </div>
    </section>
  );
}
