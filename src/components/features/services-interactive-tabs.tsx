"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  Lock,
  Network,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button, Reveal } from "@/components/ui";
import { CONTACT_ANCHOR } from "@/config/navigation";
import { cn } from "@/lib/utils";
import type { SolutionPillar } from "@/types";

/* ==========================================================================
   Ícones dos Pilares
   ========================================================================== */

function PillarTabIcon({ id }: { id: string }) {
  switch (id) {
    case "presenca":
      return <Globe className="size-4 shrink-0" />;
    case "sistemas":
      return <LayoutDashboard className="size-4 shrink-0" />;
    case "integracoes":
      return <Network className="size-4 shrink-0" />;
    default:
      return <Layers className="size-4 shrink-0" />;
  }
}

/* ==========================================================================
   Live Previews Interativos para Cada Pilar
   ========================================================================== */

function PresencaPreview() {
  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {/* Barra de Status do E-commerce/Site */}
      <div className="flex items-center justify-between gap-2 border-b border-accent/15 pb-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] font-semibold text-white">
            loja.empresa.com.br
          </span>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
          ● 99.9% Uptime
        </span>
      </div>

      {/* Mini Hero Mockup */}
      <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-[linear-gradient(135deg,#0E1E34,#070D18)] p-3.5 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
            ✦ Checkout Transparente Ativo
          </span>
          <span className="font-mono text-[10px] text-steel-2">Pix · Cartão · Boleto</span>
        </div>
        <h4 className="mt-2 text-sm sm:text-base font-bold text-white tracking-tight">
          Experiência de Compra sem Fricção
        </h4>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <div className="rounded-lg bg-ink/75 px-2.5 py-1 font-mono text-[10px] text-accent border border-accent/20">
            ⚡ Carregamento: 0.8s
          </div>
          <div className="rounded-lg bg-ink/75 px-2.5 py-1 font-mono text-[10px] text-amber border border-amber/20">
            🎯 Taxa de Conversão: +42%
          </div>
        </div>
      </div>

      {/* Feed de Conversões em Tempo Real */}
      <div className="flex flex-col gap-2 rounded-xl border border-accent/12 bg-ink/65 p-3">
        <span className="font-mono text-[10.5px] font-semibold text-steel-2 uppercase tracking-wide">
          Eventos de Conversão ao Vivo
        </span>
        <div className="flex items-center justify-between text-[11.5px] text-muted font-light">
          <div className="flex items-center gap-1.5 text-fg-strong">
            <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
            <span>Lead qualificado capturado via Landing Page</span>
          </div>
          <span className="font-mono text-[10px] text-accent">Há 4s</span>
        </div>
        <div className="flex items-center justify-between text-[11.5px] text-muted font-light">
          <div className="flex items-center gap-1.5 text-fg-strong">
            <CheckCircle2 className="size-3.5 text-accent shrink-0" />
            <span>Pedido #4892 sincronizado com ERP</span>
          </div>
          <span className="font-mono text-[10px] text-accent">Há 12s</span>
        </div>
      </div>
    </div>
  );
}

function SistemasPreview() {
  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {/* Header do Sistema / Multi-tenant */}
      <div className="flex items-center justify-between gap-2 border-b border-accent/15 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-accent" />
          <span className="font-mono text-[11px] font-semibold text-white">
            app.empresa.com.br/admin
          </span>
        </div>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
          RBAC · Nível Bancário
        </span>
      </div>

      {/* Grid de Métricas de Operação */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-accent/15 bg-ink/75 p-2.5 text-center">
          <span className="block font-mono text-[9px] text-steel-2 uppercase">Workspaces</span>
          <span className="font-display text-sm sm:text-base font-bold text-white">128 ativas</span>
        </div>
        <div className="rounded-xl border border-accent/15 bg-ink/75 p-2.5 text-center">
          <span className="block font-mono text-[9px] text-steel-2 uppercase">Retrabalho</span>
          <span className="font-display text-sm sm:text-base font-bold text-emerald-400">-80%</span>
        </div>
        <div className="rounded-xl border border-accent/15 bg-ink/75 p-2.5 text-center">
          <span className="block font-mono text-[9px] text-steel-2 uppercase">SLA Cloud</span>
          <span className="font-display text-sm sm:text-base font-bold text-accent">99.99%</span>
        </div>
      </div>

      {/* Log de Workflows & Permissões */}
      <div className="flex flex-col gap-2 rounded-xl border border-accent/12 bg-ink/65 p-3">
        <span className="font-mono text-[10.5px] font-semibold text-steel-2 uppercase tracking-wide">
          Pipeline de Workflows Auditáveis
        </span>
        <div className="flex items-center justify-between text-[11.5px] text-fg-strong">
          <div className="flex items-center gap-1.5">
            <Lock className="size-3.5 text-accent shrink-0" />
            <span>Aprovação de Contrato #104 (Diretoria)</span>
          </div>
          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-400">
            Aprovado
          </span>
        </div>
        <div className="flex items-center justify-between text-[11.5px] text-fg-strong">
          <div className="flex items-center gap-1.5">
            <Server className="size-3.5 text-[#BE95FF] shrink-0" />
            <span>Faturamento SaaS recorrente consolidado</span>
          </div>
          <span className="rounded bg-accent/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-accent">
            Executado
          </span>
        </div>
      </div>
    </div>
  );
}

function IntegracoesPreview() {
  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {/* Header do Hub de APIs */}
      <div className="flex items-center justify-between gap-2 border-b border-accent/15 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="size-4 text-amber" />
          <span className="font-mono text-[11px] font-semibold text-white">
            api.solint.tech/v1/sync
          </span>
        </div>
        <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber">
          ⚡ Sincronia &lt; 350ms
        </span>
      </div>

      {/* Malha de Conexão em Tempo Real */}
      <div className="flex items-center justify-between rounded-xl border border-accent/18 bg-[linear-gradient(135deg,#0E1E34,#070D18)] p-3">
        <div className="flex flex-col items-center">
          <span className="rounded-lg bg-accent/15 p-1.5 text-accent border border-accent/30">
            <Database className="size-3.5" />
          </span>
          <span className="mt-1 font-mono text-[9px] text-steel-2">ERP / Banco</span>
        </div>
        <div className="flex flex-1 items-center justify-center px-2">
          <div className="h-[2px] w-full bg-[linear-gradient(90deg,#35D9FF,#25D366)] shadow-[0_0_8px_rgb(53_217_255/0.8)] relative">
            <span className="size-1.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-1/2 animate-ping" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="rounded-lg bg-[#25D366]/15 p-1.5 text-[#25D366] border border-[#25D366]/30">
            <Activity className="size-3.5" />
          </span>
          <span className="mt-1 font-mono text-[9px] text-steel-2">CRM / BI</span>
        </div>
      </div>

      {/* Stream de Webhooks Ativos */}
      <div className="flex flex-col gap-2 rounded-xl border border-accent/12 bg-ink/65 p-3">
        <span className="font-mono text-[10.5px] font-semibold text-steel-2 uppercase tracking-wide">
          Telemetria de APIs & Webhooks
        </span>
        <div className="flex items-center justify-between text-[11px] font-mono text-fg-strong">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>POST /webhooks/hubspot</span>
          </div>
          <span className="text-emerald-400">200 OK · 140ms</span>
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-fg-strong">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>POST /webhooks/sap-totvs</span>
          </div>
          <span className="text-emerald-400">200 OK · 210ms</span>
        </div>
      </div>
    </div>
  );
}

function LivePreviewPanel({ pillarId }: { pillarId: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-accent/25 bg-[#050B14]/90 shadow-[0_12px_40px_rgb(2_8_18/0.6),0_0_30px_rgb(22_140_255/0.12)] backdrop-blur-xl transition-all duration-300">
      {/* Barra de Janela Superior com Botões */}
      <div className="flex items-center justify-between border-b border-accent/15 bg-panel-2/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-rose-500/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-steel-2">
          <Radio className="size-3 text-accent animate-pulse" />
          <span>Simulação de Produção</span>
        </div>
      </div>

      {/* Conteúdo Dinâmico conforme o Pilar Selecionado */}
      {pillarId === "presenca" && <PresencaPreview />}
      {pillarId === "sistemas" && <SistemasPreview />}
      {pillarId === "integracoes" && <IntegracoesPreview />}
    </div>
  );
}

/* ==========================================================================
   Componente Principal: ServicesInteractiveTabs
   ========================================================================== */

export function ServicesInteractiveTabs({
  pillars,
}: {
  pillars: readonly SolutionPillar[];
}) {
  const [activeId, setActiveId] = useState<string>(pillars[0]?.id || "presenca");
  const currentPillar = pillars.find((p) => p.id === activeId) ?? pillars[0];

  if (!currentPillar) return null;

  return (
    <div className="relative">
      {/* 1. SELETOR DE ABAS INTERATIVO (RESPONSIVO COM ALTA VISIBILIDADE) */}
      <Reveal direction="left" className="mb-8 sm:mb-10">
        {/* Dica para mobile: Deixar claro que são 3 soluções e que uma deve ser selecionada */}
        <div className="mb-2.5 flex items-center justify-between px-1 md:hidden">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent animate-ping" />
            3 Soluções Disponíveis
          </span>
          <span className="font-mono text-[10.5px] text-steel-2">
            Toque para alternar
          </span>
        </div>

        {/* Layout Mobile: 3 Colunas Segmentadas 100% Visíveis Sem Scroll */}
        <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-accent/20 bg-panel-2/85 p-1.5 shadow-[0_4px_24px_rgb(2_8_18/0.4)] backdrop-blur-md md:hidden">
          {pillars.map((pillar, idx) => {
            const isActive = pillar.id === activeId;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveId(pillar.id)}
                className={cn(
                  "group relative flex flex-col items-center justify-center gap-1 rounded-xl py-2.5 px-1 text-center transition-all duration-300",
                  isActive
                    ? "border border-accent/50 bg-[linear-gradient(145deg,#0F243E,#07101E)] text-white shadow-[0_0_18px_rgb(53_217_255/0.3)]"
                    : "border border-transparent text-steel-2 hover:bg-panel/60 hover:text-white",
                )}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      "font-mono text-[9.5px] font-bold px-1 py-0.5 rounded",
                      isActive ? "bg-accent/25 text-accent" : "bg-ink/60 text-faint",
                    )}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={cn(
                      "size-4 flex items-center justify-center rounded",
                      isActive ? "text-accent" : "text-steel-2",
                    )}
                  >
                    <PillarTabIcon id={pillar.id} />
                  </span>
                </div>
                <span className="font-display text-[11px]/tight font-bold">
                  {pillar.shortLabel}
                </span>
                {isActive ? (
                  <span className="size-1 rounded-full bg-accent shadow-[0_0_6px_rgb(53_217_255/0.8)]" />
                ) : (
                  <span className="size-1 rounded-full bg-transparent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Layout Desktop (Tablet e Computador) */}
        <div className="hidden md:flex w-full items-center gap-2.5 rounded-2xl border border-accent/18 bg-panel-2/75 p-1.5 shadow-[0_4px_20px_rgb(2_8_18/0.3)] backdrop-blur-md">
          {pillars.map((pillar, idx) => {
            const isActive = pillar.id === activeId;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveId(pillar.id)}
                className={cn(
                  "group relative flex flex-1 items-center justify-center gap-3 rounded-xl px-4 py-3 font-display text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "border border-accent/45 bg-[linear-gradient(135deg,#0E2038,#081120)] text-white shadow-[0_0_20px_rgb(53_217_255/0.25)]"
                    : "border border-transparent text-steel-2 hover:border-accent/20 hover:bg-panel/50 hover:text-white",
                )}
              >
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-lg transition-colors",
                    isActive
                      ? "bg-accent/20 text-accent"
                      : "bg-ink/60 text-steel-2 group-hover:text-accent",
                  )}
                >
                  <PillarTabIcon id={pillar.id} />
                </span>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <span className="text-[0.88rem] leading-tight">{pillar.label}</span>
                  </div>
                  <span className="font-mono text-[10px] text-faint font-normal">
                    {pillar.shortLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* 2. CONTEÚDO EM GRID RESPONSIVO (ESQUERDA: ENTREGÁVEIS / DIREITA: LIVE PREVIEW) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
        {/* COLUNA ESQUERDA: Proposta de Valor e Entregáveis Consolidados */}
        <Reveal key={`content-${currentPillar.id}`} direction="left" delay={0.05}>
          <div className="flex flex-col gap-6">
            {/* Header do Pilar */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.7rem] font-semibold text-accent shadow-[0_0_12px_rgb(53_217_255/0.2)] uppercase tracking-wider">
                  <Sparkles className="size-3" />
                  {currentPillar.badge}
                </span>
                <span className="font-mono text-xs text-steel-2">— {currentPillar.shortLabel}</span>
              </div>

              <h3 className="m-0 font-display text-[clamp(1.4rem,2.4vw,1.85rem)]/[1.2] font-bold text-white tracking-[-0.02em]">
                {currentPillar.subtitle}
              </h3>

              <p className="mt-3 text-pretty text-[0.94rem]/[1.65] font-light text-muted">
                {currentPillar.description}
              </p>
            </div>

            {/* 3 Entregáveis Estratégicos Objetivos */}
            <div className="flex flex-col gap-3">
              {currentPillar.deliverables.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative rounded-xl border border-accent/15 bg-panel/75 p-4 shadow-[0_4px_16px_rgb(2_8_18/0.3)] backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-[#0D192C]/85 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-accent/15 font-mono text-[11px] font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <h4 className="m-0 font-display text-[0.98rem] font-bold text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  <p className="mt-2 m-0 text-pretty text-[0.87rem]/[1.55] font-light text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Métricas de Impacto em Linha */}
            <div className="grid grid-cols-3 gap-2.5 rounded-2xl border border-accent/18 bg-panel-2/60 p-3.5">
              {currentPillar.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <span className="block font-mono text-[10px] text-steel-2 uppercase">
                    {m.label}
                  </span>
                  <span className="font-display text-sm sm:text-base font-bold text-white">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Botão de Contato com Contexto */}
            <div className="pt-2">
              <Button
                href={`${CONTACT_ANCHOR}?text=${encodeURIComponent(`Olá! Gostaria de conversar sobre as soluções de ${currentPillar.label} da Solint.`)}`}
                className="w-full sm:w-auto"
                size="md"
              >
                <span>Falar sobre {currentPillar.label}</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>

        {/* COLUNA DIREITA: Live Preview Interativo do Pilar */}
        <Reveal key={`preview-${currentPillar.id}`} direction="left" delay={0.12}>
          <div className="sticky top-28 flex flex-col gap-4">
            <LivePreviewPanel pillarId={currentPillar.id} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
