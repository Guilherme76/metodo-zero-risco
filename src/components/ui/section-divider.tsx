export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={
        "relative h-px w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent " +
        (className ?? "")
      }
    >
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
    </div>
  );
}
