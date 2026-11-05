import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout";
import { ProductFrame } from "@/components/features";
import { Button, Reveal } from "@/components/ui";
import {
  crmScreens,
  crmSpotlight,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/config/content/crm";

/**
 * Produto em destaque na home: o Solint CRM num painel com borda em gradiente,
 * texto à esquerda e duas telas reais sobrepostas à direita.
 */
export function CrmSpotlightSection() {
  return (
    <Section id="solint-crm" spacing="compact">
      <Reveal>
        <div className="relative rounded-[28px] bg-[linear-gradient(135deg,rgb(53_217_255/0.55),rgb(23_78_255/0.25)_38%,rgb(53_217_255/0.08)_70%,rgb(255_182_92/0.35))] p-px shadow-[0_30px_100px_rgb(2_8_18/0.6),0_0_70px_rgb(22_140_255/0.12)]">
          <div className="relative overflow-hidden rounded-[27px] bg-[linear-gradient(160deg,#0B1424_0%,#070D18_55%,#060A12_100%)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 right-[-10%] size-[620px] rounded-full bg-[radial-gradient(circle,rgb(22_140_255/0.22),rgb(5_10_20/0)_65%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(53_217_255/0.035)_0_1px,rgb(0_0_0/0)_1px_56px),repeating-linear-gradient(90deg,rgb(53_217_255/0.035)_0_1px,rgb(0_0_0/0)_1px_56px)] [mask-image:radial-gradient(80%_90%_at_75%_40%,#000,rgb(0_0_0/0)_80%)]"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 p-[clamp(24px,4.5vw,60px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Image
                    src="/media/favicon.png"
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-xl border border-accent/25 bg-panel-4 p-1.5"
                  />
                  <span className="font-mono text-xs/none font-medium tracking-[0.18em] text-accent uppercase">
                    {crmSpotlight.badge}
                  </span>
                </div>

                <h2 className="m-0 mb-5 font-display text-[clamp(1.85rem,3.4vw,2.7rem)]/[1.12] font-semibold tracking-[-0.03em] text-balance text-white">
                  {crmSpotlight.title}
                </h2>
                <p className="m-0 mb-7 max-w-[520px] text-pretty text-[clamp(1rem,1.2vw,1.08rem)]/[1.7] font-light text-muted">
                  {crmSpotlight.description}
                </p>

                <ul className="m-0 mb-9 grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-x-5">
                  {crmSpotlight.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9rem]/[1.45] text-fg-strong">
                      <CheckCircle2 size={17} className="mt-px flex-none text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3.5">
                  <Button href={crmSpotlight.primaryCta.href}>
                    {crmSpotlight.primaryCta.label}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Button>
                  <Button href={crmSpotlight.secondaryCta.href} variant="secondary">
                    {crmSpotlight.secondaryCta.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Button>
                </div>
              </div>

              {/* Telas sobrepostas: painel ao fundo, caixa de entrada à frente */}
              <div className="relative pb-[14%] lg:pb-[18%]">
                <ProductFrame
                  src={crmScreens.painel.src}
                  alt={crmScreens.painel.alt}
                  url={crmScreens.painel.url}
                  width={SCREEN_WIDTH}
                  height={SCREEN_HEIGHT}
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="w-[86%] opacity-80"
                />
                <ProductFrame
                  src={crmScreens.atendimento.src}
                  alt={crmScreens.atendimento.alt}
                  url={crmScreens.atendimento.url}
                  width={SCREEN_WIDTH}
                  height={SCREEN_HEIGHT}
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="absolute right-0 bottom-0 w-[86%] border-accent/35 transition-transform duration-500 ease-out-solint hover:-translate-y-1.5"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
