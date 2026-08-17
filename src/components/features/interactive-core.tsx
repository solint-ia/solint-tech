"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks";

/** Pontos luminosos ancorados em cada anel orbital. */
const RING_A_DOTS = [
  { left: "calc(100% - 5px)", top: "calc(50% - 5px)", size: 10, color: "#35D9FF", glow: "0 0 14px 3px rgb(53 217 255 / 0.55)" },
  { left: "calc(6.7% - 4px)", top: "calc(75% - 4px)", size: 8, color: "#168CFF", glow: "0 0 12px 3px rgb(22 140 255 / 0.5)" },
  { left: "calc(25% - 3px)", top: "calc(6.7% - 3px)", size: 6, color: "#9CD9FF", glow: "0 0 10px 2px rgb(156 217 255 / 0.45)" },
] as const;

const RING_B_DOTS = [
  { left: "calc(50% - 5px)", top: "-5px", size: 10, color: "#35D9FF", glow: "0 0 14px 3px rgb(53 217 255 / 0.5)" },
  { left: "calc(93.3% - 4px)", top: "calc(75% - 4px)", size: 8, color: "#174EFF", glow: "0 0 12px 3px rgb(23 78 255 / 0.55)" },
] as const;

const RING_C_DOTS = [
  { left: "calc(100% - 4px)", top: "calc(50% - 4px)", size: 8, color: "#8AE3FF", glow: "0 0 12px 3px rgb(138 227 255 / 0.5)" },
  { left: "calc(0% - 3px)", top: "calc(50% - 3px)", size: 6, color: "#168CFF", glow: "0 0 10px 2px rgb(22 140 255 / 0.5)" },
] as const;

const FLOATING_DOTS = [
  { left: "12%", top: "28%", size: 3, color: "#8AE3FF", duration: 11, delay: 0 },
  { left: "82%", top: "22%", size: 2, color: "#8AE3FF", duration: 13, delay: 0.8 },
  { left: "88%", top: "64%", size: 3, color: "#5FB6FF", duration: 9, delay: 1.6 },
  { left: "20%", top: "78%", size: 2, color: "#8AE3FF", duration: 15, delay: 0.4 },
  { left: "52%", top: "8%", size: 2, color: "#B7E9FF", duration: 12, delay: 2.2 },
  { left: "34%", top: "92%", size: 3, color: "#5FB6FF", duration: 10, delay: 1.1 },
  { left: "6%", top: "52%", size: 2, color: "#8AE3FF", duration: 14, delay: 3 },
  { left: "70%", top: "88%", size: 2, color: "#B7E9FF", duration: 12.5, delay: 1.9 },
] as const;

/** Abaixo desta largura o tilt por mouse é desativado. */
const TILT_MIN_WIDTH = 900;

function OrbitDot({
  left,
  top,
  size,
  color,
  glow,
}: {
  left: string;
  top: string;
  size: number;
  color: string;
  glow: string;
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{ left, top, width: size, height: size, background: color, boxShadow: glow }}
    />
  );
}

export interface InteractiveCoreProps {
  src?: string;
  alt?: string;
  priority?: boolean;
}

/**
 * Núcleo 3D animado do hero: anéis orbitais, treliça giratória e um
 * centro pulsante, com tilt sutil ligado ao cursor e ao scroll.
 *
 * Puramente decorativo (`aria-hidden`) e sem interação por ponteiro.
 */
export function InteractiveCore({
  src = "/media/brain-core.png",
  alt = "Solint 3D Holographic Core",
  priority = true,
}: InteractiveCoreProps = {}) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = tiltRef.current;
    if (!element || prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let scrollProgress = 0;
    let frame: number | null = null;

    const apply = () => {
      frame = null;
      const rotateX = (mouseY * -6 + scrollProgress * 3).toFixed(2);
      const rotateY = (mouseX * 8).toFixed(2);
      const translateX = (mouseX * 10).toFixed(1);
      const translateY = (mouseY * 8 - scrollProgress * 14).toFixed(1);
      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px,${translateY}px,0)`;
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(apply);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (window.innerWidth < TILT_MIN_WIDTH) return;
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      schedule();
    };

    const onScroll = () => {
      const rect = element.getBoundingClientRect();
      const offset =
        (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      scrollProgress = Math.max(-1, Math.min(1, offset));
      schedule();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[640px] select-none pointer-events-none"
    >
      <div
        ref={tiltRef}
        className="absolute inset-0 [perspective:1100px] [transform-style:preserve-3d] transition-transform duration-500 ease-out-solint will-change-transform"
      >
        {/* Halo de fundo */}
        <div className="animate-breathe absolute -inset-[14%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgb(22_140_255/0.30)_0%,rgb(23_78_255/0.12)_38%,rgb(5_10_20/0)_68%)] blur-[6px]" />

        {/* Anéis orbitais */}
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          <div className="animate-ring-a absolute inset-[6%] rounded-full border border-accent/20 [transform-style:preserve-3d]">
            {RING_A_DOTS.map((dot) => (
              <OrbitDot key={dot.left + dot.top} {...dot} />
            ))}
          </div>
          <div className="animate-ring-b absolute inset-[15%] rounded-full border border-blue/24 [transform-style:preserve-3d]">
            {RING_B_DOTS.map((dot) => (
              <OrbitDot key={dot.left + dot.top} {...dot} />
            ))}
          </div>
          <div className="animate-ring-c absolute inset-[24%] rounded-full border border-accent/16 [transform-style:preserve-3d]">
            {RING_C_DOTS.map((dot) => (
              <OrbitDot key={dot.left + dot.top} {...dot} />
            ))}
          </div>
        </div>

        {/* Treliça geométrica */}
        <svg viewBox="0 0 400 400" className="animate-lattice absolute inset-[18%] size-[64%] overflow-visible">
          <defs>
            <linearGradient id="core-lattice" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#35D9FF" stopOpacity=".85" />
              <stop offset="100%" stopColor="#174EFF" stopOpacity=".35" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#core-lattice)" strokeWidth="1.1">
            <polygon points="200,40 338,120 338,280 200,360 62,280 62,120" strokeOpacity=".55" />
            <polygon points="200,90 320,200 200,310 80,200" strokeOpacity=".4" />
            <path d="M200,40 L200,360 M62,120 L338,280 M338,120 L62,280" strokeOpacity=".45" />
            <path d="M200,40 L338,280 L62,280 Z" strokeOpacity=".3" />
            <path d="M200,360 L62,120 L338,120 Z" strokeOpacity=".3" />
          </g>
          <g fill="#35D9FF">
            <circle cx="200" cy="40" r="3.2" opacity=".9" />
            <circle cx="338" cy="120" r="2.6" opacity=".7" />
            <circle cx="338" cy="280" r="2.6" opacity=".7" />
            <circle cx="200" cy="360" r="3.2" opacity=".9" />
            <circle cx="62" cy="280" r="2.6" opacity=".7" />
            <circle cx="62" cy="120" r="2.6" opacity=".7" />
          </g>
        </svg>

        {/* Órbita tracejada externa */}
        <svg viewBox="0 0 400 400" className="animate-lattice-rev absolute inset-[10%] size-[80%] overflow-visible">
          <g
            fill="none"
            stroke="#35D9FF"
            strokeWidth="1"
            strokeOpacity=".38"
            strokeDasharray="6 10"
            className="animate-dash"
          >
            <circle cx="200" cy="200" r="192" />
          </g>
        </svg>

        {/* Núcleo 3D: Imagem Holográfica */}
        <div className="absolute top-1/2 left-1/2 size-[74%] -translate-1/2 [transform-style:preserve-3d] flex items-center justify-center pointer-events-none z-10">
          {/* Halo volumétrico central de energia */}
          <div className="animate-breathe absolute size-[72%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgb(53_217_255/0.35)_0%,rgb(22_140_255/0.18)_45%,transparent_70%)] blur-xl" />

          {/* Imagem 3D animada */}
          <div className="relative size-full animate-float">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 900px) 100vw, 450px"
              className="object-contain drop-shadow-[0_0_30px_rgb(53_217_255/0.7)]"
              priority={priority}
            />
          </div>
        </div>

        {/* Poeira estelar */}
        <div className="absolute inset-0">
          {FLOATING_DOTS.map((dot) => (
            <span
              key={dot.left + dot.top}
              className="animate-float absolute rounded-full"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
                background: dot.color,
                animationDuration: `${dot.duration}s`,
                animationDelay: `${dot.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
