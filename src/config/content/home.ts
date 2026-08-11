import {
  Activity,
  BarChart3,
  Bot,
  Code2,
  RefreshCw,
  ScanSearch,
  Search,
  SlidersHorizontal,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Feature, ProcessStep, ServiceArea } from "@/types";

export const homeHero = {
  eyebrow: "/01 — início",
  titleLead: "Tecnologia inteligente para transformar ",
  /** Trecho digitado pelo efeito typewriter no H1. */
  titleTyped: "oportunidades em resultados",
  titleTail: ".",
  description:
    "A Solint conecta estratégia, dados e inovação para criar soluções digitais mais eficientes, escaláveis e preparadas para o futuro.",
  primaryCta: { label: "Conheça nossas soluções", href: "#atuacao" },
  secondaryCta: { label: "Fale com um especialista", href: "https://wa.me/557996809911" },
  /** Linhas rotacionadas no terminal simulado abaixo dos CTAs. */
  terminalLines: [
    "conectando estratégia, dados e execução… ok",
    "mapeando processos da operação… ok",
    "treinando agentes no seu contexto… ok",
    "integrando sistemas em um só fluxo… ok",
  ],
  keywords: ["Agentes de IA", "Prospecção", "Software", "Integrações"],
} as const;

export const aboutSection = {
  eyebrow: "Sobre a Solint",
  titleLead: "A Solint conecta ",
  titleHighlight1: "estratégia, dados e inteligência artificial",
  titleMid: " a ",
  titleHighlight2: "desenvolvimento de software escalável",
  titleTail: " para transformar desafios em soluções digitais eficazes e voltadas para o futuro.",
  image: {
    src: "/media/about-stack.png",
    alt: "Arquitetura em camadas 3D de software, inteligência artificial e infraestrutura da Solint",
  },
  badges: {
    top: {
      title: "Solint Core v2",
      subtitle: "IA & Automação Ativa",
      tag: "✦ 24/7",
    },
    bottom: {
      title: "Alta Disponibilidade",
      subtitle: "Arquitetura Cloud Native",
      tag: "⚡ 99.9%",
    },
  },
} as const;

export const aboutFeatures: readonly Feature[] = [
  {
    icon: Target,
    title: "Alinhamento estratégico",
    description: "Alinhamos tecnologia diretamente às metas reais da sua empresa.",
  },
  {
    icon: BarChart3,
    title: "Tecnologia com propósito",
    description: "Aplicamos soluções voltadas para resultados e KPIs mensuráveis.",
  },
  {
    icon: TrendingUp,
    title: "Soluções escaláveis",
    description: "Crescimento contínuo sustentado por inovação e alta eficiência.",
  },
] as const;

export const serviceAreasSection = {
  eyebrow: "Áreas de atuação",
  title: "Três frentes, um mesmo objetivo: operação mais inteligente.",
  description:
    "Cada frente resolve uma parte da complexidade. Juntas, formam um ecossistema digital coerente, medido e pronto para crescer.",
  hint: "Arraste para girar ou use as setas do teclado.",
} as const;

export const serviceAreas: readonly ServiceArea[] = [
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Automação de processos operacionais, atendimento inteligente 24/7 e integração total entre sistemas, canais de vendas e CRMs.",
    href: "/agentes-ia",
    ctaLabel: "Ver a página",
  },
  {
    icon: ScanSearch,
    title: "Prospect",
    description:
      "Prospecção automatizada: encontra empresas, extrai contatos, organiza leads, dispara campanhas e pré-qualifica com IA.",
    href: "/prospect",
    ctaLabel: "Ver a página",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de softwares",
    description:
      "Landing pages, sites, e-commerces, sistemas web, dashboards, plataformas personalizadas e integrações entre sistemas.",
    href: "/solucoes",
    ctaLabel: "Ver a página",
  },
] as const;

export const processSection = {
  eyebrow: "Como a Solint trabalha",
  title: "Um método curto, transparente e mensurável.",
} as const;

export const processSteps: readonly ProcessStep[] = [
  {
    icon: Search,
    title: "Entendimento do negócio",
    description: "Contexto, objetivos e como a operação funciona hoje.",
  },
  {
    icon: Activity,
    title: "Diagnóstico dos problemas",
    description: "Onde estão os gargalos, retrabalhos e perdas de informação.",
  },
  {
    icon: SlidersHorizontal,
    title: "Planejamento da solução",
    description: "Escopo, arquitetura, prioridades e critérios de sucesso.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento e integração",
    description: "Construção do produto e conexão com os sistemas existentes.",
  },
  {
    icon: RefreshCw,
    title: "Automação e inteligência",
    description: "Fluxos automáticos e agentes de IA onde há ganho real.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento e evolução",
    description: "Medição de resultado e melhoria contínua da solução.",
    accent: "amber",
  },
] as const;

export const partnersSection = {
  eyebrow: "/05 — parceiros",
  title: "Empresas que aceleram com a Solint",
  description: "Da automação de processos comerciais ao desenvolvimento de produtos digitais robustos.",
  metrics: [
    { value: "+50", label: "Empresas atendidas", detail: "em múltiplos setores B2B" },
    { value: "+1.2M", label: "Interações processadas", detail: "conversas e automações ativas" },
    { value: "85%", label: "Redução de tempo", detail: "em tarefas manuais repetitivas" },
    { value: "99.9%", label: "Disponibilidade", detail: "operação contínua e estável" },
  ],
  brands: [
    { name: "Nexora Tech", category: "SaaS & Cloud" },
    { name: "Vanguard Capital", category: "Fintech" },
    { name: "Atlas Logística", category: "Supply Chain" },
    { name: "Lumina Health", category: "Healthtech" },
    { name: "Delta B2B", category: "Distribuição" },
    { name: "Vertex Soluções", category: "Indústria" },
    { name: "Aura Inteligência", category: "Consultoria" },
    { name: "Prime Agro", category: "Agronegócio" },
  ],
} as const;

export const contactSection = {
  eyebrow: "/06 — contato",
  title:
    "Vamos construir uma solução mais inteligente, conectada e preparada para o futuro.",
  description: "Conte o que está travando a sua operação. A gente desenha o caminho.",
  ctaLabel: "Falar com a Solint",
} as const;
