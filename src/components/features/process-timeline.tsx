"use client";

import { Card, FlowNode, IconBox, Reveal } from "@/components/ui";
import { FLOW_NODE_ATTR, useConnectorPath } from "@/hooks";
import { cn, stepLabel } from "@/lib/utils";
import type { ProcessStep } from "@/types";

/** Posição de cada etapa no zigue-zague: ímpares à esquerda, pares à direita. */
const columnClasses = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-2 lg:row-start-4",
  "lg:col-start-1 lg:row-start-5",
  "lg:col-start-2 lg:row-start-6",
];

/** Na metade de cima o nó fica abaixo do card; na de baixo, acima. */
function isNodeBelow(index: number, total: number): boolean {
  return index < Math.ceil(total / 2);
}

/**
 * Timeline das etapas do processo:
 * - No Desktop (lg): Curva em S zigue-zague ligada por SVG dinâmico.
 * - No Mobile (< lg): Espinha vertical contínua de laser com nós ancorados diretamente a cada card.
 */
export function ProcessTimeline({ steps }: { steps: readonly ProcessStep[] }) {
  const { wrapRef, setPathRef } = useConnectorPath<HTMLDivElement>(3);

  return (
    <div ref={wrapRef} className="relative">
      {/* Traçado SVG para Desktop */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible lg:block"
      >
        <defs>
          <linearGradient id="timeline-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#35D9FF" stopOpacity=".75" />
            <stop offset="55%" stopColor="#168CFF" stopOpacity=".6" />
            <stop offset="100%" stopColor="#174EFF" stopOpacity=".5" />
          </linearGradient>
        </defs>
        <path ref={setPathRef(0)} fill="none" stroke="url(#timeline-gradient)" strokeWidth="1.4" />
        <path
          ref={setPathRef(1)}
          fill="none"
          stroke="#9CEBFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          pathLength={1000}
          strokeDasharray="7 993"
          className="animate-flow"
        />
        <path
          ref={setPathRef(2)}
          fill="none"
          stroke="#5FB6FF"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1000}
          strokeDasharray="5 995"
          className="animate-flow"
          style={{ animationDelay: "-6s" }}
        />
      </svg>

      {/* Espinha Luminosa Vertical para Mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4.5 sm:left-6.5 top-8 bottom-12 w-[2px] -translate-x-1/2 bg-[linear-gradient(to_bottom,#35D9FF_0%,#168CFF_55%,#FFB65C_100%)] shadow-[0_0_8px_rgb(53_217_255/0.4)] lg:hidden"
      >
        <div className="animate-flow absolute top-0 left-0 h-28 w-full bg-[linear-gradient(to_bottom,transparent,#FFFFFF,transparent)]" />
      </div>

      <div className="relative z-1 mx-auto grid max-w-[1060px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-x-[clamp(60px,10vw,150px)] lg:gap-y-13">
        {steps.map((step, index) => {
          const isAmber = step.accent === "amber";
          const nodeBelow = isNodeBelow(index, steps.length);
          const node = (
            <FlowNode
              tone={isAmber ? "amber" : "cyan"}
              markerAttribute={FLOW_NODE_ATTR}
              className={cn("hidden lg:flex", nodeBelow ? "mt-6" : "mb-6")}
            />
          );

          return (
            <div
              key={step.title}
              className={cn(
                "relative flex w-full flex-col pl-11 sm:pl-14 lg:max-w-[470px] lg:items-center lg:justify-self-center lg:pl-0",
                columnClasses[index],
              )}
            >
              {/* Nó ancorado na linha vertical mobile */}
              <div
                className={cn(
                  "absolute left-4.5 sm:left-6.5 top-8 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-accent shadow-[0_0_12px_rgb(53_217_255/0.8)] lg:hidden",
                  isAmber && "bg-amber shadow-[0_0_14px_rgb(255_182_92/0.9)]",
                )}
              />

              {/* Nó desktop (acima do card na metade de cima) */}
              {nodeBelow ? null : node}

              <Reveal direction="left" delay={0.05} className="w-full">
                <Card
                  variant={isAmber ? "amber" : "clipped"}
                  interactive
                  className="w-full px-5.5 pt-6 pb-6.5 sm:px-6 sm:pt-6.5 sm:pb-7"
                >
                  <div className="mb-3.5 flex items-center gap-3">
                    {step.icon ? (
                      <IconBox
                        icon={step.icon}
                        tone={isAmber ? "amber" : "cyan"}
                        className="bg-panel-4/80"
                      />
                    ) : null}
                    <span
                      className={cn(
                        "text-xs/none font-medium tracking-[0.14em]",
                        isAmber ? "text-amber" : "text-faint-2",
                      )}
                    >
                      {stepLabel(index)}
                    </span>
                  </div>
                  <h3 className="m-0 mb-2 font-display text-[1.02rem]/[1.3] font-semibold tracking-[-0.02em] text-fg-bright sm:text-[1.06rem]">
                    {step.title}
                  </h3>
                  <p className="m-0 text-pretty text-[0.88rem]/[1.65] font-light text-muted-2 sm:text-[0.9rem]">
                    {step.description}
                  </p>
                </Card>
              </Reveal>

              {/* Nó desktop (abaixo do card na metade de baixo) */}
              {nodeBelow ? node : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
