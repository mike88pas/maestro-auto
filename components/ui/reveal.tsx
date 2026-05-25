import type { ReactNode, ElementType } from "react";

// SSR-safe replacement for the old framer-motion Reveal family.
// Reason: motion.* with initial={{opacity:0}} rendered inline style="opacity:0"
// in SSR HTML. On iPhone 13 / slow hydration the animate transition never
// fired and content stayed invisible. Premium "stillness" > entrance reveal.
// Props (delay/duration/staggerChildren) kept for API compatibility but ignored.

type RevealAs = "div" | "section" | "article" | "span" | "h1" | "h2" | "h3" | "p";
type StaggerAs = "div" | "ul" | "ol" | "section";
type ItemAs = "div" | "li" | "span" | "p" | "h2" | "h3";

export function Reveal({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  as?: RevealAs;
  className?: string;
}) {
  const Tag = as as ElementType;
  return <Tag className={className}>{children}</Tag>;
}

export function RevealStagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  as?: StaggerAs;
}) {
  const Tag = as as ElementType;
  return <Tag className={className}>{children}</Tag>;
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ItemAs;
}) {
  const Tag = as as ElementType;
  return <Tag className={className}>{children}</Tag>;
}
