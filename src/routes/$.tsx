// src/routes/$.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { pageHead } from "@/components/seo";
import { DashList, Lead, Section, SubHero, Wrap, linkInline } from "@/components/site-ui";

export const Route = createFileRoute("/$")({
  head: () =>
    pageHead(
      "Page Not Found | NGYN AI Frontier",
      "The page you were looking for could not be found. Explore Lean Six Sigma consulting, DMAIC process improvement and training from NGYN AI Frontier instead.",
      { noindex: true },
    ),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <SiteLayout>
      <SubHero eyebrow="Error 404" title="This page is out of control limits" />
      <Section>
        <Wrap className="max-w-[792px]">
          <Lead>The page you asked for does not exist or has moved.</Lead>
          <p>Try one of these instead:</p>
          <DashList
            items={[
              <Link className={linkInline} to="/">Home</Link>,
              <Link className={linkInline} to="/dmaic-process-improvement">DMAIC process improvement</Link>,
              <Link className={linkInline} to="/lean-six-sigma-small-business">Lean Six Sigma for small business</Link>,
              <Link className={linkInline} to="/lean-six-sigma-training">Lean Six Sigma training</Link>,
            ]}
          />
        </Wrap>
      </Section>
    </SiteLayout>
  );
}
