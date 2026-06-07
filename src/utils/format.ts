const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const numberFormatter = new Intl.NumberFormat("pt-BR");

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatBRL(value: number): string {
  return brlFormatter.format(value);
}

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

export function formatDate(value: Date | string): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return dateFormatter.format(date);
}

export function formatInstallments(
  total: number,
  installments: number,
  withInterest = false,
): string {
  if (withInterest) {
    return brlFormatter.format(total);
  }
  const perInstallment = total / installments;
  return `${installments}x ${brlFormatter.format(perInstallment)} sem juros`;
}
