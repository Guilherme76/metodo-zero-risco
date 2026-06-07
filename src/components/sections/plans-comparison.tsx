import { Check, Crown, X } from "lucide-react";
import { Container, Heading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { planCheckoutUrl } from "@/constants/checkout";
import { formatBRL } from "@/utils/format";
import { plansData } from "@/data/plans";

type Row = {
  id: string;
  label: string;
  values: ("yes" | "no" | "premium")[];
};

const rows: Row[] = [
  { id: "r1", label: "Grupo VIP no Telegram", values: ["yes", "yes", "yes", "yes"] },
  { id: "r2", label: "Entradas sinalizadas diariamente", values: ["yes", "yes", "yes", "yes"] },
  { id: "r3", label: "Treinamento completo do método", values: ["no", "yes", "yes", "yes"] },
  { id: "r4", label: "Suporte prioritário", values: ["no", "yes", "yes", "yes"] },
  { id: "r5", label: "Planilha avançada de stake", values: ["no", "yes", "yes", "yes"] },
  { id: "r6", label: "Onboarding individual 1:1", values: ["no", "no", "yes", "yes"] },
  { id: "r7", label: "Revisão mensal de banca", values: ["no", "no", "yes", "yes"] },
  { id: "r8", label: "Mentorias em grupo", values: ["no", "no", "no", "premium"] },
  { id: "r9", label: "Atualizações vitalícias", values: ["no", "no", "no", "premium"] },
  { id: "r10", label: "Garantia estendida (15 dias)", values: ["no", "no", "no", "premium"] },
];

export function PlansComparison() {
  return (
    <section
      aria-labelledby="plans-comparison-title"
      className="relative overflow-hidden bg-black-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-green opacity-30"
      />
      <Container size="lg" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-gold-300">
            Comparativo
          </span>
          <Heading as={2} id="plans-comparison-title" tone="white" className="text-fluid-2xl">
            Veja o que está incluso em{" "}
            <span className="text-gold-gradient">cada plano</span>
          </Heading>
        </div>

        <Reveal>
          <div className="mx-auto mt-12 overflow-x-auto rounded-2xl border border-white/[0.06] bg-black-900/60 shadow-elevated">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-black-800/40">
                  <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-white/50 sm:px-6">
                    Recurso
                  </th>
                  {plansData.map((plan) => (
                    <th
                      key={plan.id}
                      className={
                        "px-3 py-4 text-center sm:px-5 " +
                        (plan.highlight
                          ? "bg-gold-500/[0.06]"
                          : "")
                      }
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span
                          className={
                            "text-sm font-extrabold " +
                            (plan.highlight ? "text-gold-gradient" : "text-white")
                          }
                        >
                          {plan.name}
                        </span>
                        <span className="text-[10px] font-semibold text-white/50">
                          {formatBRL(plan.total)}
                        </span>
                        {plan.highlight ? (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gold-500 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black-950">
                            <Crown className="h-2.5 w-2.5" aria-hidden="true" />
                            Top
                          </span>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3.5 text-white/80 sm:px-6">
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={
                          "px-3 py-3.5 text-center sm:px-5 " +
                          (plansData[i].highlight ? "bg-gold-500/[0.04]" : "")
                        }
                      >
                        <Cell value={v} highlight={plansData[i].highlight ?? false} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-white/[0.06] bg-black-800/20">
                  <td className="px-4 py-4 sm:px-6" />
                  {plansData.map((plan) => (
                    <td
                      key={plan.id}
                      className={
                        "px-3 py-4 text-center sm:px-5 " +
                        (plan.highlight ? "bg-gold-500/[0.06]" : "")
                      }
                    >
                      <a
                        href={planCheckoutUrl(plan.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          "inline-flex h-9 items-center justify-center rounded-md px-3 text-xs font-bold transition-all duration-200 " +
                          (plan.highlight
                            ? "bg-gold-500 text-black-950 hover:bg-gold-300"
                            : "border border-gold-500/40 text-gold-300 hover:border-gold-300 hover:bg-gold-500/10")
                        }
                      >
                        Assinar
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Cell({ value, highlight }: { value: "yes" | "no" | "premium"; highlight: boolean }) {
  if (value === "yes") {
    return (
      <span
        className={
          "inline-flex h-6 w-6 items-center justify-center rounded-full " +
          (highlight ? "bg-gold-500/20 text-gold-300" : "bg-green-500/15 text-green-400")
        }
        aria-label="Incluído"
      >
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    );
  }
  if (value === "premium") {
    return (
      <span
        className="inline-flex h-6 items-center gap-1 rounded-full bg-gold-500/20 px-2 text-gold-300"
        aria-label="Incluído no plano anual"
      >
        <Crown className="h-3 w-3" aria-hidden="true" />
        <Check className="h-3 w-3" aria-hidden="true" />
      </span>
    );
  }
  return (
    <span
      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.04] text-white/25"
      aria-label="Não incluído"
    >
      <X className="h-3 w-3" aria-hidden="true" />
    </span>
  );
}
