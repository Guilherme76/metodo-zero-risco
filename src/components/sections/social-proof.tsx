import { Container, Heading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { testimonialsData } from "@/data/testimonials";

const bettingBrands = [
  "Betano",
  "Bet365",
  "Betfair",
  "Pixbet",
  "Br4bet",
  "KTO",
  "Estrelabet",
  "Betnacional",
];

export function SocialProof() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="social-proof-title"
      className="relative overflow-hidden bg-black-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-20"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-gold-300">
            Quem aplica, recomenda
          </span>
          <Heading as={2} id="social-proof-title" tone="white" className="text-fluid-2xl">
            Operadores que{" "}
            <span className="text-gold-gradient">mudaram a forma de operar</span>
          </Heading>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Depoimentos reais de quem entrou no grupo VIP e passou a operar com
            critério, gestão e consistência.
          </p>
        </div>

        <Reveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <TestimonialsCarousel items={testimonialsData} />
          </div>
        </Reveal>

        <Reveal>
          <div
            aria-label="Casas de aposta monitoradas pela comunidade"
            className="mx-auto mt-16 max-w-5xl rounded-2xl border border-white/[0.06] bg-black-900/40 px-6 py-7"
          >
            <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-wider text-white/40">
              Operamos em mais de 30 casas · Monitoramento ativo no grupo
            </p>
            <ul
              role="list"
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8"
            >
              {bettingBrands.map((brand) => (
                <li
                  key={brand}
                  className="text-sm font-bold uppercase tracking-wider text-white/40 transition-colors hover:text-gold-300"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
