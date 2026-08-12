import { HeroMesh } from "@/components/layout";
import { HeroPipeline, TypedHeading } from "@/components/features";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import { prospectHero } from "@/config/content/prospect";

/** Hero do Prospect: título com typewriter e o pipeline do produto ao lado. */
export function ProspectHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-46 pb-24">
      <SectionMarker label={prospectHero.eyebrow} position="hero" />
      <HeroMesh pattern="diagonal" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-[clamp(36px,5vw,64px)]">
        <div>
          <Reveal>
            <TypedHeading
              lead={prospectHero.titleLead}
              typed={prospectHero.titleTyped}
              tail={prospectHero.titleTail}
              className="text-[clamp(2.3rem,4.8vw,3.7rem)]/[1.08]"
            />
          </Reveal>

          <Reveal delay={0.07}>
            <p className="m-0 mb-10 max-w-[560px] text-pretty text-[clamp(1rem,1.35vw,1.18rem)]/[1.68] font-light text-muted">
              {prospectHero.description}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="flex flex-wrap gap-3.5">
            <Button href={prospectHero.primaryCta.href}>{prospectHero.primaryCta.label}</Button>
            <Button href={prospectHero.secondaryCta.href} variant="secondary">
              {prospectHero.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <HeroPipeline />
        </Reveal>
      </div>
    </section>
  );
}
