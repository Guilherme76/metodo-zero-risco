import { Accordion, Container, Heading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { faqData } from "@/data/faq";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-black-950 py-20 text-white md:py-28"
    >
      <Container size="md" className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-gold-300">
            Perguntas frequentes
          </span>
          <Heading as={2} id="faq-title" tone="white" className="text-fluid-2xl">
            Dúvidas comuns{" "}
            <span className="text-gold-gradient">antes de entrar</span>
          </Heading>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Se a sua dúvida não estiver aqui, fale com a equipe no Telegram.
          </p>
        </div>

        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqData} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
