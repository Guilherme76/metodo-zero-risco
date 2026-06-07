import { ArrowUpRight, Send, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion";
import { HeroTicker } from "./hero-ticker";
import { HeroTypingDots } from "./hero-typing-dots";

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md md:max-w-none"
    >
      <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-green-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />

      <div className="relative space-y-4">
        <Reveal delay={400}>
          <div className="ml-auto w-[88%] rounded-2xl border border-white/10 bg-gradient-to-b from-black-800 to-black-900 p-4 shadow-elevated">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-white/90">
                  RFP · VIP
                </span>
                <HeroTicker />
              </div>
              <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                Premium
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              <Reveal delay={600}>
                <SignalBubble
                  label="Sinal · Over 2.5"
                  meta="Stake 1.5% · Odd 1.95"
                  status="GREEN"
                />
              </Reveal>
              <Reveal delay={800}>
                <SignalBubble
                  label="BTTS · Sim"
                  meta="Stake 1.0% · Odd 1.87"
                  status="GREEN"
                />
              </Reveal>
              <Reveal delay={1000}>
                <SignalBubble
                  label="Handicap -3.5"
                  meta="Stake 1.0% · Odd 1.92"
                  status="GREEN"
                />
              </Reveal>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-green-300">
                Banca do dia
              </span>
              <span className="flex items-center gap-1 font-mono text-sm font-bold text-green-400">
                <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                +R$ 287,40
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1200}>
          <div className="flex items-end gap-3">
            <div className="w-[58%] rounded-2xl border border-white/10 bg-black-900/80 p-3.5 shadow-elevated backdrop-blur">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/50">
                <span>ROI · 30d</span>
                <span className="text-green-400">+18.4%</span>
              </div>
              <Sparkline className="mt-2 h-12 w-full text-green-500" />
              <div className="mt-2 flex items-center justify-between text-[10px] text-white/40">
                <span>142 ops</span>
                <span>67% green</span>
                <span>Odd média 1.92</span>
              </div>
            </div>

            <div className="w-[42%] rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-black-900 p-3.5 shadow-[0_12px_40px_-12px_rgba(212,175,55,0.35)]">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                <Send className="h-3 w-3" aria-hidden="true" />
                Telegram
              </div>
              <p className="mt-2 text-xs font-semibold text-white">
                Entrada enviada
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-white/60">
                Flamengo x Vasco · Over 2.5 · Odd 1.95
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-green-400">
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                Stake 1.5% · Janela 18h
              </div>
              <div className="mt-2 flex items-center gap-1.5 border-t border-white/10 pt-2 text-[10px] text-white/50">
                <span className="font-semibold text-white/70">Digitando</span>
                <HeroTypingDots />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function SignalBubble({
  label,
  meta,
  status,
}: {
  label: string;
  meta: string;
  status: "GREEN" | "RED";
}) {
  const isGreen = status === "GREEN";
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-white">{label}</span>
        <span
          className={
            "rounded-full px-1.5 py-0.5 text-[9px] font-extrabold tracking-wider " +
            (isGreen
              ? "bg-green-500/15 text-green-400"
              : "bg-red-500/15 text-red-400")
          }
        >
          {status}
        </span>
      </div>
      <p className="mt-1 text-[10px] text-white/50">{meta}</p>
    </div>
  );
}

function Sparkline({ className }: { className?: string }) {
  const points = [
    [0, 32],
    [10, 28],
    [20, 24],
    [30, 26],
    [40, 20],
    [50, 22],
    [60, 16],
    [70, 18],
    [80, 10],
    [90, 12],
    [100, 4],
  ];
  const path = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  const fill = `${path} L 100 48 L 0 48 Z`;
  return (
    <svg
      viewBox="0 0 100 48"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#spark-fill)" />
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
