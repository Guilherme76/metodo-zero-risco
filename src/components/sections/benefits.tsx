import { Container, Heading, Icon } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { benefitsData } from "@/data/benefits";

export function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-title"
      className="relative overflow-hidden bg-black-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-green opacity-50"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-gold-300">
            O método completo
          </span>
          <Heading as={2} id="benefits-title" tone="white" className="text-fluid-2xl">
            Tudo o que você precisa para{" "}
            <span className="text-gold-gradient">operar com método</span>
          </Heading>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            {benefitsData.subtitle}
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefitsData.items.map((benefit, i) => (
            <Reveal key={benefit.id} delay={i * 70}>
              <li className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-black-900/60 p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.3)] sm:p-8">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/10 text-gold-300 transition-all group-hover:scale-110 group-hover:border-gold-300 group-hover:bg-gold-500/20">
                  <Icon size={22} decorative>
                    <benefit.icon />
                  </Icon>
                </span>
                <h3 className="text-base font-bold leading-snug text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
