# NGYN AI Frontier: design guideline (prefix `nafr`)

Test build made with the ghl-ai-studio-builder skill. The drafts in `drafts/` are the approved visual reference, and `src/` is the AI Studio conversion.

## Positioning
Lean Six Sigma consulting for any business size. Practical AI and automation is presented as a tool used inside DMAIC (mainly in Measure and Control), never as the headline. SEO and GEO target Lean Six Sigma, DMAIC, small business Lean and belt training.

## Mood and tone
- **Mood:** precise, calm, evidence-led, industrial-modern.
- **Tone:** plain English and measured, with no hype. Put numbers before adjectives.

## Colour tokens
| Role | Hex | oklch |
|---|---|---|
| Ink (dark sections, hero) | #10161f | oklch(0.199 0.020 258.3) |
| Ink 2 (dark cards, chart panel) | #1a2330 | oklch(0.254 0.028 257.5) |
| Ink deep (footer) | #0b1017 | oklch(0.171 0.017 256.8) |
| Paper (page background) | #f6f4ef | oklch(0.967 0.007 88.6) |
| Alt section | #ece8df | oklch(0.932 0.013 86.8) |
| Table head | #e6e1d6 | oklch(0.911 0.016 86.4) |
| Text | #1b222c | oklch(0.250 0.022 257.3) |
| Muted text | #4f5967 | oklch(0.461 0.026 256.8) |
| Line | #d9d4c8 | oklch(0.871 0.017 88.0) |
| Accent (primary, buttons) | #d7351f | oklch(0.579 0.202 31.1) |
| Accent strong (hover, links) | #a8240f | oklch(0.478 0.171 31.7) |
| Accent soft (on dark, limits) | #ff8a73 | oklch(0.757 0.147 32.3) |
| Signal (card tags) | #1b7a63 | oklch(0.515 0.090 172.0) |
| In control (chart, tags on dark) | #5fd3b0 | oklch(0.790 0.118 170.7) |
| Out of control (chart) | #ff6b55 | oklch(0.708 0.185 30.7) |
| On dark | #eef1f4 | oklch(0.957 0.005 247.9) |
| On dark muted | #a9b4c2 | oklch(0.766 0.024 254.4) |
| Line on dark | #2c394a | oklch(0.340 0.035 255.3) |

## Type
Font pairing: **Space Grotesk** for display (500/600), **DM Sans** for body (400/500/600), and **JetBrains Mono** (500) for eyebrows, tags, chart labels and notes. This is from the font library's "technical" pairing.
- H1 `clamp(2.4rem, 5.6vw, 4.6rem)` / 600 / 1.1 / -0.02em
- H2 `clamp(1.8rem, 3.4vw, 2.8rem)` / 600
- H3 1.25rem / 600
- Body 17px / 1.65, lead 1.2rem muted
- Eyebrow mono 0.8rem, uppercase, 0.12em tracking, accent strong (accent soft on dark)

## Spacing and components
- Container 1200px with a 16px gutter. Sections are 96px tall top and bottom. Heroes have 150px (home) or 140px (sub pages) top padding.
- Radius 14px on cards, images, tables and the form. Buttons are pills.
- **Cards** are white with a 1px line border and lift 4px on hover.
- **The DOWNTIME waste grid** uses a 2px gap on the line colour.
- **The DMAIC strip** has 5 columns, each with a 4px top border that turns accent when revealed.
- **Dash lists** use a 14px accent dash marker.
- **The FAQ** uses native `details`, with +/- in accent.

## Motion
- **Hero control chart:** points settle inside the UCL/LCL limits and a capability label counts up to 4.2 sigma. It has a Pause/Play control, stops for reduced motion and the AODA motion-off setting, and pauses offscreen.
- **Scroll reveal:** fade plus a 24px rise, applied only to elements below the fold.
- **Hover:** buttons lift 2px and cards lift 4px.

## Imagery
Unsplash in the mockup only. People at work, whiteboards, dashboards and tidy workspaces, in a 4:3 crop. No AI robot imagery.

## Copy rules
- No em or en dashes. Answer-first paragraphs and a visible FAQ on every content page.
- Proof and course lengths are marked as sample values (test site).
- Mock identity: 001 NoWhere Avenue, ON, G5G 0R0, Canada / +1 999-999-9999 / info@mockup.ngynsolutions.com.

## Tailwind mapping
| Design token | Becomes |
|---|---|
| Paper | `--background` → `bg-background` |
| Text | `--foreground` → `text-foreground` |
| White card | `--card` → `bg-card` |
| Muted text | `--muted-foreground` → `text-muted-foreground` |
| Table head | `--muted` → `bg-muted` |
| Alt section | `--secondary` → `bg-secondary` |
| Line | `--border` → `border-border` |
| Form border | `--input` → `border-input` |
| Accent | `--primary` → `bg-primary`, `text-primary`; `--ring` |
| Accent strong | `--brand-accent-strong` → `text-[var(--brand-accent-strong)]` |
| Accent soft | `--brand-accent-soft` |
| Ink / Ink 2 / Ink deep | `--brand-ink`, `--brand-ink-2`, `--brand-ink-deep` |
| On dark / muted | `--brand-on-dark`, `--brand-on-dark-muted` |
| Line on dark | `--brand-line-dark` |
| Signal / in / out of control | `--brand-signal`, `--brand-in-control`, `--brand-out-control`; chart axis `--brand-axis` |
| Fonts | `--font-sans` (DM Sans), `--font-display` (Space Grotesk), `--font-mono` (JetBrains Mono) |
