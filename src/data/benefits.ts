import {
  GraduationCap,
  ChartLine,
  ShieldCheck,
  Users2,
  FileSpreadsheet,
  RefreshCcw,
  Brain,
  MessageCircle,
} from "lucide-react";
import type { Benefit } from "@/types/benefit";

export const benefitsData: {
  title: string;
  subtitle: string;
  items: Benefit[];
} = {
  title: "O que você recebe ao entrar no grupo VIP",
  subtitle: "Tudo o que você precisa para operar com método, em um só lugar.",
  items: [
    {
      id: "treinamento",
      icon: GraduationCap,
      title: "Treinamento completo do método",
      description:
        "Do zero ao avançado, com módulos objetivos e linguagem direta, sem enrolação.",
    },
    {
      id: "entradas",
      icon: ChartLine,
      title: "Entradas sinalizadas diariamente",
      description:
        "Operações mapeadas pela equipe com critério, stake sugerido e leitura do jogo.",
    },
    {
      id: "banca",
      icon: ShieldCheck,
      title: "Gestão de banca protegida",
      description:
        "Regras de stake, limites e plano de contingência para sequências negativas.",
    },
    {
      id: "comunidade",
      icon: Users2,
      title: "Comunidade fechada de operadores",
      description:
        "Networking, troca de experiências e suporte com pessoas que operam de verdade.",
    },
    {
      id: "planilhas",
      icon: FileSpreadsheet,
      title: "Planilhas prontas de controle",
      description:
        "Planilhas de stake, controle de banca e relatórios prontos para usar no dia a dia.",
    },
    {
      id: "atualizacoes",
      icon: RefreshCcw,
      title: "Atualizações constantes",
      description:
        "O método evolui com o mercado. Você recebe ajustes e novas estratégias sem custo extra.",
    },
    {
      id: "analise",
      icon: Brain,
      title: "Análise estatística aplicada",
      description:
        "Leitura de dados traduzida em decisão prática: o que importa e o que ignorar.",
    },
    {
      id: "suporte",
      icon: MessageCircle,
      title: "Suporte direto com a equipe",
      description:
        "Dúvidas, revisão de entradas e ajustes personalizados no grupo, todos os dias.",
    },
  ],
};
