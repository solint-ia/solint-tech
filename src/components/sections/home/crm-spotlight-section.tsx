import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout";
import { ProductFrame } from "@/components/features";
import { Button, Reveal } from "@/components/ui";
import { crmScreens, crmSpotlight, SCREEN_HEIGHT, SCREEN_WIDTH } from "@/config/content/crm";

/**
 * Produto em destaque na home: o Solint CRM num painel com borda em gradiente,
 * texto à esquerda e a caixa de entrada real em perspectiva à direita.
 */
export function CrmSpotlightSection() {
  return (
    <Section id="solint-crm" spacing="compact">
      <Reveal>
        <div className="relative rounded-[28px] bg-[linear-gradient(135deg,rgb(53_217_255/0.55),rgb(23_78_255/0.25)_38%,rgb(53_217_255/0.08)_70%,rgb(53_217_255/0.3))] p-px shadow-[0_30px_100px_rgb(2_8_18/0.6),0_0_70px_rgb(22_140_255/0.12)]">
          <div className="relative overflow-hidden rounded-[27px] bg-[linear-gradient(160deg,#0B1424_0%,#070D18_55%,#060A12_100%)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 right-[-6%] size-[680px] rounded-full bg-[radial-gradient(circle,rgb(22_140_255/0.26),rgb(5_10_20/0)_65%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(53_217_255/0.035)_0_1px,rgb(0_0_0/0)_1px_56px),repeating-linear-gradient(90deg,rgb(53_217_255/0.035)_0_1px,rgb(0_0_0/0)_1px_56px)] [mask-image:radial-gradient(80%_90%_at_75%_40%,#000,rgb(0_0_0/0)_80%)]"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 p-[clamp(24px,4.5vw,60px)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
              {/* Texto */}
              <div>
                {/* Assinatura do produto: marca Solint + selo CRM */}
                <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <span className="flex items-center gap-2.5">
                    <Image
                      src="/media/logo-header.png"
                      alt="Solint"
                      width={2246}
                      height={600}
                      sizes="140px"
                      className="h-9 w-auto drop-shadow-[0_0_18px_rgb(22_140_255/0.35)]"
                    />
                    <span className="rounded-lg border border-accent/40 bg-accent/12 px-2.5 py-1.5 font-display text-[0.95rem]/none font-semibold tracking-[0.04em] text-accent shadow-[0_0_18px_rgb(53_217_255/0.2)]">
                      CRM
                    </span>
                  </span>
                  <span aria-hidden="true" className="hidden h-6 w-px bg-accent/20 sm:block" />
                  <span className="font-mono text-[11px]/none font-medium tracking-[0.18em] text-steel uppercase">
                    {crmSpotlight.badge}
                  </span>
                </div>

                <h2 className="m-0 mb-5 font-display text-[clamp(1.85rem,3.3vw,2.65rem)]/[1.12] font-semibold tracking-[-0.03em] text-balance text-white">
                  {crmSpotlight.titleLead}
                  <span className="bg-[linear-gradient(96deg,#35D9FF_0%,#168CFF_60%,#8AB6FF_100%)] bg-clip-text text-transparent">
                    {crmSpotlight.titleAccent}
                  </span>
                  {crmSpotlight.titleTail}
                </h2>
                <p className="m-0 mb-8 max-w-[500px] text-pretty text-[clamp(0.98rem,1.15vw,1.06rem)]/[1.7] font-light text-muted">
                  {crmSpotlight.description}
                </p>

                <ul className="m-0 mb-9 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
                  {crmSpotlight.highlights.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl border border-accent/12 bg-panel/55 p-3 transition-[border-color,background-color] duration-300 hover:border-accent/35 hover:bg-[#0E1A2C]/80"
                    >
                      <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-white/[0.04]">
                        <Image
                          src={item.image}
                          alt=""
                          width={32}
                          height={32}
                          unoptimized
                          className="size-8 object-contain drop-shadow-[0_6px_10px_rgb(0_0_0/0.35)]"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.9rem]/[1.25] font-semibold text-white">{item.title}</span>
                        <span className="mt-0.5 block text-[0.8rem]/[1.35] text-steel">{item.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Button href={crmSpotlight.primaryCta.href} className="whitespace-nowrap">
                    {crmSpotlight.primaryCta.label}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Button>
                  <Button href={crmSpotlight.secondaryCta.href} variant="secondary" className="whitespace-nowrap">
                    {crmSpotlight.secondaryCta.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Button>
                </div>
              </div>

              {/* Captura em perspectiva, inteira dentro do painel */}
              <div className="relative [perspective:2000px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 rounded-[40px] bg-blue-deep/20 blur-3xl"
                />
                <div className="relative transition-transform duration-700 ease-out-solint lg:[transform:rotateY(-7deg)] lg:hover:[transform:rotateY(0deg)]">
                  <ProductFrame
                    src={crmScreens.atendimento.src}
                    alt={crmScreens.atendimento.alt}
                    url={crmScreens.atendimento.url}
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT}
                    sizes="(min-width: 1024px) 640px, 92vw"
                    className="border-accent/35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
