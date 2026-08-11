/** Fonte única de verdade para identidade, contato e metadados do site. */
export const siteConfig = {
  name: "Solint",
  url: "https://solint.com.br",
  tagline: "Tecnologia inteligente para negócios preparados para o futuro",
  description:
    "A Solint conecta estratégia, dados e inteligência artificial para criar soluções digitais eficientes, escaláveis e preparadas para o futuro.",
  shortDescription:
    "Inteligência artificial, automação e software sob medida. A Solint conecta estratégia, dados e tecnologia para gerar resultado.",
  locale: "pt-BR",
  contact: {
    email: "leonardo@solint.tech",
    phone: "+55 79 9680-9911",
    phoneHref: "https://wa.me/557996809911",
    whatsappUrl: "https://wa.me/557996809911",
    location: "Brasil",
    responseTime: "Resposta imediata via WhatsApp. Sem compromisso.",
  },
  logo: {
    src: "/media/logo-header.png",
    width: 512,
    height: 128,
  },
  logoFooter: {
    src: "/media/logo-footer.png",
    width: 512,
    height: 128,
  },
} as const;

export type SiteConfig = typeof siteConfig;
