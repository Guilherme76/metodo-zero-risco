import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarTone = "gold" | "green" | "dark";

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: "h-8 w-8", text: "text-xs" },
  sm: { container: "h-10 w-10", text: "text-sm" },
  md: { container: "h-12 w-12", text: "text-base" },
  lg: { container: "h-16 w-16", text: "text-lg" },
  xl: { container: "h-20 w-20 sm:h-24 sm:w-24", text: "text-xl" },
};

const toneStyles: Record<AvatarTone, string> = {
  gold: "bg-gradient-to-br from-gold-500 to-gold-700 text-black-950",
  green: "bg-gradient-to-br from-green-700 to-green-900 text-white",
  dark: "bg-black-800 text-white border border-white/10",
};

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  size?: AvatarSize;
  tone?: AvatarTone;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p.charAt(0).toUpperCase()).join("");
}

export function Avatar({
  name,
  size = "md",
  tone = "gold",
  className,
  ...rest
}: AvatarProps) {
  const styles = sizeStyles[size];
  const initials = getInitials(name);

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full font-bold ring-2 ring-black-950",
        styles.container,
        styles.text,
        toneStyles[tone],
        className,
      )}
      aria-label={name}
      role="img"
      {...rest}
    >
      {initials}
    </div>
  );
}
