import { CONTACT_ANCHOR } from "@/config/navigation";
import type {
  ClosingStep,
  DevelopmentServiceGroup,
  ProcessStep,
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
  secondaryCta: { label: "Ver serviços", href: "#servicos" },
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
    title: "Estratégia & Diagnóstico",
    description: "Entendimento da sua necessidade, definição clara do que será construído e planejamento de cada entrega.",
    tags: ["Planejamento", "Objetivos Claros"],
    badge: "Etapa 01",
  },
  {
    title: "Design & Experiência",
    description: "Criação do visual das telas, fluxo de navegação intuitivo e aprovação visual antes de programar.",
    tags: ["Protótipos de Telas", "Aprovação Visual"],
    badge: "Etapa 02",
  },
  {
    title: "Construção do Sistema",
    description: "Desenvolvimento prático com entregas em etapas para você acompanhar o avanço e testar cada módulo.",
    tags: ["Entregas em Etapas", "Acompanhamento Próximo"],
    badge: "Etapa 03",
  },
  {
    title: "Revisão & Lançamento",
    description: "Testes completos de funcionamento, velocidade e segurança antes de colocar o sistema no ar pronto para uso.",
    tags: ["Revisão Completa", "Lançamento Seguro"],
    badge: "Etapa 04",
  },
] as const;

export const developmentClosing: ClosingStep = {
  eyebrow: "Manutenibilidade & Suporte",
  title: "Sistema no ar com manutenção e evolução contínua",
  description:
    "Após o lançamento, cuidamos da estabilidade, segurança e melhorias para que sua empresa tenha tranquilidade e nunca fique na mão.",
  indicators: [
    "Sistema 100% no ar",
    "Manutenção & Suporte contínuo",
    "Melhorias e novas funções",
    "Estabilidade e segurança garantidas",
  ],
};

export const spiralOffsets: readonly number[] = [0, 1, 1, 0, 0] as const;

export const solucoesCta = {
  title: "Tem um projeto ou sistema para tirar do papel?",
  description:
    "Compartilhe sua ideia com a Solint. Apresentamos a arquitetura ideal e o melhor caminho de desenvolvimento.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
