import { ArrowRight, Check, Crown, Lock, Sparkles } from "lucide-react";
import { Container, Heading, Icon } from "@/components/ui";
import { TrackedButtonLink } from "@/components/cta/tracked-button-link";
import { CountdownBanner } from "@/components/sections/countdown-banner";
import { plansData } from "@/data/plans";
import { planCheckoutUrl, telegramConfig } from "@/constants/checkout";
import { formatBRL, formatInstallments } from "@/utils/format";
import { Reveal } from "@/components/motion";

const paymentMethods = [
  { id: "pix", label: "Pix" },
  { id: "card", label: "Cartão" },
  { id: "boleto", label: "Boleto" },
];

export function Plans() {
  return (
    <section
      id="planos"
      aria-labelledby="plans-title"
      className="relative overflow-hidden bg-black-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Planos &amp; Assinatura
          </span>
          <Heading as={2} id="plans-title" tone="white" className="text-fluid-2xl">
            Escolha o plano que combina com{" "}
            <span className="text-gold-gradient">sua operação</span>
          </Heading>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Todos os planos incluem acesso ao grupo VIP, entradas sinalizadas e
            suporte da equipe. Quanto maior o período, maior o desconto.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70">
            <Lock className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
            Pagamento 100% seguro · Pix, cartão ou boleto
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <CountdownBanner label="Condição de lançamento encerra em" />
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plansData.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/50">
            <span className="font-semibold uppercase tracking-wider text-white/40">
              Pagamento:
            </span>
            {paymentMethods.map((m, idx) => (
              <span key={m.id} className="flex items-center gap-2">
                <span className="inline-flex h-7 items-center rounded-md border border-white/10 bg-white/5 px-2.5 font-bold text-white/80">
                  {m.label}
                </span>
                {idx < paymentMethods.length - 1 ? (
                  <span className="text-white/20">·</span>
                ) : null}
              </span>
            ))}
          </div>
          <p className="text-sm text-white/50">
            Prefere falar com a equipe antes de assinar?{" "}
            <a
              href={telegramConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-300 underline-offset-4 transition-colors hover:text-gold-200 hover:underline"
            >
              Fale conosco no Telegram
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

type PlanCardProps = {
  plan: (typeof plansData)[number];
};

function PlanCard({ plan }: PlanCardProps) {
  const isHighlight = !!plan.highlight;
  const monthlyEquivalent = plan.total / parsePeriod(plan.period);
  const hasDiscount = plan.discount > 0;
  const economy = plan.originalTotal - plan.total;

  return (
    <div
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-out sm:p-7 " +
        (isHighlight
          ? "border border-gold-500/50 bg-gradient-to-b from-gold-500/[0.08] via-black-900 to-black-950 shadow-[0_24px_64px_-20px_rgba(212,175,55,0.5)] hover:-translate-y-2 hover:border-gold-300 hover:shadow-[0_36px_90px_-20px_rgba(212,175,55,0.7)]"
          : "border border-white/[0.06] bg-black-900/60 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-[0_24px_60px_-16px_rgba(212,175,55,0.3)]")
      }
    >
      {isHighlight ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"
          />
          <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-black-950 shadow-[0_8px_20px_-6px_rgba(212,175,55,0.6)]">
            <Crown className="h-3.5 w-3.5" aria-hidden="true" />
            {plan.badge ?? "Melhor escolha"}
          </div>
        </>
      ) : plan.badge ? (
        <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-gold-500/30 bg-black-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300">
          {plan.badge}
        </div>
      ) : null}

      <div>
        <div className="flex items-center gap-2">
          {isHighlight ? (
            <Icon size={20} decorative className="text-gold-300">
              <Crown />
            </Icon>
          ) : null}
          <h3
            className={
              "text-lg font-extrabold " +
              (isHighlight ? "text-gold-gradient" : "text-white")
            }
          >
            {plan.name}
          </h3>
        </div>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
          {plan.period}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline gap-1.5">
          <span
            className={
              "text-4xl font-extrabold tracking-tight " +
              (isHighlight ? "text-gold-300" : "text-white")
            }
          >
            {formatBRL(monthlyEquivalent)}
          </span>
          <span className="text-sm text-white/50">/mês</span>
        </div>
        <p className="mt-1 text-xs text-white/50">
          {hasDiscount ? (
            <>
              <span className="line-through">{formatBRL(plan.originalTotal)}</span>{" "}
              <span className="font-semibold text-green-400">
                por {formatBRL(plan.total)}
              </span>{" "}
              à vista
            </>
          ) : (
            <>Cobrado mensalmente · {formatBRL(plan.total)}</>
          )}
        </p>
        {hasDiscount ? (
          <p className="mt-1 text-xs font-semibold text-gold-300">
            Economia de {formatBRL(economy)}
          </p>
        ) : null}
        <p className="mt-2 text-[11px] text-white/40">
          ou{" "}
          {plan.id === "anual"
            ? "12x " + formatBRL(plan.total / 12) + " sem juros"
            : formatInstallments(plan.total, parseInt(plan.period, 10) || 1, false)}
        </p>
      </div>

      {isHighlight ? (
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-gold-500/30 bg-gold-500/10 px-3 py-2.5 text-xs text-gold-200">
          <Crown className="h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
          <span className="font-semibold">
            Inclui onboarding 1:1 e mentorias em grupo
          </span>
        </div>
      ) : null}

      <ul role="list" className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature.id} className="flex items-start gap-2 text-sm">
            <span
              className={
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full transition-colors group-hover:scale-110 " +
                (isHighlight
                  ? "bg-gold-500/20 text-gold-300"
                  : "bg-green-500/15 text-green-400")
              }
            >
              <Check className="h-2.5 w-2.5" aria-hidden="true" />
            </span>
            <span className="text-white/80">{feature.title}</span>
          </li>
        ))}
      </ul>

      <TrackedButtonLink
        href={planCheckoutUrl(plan.id)}
        target="_blank"
        rel="noopener noreferrer"
        variant={isHighlight ? "primary" : "outline"}
        size="md"
        fullWidth
        className="mt-6"
        tracking={{
          location: "plans_card",
          cta: plan.cta,
          destination: "checkout",
        }}
        extraParams={{ plan: plan.id, price: plan.total }}
        rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
      >
        {plan.cta}
      </TrackedButtonLink>

      <p className="mt-3 text-center text-[10px] text-white/40">
        {isHighlight
          ? "Sem fidelidade · Cancele quando quiser"
          : "Pagamento seguro · Acesso imediato"}
      </p>
    </div>
  );
}

function parsePeriod(period: string): number {
  const m = period.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 1;
}
