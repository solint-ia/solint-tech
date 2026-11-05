"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  CalendarDays,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  GitBranch,
  Hand,
  KanbanSquare,
  MapPin,
  MessageCircle,
  QrCode,
  Send,
  Smile,
  StickyNote,
  Target,
  Timer,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { usePrefersReducedMotion } from "@/hooks";
import { cn } from "@/lib/utils";
import type { CrmModule, CrmTagIcon } from "@/config/content/crm";

const tagIcons: Record<CrmTagIcon, LucideIcon> = {
  message: MessageCircle,
  qr: QrCode,
  users: Users,
  note: StickyNote,
  clock: Clock,
  book: BookOpen,
  hand: Hand,
  kanban: KanbanSquare,
  target: Target,
  branch: GitBranch,
  zap: Zap,
  send: Send,
  checks: CheckCheck,
  calendar: CalendarDays,
  building: Building2,
  pin: MapPin,
  timer: Timer,
  smile: Smile,
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

interface CrmModuleCarouselProps {
  modules: readonly CrmModule[];
}

/**
 * Carrossel de módulos com ícones coloridos: setas e pontos trocam o módulo
 * selecionado, e o painel abaixo mostra a descrição e as etiquetas dele.
 */
export function CrmModuleCarousel({ modules }: CrmModuleCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isFirstRender = useRef(true);
  const reducedMotion = usePrefersReducedMotion();

  const count = modules.length;
  const active = modules[activeIndex];

  // Mantém o card ativo visível, centralizado na faixa (sem rolar a página).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const track = trackRef.current;
    const tile = tileRefs.current[activeIndex];
    if (!track || !tile) return;
    track.scrollTo({
      left: tile.offsetLeft - (track.clientWidth - tile.clientWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [activeIndex, reducedMotion]);

  if (!active) return null;

  function go(index: number, focus = false) {
    const next = (index + count) % count;
    setActiveIndex(next);
    if (focus) tileRefs.current[next]?.focus();
  }

  function onTileKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(activeIndex + 1, true);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(activeIndex - 1, true);
    }
  }

  const arrowClass =
    "hidden size-11 flex-none items-center justify-center rounded-full border border-accent/30 bg-panel/80 text-accent transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/70 hover:bg-accent/10 hover:shadow-[0_0_20px_rgb(53_217_255/0.25)] sm:flex";

  return (
    <div>
      <div className="flex items-center gap-3 lg:gap-5">
        <button type="button" aria-label="Módulo anterior" onClick={() => go(activeIndex - 1)} className={arrowClass}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div
          ref={trackRef}
          role="tablist"
          aria-label="Módulos do Solint CRM"
          className="relative -mx-6 flex min-w-0 flex-1 snap-x snap-mandatory gap-3.5 overflow-x-auto px-6 py-4 no-scrollbar sm:mx-0 sm:px-1 lg:gap-4"
        >
          {modules.map((module, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={module.key}
                ref={(node) => {
                  tileRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`crm-module-tab-${module.key}`}
                aria-selected={isActive}
                aria-controls="crm-module-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => go(index)}
                onKeyDown={onTileKeyDown}
                className={cn(
                  "group relative flex h-[138px] w-[132px] flex-none snap-center flex-col items-center justify-center gap-3 rounded-[18px] border px-3 text-center transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out-solint sm:w-[146px]",
                  isActive
                    ? "-translate-y-1 border-accent/75 bg-[linear-gradient(160deg,rgb(22_44_70/0.95),rgb(10_18_30/0.95))] shadow-[0_0_0_1px_rgb(53_217_255/0.25),0_0_34px_rgb(53_217_255/0.28)]"
                    : "border-accent/14 bg-panel/75 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-[#0E1A2C]/85",
                )}
              >
                <Image
                  src={module.image}
                  alt=""
                  width={56}
                  height={56}
                  unoptimized
                  className={cn(
                    "size-13 object-contain drop-shadow-[0_8px_14px_rgb(0_0_0/0.35)] transition-transform duration-300 ease-out-solint",
                    isActive ? "scale-110" : "group-hover:scale-105",
                  )}
                />
                <span className="text-[0.86rem]/[1.25] font-semibold text-white text-balance">
                  {module.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        <button type="button" aria-label="Próximo módulo" onClick={() => go(activeIndex + 1)} className={arrowClass}>
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="mt-3 flex justify-center gap-2">
        {modules.map((module, index) => (
          <button
            key={module.key}
            type="button"
            aria-label={`Mostrar ${module.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => go(index)}
            className="group flex h-4 items-center justify-center px-0.5"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-[width,background-color,box-shadow] duration-300",
                index === activeIndex
                  ? "w-5 bg-accent shadow-[0_0_10px_rgb(53_217_255/0.7)]"
                  : "w-1.5 bg-steel-2/40 group-hover:bg-steel-2/80",
              )}
            />
          </button>
        ))}
      </div>

      {/* Painel do módulo selecionado */}
      <div
        id="crm-module-panel"
        role="tabpanel"
        aria-labelledby={`crm-module-tab-${active.key}`}
        className="relative mt-8 overflow-hidden rounded-[22px] border border-accent/22 bg-[linear-gradient(150deg,rgb(16_26_42/0.92),rgb(8_13_22/0.9))] shadow-[0_24px_70px_rgb(2_8_18/0.5),0_0_50px_rgb(22_140_255/0.1)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid grid-cols-1 items-center md:grid-cols-[minmax(220px,0.38fr)_minmax(0,1fr)]"
          >
            {/* Ilustração: o ícone do módulo em órbita luminosa */}
            <div className="relative flex h-[200px] items-center justify-center md:h-[240px] md:border-r md:border-accent/12">
              <div
                aria-hidden="true"
                className="absolute size-56 rounded-full bg-[radial-gradient(circle,rgb(22_140_255/0.32),rgb(23_78_255/0.08)_50%,rgb(5_10_20/0)_72%)]"
              />
              <div
                aria-hidden="true"
                className="absolute h-[120px] w-[230px] -rotate-12 rounded-[50%] border border-accent/30 shadow-[0_0_24px_rgb(53_217_255/0.15)]"
              />
              <div
                aria-hidden="true"
                className="absolute h-[150px] w-[260px] rotate-[18deg] rounded-[50%] border border-blue/18"
              />
              <span aria-hidden="true" className="absolute top-[22%] left-[24%] size-1.5 rounded-full bg-accent shadow-[0_0_10px_#35D9FF]" />
              <span aria-hidden="true" className="absolute right-[22%] bottom-[24%] size-1 rounded-full bg-accent-soft shadow-[0_0_8px_#8AE3FF]" />
              <Image
                src={active.image}
                alt=""
                width={132}
                height={132}
                unoptimized
                className="animate-float relative size-[118px] object-contain drop-shadow-[0_18px_28px_rgb(0_0_0/0.45)] md:size-[132px]"
              />
            </div>

            <div className="p-6 pt-0 sm:p-8 md:pt-8 lg:px-12">
              <h3 className="m-0 font-display text-[clamp(1.4rem,2.4vw,1.9rem)]/[1.2] font-semibold tracking-tight text-white">
                {active.title}
              </h3>
              <p className="m-0 mt-3 max-w-[560px] text-[clamp(0.95rem,1.15vw,1.06rem)]/[1.65] font-light text-muted">
                {active.description}
              </p>
              <ul className="m-0 mt-6 flex list-none flex-wrap gap-2.5 p-0">
                {active.tags.map((tag) => {
                  const Icon = tagIcons[tag.icon];
                  return (
                    <li
                      key={tag.label}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/28 bg-ink/45 px-4 py-2 text-[0.86rem]/none text-fg-strong"
                    >
                      <Icon size={16} strokeWidth={1.8} className="text-accent" aria-hidden="true" />
                      {tag.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
