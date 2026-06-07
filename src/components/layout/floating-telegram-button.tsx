// Kept as fallback export — the contextual sticky CTA replaces this in `page.tsx`.
// Some pages may still want a non-contextual floating Telegram button.

import { useId } from "react";
import { Send } from "lucide-react";
import { track } from "@/lib/analytics";
import { telegramConfig } from "@/constants/checkout";

type FloatingTelegramButtonProps = {
  className?: string;
};

export function FloatingTelegramButton({
  className,
}: FloatingTelegramButtonProps) {
  const labelId = useId();

  return (
    <a
      href={telegramConfig.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={labelId}
      onClick={() => {
        track("cta_click", {
          location: "floating_telegram",
          cta: "Telegram",
          destination: "external",
          url: telegramConfig.url,
        });
      }}
      className={
        "group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_12px_32px_-8px_rgba(34,158,217,0.6)] transition-all duration-300 ease-out hover:scale-105 hover:bg-[#1d8bbf] hover:shadow-[0_16px_40px_-8px_rgba(34,158,217,0.7)] focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9] focus-visible:ring-offset-2 focus-visible:ring-offset-black-950 " +
        (className ?? "")
      }
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#229ED9] opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-80" />
      <Send className="h-6 w-6" aria-hidden="true" />
      <span id={labelId} className="sr-only">
        Falar com a equipe no Telegram
      </span>
    </a>
  );
}
