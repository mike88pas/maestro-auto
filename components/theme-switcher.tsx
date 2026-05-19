import { setTheme } from "@/lib/theme-action";
import type { Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/**
 * Dev-only theme toggle. Hidden in prod unless NEXT_PUBLIC_THEME_SWITCHER=true.
 * Uses server action + cookie; full page revalidate on switch.
 */
export function ThemeSwitcher({ current }: { current: Theme }) {
  const enabled = process.env.NEXT_PUBLIC_THEME_SWITCHER === "true";
  if (!enabled) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 border border-gold/40 bg-bg/80 backdrop-blur px-2 py-1.5">
      <form action={setTheme}>
        <input type="hidden" name="theme" value="velure" />
        <button
          type="submit"
          className={cn(
            "px-3 py-1 text-[10px] tracking-wider-3 uppercase transition-colors",
            current === "velure"
              ? "text-gold"
              : "text-muted hover:text-ink"
          )}
        >
          Velure
        </button>
      </form>
      <span className="text-muted text-[10px]">/</span>
      <form action={setTheme}>
        <input type="hidden" name="theme" value="atelier-11" />
        <button
          type="submit"
          className={cn(
            "px-3 py-1 text-[10px] tracking-wider-3 uppercase transition-colors",
            current === "atelier-11"
              ? "text-gold"
              : "text-muted hover:text-ink"
          )}
        >
          Atelier 11
        </button>
      </form>
    </div>
  );
}
