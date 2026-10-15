// src/components/site-logo.tsx
// Original NGYN AI Frontier mark: a control chart line inside a rounded square.
import { Link } from "@tanstack/react-router";

export function SiteLogo() {
  return (
    <Link
      to="/"
      aria-label="NGYN AI Frontier home"
      className="flex items-center gap-2.5 font-display text-[1.1rem] font-semibold text-[var(--brand-on-dark)] no-underline"
    >
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-[34px] w-[34px]">
        <rect x="1" y="1" width="38" height="38" rx="9" fill="none" style={{ stroke: "var(--brand-accent-soft)" }} strokeWidth="2" />
        <path
          d="M6 30 L13 14 L19 24 L25 10 L34 20"
          fill="none"
          style={{ stroke: "var(--brand-on-dark)" }}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="6" y1="33" x2="34" y2="33" style={{ stroke: "var(--brand-accent-soft)" }} strokeWidth="2" strokeDasharray="3 3" />
      </svg>
      <span>
        NGYN AI Frontier
        <small className="block font-mono text-[0.66rem] font-medium tracking-[0.14em] text-[var(--brand-on-dark-muted)]">
          LEAN SIX SIGMA
        </small>
      </span>
    </Link>
  );
}
