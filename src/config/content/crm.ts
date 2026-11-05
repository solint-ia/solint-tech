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
  titleLead: "Solint CRM: ",
  titleAccent: "atendimento, vendas e IA",
  titleTail: " na mesma tela.",
  description:
    "A plataforma que a Solint construiu para quem vende pelo WhatsApp: caixa de entrada multiatendente, agentes de IA 24h, funil de vendas e follow-up automático, sem ferramentas soltas.",
  /** Destaques com os mesmos ícones coloridos da página /crm. */
  highlights: [
    { title: "WhatsApp", text: "API oficial ou QR Code", image: "/crm/icons/whatsapp.svg" },
    { title: "Agentes de IA", text: "Treinados com seus dados", image: "/crm/icons/agentes.png" },
    { title: "Funil e follow-up", text: "Kanban e retomada automática", image: "/crm/icons/funil.svg" },
    { title: "Painel", text: "Fila, tempo de resposta e CSAT", image: "/crm/icons/painel.png" },
  ],
  primaryCta: { label: "Conhecer o Solint CRM", href: "/crm" },
  secondaryCta: { label: "Acessar plataforma", href: CRM_APP_URL },
} as const;

/* ==========================================================================
   Página /crm
   ========================================================================== */
export const crmHero = {
  marker: "/01 — solint crm",
  eyebrow: "CRM",
  titleLead: "Gestão comercial completa, do primeiro contato ",
  titleTyped: "ao fechamento",
  titleTail: ".",
  description:
    "Organize oportunidades, automatize follow-ups e acompanhe o desempenho da sua equipe em tempo real, com o CRM da Solint.",
} as const;

/** Ícones de linha da navegação do tour (mapeados para Lucide no componente). */
export type CrmTourIcon = "inbox" | "bot" | "funnel" | "workflow" | "megaphone" | "calendar" | "chart";

export interface CrmTourItem {
  key: CrmScreenKey;
  icon: CrmTourIcon;
  label: string;
  title: string;
  description: string;
  /** Destaques exibidos em linha abaixo do módulo ativo. */
  points: readonly string[];
  /** Detalhes revelados por "Ver mais detalhes". */
  details: readonly string[];
}

export const crmTour: readonly CrmTourItem[] = [
  {
    key: "atendimento",
    icon: "inbox",
    label: "Caixa de entrada",
    title: "Caixa de entrada multiatendente",
    description:
      "Todas as conversas de WhatsApp da empresa num lugar só, com responsável, prioridade, etiquetas e notas internas.",
    points: ["Vários números e equipes", "Pausar IA e assumir a conversa", "Áudio, imagem e anexos"],
    details: [
      "Conecte pela API oficial da Meta ou por QR Code e organize as conversas em caixas por área.",
      "Distribua automaticamente entre atendentes e veja quem está sem responsável.",
      "Notas internas e menções para a equipe combinar o próximo passo sem sair da conversa.",
    ],
  },
  {
    key: "agente",
    icon: "bot",
    label: "Agentes de IA",
    title: "Agentes de IA",
    description:
      "Escreva as instruções como orientaria um atendente novo, conecte a base de conhecimento e teste antes de publicar.",
    points: ["Atendimento 24/7", "Base de conhecimento", "Passa para humano"],
    details: [
      "Respondem, qualificam, consultam o catálogo e marcam horários na agenda da empresa.",
      "Testador integrado e histórico de versões para ajustar com segurança.",
      "Transferem a conversa para a equipe quando o cliente pede ou a regra exige.",
    ],
  },
  {
    key: "funil",
    icon: "funnel",
    label: "Funil de vendas",
    title: "Funil de vendas",
    description:
      "Cada negociação, do novo lead ao fechamento, em um quadro Kanban com valores, responsável e alerta de oportunidades paradas.",
    points: ["Etapas configuráveis", "Conversão ponderada", "Arrastar e soltar"],
    details: [
      "Crie funis por produto ou equipe, com etapas e probabilidades próprias.",
      "Valor previsto e conversão ponderada por etapa para projetar o mês.",
      "Follow-up por etapa e aviso quando uma oportunidade fica parada.",
    ],
  },
  {
    key: "followup",
    icon: "workflow",
    label: "Follow-up",
    title: "Follow-up e automações",
    description:
      "Monte a cadência em blocos: mensagem, espera, resposta ou silêncio, ação no CRM e passagem para o vendedor.",
    points: ["Ramos por resposta", "Ações no funil", "Sem código"],
    details: [
      "Fluxos visuais que retomam automaticamente quem parou de responder.",
      "Ramifique pela resposta do cliente e mova a oportunidade no funil.",
      "Passe para uma pessoa da equipe no momento certo da conversa.",
    ],
  },
  {
    key: "campanhas",
    icon: "megaphone",
    label: "Campanhas",
    title: "Campanhas",
    description:
      "Dispare para a base pela API oficial ou por QR Code, em lotes seguros, e acompanhe quem recebeu, leu e respondeu.",
    points: ["Agendamento", "Envio em lotes", "Métricas por destinatário"],
    details: [
      "Templates aprovados pela Meta e listas segmentadas por etiqueta ou etapa.",
      "Intervalos e lotes configuráveis para proteger o número da empresa.",
      "Entregues, lidos, respostas e falhas acompanhados em tempo real.",
    ],
  },
  {
    key: "agenda",
    icon: "calendar",
    label: "Agenda",
    title: "Agenda",
    description:
      "Várias agendas por área, horários de atendimento e compromissos marcados pelo time ou pelo agente de IA.",
    points: ["Google Agenda", "Dia, semana e lista", "Bloqueios de horário"],
    details: [
      "Sincronização com o Google Agenda de cada pessoa da equipe.",
      "O agente de IA consulta horários livres e confirma o compromisso na conversa.",
      "Cores por agenda e bloqueios para folgas e feriados.",
    ],
  },
  {
    key: "painel",
    icon: "chart",
    label: "Painel e relatórios",
    title: "Painel e relatórios",
    description:
      "Fila aberta, conversas sem responsável, tempo de primeira resposta e satisfação do cliente no mesmo painel.",
    points: ["Precisa de atenção", "CSAT e resolvidos", "Filtros por caixa e período"],
    details: [
      "Desempenho por atendente, por caixa de entrada e por período.",
      "Tempo de primeira resposta e de resolução para acompanhar o SLA.",
      "Pesquisa de satisfação (CSAT) ao final de cada atendimento.",
    ],
  },
] as const;

export const crmModulesSection = {
  eyebrow: "Módulos",
  title: "Tudo o que a operação comercial precisa, já conectado.",
  description:
    "Ative só o que faz sentido para o seu momento. Os módulos conversam entre si, sem integração para manter.",
} as const;

/** Ícones de linha das etiquetas dos módulos (mapeados para Lucide no componente). */
export type CrmTagIcon =
  | "message"
  | "qr"
  | "users"
  | "note"
  | "clock"
  | "book"
  | "hand"
  | "kanban"
  | "target"
  | "branch"
  | "zap"
  | "send"
  | "checks"
  | "calendar"
  | "building"
  | "pin"
  | "timer"
  | "smile";

export interface CrmModule {
  key: string;
  title: string;
  /** Rótulo curto do card no carrossel. */
  shortTitle: string;
  description: string;
  /** Ícone colorido em `public/crm/icons`. */
  image: string;
  tags: readonly { label: string; icon: CrmTagIcon }[];
}

export const crmModules: readonly CrmModule[] = [
  {
    key: "inbox",
    title: "Caixa de entrada multiatendente",
    shortTitle: "Caixa de entrada",
    description:
      "WhatsApp pela API oficial da Meta ou por QR Code, com várias caixas, equipes e distribuição de conversas.",
    image: "/crm/icons/whatsapp.svg",
    tags: [
      { label: "API oficial", icon: "message" },
      { label: "QR Code", icon: "qr" },
      { label: "Multiatendente", icon: "users" },
      { label: "Notas internas", icon: "note" },
    ],
  },
  {
    key: "bot",
    title: "Agentes de IA",
    shortTitle: "Agentes de IA",
    description:
      "Respondem, qualificam, consultam o catálogo e marcam horários. Passam para uma pessoa quando precisa.",
    image: "/crm/icons/agentes.png",
    tags: [
      { label: "Atendimento 24/7", icon: "clock" },
      { label: "Base de conhecimento", icon: "book" },
      { label: "Passa para humano", icon: "hand" },
    ],
  },
  {
    key: "funnel",
    title: "Funil de vendas",
    shortTitle: "Funil de vendas",
    description:
      "Quadro Kanban com etapas próprias, valores, responsável por oportunidade e conversão ponderada.",
    image: "/crm/icons/funil.svg",
    tags: [
      { label: "Kanban", icon: "kanban" },
      { label: "Etapas próprias", icon: "branch" },
      { label: "Previsão de receita", icon: "target" },
    ],
  },
  {
    key: "followup",
    title: "Follow-up e automações",
    shortTitle: "Follow-up",
    description:
      "Fluxos de retomada montados em blocos: esperar, ramificar pela resposta, agir no funil e passar para humano.",
    image: "/crm/icons/automacoes.png",
    tags: [
      { label: "Construtor visual", icon: "branch" },
      { label: "Ações no funil", icon: "zap" },
      { label: "Esperas inteligentes", icon: "timer" },
    ],
  },
  {
    key: "campaigns",
    title: "Campanhas",
    shortTitle: "Campanhas",
    description:
      "Disparos para a base com templates aprovados e acompanhamento de entregues, lidos e respostas.",
    image: "/crm/icons/campanhas.png",
    tags: [
      { label: "Templates aprovados", icon: "checks" },
      { label: "Envio em lotes", icon: "send" },
      { label: "Agendamento", icon: "clock" },
    ],
  },
  {
    key: "calendar",
    title: "Agenda + Google",
    shortTitle: "Agenda",
    description: "Várias agendas, horários de atendimento e sincronização com o Google Agenda.",
    image: "/crm/icons/agenda.png",
    tags: [
      { label: "Google Agenda", icon: "calendar" },
      { label: "Várias agendas", icon: "users" },
      { label: "Marcação pela IA", icon: "zap" },
    ],
  },
  {
    key: "prospect",
    title: "Prospecção B2B",
    shortTitle: "Prospecção B2B",
    description: "Busque empresas por CNAE e região e leve sócios e decisores direto para o CRM.",
    image: "/crm/icons/prospeccao.png",
    tags: [
      { label: "Busca por CNAE", icon: "building" },
      { label: "Filtro por região", icon: "pin" },
      { label: "Sócios e decisores", icon: "users" },
    ],
  },
  {
    key: "reports",
    title: "Painel e relatórios",
    shortTitle: "Painel e relatórios",
    description: "Atendimentos, tempo de resposta, desempenho por atendente e satisfação do cliente.",
    image: "/crm/icons/painel.png",
    tags: [
      { label: "Tempo de resposta", icon: "timer" },
      { label: "Por atendente", icon: "users" },
      { label: "CSAT", icon: "smile" },
    ],
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
