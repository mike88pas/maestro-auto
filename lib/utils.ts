import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | null, opts?: { suffix?: string }): string {
  if (price === null) return "Cena na zapytanie";
  return `${price.toLocaleString("pl-PL").replace(/,/g, " ")} ${opts?.suffix ?? "PLN"}`;
}

export function formatMileage(km: number): string {
  return `${km.toLocaleString("pl-PL").replace(/,/g, " ")} km`;
}
