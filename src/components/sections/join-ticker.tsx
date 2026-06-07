"use client";

import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import { cn } from "@/lib/cn";

const recentJoins = [
  { name: "Lucas M.", city: "São Paulo, SP" },
  { name: "Mariana C.", city: "Rio de Janeiro, RJ" },
  { name: "Rafael A.", city: "Belo Horizonte, MG" },
  { name: "Camila R.", city: "Curitiba, PR" },
  { name: "Diego M.", city: "Porto Alegre, RS" },
  { name: "Larissa S.", city: "Salvador, BA" },
  { name: "Pedro H.", city: "Brasília, DF" },
  { name: "Ana B.", city: "Recife, PE" },
  { name: "Bruno O.", city: "Fortaleza, CE" },
  { name: "Juliana P.", city: "Florianópolis, SC" },
];

type JoinTickerProps = {
  className?: string;
};

export function JoinTicker({ className }: JoinTickerProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % recentJoins.length);
        setVisible(true);
      }, 280);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = recentJoins[index];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-center justify-center gap-2 border-y border-white/[0.06] bg-black-900/60 px-4 py-2.5 text-xs text-white/70 transition-opacity duration-300 sm:text-sm",
        visible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">
        <UserPlus className="h-3 w-3" aria-hidden="true" />
      </span>
      <span className="font-semibold text-white">{current.name}</span>
      <span className="text-white/50">acabou de entrar no grupo VIP</span>
      <span className="hidden text-white/30 sm:inline">·</span>
      <span className="hidden text-white/40 sm:inline">{current.city}</span>
    </div>
  );
}
