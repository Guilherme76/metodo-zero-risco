"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Crown, MessageCircle, Send } from "lucide-react";
import { track } from "@/lib/analytics";
import { telegramConfig, planCheckoutUrl } from "@/constants/checkout";
import { cn } from "@/lib/cn";

type StickyVariant = "telegram" | "anual" | "faq" | "hidden";

const SECTIONS = {
  hero: "hero",
  results: "resultados",
  plans: "planos",
  comparison: "plans-comparison-title",
  faq: "faq",
  cta: "cta-final",
} as const;

export function ContextualStickyCta() {
  const [variant, setVariant] = useState<StickyVariant>(() => {
    if (typeof window === "undefined") return "hidden";
    return "telegram";
  });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const compute = () => {
      const heroEl = document.getElementById(SECTIONS.hero);
      const resultsEl = document.getElementById(SECTIONS.results);
      const plansEl = document.getElementById(SECTIONS.plans);
      const comparisonEl = document.getElementById(SECTIONS.comparison);
      const faqEl = document.getElementById(SECTIONS.faq);
      const ctaEl = document.getElementById(SECTIONS.cta);

      if (!heroEl) return;

      const heroBox = heroEl.getBoundingClientRect();
      const resultsBox = resultsEl?.getBoundingClientRect();
      const plansBox = plansEl?.getBoundingClientRect();
      const comparisonBox = comparisonEl?.getBoundingClientRect();
      const faqBox = faqEl?.getBoundingClientRect();
      const ctaBox = ctaEl?.getBoundingClientRect();

      if (ctaBox && ctaBox.top < window.innerHeight * 0.5) {
        setVariant("hidden");
        return;
      }
      if (
        (plansBox && plansBox.top < window.innerHeight * 0.5 && plansBox.bottom > 100) ||
        (comparisonBox && comparisonBox.top < window.innerHeight * 0.5 && comparisonBox.bottom > 100)
      ) {
        setVariant("anual");
        return;
      }
      if (faqBox && faqBox.top < window.innerHeight * 0.5 && faqBox.bottom > 100) {
        setVariant("faq");
        return;
      }
      if (resultsBox && resultsBox.top < window.innerHeight * 0.5 && resultsBox.bottom > 100) {
        setVariant("telegram");
        return;
      }
      if (heroBox.bottom > 80) {
        setVariant("hidden");
        return;
      }
      setVariant("telegram");
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-40 transition-all duration-500 ease-out",
        variant === "hidden"
          ? "pointer-events-none translate-y-6 opacity-0"
          : "translate-y-0 opacity-100",
      )}
    >
      {variant === "telegram" ? <TelegramFab /> : null}
      {variant === "anual" ? <AnualFab /> : null}
      {variant === "faq" ? <FaqFab /> : null}
    </div>
  );
}

function TelegramFab() {
  return (
    <a
      href={telegramConfig.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("cta_click", {
          location: "contextual_sticky",
          cta: "Telegram",
          destination: "telegram",
        });
      }}
      aria-label="Falar com a equipe no Telegram"
      className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_12px_32px_-8px_rgba(34,158,217,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#1d8bbf] hover:shadow-[0_16px_40px_-8px_rgba(34,158,217,0.7)] focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9] focus-visible:ring-offset-2 focus-visible:ring-offset-black-950"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#229ED9] opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-80" />
      <Send className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}

function AnualFab() {
  return (
    <a
      href={planCheckoutUrl("anual")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("cta_click", {
          location: "contextual_sticky",
          cta: "Plano Anual",
          destination: "checkout",
          plan: "anual",
        });
      }}
      aria-label="Quero o plano anual"
      className="group relative inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 pl-4 pr-5 text-sm font-extrabold text-black-950 shadow-[0_12px_32px_-8px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_40px_-8px_rgba(212,175,55,0.8)] focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black-950"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-gold-500 opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
      <Crown className="h-4 w-4" aria-hidden="true" />
      <span>Plano Anual</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function FaqFab() {
  return (
    <a
      href={telegramConfig.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("cta_click", {
          location: "contextual_sticky",
          cta: "Dúvidas no Telegram",
          destination: "telegram",
        });
      }}
      aria-label="Tirar dúvidas no Telegram"
      className="group relative inline-flex h-14 items-center gap-2 rounded-full bg-[#229ED9] pl-4 pr-5 text-sm font-extrabold text-white shadow-[0_12px_32px_-8px_rgba(34,158,217,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#1d8bbf] hover:shadow-[0_16px_40px_-8px_rgba(34,158,217,0.7)] focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9] focus-visible:ring-offset-2 focus-visible:ring-offset-black-950"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#229ED9] opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span>Tirar dúvidas</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
