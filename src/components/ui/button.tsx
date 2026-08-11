import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outlineLight";
export type ButtonSize = "sm" | "md" | "lg";

/** Gradiente do CTA principal, idêntico em todas as páginas. */
export const CTA_GRADIENT =
  "bg-[linear-gradient(100deg,#174EFF_0%,#168CFF_52%,#35D9FF_100%)]";

const base =
  "inline-flex items-center justify-center gap-2.5 font-medium transition-[transform,box-shadow,border-color,background-color,color] duration-250 ease-out-solint";

const variants: Record<ButtonVariant, string> = {
  // CTA principal: gradiente azul→ciano sobre fundo escuro.
  primary: cn(
    "rounded-xl text-[#071018] shadow-[0_10px_34px_rgb(22_140_255/0.30)]",
    CTA_GRADIENT,
    "hover:-translate-y-[3px] hover:text-[#071018] hover:shadow-[0_18px_46px_rgb(53_217_255/0.42)]",
  ),
  // Ação secundária sobre fundo escuro.
  secondary:
    "rounded-xl border border-accent/25 bg-panel/55 text-fg-strong hover:-translate-y-[3px] hover:border-accent/55 hover:bg-surface-hi/75 hover:text-white",
  // Ação sobre as faixas claras (#F4F7FB / branco).
  outlineLight:
    "rounded-[10px] border border-blue-deep/30 text-blue-deep hover:border-blue-deep/55 hover:bg-blue-deep/8 hover:text-[#0F3FCC]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-[11px] text-[0.88rem]/none",
  md: "px-7 py-4 text-[15px]/none",
  lg: "px-9 py-[18px] text-[15.5px]/none",
};

/** Ajustes finos por combinação variante+tamanho (sombra maior no CTA de fecho). */
const emphasis: Partial<Record<ButtonVariant, Partial<Record<ButtonSize, string>>>> = {
  primary: {
    lg: "rounded-[13px] shadow-[0_12px_40px_rgb(22_140_255/0.34)] hover:shadow-[0_20px_54px_rgb(53_217_255/0.46)]",
  },
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Rotas internas usam `next/link`; âncoras, mailto e tel usam `<a>` nativo. */
function isRoutable(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

/**
 * CTA único do site, em três variantes. Renderiza `<Link>`, `<a>` ou `<button>`
 * conforme as props, mantendo a mesma aparência.
 */
export function Button(props: ButtonProps) {
  const classes = cn(
    base,
    variants[props.variant ?? "primary"],
    sizes[props.size ?? "md"],
    emphasis[props.variant ?? "primary"]?.[props.size ?? "md"],
    props.className,
  );

  if (props.href !== undefined) {
    const { href, variant, size, className, children, ...rest } = props;

    if (isRoutable(href)) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const target = rest.target ?? (isExternal ? "_blank" : undefined);
    const rel = rest.rel ?? (isExternal ? "noopener noreferrer" : undefined);

    return (
      <a href={href} target={target} rel={rel} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant, size, className, children, ...rest } = props;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
