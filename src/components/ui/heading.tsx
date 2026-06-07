import { createElement, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize = "sm" | "md" | "lg" | "xl";
type HeadingTone = "default" | "white" | "gold" | "gradient";

const sizeStyles: Record<HeadingSize, string> = {
  sm: "text-lg sm:text-xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-fluid-2xl font-bold tracking-tight",
  xl: "text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl",
};

const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  1: "xl",
  2: "lg",
  3: "md",
  4: "sm",
};

const toneStyles: Record<HeadingTone, string> = {
  default: "text-white",
  white: "text-white",
  gold: "text-gold-300",
  gradient: "text-gold-gradient",
};

type HeadingProps = {
  as?: HeadingLevel;
  size?: HeadingSize;
  tone?: HeadingTone;
  className?: string;
  children: ReactNode;
  id?: string;
};

export function Heading({
  as = 2,
  size,
  tone = "default",
  className,
  children,
  id,
}: HeadingProps) {
  const resolvedSize = size ?? defaultSizeForLevel[as];
  return createElement(
    `h${as}`,
    {
      id,
      className: cn(
        "font-extrabold tracking-tight text-balance",
        toneStyles[tone],
        sizeStyles[resolvedSize],
        className,
      ),
    },
    children,
  );
}
