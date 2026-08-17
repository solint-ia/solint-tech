import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** `light` inverte as cores para as faixas claras (#F4F7FB). */
  tone?: "dark" | "light";
  /** `sm` para títulos de apoio; `md` é o padrão das seções principais. */
  size?: "sm" | "md";
  /** Renderiza a nota como monoespaçada — usada nos avisos de placeholder. */
  descriptionAsNote?: boolean;
  className?: string;
}

/** Bloco de abertura de seção: eyebrow, título e texto de apoio. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  size = "md",
  descriptionAsNote = false,
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <Reveal className={cn("max-w-[720px]", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "mb-3.5 sm:mb-5 block text-[11px] sm:text-xs/[1.4] font-medium tracking-[0.16em] uppercase",
            isLight ? "text-blue-deep" : "text-accent",
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          "m-0 font-display font-semibold text-balance",
          size === "md"
            ? "text-[clamp(1.9rem,3.6vw,2.8rem)]/[1.14] tracking-[-0.03em]"
            : "text-[clamp(1.7rem,3.2vw,2.4rem)]/[1.18] tracking-[-0.03em]",
          isLight ? "text-paper-ink" : "text-white",
          description ? "mb-4" : undefined,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "m-0 text-pretty",
            descriptionAsNote
              ? "font-mono text-xs/[1.5] tracking-[0.03em]"
              : "text-[clamp(1rem,1.2vw,1.1rem)]/[1.65] font-light",
            isLight ? (descriptionAsNote ? "text-paper-muted" : "text-paper-body") : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
