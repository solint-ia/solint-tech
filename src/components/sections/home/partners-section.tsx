import { Building2 } from "lucide-react";
import { Section } from "@/components/layout";
import { Reveal, SectionHeading, SectionMarker } from "@/components/ui";
import { partnersSection } from "@/config/content/home";

/**
 * Faixa de parceiros — Dark Glassmorphic com esteira contínua e cards destacados.
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

      {/* Esteira contínua de marcas parceiras com fade nas extremidades */}
      <Reveal delay={0.1} className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-5 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {doubledBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex min-w-[240px] sm:min-w-[280px] items-center gap-4.5 rounded-2xl border border-accent/20 bg-panel/85 px-7 py-5 sm:px-8 sm:py-5.5 shadow-[0_8px_24px_rgb(2_8_18/0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-[#0E2038]/90 hover:shadow-[0_12px_32px_rgb(22_140_255/0.18)]"
            >
              <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/12 text-accent shadow-[0_0_14px_rgb(53_217_255/0.25)]">
                <Building2 className="size-5 sm:size-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="truncate font-display text-[1.02rem] sm:text-[1.12rem] font-semibold text-white">
                  {brand.name}
                </span>
                <span className="mt-1 font-mono text-[0.72rem] sm:text-[0.78rem] tracking-wide text-steel-2">
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
