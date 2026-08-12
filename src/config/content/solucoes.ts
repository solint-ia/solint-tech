import { CONTACT_ANCHOR } from "@/config/navigation";
import type {
  ClosingStep,
  DevelopmentServiceGroup,
  ProcessStep,
  ProjectCard,
  SolutionPillar,
} from "@/types";

export const solucoesHero = {
  eyebrow: "/01 — soluções",
  titleLead: "Produtos digitais feitos para ",
  titleTyped: "rodar e crescer",
  titleTail: ".",
  paragraphs: [
    "A Solint desenvolve experiências digitais modernas, rápidas, responsivas e alinhadas aos objetivos do negócio.",
    "Da landing page que precisa converter ao sistema que sustenta a operação inteira.",
  ],
  primaryCta: { label: "Falar sobre meu projeto", href: CONTACT_ANCHOR },
  secondaryCta: { label: "Ver portfólio", href: "#portfolio" },
  mockup: {
    url: "app.solint.com/analytics",
    status: "Produção Ativa",
    kpis: [
      { label: "Usuários Ativos", value: "+14.2k", change: "+28%" },
      { label: "Taxa Conversão", value: "4.85%", change: "+1.2%" },
      { label: "Latência Média", value: "38ms", change: "Otimizado" },
    ],
    activities: [
      { name: "Sincronização ERP", tag: "Automação", status: "Concluído", time: "Há 2s" },
      { name: "Pipeline CI/CD", tag: "Deploy", status: "Sucesso", time: "Há 1m" },
      { name: "Agente de IA", tag: "Qualificação", status: "Ativo", time: "Agora" },
    ],
    badges: {
      top: { title: "Arquitetura Escalável", tag: "✦ Alta Performance" },
      bottom: { title: "Alta Escala Cloud", tag: "⚡ 99.9% Uptime" },
    },
  },
} as const;

export const servicesSection = {
  eyebrow: "Nossas Soluções",
  title: "Engenharia de software com foco em resultado.",
  description:
    "Do site de alta conversão a plataformas complexas e ecossistemas integrados de dados.",
} as const;

export const solutionPillars: readonly SolutionPillar[] = [
  {
    id: "presenca",
    label: "Presença & Conversão",
    shortLabel: "Web & E-commerce",
    badge: "✦ Alto Impacto",
    subtitle: "Landing pages, sites institucionais e lojas virtuais de alta performance",
    description:
      "Construímos experiências digitais com design de autoridade, carregamento ultrarrápido e arquitetura orientada a conversão e geração de demanda qualificada.",
    deliverables: [
      {
        title: "Landing Pages de Alta Conversão",
        description: "Páginas desenhadas para campanhas de tráfego pago com foco em captação máxima e carregamento < 1s.",
        detail: "Formulários inteligentes integrados em tempo real ao CRM e WhatsApp.",
        tags: ["PageSpeed 98+", "SEO Técnico", "Formulários Ágeis"],
      },
      {
        title: "Sites Institucionais de Autoridade",
        description: "Posicionamento digital premium que transmite solidez e converte visitantes em oportunidades reais de negócio.",
        detail: "Design system exclusivo, blog integrado e painel para gestão de conteúdo.",
        tags: ["Design System", "CMS Headless", "Multi-dispositivo"],
      },
      {
        title: "E-commerces & Lojas Virtuais",
        description: "Plataformas de venda com catálogo completo, checkout transparente e sincronização automática com a sua operação.",
        detail: "Integração nativa com gateways de pagamento, cálculo de frete e ERP.",
        tags: ["Checkout Seguro", "Gateways Pix/Cartão", "Sincronia de Estoque"],
      },
    ],
    metrics: [
      { label: "Velocidade de Carregamento", value: "< 1.2s" },
      { label: "Média de Conversão", value: "+42%" },
      { label: "Tempo de Deploy", value: "2 a 3 semanas" },
    ],
    techStack: ["Next.js 15", "TypeScript", "TailwindCSS", "SEO Avançado", "Stripe / Asaas", "Vercel Cloud"],
  },
  {
    id: "sistemas",
    label: "Sistemas & Plataformas",
    shortLabel: "SaaS & Portais",
    badge: "⚡ Sob Medida",
    subtitle: "Aplicações corporativas sob medida para processos que planilhas não resolvem",
    description:
      "Digitalizamos e automatizamos operações complexas com softwares web seguros, painéis administrativos e plataformas SaaS preparadas para escalar sem gargalos.",
    deliverables: [
      {
        title: "Sistemas Web Operacionais",
        description: "Aplicações desenhadas para a regra de negócio exclusiva da sua empresa, do modelo de dados ao uso diário.",
        detail: "Controle de ordens de serviço, esteiras de aprovação e workflows internos auditáveis.",
        tags: ["Workflows Customizados", "Auditoria de Logs", "Módulos Flexíveis"],
      },
      {
        title: "Plataformas SaaS Multi-tenant",
        description: "Produtos digitais escaláveis com múltiplos clientes, cobrança recorrente e painéis isolados por organização.",
        detail: "Gestão de assinaturas, controle de limites por plano e segurança de dados de nível bancário.",
        tags: ["Multi-tenant", "Planos & Assinaturas", "Isolamento de Dados"],
      },
      {
        title: "Portais Administrativos & Back-offices",
        description: "Painéis de controle centrais para gestão de equipes, permissões granulares e governança corporativa.",
        detail: "Filtros avançados, exportação em massa e relatórios operacionais instantâneos.",
        tags: ["Controle RBAC", "Relatórios Customizados", "Alta Segurança"],
      },
    ],
    metrics: [
      { label: "Redução de Retrabalho", value: "-80%" },
      { label: "Disponibilidade em Produção", value: "99.9% Uptime" },
      { label: "Arquitetura Cloud", value: "Multi-tenant" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "APIs REST / GraphQL", "AWS / Cloud"],
  },
  {
    id: "integracoes",
    label: "Dados & Integrações",
    shortLabel: "APIs & Dashboards",
    badge: "📊 Decisão em Tempo Real",
    subtitle: "Conectividade de sistemas legados, fluxos de dados e dashboards para tomada de decisão",
    description:
      "Unificamos bases de dados fragmentadas e integramos seus sistemas em tempo real para eliminar tarefas manuais e fornecer visibilidade total da operação.",
    deliverables: [
      {
        title: "Integração Contínua de APIs",
        description: "Conexão bidirecional e segura entre CRMs, ERPs, sistemas legados, portais e serviços de terceiros.",
        detail: "Sincronização instantânea com retentativas automáticas e monitoramento de falhas.",
        tags: ["Webhooks Ativos", "Conexão Segura", "Zero Perda de Dados"],
      },
      {
        title: "Dashboards Executivos em Tempo Real",
        description: "Painéis visuais dinâmicos para acompanhamento de KPIs financeiros, comerciais e operacionais.",
        detail: "Métricas atualizadas minuto a minuto com gráficos interativos e exportação executiva.",
        tags: ["Tempo Real", "Indicadores de Negócio", "Visão Consolidada"],
      },
      {
        title: "Desenvolvimento Ágil de MVPs",
        description: "Prototipagem funcional e lançamento de versões enxutas para validação rápida com usuários reais.",
        detail: "Ciclos curtos de 4 a 6 semanas com foco em velocidade de aprendizado e tração.",
        tags: ["Ciclos Curtos", "Validação Rápida", "Arquitetura Escalável"],
      },
    ],
    metrics: [
      { label: "Latência de Sincronia", value: "< 500ms" },
      { label: "Atualização de KPIs", value: "Tempo Real" },
      { label: "Deploy de MVP", value: "4 a 6 semanas" },
    ],
    techStack: ["PostgreSQL", "Redis", "Webhooks", "N8N / Make", "BI & Analytics", "Microserviços"],
  },
] as const;

export const serviceGroups: readonly DevelopmentServiceGroup[] = [];

export const developmentSection = {
  eyebrow: "Como a Solint desenvolve",
  title: "Do problema ao produto no ar, em etapas claras.",
} as const;

/** Etapas 01–05 da espiral vertical. A 06 é o painel de encerramento. */
export const developmentSteps: readonly ProcessStep[] = [
  {
    title: "Descoberta e estratégia",
    description: "Mapeamento profundo do objetivo do produto, público-alvo e critérios de sucesso mensuráveis.",
    tags: ["Mapeamento de KPIs", "Matriz de Escopo", "Entrevistas de Usuário"],
    badge: "Etapa 01",
  },
  {
    title: "Arquitetura da solução",
    description: "Estruturação técnica de dados, infraestrutura em nuvem, segurança e APIs necessárias.",
    tags: ["Modelagem de Dados", "Infraestrutura Cloud", "Segurança & Governança"],
    badge: "Etapa 02",
  },
  {
    title: "UX/UI e prototipação",
    description: "Design system completo e protótipos de alta fidelidade validados antes de escrever código.",
    tags: ["Design System Exclusivo", "Protótipo Navegável", "Testes de Usabilidade"],
    badge: "Etapa 03",
  },
  {
    title: "Desenvolvimento ágil",
    description: "Ciclos curtos de entrega com código limpo, arquitetura modular e acompanhamento contínuo.",
    tags: ["Sprints Semanais", "Entrega Contínua", "Código Limpo & Testável"],
    badge: "Etapa 04",
  },
  {
    title: "Testes e otimização",
    description: "Auditoria rigorosa de desempenho, segurança, acessibilidade e testes de carga antes de publicar.",
    tags: ["Desempenho Máximo", "Testes de Carga", "Acessibilidade & Segurança"],
    badge: "Etapa 05",
  },
] as const;

export const developmentClosing: ClosingStep = {
  eyebrow: "Etapa 06 · encerramento do fluxo",
  title: "Publicação e evolução contínua",
  description:
    "No ar, monitorado e melhorado com base em uso real. O produto entra em ciclo de melhorias, com telemetria e evolução contínua.",
  indicators: [
    "Produto publicado em produção",
    "Monitoramento ativo 24/7",
    "Melhorias contínuas e sprints",
    "Novas versões sem downtime",
    "Telemetria e dados reais",
  ],
};

/**
 * Recuo lateral (em unidades de passo) de cada etapa da espiral, incluindo o
 * painel de encerramento. Define o zigue-zague: 0 → 1 → 2 → 2 → 1 → 0.
 */
export const spiralOffsets: readonly number[] = [0, 1, 2, 2, 1, 0] as const;

export const portfolioSection = {
  eyebrow: "Portfólio",
  title: "Produtos digitais em produção.",
  note: "Projetos de alta performance construídos para resolver problemas operacionais e comerciais reais.",
  imageLabel: "mockup do projeto",
} as const;

/** Cases e produtos desenvolvidos pela Solint. */
export const portfolioProjects: readonly ProjectCard[] = [
  {
    title: "Nexus Plataforma SaaS",
    category: "SaaS B2B · Finanças",
    description: "Plataforma multi-tenant de cobrança, conciliação e gestão financeira em tempo real para médias e grandes empresas.",
    tags: ["Plataforma SaaS", "Gestão de Assinaturas", "Pagamentos Integrados", "Alta Disponibilidade"],
    metric: "🔥 +180k transações/mês",
    badge: "Plataforma SaaS",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer solução",
  },
  {
    title: "Logix Portal Operacional",
    category: "Logística · Supply Chain",
    description: "Sistema web sob medida para roteirização e rastreio de entregas com notificações automatizadas aos clientes.",
    tags: ["Rastreamento em Tempo Real", "Telemetria de Frotas", "Portal de Clientes", "Automação Logística"],
    metric: "⚡ -45% tempo de despacho",
    badge: "Sistema Web",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer solução",
  },
  {
    title: "Vanguard CRM Inteligente",
    category: "Vendas · IA Nativa",
    description: "CRM integrado com distribuição inteligente de leads e agentes autônomos para qualificação em múltiplos canais.",
    tags: ["CRM Comercial", "Inteligência Artificial", "Pipeline de Vendas", "Gestão de Equipes"],
    metric: "🎯 3.8x mais conversões",
    badge: "IA & CRM",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer solução",
  },
] as const;

export const solucoesCta = {
  title: "Tem um produto para tirar do papel?",
  description:
    "Conte a ideia e o prazo. Devolvemos escopo, arquitetura e caminho de entrega.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
