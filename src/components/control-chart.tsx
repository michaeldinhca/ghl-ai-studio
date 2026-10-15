// src/components/control-chart.tsx
// Hero animation: noisy process data settling between control limits. Pausable, honours reduced motion,
// the AODA "stop animations" setting (aoda-motion-off on <html> + aoda:change event) and pauses offscreen.
import { useEffect, useRef, useState } from "react";

const N = 40;

function frame(t: number) {
  let seed = 7 + Math.floor(t / 6);
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647 - 0.5;
  };
  const spread = Math.max(0.12, 1 - t / 240);
  return Array.from({ length: N }, (_, i) => {
    const x = 20 + i * (560 / (N - 1));
    const late = i / N;
    const s = spread * (1 - late * 0.6) + 0.12 * late;
    const y = Math.max(18, Math.min(282, 150 + rnd() * 220 * s));
    return { x, y, out: y < 70 || y > 230 };
  });
}

export function ControlChart() {
  const ref = useRef<HTMLElement>(null);
  const [t, setT] = useState(240);
  const [userPaused, setUserPaused] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const check = () => setBlocked(mq.matches || document.documentElement.classList.contains("aoda-motion-off"));
    check();
    if (!mq.matches) setT(0);
    mq.addEventListener("change", check);
    document.addEventListener("aoda:change", check);
    const io = new IntersectionObserver((e) => setVisible(e[0]?.isIntersecting ?? true));
    if (ref.current) io.observe(ref.current);
    return () => {
      mq.removeEventListener("change", check);
      document.removeEventListener("aoda:change", check);
      io.disconnect();
    };
  }, []);

  const running = !userPaused && !blocked && visible;
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setT((v) => (v + 1) % 300), 90);
    return () => window.clearInterval(id);
  }, [running]);

  const pts = frame(t);
  const sigma = (1 + (Math.min(t, 240) / 240) * 3.2).toFixed(1);
  const paused = userPaused || blocked;

  return (
    <figure ref={ref} className="m-0 rounded-[14px] border border-[var(--brand-line-dark)] bg-[var(--brand-ink-2)] p-5">
      <svg
        viewBox="0 0 600 300"
        role="img"
        aria-label="Animated control chart: scattered process data settling between the upper and lower control limits as the process improves"
        className="h-auto w-full"
      >
        <line x1="20" y1="70" x2="580" y2="70" style={{ stroke: "var(--brand-accent-soft)" }} strokeDasharray="6 6" />
        <text x="580" y="62" textAnchor="end" style={{ fill: "var(--brand-accent-soft)" }} fontSize="12" className="font-mono">UCL</text>
        <line x1="20" y1="150" x2="580" y2="150" style={{ stroke: "var(--brand-axis)" }} />
        <text x="580" y="142" textAnchor="end" style={{ fill: "var(--brand-on-dark-muted)" }} fontSize="12" className="font-mono">MEAN</text>
        <line x1="20" y1="230" x2="580" y2="230" style={{ stroke: "var(--brand-accent-soft)" }} strokeDasharray="6 6" />
        <text x="580" y="250" textAnchor="end" style={{ fill: "var(--brand-accent-soft)" }} fontSize="12" className="font-mono">LCL</text>
        <polyline
          fill="none"
          strokeOpacity={0.55}
          strokeWidth={2}
          style={{ stroke: "var(--brand-in-control)" }}
          points={pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")}
        />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={4} style={{ fill: p.out ? "var(--brand-out-control)" : "var(--brand-in-control)" }} />
        ))}
      </svg>
      <figcaption className="mt-2.5 flex items-center justify-between font-mono text-xs font-medium text-[var(--brand-on-dark-muted)]">
        <span>Process capability: {sigma} sigma</span>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setUserPaused((v) => !v)}
          disabled={blocked}
          className="rounded-lg border border-[var(--brand-line-dark)] px-2.5 py-1 text-[var(--brand-on-dark)] disabled:opacity-60"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </figcaption>
    </figure>
  );
}
