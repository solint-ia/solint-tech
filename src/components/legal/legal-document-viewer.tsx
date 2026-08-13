"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  FileCheck2,
  FileText,
  ListFilter,
  MessageSquare,
  Printer,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { HeroMesh } from "@/components/layout";
import { Button, Card, Reveal, SectionMarker } from "@/components/ui";
import type { LegalDocument } from "@/config/content/privacy";
import { cn } from "@/lib/utils";

interface LegalDocumentViewerProps {
  doc: LegalDocument;
}

export function LegalDocumentViewer({ doc }: LegalDocumentViewerProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(doc.sections[0]?.id ?? "");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  // Monitora a seção ativa e o progresso de leitura durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(Math.round(currentProgress));
      }

      // Encontra a seção visível atualmente
      const sections = doc.sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sections[i];
        const currentSec = doc.sections[i];
        if (element && currentSec && element.offsetTop <= scrollPosition) {
          setActiveSectionId(currentSec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [doc.sections]);

  // Filtragem rápida de seções no sumário
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return doc.sections;
    const term = searchTerm.toLowerCase();
    return doc.sections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(term) ||
        sec.paragraphs?.some((p) => p.toLowerCase().includes(term)) ||
        sec.bulletItems?.some((b) => b.toLowerCase().includes(term)) ||
        sec.letteredItems?.some((l) => l.text.toLowerCase().includes(term)) ||
        sec.highlightTag?.toLowerCase().includes(term),
    );
  }, [doc.sections, searchTerm]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const isPrivacy = doc.id === "privacy";

  return (
    <div className="relative pt-32 pb-24 lg:pt-38 lg:pb-32">
      <SectionMarker label={doc.eyebrow} position="hero" />
      <HeroMesh pattern="grid" />

      {/* Barra de progresso de leitura fixa no topo */}
      <div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 z-70 h-[3px] bg-accent/20"
      >
        <div
          className="h-full bg-gradient-to-r from-blue to-accent transition-all duration-150 ease-out shadow-[0_0_10px_rgb(53_217_255/0.8)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* Cabeçalho do Documento */}
        <div className="mb-12 lg:mb-16 border-b border-accent/15 pb-10">
          <Reveal>
            {/* Badge de Destaque */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold text-accent shadow-[0_0_20px_rgb(53_217_255/0.15)]">
              {isPrivacy ? (
                <ShieldCheck className="size-4 text-accent" />
              ) : (
                <Scale className="size-4 text-accent" />
              )}
              <span>{doc.badge}</span>
            </div>

            {/* Título Principal com Gradiente */}
            <h1 className="m-0 font-display text-[clamp(2.4rem,4.8vw,3.8rem)]/[1.1] font-bold text-white tracking-tight">
              {doc.title}{" "}
              <span className="bg-gradient-to-r from-accent via-accent-soft to-blue bg-clip-text text-transparent drop-shadow-[0_0_25px_rgb(53_217_255/0.3)]">
                {doc.titleHighlight}
              </span>
            </h1>

            <p className="mt-4 max-w-[780px] text-pretty font-light text-muted text-[clamp(1.05rem,1.4vw,1.2rem)]/[1.65]">
              {doc.subtitle}
            </p>

            {/* Alternador de Documentos (Tabs) & Metadados */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              {/* Tabs Switcher */}
              <div className="inline-flex rounded-xl border border-accent/20 bg-panel-2/90 p-1 backdrop-blur-md">
                <Link
                  href="/politica-de-privacidade"
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 font-display text-xs sm:text-sm font-semibold transition-all duration-200",
                    isPrivacy
                      ? "bg-accent/20 text-accent shadow-[0_0_15px_rgb(53_217_255/0.25)] border border-accent/35"
                      : "text-steel hover:text-white",
                  )}
                >
                  <ShieldCheck className="size-3.5 sm:size-4" />
                  <span>Política de Privacidade</span>
                </Link>
                <Link
                  href="/termos-de-uso"
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 font-display text-xs sm:text-sm font-semibold transition-all duration-200",
                    !isPrivacy
                      ? "bg-accent/20 text-accent shadow-[0_0_15px_rgb(53_217_255/0.25)] border border-accent/35"
                      : "text-steel hover:text-white",
                  )}
                >
                  <FileText className="size-3.5 sm:size-4" />
                  <span>Termos de Uso</span>
                </Link>
              </div>

              {/* Informações de Versão & Atualização */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
                <div className="flex items-center gap-1.5 rounded-lg border border-accent/12 bg-panel/70 px-3 py-1.5">
                  <Calendar className="size-3.5 text-accent" />
                  <span>Atualizado: {doc.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-accent/12 bg-panel/70 px-3 py-1.5">
                  <Clock className="size-3.5 text-accent" />
                  <span>{doc.readingTime}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-emerald-400 font-semibold">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Versão {doc.version} · Em vigor</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bloco de Introdução Executiva */}
        <Reveal delay={0.05} className="mb-10 lg:mb-12">
          <Card
            variant="highlight"
            className="p-6 sm:p-8 bg-gradient-to-br from-panel-3/90 via-panel/85 to-panel-2/95 border-accent/25"
          >
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-[0_0_18px_rgb(53_217_255/0.2)]">
                <FileCheck2 className="size-6" />
              </div>
              <div className="space-y-3.5 text-fg text-[0.98rem]/[1.7] font-normal">
                {doc.introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="m-0 first:font-medium first:text-white">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Seletor Mobile do Sumário */}
        <div className="mb-8 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex w-full items-center justify-between rounded-xl border border-accent/25 bg-panel-2/90 px-4 py-3 font-display text-sm font-semibold text-white shadow-[0_4px_20px_rgb(0_0_0/0.4)]"
          >
            <span className="flex items-center gap-2">
              <ListFilter className="size-4 text-accent" />
              <span>Sumário do Documento ({doc.sections.length} seções)</span>
            </span>
            <span className="font-mono text-xs text-accent">
              {isMobileNavOpen ? "Fechar ▲" : "Abrir ▼"}
            </span>
          </button>

          {isMobileNavOpen && (
            <div className="mt-2 max-h-[360px] overflow-y-auto rounded-xl border border-accent/20 bg-ink/95 p-3 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {doc.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs transition-colors",
                      activeSectionId === sec.id
                        ? "bg-accent/20 text-accent font-semibold"
                        : "text-steel hover:bg-panel hover:text-white",
                    )}
                  >
                    <span className="font-mono text-[10px] text-accent/70">{sec.number}</span>
                    <span className="truncate">{sec.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Layout Principal: Sidebar Sticky + Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
          {/* Sidebar Sticky (Desktop) */}
          <aside className="hidden lg:block sticky top-28 space-y-5">
            {/* Card do Sumário */}
            <div className="rounded-2xl border border-accent/18 bg-panel-2/80 p-4.5 backdrop-blur-xl shadow-[0_10px_35px_rgb(0_0_0/0.5)]">
              <div className="mb-3.5 flex items-center justify-between border-b border-accent/12 pb-3">
                <span className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-white">
                  <ListFilter className="size-3.5 text-accent" />
                  Sumário ({doc.sections.length})
                </span>
                <span className="font-mono text-[11px] text-accent">
                  {readingProgress}% lido
                </span>
              </div>

              {/* Campo de Busca Rápida no Sumário */}
              <div className="relative mb-3.5">
                <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-steel/60" />
                <input
                  type="text"
                  placeholder="Filtrar tópicos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-accent/15 bg-ink/80 py-1.5 pl-8 pr-3 font-sans text-xs text-white placeholder-steel/50 focus:border-accent focus:outline-none"
                />
              </div>

              {/* Lista com Scroll do Sumário */}
              <div className="max-h-[calc(100vh-420px)] space-y-1 overflow-y-auto pr-1">
                {filteredSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12.5px]/[1.35] transition-all duration-200",
                        isActive
                          ? "bg-accent/15 text-white font-medium shadow-[inset_2px_0_0_rgb(53_217_255)]"
                          : "text-steel hover:bg-panel hover:text-white",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[10.5px] transition-colors",
                          isActive ? "text-accent font-bold" : "text-steel/60 group-hover:text-accent",
                        )}
                      >
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Ações Rápidas do Documento */}
            <div className="rounded-2xl border border-accent/14 bg-panel/70 p-4 backdrop-blur-md space-y-2.5">
              <span className="block font-mono text-[10.5px] font-semibold uppercase tracking-wider text-steel">
                Ações do Documento
              </span>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-accent/18 bg-panel-2/90 px-3 py-2 text-xs font-medium text-steel hover:border-accent/40 hover:text-white transition-all"
                  title="Imprimir ou salvar como PDF"
                >
                  <Printer className="size-3.5 text-accent" />
                  <span>Imprimir</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-accent/18 bg-panel-2/90 px-3 py-2 text-xs font-medium text-steel hover:border-accent/40 hover:text-white transition-all"
                  title="Copiar link da página"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-accent" />
                      <span>Copiar link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Botão de Dúvidas / WhatsApp */}
              <a
                href={doc.contactBox.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-xl border border-accent/25 bg-gradient-to-r from-panel-2 to-panel p-3 text-xs text-white hover:border-accent/50 hover:shadow-[0_0_20px_rgb(53_217_255/0.15)] transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="size-4 text-accent" />
                  <span className="font-medium">Canal de Atendimento</span>
                </div>
                <ExternalLink className="size-3 text-steel" />
              </a>
            </div>
          </aside>

          {/* Coluna Principal de Conteúdo */}
          <main className="space-y-8">
            {doc.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 rounded-2xl border border-accent/14 bg-[linear-gradient(175deg,rgb(15_20_29/0.85),rgb(8_12_18/0.75))] p-6 sm:p-8 backdrop-blur-md shadow-[0_4px_24px_rgb(0_0_0/0.3)] transition-all duration-300 hover:border-accent/30"
              >
                {/* Cabeçalho da Seção */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-accent/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-xs font-bold text-accent shadow-[0_0_10px_rgb(53_217_255/0.2)]">
                      {section.number}
                    </span>
                    <h2 className="m-0 font-display text-[1.25rem] sm:text-[1.45rem] font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  {section.highlightTag && (
                    <span className="rounded-full border border-accent/20 bg-accent/8 px-3 py-0.5 font-mono text-[11px] text-accent-flow font-medium">
                      {section.highlightTag}
                    </span>
                  )}
                </div>

                {/* Lead Text */}
                {section.leadText && (
                  <p className="m-0 mb-4 text-[0.98rem]/[1.7] text-fg-strong font-normal">
                    {section.leadText}
                  </p>
                )}

                {/* Parágrafos Principais */}
                {section.paragraphs && (
                  <div className="space-y-3.5 mb-4">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx} className="m-0 text-[0.96rem]/[1.75] text-muted font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {/* Secondary Lead Text */}
                {section.secondaryLead && (
                  <p className="m-0 mb-3 text-[0.96rem]/[1.7] text-fg-strong font-medium">
                    {section.secondaryLead}
                  </p>
                )}

                {/* Bullet Items */}
                {section.bulletItems && (
                  <ul className="m-0 mb-4 space-y-2.5 list-none pl-0">
                    {section.bulletItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[0.95rem]/[1.7] text-fg-strong">
                        <span className="mt-2 flex size-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)]" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Lettered Items (A, B, C...) */}
                {section.letteredItems && (
                  <div className="m-0 mb-4 grid grid-cols-1 gap-2.5">
                    {section.letteredItems.map((item) => (
                      <div
                        key={item.letter}
                        className="flex items-start gap-3.5 rounded-xl border border-accent/12 bg-panel/60 p-3.5 transition-colors hover:border-accent/30 hover:bg-panel/90"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-accent/35 bg-accent/15 font-mono text-xs font-bold text-accent">
                          {item.letter}
                        </span>
                        <span className="text-[0.93rem]/[1.65] font-light text-fg">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Trailing Paragraphs */}
                {section.trailingParagraphs && (
                  <div className="space-y-3 pt-2">
                    {section.trailingParagraphs.map((tp, idx) => (
                      <p key={idx} className="m-0 text-[0.95rem]/[1.7] text-steel font-normal">
                        {tp}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Declaração Final & Selo de Vigência */}
            <Card
              variant="highlight"
              className="mt-12 p-6 sm:p-8 border-accent/30 bg-[linear-gradient(145deg,rgb(18_28_44/0.95),rgb(8_12_20/0.9))] shadow-[0_0_50px_rgb(53_217_255/0.1)]"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-semibold">
                    <Sparkles className="size-4" />
                    <span>DECLARAÇÃO DE CONFORMIDADE OFICIAL</span>
                  </div>
                  <p className="m-0 text-[1.02rem]/[1.65] font-medium text-white max-w-[650px]">
                    {doc.finalStatement}
                  </p>
                  <p className="m-0 text-xs font-mono text-steel">
                    Solint Soluções Inteligentes com IA · Versão {doc.version} · {doc.lastUpdated}
                  </p>
                </div>

                <Button href={doc.contactBox.ctaHref} size="md" className="shrink-0">
                  {doc.contactBox.ctaLabel}
                </Button>
              </div>
            </Card>

            {/* Link para o outro documento legal */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between rounded-2xl border border-accent/14 bg-panel/50 p-5 gap-4">
              <div className="text-center sm:text-left">
                <span className="block font-display text-sm font-semibold text-white">
                  {doc.alternativeDoc.label}
                </span>
                <span className="block text-xs text-steel">
                  {doc.alternativeDoc.description}
                </span>
              </div>
              <Button href={doc.alternativeDoc.href} variant="secondary" size="sm">
                Acessar {doc.alternativeDoc.label}
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
