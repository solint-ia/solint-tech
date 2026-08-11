import {
  BrainCircuit,
  CheckCheck,
  Flame,
  MessageSquare,
  Zap,
} from "lucide-react";
import { agentFeed } from "@/config/content/agentes";

/**
 * Feed "ao vivo" do agente exibido no hero de Agentes de IA.
 * Estrutura de AI Operations Console com linha laser contínua e handoff comercial.
 */
export function AgentFeed() {
  const [event1, event2, event3] = agentFeed.events;

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[480px]"
    >
      {/* Halo de luz decorativo de fundo */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-accent/12 blur-2xl" />

      {/* Terminal Container */}
      <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-[#070C15]/90 shadow-[0_30px_70px_rgb(2_8_18/0.75)] backdrop-blur-xl">
        {/* Barra superior de janela estilo console */}
        <div className="flex items-center justify-between border-b border-accent/14 bg-panel-2/90 px-4.5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-500/70" />
            <span className="size-2.5 rounded-full bg-amber-500/70" />
            <span className="size-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 font-mono text-[0.78rem] font-medium text-fg-strong">
              {agentFeed.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.68rem] text-faint-2">
              Latência: {agentFeed.metrics.latency}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[0.68rem] font-semibold text-accent shadow-[0_0_8px_rgb(53_217_255/0.2)]">
              <span className="animate-node size-1.5 rounded-full bg-accent" />
              {agentFeed.statusLabel.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Corpo do feed com trilha laser vertical contínua */}
        <div className="relative flex flex-col gap-5 p-5">
          {/* Linha laser vertical contínua que liga do Evento 1 até o topo do Evento 4 (Handoff) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[38px] top-9 bottom-[96px] sm:bottom-[92px] w-[1.5px] -translate-x-1/2 bg-[linear-gradient(to_bottom,#35D9FF_0%,#168CFF_65%,#FFB65C_100%)] shadow-[0_0_8px_rgb(53_217_255/0.4)]"
          >
            {/* Feixe animado de pulso descendente */}
            <div className="animate-flow absolute top-0 left-0 h-16 w-full bg-[linear-gradient(to_bottom,transparent,#FFFFFF,transparent)]" />
          </div>

          {/* EVENTO 1: Lead Identificado (Trigger / Input) */}
          <div className="animate-rowpulse relative z-10 flex items-start gap-3.5" style={{ animationDelay: "0s" }}>
            <div className="flex size-9 flex-none items-center justify-center rounded-xl border border-accent/25 bg-[#09111E] text-accent shadow-[0_0_12px_rgb(53_217_255/0.3)]">
              <MessageSquare className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-[0.88rem] font-semibold text-fg-bright">
                  {event1.title}
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[0.65rem] text-faint">
                  <span>{event1.timestamp}</span>
                  <span>·</span>
                  <span className="text-steel">{event1.tag}</span>
                </div>
              </div>
              <div className="mt-1.5 rounded-xl border border-accent/15 bg-ink/70 px-3 py-2 text-[0.8rem]/[1.5] font-light text-steel-2">
                {event1.quote}
              </div>
            </div>
          </div>

          {/* EVENTO 2: Intenção Reconhecida (AI Reasoning & Semantic Analysis) */}
          <div className="animate-rowpulse relative z-10 flex items-start gap-3.5" style={{ animationDelay: "2s" }}>
            <div className="flex size-9 flex-none items-center justify-center rounded-xl border border-accent/25 bg-[#09111E] text-accent shadow-[0_0_12px_rgb(53_217_255/0.3)]">
              <BrainCircuit className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-[0.88rem] font-semibold text-fg-bright">
                  {event2.title}
                </span>
                <span className="font-mono text-[0.65rem] text-accent">
                  {event2.confidence}
                </span>
              </div>
              <p className="mt-1 text-[0.78rem]/[1.5] font-light text-muted">
                {event2.detail}
              </p>
            </div>
          </div>

          {/* EVENTO 3: Resposta Enviada (Autonomous Action) */}
          <div className="animate-rowpulse relative z-10 flex items-start gap-3.5" style={{ animationDelay: "4s" }}>
            <div className="flex size-9 flex-none items-center justify-center rounded-xl border border-accent/25 bg-[#09111E] text-accent shadow-[0_0_12px_rgb(53_217_255/0.3)]">
              <Zap className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-[0.88rem] font-semibold text-fg-bright">
                  {event3.title}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] text-accent">
                  <CheckCheck className="size-3.5" />
                  {event3.speed}
                </span>
              </div>
              <p className="mt-1 text-[0.78rem]/[1.5] font-light text-muted">
                {event3.detail}
              </p>
            </div>
          </div>

          {/* EVENTO 4: Handoff Comercial (Destino com destaque âmbar) */}
          <div
            className="animate-rowpulse relative z-10 flex items-start gap-3.5 rounded-xl border border-amber/35 bg-[linear-gradient(145deg,rgb(22_20_16/0.9),rgb(12_14_22/0.88))] p-3.5 shadow-[0_0_24px_rgb(255_182_92/0.14)]"
            style={{ animationDelay: "6s" }}
          >
            <div className="flex size-9 flex-none items-center justify-center rounded-xl border border-amber/30 bg-amber/15 text-amber shadow-[0_0_12px_rgb(255_182_92/0.35)]">
              <Flame className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-[0.9rem] font-semibold text-white">
                  {agentFeed.handoff.title}
                </span>
                <span className="font-mono text-[0.68rem] font-semibold text-amber">
                  {agentFeed.handoff.status}
                </span>
              </div>
              <p className="mt-1 text-[0.78rem]/[1.5] font-light text-muted">
                {agentFeed.handoff.detail}
              </p>
              <div className="mt-2 flex items-center gap-1.5 font-mono text-[0.65rem] text-faint-2">
                <span>Destino:</span>
                <span className="text-amber-soft">{agentFeed.handoff.destination}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
