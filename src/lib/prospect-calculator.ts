import type {
  CalculatorPlan,
  ConversionRates,
  CostInputs,
  CurrentMetrics,
  InvestmentSummary,
  PlanRecommendation,
  RequiredVolume,
} from "@/types";

/* ==========================================================================
   Calculadora de resultados do Prospect — regras de negócio puras.
   Sem React e sem formatação de layout: só o modelo de cálculo, para poder
   ser testado e reutilizado fora da UI.
   ========================================================================== */

/** Fração dos leads gerados pela plataforma que vira contato válido. */
export const LEAD_VALIDATION_RATE = 0.4;

/** Meses considerados na projeção anual do comparativo de investimento. */
const MONTHS_PER_YEAR = 12;

function clampRate(value: number): number {
  if (!Number.isFinite(value) || value <= 0) return 0;
  return Math.min(value, 1);
}

/**
 * Taxas de conversão do funil atual do visitante.
 * Lead → Reunião = reuniões / leads; Reunião → Venda = vendas / reuniões.
 */
export function getConversionRates({
  leads,
  meetings,
  sales,
}: CurrentMetrics): ConversionRates {
  return {
    leadToMeeting: leads > 0 ? clampRate(meetings / leads) : 0,
    meetingToSale: meetings > 0 ? clampRate(sales / meetings) : 0,
  };
}

const EMPTY_VOLUME: RequiredVolume = { meetings: 0, validLeads: 0, prospectLeads: 0 };

/**
 * Volume necessário para bater a meta, percorrendo o funil de trás para frente:
 * meta → reuniões → leads válidos → leads gerados pelo Prospect.
 */
export function getRequiredVolume(
  salesGoal: number,
  { leadToMeeting, meetingToSale }: ConversionRates,
): RequiredVolume {
  if (salesGoal <= 0 || leadToMeeting <= 0 || meetingToSale <= 0) return EMPTY_VOLUME;

  const meetings = Math.ceil(salesGoal / meetingToSale);
  const validLeads = Math.ceil(meetings / leadToMeeting);
  const prospectLeads = Math.ceil(validLeads / LEAD_VALIDATION_RATE);

  return { meetings, validLeads, prospectLeads };
}

/**
 * Quantos leads o Prospect precisa gerar para entregar o mesmo volume de
 * contatos válidos que o visitante já recebe hoje — prévia de créditos.
 */
export function getBaselineProspectLeads(currentLeads: number): number {
  if (currentLeads <= 0) return 0;
  return Math.ceil(currentLeads / LEAD_VALIDATION_RATE);
}

/** Comparativo entre o custo atual da operação e o investimento com o Prospect. */
export function getInvestment(
  { agency, traffic, team, keepTeam }: CostInputs,
  plan: CalculatorPlan | undefined,
): InvestmentSummary {
  const planPrice = plan?.price ?? 0;
  const currentTotal = agency + traffic + team;
  const prospectTotal = planPrice + (keepTeam ? team : 0);
  const monthlySavings = currentTotal - prospectTotal;

  return {
    currentTotal,
    currentYearlyTotal: currentTotal * MONTHS_PER_YEAR,
    prospectTotal,
    planPrice,
    teamKept: keepTeam ? team : 0,
    monthlySavings,
    yearlySavings: monthlySavings * MONTHS_PER_YEAR,
    yearlyProspectTotal: prospectTotal * MONTHS_PER_YEAR,
    /** Economia em relação ao custo atual (0–1); 0 quando não há custo informado. */
    savingsRate: currentTotal > 0 ? monthlySavings / currentTotal : 0,
    hasCurrentCosts: currentTotal > 0,
  };
}

/**
 * Custo de aquisição por cliente: quanto a operação atual gasta por venda
 * fechada no mês.
 */
export function getCostPerSale(monthlyCost: number, salesPerMonth: number): number {
  if (monthlyCost <= 0 || salesPerMonth <= 0) return 0;
  return monthlyCost / salesPerMonth;
}

/**
 * Menor plano que cobre a demanda de créditos. Quando nenhum atende, devolve o
 * maior com `isEnough: false` — a UI convida a falar com a Solint.
 */
export function recommendPlan(
  requiredCredits: number,
  plans: readonly CalculatorPlan[],
): PlanRecommendation | null {
  if (plans.length === 0) return null;

  const ordered = [...plans].sort((a, b) => a.credits - b.credits);
  const match = ordered.find((candidate) => candidate.credits >= requiredCredits);
  const plan = match ?? ordered[ordered.length - 1];

  if (!plan) return null;

  return {
    plan,
    isEnough: Boolean(match) && requiredCredits > 0,
    missingCredits: Math.max(0, requiredCredits - plan.credits),
  };
}

/* ==========================================================================
   Formatação (pt-BR)
   ========================================================================== */

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const integerFormatter = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });

const rateFormatters = new Map<number, Intl.NumberFormat>();

function getRateFormatter(decimals: number): Intl.NumberFormat {
  const cached = rateFormatters.get(decimals);
  if (cached) return cached;

  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  rateFormatters.set(decimals, formatter);
  return formatter;
}

/** `1500` → "R$ 1.500". */
export function formatBRL(value: number): string {
  return currencyFormatter.format(Math.round(value));
}

/** `750` → "750"; `1500` → "1.500". */
export function formatNumber(value: number): string {
  return integerFormatter.format(Math.round(value));
}

/** `0.2` → "20,0%"; com `decimals = 0`, "20%". */
export function formatRate(rate: number, decimals = 1): string {
  return `${getRateFormatter(decimals).format(rate * 100)}%`;
}
