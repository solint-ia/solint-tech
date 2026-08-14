"use client";

import { useId, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Coins,
  PiggyBank,
  RotateCcw,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button, Reveal } from "@/components/ui";
import { useLeadCalculator, type CostKey, type MetricKey } from "@/hooks";
import {
  formatBRL,
  formatNumber,
  formatRate,
  LEAD_VALIDATION_RATE,
} from "@/lib/prospect-calculator";
import { cn, stepLabel } from "@/lib/utils";
import type { CalculatorPlan } from "@/types";

/* ==========================================================================
   Contratos de conteúdo — tudo entra por props (a seção é quem injeta).
   ========================================================================== */

interface StepCopy {
  label: string;
  title: string;
  description: string;
}

interface FieldCopy<TKey extends string> {
  key: TKey;
  label: string;
  hint: string;
}

export interface LeadCalculatorProps {
  steps: readonly StepCopy[];
  metricFields: readonly FieldCopy<MetricKey>[];
  costFields: readonly FieldCopy<CostKey>[];
  keepTeamCopy: { label: string; hint: string };
  goalCopy: { label: string; hint: string };
  plans: readonly CalculatorPlan[];
  /** Plano indicado (e o porquê) conforme o visitante mantém ou não a equipe. */
  planByTeam: {
    withTeam: { planId: string; reason: string };
    withoutTeam: { planId: string; reason: string };
    /** Aceita `{creditos}`, `{preferido}` e `{recomendado}`. */
    creditsOverride: string;
    /** Aceita `{creditos}`. */
    creditsBeyondPlans: string;
  };
  defaults: {
    leads: number;
    meetings: number;
    sales: number;
    agency: number;
    traffic: number;
    team: number;
    keepTeam: boolean;
    goalMultiplier: number;
  };
  cta: {
    label: string;
    href: string;
    restartLabel: string;
    /** Aceita os marcadores `{meta}` e `{leads}`. */
    messageTemplate: string;
  };
}

/** Atalhos de meta oferecidos como múltiplos das vendas atuais. */
const GOAL_SHORTCUTS = [2, 3, 5, 10] as const;

/** Preenche a mensagem do CTA com os números calculados. */
function buildCtaMessage(template: string, salesGoal: number, prospectLeads: number): string {
  return template
    .replace("{meta}", formatNumber(salesGoal))
    .replace("{leads}", formatNumber(prospectLeads));
}

/* ==========================================================================
   Peças de interface
   ========================================================================== */

function StepIndicator({
  steps,
  current,
  onSelect,
}: {
  steps: readonly StepCopy[];
  current: number;
  onSelect: (index: number) => void;
}) {
  const lastIndex = steps.length - 1;

  return (
    <ol className="flex items-center gap-1.5 sm:gap-2.5">
      {steps.map((step, index) => {
        const isDone = index < current;
        const isActive = index === current;
        const isFinal = index === lastIndex;

        return (
          <li key={step.label} className="flex flex-1 items-center gap-1.5 sm:gap-2.5">
            <button
              type="button"
              onClick={() => onSelect(index)}
              disabled={index > current}
              aria-current={isActive ? "step" : undefined}
              aria-label={`Etapa ${index + 1}: ${step.title}`}
              className={cn(
                "group flex items-center gap-2.5 rounded-xl transition-opacity duration-300",
                index > current ? "cursor-default" : "cursor-pointer hover:opacity-90",
              )}
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[0.78rem] font-bold transition-all duration-300",
                  isActive && !isFinal &&
                    "border-accent/60 bg-accent/15 text-accent shadow-[0_0_18px_rgb(53_217_255/0.28)]",
                  isActive && isFinal &&
                    "border-amber/60 bg-amber/15 text-amber shadow-[0_0_18px_rgb(255_182_92/0.28)]",
                  isDone && "border-accent/35 bg-accent/10 text-accent",
                  !isActive && !isDone && "border-accent/12 bg-ink/60 text-faint",
                )}
              >
                {isDone ? <Check className="size-4" /> : stepLabel(index)}
              </span>

              <span
                className={cn(
                  "hidden font-display text-[0.82rem] font-semibold transition-colors sm:block",
                  isActive ? (isFinal ? "text-amber-soft" : "text-white") : "text-faint",
                )}
              >
                {step.label}
              </span>
            </button>

            {index < lastIndex ? (
              <span
                aria-hidden="true"
                className={cn(
                  "h-px flex-1 transition-colors duration-500",
                  isDone ? "bg-accent/45" : "bg-accent/12",
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function NumberField({
  id,
  label,
  hint,
  value,
  prefix,
  suffix,
  onChange,
}: {
  id: string;
  label: string;
  hint: string;
  value: string;
  prefix?: string;
  suffix?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.83rem] font-medium text-fg-strong">
        {label}
      </label>

      <div className="flex items-center rounded-xl border border-accent/18 bg-ink/70 transition-colors duration-300 focus-within:border-accent/55 focus-within:shadow-[0_0_0_3px_rgb(53_217_255/0.10)]">
        {prefix ? (
          <span className="pl-3.5 font-mono text-[0.85rem] text-steel-2">{prefix}</span>
        ) : null}

        <input
          id={id}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="0"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full min-w-0 bg-transparent px-3.5 py-3 font-display text-[1.05rem] font-semibold text-white outline-none placeholder:text-faint-2"
        />

        {suffix ? (
          <span className="pr-3.5 font-mono text-[0.78rem] whitespace-nowrap text-faint">
            {suffix}
          </span>
        ) : null}
      </div>

      <span className="text-[0.74rem]/[1.4] text-faint">{hint}</span>
    </div>
  );
}

function RateStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-accent/15 bg-ink/55 px-4 py-3.5 text-center">
      <span className="font-display text-[clamp(1.5rem,3.4vw,1.9rem)]/none font-bold text-accent">
        {value}
      </span>
      <span className="font-mono text-[0.7rem] tracking-wide text-steel-2 uppercase">
        {label}
      </span>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "strong" | "amber";
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-accent/10 py-2 last:border-0">
      <span className="text-[0.82rem]/[1.4] font-light text-muted">{label}</span>
      <span
        className={cn(
          "font-display text-[0.9rem] font-semibold whitespace-nowrap",
          tone === "amber" && "text-amber",
          tone === "strong" && "text-white",
          tone === "default" && "text-fg-strong",
        )}
      >
        {value}
      </span>
    </div>
  );
}

function ResultStat({
  value,
  title,
  caption,
  accent = "cyan",
}: {
  value: string;
  title: string;
  caption: string;
  accent?: "cyan" | "amber";
}) {
  const isAmber = accent === "amber";

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1.5 rounded-2xl border px-4 py-5 text-center",
        isAmber
          ? "border-amber/35 bg-[linear-gradient(160deg,rgb(28_22_14/0.9),rgb(10_14_20/0.75))] shadow-[0_0_34px_rgb(255_182_92/0.14)]"
          : "border-accent/18 bg-[linear-gradient(160deg,rgb(15_20_29/0.85),rgb(9_12_17/0.7))]",
      )}
    >
      <span
        className={cn(
          "font-display text-[clamp(1.9rem,4.6vw,2.6rem)]/none font-bold",
          isAmber ? "text-amber" : "text-accent",
        )}
      >
        {value}
      </span>
      <span className="font-display text-[0.92rem] font-semibold text-white">{title}</span>
      <span className="text-[0.76rem]/[1.45] font-light text-muted">{caption}</span>
    </div>
  );
}

/** Métrica de um painel comparativo (gasto atual, investimento, economia). */
function MoneyStat({
  label,
  value,
  tone,
  size = "md",
}: {
  label: string;
  value: string;
  tone: "danger" | "accent" | "positive";
  size?: "md" | "lg";
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[0.75rem]/[1.35] font-light text-muted">{label}</span>
      <span
        className={cn(
          "font-display font-bold",
          size === "lg" ? "text-[clamp(1.25rem,3vw,1.6rem)]/none" : "text-[1.12rem]/none",
          tone === "danger" && "text-rose-300",
          tone === "accent" && "text-accent",
          tone === "positive" && "text-emerald-300",
        )}
      >
        {value}
      </span>
    </div>
  );
}

/** Cartão de um dos lados do comparativo de investimento. */
function ComparisonCard({
  icon: Icon,
  title,
  tone,
  badge,
  children,
}: {
  icon: LucideIcon;
  title: string;
  tone: "danger" | "accent" | "positive";
  badge?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 rounded-2xl border p-4",
        tone === "danger" && "border-rose-500/22 bg-[linear-gradient(160deg,rgb(36_18_24/0.55),rgb(10_13_19/0.75))]",
        tone === "accent" && "border-accent/22 bg-[linear-gradient(160deg,rgb(14_28_46/0.7),rgb(9_12_17/0.75))]",
        tone === "positive" &&
          "border-emerald-500/28 bg-[linear-gradient(160deg,rgb(14_34_28/0.6),rgb(9_14_17/0.75))]",
      )}
    >
      {badge ? (
        <span className="absolute -top-2.5 right-3 rounded-md border border-emerald-500/35 bg-emerald-500/18 px-2 py-0.5 font-mono text-[0.62rem] font-bold tracking-wide text-emerald-300 uppercase">
          {badge}
        </span>
      ) : null}

      <div className="flex items-center gap-2">
        <Icon
          className={cn(
            "size-4 shrink-0",
            tone === "danger" && "text-rose-400",
            tone === "accent" && "text-accent",
            tone === "positive" && "text-emerald-400",
          )}
        />
        <span className="font-display text-[0.9rem] font-semibold text-white">{title}</span>
      </div>

      {children}
    </div>
  );
}

function PlanOption({
  plan,
  isSelected,
  isRecommended,
  onSelect,
}: {
  plan: CalculatorPlan;
  isSelected: boolean;
  isRecommended: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onSelect}
      className={cn(
        "flex flex-col gap-1.5 rounded-2xl border p-4 text-left transition-all duration-300",
        isSelected
          ? "border-accent/55 bg-[linear-gradient(150deg,#0F243E,#07101E)] shadow-[0_0_24px_rgb(53_217_255/0.2)]"
          : "border-accent/15 bg-panel/70 hover:border-accent/35 hover:bg-surface-hi/60",
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-[0.98rem] font-bold text-white">{plan.name}</span>

        {isRecommended ? (
          <span className="flex items-center gap-1 rounded-md border border-accent/40 bg-accent/12 px-2 py-0.5 font-mono text-[0.65rem] font-semibold text-accent">
            <Sparkles className="size-3" />
            Recomendado
          </span>
        ) : plan.badge ? (
          <span className="rounded-md border border-amber/30 bg-amber/12 px-2 py-0.5 font-mono text-[0.65rem] font-semibold text-amber">
            {plan.badge}
          </span>
        ) : null}
      </div>

      <span
        className={cn(
          "font-display text-[1.15rem] font-bold",
          isSelected ? "text-accent" : "text-fg-strong",
        )}
      >
        {formatBRL(plan.price)}
        <span className="font-sans text-[0.78rem] font-normal text-faint">/mês</span>
      </span>

      <span className="font-mono text-[0.74rem] text-steel-2">
        {formatNumber(plan.credits)} créditos/mês inclusos
      </span>

      {plan.description ? (
        <span className="text-[0.76rem]/[1.45] font-light text-muted">{plan.description}</span>
      ) : null}
    </button>
  );
}

/* ==========================================================================
   Componente principal
   ========================================================================== */

export function LeadCalculator({
  steps,
  metricFields,
  costFields,
  keepTeamCopy,
  goalCopy,
  plans,
  planByTeam,
  defaults,
  cta,
}: LeadCalculatorProps) {
  const fieldId = useId();

  const {
    step,
    next,
    back,
    goTo,
    reset,
    canAdvance,
    metrics,
    setMetric,
    costs,
    setCost,
    keepTeam,
    setKeepTeam,
    planId,
    setPlanId,
    recommendedPlanId,
    recommendedPlan,
    recommendationReason,
    preferredPlan,
    requiredCredits,
    goal,
    setGoal,
    numericMetrics,
    salesGoal,
    rates,
    volume,
    baselineLeads,
    selectedPlan,
    investment,
    costPerSale,
    recommendation,
    hasMetrics,
    planCoversGoal,
  } = useLeadCalculator({ plans, defaults, planByTeam });

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  const teamCost = investment.teamKept;
  const currentTeamCost = Number.parseInt(costs.team, 10) || 0;
  const isSaving = investment.monthlySavings > 0;
  const planCoversRequired = (selectedPlan?.credits ?? 0) >= requiredCredits;

  /** Justificativa do plano indicado: cenário de equipe ou demanda de créditos. */
  const recommendationText =
    recommendationReason === "team"
      ? keepTeam
        ? planByTeam.withTeam.reason
        : planByTeam.withoutTeam.reason
      : recommendationReason === "credits"
        ? planByTeam.creditsOverride
            .replace("{creditos}", formatNumber(requiredCredits))
            .replace("{preferido}", preferredPlan?.name ?? "—")
            .replace("{recomendado}", recommendedPlan?.name ?? "—")
        : planByTeam.creditsBeyondPlans.replace(
            "{creditos}",
            formatNumber(requiredCredits),
          );
  const validationLabel = formatRate(LEAD_VALIDATION_RATE, 0);

  return (
    <Reveal className="mx-auto max-w-[1020px]">
      <StepIndicator steps={steps} current={step} onSelect={goTo} />

      <div className="relative mt-6 overflow-hidden rounded-[22px] border border-accent/22 bg-[linear-gradient(150deg,rgb(16_24_38/0.9),rgb(9_12_17/0.78))] p-[clamp(20px,3.2vw,34px)] backdrop-blur-md">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(53_217_255/0.5),transparent)]"
        />

        {/* Cabeçalho da etapa */}
        <header className="mb-6">
          <h3 className="m-0 font-display text-[clamp(1.2rem,2.4vw,1.55rem)]/[1.2] font-bold tracking-[-0.02em] text-white">
            {currentStep?.title}
          </h3>
          <p className="mt-1.5 m-0 text-[0.88rem]/[1.55] font-light text-muted">
            {currentStep?.description}
          </p>
        </header>

        {/* ------------------------------------------------ Etapa 1: métricas */}
        {step === 0 ? (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {metricFields.map((field) => (
                <NumberField
                  key={field.key}
                  id={`${fieldId}-${field.key}`}
                  label={field.label}
                  hint={field.hint}
                  value={metrics[field.key]}
                  onChange={(value) => setMetric(field.key, value)}
                />
              ))}
            </div>

            <div className="rounded-2xl border border-accent/15 bg-ink/40 p-4">
              <span className="font-mono text-[0.72rem] tracking-wide text-steel-2 uppercase">
                Suas taxas de conversão
              </span>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2" aria-live="polite">
                <RateStat
                  value={hasMetrics ? formatRate(rates.leadToMeeting) : "—"}
                  label="Lead → Reunião"
                />
                <RateStat
                  value={hasMetrics ? formatRate(rates.meetingToSale) : "—"}
                  label="Reunião → Venda"
                />
              </div>

              {!hasMetrics ? (
                <p className="mt-3 m-0 text-[0.78rem]/[1.5] text-amber-soft">
                  Preencha leads, reuniões e vendas para calcularmos suas taxas.
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* -------------------------------------------------- Etapa 2: custos */}
        {step === 1 ? (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {costFields.map((field) => (
                <NumberField
                  key={field.key}
                  id={`${fieldId}-${field.key}`}
                  label={field.label}
                  hint={field.hint}
                  prefix="R$"
                  value={costs[field.key]}
                  onChange={(value) => setCost(field.key, value)}
                />
              ))}
            </div>

            {/* Seus custos atuais */}
            {investment.hasCurrentCosts ? (
              <div className="rounded-2xl border border-rose-500/22 bg-[linear-gradient(160deg,rgb(36_18_24/0.5),rgb(10_13_19/0.7))] p-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-rose-500/25 bg-rose-500/12 text-rose-400">
                    <TrendingDown className="size-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display text-[0.92rem] font-semibold text-rose-200">
                      Seus custos atuais
                    </span>
                    <span className="text-[0.76rem] font-light text-muted">
                      Quanto você está gastando hoje
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3" aria-live="polite">
                  <div className="rounded-xl border border-rose-500/15 bg-ink/45 px-4 py-3 text-center">
                    <MoneyStat
                      label="Gasto mensal"
                      value={formatBRL(investment.currentTotal)}
                      tone="danger"
                      size="lg"
                    />
                  </div>
                  <div className="rounded-xl border border-rose-500/15 bg-ink/45 px-4 py-3 text-center">
                    <MoneyStat
                      label="Gasto anual"
                      value={formatBRL(investment.currentYearlyTotal)}
                      tone="danger"
                      size="lg"
                    />
                  </div>
                  <div className="rounded-xl border border-rose-500/15 bg-ink/45 px-4 py-3 text-center">
                    <MoneyStat
                      label="CAC (custo por cliente)"
                      value={costPerSale > 0 ? formatBRL(costPerSale) : "—"}
                      tone="danger"
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            ) : null}

            <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-accent/15 bg-ink/45 p-3.5 transition-colors hover:border-accent/30">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={keepTeam}
                onChange={(event) => setKeepTeam(event.target.checked)}
              />
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-ink/70 text-ink transition-all duration-200 peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ink"
              >
                {keepTeam ? <Check className="size-3.5" /> : null}
              </span>

              <span className="flex flex-col gap-0.5">
                <span className="text-[0.86rem] font-medium text-fg-strong">
                  {keepTeamCopy.label}
                </span>
                <span className="text-[0.75rem]/[1.45] text-faint">
                  {keepTeamCopy.hint}
                  {currentTeamCost > 0 ? ` (${formatBRL(currentTeamCost)}/mês).` : "."}
                </span>
              </span>
            </label>

            {/* Escolha do plano */}
            <div>
              <span className="font-mono text-[0.72rem] tracking-wide text-steel-2 uppercase">
                Escolha seu plano
              </span>
              <div
                role="radiogroup"
                aria-label="Planos do Prospect"
                className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {plans.map((plan) => (
                  <PlanOption
                    key={plan.id}
                    plan={plan}
                    isSelected={plan.id === planId}
                    isRecommended={plan.id === recommendedPlanId}
                    onSelect={() => setPlanId(plan.id)}
                  />
                ))}
              </div>

              <p
                className={cn(
                  "mt-2.5 m-0 flex items-start gap-1.5 text-[0.79rem]/[1.5]",
                  recommendationReason === "beyondPlans" ? "text-amber" : "text-muted",
                )}
              >
                <Sparkles
                  className={cn(
                    "mt-0.5 size-3.5 shrink-0",
                    recommendationReason === "beyondPlans" ? "text-amber" : "text-accent",
                  )}
                />
                <span>
                  {recommendationReason === "beyondPlans" ? null : (
                    <strong className="font-semibold text-fg-strong">
                      Recomendamos o {recommendedPlan?.name ?? "—"}:{" "}
                    </strong>
                  )}
                  {recommendationText}
                </span>
              </p>
            </div>

            {/* Comparativo de investimento */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <PiggyBank className="size-4 text-accent" />
                <span className="font-display text-[0.95rem] font-semibold text-white">
                  Comparativo de investimento
                </span>
              </div>

              <div
                className={cn(
                  "grid grid-cols-1 gap-3",
                  investment.hasCurrentCosts ? "lg:grid-cols-3" : "sm:grid-cols-2",
                )}
                aria-live="polite"
              >
                {investment.hasCurrentCosts ? (
                  <ComparisonCard icon={TrendingDown} title="Situação atual" tone="danger">
                    <MoneyStat
                      label="Gasto mensal"
                      value={formatBRL(investment.currentTotal)}
                      tone="danger"
                    />
                    <MoneyStat
                      label="Gasto anual"
                      value={formatBRL(investment.currentYearlyTotal)}
                      tone="danger"
                    />
                  </ComparisonCard>
                ) : null}

                <ComparisonCard icon={Zap} title="Com o Prospect" tone="accent">
                  <SummaryRow
                    label={`Plano ${selectedPlan?.name ?? "—"}`}
                    value={formatBRL(investment.planPrice)}
                  />
                  {keepTeam && teamCost > 0 ? (
                    <SummaryRow label="Equipe atual mantida" value={formatBRL(teamCost)} />
                  ) : null}
                  <MoneyStat
                    label="Investimento mensal"
                    value={formatBRL(investment.prospectTotal)}
                    tone="accent"
                  />
                  <MoneyStat
                    label="Investimento anual"
                    value={formatBRL(investment.yearlyProspectTotal)}
                    tone="accent"
                  />
                </ComparisonCard>

                {investment.hasCurrentCosts ? (
                  <ComparisonCard
                    icon={PiggyBank}
                    title={isSaving ? "Sua economia" : "Investimento adicional"}
                    tone={isSaving ? "positive" : "danger"}
                    badge={isSaving ? "Economia" : undefined}
                  >
                    <div className="flex flex-col items-center gap-0.5 py-1 text-center">
                      <span
                        className={cn(
                          "font-display text-[clamp(1.9rem,4.6vw,2.5rem)]/none font-bold",
                          isSaving ? "text-emerald-300" : "text-amber",
                        )}
                      >
                        {formatRate(Math.abs(investment.savingsRate), 0)}
                      </span>
                      <span className="text-[0.78rem] font-light text-muted">
                        {isSaving ? "de economia" : "acima do custo atual"}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "rounded-xl border px-3 py-2.5 text-center",
                        isSaving
                          ? "border-emerald-500/22 bg-emerald-500/8"
                          : "border-amber/25 bg-amber/8",
                      )}
                    >
                      <MoneyStat
                        label={isSaving ? "Economia anual" : "Diferença anual"}
                        value={formatBRL(Math.abs(investment.yearlySavings))}
                        tone={isSaving ? "positive" : "danger"}
                      />
                    </div>
                  </ComparisonCard>
                ) : null}
              </div>

              {/* Faixa de destaque da economia anual */}
              {investment.hasCurrentCosts && isSaving ? (
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-500/28 bg-[linear-gradient(120deg,rgb(14_38_30/0.75),rgb(9_14_17/0.7))] p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
                      <TrendingUp className="size-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display text-[1rem] font-bold text-white">
                        Você vai economizar
                      </span>
                      <span className="text-[0.79rem] font-light text-muted">
                        comparado com sua operação atual
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[clamp(1.6rem,4.4vw,2.4rem)]/none font-bold text-emerald-300">
                      {formatBRL(investment.yearlySavings)}
                    </span>
                    <span className="text-[0.82rem] font-light text-muted">por ano</span>
                  </div>
                </div>
              ) : null}

              <p className="mt-3 m-0 rounded-xl border border-accent/12 bg-ink/45 px-3.5 py-2.5 text-[0.8rem]/[1.5] text-muted">
                <strong className="font-semibold text-fg-strong">
                  Detalhamento do investimento:
                </strong>{" "}
                Plano {selectedPlan?.name ?? "—"} ({formatBRL(investment.planPrice)})
                {keepTeam && teamCost > 0
                  ? ` + equipe atual mantida (${formatBRL(teamCost)})`
                  : ""}
                {!investment.hasCurrentCosts
                  ? " — preencha seus custos atuais acima para ver a economia."
                  : ""}
              </p>
            </div>

            {/* Cálculo automático de créditos */}
            <div className="rounded-2xl border border-accent/15 bg-ink/40 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Coins className="size-4 text-accent" />
                <span className="font-display text-[0.9rem] font-semibold text-white">
                  Cálculo automático de créditos
                </span>
              </div>

              <SummaryRow
                label={`Leads atuais informados (${validationLabel} válidos)`}
                value={`${formatNumber(numericMetrics.leads)} leads/mês`}
              />
              <SummaryRow
                label="Leads do Prospect necessários (100%)"
                value={`${formatNumber(baselineLeads)} leads/mês`}
              />
              <SummaryRow
                label={`Créditos para a meta de ${formatNumber(salesGoal)} vendas/mês`}
                value={`${formatNumber(volume.prospectLeads)} créditos`}
              />
              <SummaryRow
                label={`Créditos do plano ${selectedPlan?.name ?? "—"}`}
                value={`${formatNumber(selectedPlan?.credits ?? 0)} créditos`}
              />

              <p
                className={cn(
                  "mt-2.5 m-0 flex items-center gap-1.5 text-[0.79rem]/[1.45] font-medium",
                  planCoversRequired ? "text-emerald-400" : "text-amber",
                )}
              >
                <CheckCircle2 className="size-3.5 shrink-0" />
                {planCoversRequired
                  ? `O plano ${selectedPlan?.name} cobre os ${formatNumber(requiredCredits)} créditos/mês necessários.`
                  : `O plano ${selectedPlan?.name} não cobre os ${formatNumber(requiredCredits)} créditos/mês necessários.`}
              </p>
            </div>
          </div>
        ) : null}

        {/* ---------------------------------------------------- Etapa 3: meta */}
        {step === 2 ? (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-start">
              <NumberField
                id={`${fieldId}-goal`}
                label={goalCopy.label}
                hint={goalCopy.hint}
                suffix="vendas/mês"
                value={goal}
                onChange={setGoal}
              />

              {numericMetrics.sales > 0 ? (
                <div className="flex flex-col gap-2 sm:pt-7">
                  <span className="font-mono text-[0.72rem] tracking-wide text-steel-2 uppercase">
                    Atalhos a partir das suas vendas de hoje
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {GOAL_SHORTCUTS.map((multiplier) => {
                      const target = numericMetrics.sales * multiplier;
                      const isActive = salesGoal === target;

                      return (
                        <button
                          key={multiplier}
                          type="button"
                          onClick={() => setGoal(String(target))}
                          className={cn(
                            "rounded-lg border px-3 py-2 font-mono text-[0.78rem] font-semibold transition-all duration-300",
                            isActive
                              ? "border-accent/55 bg-accent/12 text-accent"
                              : "border-accent/15 bg-ink/60 text-steel-2 hover:border-accent/35 hover:text-white",
                          )}
                        >
                          {multiplier}x
                          <span className="ml-1.5 font-sans text-[0.72rem] font-normal text-faint">
                            {formatNumber(target)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-accent/15 bg-ink/40 p-4">
              <Target className="size-4 shrink-0 text-accent" />
              <span className="text-[0.85rem]/[1.5] font-light text-muted">
                Atualmente você faz{" "}
                <strong className="font-semibold text-white">
                  {formatNumber(numericMetrics.sales)} vendas/mês
                </strong>
                .
              </span>
              {numericMetrics.sales > 0 && salesGoal > 0 ? (
                <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[0.72rem] font-semibold text-accent">
                  {(salesGoal / numericMetrics.sales).toFixed(1).replace(".", ",")}x o volume atual
                </span>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* ----------------------------------------------- Etapa 4: resultado */}
        {step === 3 ? (
          <div className="flex flex-col gap-5" aria-live="polite">
            <p className="m-0 text-[0.9rem]/[1.55] font-light text-muted">
              Para atingir{" "}
              <strong className="font-semibold text-white">
                {formatNumber(salesGoal)} vendas/mês
              </strong>
              , você precisará de:
            </p>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              <ResultStat
                accent="amber"
                value={formatNumber(volume.prospectLeads)}
                title="Leads do Prospect"
                caption="Leads gerados pela plataforma"
              />
              <ResultStat
                value={formatNumber(volume.validLeads)}
                title="Leads válidos"
                caption={`${validationLabel} de conversão para contatos`}
              />
              <ResultStat
                value={formatNumber(volume.meetings)}
                title="Reuniões necessárias"
                caption={`Com sua taxa de ${formatRate(rates.meetingToSale)} de reunião → venda`}
              />
            </div>

            {/* Plano e adequação de créditos */}
            <div className="rounded-2xl border border-accent/18 bg-ink/40 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="size-4 text-accent" />
                  <div className="flex flex-col">
                    <span className="font-display text-[0.95rem] font-bold text-white">
                      Plano {selectedPlan?.name}
                    </span>
                    <span className="font-mono text-[0.73rem] text-steel-2">
                      {formatNumber(selectedPlan?.credits ?? 0)} créditos/mês inclusos
                    </span>
                  </div>
                </div>
                <span className="font-display text-[1.05rem] font-bold text-accent">
                  {formatBRL(investment.planPrice)}
                  <span className="font-sans text-[0.76rem] font-normal text-faint">/mês</span>
                </span>
              </div>

              {!planCoversGoal ? (
                <p className="mt-3 m-0 text-[0.79rem]/[1.5] text-amber">
                  {recommendation?.isEnough
                    ? `Essa meta exige ${formatNumber(volume.prospectLeads)} créditos/mês — o plano ${recommendation.plan.name} cobre esse volume.`
                    : `Essa meta exige ${formatNumber(volume.prospectLeads)} créditos/mês e supera nossos planos padrão. Montamos um plano sob medida para você.`}
                </p>
              ) : null}
            </div>

            {/* Comparativo de investimento */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-accent/15 bg-ink/40 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Wallet className="size-4 text-accent" />
                  <span className="font-display text-[0.9rem] font-semibold text-white">
                    Com o Prospect
                  </span>
                </div>

                <SummaryRow
                  label={`Plano ${selectedPlan?.name ?? "—"}`}
                  value={formatBRL(investment.planPrice)}
                />
                {keepTeam && teamCost > 0 ? (
                  <SummaryRow label="Equipe atual mantida" value={formatBRL(teamCost)} />
                ) : null}
                <SummaryRow
                  label="Investimento mensal total"
                  value={formatBRL(investment.prospectTotal)}
                  tone="strong"
                />
                <SummaryRow
                  label="Investimento anual"
                  value={formatBRL(investment.yearlyProspectTotal)}
                />
              </div>

              <div className="rounded-2xl border border-accent/15 bg-ink/40 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="size-4 text-amber" />
                  <span className="font-display text-[0.9rem] font-semibold text-white">
                    {investment.hasCurrentCosts ? "Sua operação atual" : "Comparativo"}
                  </span>
                </div>

                {investment.hasCurrentCosts ? (
                  <>
                    <SummaryRow
                      label="Custo mensal atual"
                      value={formatBRL(investment.currentTotal)}
                    />
                    <SummaryRow
                      label={
                        investment.monthlySavings >= 0
                          ? "Economia mensal"
                          : "Investimento adicional mensal"
                      }
                      value={formatBRL(Math.abs(investment.monthlySavings))}
                      tone="amber"
                    />
                    <SummaryRow
                      label={
                        investment.yearlySavings >= 0
                          ? "Economia anual"
                          : "Investimento adicional anual"
                      }
                      value={formatBRL(Math.abs(investment.yearlySavings))}
                      tone="amber"
                    />
                  </>
                ) : (
                  <p className="m-0 text-[0.79rem]/[1.5] text-faint">
                    Preencha seus custos atuais na etapa 02 para ver quanto você economiza com o
                    Prospect.
                  </p>
                )}
              </div>
            </div>

            {/* Resumo do cálculo */}
            <div className="rounded-2xl border border-accent/12 bg-ink/30 p-4">
              <div className="mb-1 flex items-center gap-2">
                <Users className="size-4 text-steel-2" />
                <span className="font-mono text-[0.72rem] tracking-wide text-steel-2 uppercase">
                  Resumo do cálculo
                </span>
              </div>

              <SummaryRow
                label="Sua taxa de conversão Lead → Reunião"
                value={formatRate(rates.leadToMeeting)}
              />
              <SummaryRow
                label="Sua taxa de conversão Reunião → Venda"
                value={formatRate(rates.meetingToSale)}
              />
              <SummaryRow
                label="Taxa de validação de leads do Prospect"
                value={validationLabel}
              />
              <SummaryRow
                label={`Créditos do plano ${selectedPlan?.name ?? "—"}`}
                value={`${formatNumber(selectedPlan?.credits ?? 0)} créditos/mês`}
              />
              <SummaryRow
                label="Meta de vendas"
                value={`${formatNumber(salesGoal)} vendas/mês`}
              />
            </div>
          </div>
        ) : null}

        {/* ------------------------------------------------------- Navegação */}
        <div className="mt-7 flex flex-col gap-3 border-t border-accent/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2.5">
            {step > 0 ? (
              <Button type="button" variant="secondary" size="sm" onClick={back}>
                <ArrowLeft className="size-4" />
                Voltar
              </Button>
            ) : null}

            {isLastStep ? (
              <Button type="button" variant="secondary" size="sm" onClick={reset}>
                <RotateCcw className="size-4" />
                {cta.restartLabel}
              </Button>
            ) : (
              <Button
                type="button"
                size="sm"
                onClick={next}
                disabled={!canAdvance}
                className="disabled:pointer-events-none disabled:opacity-45"
              >
                {step === steps.length - 2 ? "Ver resultados" : "Próximo passo"}
                <ArrowRight className="size-4" />
              </Button>
            )}
          </div>

          {isLastStep ? (
            <Button
              href={`${cta.href}?text=${encodeURIComponent(buildCtaMessage(cta.messageTemplate, salesGoal, volume.prospectLeads))}`}
              size="sm"
            >
              {cta.label}
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <span className="text-[0.76rem]/[1.45] text-faint sm:max-w-[46%] sm:text-right">
              Etapa {stepLabel(step)} de {stepLabel(steps.length - 1)} — seus dados ficam só no seu
              navegador.
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}
