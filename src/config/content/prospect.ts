import { CONTACT_ANCHOR } from "@/config/navigation";
import type { ProcessStep, StatusPill } from "@/types";

export const prospectHero = {
  eyebrow: "/01 — prospect",
  titleLead: "Transforme prospecção em ",
  titleTyped: "oportunidades reais",
  titleTail: ".",
  description:
    "Encontre as empresas certas, automatize seus contatos e deixe a inteligência artificial preparar seus leads para o momento da venda.",
  primaryCta: { label: "Começar agora", href: CONTACT_ANCHOR },
  secondaryCta: { label: "Ver como funciona", href: "#como-funciona" },
} as const;

/** Diagrama vertical do hero: pipeline vivo de dados e inteligência artificial. */
export const heroPipeline = {
  header: {
    badge: "Pipeline Ativo",
    status: "Operação Contínua",
  },
  nodes: [
    {
      title: "Pesquisa de empresas",
      description: "Varredura automática por critérios B2B",
      tags: ["CNAE: Tecnologia", "UF: SP · RJ · PR"],
      metric: "Segmentação ativa",
      type: "search",
    },
    {
      title: "Lista de leads qualificados",
      description: "Extração e enriquecimento de decisores",
      tags: ["Sócios & C-Level", "WhatsApp & E-mail"],
      metric: "Contatos verificados",
      type: "leads",
    },
  ],
  highlight: {
    title: "IA qualifica e encaminha",
    description: "Abordagem contextual e análise de fit em tempo real",
    badge: "✦ Motor de IA Ativo",
    score: "Alta Intenção de Compra",
    sampleInteraction: "Interesse e fit confirmados",
  },
  destination: {
    title: "Time comercial acionado",
    description: "Oportunidade entregue ao SDR no CRM",
    status: "Lead Pronto p/ Contato",
    speed: "Handoff automático",
  },
} as const;

export const flowSection = {
  eyebrow: "Como Funciona",
  title: "Um fluxo completo e automatizado para transformar sua prospecção",
} as const;

/** As 6 etapas do fluxo em S. A etapa 5 concentra o destaque com as perguntas da IA. */
export const prospectSteps: readonly ProcessStep[] = [
  {
    title: "Cria uma pesquisa",
    description:
      "Seleciona CNAEs, estados e capital social para encontrar empresas específicas.",
  },
  {
    title: "Extrai os leads",
    description: "Cria uma lista automática com os sócios das empresas encontradas.",
  },
  {
    title: "Exporta para o CRM",
    description: "Leva esses contatos dos sócios diretamente para o CRM completo.",
  },
  {
    title: "Cria campanhas",
    description: "Define campanhas de envio de mensagens com data e horário programados.",
  },
  {
    title: "IA faz a pré-qualificação",
    description:
      "Inteligência artificial faz o primeiro contato e qualifica os leads automaticamente.",
  },
  {
    title: "IA transfere para seu time",
    description:
      "Leads qualificados são automaticamente encaminhados para sua equipe de vendas.",
  },
] as const;

/** Índice (base 0) da etapa destacada do fluxo. */
export const HIGHLIGHTED_STEP_INDEX = 4;

/** Perguntas que a IA usa na pré-qualificação (etapa 5). */
export const qualificationQuestions: readonly string[] = [
  "Qual seu interesse?",
  "Quando pretende comprar?",
  "Qual seu orçamento?",
  "Você é o decisor?",
  "Tem interesse real?",
  "Prazo de decisão?",
] as const;

export const destinationPanel = {
  eyebrow: "Destino do fluxo",
  title: "O lead chega pronto. Hora de vender.",
} as const;

export const leadStatuses: readonly StatusPill[] = [
  { label: "Identificado", accent: "cyan" },
  { label: "Qualificado", accent: "cyan" },
  { label: "Interesse confirmado", accent: "cyan" },
  { label: "Pronto para fechar", accent: "amber" },
] as const;

export const platformSection = {
  eyebrow: "Diferenciais Tecnológicos",
  title: "Uma estrutura robusta para abastecer seu time com oportunidades reais",
  description:
    "Combinamos inteligência de dados públicos B2B e IA contextual para eliminar o trabalho braçal de busca e abordagem manual.",
  ctaLabel: "Começar com o Prospect",
  ctaHref: CONTACT_ANCHOR,
  highlights: [
    "Redução expressiva do trabalho operacional",
    "Sincronização instantânea com seu CRM",
  ],
  capabilities: [
    {
      title: "Varredura & Enriquecimento B2B",
      description: "Localização precisa de empresas e decisores (sócios, diretores e C-levels) com dados e contatos válidos.",
      badge: "Inteligência de Dados",
      iconKey: "database",
    },
    {
      title: "Motor de IA Pré-Qualificador",
      description: "Abordagem automatizada e humanizada que compreende o momento de compra antes de acionar seu vendedor.",
      badge: "✦ IA Nativa",
      iconKey: "bot",
      isHighlight: true,
    },
    {
      title: "Handoff Instantâneo ao CRM",
      description: "Passagem de bastão automática com histórico consolidado e notificações em tempo real para o time comercial.",
      badge: "Integração Contínua",
      iconKey: "userCheck",
    },
  ],
} as const;

export const prospectCta = {
  title: "Seu time falando só com quem está pronto para comprar.",
  description: "Mostramos o Prospect rodando com o seu perfil de cliente ideal.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
