// src/components/site-ui.tsx
// Section building blocks matching the approved drafts (spacing, type scale, cards, lists, tables, FAQ).
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export const H1 = "mb-[0.5em] font-display text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]";
export const H2 = "mb-[0.5em] font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.02em]";
export const H3 = "mb-[0.5em] font-display text-xl font-semibold leading-[1.1] tracking-[-0.02em]";
export const BTN =
  "inline-flex items-center gap-2.5 rounded-full border-2 px-[22px] py-3.5 font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5";
export const BTN_PRIMARY = cn(BTN, "border-transparent bg-primary text-primary-foreground hover:bg-[var(--brand-accent-strong)]");
export const BTN_GHOST = cn(BTN, "border-current text-inherit");

type Tone = "light" | "alt" | "dark";

export function Wrap({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto max-w-[1200px] px-4", className)}>{children}</div>;
}

export function Section({ tone = "light", id, className, children }: { tone?: Tone; id?: string; className?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(
        "group/sec py-24",
        tone === "alt" && "bg-secondary text-secondary-foreground",
        tone === "dark" && "bg-[var(--brand-ink)] text-[var(--brand-on-dark)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={cn(
        "mb-3.5 font-mono text-[0.8rem] font-medium uppercase leading-none tracking-[0.12em]",
        onDark ? "text-[var(--brand-accent-soft)]" : "text-[var(--brand-accent-strong)]",
      )}
    >
      {children}
    </p>
  );
}

export function Lead({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className={cn("max-w-[60ch] text-[1.2rem]", onDark ? "text-[var(--brand-on-dark-muted)]" : "text-muted-foreground")}>
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, lead, onDark, children }: { eyebrow: string; title: string; lead?: string; onDark?: boolean; children?: ReactNode }) {
  return (
    <Reveal className="mb-12 max-w-[760px]">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={H2}>{title}</h2>
      {lead && <Lead onDark={onDark}>{lead}</Lead>}
      {children}
    </Reveal>
  );
}

export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-mono text-[0.8rem] font-medium text-muted-foreground", className)}>{children}</p>;
}

export function Grid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]", className)}>{children}</div>;
}

export function InfoCard({
  tag,
  title,
  text,
  more,
  onDark,
  quote,
}: {
  tag?: string;
  title?: string;
  text: string;
  more?: { to: string; label: string };
  onDark?: boolean;
  quote?: string;
}) {
  return (
    <Reveal
      as="article"
      className={cn(
        "rounded-[14px] border p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_oklch(0.2_0.02_258/0.08)]",
        onDark ? "border-[var(--brand-line-dark)] bg-[var(--brand-ink-2)]" : "border-border bg-card text-card-foreground",
      )}
    >
      {tag && <p className={cn("mb-3 font-mono text-xs font-medium tracking-[0.08em]", onDark ? "text-[var(--brand-in-control)]" : "text-[var(--brand-signal)]")}>{tag}</p>}
      {quote && <p className="mb-3.5 font-display text-[1.35rem] font-medium leading-[1.5]">{quote}</p>}
      {title && <h3 className={H3}>{title}</h3>}
      <p className={cn("mb-3", onDark ? "text-[var(--brand-on-dark-muted)]" : "text-muted-foreground")}>{text}</p>
      {more && (
        <Link to={more.to} className="font-semibold text-[var(--brand-accent-strong)] no-underline">
          {more.label} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </Reveal>
  );
}

export function DashList({ items, onDark }: { items: ReactNode[]; onDark?: boolean }) {
  return (
    <ul className="list-none p-0">
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "relative border-b py-3 pl-[30px] before:absolute before:left-0 before:top-[21px] before:h-0.5 before:w-3.5 before:bg-primary",
            onDark ? "border-[var(--brand-line-dark)]" : "border-border",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ImageSlot({ label, slot, className }: { label: string; slot: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      data-replace-slot={slot}
      className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-muted", className)}
    >
      {/* REPLACE: image slot. Upload the image listed for this slot id in SETUP.md (approved mockup source). */}
    </div>
  );
}

export function Split({ children }: { children: ReactNode }) {
  return <Wrap className="grid items-center gap-14 min-[901px]:grid-cols-2">{children}</Wrap>;
}

export function DmaicStrip({ items, onDark }: { items: Array<[string, string, string]>; onDark?: boolean }) {
  return (
    <ol className="m-0 grid p-0 min-[901px]:grid-cols-5">
      {items.map(([letter, title, text]) => (
        <Reveal
          as="li"
          key={title}
          hiddenClassName="border-border"
          shownClassName="border-primary"
          className="list-none border-t-4 border-border px-[22px] py-[26px]"
        >
          <b className="block font-display text-5xl font-semibold text-primary">{letter}</b>
          <h3 className={H3}>{title}</h3>
          <p className={cn("m-0", onDark ? "text-[var(--brand-on-dark-muted)]" : "text-muted-foreground")}>{text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function DataTable({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return (
    <Reveal className="overflow-x-auto">
      <table className="w-full overflow-hidden rounded-[14px] bg-card text-card-foreground [border-collapse:collapse]">
        {caption && <caption className="pt-2.5 text-left font-mono text-[0.8rem] font-medium text-muted-foreground [caption-side:bottom]">{caption}</caption>}
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="border-b border-border bg-muted p-4 text-left align-top font-display">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([first, ...rest]) => (
            <tr key={first}>
              <th scope="row" className="border-b border-border p-4 text-left align-top font-display">{first}</th>
              {rest.map((c, i) => (
                <td key={i} className="border-b border-border p-4 align-top">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

export function FaqSection({
  title,
  items,
  tone = "alt",
  id,
  footer,
}: {
  title: string;
  items: ReadonlyArray<readonly [string, string]>;
  tone?: Tone;
  id?: string;
  footer?: ReactNode;
}) {
  return (
    <Section tone={tone} id={id}>
      <Wrap>
        <div className="max-w-[760px]">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={H2}>{title}</h2>
          <div>
            {items.map(([q, a]) => (
              <details key={q} className="group border-b border-border py-[18px]">
                <summary className="flex cursor-pointer list-none justify-between gap-4 font-display text-[1.15rem] font-semibold [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden="true" className="text-2xl leading-none text-primary group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden text-2xl leading-none text-primary group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 max-w-[72ch] text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          {footer && <p className="mt-8">{footer}</p>}
        </div>
      </Wrap>
    </Section>
  );
}

export function SubHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: { label: string; slot: string };
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-ink)] pb-[70px] pt-[140px] text-[var(--brand-on-dark)]">
      <Wrap className={cn("grid items-center gap-12", image && "min-[901px]:grid-cols-[1.05fr_0.95fr]")}>
        <div>
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className={H1}>{title}</h1>
          {lead && <Lead onDark>{lead}</Lead>}
          {image && (
            <div className="mt-7 flex flex-wrap gap-3.5">
              <a className={BTN_PRIMARY} href="#contact">Book a process review</a>
            </div>
          )}
        </div>
        {image && <ImageSlot label={image.label} slot={image.slot} />}
      </Wrap>
    </section>
  );
}

export const linkInline = "text-[var(--brand-accent-strong)] underline";
