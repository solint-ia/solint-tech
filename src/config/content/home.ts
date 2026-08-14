import { Bot, Code2, ScanSearch } from "lucide-react";
import type { ServiceArea } from "@/types";

export const homeHero = {
  eyebrow: "/01 — início",
  titleLead: "Tecnologia inteligente para transformar ",
  /** Trecho digitado pelo efeito typewriter no H1. */
  titleTyped: "oportunidades em resultados",
  titleTail: ".",
  description:
    "A Solint conecta estratégia, dados e inovação para criar soluções digitais mais eficientes, escaláveis e preparadas para o futuro.",
  primaryCta: { label: "Explorar ecossistema", href: "#atuacao" },
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

export const serviceAreasSection = {
  eyebrow: "/02 — ecossistema solint",
  title: "Três frentes, um mesmo objetivo: operação mais inteligente.",
  description:
    "Trabalhamos com 3 frentes para alavancar o seu negócio. Cada frente opera de forma modular e independente para atender à sua necessidade específica.",
  hint: "Arraste para girar ou use as setas do teclado para explorar.",
} as const;

export const serviceAreas: readonly ServiceArea[] = [
  {
    icon: Bot,
    number: "01",
    tag: "Automação & Atendimento 24/7",
    title: "Agentes de IA",
    description:
      "Automatize conversas, qualificações e rotinas operacionais sem perder contexto, controle ou personalidade.",
    highlights: [
      "Atendimento instantâneo multicanal",
      "Qualificação e direcionamento de leads",
      "Integração com CRMs, ERPs e bancos",
    ],
    href: "/agentes-ia",
    ctaLabel: "Explorar Agentes de IA",
  },
  {
    icon: ScanSearch,
    number: "02",
    tag: "Motor de Vendas B2B",
    title: "Prospect",
    description:
      "Encontre empresas no seu perfil de cliente ideal, descubra contatos de decisores e pré-qualifique oportunidades com IA.",
    highlights: [
      "Segmentação avançada por CNAE e região",
      "Extração de sócios e contatos verificados",
      "Campanhas e pré-qualificação inteligente",
    ],
    href: "/prospect",
    ctaLabel: "Conhecer o Prospect",
  },
  {
    icon: Code2,
    number: "03",
    tag: "Engenharia de Software",
    title: "Soluções",
    description:
      "Desenvolvimento de plataformas web, sistemas corporativos, SaaS escaláveis e integrações profundas de APIs sob medida.",
    highlights: [
      "Sistemas web e portais administrativos",
      "Plataformas SaaS e arquiteturas cloud",
      "Conexão de APIs e dashboards em tempo real",
    ],
    href: "/solucoes",
    ctaLabel: "Ver Soluções Digitais",
  },
] as const;

export const partnersSection = {
  eyebrow: "/03 — parceiros",
  title: "Empresas que aceleram com a Solint",
  description: "Da automação de processos comerciais ao desenvolvimento de produtos digitais robustos.",
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
  eyebrow: "/04 — contato",
  title:
    "Vamos construir uma solução mais inteligente, conectada e preparada para o futuro.",
  description: "Conte o que está travando a sua operação. A gente desenha o caminho.",
  ctaLabel: "Falar com a Solint",
} as const;
