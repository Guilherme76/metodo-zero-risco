import { ArrowRight, Send, Sparkles } from "lucide-react";
import { Container, Heading } from "@/components/ui";
import { TrackedButtonLink } from "@/components/cta/tracked-button-link";
import { Reveal } from "@/components/motion";
import { planCheckoutUrl, telegramConfig } from "@/constants/checkout";

export function CtaFinal() {
  return (
    <section
      id="cta-final"
      aria-labelledby="cta-final-title"
      className="relative overflow-hidden py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black-950 via-gold-500/[0.05] to-black-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[120px]"
      />
      <Container size="md" className="relative text-center">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Vagas limitadas por ciclo
          </span>
          <Heading
            as={2}
            id="cta-final-title"
            tone="white"
            className="text-fluid-2xl"
          >
            Pronto para operar com{" "}
            <span className="text-gold-gradient">critério e método?</span>
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Entre no grupo VIP da Comunidade RFP Sports e comece hoje a operar com
            critério, gestão de banca e suporte diário da equipe.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrackedButtonLink
              href={planCheckoutUrl("anual")}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              tracking={{
                location: "cta_final",
                cta: "Quero entrar no grupo VIP",
                destination: "checkout",
              }}
              extraParams={{ plan: "anual" }}
              rightIcon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
            >
              Quero entrar no grupo VIP
            </TrackedButtonLink>
            <TrackedButtonLink
              href={telegramConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="telegram"
              size="lg"
              className="w-full sm:w-auto"
              tracking={{
                location: "cta_final",
                cta: "Falar no Telegram",
                destination: "telegram",
              }}
              leftIcon={<Send className="h-5 w-5" aria-hidden="true" />}
            >
              Falar no Telegram
            </TrackedButtonLink>
          </div>

          <p className="mt-6 text-xs text-white/50">
            Garantia incondicional de 7 dias · Acesso imediato após a confirmação
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
