import type { Metadata } from "next";
import { PageGlow } from "@/components/layout";
import {
  CalculatorSection,
  ClosingCta,
  FlowSection,
  PlatformSection,
  ProspectHero,
} from "@/components/sections";
import { prospectCta } from "@/config/content/prospect";

export const metadata: Metadata = {
  title: "Prospect | Prospecção automatizada com IA",
  description:
    "Encontre as empresas certas, automatize seus contatos e deixe a inteligência artificial preparar seus leads para o momento da venda.",
};

export default function ProspectPage() {
  return (
    <>
      <PageGlow preset="prospect" />
      <ProspectHero />
      <FlowSection />
      <CalculatorSection />
      <PlatformSection />
      <ClosingCta
        title={prospectCta.title}
        description={prospectCta.description}
        ctaLabel={prospectCta.ctaLabel}
        ctaHref={prospectCta.ctaHref}
      />
    </>
  );
}
