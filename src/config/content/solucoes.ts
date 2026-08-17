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
  titleTyped: "gerar resultados",
  titleTail: ".",
  paragraphs: [
    "Desenvolvemos landing pages de alta conversão, portais web, sistemas operacionais e plataformas personalizadas.",
    "Da presença digital que atrai clientes ao sistema que sustenta e escala toda a sua operação.",
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
        description: "Páginas desenhadas para tráfego pago com foco em transformar visitantes em leads e clientes.",
        tags: [],
      },
      {
        title: "Sites Institucionais",
        description: "Posicionamento digital de alto padrão que transmite credibilidade e autoridade para sua marca.",
        tags: [],
      },
      {
        title: "E-commerces & Lojas Virtuais",
        description: "Plataformas de venda completas com checkout seguro, catálogo organizado e facilidade de compra.",
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
        description: "Automatize processos internos com sistemas desenvolvidos exclusivamente para a rotina da sua empresa.",
        tags: [],
      },
      {
        title: "Plataformas e Produtos Digitais",
        description: "Desenvolvimento de plataformas completas para assinaturas, gestão de clientes e serviços digitais.",
        tags: [],
      },
      {
        title: "Portais & Painéis Administrativos",
        description: "Centralize a gestão da sua equipe, permissões de acesso e relatórios em um só lugar.",
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
        title: "Integração entre Ferramentas",
        description: "Conexão direta e segura entre seus sistemas, CRM, ERPs e plataformas de pagamento.",
        tags: [],
      },
      {
        title: "Dashboards de Indicadores",
        description: "Painéis visuais claros com as métricas de vendas e operação atualizadas em tempo real.",
        tags: [],
      },
      {
        title: "Prototipagem & MVPs",
        description: "Desenvolvimento ágil de versões funcionais para validar novos produtos no mercado com rapidez.",
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
    description: "Entendimento da sua necessidade, definição dos requisitos e planejamento detalhado das entregas.",
    tags: ["Planejamento", "Definição de Escopo"],
    badge: "Etapa 01",
  },
  {
    title: "Arquitetura & Design",
    description: "Criação do visual das telas, fluxo de navegação e estrutura de segurança e banco de dados.",
    tags: ["Protótipos de Telas", "Estrutura Segura"],
    badge: "Etapa 02",
  },
  {
    title: "Desenvolvimento Ágil",
    description: "Construção do sistema com entregas contínuas e acompanhamento próximo da sua equipe.",
    tags: ["Entregas Frequentes", "Código Modular"],
    badge: "Etapa 03",
  },
  {
    title: "Testes & Publicação",
    description: "Validação rigorosa de desempenho, segurança e colocação do sistema no ar pronto para uso.",
    tags: ["Alta Performance", "Deploy Seguro"],
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
  note: "Projetos reais desenvolvidos pela Solint: de plataformas web e sistemas a portais e aplicações sob medida.",
  imageLabel: "mockup do projeto",
} as const;

/** Cases e produtos desenvolvidos pela Solint. */
export const portfolioProjects: readonly ProjectCard[] = [
  {
    title: "Aura Regenera",
    category: "Portal Comercial · Saúde & Estética Médica",
    description: "Portal comercial de alta conversão para clínicas, dermatologistas e cirurgiões comprarem a linha pbserum Plus (enzimas recombinantes) através da Aura Regenera, distribuidora oficial no Brasil.",
    image: "/media/logo-aura.png",
    imageObjectFit: "contain",
    href: "https://www.auraregenera.com/",
    ctaLabel: "Acessar site",
  },
  {
    title: "Mulheres Poderosas",
    category: "Landing Page · Eventos & Empreendedorismo",
    description: "Landing page de alta conversão para o evento Dia das Mulheres Poderosas, focada em captação de inscrições, networking e fortalecimento do empreendedorismo feminino.",
    image: "/media/logo-mulheres.png",
    imageObjectFit: "contain",
    href: "https://mulherespoderosas.vercel.app/",
    ctaLabel: "Acessar site",
  },
  {
    title: "EcoTech",
    category: "Plataforma Web · Educação Ambiental",
    description: "Plataforma educativa com o objetivo de promover o conhecimento ambiental, catalogação de trilhas e pontos educativos, com geração de relatórios em PDF e QR Codes para uso offline.",
    image: "/media/EcoTechLogo.png",
    imageObjectFit: "contain",
    href: "https://www.projetoecotech.online/admin/dashboard",
    ctaLabel: "Acessar site",
  },
] as const;

export const solucoesCta = {
  title: "Tem um projeto ou sistema para tirar do papel?",
  description:
    "Compartilhe sua ideia com a Solint. Apresentamos a arquitetura ideal e o melhor caminho de desenvolvimento.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
