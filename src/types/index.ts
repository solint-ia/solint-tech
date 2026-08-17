import type { LucideIcon } from "lucide-react";

/* ==========================================================================
   Navegação e identidade
   ========================================================================== */

/** Chave estável de cada rota do site, usada para marcar o item ativo no header. */
export type NavKey = "home" | "agentes" | "prospect" | "solucoes";

export interface NavLink {
  key: NavKey;
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/* ==========================================================================
   Blocos de conteúdo reutilizáveis
   ========================================================================== */

/** Ênfase visual de um bloco: ciano é o padrão, âmbar marca conclusão/destaque. */
export type Accent = "cyan" | "amber";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Etapa de qualquer fluxo temporal (processo, jornada, pipeline). */
export interface ProcessStep {
  icon?: LucideIcon;
  title: string;
  description: string;
  accent?: Accent;
  tags?: readonly string[];
  badge?: string;
}

/** Cartão de produto/área de atuação exibido na vitrine da home. */
export interface ServiceArea {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  tag?: string;
  number?: string;
  highlights?: readonly string[];
}

/** Aplicação de agentes de IA exibida na constelação. */
export interface AgentApplication {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Passos curtos que ilustram o fluxo da automação. */
  flow: string[];
  /** Frase de impacto exibida no rodapé do card principal. */
  impact: string;
  /** Micro-tag de benefício nos mini-cards. */
  badge?: string;
  /** Velocidade média de resposta/execução. */
  speed?: string;
}

export interface TechnologyItem {
  name: string;
  badge?: string;
  iconKey?: string;
  isHighlight?: boolean;
}

/** Grupo de tecnologias ligado ao hub central no diagrama de ecossistema. */
export interface TechnologyGroup {
  label: string;
  category?: string;
  items: readonly (string | TechnologyItem)[];
}

export interface PillarDeliverable {
  title: string;
  description: string;
  detail?: string;
  tags: readonly string[];
}

export interface PillarMetric {
  label: string;
  value: string;
}

export interface SolutionPillar {
  id: string;
  label: string;
  shortLabel: string;
  badge: string;
  subtitle: string;
  description: string;
  deliverables: readonly PillarDeliverable[];
  metrics: readonly PillarMetric[];
  techStack?: readonly string[];
}

/** Serviço do bento grid de Soluções. `span` é a largura em colunas (de 12). */
export interface DevelopmentService {
  title: string;
  description: string;
  /** Detalhe revelado no hover do card. */
  detail: string;
  span: 3 | 4 | 5 | 6;
  /** Tags de tecnologia / entregáveis. */
  tags?: readonly string[];
}

/** Grupo do bento grid de Soluções, ancorado no rail luminoso lateral. */
export interface DevelopmentServiceGroup {
  label: string;
  hint: string;
  services: DevelopmentService[];
  /** Card em destaque do grupo, quando houver. */
  highlight?: {
    title: string;
    description: string;
    examples: string[];
    tags: string[];
  };
}

/** Etapa de encerramento com indicadores (etapa 06 de Soluções). */
export interface ClosingStep {
  eyebrow: string;
  title: string;
  description: string;
  indicators: string[];
}

/** Projeto ou case de portfólio. */
export interface ProjectCard {
  title: string;
  category?: string;
  description?: string;
  image?: string;
  imageObjectFit?: "cover" | "contain";
  fields?: { label: string; value: string }[];
  tags?: readonly string[];
  metric?: string;
  badge?: string;
  href?: string;
  ctaLabel?: string;
}

export interface StatusPill {
  label: string;
  accent: Accent;
}

/* ==========================================================================
   Calculadora de resultados (Prospect)
   ========================================================================== */

/** Números que o visitante informa sobre a operação comercial dele hoje. */
export interface CurrentMetrics {
  leads: number;
  meetings: number;
  sales: number;
}

/** Taxas do funil atual, sempre entre 0 e 1. */
export interface ConversionRates {
  leadToMeeting: number;
  meetingToSale: number;
}

/** Volume necessário para bater a meta de vendas. */
export interface RequiredVolume {
  meetings: number;
  validLeads: number;
  /** Leads que a plataforma precisa gerar — equivale aos créditos consumidos. */
  prospectLeads: number;
}

/** Custos mensais da operação atual. */
export interface CostInputs {
  agency: number;
  traffic: number;
  team: number;
  /** Quando verdadeiro, o custo de equipe entra no investimento com o Prospect. */
  keepTeam: boolean;
}

/** Plano comercial do Prospect exibido na calculadora. */
export interface CalculatorPlan {
  id: string;
  name: string;
  /** Mensalidade em reais. */
  price: number;
  /** Créditos inclusos por mês (1 crédito = 1 lead gerado). */
  credits: number;
  description?: string;
  badge?: string;
}

/** Pacote avulso de créditos adicionais. */
export interface CreditAddonPackage {
  credits: number;
  price: number;
}

export interface CreditAddonItem {
  package: CreditAddonPackage;
  count: number;
  subtotal: number;
}

export interface CreditAddonResult {
  neededCredits: number;
  addonCredits: number;
  totalCredits: number;
  addonPrice: number;
  items: readonly CreditAddonItem[];
  hasAddon: boolean;
}

/** Comparativo entre a operação atual e o investimento com o Prospect. */
export interface InvestmentSummary {
  currentTotal: number;
  currentYearlyTotal: number;
  prospectTotal: number;
  planPrice: number;
  addonPrice: number;
  /** Custo de equipe mantido dentro do investimento (0 quando não mantido). */
  teamKept: number;
  monthlySavings: number;
  yearlySavings: number;
  yearlyProspectTotal: number;
  /** Economia relativa ao custo atual, entre 0 e 1. */
  savingsRate: number;
  hasCurrentCosts: boolean;
}

/** Plano sugerido para a demanda de créditos calculada. */
export interface PlanRecommendation {
  plan: CalculatorPlan;
  isEnough: boolean;
  missingCredits: number;
}

