import type { Metadata } from "next";
import { PageGlow } from "@/components/layout";
import { LegalDocumentViewer } from "@/components/legal";
import { termsOfUseContent } from "@/config/content/terms";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso e Condições Gerais dos serviços, softwares, agentes de inteligência artificial e plataformas da Solint.",
  openGraph: {
    title: "Termos de Uso | Solint",
    description:
      "Diretrizes, licenças e condições contratuais aplicáveis a todo o ecossistema tecnológico da Solint.",
  },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <PageGlow preset="legal" />
      <LegalDocumentViewer doc={termsOfUseContent} />
    </>
  );
}
