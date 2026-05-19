import { contact } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function StickyPhone({ theme }: { theme: Theme }) {
  const c = contact[theme];
  return (
    <a
      href={`tel:${c.phone.replace(/\s/g, "")}`}
      className="sticky-phone"
      aria-label={`Zadzwoń ${c.phone}`}
    >
      Zadzwoń · {c.phone}
    </a>
  );
}
