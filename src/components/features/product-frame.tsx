import Image from "next/image";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductFrameProps {
  src: string;
  alt: string;
  /** Endereço exibido na barra do navegador. */
  url: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Captura de tela dentro de uma janela de navegador escura, com borda
 * luminosa da identidade. Puramente apresentacional.
 */
export function ProductFrame({
  src,
  alt,
  url,
  width,
  height,
  priority = false,
  sizes = "(min-width: 1280px) 1180px, 94vw",
  className,
}: ProductFrameProps) {
  return (
    <figure
      className={cn(
        "relative m-0 overflow-hidden rounded-[14px] border border-accent/22 bg-panel-4 shadow-[0_40px_120px_rgb(2_8_18/0.75),0_0_0_1px_rgb(53_217_255/0.04),0_0_80px_rgb(22_140_255/0.16)]",
        className,
      )}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-accent/10 bg-[#0A0F18] px-3.5 sm:h-9">
        <span className="size-2.5 rounded-full bg-[#FF6B67]/85" />
        <span className="size-2.5 rounded-full bg-[#F7C94C]/85" />
        <span className="size-2.5 rounded-full bg-[#45CC67]/85" />
        <span className="mx-auto hidden items-center gap-1.5 rounded-md border border-accent/10 bg-ink/70 px-3 py-[3px] font-mono text-[10.5px]/none text-steel-2 sm:inline-flex">
          <Lock size={9} aria-hidden="true" />
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </figure>
  );
}
