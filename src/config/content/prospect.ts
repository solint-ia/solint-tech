import { CONTACT_ANCHOR } from "@/config/navigation";
import type { ProcessStep, StatusPill } from "@/types";

export const prospectHero = {
  eyebrow: "/01 — prospect",
  titleLead: "Transforme prospecção em ",
  titleTyped: "oportunidades reais",
  titleTail: ".",
  description:
    "Encontre as empresas certas, descubra contatos de decisores e deixe a inteligência artificial qualificar seus leads antes da reunião de vendas.",
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
      description: "Filtro automático por segmento e região",
      tags: ["CNAE: Segmento", "Região & Porte"],
      metric: "Segmentação ativa",
      type: "search",
    },
    {
      title: "Lista de decisores",
      description: "Localização de sócios e diretores",
      tags: ["Sócios & Diretores", "WhatsApp & E-mail"],
      metric: "Contatos verificados",
      type: "leads",
    },
  ],
  highlight: {
    title: "IA qualifica e encaminha",
    description: "Abordagem contextual e avaliação de interesse em tempo real",
    badge: "✦ Motor de IA Ativo",
    score: "Alta Intenção de Compra",
    sampleInteraction: "Interesse e perfil confirmados",
  },
  destination: {
    title: "Vendedor acionado",
    description: "Oportunidade entregue ao comercial no CRM",
    status: "Lead Pronto p/ Contato",
    speed: "Transferência automática",
  },
} as const;

export const flowSection = {
  eyebrow: "Como Funciona",
  title: "Um fluxo completo e automatizado para transformar sua prospecção",
} as const;

/** As 6 etapas do fluxo em S. A etapa 5 concentra o destaque com as perguntas da IA. */
export const prospectSteps: readonly ProcessStep[] = [
  {
    title: "Pesquisa segmentada",
    description:
      "Selecione segmento de atuação, localização e porte para encontrar seu público-alvo ideal.",
  },
  {
    title: "Extração de decisores",
    description: "A plataforma localiza automaticamente os sócios e diretores das empresas encontradas.",
  },
  {
    title: "Organização no CRM",
    description: "Os contatos verificados são organizados diretamente no CRM com dados completos.",
  },
  {
    title: "Programação de campanhas",
    description: "Configure envios de mensagens automáticas com horários estratégicos de abordagem.",
  },
  {
    title: "IA pré-qualifica o lead",
    description:
      "A inteligência artificial inicia o diálogo, tira dúvidas e avalia o interesse do contato.",
  },
  {
    title: "Encaminhamento ao time",
    description:
      "Leads com interesse confirmado são entregues na hora para seus vendedores fecharem a venda.",
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
  title: "Tecnologia de ponta para abastecer seu time com oportunidades prontas",
  description:
    "Unimos inteligência de dados B2B e IA contextual para eliminar o trabalho manual de busca e abordagem fria.",
  ctaLabel: "Começar com o Prospect",
  ctaHref: CONTACT_ANCHOR,
  highlights: [
    "Eliminação do trabalho braçal de busca",
    "Sincronização instantânea com seu CRM",
  ],
  capabilities: [
    {
      title: "Busca de Empresas & Decisores",
      description: "Localização precisa de empresas e contatos diretos de sócios e diretores com dados verificados.",
      badge: "Inteligência de Dados",
      iconKey: "database",
    },
    {
      title: "Motor de IA Pré-Qualificador",
      description: "Abordagem humanizada que compreende a necessidade do cliente antes de acionar seu vendedor.",
      badge: "✦ IA Nativa",
      iconKey: "bot",
      isHighlight: true,
    },
    {
      title: "Envio Automático para o CRM",
      description: "O lead qualificado entra direto no seu sistema com o histórico completo da conversa e aviso em tempo real para sua equipe de vendas.",
      badge: "Integração Contínua",
      iconKey: "userCheck",
    },
  ],
} as const;

export const prospectCta = {
  title: "Seu time comercial falando apenas com quem quer comprar.",
  description: "Veja o Prospect funcionando na prática com o perfil de cliente ideal da sua empresa.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
