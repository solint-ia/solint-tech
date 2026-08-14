"use client";

import { useCallback, useMemo, useState } from "react";
import {
  getBaselineProspectLeads,
  getConversionRates,
  getCostPerSale,
  getInvestment,
  getRequiredVolume,
  recommendPlan,
} from "@/lib/prospect-calculator";
import type { CalculatorPlan } from "@/types";

export type MetricKey = "leads" | "meetings" | "sales";
export type CostKey = "agency" | "traffic" | "team";

/** Número de etapas do wizard (métricas, custos, meta, resultado). */
export const CALCULATOR_STEP_COUNT = 4;

interface CalculatorDefaults {
  leads: number;
  meetings: number;
  sales: number;
  agency: number;
  traffic: number;
  team: number;
  keepTeam: boolean;
  goalMultiplier: number;
}

/** Plano sugerido conforme o visitante mantém ou não a equipe atual. */
interface TeamPlanRecommendation {
  withTeam: { planId: string };
  withoutTeam: { planId: string };
}

interface UseLeadCalculatorOptions {
  plans: readonly CalculatorPlan[];
  defaults: CalculatorDefaults;
  planByTeam: TeamPlanRecommendation;
}

/** Mantém só dígitos e evita zeros à esquerda; string vazia é permitida. */
function sanitize(raw: string): string {
  return raw.replace(/\D/g, "").replace(/^0+(?=\d)/, "").slice(0, 9);
}

function toNumber(value: string): number {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * Estado do wizard da calculadora de resultados: entradas em texto (para o
 * campo poder ficar vazio durante a digitação) e derivados memoizados vindos
 * de `lib/prospect-calculator`.
 */
export function useLeadCalculator({
  plans,
  defaults,
  planByTeam,
}: UseLeadCalculatorOptions) {
  /** Plano indicado para o estado atual do "manter equipe". */
  const planIdFor = useCallback(
    (keeping: boolean) =>
      keeping ? planByTeam.withTeam.planId : planByTeam.withoutTeam.planId,
    [planByTeam],
  );

  const [step, setStep] = useState(0);
  const [metrics, setMetrics] = useState<Record<MetricKey, string>>({
    leads: String(defaults.leads),
    meetings: String(defaults.meetings),
    sales: String(defaults.sales),
  });
  const [costs, setCosts] = useState<Record<CostKey, string>>({
    agency: String(defaults.agency),
    traffic: String(defaults.traffic),
    team: String(defaults.team),
  });
  const [keepTeam, setKeepTeamState] = useState(defaults.keepTeam);
  const [planId, setPlanId] = useState(
    () => planIdFor(defaults.keepTeam) || plans[0]?.id || "",
  );
  /** `null` = ainda derivado das vendas atuais; string = editado pelo visitante. */
  const [goalInput, setGoalInput] = useState<string | null>(null);

  const currentSales = toNumber(metrics.sales);
  const suggestedGoal = Math.max(1, currentSales * defaults.goalMultiplier);
  const goalValue = goalInput ?? String(suggestedGoal);

  /** Reuniões nunca passam de leads, nem vendas de reuniões (taxa > 100%). */
  const setMetric = useCallback((key: MetricKey, raw: string) => {
    setMetrics((previous) => {
      const next = { ...previous, [key]: sanitize(raw) };

      if (next.leads !== "" && next.meetings !== "") {
        const leads = toNumber(next.leads);
        if (toNumber(next.meetings) > leads) next.meetings = String(leads);
      }

      if (next.meetings !== "" && next.sales !== "") {
        const meetings = toNumber(next.meetings);
        if (toNumber(next.sales) > meetings) next.sales = String(meetings);
      }

      return next;
    });
  }, []);

  const setCost = useCallback((key: CostKey, raw: string) => {
    setCosts((previous) => ({ ...previous, [key]: sanitize(raw) }));
  }, []);

  const setGoal = useCallback((raw: string) => {
    setGoalInput(sanitize(raw));
  }, []);

  const next = useCallback(
    () => setStep((current) => Math.min(current + 1, CALCULATOR_STEP_COUNT - 1)),
    [],
  );
  const back = useCallback(() => setStep((current) => Math.max(current - 1, 0)), []);
  const goTo = useCallback(
    (target: number) => setStep(Math.min(Math.max(target, 0), CALCULATOR_STEP_COUNT - 1)),
    [],
  );

  const reset = useCallback(() => {
    setMetrics({
      leads: String(defaults.leads),
      meetings: String(defaults.meetings),
      sales: String(defaults.sales),
    });
    setCosts({
      agency: String(defaults.agency),
      traffic: String(defaults.traffic),
      team: String(defaults.team),
    });
    setKeepTeamState(defaults.keepTeam);
    setPlanId(planIdFor(defaults.keepTeam) || plans[0]?.id || "");
    setGoalInput(null);
    setStep(0);
  }, [defaults, plans, planIdFor]);

  const numericMetrics = useMemo(
    () => ({
      leads: toNumber(metrics.leads),
      meetings: toNumber(metrics.meetings),
      sales: toNumber(metrics.sales),
    }),
    [metrics],
  );

  const rates = useMemo(() => getConversionRates(numericMetrics), [numericMetrics]);

  const salesGoal = toNumber(goalValue);
  const volume = useMemo(() => getRequiredVolume(salesGoal, rates), [salesGoal, rates]);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === planId) ?? plans[0],
    [plans, planId],
  );

  const investment = useMemo(
    () =>
      getInvestment(
        {
          agency: toNumber(costs.agency),
          traffic: toNumber(costs.traffic),
          team: toNumber(costs.team),
          keepTeam,
        },
        selectedPlan,
      ),
    [costs, keepTeam, selectedPlan],
  );

  const costPerSale = useMemo(
    () => getCostPerSale(investment.currentTotal, numericMetrics.sales),
    [investment.currentTotal, numericMetrics.sales],
  );

  const baselineLeads = useMemo(
    () => getBaselineProspectLeads(numericMetrics.leads),
    [numericMetrics.leads],
  );

  /**
   * Créditos que o plano precisa cobrir: o maior entre repor o volume atual de
   * leads e alimentar a meta de vendas.
   */
  const requiredCredits = Math.max(baselineLeads, volume.prospectLeads);

  const recommendation = useMemo(
    () => recommendPlan(requiredCredits, plans),
    [requiredCredits, plans],
  );

  /**
   * Plano recomendado: o preferido pelo cenário de equipe, desde que cubra a
   * demanda de créditos. Créditos são restrição dura — quando o preferido não
   * atende, sobe para o menor plano que atende.
   */
  const preferredPlanId = planIdFor(keepTeam);
  const preferredPlan = plans.find((plan) => plan.id === preferredPlanId) ?? plans[0];
  const preferredCoversCredits = (preferredPlan?.credits ?? 0) >= requiredCredits;

  const recommendedPlan = preferredCoversCredits
    ? preferredPlan
    : (recommendation?.plan ?? preferredPlan);

  /** Por que este plano foi indicado: o cenário de equipe ou o volume de créditos. */
  const recommendationReason: "team" | "credits" | "beyondPlans" = preferredCoversCredits
    ? "team"
    : recommendation?.isEnough
      ? "credits"
      : "beyondPlans";

  /** Alternar a equipe também troca o plano para o recomendado nesse cenário. */
  const setKeepTeam = useCallback(
    (value: boolean) => {
      setKeepTeamState(value);

      const preferred = plans.find((plan) => plan.id === planIdFor(value));
      const covers = (preferred?.credits ?? 0) >= requiredCredits;
      const target = covers ? preferred : (recommendPlan(requiredCredits, plans)?.plan ?? preferred);

      if (target) setPlanId(target.id);
    },
    [planIdFor, plans, requiredCredits],
  );

  const hasMetrics =
    numericMetrics.leads > 0 && numericMetrics.meetings > 0 && numericMetrics.sales > 0;

  const canAdvance = step === 0 ? hasMetrics : step === 2 ? salesGoal > 0 : true;

  return {
    // navegação
    step,
    stepCount: CALCULATOR_STEP_COUNT,
    next,
    back,
    goTo,
    reset,
    canAdvance,

    // entradas
    metrics,
    setMetric,
    costs,
    setCost,
    keepTeam,
    setKeepTeam,
    planId,
    setPlanId,
    /** Plano indicado: cenário de equipe, limitado pela demanda de créditos. */
    recommendedPlanId: recommendedPlan?.id ?? "",
    recommendedPlan,
    recommendationReason,
    preferredPlan,
    requiredCredits,
    goal: goalValue,
    setGoal,

    // derivados
    numericMetrics,
    salesGoal,
    suggestedGoal,
    rates,
    volume,
    baselineLeads,
    selectedPlan,
    investment,
    costPerSale,
    recommendation,
    hasMetrics,
    /** O plano escolhido cobre a demanda de créditos da meta? */
    planCoversGoal: (selectedPlan?.credits ?? 0) >= volume.prospectLeads,
    /** O plano escolhido cobre o volume equivalente ao que o visitante já recebe? */
    planCoversBaseline: (selectedPlan?.credits ?? 0) >= baselineLeads,
  };
}
