import { cookies } from "next/headers";

export type Theme = "velure" | "atelier-11";

export const THEMES: Theme[] = ["velure", "atelier-11"];

export const DEFAULT_THEME: Theme =
  (process.env.NEXT_PUBLIC_DEFAULT_THEME as Theme) ?? "velure";

export const THEME_COOKIE = "brand-theme";

export async function readTheme(searchParams?: {
  theme?: string;
}): Promise<Theme> {
  const fromQuery = searchParams?.theme;
  if (fromQuery && THEMES.includes(fromQuery as Theme)) {
    return fromQuery as Theme;
  }
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(THEME_COOKIE)?.value;
  if (fromCookie && THEMES.includes(fromCookie as Theme)) {
    return fromCookie as Theme;
  }
  return DEFAULT_THEME;
}

export function themeLabel(theme: Theme): string {
  return theme === "velure" ? "Velure" : "Atelier 11";
}
