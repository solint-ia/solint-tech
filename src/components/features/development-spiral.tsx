"use client";

import {
  Code2,
  Compass,
  Layers,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui";
import { STEP_ATTR, useActiveStep } from "@/hooks";
import { cn, stepLabel } from "@/lib/utils";
import type { ClosingStep, ProcessStep } from "@/types";

const stepIcons: readonly LucideIcon[] = [
  Compass,
  Layers,
  Palette,
  Code2,
  ShieldCheck,
];

/** Largura de um degrau lateral da espiral. */
const STEP_INDENT = "clamp(7px,2vw,28px)";

interface DevelopmentSpiralProps {
  steps: readonly ProcessStep[];
  closing: ClosingStep;
  /** Recuo lateral de cada etapa, em degraus. Ver `spiralOffsets`. */
  offsets: readonly number[];
}

/**
 * Conector em "S" entre duas etapas, desenhado com cantos arredondados.
 * A direção segue o sentido do recuo: para fora (direita) ou de volta (esquerda).
 */
function SpiralConnector({
  direction,
  indentSteps,
}: {
  direction: "out" | "back" | "straight";
  indentSteps: number;
}) {
  const marginLeft = `calc(${indentSteps} * 2 * ${STEP_INDENT})`;

  if (direction === "straight") {
    return (
      <div
        aria-hidden="true"
        className="relative w-px bg-[linear-gradient(180deg,rgb(53_217_255/0.42),rgb(53_217_255/0.42))]"
        style={{ marginLeft, height: `calc(18px + 2 * ${STEP_INDENT})` }}
      />
    );
  }

  const isOut = direction === "out";

  return (
    <div
      aria-hidden="true"
      className="relative"
      style={{
        marginLeft,
        width: `calc(2 * ${STEP_INDENT})`,
        height: `calc(18px + 2 * ${STEP_INDENT})`,
      }}
    >
      <span
        className={cn("absolute top-0 h-[19px] w-px bg-accent/42", isOut ? "left-0" : "right-0")}
      />
      <span
        className={cn(
          "absolute top-[18px] border-accent/42",
          isOut ? "left-0 border-b border-l" : "right-0 border-r border-b",
        )}
        style={{
          width: STEP_INDENT,
          height: STEP_INDENT,
          [isOut ? "borderBottomLeftRadius" : "borderBottomRightRadius"]: STEP_INDENT,
        }}
      />
      <span
        className={cn(
          "absolute border-accent/42",
          isOut ? "border-t border-r" : "border-t border-l",
        )}
        style={{
          [isOut ? "left" : "right"]: STEP_INDENT,
          top: `calc(18px + ${STEP_INDENT})`,
          width: STEP_INDENT,
          height: STEP_INDENT,
          [isOut ? "borderTopRightRadius" : "borderTopLeftRadius"]: STEP_INDENT,
        }}
      />
    </div>
  );
}

/**
 * Espiral vertical das etapas de desenvolvimento.
 *
 * As etapas descem alternando o recuo lateral e a etapa mais próxima da linha
 * de leitura é destacada em âmbar durante o scroll. A etapa 06 é o painel de
 * encerramento com os indicadores de acompanhamento.
 */
export function DevelopmentSpiral({ steps, closing, offsets }: DevelopmentSpiralProps) {
  const { wrapRef, activeIndex } = useActiveStep<HTMLDivElement>();
  const totalSteps = steps.length + 1;

  /** Sentido do conector entre a etapa `index` e a seguinte. */
  const connectorDirection = (index: number): "out" | "back" | "straight" => {
    const current = offsets[index] ?? 0;
    const next = offsets[index + 1] ?? current;
    if (next > current) return "out";
    if (next < current) return "back";
    return "straight";
  };

  return (
    <div ref={wrapRef} className="relative mx-auto flex max-w-[1080px] flex-col">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={step.title}>
            <div
              {...{ [STEP_ATTR]: "" }}
              className="flex"
              style={{ marginLeft: `calc(${offsets[index] ?? 0} * 2 * ${STEP_INDENT})` }}
            >
              <div
                aria-hidden="true"
                className="relative w-px flex-none bg-[linear-gradient(180deg,rgb(53_217_255/0.42),rgb(22_140_255/0.42))]"
              >
                <span
                  className={cn(
                    "absolute top-6 -left-[4.5px] size-[9px] rounded-full transition-[background-color,box-shadow] duration-400",
                    isActive
                      ? "bg-amber shadow-[0_0_20px_6px_rgb(255_182_92/0.55)]"
                      : "bg-accent shadow-[0_0_12px_3px_rgb(53_217_255/0.5)]",
                  )}
                />
              </div>
              <div className="w-[clamp(20px,3vw,38px)] flex-none" />

              <Reveal
                direction="left"
                delay={0.06}
                className={cn(
                  "max-w-[680px] flex-1 rounded-2xl border bg-[linear-gradient(180deg,rgb(16_22_34/0.9),rgb(9_13_20/0.8))] p-6.5 transition-all duration-400 backdrop-blur-md",
                  isActive
                    ? "border-amber/60 shadow-[0_18px_48px_rgb(2_8_18/0.5),0_0_40px_rgb(255_182_92/0.22)]"
                    : "border-accent/18 shadow-[0_8px_24px_rgb(2_8_18/0.3)] hover:border-accent/40 hover:shadow-[0_12px_32px_rgb(22_140_255/0.12)]",
                )}
              >
                <div className="mb-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const StepIcon = step.icon ?? stepIcons[index];
                      return StepIcon ? (
                        <span
                          className={cn(
                            "flex size-9 flex-none items-center justify-center rounded-xl border transition-colors",
                            isActive
                              ? "border-amber/40 bg-amber/15 text-amber shadow-[0_0_12px_rgb(255_182_92/0.4)]"
                              : "border-accent/22 bg-panel-2/80 text-accent",
                          )}
                        >
                          <StepIcon size={18} strokeWidth={1.5} aria-hidden="true" />
                        </span>
                      ) : null;
                    })()}
                    <div>
                      <span className="font-mono text-[0.72rem] font-semibold tracking-[0.14em] text-accent uppercase">
                        {stepLabel(index)}
                      </span>
                      <h3 className="m-0 font-display text-[clamp(1.1rem,1.6vw,1.26rem)]/[1.25] font-semibold tracking-[-0.02em] text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {step.badge ? (
                    <span
                      className={cn(
                        "font-mono text-[0.7rem] font-semibold px-2.5 py-1 rounded-full border",
                        isActive
                          ? "border-amber/35 bg-amber/12 text-amber shadow-[0_0_10px_rgb(255_182_92/0.25)]"
                          : "border-accent/20 bg-panel-2/70 text-steel",
                      )}
                    >
                      {step.badge}
                    </span>
                  ) : null}
                </div>

                <p className="m-0 text-pretty text-[0.92rem]/[1.65] font-light text-muted">
                  {step.description}
                </p>

                {step.tags ? (
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3.5 border-t border-accent/12">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-accent/15 bg-ink/75 px-2.5 py-1 font-mono text-[0.72rem] text-steel-2"
                      >
                        <span className="size-1 rounded-full bg-accent" />
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            </div>

            <SpiralConnector
              direction={connectorDirection(index)}
              indentSteps={Math.min(offsets[index] ?? 0, offsets[index + 1] ?? 0)}
            />
          </div>
        );
      })}

      {/* Etapa 06 — encerramento do fluxo */}
      <div
        {...{ [STEP_ATTR]: "" }}
        className="flex"
        style={{ marginLeft: `calc(${offsets[steps.length] ?? 0} * 2 * ${STEP_INDENT})` }}
      >
        <div
          aria-hidden="true"
          className="relative w-px flex-none bg-[linear-gradient(180deg,rgb(53_217_255/0.42),rgb(53_217_255/0)_92%)]"
        >
          <span
            className={cn(
              "absolute top-6 -left-[5.5px] size-[11px] rounded-full bg-amber shadow-[0_0_12px_3px_rgb(255_182_92/0.55)]",
              activeIndex === totalSteps - 1 && "animate-node-amber",
            )}
          />
        </div>
        <div className="w-[clamp(20px,3vw,38px)] flex-none" />

        <Reveal
          direction="left"
          delay={0.06}
          className="relative flex-1 overflow-hidden rounded-[20px] border border-accent/30 bg-[linear-gradient(140deg,rgb(16_24_38/0.88),rgb(9_12_17/0.72))] p-[clamp(28px,3.4vw,42px)]"
        >
          <div
            aria-hidden="true"
            className="animate-glowpan pointer-events-none absolute inset-0 bg-[radial-gradient(640px_280px_at_14%_0%,rgb(53_217_255/0.16),transparent_72%)]"
            style={{ animationDuration: "10s" }}
          />
          <div className="relative">
            <span className="mb-3.5 block text-[11.5px]/none font-medium tracking-[0.16em] text-accent uppercase">
              {closing.eyebrow}
            </span>
            <h3 className="m-0 mb-3.5 max-w-[620px] font-display text-[clamp(1.4rem,2.6vw,2rem)]/[1.2] font-semibold tracking-[-0.028em] text-balance text-white">
              {closing.title}
            </h3>
            <p className="m-0 mb-7 max-w-[560px] text-pretty text-[clamp(0.98rem,1.2vw,1.08rem)]/[1.68] font-light text-muted">
              {closing.description}
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(216px,1fr))] gap-3">
              {closing.indicators.map((indicator, index) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2.75 rounded-xl border border-accent/20 bg-panel-4/70 px-4 py-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="animate-node size-2 flex-none rounded-full bg-accent"
                    style={{ animationDuration: "3.6s", animationDelay: `${index * 0.45}s` }}
                  />
                  <span className="text-[0.88rem]/[1.35] font-medium text-fg-strong">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
