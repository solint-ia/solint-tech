import { Section } from "@/components/layout";
import { Button, Reveal, SectionMarker, SocialLinksBar } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ClosingCtaProps {
  id?: string;
  marker?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  /** Nota curta abaixo do CTA (ex.: prazo de resposta). */
  note?: string;
  /** Partículas e malha de pontos extras, usadas em páginas específicas. */
  extraBackdrop?: React.ReactNode;
  className?: string;
}

/**
 * Seção de fechamento compartilhada por todas as páginas: halo radial pulsante,
 * título centralizado e um único CTA.
 */
export function ClosingCta({
  id,
  marker,
  title,
  description,
  ctaLabel,
  ctaHref,
  note,
  extraBackdrop,
  className,
}: ClosingCtaProps) {
  return (
    <Section
      id={id}
      spacing="wide"
      clip
      className={cn(className)}
      backdrop={
        <>
          {marker ? <SectionMarker label={marker} /> : null}
          <div
            aria-hidden="true"
            className="animate-glowpan pointer-events-none absolute top-1/2 left-1/2 h-[min(1100px,140%)] w-[min(1100px,140%)] -translate-1/2 bg-[radial-gradient(circle_at_50%_50%,rgb(22_140_255/0.20)_0%,rgb(23_78_255/0.10)_34%,rgb(5_10_20/0)_66%)]"
            style={{ animationDuration: "11s" }}
          />
          {extraBackdrop}
        </>
      }
      containerClassName="max-w-[820px] text-center"
    >
      <Reveal>
        <h2 className="m-0 mb-5.5 font-display text-[clamp(1.9rem,4.4vw,3.3rem)]/[1.14] font-semibold tracking-[-0.035em] text-balance text-white">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-[560px] text-pretty text-[clamp(1rem,1.3vw,1.16rem)]/[1.65] font-light text-muted">
          {description}
        </p>
        <Button href={ctaHref} size="lg">
          {ctaLabel}
        </Button>
        {note ? (
          <p className="mt-6 mb-0 text-[13.5px]/[1.5] font-normal text-marker-3">{note}</p>
        ) : null}

        {/* Canais sociais com ícones oficiais na paleta do site */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="font-mono text-[11px]/none font-semibold tracking-[0.16em] text-accent/80 uppercase">
            Ou conecte-se pelos nossos canais
          </span>
          <SocialLinksBar variant="pills" className="justify-center" />
        </div>
      </Reveal>
    </Section>
  );
}
