"use client";

import { Fragment, useState } from "react";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AgentApplication } from "@/types";

interface ApplicationCardProps {
  app: AgentApplication;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function ApplicationCard({ app, isOpen, onToggle }: ApplicationCardProps) {
  const Icon = app.icon;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl",
        isOpen
          ? "border-accent/45 bg-[linear-gradient(150deg,rgb(14_26_44/0.95),rgb(8_14_22/0.92))] shadow-[0_0_35px_rgb(22_140_255/0.14)]"
          : "border-accent/16 bg-panel/75 shadow-[0_4px_16px_rgb(2_8_18/0.3)] hover:border-accent/35 hover:bg-[#0D1E34]/80",
      )}
    >
      {/* Botão de Cabeçalho / Trigger */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-3.5 p-5 text-left transition-colors"
      >
        <div className="flex items-center gap-3.5">
          <span
            className={cn(
              "flex size-10 flex-none items-center justify-center rounded-xl border transition-all duration-300",
              isOpen
                ? "border-accent/40 bg-accent/20 text-accent shadow-[0_0_12px_rgb(53_217_255/0.4)]"
                : "border-accent/20 bg-panel-2/80 text-accent group-hover:border-accent/35 group-hover:bg-accent group-hover:text-ink",
            )}
          >
            <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
          </span>

          <div>
            <h3 className="m-0 font-display text-[1.02rem]/[1.3] font-bold text-white transition-colors group-hover:text-accent-soft">
              {app.title}
            </h3>
            {app.speed ? (
              <span className="font-mono text-[0.68rem] text-faint-2">
                {app.speed}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-none">
          {app.badge ? (
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-accent/25 bg-ink/75 px-2.5 py-0.5 font-mono text-[0.64rem] font-semibold text-accent shadow-sm">
              <Sparkles className="size-2.5" />
              {app.badge}
            </span>
          ) : null}

          <span
            className={cn(
              "flex size-7 items-center justify-center rounded-lg border border-accent/18 bg-panel-2/70 text-accent transition-transform duration-300",
              isOpen ? "rotate-180 bg-accent/20 text-white" : "group-hover:border-accent/35",
            )}
          >
            <ChevronDown size={15} strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>
      </button>

      {/* Conteúdo Expansível In-Place */}
      {isOpen ? (
        <div className="animate-fade-in border-t border-accent/15 px-5 pt-4 pb-5">
          <p className="m-0 mb-4 text-[0.86rem]/[1.65] font-light text-muted">
            {app.description}
          </p>

          {/* Sequência de Automação */}
          <div className="mb-4">
            <span className="mb-2 block font-mono text-[0.66rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Sequência de Automação
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {app.flow.map((step, stepIdx) => (
                <Fragment key={step}>
                  <div className="flex items-center gap-1.5 rounded-lg border border-accent/20 bg-ink/80 px-2.5 py-1.5 text-[0.76rem] font-medium text-fg-strong shadow-sm">
                    <span className="flex size-3.5 items-center justify-center rounded-full bg-accent/20 font-mono text-[0.6rem] font-bold text-accent">
                      {stepIdx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {stepIdx < app.flow.length - 1 ? (
                    <ChevronRight className="size-3.5 text-accent/60 flex-none" />
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Impacto Operacional */}
          <div className="flex items-center gap-2 rounded-xl border border-accent/15 bg-accent/8 px-3.5 py-2.5">
            <span className="size-1.5 flex-none rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)] animate-node" />
            <span className="text-[0.8rem]/[1.4] font-medium text-white">
              {app.impact}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Constelação de aplicações de agentes de IA:
 * Cada item funciona como um card expansível in-place independente.
 * No desktop, as duas colunas operam independentemente, impedindo que o card
 * ao lado seja esticado ou crie espaços em branco indesejados.
 */
export function ApplicationsConstellation({
  applications,
}: {
  applications: readonly AgentApplication[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const col1 = applications.filter((_, i) => i % 2 === 0);
  const col2 = applications.filter((_, i) => i % 2 === 1);

  return (
    <div className="relative">
      {/* Mobile: Lista única sequencial */}
      <div className="relative z-1 flex flex-col gap-4 md:hidden">
        {applications.map((app, index) => (
          <ApplicationCard
            key={app.title}
            app={app}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => toggleIndex(index)}
          />
        ))}
      </div>

      {/* Desktop / Tablet: Duas colunas independentes (masonry flex) */}
      <div className="relative z-1 hidden grid-cols-2 items-start gap-4 md:grid">
        <div className="flex flex-col gap-4">
          {col1.map((app, idx) => {
            const realIndex = idx * 2;
            return (
              <ApplicationCard
                key={app.title}
                app={app}
                index={realIndex}
                isOpen={openIndex === realIndex}
                onToggle={() => toggleIndex(realIndex)}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          {col2.map((app, idx) => {
            const realIndex = idx * 2 + 1;
            return (
              <ApplicationCard
                key={app.title}
                app={app}
                index={realIndex}
                isOpen={openIndex === realIndex}
                onToggle={() => toggleIndex(realIndex)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
