// src/components/reveal.tsx
// Scroll reveal. Only elements that start below the fold are hidden, so nothing above the fold flashes.
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  as?: ElementType;
  className?: string;
  /** classes while waiting (default: fade + slide) */
  hiddenClassName?: string;
  /** classes once in view */
  shownClassName?: string;
  children: ReactNode;
};

export function Reveal({
  as: Tag = "div",
  className,
  hiddenClassName = "motion-safe:translate-y-6 motion-safe:opacity-0",
  shownClassName = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"initial" | "hidden" | "shown">("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight || !("IntersectionObserver" in window)) {
      setState("shown");
      return;
    }
    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform,border-color] duration-700",
        state === "hidden" && hiddenClassName,
        state === "shown" && shownClassName,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
