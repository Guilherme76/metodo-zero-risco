import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <details
          key={item.id}
          className="group rounded-xl border border-white/[0.06] bg-black-900/60 shadow-soft transition-all duration-200 hover:border-gold-500/25 open:border-gold-500/40 open:shadow-[0_8px_24px_-8px_rgba(212,175,55,0.2)] open:bg-black-900"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-white marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-white/70 sm:text-base">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
