"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  children: ReactNode;
  id?: string;
  once?: boolean;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  id,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      node.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => {
              target.dataset.revealed = "true";
            }, delay);
            if (once) observer.unobserve(target);
          } else if (!once) {
            (entry.target as HTMLElement).dataset.revealed = "false";
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, once]);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as React.Ref<unknown>}
      id={id}
      data-reveal=""
      data-revealed="false"
      className={cn(className)}
      style={style}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  step?: number;
  base?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Stagger({
  children,
  className,
  step = 80,
  base = 0,
  as: Tag = "div",
}: StaggerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <Reveal key={i} delay={base + i * step}>
              {child}
            </Reveal>
          ))
        : children}
    </Component>
  );
}
