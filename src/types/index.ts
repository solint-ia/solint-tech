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

/** Cartão de área de atuação exibido no carrossel 3D da home. */
export interface ServiceArea {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
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
