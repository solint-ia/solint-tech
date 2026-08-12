import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui";
import { cn, stepLabel } from "@/lib/utils";
import type { DevelopmentService, DevelopmentServiceGroup } from "@/types";

/** Larguras possíveis dentro do grid de 12 colunas. */
const spanClasses: Record<DevelopmentService["span"], string> = {
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
};

/** Traço luminoso que corre no topo do card ao passar o mouse. */
function CardEdge() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,rgb(53_217_255/0.85),rgb(22_140_255/0))] transition-transform duration-550 ease-out-solint group-hover/card:scale-x-100"
    />
  );
}

function CardMarker() {
  return (
    <span
      aria-hidden="true"
      className="flex size-6.5 flex-none items-center justify-center rounded-lg border border-accent/24 bg-panel-4/72"
    >
      <span className="size-1.5 rounded-[2px] bg-accent shadow-[0_0_8px_2px_rgb(53_217_255/0.5)]" />
    </span>
  );
}

function ServiceCard({
  service,
  delay = 0,
}: {
  service: DevelopmentService;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      direction="left"
      delay={delay}
      className={cn(
        "group/card relative col-span-full flex min-h-[175px] flex-col justify-between overflow-hidden rounded-2xl border border-accent/14 bg-[linear-gradient(180deg,rgb(14_19_28/0.78),rgb(9_13_18/0.65))] p-6",
        "transition-all duration-350 ease-out-solint",
        "group-hover/grid:opacity-50 hover:!opacity-100 hover:-translate-y-1.5 hover:border-accent/45 hover:shadow-[0_20px_52px_rgb(2_8_18/0.55),0_0_40px_rgb(22_140_255/0.12)]",
        spanClasses[service.span],
      )}
    >
      <CardEdge />
      <div>
        <div className="flex items-center justify-between gap-2">
          <CardMarker />
        </div>

        <h3 className="mt-3.5 m-0 font-display text-[1.05rem]/[1.3] font-semibold tracking-[-0.02em] text-fg-bright transition-colors group-hover/card:text-white">
          {service.title}
        </h3>

        <p className="mt-1.5 m-0 text-pretty text-[0.88rem]/[1.58] font-light text-muted-2">
          {service.description}
        </p>

        {/* Detalhe prático: visível em badge no mobile e com transição de hover no desktop */}
        <div className="mt-3 block rounded-xl border border-accent/18 bg-accent/8 px-3 py-2 text-pretty text-[0.8rem]/[1.5] text-accent-soft font-light lg:mt-0 lg:max-h-0 lg:translate-y-1.5 lg:overflow-hidden lg:opacity-0 lg:border-none lg:bg-transparent lg:p-0 lg:transition-[max-height,opacity,transform] lg:duration-420 lg:ease-out-solint lg:group-hover/card:mt-2 lg:group-hover/card:max-h-40 lg:group-hover/card:translate-y-0 lg:group-hover/card:opacity-100">
          <span className="font-medium text-white lg:text-accent-soft">{service.detail}</span>
        </div>
      </div>

      {/* Tags de tecnologia e entregáveis */}
      {service.tags ? (
        <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-accent/10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-ink/75 px-2 py-0.5 font-mono text-[0.68rem] text-steel"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Reveal>
  );
}

function HighlightCard({
  highlight,
  delay = 0,
}: {
  highlight: NonNullable<DevelopmentServiceGroup["highlight"]>;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      direction="left"
      delay={delay}
      className="group/card relative col-span-full flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-accent/35 bg-[linear-gradient(150deg,rgb(18_28_44/0.95),rgb(10_15_24/0.88))] p-[clamp(28px,3vw,38px)] shadow-[0_0_50px_rgb(22_140_255/0.16)] backdrop-blur-xl transition-all duration-350 ease-out-solint group-hover/grid:opacity-50 hover:!opacity-100 hover:-translate-y-1.5 hover:border-accent/60 lg:col-span-6 lg:row-span-2"
    >
      <CardEdge />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_240px_at_12%_0%,rgb(53_217_255/0.18),transparent_70%)]"
      />

      <div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/12 px-3 py-1 font-mono text-[0.7rem] font-semibold text-accent shadow-[0_0_10px_rgb(53_217_255/0.25)] uppercase tracking-wider">
            <Sparkles className="size-3" />
            Destaque
          </span>
        </div>

        <h3 className="relative mt-3.5 m-0 font-display text-[clamp(1.4rem,2.2vw,1.8rem)]/[1.2] font-bold tracking-[-0.028em] text-white">
          {highlight.title}
        </h3>

        <p className="relative mt-2 m-0 max-w-[440px] text-pretty text-[clamp(0.94rem,1.15vw,1.02rem)]/[1.65] font-light text-muted">
          {highlight.description}
        </p>

        {/* Exemplos de escopo com indicador visual */}
        <div className="relative my-4 flex flex-col gap-2 rounded-2xl border border-accent/18 bg-ink/75 p-4">
          {highlight.examples.map((example) => (
            <div key={example} className="flex items-center gap-2 text-[0.84rem]/[1.5] text-fg-strong font-light">
              <span className="size-1.5 rounded-full bg-accent flex-none" />
              <span>{example}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-wrap gap-x-4 gap-y-2 border-t border-accent/15 pt-3">
        {highlight.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 font-mono text-[0.78rem]/[1.3] font-medium text-accent-soft"
          >
            <span aria-hidden="true" className="size-1 flex-none rounded-full bg-accent" />
            {tag}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

/**
 * Bento grid assimétrico dos serviços de desenvolvimento.
 * Os grupos ficam ancorados a um rail luminoso lateral com nós interativos.
 */
export function ServicesBento({ groups }: { groups: readonly DevelopmentServiceGroup[] }) {
  return (
    <div className="relative pl-[clamp(26px,3vw,44px)]">
      {/* Rail luminoso contínuo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 bottom-2 left-0 w-px bg-[linear-gradient(180deg,rgb(53_217_255/0)_0%,rgb(53_217_255/0.45)_7%,rgb(22_140_255/0.45)_93%,rgb(53_217_255/0)_100%)]"
      />

      {groups.map((group, index) => (
        <div
          key={group.label}
          className={index < groups.length - 1 ? "mb-[clamp(48px,6vw,76px)]" : undefined}
        >
          <Reveal className="relative mb-[clamp(20px,2.4vw,28px)] flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="absolute top-1/2 -left-[clamp(26px,3vw,44px)] h-px w-[clamp(26px,3vw,44px)] bg-[linear-gradient(90deg,rgb(53_217_255/0.55),rgb(53_217_255/0.14))]"
            />
            <span
              aria-hidden="true"
              className="animate-node absolute top-[calc(50%-4.5px)] -left-[calc(clamp(26px,3vw,44px)+4.5px)] size-[9px] rounded-full bg-accent shadow-[0_0_12px_rgb(53_217_255/0.8)]"
              style={{ animationDuration: "3.4s", animationDelay: `${0.5 + index * 0.5}s` }}
            />
            <span className="font-mono text-[11.5px]/none font-semibold tracking-[0.16em] text-accent uppercase">
              {stepLabel(index)}
            </span>
            <h3 className="m-0 font-display text-[clamp(1.1rem,1.6vw,1.3rem)]/[1.3] font-semibold tracking-[-0.02em] text-white">
              {group.label}
            </h3>
            <span className="text-[0.86rem]/[1.4] font-light text-steel-2">— {group.hint}</span>
          </Reveal>

          <div className="group/grid grid grid-cols-1 gap-4 lg:grid-cols-12 lg:[grid-auto-rows:minmax(168px,auto)]">
            {group.highlight ? (
              <HighlightCard highlight={group.highlight} delay={0.06} />
            ) : null}
            {group.services.map((service, sIndex) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.06 + (group.highlight ? sIndex + 1 : sIndex) * 0.06}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
