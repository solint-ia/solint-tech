"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import { Button, Card, Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ProjectCard } from "@/types";

interface ProjectGridProps {
  projects: readonly ProjectCard[];
  /** Legenda do placeholder (mantido para compatibilidade). */
  imageLabel?: string;
  /** Altura do header visual do projeto. */
  imageHeight?: number;
}

/**
 * Grade de projetos e cases de portfólio no padrão All-Dark Glassmorphic.
 * - No Mobile: Carrossel horizontal suave com snap touch, bullets interativos e sem corte superior.
 * - No Desktop: Grade responsiva de 2 a 3 colunas com hover glassmorphism.
 */
export function ProjectGrid({ projects, imageHeight = 170 }: ProjectGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 320;
    const index = Math.round(el.scrollLeft / (cardWidth + 18));
    setActiveSlide(Math.max(0, Math.min(projects.length - 1, index)));
  };

  const scrollToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveSlide(index);
    }
  };

  return (
    <div className="relative">
      {/* Contêiner de Cards: Scroll Horizontal no Mobile / Grade no Desktop */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="group/grid flex overflow-x-auto snap-x snap-mandatory pt-3 pb-5 gap-4.5 -mx-6 px-6 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:pt-0 md:pb-0"
      >
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            direction="left"
            delay={index * 0.08}
            className="flex w-[85vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:snap-align-none"
          >
            <Card
              as="article"
              interactive
              className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-accent/18 bg-panel/85 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md transition-all duration-300 group-hover/grid:opacity-60 hover:!opacity-100 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_16px_40px_rgb(22_140_255/0.16)]"
            >
              {/* Header visual com preview de software */}
              <div
                className="relative flex flex-col justify-between overflow-hidden bg-[linear-gradient(145deg,#070D18,#0F1F38)] p-4 text-white"
                style={{ height: imageHeight }}
              >
                {/* Glow sutil */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 size-32 rounded-full bg-accent/20 blur-2xl"
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-rose-500/70" />
                    <span className="size-2 rounded-full bg-amber-400/70" />
                    <span className="size-2 rounded-full bg-emerald-400/70" />
                  </div>

                  {project.badge ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-ink/75 px-2.5 py-0.5 font-mono text-[0.66rem] font-semibold text-accent shadow-sm">
                      <Sparkles className="size-2.5" />
                      {project.badge}
                    </span>
                  ) : null}
                </div>

                {/* Mini mockup interior */}
                <div className="relative rounded-xl border border-white/10 bg-white/6 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex size-6 items-center justify-center rounded-lg bg-accent/20 text-accent">
                        <Layers className="size-3.5" />
                      </div>
                      <span className="font-display text-[0.82rem] font-semibold text-white">
                        {project.title}
                      </span>
                    </div>
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-1 flex-col gap-3.5 p-6">
                {project.category ? (
                  <span className="font-mono text-[0.7rem]/none font-semibold tracking-[0.14em] text-accent uppercase">
                    {project.category}
                  </span>
                ) : null}

                <h3 className="m-0 font-display text-[1.18rem]/[1.25] font-bold text-white">
                  {project.title}
                </h3>

                {project.description ? (
                  <p className="m-0 text-pretty text-[0.88rem]/[1.6] font-light text-muted">
                    {project.description}
                  </p>
                ) : null}

                {/* Métrica de Impacto / Destaque Semântico */}
                {project.metric ? (
                  <div className="inline-flex items-center gap-1.5 self-start rounded-lg border border-accent/25 bg-accent/12 px-3 py-1 font-mono text-[0.76rem] font-bold text-accent shadow-[0_0_10px_rgb(53_217_255/0.15)]">
                    {project.metric}
                  </div>
                ) : null}

                {/* Tags de Tecnologias */}
                {project.tags ? (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-accent/15 bg-ink/75 px-2.5 py-1 font-mono text-[0.72rem] text-steel-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-auto pt-3.5 border-t border-accent/12 flex items-center justify-between">
                  <Button
                    href={project.href}
                    variant="secondary"
                    size="sm"
                    className="group/btn flex items-center gap-1.5"
                  >
                    <span>{project.ctaLabel}</span>
                    <ArrowUpRight className="size-3.5 text-accent transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Bullets de Navegação e Dica no Mobile */}
      <div className="flex md:hidden flex-col items-center justify-center gap-2 pt-2">
        <div className="flex items-center gap-2">
          {projects.map((project, idx) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Ir para case ${project.title}`}
              onClick={() => scrollToSlide(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeSlide === idx
                  ? "w-6 bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)]"
                  : "w-1.5 bg-accent/25 hover:bg-accent/50",
              )}
            />
          ))}
        </div>
        <span className="text-[0.68rem] text-faint-2 font-mono">
          ← Deslize para explorar os {projects.length} cases →
        </span>
      </div>
    </div>
  );
}
