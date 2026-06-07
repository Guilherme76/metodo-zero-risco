import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionBackground =
  | "default"
  | "elevated"
  | "dark"
  | "darker"
  | "green"
  | "gold";
type SectionPad = "none" | "sm" | "md" | "lg";

const backgroundStyles: Record<SectionBackground, string> = {
  default: "bg-black-950 text-white",
  elevated: "bg-black-900 text-white",
  dark: "bg-black-950 text-white relative",
  darker: "bg-black-950 text-white relative",
  green:
    "bg-gradient-to-b from-green-950/40 via-black-950 to-black-950 text-white relative",
  gold: "bg-gradient-to-b from-gold-500/[0.06] via-black-950 to-black-950 text-white relative",
};

const padStyles: Record<SectionPad, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  background?: SectionBackground;
  pad?: SectionPad;
};

export function Section({
  background = "default",
  pad = "md",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(backgroundStyles[background], padStyles[pad], className)}
      {...rest}
    >
      {children}
    </section>
  );
}
