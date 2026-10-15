// src/routes/lean-six-sigma-small-business.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { pageHead } from "@/components/seo";
import {
  DashList, Eyebrow, FaqSection, Grid, H2, ImageSlot, InfoCard, Section, SectionHead, Split, SubHero, Wrap, linkInline,
} from "@/components/site-ui";

const FAQ = [
  ["Can a small business use Lean Six Sigma?", "Yes. Small businesses often see results faster than large ones because decisions are quick and the process is visible end to end. We use the lighter Lean tools first and bring in statistics only when the problem needs them."],
  ["What is the easiest Lean tool to start with?", "5S (Sort, Set in order, Shine, Standardize, Sustain) is the usual starting point. It needs no software, takes days, and makes every later improvement easier to see."],
  ["What is a Kaizen event?", "A Kaizen event is a focused improvement workshop, usually two to five days, where the people who do the work redesign one process and implement the change before the week ends."],
  ["How much does Lean Six Sigma consulting cost for a small business?", "It depends on scope. For this test site the figures are placeholders: a process review is a fixed fee, and projects are quoted after the Define phase so you know the cost before committing."],
] as const;

export const Route = createFileRoute("/lean-six-sigma-small-business")({
  head: () =>
    pageHead(
      "Lean Six Sigma for Small Business | NGYN AI Frontier",
      "Lean Six Sigma for small business without corporate overhead. 5S, Kaizen events and DMAIC scaled to teams of 1 to 250 people, with quick wins in two weeks.",
      { faq: FAQ },
    ),
  component: SmallBusinessPage,
});

function SmallBusinessPage() {
  return (
    <SiteLayout>
      <SubHero
        eyebrow="Lean Six Sigma for small business"
        title="Lean Six Sigma for small business, without the corporate overhead"
        lead="You do not need a quality department to run Lean Six Sigma. We bring the method down to the size of your team: short projects, plain language and fixes your people can keep running."
        image={{
          label: "Small business team planning work around a table",
          slot: "IMG-5",
        }}
      />

      <Section>
        <Wrap>
          <SectionHead eyebrow="By business size" title="Same method, scaled to you" />
          <Grid>
            <InfoCard tag="1 TO 10 PEOPLE" title="Owner led" text="The owner is the bottleneck. We map where your time goes and standardize the work others can take over." />
            <InfoCard tag="11 TO 50 PEOPLE" title="Growing team" text="Handoffs multiply and quality drifts. We set standard work, visual boards and one DMAIC project on the costliest process." />
            <InfoCard tag="51 TO 250 PEOPLE" title="Scaling operation" text="Departments optimize alone. We run cross functional value stream mapping and train internal Green Belts." />
            <InfoCard tag="250+ PEOPLE" title="Multi site" text="Variation between sites. We build a project pipeline, a control dashboard and a belt program." />
          </Grid>
        </Wrap>
      </Section>

      <Section tone="alt">
        <Split>
          <Reveal>
            <ImageSlot label="Organized shared workspace with labelled storage" slot="IMG-6" />
          </Reveal>
          <Reveal>
            <Eyebrow>Quick wins</Eyebrow>
            <h2 className={H2}>Results in the first two weeks</h2>
            <DashList
              items={[
                <><strong>5S workplace organization</strong>: less searching, fewer errors</>,
                <><strong>Kaizen event</strong>: one process redesigned and live in a week</>,
                <><strong>Visual management board</strong>: problems seen the same day</>,
                <><strong>Standard work</strong>: the best way written down and trained</>,
                <><strong>Simple automation</strong>: one repeated manual step removed</>,
              ]}
            />
          </Reveal>
        </Split>
      </Section>

      <FaqSection
        tone="light"
        title="Small business questions"
        items={FAQ}
        footer={
          <>
            Want your team to run this on their own? See <Link className={linkInline} to="/lean-six-sigma-training">Lean Six Sigma training</Link>.
          </>
        }
      />
      <ContactSection heading="Find your biggest waste in two weeks" />
    </SiteLayout>
  );
}
