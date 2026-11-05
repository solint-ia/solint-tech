import { CONTACT_ANCHOR } from "@/config/navigation";

/** Endereço público da plataforma (login e cadastro). */
export const CRM_APP_URL = "https://crm.solint.tech";

/**
 * Capturas reais do Solint CRM, geradas com dados fictícios de demonstração
 * (nenhum cliente real aparece). Todas em 2880x1800.
 */
export const crmScreens = {
  atendimento: {
    src: "/crm/atendimento.webp",
    alt: "Caixa de entrada do Solint CRM com conversas de WhatsApp e respostas do agente de IA",
    url: "crm.solint.tech/conversas",
  },
  funil: {
    src: "/crm/funil.webp",
    alt: "Funil de oportunidades do Solint CRM em quadro Kanban",
    url: "crm.solint.tech/kanban",
  },
  painel: {
    src: "/crm/painel.webp",
    alt: "Painel de visão geral do Solint CRM com fila, tempo de resposta e CSAT",
    url: "crm.solint.tech/dashboard",
  },
  agente: {
    src: "/crm/agente-ia.webp",
    alt: "Editor de agente de IA do Solint CRM com instruções e testador",
    url: "crm.solint.tech/agentes-ia",
  },
  followup: {
    src: "/crm/followup.webp",
    alt: "Construtor visual de follow-up do Solint CRM com ramos de resposta e sem resposta",
    url: "crm.solint.tech/follow-up",
  },
  campanhas: {
    src: "/crm/campanhas.webp",
    alt: "Campanhas do Solint CRM com acompanhamento de enviados, entregues, lidos e respostas",
    url: "crm.solint.tech/campanhas",
  },
  agenda: {
    src: "/crm/agenda.webp",
    alt: "Agenda semanal do Solint CRM com compromissos de várias agendas coloridas",
    url: "crm.solint.tech/agenda",
  },
} as const;

export type CrmScreenKey = keyof typeof crmScreens;

export const SCREEN_WIDTH = 2880;
export const SCREEN_HEIGHT = 1800;

/* ==========================================================================
   Home — produto em destaque
   ========================================================================== */
export const crmSpotlight = {
  badge: "Produto Solint",
  title: "Solint CRM: atendimento, vendas e IA na mesma tela.",
  description:
    "A plataforma que a Solint construiu para quem vende pelo WhatsApp. Caixa de entrada multiatendente, agentes de IA que respondem 24h, funil de vendas e follow-up automático, sem ferramentas soltas.",
  highlights: [
    "WhatsApp pela API oficial ou por QR Code",
    "Agentes de IA treinados com os dados da sua empresa",
    "Funil Kanban, follow-up e campanhas integrados",
    "Painel com tempo de resposta, fila e CSAT",
  ],
  primaryCta: { label: "Conhecer o Solint CRM", href: "/crm" },
  secondaryCta: { label: "Acessar plataforma", href: CRM_APP_URL },
} as const;

/* ==========================================================================
   Página /crm
   ========================================================================== */
export const crmHero = {
  eyebrow: "/01 — solint crm",
  badge: "Plataforma própria Solint",
  titleLead: "Atendimento, vendas e IA ",
  titleTyped: "no mesmo lugar",
  titleTail: ".",
  description:
    "O Solint CRM reúne o WhatsApp da sua empresa, agentes de IA, funil de vendas e follow-up numa plataforma só. Sua equipe atende mais rápido e nenhuma oportunidade fica sem retorno.",
  primaryCta: { label: "Acessar o CRM", href: CRM_APP_URL },
  secondaryCta: { label: "Agendar demonstração", href: CONTACT_ANCHOR },
  stats: [
    { value: "24/7", label: "agentes de IA de plantão" },
    { value: "8", label: "módulos integrados" },
    { value: "1", label: "plataforma no lugar de várias" },
  ],
  /** Cartões flutuantes sobre o mockup do hero. */
  floating: {
    ai: { title: "Clara · Vendas", text: "respondeu em 4s", tag: "IA" },
    deal: { title: "Oportunidade movida", text: "Proposta → Negociação" },
  },
} as const;

export interface CrmTourItem {
  key: CrmScreenKey;
  label: string;
  title: string;
  description: string;
  points: readonly string[];
}

export const crmTourSection = {
  eyebrow: "Por dentro da plataforma",
  title: "Uma operação, uma visão.",
  description:
    "Tudo o que acontece com o cliente, do primeiro “oi” ao fechamento, registrado e visível para a equipe e a gestão.",
} as const;

export const crmTour: readonly CrmTourItem[] = [
  {
    key: "funil",
    label: "Funil de vendas",
    title: "Funil Kanban de oportunidades",
    description:
      "Cada negociação, do novo lead ao fechamento, com follow-up por etapa e alerta de oportunidades paradas.",
    points: ["Etapas configuráveis", "Conversão ponderada", "Arrastar e soltar"],
  },
  {
    key: "painel",
    label: "Painel",
    title: "Gestão com números em tempo real",
    description:
      "Fila aberta, conversas sem responsável, tempo de primeira resposta e satisfação do cliente no mesmo painel.",
    points: ["Precisa de atenção", "CSAT e resolvidos", "Filtros por caixa e período"],
  },
  {
    key: "agente",
    label: "Agentes de IA",
    title: "Agentes de IA que você mesmo configura",
    description:
      "Escreva as instruções como orientaria um atendente novo, conecte a base de conhecimento e teste antes de publicar.",
    points: ["Base de conhecimento", "Testador e versões", "Agenda e catálogo integrados"],
  },
  {
    key: "followup",
    label: "Follow-up e automações",
    title: "Follow-up visual, sem código",
    description:
      "Monte a cadência em blocos: mensagem, espera, resposta ou silêncio, ação no CRM e passagem para o vendedor.",
    points: ["Ramos por resposta", "Ações no funil", "Passar para humano"],
  },
  {
    key: "campanhas",
    label: "Campanhas",
    title: "Campanhas para a base inteira",
    description:
      "Dispare pela API oficial ou por QR Code, em lotes seguros, e acompanhe quem recebeu, leu e respondeu.",
    points: ["Agendamento", "Envio em lotes", "Métricas por destinatário"],
  },
  {
    key: "agenda",
    label: "Agenda",
    title: "Agenda da equipe e do agente de IA",
    description:
      "Várias agendas por área, horários de atendimento e compromissos marcados pelo time ou pela IA.",
    points: ["Google Agenda", "Visões dia, semana e lista", "Bloqueios de horário"],
  },
  {
    // Por último: a caixa de entrada já aparece no hero, logo acima.
    key: "atendimento",
    label: "Atendimento",
    title: "Caixa de entrada multiatendente",
    description:
      "Todas as conversas da empresa num lugar só, com responsável, prioridade, etiquetas e notas internas.",
    points: ["Vários números e equipes", "Pausar IA e assumir a conversa", "Áudio, imagem e anexos"],
  },
] as const;

export const crmModulesSection = {
  eyebrow: "Módulos",
  title: "Tudo o que a operação comercial precisa, já conectado.",
  description:
    "Ative só o que faz sentido para o seu momento. Os módulos conversam entre si, sem integração para manter.",
} as const;

export interface CrmModule {
  iconKey: string;
  title: string;
  description: string;
  /** Largura em colunas (de 12) no desktop. */
  span: 4 | 5 | 7;
  highlight?: boolean;
  tags?: readonly string[];
}

export const crmModules: readonly CrmModule[] = [
  {
    iconKey: "inbox",
    title: "Caixa de entrada omnichannel",
    description:
      "WhatsApp pela API oficial da Meta ou por QR Code, com várias caixas, equipes e distribuição de conversas.",
    span: 7,
    highlight: true,
    tags: ["API oficial", "QR Code", "Multiatendente", "Notas internas"],
  },
  {
    iconKey: "bot",
    title: "Agentes de IA",
    description:
      "Respondem, qualificam, consultam o catálogo e marcam horários. Passam para uma pessoa quando precisa.",
    span: 5,
    tags: ["24/7", "Base de conhecimento"],
  },
  {
    iconKey: "kanban",
    title: "Funil de vendas",
    description: "Quadro Kanban com etapas próprias, valores e responsável por oportunidade.",
    span: 4,
  },
  {
    iconKey: "workflow",
    title: "Follow-up e automações",
    description: "Fluxos de retomada montados em blocos: esperar, ramificar pela resposta, agir no funil e passar para humano.",
    span: 4,
  },
  {
    iconKey: "megaphone",
    title: "Campanhas",
    description: "Disparos para a base com templates aprovados e acompanhamento de entregues, lidos e respostas.",
    span: 4,
  },
  {
    iconKey: "calendar",
    title: "Agenda + Google",
    description: "Várias agendas, horários de atendimento e sincronização com o Google Agenda.",
    span: 4,
  },
  {
    iconKey: "radar",
    title: "Prospecção B2B",
    description: "Busque empresas por CNAE e região e leve sócios e decisores direto para o CRM.",
    span: 4,
  },
  {
    iconKey: "chart",
    title: "Painel e relatórios",
    description: "Atendimentos, tempo de resposta, desempenho por atendente e CSAT.",
    span: 4,
  },
] as const;

export const crmJourneySection = {
  eyebrow: "Do atendimento ao crescimento",
  title: "Menos ferramentas soltas. Mais continuidade.",
} as const;

export const crmJourney: readonly { title: string; description: string }[] = [
  {
    title: "O cliente chama no WhatsApp",
    description: "A conversa cai numa caixa compartilhada, com responsável, etiquetas e histórico.",
  },
  {
    title: "O agente de IA atende",
    description: "Responde com as regras, os produtos e a agenda da empresa e chama a equipe quando precisa.",
  },
  {
    title: "A oportunidade entra no funil",
    description: "Cada negociação é acompanhada do primeiro contato até o fechamento.",
  },
  {
    title: "Ninguém fica sem retorno",
    description: "Follow-ups automáticos retomam quem parou de responder.",
  },
  {
    title: "A gestão enxerga tudo",
    description: "O painel mostra atendimento e vendas para decidir com números.",
  },
] as const;

export const crmCta = {
  title: "Coloque sua operação comercial numa plataforma só.",
  description:
    "Mostramos o Solint CRM funcionando com o cenário da sua empresa: números, equipe e agentes de IA.",
  ctaLabel: "Agendar demonstração",
  ctaHref: CONTACT_ANCHOR,
  note: "Já é cliente? Acesse em crm.solint.tech",
} as const;
