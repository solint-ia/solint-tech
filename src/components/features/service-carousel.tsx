"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { usePrefersReducedMotion } from "@/hooks";
import { cn } from "@/lib/utils";
import type { ServiceArea } from "@/types";

const AUTOPLAY_MS = 8000;
/** Pausa após um arraste antes de retomar o autoplay. */
const RESUME_DELAY_MS = 900;
/** Graus de rotação por pixel arrastado. */
const DRAG_SENSITIVITY = 0.32;
/** Peso da velocidade final do arraste ao escolher o card de destino. */
const FLICK_WEIGHT = 90;
/** Acima deste deslocamento o "clique" é tratado como arraste e não navega. */
const CLICK_TOLERANCE_PX = 14;

interface ServiceCarouselProps {
  areas: readonly ServiceArea[];
  hint: string;
}

/**
 * Carrossel 3D das áreas de atuação.
 *
 * Os cards ficam distribuídos num anel; o giro é controlado por arraste,
 * setas do teclado, botões e autoplay. A rotação vive num ref e é aplicada
 * diretamente ao DOM para não re-renderizar a cada quadro — o React cuida
 * apenas do índice ativo, que dirige estado visual e acessibilidade.
 */
export function ServiceCarousel({ areas, hint }: ServiceCarouselProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotationRef = useRef(0);
  const radiusRef = useRef(360);
  const draggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const count = areas.length;
  const stepDegrees = 360 / count;

  const applyRing = useCallback((animate: boolean) => {
    const ring = ringRef.current;
    if (!ring) return;
    ring.style.transition = animate
      ? "transform .75s cubic-bezier(.16,.84,.32,1)"
      : "none";
    ring.style.transform = `translateZ(${-radiusRef.current}px) rotateY(${rotationRef.current.toFixed(2)}deg)`;
  }, []);

  /** Reorienta cada card para encarar o observador e destaca o card frontal. */
  const applyFacing = useCallback(() => {
    const rotation = rotationRef.current;
    const index = ((Math.round(-rotation / stepDegrees) % count) + count) % count;
    setActiveIndex(index);

    const isCompact = (stageRef.current?.clientWidth || 1000) < 700;

    slotRefs.current.forEach((slot, slotIndex) => {
      const card = slot?.querySelector<HTMLElement>("[data-card]");
      if (!card) return;

      const isActive = slotIndex === index;
      const facing = `rotateY(${(-(rotation + slotIndex * stepDegrees)).toFixed(2)}deg) `;

      card.style.transition = draggingRef.current
        ? "border-color .45s ease, box-shadow .45s ease, opacity .45s ease"
        : "border-color .45s ease, box-shadow .45s ease, opacity .45s ease, filter .45s ease, transform .45s cubic-bezier(.22,.61,.36,1)";
      card.style.transform = facing + (isActive ? (isCompact ? "translateY(-4px) scale(1)" : "translateY(-6px) scale(1.03)") : (isCompact ? "scale(0.85)" : "scale(0.92)"));
      card.style.opacity = isActive ? "1" : isCompact ? "0.2" : "0.45";
      card.style.filter = isActive ? "none" : isCompact ? "blur(1.5px)" : "blur(0.5px)";
      card.style.borderColor = isActive ? "rgb(53 217 255 / 0.52)" : "rgb(53 217 255 / 0.14)";
      card.style.boxShadow = isActive
        ? "0 26px 70px rgb(3 10 24 / 0.8), 0 0 58px rgb(22 140 255 / 0.24), inset 0 1px 0 rgb(255 255 255 / 0.10)"
        : "none";
      card.tabIndex = isActive ? 0 : -1;
    });
  }, [count, stepDegrees]);

  /** Recalcula raio e largura dos cards conforme o espaço disponível. */
  const layout = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const width = stage.clientWidth || 1000;
    const isCompact = width < 700;
    const cardWidth = Math.min(330, Math.round(width * (isCompact ? 0.84 : 0.32)) || 330);

    radiusRef.current = Math.round(
      Math.max(isCompact ? 175 : 300, Math.min(400, width * (isCompact ? 0.46 : 0.33))),
    );
    stage.style.perspective = `${isCompact ? 950 : 1500}px`;

    slotRefs.current.forEach((slot, index) => {
      if (!slot) return;
      slot.style.width = `${cardWidth}px`;
      slot.style.left = `${-cardWidth / 2}px`;
      slot.style.transform = `rotateY(${index * stepDegrees}deg) translateZ(${radiusRef.current}px)`;
    });

    applyRing(false);
    applyFacing();
  }, [applyFacing, applyRing, stepDegrees]);

  const goTo = useCallback(
    (index: number) => {
      rotationRef.current = -index * stepDegrees;
      applyRing(true);
      applyFacing();
    },
    [applyFacing, applyRing, stepDegrees],
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      rotationRef.current =
        Math.round(rotationRef.current / stepDegrees) * stepDegrees -
        direction * stepDegrees;
      applyRing(true);
      applyFacing();
    },
    [applyFacing, applyRing, stepDegrees],
  );

  useEffect(() => {
    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [layout]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      const stage = stageRef.current;
      if (!stage || pausedRef.current || document.hidden) return;

      // Não gira fora da viewport: economiza trabalho e evita saltos ao voltar.
      const rect = stage.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      step(1);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, step]);

  useEffect(
    () => () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    },
    [],
  );

  const pointerDownRef = useRef(false);
  const dragStartRef = useRef({ x: 0, rotation: 0, lastX: 0, lastTime: 0, velocity: 0 });

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;

    pointerDownRef.current = true;
    draggingRef.current = false;
    pausedRef.current = true;
    dragDistanceRef.current = 0;
    dragStartRef.current = {
      x: event.clientX,
      rotation: rotationRef.current,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current) return;

    const drag = dragStartRef.current;
    const deltaX = event.clientX - drag.x;
    dragDistanceRef.current = Math.abs(deltaX);

    if (!draggingRef.current && dragDistanceRef.current > 8) {
      draggingRef.current = true;
      try {
        event.currentTarget.setPointerCapture?.(event.pointerId);
      } catch {
        // Ignora caso pointer capture não seja suportado
      }
    }

    if (!draggingRef.current) return;

    const now = performance.now();
    if (now > drag.lastTime) {
      drag.velocity = (event.clientX - drag.lastX) / (now - drag.lastTime);
      drag.lastTime = now;
      drag.lastX = event.clientX;
    }

    rotationRef.current = drag.rotation + deltaX * DRAG_SENSITIVITY;
    applyRing(false);
    applyFacing();
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current) return;
    pointerDownRef.current = false;

    try {
      if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Ignora falha de liberação de captura
    }

    if (draggingRef.current) {
      draggingRef.current = false;
      const { velocity } = dragStartRef.current;
      rotationRef.current =
        Math.round((rotationRef.current + velocity * FLICK_WEIGHT) / stepDegrees) *
        stepDegrees;
      applyRing(true);
      applyFacing();
    }

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
      dragDistanceRef.current = 0;
    }, RESUME_DELAY_MS);
  };

  /** Um card fora do centro (ou o fim de um arraste) gira em vez de navegar. */
  const onCardClick = (index: number) => (event: React.MouseEvent) => {
    if (index !== activeIndex) {
      event.preventDefault();
      goTo(index);
      return;
    }
    if (dragDistanceRef.current > CLICK_TOLERANCE_PX) {
      event.preventDefault();
    }
  };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="animate-glowpan pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[min(760px,110%)] -translate-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgb(22_140_255/0.20)_0%,rgb(23_78_255/0.09)_38%,rgb(5_10_20/0)_70%)]"
      />

      <div
        ref={stageRef}
        role="group"
        aria-roledescription="carrossel"
        aria-label="Áreas de atuação"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onFocus={() => {
          pausedRef.current = true;
        }}
        onBlur={() => {
          pausedRef.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          }
        }}
        className="relative h-[430px] cursor-grab touch-pan-y overflow-hidden rounded-[20px] outline-offset-4 active:cursor-grabbing [perspective:1500px]"
      >
        <div
          ref={ringRef}
          className="absolute top-1/2 left-1/2 size-0 [transform-style:preserve-3d] will-change-transform"
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.href}
                ref={(node) => {
                  slotRefs.current[index] = node;
                }}
                // Largura/posição são recalculadas por `layout()`; os valores
                // aqui evitam cards de largura zero no primeiro paint.
                className="absolute -top-[196px] -left-[165px] h-[392px] w-[330px] [transform-style:preserve-3d]"
              >
                <Link
                  data-card
                  href={area.href}
                  onClick={onCardClick(index)}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className="relative flex h-full flex-col overflow-hidden rounded-[18px] border border-accent/14 bg-[linear-gradient(180deg,#0D131D,#070B12)] px-7.5 pt-8 pb-7 text-inherit"
                >
                  {/* Brilho de canto e varredura periódica */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-1/2 -left-[20%] h-[110%] w-[110%] bg-[radial-gradient(circle_at_32%_30%,rgb(22_140_255/0.12),transparent_62%)]"
                  />
                  <span
                    aria-hidden="true"
                    className="animate-scan pointer-events-none absolute -top-[40%] left-0 h-[180%] w-[34%] bg-[linear-gradient(100deg,transparent_0%,rgb(154_235_255/0.05)_40%,rgb(154_235_255/0.12)_50%,rgb(154_235_255/0.05)_60%,transparent_100%)]"
                  />

                  <span className="relative mb-6.5 flex size-[46px] items-center justify-center rounded-xl border border-accent/22 bg-panel-2/80 text-accent">
                    <Icon size={22} strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <h3 className="relative m-0 mb-3 font-display text-[1.35rem]/[1.25] font-semibold tracking-[-0.02em] text-fg-bright">
                    {area.title}
                  </h3>
                  <p className="relative m-0 mb-6 text-pretty text-[0.965rem]/[1.7] font-light text-muted-2">
                    {area.description}
                  </p>
                  <span className="relative mt-auto inline-flex items-center gap-2 text-[0.9rem]/none font-medium text-accent">
                    {area.ctaLabel}
                    <ArrowRight size={15} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="animate-glowpan pointer-events-none absolute bottom-1 left-1/2 h-[54px] w-[min(360px,70%)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgb(53_217_255/0.20)_0%,rgb(22_140_255/0.08)_52%,transparent_74%)] blur-[7px]"
        />
      </div>

      <div className="mt-8.5 flex items-center justify-center gap-4.5">
        <button
          type="button"
          aria-label="Área anterior"
          onClick={() => step(-1)}
          className="flex size-[46px] items-center justify-center rounded-full border border-accent/26 bg-panel/70 text-fg-strong transition-[background-color,border-color,transform] duration-250 hover:-translate-y-0.5 hover:border-accent/55 hover:bg-surface-hi/85"
        >
          <ChevronLeft size={17} strokeWidth={1.6} aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2.5">
          {areas.map((area, index) => (
            <button
              key={area.href}
              type="button"
              aria-label={`Ir para ${area.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
              className={cn(
                "size-[9px] rounded-full transition-[background-color,transform] duration-300",
                index === activeIndex ? "scale-135 bg-accent" : "bg-accent/28",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Próxima área"
          onClick={() => step(1)}
          className="flex size-[46px] items-center justify-center rounded-full border border-accent/26 bg-panel/70 text-fg-strong transition-[background-color,border-color,transform] duration-250 hover:-translate-y-0.5 hover:border-accent/55 hover:bg-surface-hi/85"
        >
          <ChevronRight size={17} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4.5 text-center text-[12.5px]/[1.5] font-normal text-faint">{hint}</p>
    </div>
  );
}
