import { Section } from "@/components/layout";
import { ProspectFlow } from "@/components/features";
import { Reveal, SectionHeading } from "@/components/ui";
import {
  destinationPanel,
  flowSection,
  HIGHLIGHTED_STEP_INDEX,
  leadStatuses,
  prospectSteps,
  qualificationQuestions,
} from "@/config/content/prospect";
import { cn } from "@/lib/utils";

/** Perguntas que a IA faz na etapa de pré-qualificação. */
function QualificationQuestions() {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {qualificationQuestions.map((question) => (
        <span
          key={question}
          className="inline-flex items-center gap-1.5 rounded-lg border border-accent/22 bg-accent/8 px-2.5 py-1 font-mono text-[0.76rem] font-medium text-accent-soft shadow-[0_0_8px_rgb(53_217_255/0.1)] transition-colors hover:border-accent/40 hover:bg-accent/14"
        >
          <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
          {question}
        </span>
      ))}
    </div>
  );
}

/** Painel de destino: a progressão de status do lead até estar pronto para fechar. */
function DestinationPanel() {
  return (
    <div className="relative mx-auto max-w-[1040px] px-3 sm:px-6">
      {/* Cauda que liga o último passo do fluxo ao painel com alinhamento milimétrico */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative left-6 sm:left-8 h-[clamp(56px,7vw,84px)] w-px bg-[linear-gradient(180deg,rgb(22_140_255/0.55),rgb(53_217_255/0.2))] lg:left-1/2 lg:-translate-x-1/2"
      >
        <span className="absolute -bottom-1 -left-[4px] size-[9px] rounded-full bg-accent shadow-[0_0_14px_4px_rgb(53_217_255/0.7)]" />
      </div>

      <Reveal className="relative w-full overflow-hidden rounded-[22px] border border-accent/30 bg-[linear-gradient(140deg,rgb(16_24_38/0.88),rgb(9_12_17/0.72))] p-[clamp(28px,4vw,48px)] text-center">
        <div
          aria-hidden="true"
          className="animate-glowpan pointer-events-none absolute inset-0 bg-[radial-gradient(620px_280px_at_50%_0%,rgb(53_217_255/0.18),transparent_72%)]"
          style={{ animationDuration: "10s" }}
        />

        <div className="relative flex flex-col items-center gap-5.5">
          <span className="text-[11.5px]/none font-medium tracking-[0.16em] text-accent uppercase">
            {destinationPanel.eyebrow}
          </span>
          <h3 className="m-0 max-w-[620px] font-display text-[clamp(1.5rem,2.8vw,2.1rem)]/[1.2] font-semibold tracking-[-0.028em] text-balance text-white">
            {destinationPanel.title}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5">
            {leadStatuses.map((status, index) => (
              <span key={status.label} className="contents">
                <span
                  className={cn(
                    "rounded-full border bg-panel-4/75 px-4 py-2.25 text-[0.84rem]/[1.2] font-medium",
                    status.accent === "amber"
                      ? "animate-status-amber border-amber/30 text-amber-soft"
                      : "animate-status border-accent/22 text-[#AEB9C6]",
                  )}
                  style={{ animationDelay: `${index * 0.9}s` }}
                >
                  {status.label}
                </span>
                {index < leadStatuses.length - 1 ? (
                  <span aria-hidden="true" className="text-[0.9rem]/none text-accent opacity-60">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/** Seção "Como Funciona": fluxo em S de 6 etapas e painel de destino. */
export function FlowSection() {
  return (
    <Section id="como-funciona">
      <SectionHeading
        eyebrow={flowSection.eyebrow}
        title={flowSection.title}
        className="mb-[clamp(48px,6vw,76px)]"
      />

      <ProspectFlow
        steps={prospectSteps}
        highlightedIndex={HIGHLIGHTED_STEP_INDEX}
        highlightContent={<QualificationQuestions />}
      />

      <DestinationPanel />
    </Section>
  );
}
