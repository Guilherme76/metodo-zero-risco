import Link from "next/link";
import { Send, ShieldCheck, Trophy } from "lucide-react";
import { Container } from "@/components/ui";
import { footerData } from "@/data/footer";
import { telegramConfig } from "@/constants/checkout";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black-950 text-white/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white"
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
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {footerData.description}
            </p>
            <a
              href={telegramConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#229ED9]/30 bg-[#229ED9]/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-[#229ED9]/60 hover:bg-[#229ED9]/20"
            >
              <Send className="h-4 w-4 text-[#229ED9]" aria-hidden="true" />
              {telegramConfig.handle}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-sm">
              {footerData.legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/60 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-sm">
              {footerData.socials.map((item) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-white/60 transition-colors hover:text-gold-300"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-3 rounded-xl border border-gold-500/15 bg-black-900/40 p-4 text-xs leading-relaxed text-white/50">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
            aria-hidden="true"
          />
          {footerData.disclaimer}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/40 sm:flex-row">
          <span>{footerData.copyright}</span>
          <span>
            Feito com critério e gestão.{" "}
            <span className="text-gold-400">●</span>{" "}
            <span className="font-semibold text-white">RFP Sports</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
