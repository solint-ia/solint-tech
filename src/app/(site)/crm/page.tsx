import type { Metadata } from "next";
import { PageGlow } from "@/components/layout";
import {
  ClosingCta,
  CrmHero,
  CrmJourneySection,
  CrmModulesSection,
  CrmTourSection,
} from "@/components/sections";
import { crmCta } from "@/config/content/crm";

export const metadata: Metadata = {
  title: "Solint CRM | Atendimento, vendas e IA no WhatsApp",
  description:
    "O Solint CRM reúne caixa de entrada multiatendente de WhatsApp, agentes de IA, funil de vendas, follow-up automático, campanhas e agenda numa plataforma só.",
  openGraph: {
    title: "Solint CRM | Atendimento, vendas e IA no WhatsApp",
    description:
      "Caixa de entrada multiatendente, agentes de IA, funil de vendas e follow-up automático numa plataforma só.",
    images: [{ url: "/crm/atendimento.webp", width: 2880, height: 1800 }],
  },
};

export default function CrmPage() {
  return (
    <>
      <PageGlow preset="crm" />
      <CrmHero />
      <CrmTourSection />
      <CrmModulesSection />
      <CrmJourneySection />
      <ClosingCta
        title={crmCta.title}
        description={crmCta.description}
        ctaLabel={crmCta.ctaLabel}
        ctaHref={crmCta.ctaHref}
        note={crmCta.note}
      />
    </>
  );
}
