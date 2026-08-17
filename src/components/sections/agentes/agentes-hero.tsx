import { HeroMesh } from "@/components/layout";
import { InteractiveCore, TypedHeading } from "@/components/features";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import { agentesHero } from "@/config/content/agentes";

/** Hero de Agentes de IA: título com typewriter e visual 3D interativo. */
export function AgentesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-46 pb-25">
      <SectionMarker label={agentesHero.eyebrow} position="hero" tone="dark" />
      <HeroMesh pattern="dots" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[clamp(28px,5vw,72px)]">
        <div className="relative z-10">
          <Reveal>
            <TypedHeading
              lead={agentesHero.titleLead}
              typed={agentesHero.titleTyped}
              tail={agentesHero.titleTail}
              className="text-[clamp(2.3rem,4.6vw,3.6rem)]/[1.08]"
            />
          </Reveal>

          <Reveal delay={0.07}>
            <p className="m-0 mb-10 max-w-[560px] text-pretty text-[clamp(1rem,1.3vw,1.16rem)]/[1.68] font-light text-muted">
              {agentesHero.description}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="flex flex-wrap gap-3.5">
            <Button href={agentesHero.primaryCta.href}>{agentesHero.primaryCta.label}</Button>
            <Button href={agentesHero.secondaryCta.href} variant="secondary">
              {agentesHero.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        {/* Visual 3D Holográfico */}
        <div className="pointer-events-none absolute left-1/2 top-[32%] sm:top-[36%] -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] opacity-25 sm:opacity-35 z-0 select-none lg:pointer-events-auto lg:static lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:mx-auto lg:w-full lg:max-w-[580px] lg:opacity-100 lg:z-auto">
          <InteractiveCore
            src="/imagens-hero/agentes-ia.png"
            alt="Solint Agente de IA 3D"
          />
        </div>
      </div>
    </section>
  );
}
