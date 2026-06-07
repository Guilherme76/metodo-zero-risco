"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Avatar } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/types/testimonial";

type TestimonialsCarouselProps = {
  items: Testimonial[];
  className?: string;
};

export function TestimonialsCarousel({ items, className }: TestimonialsCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="overflow-hidden rounded-2xl"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
          if (Math.abs(dx) > 40) {
            if (dx < 0) next();
            else prev();
          }
          touchStartX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((t, i) => (
            <div
              key={t.id}
              className="w-full shrink-0 px-1"
              aria-hidden={active !== i}
            >
              <article className="relative flex h-full flex-col rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/[0.06] via-black-900 to-black-950 p-8 shadow-[0_24px_60px_-16px_rgba(212,175,55,0.25)] sm:p-10">
                <Quote
                  className="absolute right-6 top-6 h-10 w-10 text-gold-500/15"
                  aria-hidden="true"
                />
                <div
                  className="mb-5 flex items-center gap-0.5 text-gold-400"
                  aria-label={`Avaliação ${t.rating} de 5`}
                >
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-lg leading-relaxed text-white/90 sm:text-xl">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
                  <figcaption className="flex items-center gap-3">
                    <Avatar
                      name={t.name}
                      size="lg"
                      tone={i % 2 === 0 ? "gold" : "green"}
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="text-base font-extrabold text-white">
                        {t.name}
                      </span>
                      <span className="text-xs text-white/50">{t.role}</span>
                    </div>
                  </figcaption>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-gold-200">
                    {t.highlight}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={prev}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black-900/60 text-white/70 transition-all hover:border-gold-500/40 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <div
          role="tablist"
          aria-label="Selecionar depoimento"
          className="flex items-center gap-1.5"
        >
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Depoimento ${i + 1} de ${items.length}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                active === i
                  ? "w-8 bg-gold-500"
                  : "w-1.5 bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={next}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black-900/60 text-white/70 transition-all hover:border-gold-500/40 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
