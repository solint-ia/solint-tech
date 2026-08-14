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
      { label: "Disponibilidade", value: "Cloud Native", change: "Estável" },
      { label: "Performance", value: "Otimizada", change: "Alta Escala" },
      { label: "Tempo de Resposta", value: "Tempo Real", change: "Contínuo" },
    ],
    activities: [
      { name: "Sincronização ERP", tag: "Automação", status: "Concluído", time: "Recente" },
      { name: "Pipeline CI/CD", tag: "Deploy", status: "Sucesso", time: "Ativo" },
      { name: "Agente de IA", tag: "Automação", status: "Ativo", time: "Agora" },
    ],
    badges: {
      top: { title: "Arquitetura Escalável", tag: "✦ Alta Performance" },
      bottom: { title: "Infraestrutura Cloud", tag: "Alta Disponibilidade" },
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
        description: "Conexão contínua e segura entre CRMs, ERPs, sistemas internos e serviços externos.",
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

/** Etapas da espiral de desenvolvimento e entrega. */
export const developmentSteps: readonly ProcessStep[] = [
  {
    title: "Estratégia & Escopo",
    description: "Mapeamento dos objetivos de negócio, requisitos técnicos e critérios mensuráveis de sucesso.",
    tags: ["Mapeamento de KPIs", "Matriz de Escopo"],
    badge: "Etapa 01",
  },
  {
    title: "Arquitetura & Design",
    description: "Modelagem de dados, infraestrutura em nuvem, segurança e protótipos de alta fidelidade.",
    tags: ["Infraestrutura Cloud", "Design System"],
    badge: "Etapa 02",
  },
  {
    title: "Desenvolvimento Ágil",
    description: "Sprints com código limpo, arquitetura modular e validações frequentes com o cliente.",
    tags: ["Sprints Semanais", "Código Limpo & Modular"],
    badge: "Etapa 03",
  },
  {
    title: "Testes & Publicação",
    description: "Auditoria rigorosa de desempenho, segurança, testes de carga e deploy sem downtime.",
    tags: ["Alta Performance", "Segurança Cloud"],
    badge: "Etapa 04",
  },
] as const;

export const developmentClosing: ClosingStep = {
  eyebrow: "Evolução Contínua",
  title: "Publicação e monitoramento ativo",
  description:
    "No ar, monitorado e evoluído com base em uso real. O produto entra em ciclo de melhorias contínuas e telemetria ativa.",
  indicators: [
    "Deploy em produção",
    "Monitoramento ativo 24/7",
    "Sprints de evolução",
    "Alta disponibilidade cloud",
  ],
};

export const spiralOffsets: readonly number[] = [0, 1, 1, 0, 0] as const;

export const portfolioSection = {
  eyebrow: "Portfólio & Aplicações",
  title: "Produtos digitais e sistemas em produção.",
  note: "Estes são apenas alguns exemplos públicos de projetos entregues. Nossas soluções não se limitam a websites: desenvolvemos desde plataformas completas, sistemas web e SaaS até portais internos, dashboards e ecossistemas integrados sob medida para o seu negócio.",
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
