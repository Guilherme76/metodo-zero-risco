"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const brands = [
  "Betano",
  "Bet365",
  "Pixbet",
  "KTO",
  "Br4bet",
  "Estrelabet",
];

export function HeroTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % brands.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const current = brands[index];

  return (
    <span
      className="relative inline-flex h-4 w-[5.5rem] items-center overflow-hidden align-middle text-[10px] font-bold uppercase tracking-wider"
      aria-live="polite"
    >
      {brands.map((b, i) => (
        <span
          key={b}
          className={cn(
            "absolute inset-0 flex items-center transition-all duration-500 ease-out",
            i === index
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0",
          )}
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
          <span className="ml-1.5 truncate text-green-300">{b}</span>
        </span>
      ))}
      <span className="sr-only">{current}</span>
    </span>
  );
}
