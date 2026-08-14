import {
  Clock,
  Database,
  Headset,
  Link2,
  Target,
  Users,
} from "lucide-react";
import { CONTACT_ANCHOR } from "@/config/navigation";
import type { AgentApplication, ProjectCard, TechnologyGroup } from "@/types";

export const agentesHero = {
  eyebrow: "/01 — agentes de ia",
  titleLead: "Agentes que trabalham enquanto sua equipe pensa ",
  titleTyped: "no próximo passo",
  titleTail: ".",
  description:
    "Automatize conversas, decisões e tarefas operacionais sem perder contexto, controle ou personalidade.",
  primaryCta: { label: "Explorar aplicações", href: "#ajuda" },
  secondaryCta: { label: "Ver como funciona", href: "#tecnologias" },
} as const;

/** Eventos do feed "ao vivo" do agente, exibido ao lado do H1. */
export const agentFeed = {
  title: "agente-solint",
  statusLabel: "ao vivo",
  modeLabel: "Modo Autônomo",
  events: [
    {
      title: "Solicitação recebida",
      quote: '"Olá! Gostaria de entender como automatizar processos e integrar nossa operação."',
      tag: "Canal Omnichannel",
      timestamp: "10:42:01",
      type: "incoming",
    },
    {
      title: "Intenção identificada",
      detail: "Compreensão da demanda e mapeamento automático do fluxo operacional correspondente",
      tag: "Análise Contextual",
      type: "ai",
    },
    {
      title: "Execução autônoma",
      detail: "Retorno personalizado enviado e acionamento dos fluxos internos configurados",
      status: "Ação Concluída",
      tag: "Execução Autônoma",
      type: "action",
    },
  ],
  handoff: {
    title: "Operação sincronizada",
    detail: "Registro atualizado nos sistemas internos e equipe notificada com contexto completo",
    status: "Fluxo Concluído",
    tag: "Sincronização",
    destination: "CRM / ERP · Notificações de Equipe",
  },
} as const;

export const applicationsSection = {
  eyebrow: "Como podemos ajudar",
  title: "Onde a automação entra na sua operação.",
  description: "Escolha uma aplicação para ver como ela funciona na prática.",
} as const;

export const agentApplications: readonly AgentApplication[] = [
  {
    icon: Headset,
    title: "Atendimento automatizado",
    description: "Primeiro contato imediato com inteligência contextual e encaminhamento correto.",
    flow: ["Mensagem recebida", "Intenção identificada", "Resposta personalizada"],
    impact: "Resposta instantânea em segundos, 24 horas por dia, 365 dias ao ano.",
  },
  {
    icon: Target,
    title: "Qualificação de leads",
    description: "Perguntas estratégicas na hora certa para seu time focar só em quem tem real intenção de compra.",
    flow: ["Lead capturado", "Perfil avaliado", "Score calculado"],
    impact: "Seu time comercial falando apenas com oportunidades prontas para fechar.",
  },
  {
    icon: Clock,
    title: "Follow-up automático",
    description: "Retomadas inteligentes e programadas, sem depender da memória ou agenda de ninguém.",
    flow: ["Sem resposta em 24h", "Lembrete contextual", "Conversa reativada"],
    impact: "Zero oportunidades esquecidas no funil comercial.",
  },
  {
    icon: Link2,
    title: "Integração entre sistemas",
    description: "CRM, ERPs, planilhas e plataformas falando a mesma língua em tempo real.",
    flow: ["Evento disparado", "Sistema identificado", "Registro sincronizado"],
    impact: "Dados unificados e sincronizados sem retrabalho manual.",
  },
  {
    icon: Database,
    title: "Processamento de dados",
    description: "Leitura, estruturação, validação e enriquecimento de bases em alta escala.",
    flow: ["Dado bruto recebido", "Estrutura validada", "Enriquecimento aplicado"],
    impact: "Bases prontas para tomada de decisão imediata.",
  },
  {
    icon: Users,
    title: "Agentes internos",
    description: "Assistentes para consulta de procedimentos, bases de conhecimento e histórico da empresa.",
    flow: ["Pergunta interna", "Base de dados consultada", "Resposta precisa"],
    impact: "Menos tempo procurando informações, mais tempo executando.",
  },
] as const;

export const technologiesSection = {
  eyebrow: "Ecossistema de Integrações",
  title: "Uma estrutura conectada e orquestrada pela Solint.",
  hubLabel: "Orquestrador central de IA, conexões e automações em tempo real",
} as const;

export const technologyGroups: readonly TechnologyGroup[] = [
  {
    label: "Plataformas de Comunicação",
    category: "communication",
    items: [
      { name: "WhatsApp", iconKey: "whatsapp", badge: "Oficial API" },
      { name: "Instagram", iconKey: "instagram", badge: "Direct" },
      { name: "Telegram", iconKey: "telegram" },
      { name: "Webchat / Site", iconKey: "webchat", badge: "Portais" },
      { name: "Mercado Livre", iconKey: "ecommerce", badge: "Marketplaces" },
      { name: "E-mail", iconKey: "email", badge: "Omnichannel" },
    ],
  },
  {
    label: "Sistemas do Cliente",
    category: "client_systems",
    items: [
      { name: "CRMs", iconKey: "crm", badge: "HubSpot · RD · Salesforce · Pipedrive" },
      { name: "ERPs", iconKey: "erp", badge: "SAP · Totvs · Omie · Bling · ContaAzul" },
      { name: "Sistemas Próprios", iconKey: "internal", badge: "APIs & Webhooks" },
      { name: "Meios de Pagamento", iconKey: "finance", badge: "Stripe · Asaas · Mercado Pago" },
    ],
  },
  {
    label: "LLMs",
    category: "llms",
    items: [
      { name: "ChatGPT", iconKey: "chatgpt", badge: "OpenAI" },
      { name: "Grok", iconKey: "grok", badge: "xAI" },
      { name: "Gemini", iconKey: "gemini", badge: "Google" },
      { name: "DeepSeek", iconKey: "deepseek", badge: "R1 & V3" },
      { name: "Claude", iconKey: "claude", badge: "Anthropic" },
      { name: "ElevenLabs", iconKey: "elevenlabs", badge: "Voz Neural" },
    ],
  },
  {
    label: "Integrações",
    category: "integrations",
    items: [
      { name: "Bancos SQL", iconKey: "sql" },
      { name: "Google Calendar", iconKey: "calendar" },
      { name: "Google Drive", iconKey: "gdrive" },
      { name: "Excel & Sheets", iconKey: "excel" },
      { name: "Trello & Notion", iconKey: "trello" },
      { name: "PostgreSQL", iconKey: "postgres" },
      { name: "Webhooks / Make / Zapier", iconKey: "workflow" },
      { name: "e mais de 1000 integrações", iconKey: "more_1000", isHighlight: true },
    ],
  },
] as const;

export const projectsSection = {
  eyebrow: "Aplicações Práticas",
  title: "Automação e IA aplicada a resultados reais.",
  note: "Soluções inteligentes desenhadas para atender clientes, qualificar oportunidades e acompanhar todo o ciclo de vendas e pós-vendas.",
  imageLabel: "imagem do projeto",
} as const;

/** Cards de soluções por área de negócio. */
export const agentProjects: readonly ProjectCard[] = [
  {
    title: "Atendimento e Suporte",
    category: "Atendimento 24/7 · Resolução de Dúvidas",
    description: "Respostas imediatas a dúvidas frequentes, triagem inteligente de chamados, suporte contínuo 24/7 e transição fluida para atendentes humanos quando necessário.",
    image: "/media/agente-suporte.png",
  },
  {
    title: "Qualificação de Leads",
    category: "Triagem Inteligente · Filtro de Fit",
    description: "Abordagem ágil de novos contatos, identificação do perfil de cliente ideal, perguntas estratégicas de maturidade e direcionamento de leads prontos para o comercial.",
    image: "/media/agente-operacoes.png",
  },
  {
    title: "Vendas e Pós-Vendas",
    category: "Comercial & Retenção · Ciclo Completo",
    description: "Apresentação de propostas, agendamentos automáticos, follow-ups comerciais, suporte pós-compra e rotinas contínuas de satisfação e fidelização.",
    image: "/media/agente-vendas.png",
  },
] as const;

export const agentesCta = {
  title: "Qual processo você repetiria menos amanhã?",
  description:
    "Conte como funciona hoje. A gente mapeia o fluxo e mostra onde a automação compensa.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
