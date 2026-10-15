// src/routes/thank-you.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { pageHead } from "@/components/seo";
import { BTN_PRIMARY, Lead, Section, SubHero, Wrap, linkInline } from "@/components/site-ui";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    pageHead(
      "Thank You | NGYN AI Frontier",
      "Thanks for requesting a Lean Six Sigma process review from NGYN AI Frontier. We will reply within one business day to schedule a time that works for you.",
      { noindex: true },
    ),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SiteLayout>
      <SubHero eyebrow="Thank you" title="Thanks. Your request is in." />
      <Section>
        <Wrap className="max-w-[792px]">
          <Lead>We will reply within one business day to schedule your process review.</Lead>
          <p>
            While you wait, read how a project runs in our <Link className={linkInline} to="/dmaic-process-improvement">DMAIC guide</Link>.
          </p>
          <p>
            <Link className={BTN_PRIMARY} to="/">Back to home</Link>
          </p>
        </Wrap>
      </Section>
    </SiteLayout>
  );
}
