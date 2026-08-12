import {
  Bot,
  CheckCircle2,
  Database,
  Search,
  Send,
  Sparkles,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout";
import { Button, Reveal } from "@/components/ui";
import { platformSection } from "@/config/content/prospect";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  database: Database,
  users: Users,
  send: Send,
  bot: Bot,
  userCheck: UserCheck,
};

/** Seção da plataforma Prospect — Dark Glassmorphic com grade de cards modulares. */
export function PlatformSection() {
  return (
    <Section
      id="plataforma"
      containerClassName="grid grid-cols-1 lg:grid-cols-[1.05fr_1.35fr] items-center gap-[clamp(40px,5vw,72px)]"
    >
      <Reveal>
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)]" />
          <span className="font-mono text-xs/none font-medium uppercase tracking-[0.18em] text-accent">
            {platformSection.eyebrow}
          </span>
        </div>

        <h2 className="m-0 mb-5 font-display text-[clamp(1.85rem,3.4vw,2.75rem)]/[1.14] font-semibold tracking-[-0.03em] text-balance text-white">
          {platformSection.title}
        </h2>

        <p className="m-0 mb-7 max-w-[520px] text-pretty text-[clamp(1rem,1.2vw,1.1rem)]/[1.7] font-light text-muted">
          {platformSection.description}
        </p>

        {/* Prova de valor / Benefícios rápidos */}
        <div className="mb-9 flex flex-col gap-2.5">
          {platformSection.highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2.5 text-fg-strong">
              <CheckCircle2 className="size-4.5 flex-none text-accent" />
              <span className="text-[0.92rem] font-normal">{highlight}</span>
            </div>
          ))}
        </div>

        <Button
          href={platformSection.ctaHref}
          size="lg"
          className="rounded-xl shadow-[0_10px_34px_rgb(22_140_255/0.28)] hover:shadow-[0_18px_46px_rgb(22_140_255/0.38)]"
        >
          {platformSection.ctaLabel}
        </Button>
      </Reveal>

      {/* Grade modular de cards de capacidades */}
      <div className="relative">
        {/* Glow sutil de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 rounded-3xl bg-blue-deep/20 blur-3xl"
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {platformSection.capabilities.map((capability, index) => {
            const Icon = iconMap[capability.iconKey] ?? Sparkles;
            const isHighlight = "isHighlight" in capability && capability.isHighlight;

            return (
              <Reveal
                key={capability.title}
                direction="left"
                delay={0.08 + index * 0.08}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-2xl p-5.5 transition-all duration-300 hover:-translate-y-1 ${
                    isHighlight
                      ? "border-2 border-accent/45 bg-[linear-gradient(150deg,rgb(18_28_44/0.95),rgb(10_15_24/0.9))] shadow-[0_0_40px_rgb(22_140_255/0.18)] hover:border-accent/60"
                      : "border border-accent/18 bg-panel/75 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md hover:border-accent/45 hover:bg-[#0E2038]/85 hover:shadow-[0_12px_32px_rgb(22_140_255/0.14)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl transition-all duration-300 ${
                          isHighlight
                            ? "bg-accent text-ink shadow-[0_0_16px_rgb(53_217_255/0.45)]"
                            : "bg-accent/12 text-accent group-hover:bg-accent group-hover:text-ink group-hover:shadow-[0_0_12px_rgb(53_217_255/0.3)]"
                        }`}
                      >
                        <Icon className="size-5" />
                      </div>

                      <span
                        className={`font-mono text-[0.68rem]/none font-medium px-2.5 py-1 rounded-md tracking-wide ${
                          isHighlight
                            ? "bg-accent/15 text-accent font-semibold border border-accent/30 shadow-[0_0_10px_rgb(53_217_255/0.2)]"
                            : "bg-ink/75 text-steel border border-accent/18 group-hover:border-accent/30 group-hover:text-white"
                        }`}
                      >
                        {capability.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[0.96rem]/[1.3] font-semibold text-white tracking-tight">
                      {capability.title}
                    </h3>

                    <p className="mt-1.5 text-[0.81rem]/[1.55] font-light text-muted">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
