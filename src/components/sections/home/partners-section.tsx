import { Building2 } from "lucide-react";
import { Section } from "@/components/layout";
import { Reveal, SectionHeading, SectionMarker } from "@/components/ui";
import { partnersSection } from "@/config/content/home";

/**
 * Faixa de parceiros e métricas — Dark Glassmorphic com indicadores de impacto e marquee.
 */
export function PartnersSection() {
  const doubledBrands = [...partnersSection.brands, ...partnersSection.brands];

  return (
    <Section
      id="parceiros"
      spacing="default"
      backdrop={<SectionMarker label={partnersSection.eyebrow} />}
    >
      <SectionHeading
        size="sm"
        title={partnersSection.title}
        description={partnersSection.description}
        className="mb-[clamp(36px,4vw,52px)]"
      />

      {/* Grid de métricas de impacto */}
      <div className="mb-12 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        {partnersSection.metrics.map((metric, index) => (
          <Reveal
            key={metric.label}
            direction="left"
            delay={index * 0.08}
            className="h-full"
          >
            <div className="group h-full rounded-2xl border border-accent/18 bg-panel/75 p-5.5 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_32px_rgb(22_140_255/0.14)]">
              <span className="font-display text-[clamp(1.85rem,2.8vw,2.45rem)]/[1.1] font-bold tracking-tight bg-[linear-gradient(100deg,#168CFF,#35D9FF)] bg-clip-text text-transparent">
                {metric.value}
              </span>
              <h3 className="mt-2.5 font-display text-[0.94rem]/[1.3] font-semibold text-white">
                {metric.label}
              </h3>
              <p className="mt-1 text-[0.8rem]/[1.5] font-light text-muted">
                {metric.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Esteira contínua de marcas parceiras com fade nas extremidades */}
      <Reveal delay={0.1} className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {doubledBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-3.5 rounded-xl border border-accent/16 bg-panel/70 px-6 py-4 shadow-[0_4px_16px_rgb(2_8_18/0.3)] backdrop-blur-md transition-all duration-300 hover:border-accent/45 hover:bg-[#0E2038]/85 hover:shadow-[0_8px_24px_rgb(22_140_255/0.12)]"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-accent/12 text-accent shadow-[0_0_10px_rgb(53_217_255/0.2)]">
                <Building2 className="size-4.5" />
              </div>
              <div>
                <span className="block font-display text-[0.92rem]/none font-semibold text-white">
                  {brand.name}
                </span>
                <span className="mt-1 block font-mono text-[0.68rem]/none text-steel">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
