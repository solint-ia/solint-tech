import { HeroMesh } from "@/components/layout";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import {
  HeroParticles,
  InteractiveCore,
  TerminalLine,
  TypedHeading,
} from "@/components/features";
import { homeHero } from "@/config/content/home";

/**
 * Hero da home: título com typewriter, terminal simulado e o núcleo 3D
 * interativo à direita.
 */
export function HomeHero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pt-46 pb-25">
      <SectionMarker label={homeHero.eyebrow} position="hero" />
      <HeroMesh pattern="lines" mask="wide" meshOpacity={0.4} />
      <HeroParticles />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[clamp(28px,5vw,72px)]">
        <div className="relative z-10">
          <Reveal>
            <TypedHeading
              lead={homeHero.titleLead}
              typed={homeHero.titleTyped}
              tail={homeHero.titleTail}
              className="text-[clamp(2.5rem,5.4vw,4.15rem)]/[1.06]"
            />
          </Reveal>

          <Reveal delay={0.07}>
            <p className="m-0 mb-10 max-w-[560px] text-pretty text-[clamp(1.02rem,1.35vw,1.2rem)]/[1.65] font-light text-muted">
              {homeHero.description}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mb-13 flex flex-wrap gap-3.5">
            <Button href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</Button>
            <Button href={homeHero.secondaryCta.href} variant="secondary">
              {homeHero.secondaryCta.label}
            </Button>
          </Reveal>

          <Reveal delay={0.21}>
            <TerminalLine lines={homeHero.terminalLines} />
          </Reveal>

          <Reveal
            delay={0.28}
            className="flex flex-wrap gap-x-7 gap-y-2.5 border-t border-accent/10 pt-6.5"
          >
            {homeHero.keywords.map((keyword) => (
              <span
                key={keyword}
                className="text-[12.5px]/none font-normal tracking-[0.06em] text-marker-3 uppercase"
              >
                {keyword}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Núcleo 3D / Cérebro animado: plano de fundo translúcido no mobile e coluna lateral no desktop */}
        <div className="pointer-events-none absolute left-1/2 top-[32%] sm:top-[36%] -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] opacity-25 sm:opacity-35 z-0 select-none lg:pointer-events-auto lg:static lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:mx-auto lg:w-full lg:max-w-[580px] lg:opacity-100 lg:z-auto">
          <InteractiveCore />
        </div>
      </div>
    </section>
  );
}
