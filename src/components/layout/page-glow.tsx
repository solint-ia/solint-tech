import { cn } from "@/lib/utils";

/** Cada página tem um arranjo próprio de halos, mantendo a mesma paleta. */
const glowPresets = {
  home: "bg-[radial-gradient(900px_620px_at_78%_8%,rgb(22_140_255/0.11),rgb(5_10_20/0)_62%),radial-gradient(760px_520px_at_8%_46%,rgb(23_78_255/0.08),rgb(5_10_20/0)_60%),radial-gradient(700px_480px_at_50%_104%,rgb(53_217_255/0.10),rgb(5_10_20/0)_62%)]",
  agentes:
    "bg-[radial-gradient(900px_620px_at_78%_6%,rgb(22_140_255/0.11),rgb(5_10_20/0)_62%),radial-gradient(760px_520px_at_6%_52%,rgb(23_78_255/0.08),rgb(5_10_20/0)_60%)]",
  prospect:
    "bg-[radial-gradient(900px_600px_at_72%_4%,rgb(22_140_255/0.12),rgb(5_10_20/0)_62%),radial-gradient(760px_520px_at_8%_56%,rgb(23_78_255/0.08),rgb(5_10_20/0)_60%)]",
  solucoes:
    "bg-[radial-gradient(900px_620px_at_76%_6%,rgb(22_140_255/0.11),rgb(5_10_20/0)_62%),radial-gradient(760px_520px_at_6%_54%,rgb(23_78_255/0.08),rgb(5_10_20/0)_60%)]",
  legal:
    "bg-[radial-gradient(900px_620px_at_76%_4%,rgb(22_140_255/0.10),rgb(5_10_20/0)_62%),radial-gradient(760px_520px_at_8%_40%,rgb(23_78_255/0.07),rgb(5_10_20/0)_60%),radial-gradient(600px_400px_at_85%_75%,rgb(53_217_255/0.06),rgb(5_10_20/0)_62%)]",
} as const;

export type GlowPreset = keyof typeof glowPresets;

/** Camada fixa de halos que dá profundidade ao fundo da página. */
export function PageGlow({ preset }: { preset: GlowPreset }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 z-0", glowPresets[preset])}
    />
  );
}
