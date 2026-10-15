// src/components/site-layout.tsx
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { AodaLoader } from "@/components/aoda-loader";

export function SiteLayout({ children, heroOverlay = true }: { children: ReactNode; heroOverlay?: boolean }) {
  return (
    <div className="min-h-screen bg-background font-sans text-[17px] leading-[1.65] text-foreground">
      <SiteHeader heroOverlay={heroOverlay} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
      <BackToTop />
      <AodaLoader />
    </div>
  );
}
