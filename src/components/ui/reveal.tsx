"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Elemento renderizado. Use para preservar a semântica (section, article…). */
  as?: ElementType;
  /** Direção de onde o elemento surge ("left" = vem da esquerda para a direita). */
  direction?: RevealDirection;
  /** Distância do deslocamento em pixels (padrão 24). */
  distance?: number;
  /** Atraso em segundos, para escalonar itens de uma mesma linha. */
  delay?: number;
  /** Duração da transição em segundos (padrão 0.7s). */
  duration?: number;
  className?: string;
}

/**
 * Revela o conteúdo ao entrar na viewport, uma única vez.
 * Suporta direção de surgimento configurável (ex.: "left" para vir da esquerda para a direita).
 *
 * Framer Motion já respeita `prefers-reduced-motion` quando a redução está
 * ativa no sistema, e o `globals.css` neutraliza o restante das animações.
 */
export function Reveal({
  children,
  as = "div",
  direction = "up",
  distance = 28,
  delay = 0,
  duration = 0.7,
  className,
  ...props
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const getInitialOffset = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.08 }}
      transition={{ duration, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
