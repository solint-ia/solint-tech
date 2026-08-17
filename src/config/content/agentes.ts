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
  titleLead: "Agentes que trabalham enquanto sua equipe foca ",
  titleTyped: "no fechamento",
  titleTail: ".",
  description:
    "Automatize conversas, triagem de oportunidades e rotinas operacionais sem perder contexto, controle ou personalidade.",
  primaryCta: { label: "Explorar aplicações", href: "#ajuda" },
  secondaryCta: { label: "Ver integrações", href: "#tecnologias" },
} as const;

/** Eventos do feed "ao vivo" do agente, exibido ao lado do H1. */
export const agentFeed = {
  title: "agente-solint",
  statusLabel: "ao vivo",
  modeLabel: "Modo Autônomo",
  events: [
    {
      title: "Solicitação recebida",
      quote: '"Olá! Gostaria de entender como funciona o serviço para minha empresa."',
      tag: "WhatsApp / Site",
      timestamp: "10:42:01",
      type: "incoming",
    },
    {
      title: "Intenção identificada",
      detail: "Compreensão da necessidade e qualificação inicial com base nas regras do negócio",
      tag: "Análise com IA",
      type: "ai",
    },
    {
      title: "Resposta imediata",
      detail: "Envio de orientações personalizadas e agendamento direto com o time comercial",
      status: "Ação Concluída",
      tag: "Execução Direta",
      type: "action",
    },
  ],
  handoff: {
    title: "Operação sincronizada",
    detail: "Lead registrado no CRM com histórico completo e vendedor notificado na hora",
    status: "Fluxo Concluído",
    tag: "Sincronização",
    destination: "CRM / WhatsApp do Vendedor",
  },
} as const;

export const applicationsSection = {
  eyebrow: "Como podemos ajudar",
  title: "Onde a automação entra na sua operação.",
  description: "Aplicações práticas para eliminar gargalos e acelerar o atendimento.",
} as const;

export const agentApplications: readonly AgentApplication[] = [
  {
    icon: Headset,
    title: "Atendimento imediato 24/7",
    description: "Respostas instantâneas e personalizadas para clientes a qualquer hora, sem filas de espera.",
    flow: ["Mensagem recebida", "Intenção identificada", "Resposta personalizada"],
    impact: "Seus clientes atendidos em segundos, a qualquer dia ou horário.",
  },
  {
    icon: Target,
    title: "Filtro e qualificação de leads",
    description: "Perguntas pontuais para filtrar curiosos e enviar ao comercial apenas quem tem real intenção de compra.",
    flow: ["Contato iniciado", "Perfil avaliado", "Interesse confirmado"],
    impact: "Seu time comercial falando apenas com oportunidades prontas para avançar.",
  },
  {
    icon: Clock,
    title: "Follow-up e reativação",
    description: "Retomadas automáticas e humanizadas para não deixar propostas esfriarem ou contatos sem retorno.",
    flow: ["Sem resposta recente", "Lembrete inteligente", "Conversa reativada"],
    impact: "Zero oportunidades esquecidas ou perdidas no funil de vendas.",
  },
  {
    icon: Link2,
    title: "Integração entre ferramentas",
    description: "WhatsApp, CRM, ERPs e planilhas conectados para sincronizar informações sem digitação manual.",
    flow: ["Ação realizada", "Sistemas atualizados", "Dados sincronizados"],
    impact: "Dados sempre corretos e sem retrabalho da equipe.",
  },
  {
    icon: Database,
    title: "Organização de informações",
    description: "Leitura de comprovantes, pedidos e documentos para atualizar cadastros e sistemas automaticamente.",
    flow: ["Arquivo recebido", "Dados extraídos", "Registro efetuado"],
    impact: "Processamento de rotinas operacionais em segundos.",
  },
  {
    icon: Users,
    title: "Assistentes para sua equipe",
    description: "IA treinada no catálogo, regras e histórico da empresa para orientar colaboradores com rapidez.",
    flow: ["Dúvida interna", "Base consultada", "Orientação precisa"],
    impact: "Menos tempo procurando informações, mais tempo executando.",
  },
] as const;

export const technologiesSection = {
  eyebrow: "Ecossistema de Integrações",
  title: "Conectamos com as ferramentas que sua empresa já usa.",
  hubLabel: "Orquestrador central de IA, conexões e automações em tempo real",
} as const;

export const technologyGroups: readonly TechnologyGroup[] = [
  {
    label: "Canais de Atendimento",
    category: "communication",
    items: [
      { name: "WhatsApp", iconKey: "whatsapp", badge: "Oficial API" },
      { name: "Instagram", iconKey: "instagram", badge: "Direct" },
      { name: "Telegram", iconKey: "telegram" },
      { name: "Chat no Site", iconKey: "webchat", badge: "Portais" },
      { name: "Marketplaces", iconKey: "ecommerce", badge: "Mercado Livre" },
      { name: "E-mail", iconKey: "email", badge: "Omnichannel" },
    ],
  },
  {
    label: "Sistemas & CRMs",
    category: "client_systems",
    items: [
      { name: "CRMs", iconKey: "crm", badge: "HubSpot · RD · Salesforce · Pipedrive" },
      { name: "ERPs", iconKey: "erp", badge: "Totvs · SAP · Omie · Bling · ContaAzul" },
      { name: "Sistemas Próprios", iconKey: "internal", badge: "APIs & Webhooks" },
      { name: "Meios de Pagamento", iconKey: "finance", badge: "Stripe · Asaas · Mercado Pago" },
    ],
  },
  {
    label: "Modelos de Inteligência",
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
    label: "Automação & Banco de Dados",
    category: "integrations",
    items: [
      { name: "Bancos SQL", iconKey: "sql" },
      { name: "Google Calendar", iconKey: "calendar" },
      { name: "Google Drive", iconKey: "gdrive" },
      { name: "Excel & Sheets", iconKey: "excel" },
      { name: "Trello & Notion", iconKey: "trello" },
      { name: "PostgreSQL", iconKey: "postgres" },
      { name: "Webhooks & Automações", iconKey: "workflow" },
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
  title: "Quer ver a automação rodando no cenário da sua empresa?",
  description:
    "Conte-nos como funciona seu fluxo atual. Desenhamos a estrutura de agentes ideal para sua operação.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;

