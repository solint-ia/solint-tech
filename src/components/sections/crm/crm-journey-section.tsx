import { Section } from "@/components/layout";
import { Reveal, SectionHeading } from "@/components/ui";
import { crmJourney, crmJourneySection } from "@/config/content/crm";
import { stepLabel } from "@/lib/utils";

/**
 * Faixa clara da página (1x): a jornada do cliente em 5 passos, numa linha
 * contínua no desktop e em coluna com rail à esquerda no mobile.
 */
export function CrmJourneySection() {
  return (
    <Section id="jornada" tone="light">
      <SectionHeading
        tone="light"
        eyebrow={crmJourneySection.eyebrow}
        title={crmJourneySection.title}
        className="mb-[clamp(40px,5vw,64px)]"
      />

      <ol className="relative m-0 grid list-none grid-cols-1 gap-0 p-0 lg:grid-cols-5 lg:gap-6">
        {/* Rail: vertical no mobile, horizontal no desktop */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[19px] w-px bg-[linear-gradient(180deg,#174EFF,#35D9FF)] opacity-35 lg:top-[19px] lg:right-[6%] lg:bottom-auto lg:left-[2%] lg:h-px lg:w-auto lg:bg-[linear-gradient(90deg,#174EFF,#35D9FF)]"
        />
        {crmJourney.map((step, index) => {
          const isLast = index === crmJourney.length - 1;
          return (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.08}
              className="relative grid grid-cols-[40px_1fr] gap-4 pb-8 last:pb-0 lg:block lg:pb-0"
            >
              <span
                className={
                  isLast
                    ? "relative z-1 flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#174EFF,#168CFF)] font-mono text-[12px] font-semibold text-white shadow-[0_8px_22px_rgb(23_78_255/0.35)]"
                    : "relative z-1 flex size-10 items-center justify-center rounded-full border border-blue-deep/25 bg-white font-mono text-[12px] font-semibold text-blue-deep shadow-[0_6px_16px_rgb(10_20_35/0.06)]"
                }
              >
                {stepLabel(index)}
              </span>
              <div className="lg:mt-5">
                <h3 className="m-0 font-display text-[1.06rem]/[1.3] font-semibold tracking-tight text-paper-ink">
                  {step.title}
                </h3>
                <p className="m-0 mt-2 text-[0.9rem]/[1.6] text-paper-body">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
