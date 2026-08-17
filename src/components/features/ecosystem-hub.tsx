import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  Bot,
  BrainCircuit,
  Calendar,
  CreditCard,
  Database,
  FileSpreadsheet,
  Globe,
  HardDrive,
  Layers,
  Mail,
  MessageCircle,
  Network,
  Send,
  Server,
  Sparkles,
  Trello,
  Workflow,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui";
import { HUB_NODE_ATTR, SPOKE_NODE_ATTR, useHubLines } from "@/hooks";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { TechnologyGroup, TechnologyItem } from "@/types";

/* ==========================================================================
   Ícones e Logos dos Satélites
   ========================================================================== */

function BrandLogo({ iconKey }: { iconKey?: string }) {
  switch (iconKey) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#25D366]" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.178-.176.2-.352.226-.653.075-.3-.15-1.268-.468-2.416-1.492-.894-.798-1.497-1.784-1.673-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.928-2.237-.245-.588-.493-.509-.677-.518-.176-.009-.376-.01-.577-.01-.2 0-.527.075-.802.375-.276.3-1.054 1.03-1.054 2.513 0 1.482 1.08 2.914 1.23 3.115.15.2 2.124 3.243 5.147 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.12.581-.088 1.78-.727 2.03-1.43.25-.702.25-1.303.176-1.428-.076-.126-.276-.201-.577-.351zM12.04 2c-5.464 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 stroke-[#E1306C] fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "telegram":
      return <Send className="size-4 shrink-0 text-[#229ED9]" />;
    case "webchat":
      return <Globe className="size-4 shrink-0 text-accent" />;
    case "ecommerce":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#FFE600] stroke-[#FFE600]" strokeWidth="1" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    case "email":
      return <Mail className="size-4 shrink-0 text-[#35D9FF]" />;
    case "crm":
      return (
        <span className="flex size-4.5 items-center justify-center rounded bg-[#168CFF]/25 font-mono text-[9px] font-bold text-[#5FB6FF] border border-[#168CFF]/40">
          CRM
        </span>
      );
    case "erp":
      return (
        <span className="flex size-4.5 items-center justify-center rounded bg-[#8A3FFC]/25 font-mono text-[9px] font-bold text-[#BE95FF] border border-[#8A3FFC]/40">
          ERP
        </span>
      );
    case "internal":
      return <Server className="size-4 shrink-0 text-accent" />;
    case "finance":
      return <CreditCard className="size-4 shrink-0 text-[#35D9FF]" />;
    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#10A37F]" aria-hidden="true">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.597 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.7948.7948 0 0 0-.4063-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0743a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4593a.7948.7948 0 0 0-.3927.6813v6.7224zm1.0694-1.2588l2.6238-1.514 2.6238 1.514v3.028l-2.6238 1.514-2.6238-1.514z" />
        </svg>
      );
    case "grok":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-white" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#4E88FF]" aria-hidden="true">
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
        </svg>
      );
    case "deepseek":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#4D6BFE]" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.8 0 5.34-1.15 7.17-3.01l-1.42-1.42C16.27 19.06 14.25 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c3.08 0 5.76 1.74 7.1 4.3L20.89 7C19.18 3.99 15.84 2 12 2zm1 5v6h5v-2h-3V7h-2z" />
        </svg>
      );
    case "claude":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#D97706]" aria-hidden="true">
          <path d="M12 2l2.4 6.6L21 11l-5.6 4.4L17 22l-5-4-5 4 1.6-6.6L2 11l6.6-2.4z" />
        </svg>
      );
    case "elevenlabs":
      return (
        <div className="flex size-4 items-center justify-center gap-0.5" aria-hidden="true">
          <span className="h-3.5 w-1 rounded-sm bg-white" />
          <span className="h-3.5 w-1 rounded-sm bg-white" />
        </div>
      );
    case "sql":
      return <Database className="size-4 shrink-0 text-[#00758F]" />;
    case "calendar":
      return <Calendar className="size-4 shrink-0 text-[#4285F4]" />;
    case "gdrive":
      return <HardDrive className="size-4 shrink-0 text-[#0F9D58]" />;
    case "excel":
      return <FileSpreadsheet className="size-4 shrink-0 text-[#107C41]" />;
    case "trello":
      return <Trello className="size-4 shrink-0 text-[#0079BF]" />;
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#336791]" aria-hidden="true">
          <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.22 1.02 4.23 2.69 5.67-.18.72-.54 1.76-1.57 2.67 1.75.05 3.32-.62 4.28-1.28.81.18 1.68.28 2.6.28 4.97 0 9-3.58 9-8s-4.03-7.34-9-7.34zm0 12c-.74 0-1.45-.08-2.12-.23l-.44-.1-.38.25c-.56.36-1.39.75-2.38.83.47-.56.78-1.24.93-1.83l.11-.44-.33-.31C6.26 12.11 5.5 10.64 5.5 9c0-3.03 2.91-5.5 6.5-5.5s6.5 2.47 6.5 5.5-2.91 6-6.5 6z" />
        </svg>
      );
    case "workflow":
      return <Zap className="size-4 shrink-0 text-[#FFD700]" />;
    case "more_1000":
      return <Sparkles className="size-4 shrink-0 text-amber animate-pulse" />;
    default:
      return <Layers className="size-4 shrink-0 text-accent" />;
  }
}

function CategoryBadgeIcon({ category }: { category?: string }) {
  if (category === "communication") return <MessageCircle className="size-4" />;
  if (category === "client_systems") return <Network className="size-4" />;
  if (category === "llms") return <BrainCircuit className="size-4" />;
  if (category === "integrations") return <Workflow className="size-4" />;
  return <Layers className="size-4" />;
}

function SpokeCard({ group }: { group: TechnologyGroup }) {
  return (
    <div
      {...{ [SPOKE_NODE_ATTR]: "" }}
      className="group relative h-full rounded-2xl border border-accent/20 bg-[#070D18]/85 p-4.5 sm:p-5 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-[#0C172B]/90 hover:shadow-[0_12px_36px_rgb(22_140_255/0.18)]"
    >
      {/* Conector de nó no mobile */}
      <div className="absolute -top-1.5 left-1/2 size-2.5 -translate-x-1/2 rounded-full border border-ink bg-accent shadow-[0_0_8px_rgb(53_217_255/0.8)] lg:hidden" />

      {/* Cabeçalho do Bloco com Ícone da Categoria */}
      <div className="mb-3.5 flex items-center justify-between gap-2 border-b border-accent/12 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
            <CategoryBadgeIcon category={group.category} />
          </span>
          <span className="font-display text-[0.92rem] sm:text-[0.94rem] font-semibold tracking-[-0.01em] text-white">
            {group.label}
          </span>
        </div>
        <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.9)]" />
      </div>

      {/* Grade de Itens e Logos Oficiais do Grupo */}
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => {
          const isObj = typeof item === "object";
          const name = isObj ? (item as TechnologyItem).name : (item as string);
          const iconKey = isObj ? (item as TechnologyItem).iconKey : undefined;
          const badge = isObj ? (item as TechnologyItem).badge : undefined;
          const isHighlight = isObj ? (item as TechnologyItem).isHighlight : false;

          if (isHighlight) {
            return (
              <div
                key={name}
                className="mt-1 flex w-full items-center justify-between gap-2 rounded-xl border border-amber/45 bg-gradient-to-r from-amber/15 via-[#2A1F0D]/60 to-amber/15 px-3 py-2 text-amber shadow-[0_0_18px_rgb(255_182_92/0.25)] transition-all duration-300 hover:border-amber/70 hover:shadow-[0_0_24px_rgb(255_182_92/0.4)]"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 shrink-0 text-amber animate-pulse" />
                  <span className="font-mono text-[0.76rem] font-bold tracking-tight text-white uppercase">
                    {name}
                  </span>
                </div>
                <span className="rounded-md bg-amber/25 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber">
                  ✦ Ilimitado
                </span>
              </div>
            );
          }

          return (
            <div
              key={name}
              className="group/item inline-flex items-center gap-2 rounded-xl border border-accent/15 bg-ink/75 px-2.5 py-1.5 transition-all duration-200 hover:border-accent/40 hover:bg-[#0E2038] hover:text-white"
            >
              <BrandLogo iconKey={iconKey} />
              <span className="font-mono text-[0.74rem] sm:text-[0.75rem] font-medium text-[#C7D8EE] group-hover/item:text-white">
                {name}
              </span>
              {badge ? (
                <span className="hidden font-mono text-[9px] text-faint group-hover/item:inline-block">
                  · {badge}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Posições em grade 2x2 contornando o Hub Central na tela desktop:
 * - Spoke 0: Top-Left (Plataformas de Comunicação)
 * - Spoke 1: Top-Right (Sistemas do Cliente)
 * - Spoke 2: Bottom-Left (LLMs)
 * - Spoke 3: Bottom-Right (Integrações)
 */
const spokePlacement = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];

export function EcosystemHub({
  groups,
  hubLabel,
}: {
  groups: readonly TechnologyGroup[];
  hubLabel: string;
}) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const { wrapRef, groupRef } = useHubLines<HTMLDivElement>();

  return (
    <div ref={wrapRef} className="relative">
      {/* SVG de tubos/linhas luminosas com fluxo de partículas animadas (desktop) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible lg:block"
      >
        <g ref={groupRef} />
      </svg>

      <div className="relative z-1 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-5 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_1.1fr] lg:gap-x-12 lg:gap-y-10">
        
        {/* ====================================================================
            HUB CENTRAL: AGENTE DE IA (ORQUESTRADOR AUTÔNOMO)
            ==================================================================== */}
        <Reveal
          direction="left"
          delay={0.04}
          className="relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-[linear-gradient(150deg,rgb(14_24_42/0.95),rgb(6_10_18/0.92))] p-6 sm:p-7 text-center shadow-[0_0_60px_rgb(22_140_255/0.25)] backdrop-blur-xl sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          {...{ [HUB_NODE_ATTR]: "" }}
        >
          {/* Halo volumétrico de fundo */}
          <div
            aria-hidden="true"
            className="animate-glowpan pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgb(53_217_255/0.22)_0%,rgb(23_78_255/0.12)_45%,transparent_70%)] blur-lg"
          />

          <div className="relative z-1 flex flex-col items-center">
            {/* Tag em Destaque: AGENTE DE IA */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#168CFF] to-[#35D9FF] px-4.5 py-1.5 font-mono text-[0.82rem] font-bold text-ink shadow-[0_0_24px_rgb(53_217_255/0.7)] uppercase tracking-wider">
              <Bot className="size-4 shrink-0 text-ink" />
              <span>AGENTE DE IA</span>
            </div>

            {/* Logo Solint Livre no Centro com Efeito Pulsante */}
            <div className="relative my-4 flex w-full items-center justify-center py-2">
              {/* Anéis de Pulso e Aura Luminosa */}
              <div
                aria-hidden="true"
                className="animate-ping absolute size-28 rounded-full border border-accent/25 opacity-25"
                style={{ animationDuration: "5s" }}
              />
              <div
                aria-hidden="true"
                className="animate-spin-slow absolute size-32 rounded-full border border-dashed border-accent/20"
              />

              {/* Logo Oficial Livre no Centro */}
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.name}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="animate-logo-pulse h-10 sm:h-12 w-auto max-w-[220px] object-contain drop-shadow-[0_0_22px_rgb(53_217_255/0.8)]"
                priority
              />
            </div>

            {/* Rótulo de Orquestração */}
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent">
              <Activity className="size-3.5" />
              <span>Orquestrador Central Autônomo</span>
            </div>

            <p className="mt-2 max-w-[270px] text-[0.82rem]/[1.5] font-light text-muted">
              {hubLabel}
            </p>
          </div>
        </Reveal>

        {/* ====================================================================
            VERSÃO MOBILE: SELETOR DE ABAS SEGMENTADO (OPÇÃO 1)
            ==================================================================== */}
        <div className="flex flex-col gap-3.5 lg:hidden sm:col-span-2">
          {/* Conector visual luminoso */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative flex h-4 w-full items-center justify-center"
          >
            <div className="h-full w-[2px] bg-[linear-gradient(to_bottom,#35D9FF,#168CFF)] shadow-[0_0_8px_rgb(53_217_255/0.6)]" />
            <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_rgb(53_217_255/0.9)] absolute top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center justify-between px-1">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent animate-ping" />
              4 Categorias Conectadas
            </span>
            <span className="font-mono text-[10.5px] text-steel-2">
              Toque para alternar
            </span>
          </div>

          {/* Abas Segmentadas em Grid 2x2 no Mobile */}
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 rounded-2xl border border-accent/20 bg-panel-2/90 p-1.5 shadow-[0_4px_20px_rgb(2_8_18/0.4)] backdrop-blur-md">
            {groups.map((group, index) => {
              const isSelected = index === activeMobileIndex;

              return (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => setActiveMobileIndex(index)}
                  className={cn(
                    "group relative flex items-center justify-center gap-2 rounded-xl py-2.5 px-2 text-center transition-all duration-200",
                    isSelected
                      ? "border border-accent/50 bg-[linear-gradient(135deg,#0F243E,#07101E)] text-white shadow-[0_0_16px_rgb(53_217_255/0.25)]"
                      : "border border-transparent text-steel-2 hover:bg-panel/60 hover:text-white"
                  )}
                >
                  <span
                    className={cn(
                      "size-4 shrink-0 transition-colors",
                      isSelected ? "text-accent" : "text-steel-2"
                    )}
                  >
                    <CategoryBadgeIcon category={group.category} />
                  </span>
                  <span className="font-display text-[0.8rem] font-semibold truncate">
                    {group.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bloco Ativo Renderizado */}
          {groups[activeMobileIndex] ? (
            <div key={`mobile-tab-${activeMobileIndex}`}>
              <SpokeCard group={groups[activeMobileIndex]} />
            </div>
          ) : null}
        </div>

        {/* ====================================================================
            VERSÃO DESKTOP: 4 SATÉLITES EM GRADE 2x2 COM TUBOS LUMINOSOS
            ==================================================================== */}
        {groups.map((group, index) => (
          <Reveal
            key={group.label}
            direction="left"
            delay={0.08 + index * 0.08}
            className={cn("hidden lg:block", spokePlacement[index])}
          >
            <SpokeCard group={group} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
