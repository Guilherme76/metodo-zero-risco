import Link from "next/link";
import { Send, Trophy } from "lucide-react";
import { TrackedButtonLink } from "@/components/cta/tracked-button-link";
import { navItems } from "@/data/nav";
import { planCheckoutUrl, telegramConfig } from "@/constants/checkout";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black-950/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          aria-label="Comunidade RFP Sports — Método Zero Risco"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 text-black-950 shadow-[0_4px_16px_-4px_rgba(212,175,55,0.6)]">
            <Trophy className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold tracking-tight">
              RFP Sports
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold-400">
              Método Zero Risco
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <TrackedButtonLink
            href={telegramConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            className="hidden text-white/80 hover:text-white lg:inline-flex"
            leftIcon={<Send className="h-4 w-4" aria-hidden="true" />}
            tracking={{
              location: "header",
              cta: "Telegram",
              destination: "telegram",
            }}
          >
            Telegram
          </TrackedButtonLink>
          <TrackedButtonLink
            href={planCheckoutUrl("anual")}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            tracking={{
              location: "header",
              cta: "Entrar no grupo VIP",
              destination: "checkout",
            }}
            extraParams={{ plan: "anual" }}
          >
            Entrar no grupo VIP
          </TrackedButtonLink>
          <TrackedButtonLink
            href={planCheckoutUrl("anual")}
            variant="primary"
            size="sm"
            className="sm:hidden"
            aria-label="Entrar no grupo VIP"
            tracking={{
              location: "header_mobile",
              cta: "Entrar",
              destination: "checkout",
            }}
            extraParams={{ plan: "anual" }}
          >
            Entrar
          </TrackedButtonLink>
        </div>
      </div>
    </header>
  );
}
