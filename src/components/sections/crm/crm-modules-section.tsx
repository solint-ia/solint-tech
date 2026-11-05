import {
  BarChart3,
  Bot,
  CalendarDays,
  Inbox,
  KanbanSquare,
  Megaphone,
  Radar,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout";
import { Pill, Reveal, SectionHeading } from "@/components/ui";
import { crmModules, crmModulesSection } from "@/config/content/crm";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  inbox: Inbox,
  bot: Bot,
  kanban: KanbanSquare,
  workflow: Workflow,
  megaphone: Megaphone,
  calendar: CalendarDays,
  radar: Radar,
  chart: BarChart3,
};

/** Larguras do bento no desktop (12 colunas); no tablet tudo ocupa meia linha. */
const spanClass = {
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  7: "lg:col-span-7",
} as const;

/** Módulos do CRM em bento assimétrico: 7+5 / 4+4+4 / 4+4+4, sem card órfão. */
export function CrmModulesSection() {
  return (
    <Section id="modulos">
      <SectionHeading
        eyebrow={crmModulesSection.eyebrow}
        title={crmModulesSection.title}
        description={crmModulesSection.description}
        className="mb-[clamp(36px,5vw,60px)]"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {crmModules.map((module, index) => {
          const Icon = iconMap[module.iconKey] ?? Sparkles;
          const isHighlight = Boolean(module.highlight);

          return (
            <Reveal
              key={module.title}
              delay={0.04 + (index % 3) * 0.06}
              className={spanClass[module.span]}
            >
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out-solint hover:-translate-y-1 sm:p-7",
                  isHighlight
                    ? "border border-accent/40 bg-[linear-gradient(150deg,rgb(18_28_44/0.95),rgb(10_15_24/0.9))] shadow-[0_0_46px_rgb(22_140_255/0.16)] hover:border-accent/60"
                    : "border border-accent/15 bg-panel/75 backdrop-blur-md hover:border-accent/40 hover:bg-[#0E1A2C]/85 hover:shadow-[0_12px_32px_rgb(22_140_255/0.12)]",
                )}
              >
                {isHighlight ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-[radial-gradient(circle,rgb(53_217_255/0.18),rgb(5_10_20/0)_68%)]"
                  />
                ) : null}

                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-xl transition-[background-color,color,box-shadow] duration-300",
                      isHighlight
                        ? "bg-accent text-ink shadow-[0_0_18px_rgb(53_217_255/0.45)]"
                        : "bg-accent/12 text-accent group-hover:bg-accent group-hover:text-ink",
                    )}
                  >
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.14em] text-marker-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={cn(
                    "relative m-0 mt-5 font-display font-semibold tracking-tight text-white",
                    isHighlight ? "text-[1.35rem]/[1.25]" : "text-[1.05rem]/[1.3]",
                  )}
                >
                  {module.title}
                </h3>
                <p
                  className={cn(
                    "relative m-0 mt-2 font-light text-muted",
                    isHighlight ? "max-w-[520px] text-[0.98rem]/[1.65]" : "text-[0.88rem]/[1.6]",
                  )}
                >
                  {module.description}
                </p>

                {module.tags?.length ? (
                  <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                    {module.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
