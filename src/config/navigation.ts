import type { NavLink, SocialLink } from "@/types";
import { siteConfig } from "./site";

/** Âncora canônica / link direto para o WhatsApp oficial de contato. */
export const CONTACT_ANCHOR = "https://wa.me/557996809911";

export const navLinks: readonly NavLink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "prospect", label: "Prospect", href: "/prospect" },
  { key: "agentes", label: "Agentes de IA", href: "/agentes-ia" },
  { key: "solucoes", label: "Soluções", href: "/solucoes" },
] as const;

/** Rótulos completos usados no rodapé, onde há espaço para o nome por extenso. */
export const footerNavLinks: readonly NavLink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "agentes", label: "Agentes de IA", href: "/agentes-ia" },
  { key: "prospect", label: "Prospect", href: "/prospect" },
  { key: "solucoes", label: "Desenvolvimento de softwares", href: "/solucoes" },
] as const;

export const socialLinks: readonly SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
] as const;

export const contactLinks: readonly SocialLink[] = [
  { label: "WhatsApp: +55 79 9680-9911", href: "https://wa.me/557996809911" },
  { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
] as const;

export const legalLinks: readonly SocialLink[] = [
  { label: "Política de privacidade", href: "#" },
  { label: "Termos de uso", href: "#" },
] as const;
