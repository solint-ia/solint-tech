"use client";

import { Card, Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

interface ProspectFlowProps {
  steps: readonly ProcessStep[];
  /** Índice da etapa em destaque, que recebe borda realçada e conteúdo extra. */
  highlightedIndex: number;
  /** Conteúdo adicional renderizado dentro do card em destaque. */
  highlightContent?: React.ReactNode;
}

/**
 * Fluxo vertical em S das etapas do Prospect.
 *
 * Uma espinha luminosa contínua atravessa a seção e cada etapa se conecta a
 * ela por um arco. No mobile a espinha vai para a esquerda e todas as etapas
 * se alinham numa coluna só, preservando a ordem temporal.
 */
export function ProspectFlow({
  steps,
  highlightedIndex,
  highlightContent,
}: ProspectFlowProps) {
  return (
    <div className="relative mx-auto max-w-[1080px]">
      {/* Espinha luminosa com um pulso descendo continuamente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 left-3.5 w-px overflow-hidden bg-[linear-gradient(180deg,rgb(53_217_255/0)_0%,rgb(53_217_255/0.5)_7%,rgb(22_140_255/0.5)_93%,rgb(53_217_255/0)_100%)] lg:left-1/2"
      >
        <span
          className="animate-travel-y absolute -left-[3px] size-[7px] rounded-full bg-accent-soft shadow-[0_0_16px_5px_rgb(53_217_255/0.72)]"
          style={{ animationDuration: "9s" }}
        />
      </div>

      {steps.map((step, index) => {
        const isLeft = index % 2 === 0;
        const isHighlighted = index === highlightedIndex;

        return (
          <Reveal
            key={step.title}
            direction="left"
            delay={0.06}
            className="relative grid grid-cols-1 items-center gap-0 py-[clamp(12px,1.8vw,22px)] pl-10.5 lg:grid-cols-2 lg:gap-x-[clamp(40px,7vw,104px)] lg:pl-0"
          >
            {/* Arco ligando o card à espinha central */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-[calc(50%-54px)] left-1/2 hidden size-[54px] lg:block",
                isLeft
                  ? "-translate-x-full rounded-br-[54px] border-r border-b border-accent/40"
                  : "rounded-bl-[54px] border-b border-l border-accent/40",
              )}
            />

            <div
              aria-hidden="true"
              className={cn(
                "absolute top-[calc(50%-54px)] left-3.5 -mt-1 -ml-[4.5px] size-[9px] rounded-full bg-accent shadow-[0_0_13px_3px_rgb(53_217_255/0.6)] lg:left-1/2",
                isHighlighted && "animate-node bg-accent-soft",
              )}
            />

            <div
              className={cn(
                "flex flex-col items-start text-left",
                isLeft
                  ? "lg:col-start-1 lg:items-end lg:text-right"
                  : "lg:col-start-2 lg:items-start lg:text-left",
              )}
            >
              <Card
                variant={isHighlighted ? "highlight" : "panel"}
                interactive
                className={cn(
                  "px-6 pt-6.5 pb-7",
                  isHighlighted ? "max-w-[520px] px-6.5 pt-7 pb-7.5" : "max-w-[440px]",
                )}
              >
                <span
                  className={cn(
                    "mb-3 block text-[11.5px]/none font-medium tracking-[0.14em]",
                    isHighlighted ? "text-accent" : "text-faint-2",
                  )}
                >
                  ETAPA {index + 1}
                </span>
                <h3 className="m-0 mb-2.5 font-display text-[clamp(1.05rem,1.6vw,1.22rem)]/[1.28] font-semibold tracking-[-0.02em] text-fg-bright">
                  {step.title}
                </h3>
                <p className="m-0 text-pretty text-[0.93rem]/[1.68] font-light text-muted-2">
                  {step.description}
                </p>
                {isHighlighted ? highlightContent : null}
              </Card>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
