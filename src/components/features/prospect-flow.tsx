"use client";

import {
  Bot,
  Calendar,
  Database,
  Filter,
  Share2,
  Sparkles,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

interface ProspectFlowProps {
  steps: readonly ProcessStep[];
  /** Índice da etapa em destaque, que recebe aura realçada e conteúdo extra. */
  highlightedIndex: number;
  /** Conteúdo adicional renderizado dentro do fluxo em destaque. */
  highlightContent?: React.ReactNode;
}

/** Ícones temáticos para cada uma das 6 etapas da esteira de pipeline. */
function StepIcon({ index }: { index: number }) {
  const iconClass = "size-4 sm:size-4.5 text-accent shrink-0";
  switch (index) {
    case 0:
      return <Filter className={iconClass} />;
    case 1:
      return <UserCheck className={iconClass} />;
    case 2:
      return <Database className={iconClass} />;
    case 3:
      return <Calendar className={iconClass} />;
    case 4:
      return <Bot className={iconClass} />;
    case 5:
      return <UserPlus className={iconClass} />;
    default:
      return <Share2 className={iconClass} />;
  }
}

/**
 * Esteira de Pipeline Contínua (Opção 1) — Sem Cards fechados.
 *
 * Estrutura limpa, direta e tecnológica com espinha luminosa contínua,
 * nós iluminados e tipografia de alto impacto integrada ao canvas escuro.
 */
export function ProspectFlow({
  steps,
  highlightedIndex,
  highlightContent,
}: ProspectFlowProps) {
  return (
    <div className="relative mx-auto max-w-[1040px] px-3 sm:px-6">
      {/* 1. Espinha luminosa contínua com pulso de fótons descendo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 bottom-8 left-6 sm:left-8 w-px bg-[linear-gradient(180deg,rgb(53_217_255_/_0)_0%,rgb(53_217_255_/_0.55)_7%,rgb(22_140_255_/_0.55)_93%,rgb(53_217_255_/_0)_100%)] lg:left-1/2 lg:-translate-x-1/2"
      >
        <span
          className="animate-travel-y absolute -left-[3px] size-[7px] rounded-full bg-accent shadow-[0_0_16px_5px_rgb(53_217_255_/_0.85)]"
          style={{ animationDuration: "8s" }}
        />
      </div>

      {/* 2. Lista de Etapas da Esteira de Pipeline */}
      <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isHighlighted = index === highlightedIndex;

          return (
            <Reveal
              key={step.title}
              direction="left"
              delay={index * 0.05}
              className="relative grid grid-cols-1 items-start gap-0 pl-14 sm:pl-20 lg:grid-cols-2 lg:gap-x-16 lg:pl-0"
            >
              {/* Conector horizontal e Nó Central da Trilha */}
              <div
                className={cn(
                  "absolute top-1.5 left-6 sm:left-8 flex items-center lg:left-1/2 lg:-translate-x-1/2",
                  isLeft ? "lg:flex-row-reverse" : "lg:flex-row",
                )}
              >
                {/* Nó luminoso da esteira */}
                <div
                  className={cn(
                    "relative flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 -translate-x-1/2 lg:translate-x-0",
                    isHighlighted
                      ? "border-accent bg-[linear-gradient(135deg,#0E243E,#060D18)] shadow-[0_0_24px_rgb(53_217_255_/_0.4)]"
                      : "border-accent/30 bg-[#070D18]/90 shadow-[0_0_12px_rgb(22_140_255_/_0.15)]",
                  )}
                >
                  <StepIcon index={index} />
                  {isHighlighted ? (
                    <span className="absolute -inset-1 rounded-2xl border border-accent/40 animate-ping pointer-events-none" />
                  ) : null}
                </div>

                {/* Linha de circuito que conecta o nó ao bloco de texto (no Desktop) */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "hidden lg:block h-px w-10 bg-[linear-gradient(90deg,rgb(53_217_255_/_0.4),transparent)]",
                    isLeft ? "rotate-180" : "",
                  )}
                />
              </div>

              {/* Bloco de Conteúdo Aberto (Sem Card) */}
              <div
                className={cn(
                  "relative flex flex-col",
                  isLeft
                    ? "lg:col-start-1 lg:items-end lg:text-right"
                    : "lg:col-start-2 lg:items-start lg:text-left",
                )}
              >
                {/* Aura de fundo na etapa destacada (IA) */}
                {isHighlighted ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgb(53_217_255_/_0.08),transparent_70%)] blur-xl -z-10"
                  />
                ) : null}

                {/* Identificador da Etapa */}
                <div
                  className={cn(
                    "flex items-center gap-2 mb-2",
                    isLeft ? "lg:justify-end" : "lg:justify-start",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[11px] font-bold tracking-[0.16em] uppercase",
                      isHighlighted ? "text-accent" : "text-steel-2",
                    )}
                  >
                    ETAPA 0{index + 1}
                  </span>
                  {isHighlighted ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/35 bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent shadow-[0_0_10px_rgb(53_217_255_/_0.25)]">
                      <Sparkles className="size-2.5" />
                      Núcleo de IA
                    </span>
                  ) : null}
                </div>

                {/* Título da Etapa */}
                <h3 className="m-0 font-display text-[clamp(1.15rem,2vw,1.4rem)]/[1.25] font-bold text-white tracking-[-0.02em]">
                  {step.title}
                </h3>

                {/* Descrição Fluida da Etapa */}
                <p className="mt-2 m-0 max-w-[420px] text-pretty text-[0.92rem]/[1.65] font-light text-muted">
                  {step.description}
                </p>

                {/* Conteúdo Extra em Destaque (Perguntas da IA) */}
                {isHighlighted && highlightContent ? (
                  <div
                    className={cn(
                      "mt-4 w-full max-w-[460px]",
                      isLeft ? "lg:flex lg:justify-end" : "",
                    )}
                  >
                    {highlightContent}
                  </div>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
