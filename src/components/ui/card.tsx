import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "elevated" | "outline" | "gold" | "premium";
type CardPad = "none" | "sm" | "md" | "lg";

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-black-900 border border-white/[0.06] shadow-soft",
  elevated:
    "bg-black-900 border border-white/[0.08] shadow-elevated",
  outline: "bg-transparent border border-white/10",
  gold: "bg-gradient-to-b from-black-900 to-black-950 border border-gold-500/30 shadow-[0_8px_40px_-12px_rgba(212,175,55,0.25)]",
  premium:
    "bg-gradient-to-b from-gold-500/[0.08] to-black-950 border border-gold-500/50 shadow-[0_16px_48px_-12px_rgba(212,175,55,0.4)]",
};

const padStyles: Record<CardPad, string> = {
  none: "",
  sm: "p-4 sm:p-5",
  md: "p-6 sm:p-7",
  lg: "p-7 sm:p-8",
};

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  pad?: CardPad;
  hoverable?: boolean;
};

export function Card({
  variant = "default",
  pad = "md",
  hoverable = false,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        variantStyles[variant],
        padStyles[pad],
        hoverable &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_16px_40px_-12px_rgba(212,175,55,0.25)]",
        className,
      )}
      {...rest}
    />
  );
}
