import {
  Activity,
  Clock,
  Database,
  Headset,
  Link2,
  Megaphone,
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
  metrics: {
    latency: "380ms",
    mode: "100% Autônomo",
    successRate: "99.4%",
  },
  events: [
    {
      title: "Lead identificado",
      quote: '"Preciso de atendimento para minha equipe comercial."',
      tag: "WhatsApp Oficial",
      timestamp: "10:42:01",
      type: "incoming",
    },
    {
      title: "Intenção reconhecida",
      detail: "Classificado como interesse comercial em automação de vendas",
      confidence: "Confiança: 99.4%",
      tag: "Análise Semântica",
      type: "ai",
    },
    {
      title: "Resposta enviada",
      detail: "Abordagem personalizada contextualizando o perfil da empresa",
      speed: "Disparado em 1.8s",
      tag: "Ação Autônoma",
      type: "action",
    },
  ],
  handoff: {
    title: "Equipe comercial acionada",
    detail: "Lead qualificado encaminhado ao vendedor responsável",
    status: "Lead Pronto p/ Fechar",
    tag: "Handoff CRM",
    destination: "CRM · Notificação Slack/WhatsApp",
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
    flow: ["Mensagem recebida 💬", "Intenção identificada 🧠", "Resposta personalizada ⚡"],
    impact: "Resposta instantânea em segundos, 24 horas por dia, 365 dias ao ano.",
    badge: "✦ 24/7 Ativo",
    speed: "2.1s de resposta",
  },
  {
    icon: Target,
    title: "Qualificação de leads",
    description: "Perguntas estratégicas na hora certa para seu time focar só em quem tem real intenção de compra.",
    flow: ["Lead capturado", "Perfil avaliado", "Score calculado"],
    impact: "Seu time comercial falando apenas com oportunidades prontas para fechar.",
    badge: "🎯 Filtro de Fit",
    speed: "Score em tempo real",
  },
  {
    icon: Clock,
    title: "Follow-up automático",
    description: "Retomadas inteligentes e programadas, sem depender da memória ou agenda de ninguém.",
    flow: ["Sem resposta em 24h", "Lembrete contextual", "Conversa reativada"],
    impact: "Zero oportunidades esquecidas no funil comercial.",
    badge: "⚡ Cadência Ágil",
    speed: "Cadência 100% pontual",
  },
  {
    icon: Link2,
    title: "Integração entre sistemas",
    description: "CRM, ERPs, planilhas e plataformas falando a mesma língua em tempo real.",
    flow: ["Evento disparado", "Sistema identificado", "Registro sincronizado"],
    impact: "Dados unificados e sincronizados sem retrabalho manual.",
    badge: "🔗 Integração Contínua",
    speed: "Sincronização < 1s",
  },
  {
    icon: Database,
    title: "Processamento de dados",
    description: "Leitura, estruturação, validação e enriquecimento de bases em alta escala.",
    flow: ["Dado bruto recebido", "Estrutura validada", "Enriquecimento aplicado"],
    impact: "Bases prontas para tomada de decisão imediata.",
    badge: "📊 Alta Escala",
    speed: "+10k registros/min",
  },
  {
    icon: Megaphone,
    title: "Automação comercial",
    description: "Distribuição justa de oportunidades, cadências de abordagem e registro automático no CRM.",
    flow: ["Oportunidade criada", "SDR atribuído", "Cadência iniciada"],
    impact: "Velocidade máxima no primeiro contato com o prospect.",
    badge: "🚀 Handoff Instantâneo",
    speed: "Atribuição em 3s",
  },
  {
    icon: Users,
    title: "Agentes internos",
    description: "Assistentes para consulta de procedimentos, bases de conhecimento e histórico da empresa.",
    flow: ["Pergunta interna", "Base de dados consultada", "Resposta precisa"],
    impact: "Menos tempo procurando informações, mais tempo executando.",
    badge: "👥 Base Interna",
    speed: "Acesso imediato",
  },
  {
    icon: Activity,
    title: "Monitoramento de operações",
    description: "Auditoria contínua e alertas imediatos quando qualquer métrica ou fila sai do padrão.",
    flow: ["Métrica observada", "Desvio detectado", "Alerta disparado"],
    impact: "Problemas identificados e corrigidos antes de virarem crise.",
    badge: "🚨 Alertas 24/7",
    speed: "Detecção instantânea",
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
  eyebrow: "Projetos em Produção",
  title: "Automação e IA aplicada a resultados reais.",
  note: "Cases de agentes autônomos gerando impacto mensurável em vendas, atendimento e operações.",
  imageLabel: "imagem do projeto",
} as const;

/** Cards de tipos de agente de IA. */
export const agentProjects: readonly ProjectCard[] = [
  {
    title: "Atendimento e Suporte",
    category: "IA Conversacional · Suporte 24/7",
    description: "Triagem imediata, resolução autônoma de chamados e dúvidas frequentes com base em conhecimento da empresa, com handoff suave para a equipe.",
    badge: "Atendimento & Suporte",
    image: "/media/agente-suporte.png",
  },
  {
    title: "Vendas e Pós-vendas",
    category: "Comercial & Retenção · Funil Inteligente",
    description: "Qualificação instantânea de leads inbound, abordagem ativa, agendamento direto na agenda dos vendedores e cadências de retenção e pós-venda.",
    badge: "Vendas & Pós-Vendas",
    image: "/media/agente-vendas.png",
  },
  {
    title: "Agentes de IA",
    category: "Operações · Automação de Processos",
    description: "Agentes autônomos para rotinas operacionais, conciliação de dados, integração entre CRMs/ERPs e auditoria de processos de ponta a ponta.",
    badge: "Agentes de IA",
    image: "/media/agente-operacoes.png",
  },
] as const;

export const agentesCta = {
  title: "Qual processo você repetiria menos amanhã?",
  description:
    "Conte como funciona hoje. A gente mapeia o fluxo e mostra onde a automação compensa.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
