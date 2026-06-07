"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { formatBRL } from "@/utils/format";

export type ChartPoint = {
  label: string;
  value: number;
};

type BancaChartProps = {
  data: ChartPoint[];
  className?: string;
};

const WIDTH = 100;
const HEIGHT = 40;

function buildPath(data: ChartPoint[]): { line: string; area: string; points: Array<{ x: number; y: number; p: ChartPoint }> } {
  if (data.length === 0) return { line: "", area: "", points: [] };
  const min = Math.min(...data.map((d) => d.value));
  const max = Math.max(...data.map((d) => d.value));
  const range = max - min || 1;
  const stepX = WIDTH / (data.length - 1);

  const points = data.map((p, i) => {
    const x = i * stepX;
    const y = HEIGHT - ((p.value - min) / range) * (HEIGHT - 4) - 2;
    return { x, y, p };
  });

  const line = points.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x.toFixed(2)} ${pt.y.toFixed(2)}`).join(" ");
  const area = `${line} L ${WIDTH} ${HEIGHT} L 0 ${HEIGHT} Z`;

  return { line, area, points };
}

export function BancaChart({ data, className }: BancaChartProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const { line, area, points } = buildPath(data);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hovered = hover !== null ? points[hover] : null;

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full text-green-500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="banca-area-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="banca-line-stroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#11853a" />
            <stop offset="100%" stopColor="#34d382" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#banca-area-fill)" />
        <path
          d={line}
          fill="none"
          stroke="url(#banca-line-stroke)"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength={1000}
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: visible ? 0 : 1000,
            transition: "stroke-dashoffset 1600ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        {points.map((pt, i) => (
          <g key={i}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hover === i ? 1.8 : 0}
              fill="#f7c948"
              className="transition-all duration-200"
              style={{ filter: "drop-shadow(0 0 2px rgba(247, 201, 72, 0.8))" }}
            />
          </g>
        ))}
        {points.map((pt, i) => (
          <rect
            key={i}
            x={pt.x - 100 / (points.length * 2)}
            y={0}
            width={100 / points.length}
            height={HEIGHT}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
            className="cursor-pointer"
          />
        ))}
        {hovered ? (
          <line
            x1={hovered.x}
            x2={hovered.x}
            y1={0}
            y2={HEIGHT}
            stroke="rgba(247, 201, 72, 0.4)"
            strokeWidth="0.4"
            strokeDasharray="0.8 0.8"
          />
        ) : null}
      </svg>

      {hovered ? (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md border border-gold-500/30 bg-black-900/95 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-[0_4px_16px_-4px_rgba(212,175,55,0.5)] backdrop-blur"
          style={{
            left: `calc(${(hovered.x / WIDTH) * 100}% )`,
            top: `calc(${(hovered.y / HEIGHT) * 100}% - 6px)`,
          }}
        >
          <div className="text-[9px] uppercase tracking-wider text-white/50">
            {hovered.p.label}
          </div>
          <div className="font-mono text-[11px] font-bold text-green-400">
            {formatBRL(hovered.p.value)}
          </div>
        </div>
      ) : null}

      <div className="mt-2 flex justify-between text-[9px] font-medium uppercase tracking-wider text-white/30">
        {data.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}
