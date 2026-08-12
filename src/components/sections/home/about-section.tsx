import Image from "next/image";
import { Section } from "@/components/layout";
import { Reveal, SectionMarker } from "@/components/ui";
import { aboutFeatures, aboutSection } from "@/config/content/home";
import { stepLabel } from "@/lib/utils";

/** Seção "Sobre": posicionamento da Solint, três diferenciais e Core 3D atmosférico de fundo. */
export function AboutSection() {
  return (
    <Section
      id="sobre"
      spacing="wide"
      clip
      backdrop={<SectionMarker label="/02 — sobre" />}
      className="relative overflow-hidden"
    >
      {/* Arquitetura em Camadas 3D (Layered Tech Architecture) — Marca d'água no mobile e lateral no desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/2 translate-x-1/2 -top-10 w-[340px] sm:w-[460px] lg:top-1/2 lg:-translate-y-1/2 lg:right-[-5%] lg:translate-x-0 lg:w-[640px] aspect-[4/5] select-none z-0"
      >
        {/* Halo de luz volumétrico sutil */}
        <div className="absolute inset-0 rounded-full bg-blue-deep/10 blur-[120px] lg:blur-[140px]" />

        {/* Imagem em camadas translúcida com adaptação mobile */}
        <div className="relative h-full w-full opacity-25 sm:opacity-35 lg:opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,black_50%,black_100%)]">
          <Image
            src={aboutSection.image.src}
            alt={aboutSection.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 640px"
            className="object-contain drop-shadow-[0_20px_50px_rgb(22_140_255/0.2)]"
            priority
          />
        </div>
      </div>

      {/* Conteúdo principal em primeiro plano */}
      <div className="relative z-10 max-w-[820px]">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)]" />
            <span className="font-mono text-xs/none font-medium uppercase tracking-[0.18em] text-accent">
              {aboutSection.eyebrow}
            </span>
          </div>

          <h2 className="m-0 mb-9 font-display text-[clamp(1.55rem,2.5vw,2.2rem)]/[1.38] font-normal tracking-[-0.02em] text-pretty text-[#C8D6E5]">
            {aboutSection.titleLead}
            <strong className="font-semibold text-white">
              {aboutSection.titleHighlight1}
            </strong>
            {aboutSection.titleMid}
            <strong className="bg-[linear-gradient(100deg,#168CFF,#35D9FF)] bg-clip-text font-semibold text-transparent">
              {aboutSection.titleHighlight2}
            </strong>
            {aboutSection.titleTail}
          </h2>

          {/* Três pilares com acabamento glassmorphism e número de ordem */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {aboutFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal
                  key={feature.title}
                  direction="left"
                  delay={0.08 + index * 0.12}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-accent/18 bg-panel/80 p-5 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_14px_34px_rgb(22_140_255/0.14)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-accent/12 text-accent shadow-[0_0_12px_rgb(53_217_255/0.25)] transition-colors group-hover:bg-accent group-hover:text-ink">
                          <Icon className="size-4.5" />
                        </div>
                        <span className="font-mono text-[0.72rem] font-bold tracking-wider text-accent/80">
                          {stepLabel(index)}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-[0.94rem]/[1.3] font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-1.5 text-[0.8rem]/[1.55] font-light text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
