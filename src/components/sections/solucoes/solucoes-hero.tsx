import { HeroMesh } from "@/components/layout";
import { InteractiveCore, TypedHeading } from "@/components/features";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import { solucoesHero } from "@/config/content/solucoes";
import { cn } from "@/lib/utils";

/** Hero de Soluções: título com typewriter e visual 3D interativo. */
export function SolucoesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-46 pb-25">
      <SectionMarker label={solucoesHero.eyebrow} position="hero" />
      <HeroMesh pattern="grid" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[clamp(28px,5vw,72px)]">
        <div className="relative z-10">
          <Reveal>
            <TypedHeading
              lead={solucoesHero.titleLead}
              typed={solucoesHero.titleTyped}
              tail={solucoesHero.titleTail}
              className="text-[clamp(2.3rem,4.6vw,3.6rem)]/[1.08]"
            />
          </Reveal>

          {solucoesHero.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.07 + index * 0.05}>
              <p
                className={cn(
                  "m-0 max-w-[560px] text-pretty text-[clamp(1rem,1.3vw,1.16rem)]/[1.68] font-light text-muted",
                  index === solucoesHero.paragraphs.length - 1 ? "mb-10" : "mb-5",
                )}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="flex flex-wrap gap-3.5">
            <Button href={solucoesHero.primaryCta.href}>{solucoesHero.primaryCta.label}</Button>
            <Button href={solucoesHero.secondaryCta.href} variant="secondary">
              {solucoesHero.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        {/* Visual 3D Holográfico */}
        <div className="pointer-events-none absolute left-1/2 top-[32%] sm:top-[36%] -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] opacity-25 sm:opacity-35 z-0 select-none lg:pointer-events-auto lg:static lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:mx-auto lg:w-full lg:max-w-[580px] lg:opacity-100 lg:z-auto">
          <InteractiveCore
            src="/imagens-hero/solucoes.png"
            alt="Solint Soluções Digitais 3D"
          />
        </div>
      </div>
    </section>
  );
}
