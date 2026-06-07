import { ArrowRight, Send, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Badge, ButtonLink, Container, Heading } from "@/components/ui";
import { Counter, Reveal } from "@/components/motion";
import { MagneticTrackedButtonLink } from "@/components/cta/tracked-button-link";
import { HeroVisual } from "./hero-visual";
import { heroData } from "@/data/hero";
import { planCheckoutUrl, telegramConfig } from "@/constants/checkout";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-black-950 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-green"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <Container className="relative grid items-center gap-14 py-20 sm:py-24 md:grid-cols-2 md:gap-12 md:py-28 lg:py-32">
        <div className="flex flex-col items-start text-left">
          <Reveal delay={0} once={false}>
            <Badge
              variant="gold"
              className="mb-6"
              icon={<Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
            >
              {heroData.badge}
            </Badge>
          </Reveal>

          <Reveal delay={100} once={false}>
            <Heading
              as={1}
              id="hero-title"
              tone="white"
              className="text-fluid-3xl sm:text-fluid-4xl"
            >
              {heroData.title.split(heroData.titleHighlight).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 ? (
                    <span className="text-gold-gradient">
                      {heroData.titleHighlight}
                    </span>
                  ) : null}
                </span>
              ))}
            </Heading>
          </Reveal>

          <Reveal delay={220} once={false}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
              {heroData.subtitle}
            </p>
          </Reveal>

          <Reveal delay={340} once={false}>
            <ul
              aria-label="Prova social"
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
            >
              <li className="flex items-center gap-1.5">
                <span
                  className="flex items-center gap-0.5 text-gold-400"
                  aria-label={`Avaliação ${heroData.rating} de 5`}
                >
                  {Array.from({ length: heroData.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-1.5 text-white/80">
                <span className="font-bold text-white">
                  +<Counter value={heroData.memberCount} />
                </span>
                {heroData.memberLabel}
              </li>
              <li className="flex items-center gap-1.5 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                {heroData.communityLabel}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={500} once={false}>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticTrackedButtonLink
                href={planCheckoutUrl("anual")}
                variant="primary"
                size="lg"
                fullWidth
                className="sm:w-auto"
                tracking={{
                  location: "hero_primary",
                  cta: heroData.primaryCta,
                  destination: "checkout",
                }}
                extraParams={{ plan: "anual" }}
                rightIcon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
              >
                {heroData.primaryCta}
              </MagneticTrackedButtonLink>
              <ButtonLink
                href={telegramConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="telegram"
                size="lg"
                fullWidth
                className="sm:w-auto"
                leftIcon={<Send className="h-5 w-5" aria-hidden="true" />}
              >
                {heroData.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={640} once={false}>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300">
                <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                Garantia 7 dias
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70">
                Pagamento 100% seguro
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} once={false}>
          <div className="relative">
            <HeroVisual />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
