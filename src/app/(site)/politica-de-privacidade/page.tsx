import type { Metadata } from "next";
import { PageGlow } from "@/components/layout";
import { LegalDocumentViewer } from "@/components/legal";
import { privacyPolicyContent } from "@/config/content/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade e Proteção de Dados Pessoais da Solint em conformidade com a LGPD (Lei nº 13.709/2018).",
  openGraph: {
    title: "Política de Privacidade | Solint",
    description:
      "Saiba como a Solint coleta, utiliza, armazena e protege seus dados com base na LGPD.",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageGlow preset="legal" />
      <LegalDocumentViewer doc={privacyPolicyContent} />
    </>
  );
}
