"use client";

import Image from "next/image";
import {
  Database,
  Layers,
  MessageSquare,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/ui";
import { HUB_NODE_ATTR, SPOKE_NODE_ATTR, useHubLines } from "@/hooks";
import { siteConfig } from "@/config/site";
import type { TechnologyGroup } from "@/types";

function CategoryBadgeIcon({ category }: { category?: string }) {
  if (category === "automation") return <Workflow className="size-4 text-accent" />;
  if (category === "conversations") return <MessageSquare className="size-4 text-accent" />;
  if (category === "data") return <Database className="size-4 text-accent" />;
  if (category === "connectivity") return <Network className="size-4 text-accent" />;
  return <Layers className="size-4 text-accent" />;
}

/** Os quatro grupos orbitam o hub: acima, à direita, abaixo, à esquerda. */
const spokePlacement = [
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-2 lg:row-start-3",
  "lg:col-start-1 lg:row-start-2",
];

/**
 * Diagrama hub-and-spoke do ecossistema de tecnologias.
 * Núcleo central com anéis de orquestração e satélites com badges de ferramentas.
 */
export function EcosystemHub({
  groups,
  hubLabel,
}: {
  groups: readonly TechnologyGroup[];
  hubLabel: string;
}) {
  const { wrapRef, groupRef } = useHubLines<HTMLDivElement>();

  return (
    <div ref={wrapRef} className="relative">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible lg:block"
      >
        <g ref={groupRef} />
      </svg>

      <div className="relative z-1 mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.35fr_1.05fr] lg:gap-x-14 lg:gap-y-12">
        {/* HUB CENTRAL ORQUESTRADOR COM ANÉIS ORBITAIS */}
        <Reveal
          direction="left"
          delay={0.04}
          className="relative overflow-hidden rounded-3xl border-2 border-amber/40 bg-[linear-gradient(150deg,rgb(20_26_38/0.95),rgb(10_13_18/0.9))] p-6 text-center shadow-[0_0_60px_rgb(255_182_92/0.18)] backdrop-blur-xl sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2"
          {...{ [HUB_NODE_ATTR]: "" }}
        >
          {/* Anéis concêntricos decorativos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-full border border-amber/15 animate-ping opacity-25"
            style={{ animationDuration: "6s" }}
          />

          <div className="relative z-1">
            <span className="mb-3 flex items-center justify-center">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.name}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="animate-logo-pulse h-8 w-auto drop-shadow-[0_0_16px_rgb(255_182_92/0.6)]"
              />
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[0.68rem] font-semibold text-amber shadow-[0_0_12px_rgb(255_182_92/0.2)]">
              <Sparkles className="size-3" />
              NÚCLEO ORQUESTRADOR
            </span>

            <p className="mt-2.5 text-[0.82rem]/[1.5] font-light text-muted">
              {hubLabel}
            </p>
          </div>
        </Reveal>

        {/* Barramento Conector Luminoso para Mobile (liga o Hub aos módulos) */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative flex h-6 w-full items-center justify-center sm:col-span-2 lg:hidden"
        >
          <div className="h-full w-[2px] bg-[linear-gradient(to_bottom,#FFB65C,#35D9FF)] shadow-[0_0_8px_rgb(53_217_255/0.5)]" />
          <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)] absolute top-1/2 -translate-y-1/2" />
        </div>

        {/* 4 SATÉLITES DE TECNOLOGIAS E INTEGRAÇÕES */}
        {groups.map((group, index) => (
          <Reveal
            key={group.label}
            direction="left"
            delay={0.08 + index * 0.08}
            className={spokePlacement[index]}
          >
            <div
              {...{ [SPOKE_NODE_ATTR]: "" }}
              className="group relative rounded-2xl border border-accent/18 bg-panel/75 p-5 shadow-[0_6px_20px_rgb(2_8_18/0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-[#0E2038]/85 hover:shadow-[0_10px_30px_rgb(22_140_255/0.12)]"
            >
              {/* Ponto conector luminoso no topo do card no mobile */}
              <div className="absolute -top-1.5 left-1/2 size-2.5 -translate-x-1/2 rounded-full border border-ink bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)] lg:hidden" />

              <div className="mb-3.5 flex items-center justify-between gap-2 border-b border-accent/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <CategoryBadgeIcon category={group.category} />
                  <span className="font-display text-[0.88rem] font-semibold text-white">
                    {group.label}
                  </span>
                </div>
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)]" />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-accent/15 bg-ink/70 px-2.5 py-1 font-mono text-[0.72rem] text-steel-2 transition-colors hover:border-accent/35 hover:text-white"
                  >
                    <span className="size-1 rounded-full bg-accent/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
