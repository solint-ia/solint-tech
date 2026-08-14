import type { Metadata } from "next";
import { PageGlow } from "@/components/layout";
import {
  ClosingCta,
  DevelopmentSection,
  PortfolioSection,
  ServicesSection,
  SolucoesHero,
} from "@/components/sections";
import { solucoesCta } from "@/config/content/solucoes";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Landing pages, sites, e-commerces, sistemas web, dashboards e plataformas personalizadas, desenvolvidos sob medida pela Solint.",
};

export default function SolucoesPage() {
  return (
    <>
      <PageGlow preset="solucoes" />
      <SolucoesHero />
      <ServicesSection />
      <DevelopmentSection />
      <PortfolioSection />
      <ClosingCta
        title={solucoesCta.title}
        description={solucoesCta.description}
        ctaLabel={solucoesCta.ctaLabel}
        ctaHref={solucoesCta.ctaHref}
      />
    </>
  );
}
