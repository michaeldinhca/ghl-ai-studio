// src/components/site-header.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SiteLogo } from "@/components/site-logo";

const NAV = [
  { to: "/dmaic-process-improvement", label: "DMAIC" },
  { to: "/lean-six-sigma-small-business", label: "Small business" },
  { to: "/lean-six-sigma-training", label: "Training" },
  { to: "/", hash: "faq", label: "FAQ" },
] as const;

const linkCls =
  "font-medium text-[var(--brand-on-dark)] no-underline hover:text-[var(--brand-accent-soft)] data-[status=active]:text-[var(--brand-accent-soft)]";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {NAV.map((item) => (
        <li key={item.label}>
          <Link
            to={item.to}
            hash={"hash" in item ? item.hash : undefined}
            className={linkCls}
            activeOptions={{ exact: true, includeHash: true }}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          to="/"
          hash="contact"
          onClick={onNavigate}
          className="inline-flex items-center rounded-full bg-primary px-[18px] py-2.5 font-semibold text-primary-foreground no-underline transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-accent-strong)]"
        >
          Book a process review
        </Link>
      </li>
    </>
  );
}

export function SiteHeader({ heroOverlay = true }: { heroOverlay?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [solid, setSolid] = useState(!heroOverlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const setPad = () => {
      if (ref.current) document.documentElement.style.scrollPaddingTop = `${ref.current.offsetHeight + 12}px`;
    };
    const onScroll = () => setSolid(!heroOverlay || window.scrollY > 40);
    setPad();
    onScroll();
    window.addEventListener("resize", setPad);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", setPad);
      window.removeEventListener("scroll", onScroll);
    };
  }, [heroOverlay]);

  return (
    <>
      <a
        href="#main"
        className="absolute -left-[999px] top-2 z-[100] rounded bg-background px-3.5 py-2.5 text-foreground focus:left-2"
      >
        Skip to content
      </a>
      <header
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-[var(--brand-on-dark)] transition-[background-color,box-shadow] duration-300",
          solid && "bg-[var(--brand-ink)]/95 shadow-[0_6px_24px_oklch(0_0_0/0.2)]",
        )}
      >
        <div className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between px-4">
          <SiteLogo />
          <nav aria-label="Main" className="hidden min-[901px]:block">
            <ul className="m-0 flex list-none items-center gap-[26px] p-0">
              <NavLinks />
            </ul>
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="grid h-[42px] w-[46px] place-items-center rounded-[10px] border-2 border-current min-[901px]:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="border-0 bg-[var(--brand-ink)] pt-[74px] text-[var(--brand-on-dark)]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Mobile">
                <ul className="m-0 flex list-none flex-col items-start gap-4 px-4 pb-6">
                  <NavLinks onNavigate={() => setOpen(false)} />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
