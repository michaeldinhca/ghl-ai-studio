// src/routes/accessibility.tsx
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { pageHead } from "@/components/seo";
import { DashList, Note, Section, SubHero, Wrap } from "@/components/site-ui";

const h2 = "mb-[0.5em] mt-10 font-display text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.02em]";
const a = "text-[var(--brand-accent-strong)] underline";

export const Route = createFileRoute("/accessibility")({
  head: () =>
    pageHead(
      "Accessibility Statement | NGYN AI Frontier",
      "How NGYN AI Frontier makes its website usable for everyone: WCAG 2.1 AA practices, accessibility options on every page and how to request accessible formats.",
    ),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <SiteLayout>
      <SubHero eyebrow="Accessibility" title="Accessibility statement" />
      <Section>
        <Wrap className="max-w-[792px]">
          <Note>LAST UPDATED: 15 OCTOBER 2026</Note>
          <h2 className={h2}>Our commitment</h2>
          <p>
            NGYN AI Frontier is committed to providing a website that everyone can use, including people with disabilities. We follow the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, the standard referenced by the Accessibility for Ontarians with Disabilities Act (AODA) and used under the Americans with Disabilities Act (ADA).
          </p>
          <h2 className={h2}>What we do</h2>
          <DashList
            items={[
              "Clear headings, labels and landmarks for screen readers.",
              "Every feature works with a keyboard alone.",
              "Colour contrast, text sizing and zoom to 200% are checked.",
              "Images have text alternatives; animations can be paused.",
            ]}
          />
          <h2 className={h2}>Accessibility options on this site</h2>
          <p>
            The accessibility button on every page lets you change text size and spacing, switch to high contrast or a readable font, stop animations, use a reading guide and more. Your choices are saved in your browser only and work alongside your own tools, such as browser zoom and screen readers.
          </p>
          <h2 className={h2}>Accessible formats and communication supports</h2>
          <p>If you need any information on this site in another format, contact us and we will provide it in a timely manner at no cost.</p>
          <h2 className={h2}>Feedback</h2>
          <dl>
            <dt><strong>Email</strong></dt>
            <dd className="ml-0"><a className={a} href="mailto:info@mockup.ngynsolutions.com">info@mockup.ngynsolutions.com</a></dd>
            <dt><strong>Phone</strong></dt>
            <dd className="ml-0"><a className={a} href="tel:+19999999999">+1 999-999-9999</a></dd>
            <dt><strong>Mail</strong></dt>
            <dd className="ml-0">001 NoWhere Avenue, ON, G5G 0R0, Canada</dd>
          </dl>
          <p>We aim to respond within two business days.</p>
        </Wrap>
      </Section>
    </SiteLayout>
  );
}
