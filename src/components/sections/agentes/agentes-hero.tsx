import { HeroMesh } from "@/components/layout";
import { AgentFeed, TypedHeading } from "@/components/features";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import { agentesHero } from "@/config/content/agentes";

/** Hero de Agentes de IA: título com typewriter e feed de agente ao vivo. */
export function AgentesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-46 pb-24">
      <SectionMarker label={agentesHero.eyebrow} position="hero" tone="dark" />
      <HeroMesh pattern="dots" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(330px,1fr))] items-center gap-[clamp(36px,5vw,64px)]">
        <div>
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

        <Reveal direction="left" delay={0.1}>
          <AgentFeed />
        </Reveal>
      </div>
    </section>
  );
}
