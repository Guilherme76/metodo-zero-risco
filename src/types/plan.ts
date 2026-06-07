export type PlanFeature = {
  id: string;
  title: string;
};

export type Plan = {
  id: "mensal" | "trimestral" | "semestral" | "anual";
  name: string;
  period: string;
  total: number;
  originalTotal: number;
  discount: number;
  highlight?: boolean;
  badge?: string;
  features: PlanFeature[];
  cta: string;
};
