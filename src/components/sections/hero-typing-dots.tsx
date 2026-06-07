export function HeroTypingDots() {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label="Digitando"
    >
      <Dot delay={0} />
      <Dot delay={150} />
      <Dot delay={300} />
    </span>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"
      style={{
        animation: "hero-typing 1.2s ease-in-out infinite",
        animationDelay: `${delay}ms`,
      }}
    />
  );
}
