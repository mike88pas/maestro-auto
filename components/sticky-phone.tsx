import { contact } from "@/lib/copy";

export function StickyPhone() {
  return (
    <a
      href={`tel:${contact.phone.replace(/\s/g, "")}`}
      className="sticky-phone"
      aria-label={`Zadzwoń ${contact.phone}`}
    >
      <span>Zadzwoń · {contact.phone}</span>
    </a>
  );
}
