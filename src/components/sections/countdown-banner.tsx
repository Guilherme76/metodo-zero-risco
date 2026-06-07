"use client";

import { Timer } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";
import { checkout } from "@/constants/checkout";

type CountdownBannerProps = {
  label?: string;
  className?: string;
};

export function CountdownBanner({
  label = "Oferta encerra em",
  className,
}: CountdownBannerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    checkout.deadline,
  );

  if (isExpired) {
    return (
      <div
        role="status"
        className={
          "flex items-center justify-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm font-semibold text-gold-300 " +
          (className ?? "")
        }
      >
        <Timer className="h-4 w-4 text-gold-400" aria-hidden="true" />
        Próxima turma abre em breve. Fique atento ao grupo VIP.
      </div>
    );
  }

  const totalHours = days * 24 + hours;
  const isUrgent = totalHours < 24;

  return (
    <div
      role="status"
      aria-live="polite"
      className={
        "flex flex-col items-center gap-3 rounded-xl px-4 py-3 text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] sm:flex-row sm:justify-center " +
        (isUrgent
          ? "border border-red-500/40 bg-gradient-to-r from-red-500/10 via-black-900 to-red-500/10 animate-[pulse_3s_ease-in-out_infinite] "
          : "border border-gold-500/30 bg-gradient-to-r from-gold-500/[0.08] via-black-900 to-gold-500/[0.08] ") +
        (className ?? "")
      }
    >
      <span
        className={
          "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider sm:text-sm " +
          (isUrgent ? "text-red-300" : "text-gold-300")
        }
      >
        <Timer
          className={"h-4 w-4 " + (isUrgent ? "text-red-400" : "text-gold-400")}
          aria-hidden="true"
        />
        {isUrgent ? "Últimas horas" : label}
      </span>
      <div className="flex items-center gap-1.5 font-mono text-base font-extrabold tabular-nums sm:gap-2 sm:text-lg">
        <CountdownUnit value={days} label="d" urgent={isUrgent} />
        <Sep urgent={isUrgent} />
        <CountdownUnit value={hours} label="h" urgent={isUrgent} />
        <Sep urgent={isUrgent} />
        <CountdownUnit value={minutes} label="m" urgent={isUrgent} />
        <Sep urgent={isUrgent} />
        <CountdownUnit value={seconds} label="s" urgent={isUrgent} />
      </div>
    </div>
  );
}

function CountdownUnit({
  value,
  label,
  urgent,
}: {
  value: number;
  label: string;
  urgent: boolean;
}) {
  return (
    <span
      className={
        "inline-flex min-w-[2.5rem] flex-col items-center rounded-md border px-2 py-1 " +
        (urgent
          ? "border-red-500/30 bg-black-900 text-red-300"
          : "border-gold-500/30 bg-black-900 text-gold-300")
      }
    >
      <span>{String(value).padStart(2, "0")}</span>
      <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
        {label}
      </span>
    </span>
  );
}

function Sep({ urgent }: { urgent: boolean }) {
  return (
    <span
      className={urgent ? "text-red-500/50" : "text-gold-500/50"}
      aria-hidden="true"
    >
      :
    </span>
  );
}
