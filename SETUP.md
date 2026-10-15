# NGYN AI Frontier: GHL AI Studio setup

## 1. Files to add (each at the same path in AI Studio)
| Path | What it is |
|---|---|
| `src/components/site-layout.tsx` | Page shell: header, `<main id="main">`, footer, back-to-top, AODA loader |
| `src/components/site-header.tsx` | Fixed header, transparent over the dark hero, solid after 40px, mobile `Sheet` menu |
| `src/components/site-footer.tsx` | Footer (links to `/accessibility`) |
| `src/components/site-logo.tsx` | Original control-chart mark + wordmark |
| `src/components/site-ui.tsx` | Section building blocks (headings, cards, lists, tables, FAQ, sub hero, image slots) |
| `src/components/control-chart.tsx` | Animated hero control chart (pausable) |
| `src/components/contact-section.tsx` | Contact block + react-hook-form/zod form |
| `src/components/reveal.tsx` | Scroll reveal |
| `src/components/back-to-top.tsx` | Back-to-top button (bottom-left, above the accessibility launcher) |
| `src/components/aoda-loader.tsx` | Loads the shared accessibility toolbar |
| `src/components/seo.tsx` | Shared `head()` builder (title, description, OG, FAQPage JSON-LD) |
| `src/lib/contact.functions.ts` | `submitContact` server function |
| `src/routes/index.tsx` | `/` |
| `src/routes/dmaic-process-improvement.tsx` | `/dmaic-process-improvement` |
| `src/routes/lean-six-sigma-small-business.tsx` | `/lean-six-sigma-small-business` |
| `src/routes/lean-six-sigma-training.tsx` | `/lean-six-sigma-training` |
| `src/routes/thank-you.tsx` | `/thank-you` (noindex) |
| `src/routes/accessibility.tsx` | `/accessibility` |
| `src/routes/$.tsx` | 404 catch-all (noindex) |
| `public/aoda-ada.min.js` | AODA-ADA core, upload unchanged |

Don't touch `routeTree.gen.ts`, `package.json` or `src/components/ui/*`. The code uses these shadcn components: button, input, textarea, label, select and sheet. It also uses `cn` from `@/lib/utils`.

## 2. Token note: `src/styles.css`
This is a single-theme site, so dark mirrors light. Paste the values into both `:root` and `.dark`, and add the brand variables to both.

| Token | Light | Dark |
|---|---|---|
| `--background` | oklch(0.967 0.007 88.6) | same |
| `--foreground` | oklch(0.250 0.022 257.3) | same |
| `--card` | oklch(1 0 0) | same |
| `--card-foreground` | oklch(0.250 0.022 257.3) | same |
| `--popover` / `--popover-foreground` | oklch(1 0 0) / oklch(0.250 0.022 257.3) | same |
| `--primary` | oklch(0.579 0.202 31.1) | same |
| `--primary-foreground` | oklch(1 0 0) | same |
| `--secondary` | oklch(0.932 0.013 86.8) | same |
| `--secondary-foreground` | oklch(0.250 0.022 257.3) | same |
| `--accent` | oklch(0.934 0.027 31.7) | same |
| `--accent-foreground` | oklch(0.478 0.171 31.7) | same |
| `--muted` | oklch(0.911 0.016 86.4) | same |
| `--muted-foreground` | oklch(0.461 0.026 256.8) | same |
| `--border` | oklch(0.871 0.017 88.0) | same |
| `--input` | oklch(0.649 0.015 262.4) | same |
| `--ring` | oklch(0.579 0.202 31.1) | same |
| `--destructive` | oklch(0.478 0.171 31.7) | same |

Extra brand variables (in both `:root` and `.dark`):
```css
--brand-ink: oklch(0.199 0.020 258.3);
--brand-ink-2: oklch(0.254 0.028 257.5);
--brand-ink-deep: oklch(0.171 0.017 256.8);
--brand-on-dark: oklch(0.957 0.005 247.9);
--brand-on-dark-muted: oklch(0.766 0.024 254.4);
--brand-line-dark: oklch(0.340 0.035 255.3);
--brand-accent-strong: oklch(0.478 0.171 31.7);
--brand-accent-soft: oklch(0.757 0.147 32.3);
--brand-signal: oklch(0.515 0.090 172.0);
--brand-in-control: oklch(0.790 0.118 170.7);
--brand-out-control: oklch(0.708 0.185 30.7);
--brand-axis: oklch(0.523 0.038 256.8);
```

Fonts go in `@theme inline` (or wherever the template maps fonts):
```css
--font-sans: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'Space Grotesk Fallback', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
```

Fallback faces go at the top level of `styles.css`:
```css
@font-face { font-family: 'Space Grotesk Fallback'; src: local('Arial Bold'), local('Arial-BoldMT'); font-weight: 600 900; size-adjust: 101.74%; ascent-override: 96.71%; descent-override: 28.70%; line-gap-override: 0.00%; }
@font-face { font-family: 'DM Sans Fallback'; src: local('Arial'), local('ArialMT'); size-adjust: 103.89%; ascent-override: 95.49%; descent-override: 29.84%; line-gap-override: 0.00%; }
```

Contrast checks: white on primary is 4.8:1, muted text on paper is about 6.6:1, accent strong on paper is about 7:1, and the signal tag on white is about 5.2:1.

## 3. Font link edit in `src/routes/__root.tsx`
This is the only edit to that file. Add the following to `head().links`:
```ts
{ rel: "preconnect", href: "https://fonts.googleapis.com" },
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;600&display=swap" },
```

## 4. Environment variable
| Name | Value |
|---|---|
| `CONTACT_WEBHOOK_URL` | A GHL inbound webhook URL (Automation > Workflow > Inbound Webhook trigger). |

If it isn't set, submissions are only logged on the server, which is the testing mode. They still redirect to `/thank-you`.

## 5. Images (REPLACE slots)
AI Studio code can't load external image URLs, so each image is a sized `role="img"` placeholder with a `{/* REPLACE */}` comment and a `data-replace-slot` id. Upload these files and put an `<img>` (object-cover, same 4:3 box) inside each slot:

| Slot | Page / section | Alt text | Approved mockup source |
|---|---|---|---|
| OG | all pages, `public/og-image.jpg` (1200x630) | n/a | https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop |
| IMG-2 | Home, "Process first. Tools second." | Team reviewing a process map on a whiteboard | https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600 |
| IMG-3 | DMAIC hero | Consultant pointing at process data on a wall during a workshop | https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600 |
| IMG-4 | DMAIC, Control phase | Dashboard with process performance charts on a laptop | https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600 |
| IMG-5 | Small business hero | Small business team planning work around a table | https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600 |
| IMG-6 | Small business, Quick wins | Organized shared workspace with labelled storage | https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600 |
| IMG-7 | Training hero | Instructor leading a training session with a small group | https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600 |

## 6. Install and test
1. Upload `public/aoda-ada.min.js`.
2. Paste every file from section 1 at its path.
3. Apply the token note and font link edit.
4. Set `CONTACT_WEBHOOK_URL`, or leave it unset for log-only testing.
5. Preview every route: `/`, the three content pages, `/accessibility`, `/thank-you`, and any made-up URL (it should show the 404).
6. Check that the header turns solid on scroll, the mobile menu opens and closes with Escape, the chart's Pause button works, and the accessibility toolbar appears bottom-left.
7. Submit the form once. It should land on `/thank-you`, and the lead should show in GHL (or in the server log).

## Verification done locally
`tsc --noEmit` passed with all files dropped into a scratch TanStack Router + `@tanstack/react-start` + shadcn (new-york) project. A full `vite build`/runtime test inside AI Studio has not been run.

## Notes
- Validator API: if AI Studio reports a type error on `.validator`, rename it to `.inputValidator` in `contact.functions.ts`.
- This is a test build. The identity is mock (per the mockup-legal rules), and the results and course lengths are sample values marked on the page.
