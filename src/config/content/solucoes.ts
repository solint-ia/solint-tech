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
    badge: "Presença Digital",
    subtitle: "Web, Landing Pages & E-commerce de Alta Performance",
    description:
      "Desenvolvemos experiências digitais com carregamento ultrarrápido, design de autoridade e foco em conversão.",
    deliverables: [
      {
        title: "Landing Pages de Alta Conversão",
        description: "Páginas desenhadas para tráfego pago com foco em captação máxima e formulários ágeis.",
        tags: [],
      },
      {
        title: "Sites Institucionais",
        description: "Posicionamento digital premium que transmite solidez e converte visitantes em oportunidades reais.",
        tags: [],
      },
      {
        title: "E-commerces & Lojas Virtuais",
        description: "Plataformas de venda com catálogo completo, checkout transparente e sincronização operacional.",
        tags: [],
      },
    ],
    metrics: [],
  },
  {
    id: "sistemas",
    label: "Sistemas & Plataformas",
    shortLabel: "SaaS & Portais",
    badge: "Sistemas Web",
    subtitle: "Sistemas Web, SaaS & Portais Administrativos",
    description:
      "Digitalizamos e automatizamos operações com aplicações web seguras preparadas para escalar sem gargalos.",
    deliverables: [
      {
        title: "Sistemas Web Sob Medida",
        description: "Aplicações desenhadas para a regra de negócio exclusiva da sua empresa com esteiras de aprovação.",
        tags: [],
      },
      {
        title: "Plataformas SaaS Multi-tenant",
        description: "Produtos digitais com múltiplos clientes, assinaturas recorrentes e workspaces isolados.",
        tags: [],
      },
      {
        title: "Portais & Back-offices",
        description: "Painéis de controle centrais para gestão de equipes, permissões granulares e governança.",
        tags: [],
      },
    ],
    metrics: [],
  },
  {
    id: "integracoes",
    label: "Dados & Integrações",
    shortLabel: "APIs & Dashboards",
    badge: "Dados & APIs",
    subtitle: "Conexão de APIs, Dashboards & MVPs Rápidos",
    description:
      "Unificamos seus sistemas em tempo real para eliminar retrabalho manual e fornecer dados claros para decisão.",
    deliverables: [
      {
        title: "Integração Contínua de APIs",
        description: "Conexão contínua e segura entre CRMs, ERPs, sistemas legados e serviços externos.",
        tags: [],
      },
      {
        title: "Dashboards em Tempo Real",
        description: "Painéis visuais com indicadores comerciais e operacionais atualizados minuto a minuto.",
        tags: [],
      },
      {
        title: "Desenvolvimento de MVPs",
        description: "Prototipagem funcional e ciclos rápidos de validação para novas ideias de negócio.",
        tags: [],
      },
    ],
    metrics: [],
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
    title: "Aura Regenera",
    category: "Portal Comercial B2B · Saúde & Estética Médica",
    description: "Portal comercial B2B de alta conversão para clínicas, dermatologistas e cirurgiões comprarem a linha pbserum Plus (enzimas recombinantes) através da Aura Regenera, distribuidora oficial no Brasil.",
    badge: "Portal B2B",
    image: "/media/logo-aura.png",
    imageObjectFit: "contain",
    href: "https://www.auraregenera.com/",
    ctaLabel: "Acessar site",
  },
  {
    title: "Mulheres Poderosas",
    category: "Landing Page · Eventos & Empreendedorismo",
    description: "Landing page de alta conversão para o evento Dia das Mulheres Poderosas, focada em captação de inscrições, networking e fortalecimento do empreendedorismo feminino.",
    badge: "Landing Page",
    image: "/media/logo-mulheres.png",
    imageObjectFit: "contain",
    href: "https://mulherespoderosas.vercel.app/",
    ctaLabel: "Acessar site",
  },
  {
    title: "EcoTech",
    category: "Plataforma Web · Educação Ambiental",
    description: "Plataforma educativa com o objetivo de promover o conhecimento ambiental, catalogação de trilhas e pontos educativos, com geração de relatórios em PDF e QR Codes para uso offline.",
    badge: "Plataforma & Admin",
    image: "/media/EcoTechLogo.png",
    imageObjectFit: "contain",
    href: "https://www.projetoecotech.online/admin/dashboard",
    ctaLabel: "Acessar site",
  },
] as const;

export const solucoesCta = {
  title: "Tem um produto para tirar do papel?",
  description:
    "Conte a ideia e o prazo. Devolvemos escopo, arquitetura e caminho de entrega.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
