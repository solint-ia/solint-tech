import { ArrowUpRight, Bot, TrendingUp } from "lucide-react";
import { HeroMesh } from "@/components/layout";
import { ProductFrame, TypedHeading } from "@/components/features";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import { crmHero, crmScreens, SCREEN_HEIGHT, SCREEN_WIDTH } from "@/config/content/crm";

/**
 * Hero do Solint CRM: título centralizado com typewriter e a caixa de entrada
 * real em uma janela de navegador inclinada, com cartões de eventos flutuando.
 */
export function CrmHero() {
  const screen = crmScreens.atendimento;

  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-[clamp(56px,8vw,110px)] lg:pt-46">
      <SectionMarker label={crmHero.eyebrow} position="hero" />
      <HeroMesh pattern="grid" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[860px] text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/28 bg-panel-4/75 py-1.5 pr-3.5 pl-2 text-[0.8rem]/none text-fg-strong">
              <span className="rounded-full bg-accent/14 px-2 py-1 font-mono text-[10px]/none font-semibold tracking-[0.14em] text-accent uppercase">
                Solint CRM
              </span>
              {crmHero.badge}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <TypedHeading
              lead={crmHero.titleLead}
              typed={crmHero.titleTyped}
              tail={crmHero.titleTail}
              className="text-[clamp(2.3rem,5.2vw,4.1rem)]/[1.06]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto m-0 mb-10 max-w-[640px] text-pretty text-[clamp(1rem,1.35vw,1.18rem)]/[1.68] font-light text-muted">
              {crmHero.description}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-wrap justify-center gap-3.5">
            <Button href={crmHero.primaryCta.href}>
              {crmHero.primaryCta.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button href={crmHero.secondaryCta.href} variant="secondary">
              {crmHero.secondaryCta.label}
            </Button>
          </Reveal>

          <Reveal
            delay={0.16}
            className="mx-auto mt-12 grid max-w-[620px] grid-cols-3 divide-x divide-accent/12 border-y border-accent/12 py-5"
          >
            {crmHero.stats.map((stat) => (
              <p key={stat.label} className="m-0 px-2 sm:px-4">
                <span className="block font-display text-[clamp(1.5rem,3vw,2.1rem)]/none font-semibold tracking-[-0.03em] text-white">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[0.76rem]/[1.35] text-steel sm:text-[0.82rem]">
                  {stat.label}
                </span>
              </p>
            ))}
          </Reveal>
        </div>

        {/* Produto em perspectiva */}
        <Reveal delay={0.22} distance={48} className="relative mx-auto mt-[clamp(48px,7vw,88px)] max-w-[1120px] [perspective:2200px]">
          <div
            aria-hidden="true"
            className="animate-glowpan pointer-events-none absolute -inset-x-[8%] -top-[12%] -bottom-[4%] bg-[radial-gradient(60%_55%_at_50%_45%,rgb(22_140_255/0.28),rgb(23_78_255/0.10)_45%,rgb(5_10_20/0)_72%)]"
          />
          <div className="relative origin-top transition-transform duration-700 ease-out-solint lg:[transform:rotateX(9deg)] lg:hover:[transform:rotateX(2deg)]">
            <ProductFrame
              src={screen.src}
              alt={screen.alt}
              url={screen.url}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              priority
            />
            {/* Dissolve a base da captura no fundo da página */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 rounded-b-[14px] bg-[linear-gradient(180deg,rgb(5_10_20/0),rgb(5_10_20/0.92))]"
            />
          </div>

          {/* Eventos flutuantes */}
          <div
            aria-hidden="true"
            className="animate-float absolute top-[22%] -left-3 hidden items-center gap-3 rounded-2xl border border-accent/35 bg-[#08121F]/92 py-3 pr-4.5 pl-3 shadow-[0_18px_50px_rgb(2_8_18/0.6),0_0_30px_rgb(53_217_255/0.16)] backdrop-blur-md md:flex xl:-left-12"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-ink shadow-[0_0_16px_rgb(53_217_255/0.5)]">
              <Bot size={18} />
            </span>
            <span className="text-left">
              <span className="block text-[0.82rem]/[1.2] font-semibold text-white">
                {crmHero.floating.ai.title}
              </span>
              <span className="block text-[0.76rem]/[1.3] text-steel">{crmHero.floating.ai.text}</span>
            </span>
            <span className="ml-1 rounded-md border border-accent/30 bg-accent/12 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
              {crmHero.floating.ai.tag}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="animate-float absolute top-[52%] -right-3 hidden items-center gap-3 rounded-2xl border border-amber/35 bg-[#120F0A]/92 py-3 pr-4.5 pl-3 shadow-[0_18px_50px_rgb(2_8_18/0.6),0_0_30px_rgb(255_182_92/0.14)] backdrop-blur-md md:flex xl:-right-12"
            style={{ animationDelay: "-5s" }}
          >
            <span className="flex size-9 items-center justify-center rounded-xl border border-amber/40 bg-amber/14 text-amber">
              <TrendingUp size={18} />
            </span>
            <span className="text-left">
              <span className="block text-[0.82rem]/[1.2] font-semibold text-white">
                {crmHero.floating.deal.title}
              </span>
              <span className="block text-[0.76rem]/[1.3] text-amber-soft/85">
                {crmHero.floating.deal.text}
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
