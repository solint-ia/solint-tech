import { siteConfig } from "@/config/site";
import type { CalculatorPlan } from "@/types";

/* ==========================================================================
   Conteúdo da calculadora de resultados do Prospect.
   Toda a matemática vive em `lib/prospect-calculator`; aqui só texto e números
   de negócio.
   ========================================================================== */

export const calculatorSection = {
  eyebrow: "Calculadora de Resultados",
  title: "Descubra quantos leads você precisa para bater sua meta",
  description:
    "Insira suas métricas atuais e descubra quantos leads você precisa para atingir suas metas de vendas.",
} as const;

/** Cabeçalho de cada uma das 4 etapas do wizard. */
export const calculatorSteps = [
  {
    label: "Métricas",
    title: "Métricas Atuais",
    description: "Informe seus números atuais para calcularmos suas taxas de conversão.",
  },
  {
    label: "Custos",
    title: "Custos da Operação Atual",
    description: "Informe seus custos atuais para calcularmos sua economia (opcional).",
  },
  {
    label: "Meta",
    title: "Sua Meta de Vendas",
    description: "Quantas vendas você gostaria de fazer mensalmente?",
  },
  {
    label: "Resultado",
    title: "Seu Resultado com o Prospect",
    description: "O volume que a plataforma precisa gerar para você bater a meta.",
  },
] as const;

/** Rótulos e ajudas dos campos de entrada. */
export const calculatorFields = {
  metrics: [
    {
      key: "leads",
      label: "Leads por mês",
      hint: "Quantos leads você recebe hoje?",
    },
    {
      key: "meetings",
      label: "Reuniões por mês",
      hint: "Quantas reuniões você faz?",
    },
    {
      key: "sales",
      label: "Vendas por mês",
      hint: "Quantas vendas você fecha?",
    },
  ],
  costs: [
    {
      key: "agency",
      label: "Custo com Agências",
      hint: "Mensalidade de agências de marketing",
    },
    {
      key: "traffic",
      label: "Investimento em Tráfego",
      hint: "Google Ads, Meta Ads, etc.",
    },
    {
      key: "team",
      label: "Custo com Equipe",
      hint: "SDRs, marketing interno, etc.",
    },
  ],
  keepTeam: {
    label: "Pretendo manter minha equipe atual",
    hint: "Se marcado, o custo com equipe será somado ao investimento com o Prospect",
  },
  goal: {
    label: "Meta de vendas por mês",
    hint: "Quantas vendas você quer fechar por mês?",
  },
} as const;

/**
 * Planos comerciais do Prospect.
 * TODO: valores provisórios (espelham a referência de mercado). Substituir por
 * nome, mensalidade e créditos oficiais da Solint antes de publicar.
 */
export const calculatorPlans: readonly CalculatorPlan[] = [
  {
    id: "essencial",
    name: "Essencial",
    price: 1500,
    credits: 800,
    description: "Para times que estão estruturando a prospecção ativa.",
  },
  {
    id: "growth",
    name: "Growth",
    price: 2000,
    credits: 800,
    badge: "Popular",
    description: "Inclui a IA de pré-qualificação, que assume o trabalho de abordagem e triagem.",
  },
] as const;

/**
 * Plano recomendado conforme o visitante mantém ou não a equipe atual: sem
 * equipe própria, a IA integrada do Growth assume a qualificação; com equipe
 * mantida, o Essencial abastece o time de leads.
 */
export const planRecommendation = {
  withoutTeam: {
    planId: "growth",
    reason:
      "Sem equipe própria, a IA integrada do Growth assume a abordagem e a pré-qualificação dos leads.",
  },
  withTeam: {
    planId: "essencial",
    reason:
      "Como você mantém sua equipe, o Essencial abastece o time com leads e a qualificação segue com seus SDRs.",
  },
  /**
   * Créditos são restrição dura: quando o plano preferido não cobre a demanda,
   * a recomendação sobe. `{creditos}`, `{preferido}` e `{recomendado}` são
   * substituídos no cliente.
   */
  creditsOverride:
    "Sua demanda de {creditos} créditos/mês supera o {preferido}, então o {recomendado} passa a ser o plano indicado.",
  creditsBeyondPlans:
    "Sua demanda de {creditos} créditos/mês supera nossos planos padrão: montamos um plano sob medida para você.",
} as const;

/** Valores iniciais dos campos — mesmo cenário de exemplo da referência. */
export const calculatorDefaults = {
  leads: 100,
  meetings: 20,
  sales: 5,
  agency: 0,
  traffic: 0,
  team: 0,
  keepTeam: false,
  /** Multiplicador aplicado sobre as vendas atuais para sugerir a meta. */
  goalMultiplier: 3,
} as const;

export const calculatorCta = {
  label: "Falar com a Solint",
  href: siteConfig.contact.whatsappUrl,
  /**
   * Mensagem do WhatsApp. `{meta}` e `{leads}` são substituídos no cliente pelos
   * números calculados — funções não atravessam a fronteira RSC.
   */
  messageTemplate:
    "Olá! Simulei na calculadora do Prospect: minha meta é de {meta} vendas/mês, o que exige cerca de {leads} leads/mês. Gostaria de entender como a Solint pode entregar esse volume.",
  restartLabel: "Recalcular",
} as const;
