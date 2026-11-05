"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { CrmTourItem } from "@/config/content/crm";
import { ProductFrame } from "./product-frame";

interface CrmTourProps {
  items: readonly CrmTourItem[];
  screens: Record<CrmTourItem["key"], { src: string; alt: string; url: string }>;
  width: number;
  height: number;
}

/**
 * Tour do produto: lista de abas à esquerda e a captura correspondente à
 * direita. No mobile as abas viram uma faixa rolável acima da imagem.
 */
export function CrmTour({ items, screens, width, height }: CrmTourProps) {
  const [activeKey, setActiveKey] = useState(items[0]?.key);
  const active = items.find((item) => item.key === activeKey) ?? items[0];

  if (!active) return null;
  const screen = screens[active.key];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.6fr)] lg:gap-10">
      <div
        role="tablist"
        aria-label="Telas do Solint CRM"
        className="-mx-6 flex gap-2.5 overflow-x-auto px-6 pb-1 no-scrollbar lg:mx-0 lg:flex-col lg:gap-3 lg:overflow-visible lg:px-0"
      >
        {items.map((item) => {
          const isActive = item.key === active.key;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`crm-tab-${item.key}`}
              aria-selected={isActive}
              aria-controls="crm-tour-panel"
              onClick={() => setActiveKey(item.key)}
              className={cn(
                "group relative flex-none overflow-hidden rounded-2xl border text-left transition-[border-color,background-color,box-shadow] duration-300 ease-out-solint",
                "px-4 py-3 lg:px-5.5 lg:py-5",
                isActive
                  ? "border-accent/45 bg-[linear-gradient(150deg,rgb(18_28_44/0.95),rgb(10_15_24/0.9))] shadow-[0_0_40px_rgb(22_140_255/0.16)]"
                  : "border-accent/14 bg-panel/60 hover:border-accent/32 hover:bg-panel/85",
              )}
            >
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-4 left-0 hidden w-[3px] rounded-r bg-[linear-gradient(180deg,#35D9FF,#174EFF)] shadow-[0_0_12px_rgb(53_217_255/0.7)] lg:block"
                />
              ) : null}
              <span
                className={cn(
                  "block font-mono text-[10.5px]/none tracking-[0.16em] uppercase whitespace-nowrap",
                  isActive ? "text-accent" : "text-steel-2",
                )}
              >
                {item.label}
              </span>
              <span className="mt-2.5 hidden font-display text-[1.02rem]/[1.3] font-semibold tracking-tight text-white lg:block">
                {item.title}
              </span>
              <span
                className={cn(
                  "hidden text-[0.86rem]/[1.6] font-light text-muted transition-[max-height,opacity,margin] duration-400 ease-out-solint lg:block",
                  isActive ? "mt-1.5 max-h-40 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {item.description}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="crm-tour-panel"
        role="tabpanel"
        aria-labelledby={`crm-tab-${active.key}`}
        className="relative min-w-0"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-deep/18 blur-3xl"
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <ProductFrame
              src={screen.src}
              alt={screen.alt}
              url={screen.url}
              width={width}
              height={height}
              sizes="(min-width: 1280px) 760px, 94vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Texto da aba ativa no mobile, onde a lista mostra só os rótulos */}
        <div className="relative mt-5 lg:hidden">
          <h3 className="m-0 font-display text-[1.1rem]/[1.3] font-semibold text-white">
            {active.title}
          </h3>
          <p className="m-0 mt-1.5 text-[0.92rem]/[1.6] font-light text-muted">
            {active.description}
          </p>
        </div>

        <ul className="relative m-0 mt-5 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
          {active.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-[0.88rem] text-fg-strong">
              <Check size={15} className="flex-none text-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
