import type {
  CalculatorPlan,
  ConversionRates,
  CostInputs,
  CreditAddonItem,
  CreditAddonPackage,
  CreditAddonResult,
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

/**
 * Tabela de pacotes adicionais de créditos:
 * - 500 créditos: R$ 900 (R$ 1,80/crédito)
 * - 1.000 créditos: R$ 1.400 (R$ 1,40/crédito)
 * - 3.000 créditos: R$ 2.400 (R$ 0,80/crédito)
 */
export const CREDIT_ADDON_TIERS: readonly CreditAddonPackage[] = [
  { credits: 500, price: 900 },
  { credits: 1000, price: 1400 },
  { credits: 3000, price: 2400 },
] as const;

/**
 * Calcula a combinação mais econômica de pacotes de créditos adicionais
 * para cobrir a quantidade de créditos faltantes da meta.
 */
export function calculateCreditAddons(
  neededCredits: number,
  basePlanCredits: number = 0,
  tiers: readonly CreditAddonPackage[] = CREDIT_ADDON_TIERS,
): CreditAddonResult {
  const missing = Math.max(0, neededCredits - basePlanCredits);
  if (missing <= 0 || tiers.length === 0) {
    return {
      neededCredits: 0,
      addonCredits: 0,
      totalCredits: basePlanCredits,
      addonPrice: 0,
      items: [],
      hasAddon: false,
    };
  }

  const sorted = [...tiers].sort((a, b) => a.credits - b.credits);
  const pkg500: CreditAddonPackage =
    sorted.find((p) => p.credits === 500) ?? sorted[0] ?? { credits: 500, price: 900 };
  const pkg1000: CreditAddonPackage =
    sorted.find((p) => p.credits === 1000) ?? sorted[1] ?? pkg500;
  const pkg3000: CreditAddonPackage =
    sorted.find((p) => p.credits === 3000) ?? sorted[2] ?? pkg1000;

  const max3000 = Math.ceil(missing / pkg3000.credits) + 1;
  let bestCost = Number.POSITIVE_INFINITY;
  let bestCombo: { pkg: CreditAddonPackage; count: number }[] = [];
  let bestCredits = 0;

  for (let c = 0; c <= max3000; c++) {
    const costC = c * pkg3000.price;
    const credC = c * pkg3000.credits;
    if (costC > bestCost) break;

    for (let b = 0; b <= 3; b++) {
      const costB = costC + b * pkg1000.price;
      const credB = credC + b * pkg1000.credits;
      if (costB > bestCost) break;

      for (let a = 0; a <= 2; a++) {
        const totalCred = credB + a * pkg500.credits;
        const totalCost = costB + a * pkg500.price;

        if (totalCred >= missing) {
          if (
            totalCost < bestCost ||
            (totalCost === bestCost && totalCred > bestCredits)
          ) {
            bestCost = totalCost;
            bestCredits = totalCred;
            bestCombo = [
              { pkg: pkg3000, count: c },
              { pkg: pkg1000, count: b },
              { pkg: pkg500, count: a },
            ].filter((item) => item.count > 0);
          }
          break;
        }
      }
    }
  }

  const items: CreditAddonItem[] = bestCombo.map(({ pkg, count }) => ({
    package: pkg,
    count,
    subtotal: count * pkg.price,
  }));

  return {
    neededCredits: missing,
    addonCredits: bestCredits,
    totalCredits: basePlanCredits + bestCredits,
    addonPrice: Number.isFinite(bestCost) ? bestCost : 0,
    items,
    hasAddon: items.length > 0 && bestCost > 0,
  };
}

export function formatAddonSummary(addon: CreditAddonResult): string {
  if (!addon.hasAddon || addon.items.length === 0) return "";
  return addon.items
    .map((item) => {
      const pkgLabel = item.count === 1 ? "pacote" : "pacotes";
      return `${item.count}x ${pkgLabel} de ${formatNumber(item.package.credits)} créditos`;
    })
    .join(" + ");
}

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
  addonPrice: number = 0,
): InvestmentSummary {
  const planPrice = plan?.price ?? 0;
  const currentTotal = agency + traffic + team;
  const prospectTotal = planPrice + addonPrice + (keepTeam ? team : 0);
  const monthlySavings = currentTotal - prospectTotal;

  return {
    currentTotal,
    currentYearlyTotal: currentTotal * MONTHS_PER_YEAR,
    prospectTotal,
    planPrice,
    addonPrice,
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
