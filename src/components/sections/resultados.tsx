import { CheckCircle2, TrendingDown, TrendingUp } from "lucide-react";
import { Container, Heading } from "@/components/ui";
import { BancaChart, Counter, Reveal } from "@/components/motion";
import { resultadosData, resultadosStats } from "@/data/resultados";
import { formatBRL } from "@/utils/format";

const chartData: Array<{ label: string; value: number }> = [
  { label: "Sem 1", value: 1000 },
  { label: "Sem 2", value: 1042 },
  { label: "Sem 3", value: 1085 },
  { label: "Sem 4", value: 1118 },
  { label: "Sem 5", value: 1156 },
  { label: "Sem 6", value: 1140 },
  { label: "Sem 7", value: 1168 },
  { label: "Sem 8", value: 1184 },
];

export function Resultados() {
  return (
    <section
      id="resultados"
      aria-labelledby="resultados-title"
      className="relative overflow-hidden bg-black-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-gold"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-gold-300">
            Resultado do mês
          </span>
          <Heading as={2} id="resultados-title" tone="white" className="text-fluid-2xl">
            <span className="text-gold-gradient">{resultadosStats.mes}</span>
          </Heading>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Operações publicadas no grupo VIP. Resultado é consequência de método,
            critério e gestão — não de sorte.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard
            label="ROI do mês"
            value={
              <span className="text-green-400">
                +<Counter value={resultadosStats.roi} decimals={1} suffix="%" />
              </span>
            }
            sub="lucro sobre banca inicial"
            highlight
          />
          <StatCard
            label="Operações"
            value={<Counter value={resultadosStats.operacoes} />}
            sub="no mês"
          />
          <StatCard
            label="Aproveitamento"
            value={
              <span className="text-green-400">
                <Counter value={resultadosStats.aproveitamento} suffix="%" />
              </span>
            }
            sub="taxa de green"
          />
          <StatCard
            label="Odd média"
            value={<Counter value={resultadosStats.oddMedia} decimals={2} />}
            sub="por entrada"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/[0.06] to-black-900 p-6 shadow-[0_16px_40px_-12px_rgba(212,175,55,0.25)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gold-300">
                Evolução da banca
              </p>
              <p className="mt-1 text-sm text-white/60">
                Simulação de R$ 1.000 →{" "}
                <span className="font-bold text-green-400">
                  {formatBRL(resultadosStats.bancaAtual)}
                </span>
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-mono text-3xl font-extrabold text-green-400 sm:text-4xl">
                +<Counter
                  value={resultadosStats.bancaAtual - resultadosStats.bancaInicial}
                  prefix="R$ "
                />
              </p>
              <p className="text-xs text-white/50">em {resultadosStats.mes.toLowerCase()}</p>
            </div>
          </div>
          <BancaChart data={chartData} className="mt-5 h-24 w-full" />
          <p className="mt-3 text-center text-[10px] text-white/40">
            Passe o mouse no gráfico para ver o valor de cada semana
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">
              Últimas entradas
            </h3>
            <span className="text-xs text-white/40">atualizado em tempo real</span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-black-900/60">
            <div className="hidden grid-cols-7 gap-2 border-b border-white/[0.06] bg-black-800/40 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white/40 sm:grid">
              <span>Data</span>
              <span className="col-span-2">Jogo / Mercado</span>
              <span>Odd</span>
              <span>Stake</span>
              <span className="text-right">Status</span>
              <span className="text-right">Lucro</span>
            </div>
            <ul role="list" className="divide-y divide-white/[0.04]">
              {resultadosData.map((r, i) => (
                <Reveal key={r.id} delay={i * 50}>
                  <li className="grid grid-cols-2 gap-2 px-4 py-3 text-sm sm:grid-cols-7 sm:items-center">
                    <span className="text-xs text-white/40 sm:text-sm">{r.date}</span>
                    <div className="col-span-2 flex flex-col">
                      <span className="text-xs text-white/40">{r.esporte}</span>
                      <span className="font-semibold text-white">
                        {r.jogo}{" "}
                        <span className="font-normal text-white/50">
                          · {r.mercado}
                        </span>
                      </span>
                    </div>
                    <span className="hidden text-white sm:block">
                      {r.odd.toFixed(2)}
                    </span>
                    <span className="hidden text-white/60 sm:block">{r.stake}</span>
                    <div className="flex items-center justify-end gap-1.5">
                      {r.status === "green" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-green-400">
                          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                          GREEN
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-red-400">
                          <TrendingDown className="h-3 w-3" aria-hidden="true" />
                          RED
                        </span>
                      )}
                    </div>
                    <span
                      className={
                        "text-right font-mono font-semibold " +
                        (r.status === "green" ? "text-green-400" : "text-red-400")
                      }
                    >
                      {r.status === "green" ? "+" : ""}
                      {formatBRL(r.lucro)}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            <TrendingUp
              className="mr-1 inline-block h-3 w-3 text-gold-400"
              aria-hidden="true"
            />
            Resultados passados não garantem resultados futuros. Operação com
            critério e gestão.
          </p>
        </div>
      </Container>
    </section>
  );
}

function StatCard({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: React.ReactNode;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl p-4 sm:p-5 " +
        (highlight
          ? "border border-gold-500/30 bg-gradient-to-br from-gold-500/[0.06] to-black-900"
          : "border border-white/[0.06] bg-black-900/60")
      }
    >
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
        {label}
      </p>
      <p className="mt-1 font-mono text-2xl font-extrabold sm:text-3xl">{value}</p>
      <p className="mt-1 text-[11px] text-white/50">{sub}</p>
    </div>
  );
}
