import { cn } from "@/lib/utils";

interface SectionMarkerProps {
  label: string;
  /** `hero` desce o marcador para não colidir com o header fixo. */
  position?: "default" | "hero";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Marcador monoespaçado no canto superior direito da seção ("/01 — início").
 * Decorativo: fica fora da árvore de acessibilidade.
 */
export function SectionMarker({
  label,
  position = "default",
  tone = "dark",
  className,
}: SectionMarkerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute right-6 sm:right-8 z-2 font-mono text-[10.5px] sm:text-[11px] tracking-[0.14em]",
        position === "hero" ? "top-28 sm:top-32 lg:top-28" : "top-8 sm:top-10",
        tone === "light" ? "text-[#8A97A8]" : "text-marker",
        className,
      )}
    >
      {label}
    </span>
  );
}
