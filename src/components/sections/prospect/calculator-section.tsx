import { Section } from "@/components/layout";
import { LeadCalculator } from "@/components/features";
import { SectionHeading } from "@/components/ui";
import {
  calculatorCta,
  calculatorDefaults,
  calculatorFields,
  calculatorPlans,
  calculatorSection,
  calculatorSteps,
  planRecommendation,
} from "@/config/content/prospect-calculator";

/**
 * Seção "Calculadora de Resultados": wizard de 4 etapas que traduz a meta de
 * vendas do visitante em volume de leads e investimento.
 */
export function CalculatorSection() {
  return (
    <Section id="calculadora" spacing="compact">
      <SectionHeading
        eyebrow={calculatorSection.eyebrow}
        title={calculatorSection.title}
        description={calculatorSection.description}
        className="mb-[clamp(32px,4vw,52px)]"
      />

      <LeadCalculator
        steps={calculatorSteps}
        metricFields={calculatorFields.metrics}
        costFields={calculatorFields.costs}
        keepTeamCopy={calculatorFields.keepTeam}
        goalCopy={calculatorFields.goal}
        plans={calculatorPlans}
        planByTeam={planRecommendation}
        defaults={calculatorDefaults}
        cta={calculatorCta}
      />
    </Section>
  );
}
