"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChartColumn,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Funnel,
  Megaphone,
  MessageCircle,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { CrmTourIcon, CrmTourItem } from "@/config/content/crm";
import { ProductFrame } from "./product-frame";

const iconMap: Record<CrmTourIcon, LucideIcon> = {
  inbox: MessageCircle,
  bot: Bot,
  funnel: Funnel,
  workflow: Workflow,
  megaphone: Megaphone,
  calendar: CalendarDays,
  chart: ChartColumn,
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

interface CrmTourProps {
  items: readonly CrmTourItem[];
  screens: Record<CrmTourItem["key"], { src: string; alt: string; url: string }>;
  width: number;
  height: number;
}

/**
 * Vitrine do produto: menu de módulos à esquerda, a captura real à direita e,
 * abaixo, a barra "Módulo ativo" com detalhes expansíveis e destaques.
 * No mobile o menu vira uma faixa rolável acima da imagem.
 */
export function CrmTour({ items, screens, width, height }: CrmTourProps) {
  const [activeKey, setActiveKey] = useState(items[0]?.key);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const detailsId = useId();

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.key === activeKey),
  );
  const active = items[activeIndex];
  if (!active) return null;

  const screen = screens[active.key];
  const ActiveIcon = iconMap[active.icon];

  function select(index: number) {
    const next = items[(index + items.length) % items.length];
    if (!next) return;
    setActiveKey(next.key);
    tabRefs.current[(index + items.length) % items.length]?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    const step = keys[event.key];
    if (step === undefined) return;
    event.preventDefault();
    select(activeIndex + step);
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(240px,0.36fr)_minmax(0,1fr)] lg:items-start lg:gap-7">
        {/* Menu de módulos */}
        <div
          role="tablist"
          aria-label="Módulos do Solint CRM"
          aria-orientation="vertical"
          className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 no-scrollbar lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:rounded-[20px] lg:border lg:border-accent/14 lg:bg-panel/70 lg:p-3 lg:shadow-[0_24px_60px_rgb(2_8_18/0.45)] lg:backdrop-blur-md"
        >
          {items.map((item, index) => {
            const isActive = item.key === active.key;
            const Icon = iconMap[item.icon];
            return (
              <button
                key={item.key}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`crm-tab-${item.key}`}
                aria-selected={isActive}
                aria-controls="crm-tour-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveKey(item.key)}
                onKeyDown={onTabKeyDown}
                className={cn(
                  "group relative flex flex-none items-center gap-3 rounded-xl border text-left whitespace-nowrap transition-[border-color,background-color,box-shadow,color] duration-300 ease-out-solint",
                  "px-3.5 py-2.5 lg:gap-3.5 lg:px-4 lg:py-3.5",
                  isActive
                    ? "border-accent/60 bg-[linear-gradient(100deg,rgb(23_78_255/0.32),rgb(53_217_255/0.12))] text-white shadow-[0_0_28px_rgb(53_217_255/0.22),inset_0_0_0_1px_rgb(53_217_255/0.12)]"
                    : "border-accent/10 bg-panel/60 text-fg-strong hover:border-accent/30 hover:bg-accent/6 lg:border-transparent lg:bg-transparent",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 flex-none items-center justify-center rounded-lg transition-colors duration-300 lg:size-9",
                    isActive ? "bg-accent/18 text-accent" : "text-steel group-hover:text-accent",
                  )}
                >
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="text-[0.9rem]/[1.2] font-medium lg:text-[0.98rem]">{item.label}</span>
                <ChevronRight
                  size={17}
                  aria-hidden="true"
                  className={cn(
                    "ml-auto hidden flex-none text-accent transition-[opacity,transform] duration-300 lg:block",
                    isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Captura do módulo ativo */}
        <div
          id="crm-tour-panel"
          role="tabpanel"
          aria-labelledby={`crm-tab-${active.key}`}
          className="relative min-w-0"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-deep/20 blur-3xl"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 12, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative"
            >
              <ProductFrame
                src={screen.src}
                alt={screen.alt}
                url={screen.url}
                width={width}
                height={height}
                priority={active.key === items[0]?.key}
                sizes="(min-width: 1280px) 860px, 94vw"
                className="border-accent/35 shadow-[0_40px_120px_rgb(2_8_18/0.75),0_0_0_1px_rgb(53_217_255/0.06),0_0_60px_rgb(22_140_255/0.22)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Módulo ativo */}
      <div className="relative mt-6 overflow-hidden rounded-[20px] border border-accent/22 bg-[linear-gradient(150deg,rgb(16_26_42/0.92),rgb(9_14_23/0.88))] shadow-[0_0_46px_rgb(22_140_255/0.1)] backdrop-blur-md lg:mt-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -left-20 size-72 rounded-full bg-[radial-gradient(circle,rgb(53_217_255/0.12),rgb(5_10_20/0)_68%)]"
        />
        <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-7 sm:p-7 lg:px-10">
          <span className="flex size-14 flex-none items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-[0_0_24px_rgb(53_217_255/0.18)] sm:size-16">
            <ActiveIcon size={28} strokeWidth={1.6} aria-hidden="true" />
          </span>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.key}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="min-w-0 flex-1"
              aria-live="polite"
            >
              <span className="block font-mono text-[10.5px]/none font-semibold tracking-[0.18em] text-accent uppercase">
                Módulo ativo
              </span>
              <h2 className="m-0 mt-2 font-display text-[clamp(1.25rem,2vw,1.55rem)]/[1.2] font-semibold tracking-tight text-white">
                {active.title}
              </h2>
              <p className="m-0 mt-1.5 max-w-[620px] text-[0.94rem]/[1.6] font-light text-muted">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <span aria-hidden="true" className="hidden h-16 w-px flex-none bg-accent/16 md:block" />

          <button
            type="button"
            aria-expanded={detailsOpen}
            aria-controls={detailsId}
            onClick={() => setDetailsOpen((open) => !open)}
            className="inline-flex flex-none items-center gap-2 self-start rounded-full border border-accent/35 bg-ink/40 px-5 py-2.5 text-[0.88rem] font-medium text-white transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/70 hover:bg-accent/8 hover:shadow-[0_0_20px_rgb(53_217_255/0.18)] sm:self-center"
          >
            {detailsOpen ? "Ver menos" : "Ver mais detalhes"}
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={cn("transition-transform duration-300", detailsOpen && "rotate-180")}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {detailsOpen ? (
            <motion.div
              id={detailsId}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative overflow-hidden"
            >
              <ul className="m-0 grid list-none grid-cols-1 gap-4 border-t border-accent/12 p-5 sm:p-7 md:grid-cols-3 lg:px-10">
                {active.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-[0.9rem]/[1.6] font-light text-muted">
                    <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-accent/14 text-accent">
                      <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Destaques do módulo */}
      <ul className="m-0 mt-6 flex list-none flex-wrap justify-center gap-x-9 gap-y-3 p-0">
        {active.points.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-[0.94rem] text-fg-strong">
            <Check size={18} strokeWidth={2.2} className="flex-none text-accent" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
