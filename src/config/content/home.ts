import { Bot, Code2, ScanSearch } from "lucide-react";
import type { ServiceArea } from "@/types";

export const homeHero = {
  eyebrow: "/01 — início",
  titleLead: "Tecnologia inteligente para transformar ",
  /** Trecho digitado pelo efeito typewriter no H1. */
  titleTyped: "oportunidades em resultados",
  titleTail: ".",
  description:
    "Desenvolvemos inteligência artificial, automações e sistemas sob medida para empresas que precisam escalar vendas e simplificar processos operacionais.",
  primaryCta: { label: "Explorar soluções", href: "#atuacao" },
  secondaryCta: { label: "Falar com especialista", href: "https://wa.me/557996809911" },
  /** Linhas rotacionadas no terminal simulado abaixo dos CTAs. */
  terminalLines: [
    "mapeando processos da operação… ok",
    "ativando agentes autônomos e operações inteligentes… ok",
    "integrando WhatsApp, CRM e sistemas… ok",
    "eliminando tarefas manuais repetitivas… ok",
  ],
  keywords: ["Agentes de IA", "Prospecção B2B", "Sistemas Web"],
} as const;

export const serviceAreasSection = {
  eyebrow: "/02 — ecossistema solint",
  title: "Três frentes, um objetivo: sua empresa operando com máxima eficiência.",
  description:
    "Soluções modulares e independentes para automação de processos com agentes de IA, prospecção ativa de clientes e desenvolvimento de ferramentas exclusivas para o seu negócio.",
  hint: "Arraste para girar ou use as setas do teclado para explorar.",
} as const;

export const serviceAreas: readonly ServiceArea[] = [
  {
    icon: Bot,
    number: "01",
    tag: "Automação & Agentes Autônomos",
    title: "Agentes de IA",
    description:
      "Automatize rotinas operacionais, qualifique oportunidades em tempo real e integre inteligência autônoma aos seus sistemas e canais de comunicação.",
    highlights: [
      "Automação de processos e rotinas 24/7",
      "Qualificação e direcionamento de leads",
      "Integração com WhatsApp, CRM e ERPs",
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
      "Localize empresas no perfil ideal, obtenha contatos diretos de decisores e use IA para iniciar o diálogo comercial.",
    highlights: [
      "Busca segmentada por atividade e região",
      "Contatos verificados de sócios e diretores",
      "Abordagem e triagem automática de leads",
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
      "Landing pages de alta conversão, portais web, sistemas corporativos e plataformas personalizadas feitas para durar e crescer.",
    highlights: [
      "Páginas e portais focados em conversão",
      "Sistemas sob medida para sua regra de negócio",
      "Painéis de indicadores e conexão de APIs",
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
    { name: "Odonto Excellence", category: "Saúde & Odontologia" },
    { name: "Zenco", category: "Engenharia & Negócios" },
    { name: "Aura Regenera", category: "Saúde & Estética Médica" },
    { name: "Alternativa Provedor", category: "Telecom & Internet" },
    { name: "University Telecom", category: "Telecomunicações" },
    { name: "Victor Hugo Advocacia", category: "Serviços Jurídicos" },
    { name: "Mapion App", category: "App & Tecnologia" },
    { name: "Ecotech", category: "Educação Ambiental" },
  ],
} as const;

export const contactSection = {
  eyebrow: "/04 — contato",
  title: "Pronto para destravar a eficiência da sua operação?",
  description:
    "Conte-nos o principal desafio da sua empresa hoje. Desenhamos a solução ideal para o seu cenário.",
  ctaLabel: "Falar com a Solint",
} as const;

