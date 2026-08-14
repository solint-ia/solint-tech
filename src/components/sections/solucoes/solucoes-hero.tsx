import {
  Lock,
  RotateCw,
  Server,
} from "lucide-react";
import { HeroMesh } from "@/components/layout";
import { TypedHeading } from "@/components/features";
import { Button, Reveal, SectionMarker } from "@/components/ui";
import { solucoesHero } from "@/config/content/solucoes";
import { cn } from "@/lib/utils";

/** Mockup de Website & Aplicação Web completa e moderna exibida no Hero de Soluções. */
function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      {/* Halo de luz de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-blue-deep/25 blur-3xl"
      />

      {/* Janela de Navegador / Mockup de Website */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-accent/28 bg-[linear-gradient(160deg,rgb(14_22_36/0.98),rgb(8_12_20/0.95))] shadow-[0_30px_80px_rgb(2_8_18/0.8)] backdrop-blur-2xl">
        {/* Barra de Navegação do Browser */}
        {/* Barra superior de janela estilo navegador */}
        <div className="flex items-center justify-between border-b border-accent/15 bg-[#0A101C] px-3 sm:px-4 py-2.5 sm:py-3 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-none">
            <span className="size-2 sm:size-2.5 rounded-full bg-rose-500/80" />
            <span className="size-2 sm:size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2 sm:size-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <div className="flex flex-1 max-w-[185px] sm:max-w-[280px] mx-1 sm:mx-3 items-center justify-between gap-1 rounded-lg border border-accent/18 bg-ink/90 px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-[0.62rem] sm:text-[0.7rem] text-steel">
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-hidden">
              <Lock className="size-2.5 sm:size-3 text-accent flex-none" />
              <span className="truncate">solint.dev/plataforma</span>
            </div>
            <RotateCw className="size-2.5 text-steel/60 flex-none hidden sm:block" />
          </div>

          <span className="flex items-center gap-1.5 font-mono text-[0.62rem] sm:text-[0.66rem] font-medium text-emerald-400 flex-none">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Interior do Website Mockup */}
        <div className="p-5">
          {/* Header / Navbar do Website */}
          <div className="flex items-center justify-between rounded-xl border border-accent/14 bg-panel/75 px-3.5 py-2.5 mb-4">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-md bg-accent text-ink font-bold font-mono text-xs">
                S
              </div>
              <span className="font-display text-[0.82rem] font-bold text-white tracking-tight">
                Solint Core
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3 font-mono text-[0.68rem] text-steel">
              <span className="text-white font-medium">Dashboard</span>
              <span>Operações</span>
              <span>APIs</span>
            </div>

            <span className="rounded-md bg-accent/15 px-2.5 py-1 font-mono text-[0.66rem] font-semibold text-accent border border-accent/25">
              ● Ativo
            </span>
          </div>

          {/* Banner Hero do Site */}
          <div className="rounded-2xl border border-accent/16 bg-[linear-gradient(135deg,rgb(18_28_46/0.8),rgb(10_16_28/0.6))] p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-accent">
                Painel de Controle em Tempo Real
              </span>
              <span className="font-mono text-[0.64rem] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                SLA Ativo
              </span>
            </div>
            <h4 className="font-display text-[1rem]/[1.3] font-bold text-white">
              Monitoramento & Telemetria Integrada
            </h4>
          </div>

          {/* 3 Métricas do Site */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            <div className="rounded-xl border border-accent/14 bg-panel/65 p-2.5">
              <span className="block text-[0.64rem] text-steel font-medium">
                Disponibilidade
              </span>
              <span className="mt-1 block font-display text-[0.92rem] font-bold text-white">
                Cloud Native
              </span>
              <span className="font-mono text-[0.62rem] font-semibold text-emerald-400">
                Estável
              </span>
            </div>

            <div className="rounded-xl border border-accent/14 bg-panel/65 p-2.5">
              <span className="block text-[0.64rem] text-steel font-medium">
                Throughput
              </span>
              <span className="mt-1 block font-display text-[0.92rem] font-bold text-white">
                Alta Escala
              </span>
              <span className="font-mono text-[0.62rem] font-semibold text-emerald-400">
                Otimizado
              </span>
            </div>

            <div className="rounded-xl border border-accent/14 bg-panel/65 p-2.5">
              <span className="block text-[0.64rem] text-steel font-medium">
                Tempo de Resposta
              </span>
              <span className="mt-1 block font-display text-[0.92rem] font-bold text-white">
                Instantâneo
              </span>
              <span className="font-mono text-[0.62rem] font-semibold text-accent">
                Baixa Latência
              </span>
            </div>
          </div>

          {/* Gráfico Neon e Lista de Módulos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
            {/* Gráfico SVG */}
            <div className="rounded-2xl border border-accent/15 bg-ink/80 p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-1">
                <span className="font-display text-[0.74rem] font-semibold text-white">
                  Desempenho
                </span>
                <span className="font-mono text-[0.62rem] text-accent">
                  24h
                </span>
              </div>
              <div className="relative h-16 w-full">
                <svg
                  viewBox="0 0 200 60"
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="siteChart" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#35D9FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#168CFF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 45 Q 30 25 70 38 T 130 18 T 200 12 L 200 60 L 0 60 Z"
                    fill="url(#siteChart)"
                  />
                  <path
                    d="M 0 45 Q 30 25 70 38 T 130 18 T 200 12"
                    fill="none"
                    stroke="#35D9FF"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_6px_rgb(53_217_255/0.8)]"
                  />
                  <circle cx="130" cy="18" r="3" fill="#FFFFFF" stroke="#35D9FF" strokeWidth="1.5" />
                  <circle cx="200" cy="12" r="3" fill="#35D9FF" />
                </svg>
              </div>
            </div>

            {/* Módulos do Sistema */}
            <div className="flex flex-col justify-between gap-1.5">
              <div className="flex items-center justify-between rounded-xl border border-accent/12 bg-panel/60 px-3 py-1.5 text-[0.72rem]">
                <span className="font-medium text-white">Gateway de Pagamentos</span>
                <span className="font-mono text-[0.62rem] text-emerald-400 font-semibold">✓ Conectado</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-accent/12 bg-panel/60 px-3 py-1.5 text-[0.72rem]">
                <span className="font-medium text-white">Agentes de Automação</span>
                <span className="font-mono text-[0.62rem] text-accent font-semibold">Ativo</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-accent/12 bg-panel/60 px-3 py-1.5 text-[0.72rem]">
                <span className="font-medium text-white">Banco de Dados Unificado</span>
                <span className="font-mono text-[0.62rem] text-emerald-400 font-semibold">● Sincronizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé do Browser Mockup */}
        <div className="flex items-center justify-between border-t border-accent/14 bg-[#080D16] px-4 py-2.5 font-mono text-[0.66rem] text-steel">
          <span className="flex items-center gap-1.5">
            <Server className="size-3 text-accent" />
            Arquitetura Escalável · Alta Disponibilidade
          </span>
          <span className="text-accent font-semibold">Solint v2.4</span>
        </div>
      </div>
    </div>
  );
}

/** Hero de Soluções: título com typewriter e dashboard de produto interativo. */
export function SolucoesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-46 pb-24">
      <SectionMarker label={solucoesHero.eyebrow} position="hero" />
      <HeroMesh pattern="grid" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[clamp(36px,5vw,64px)]">
        <div>
          <Reveal>
            <TypedHeading
              lead={solucoesHero.titleLead}
              typed={solucoesHero.titleTyped}
              tail={solucoesHero.titleTail}
              className="text-[clamp(2.3rem,4.6vw,3.6rem)]/[1.08]"
            />
          </Reveal>

          {solucoesHero.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.07 + index * 0.05}>
              <p
                className={cn(
                  "m-0 max-w-[560px] text-pretty text-[clamp(1rem,1.3vw,1.16rem)]/[1.68] font-light text-muted",
                  index === solucoesHero.paragraphs.length - 1 ? "mb-10" : "mb-5",
                )}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="flex flex-wrap gap-3.5">
            <Button href={solucoesHero.primaryCta.href}>{solucoesHero.primaryCta.label}</Button>
            <Button href={solucoesHero.secondaryCta.href} variant="secondary">
              {solucoesHero.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <ProductMockup />
        </Reveal>
      </div>
    </section>
  );
}
