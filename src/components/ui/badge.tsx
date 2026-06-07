import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant =
  | "gold"
  | "green"
  | "outline-gold"
  | "outline-white"
  | "solid-white"
  | "dark";
type BadgeSize = "sm" | "md";

const variantStyles: Record<BadgeVariant, string> = {
  gold: "bg-gold-500/15 text-gold-300 border border-gold-500/30",
  green: "bg-green-700/20 text-green-300 border border-green-600/40",
  "outline-gold":
    "border border-gold-500/40 bg-transparent text-gold-300",
  "outline-white": "border border-white/15 bg-white/5 text-white",
  "solid-white": "bg-white text-black-950",
  dark: "bg-black-800 text-white border border-white/10",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-[11px]",
  md: "px-3 py-1 text-xs",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  children: ReactNode;
};

export function Badge({
  variant = "outline-gold",
  size = "md",
  icon,
  children,
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold leading-none tracking-wide",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      {children}
    </span>
  );
}
