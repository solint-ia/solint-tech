import { ClosingCta } from "@/components/sections/closing-cta";
import { contactSection } from "@/config/content/home";
import { siteConfig } from "@/config/site";

/** Partículas discretas exclusivas do fechamento da home. */
const DRIFTING_DOTS = [
  { left: "18%", top: "24%", size: 3, color: "#8AE3FF", duration: 13, delay: 0 },
  { left: "76%", top: "32%", size: 2, color: "#5FB6FF", duration: 16, delay: 1.4 },
  { left: "62%", top: "74%", size: 3, color: "#8AE3FF", duration: 12, delay: 2.6 },
  { left: "30%", top: "80%", size: 2, color: "#B7E9FF", duration: 15, delay: 0.7 },
] as const;

/** Fechamento da home: convite ao contato por e-mail. */
export function ContactSection() {
  return (
    <ClosingCta
      id="contato"
      marker={contactSection.eyebrow}
      title={contactSection.title}
      description={contactSection.description}
      ctaLabel={contactSection.ctaLabel}
      ctaHref={siteConfig.contact.whatsappUrl}
      note={siteConfig.contact.responseTime}
      extraBackdrop={
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {DRIFTING_DOTS.map((dot) => (
            <span
              key={dot.left + dot.top}
              className="animate-drift absolute rounded-full"
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
      }
    />
  );
}
