"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ButtonLink, type ButtonLinkProps } from "@/components/ui/button";

type MagneticButtonLinkProps = ButtonLinkProps & {
  children: ReactNode;
  strength?: number;
};

export type { MagneticButtonLinkProps };

export function MagneticButtonLink({
  children,
  strength = 0.25,
  ...props
}: MagneticButtonLinkProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMove = (event: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const max = Math.max(rect.width, rect.height) * 0.35;
      setOffset({
        x: Math.max(-max, Math.min(max, dx * strength)),
        y: Math.max(-max, Math.min(max, dy * strength)),
      });
    };

    const handleLeave = () => setOffset({ x: 0, y: 0 });

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);
    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <div
      ref={wrapperRef}
      className="inline-flex will-change-transform"
      style={{
        transform: `translate(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px)`,
        transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <ButtonLink {...props}>{children}</ButtonLink>
    </div>
  );
}
