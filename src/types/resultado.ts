export type Resultado = {
  id: string;
  date: string;
  esporte: string;
  jogo: string;
  mercado: string;
  odd: number;
  stake: string;
  status: "green" | "red" | "void";
  lucro: number;
};

export type ResultadoStats = {
  mes: string;
  roi: number;
  aproveitamento: number;
  oddMedia: number;
  operacoes: number;
  bancaInicial: number;
  bancaAtual: number;
};
