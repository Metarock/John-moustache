import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// we will assume this will be in NZ
export const getCurrencyFormat = (num: number | string, currency?: string) => {
  return Number(num) >= -1 && (num || num === 0)
    ? Intl.NumberFormat("en-NZ", {
        style: "currency",
        currency: currency ? currency : "NZD",
      }).format(Number(num))
    : null;
};
