// src/components/site-footer.tsx
import { Link } from "@tanstack/react-router";
import { SiteLogo } from "@/components/site-logo";

const a = "text-[var(--brand-on-dark)] no-underline hover:underline";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-ink-deep)] pb-7 pt-16 text-[var(--brand-on-dark-muted)]">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-10 min-[801px]:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SiteLogo />
            <p className="mt-4">
              Lean Six Sigma process improvement for businesses of every size, with practical automation where the data says it pays.
            </p>
            <address className="not-italic">
              001 NoWhere Avenue, ON, G5G 0R0, Canada
              <br />
              <a className={a} href="tel:+19999999999">+1 999-999-9999</a>
              <br />
              <a className={a} href="mailto:info@mockup.ngynsolutions.com">info@mockup.ngynsolutions.com</a>
            </address>
          </div>
          <div>
            <h2 className="mb-3.5 font-display text-base font-semibold text-[var(--brand-on-dark)]">Services</h2>
            <ul className="m-0 grid list-none gap-2.5 p-0">
              <li><Link className={a} to="/dmaic-process-improvement">DMAIC process improvement</Link></li>
              <li><Link className={a} to="/lean-six-sigma-small-business">Lean Six Sigma for small business</Link></li>
              <li><Link className={a} to="/lean-six-sigma-training">Belt training and coaching</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3.5 font-display text-base font-semibold text-[var(--brand-on-dark)]">Company</h2>
            <ul className="m-0 grid list-none gap-2.5 p-0">
              <li><Link className={a} to="/" hash="method">How we work</Link></li>
              <li><Link className={a} to="/" hash="faq">FAQ</Link></li>
              <li><Link className={a} to="/" hash="contact">Contact</Link></li>
              <li><Link className={a} to="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-11 flex flex-wrap justify-between gap-3 border-t border-[var(--brand-line-dark)] pt-[22px] text-[0.88rem]">
          <span>&copy; 2026 NGYN AI Frontier. All rights reserved.</span>
          <span>Measure first. Improve what matters. Keep it in control.</span>
        </div>
      </div>
    </footer>
  );
}
