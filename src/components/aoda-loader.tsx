// src/components/aoda-loader.tsx
// Loads the shared AODA-ADA accessibility core from public/aoda-ada.min.js (file is never edited).
import { useEffect } from "react";

declare global {
  interface Window {
    AODA_ADA_CONFIG?: Record<string, unknown>;
  }
}

export function AodaLoader() {
  useEffect(() => {
    window.AODA_ADA_CONFIG = {
      statementUrl: "/accessibility",
      feedbackEmail: "info@mockup.ngynsolutions.com",
      side: "left",
      tokens: {
        "--aoda-accent": "oklch(0.579 0.202 31.1)",
        "--aoda-accent-strong": "oklch(0.478 0.171 31.7)",
        "--aoda-on-accent": "oklch(1 0 0)",
        "--aoda-accent-soft": "oklch(0.934 0.027 31.7)",
        "--aoda-font": "'DM Sans', 'DM Sans Fallback', sans-serif",
      },
    };
    if (document.querySelector('script[data-aoda-core]')) return;
    const s = document.createElement("script");
    s.src = "/aoda-ada.min.js";
    s.dataset.aodaCore = "true";
    document.body.appendChild(s);
  }, []);
  return null;
}
