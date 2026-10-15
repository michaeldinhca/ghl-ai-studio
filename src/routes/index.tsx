// src/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ControlChart } from "@/components/control-chart";
import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { pageHead } from "@/components/seo";
import {
  BTN_GHOST, BTN_PRIMARY, DashList, DmaicStrip, Eyebrow, FaqSection, Grid, H1, H2, H3,
  ImageSlot, InfoCard, Lead, Note, Section, SectionHead, Split, Wrap,
} from "@/components/site-ui";

const FAQ = [
  ["What is Lean Six Sigma?", "Lean Six Sigma is a process improvement method that combines Lean, which removes waste and delay, with Six Sigma, which reduces variation and defects using data. Projects follow the DMAIC cycle: Define, Measure, Analyze, Improve and Control."],
  ["Is Lean Six Sigma only for large manufacturers?", "No. The same tools work in a five person service business, a clinic, a contractor or an office team. We scale the method down: shorter projects, lighter statistics and changes the team can run without a full time improvement department."],
  ["How long does a Lean Six Sigma project take?", "A focused project usually runs 6 to 12 weeks. Small business quick wins such as 5S or a Kaizen event can show results in one to two weeks."],
  ["Where does AI fit into Lean Six Sigma?", "We use AI and automation only where the data shows a gain: collecting measurements automatically, flagging out of control points early and removing repetitive handoffs. Process first, tools second."],
  ["Do I need a certified Black Belt on staff?", "No. We lead the project and coach your people as they go. If you want internal capability, our Yellow Belt and Green Belt training builds it."],
] as const;

const WASTES: Array<[string, string, string]> = [
  ["D", "Defects", "Rework, returns and errors that get fixed twice."],
  ["O", "Overproduction", "Making or preparing more than anyone ordered."],
  ["W", "Waiting", "Approvals, handoffs and idle equipment."],
  ["N", "Non used talent", "Skilled people stuck on manual busywork."],
  ["T", "Transport", "Moving material or files more than needed."],
  ["I", "Inventory", "Stock and backlog that ties up cash."],
  ["M", "Motion", "Searching, clicking and walking that adds no value."],
  ["E", "Extra processing", "Steps, reports and checks no customer pays for."],
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Lean Six Sigma Consulting for Any Business Size | NGYN",
      "Lean Six Sigma consulting for small and growing businesses. DMAIC projects, waste reduction and practical automation that cut cost and variation you can measure.",
      { faq: FAQ },
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[var(--brand-ink)] pb-[90px] pt-[150px] text-[var(--brand-on-dark)]">
        <Wrap>
          <div className="grid items-center gap-12 min-[901px]:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow onDark>Lean Six Sigma consulting</Eyebrow>
              <h1 className={H1}>Less waste. Less variation. Results you can measure.</h1>
              <Lead onDark>
                NGYN AI Frontier applies Lean Six Sigma to businesses of every size, from a ten person shop to a multi site operation. We measure the process, fix the causes and add practical automation only where the numbers prove it pays.
              </Lead>
              <div className="mt-7 flex flex-wrap gap-3.5">
                <a className={BTN_PRIMARY} href="#contact">Book a process review</a>
                <Link className={BTN_GHOST} to="/dmaic-process-improvement">See our DMAIC method</Link>
              </div>
            </div>
            <ControlChart />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-[18px]">
            {[
              ["DMAIC", "one proven method, every project"],
              ["6 to 12 weeks", "typical project length"],
              ["1 to 1,000+", "team sizes we work with"],
            ].map(([k, v]) => (
              <div key={k}>
                <strong className="block font-display text-[1.9rem] font-semibold text-[var(--brand-on-dark)]">{k}</strong>
                <span className="text-[0.9rem] text-[var(--brand-on-dark-muted)]">{v}</span>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <Section>
        <Wrap>
          <SectionHead
            eyebrow="The 8 wastes"
            title="Most cost hides in the process, not the people"
            lead="Lean names eight wastes, remembered as DOWNTIME. Every business has them. Our first job is to find which ones are costing you the most."
          />
          <Reveal className="grid gap-0.5 overflow-hidden rounded-[14px] border border-border bg-border [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            {WASTES.map(([l, t, d]) => (
              <div key={t} className="bg-background p-[22px]">
                <b className="font-display text-[2rem] font-semibold text-primary">{l}</b>
                <h3 className={H3}>{t}</h3>
                <p className="mt-1 text-[0.95rem] text-muted-foreground">{d}</p>
              </div>
            ))}
          </Reveal>
        </Wrap>
      </Section>

      <Section tone="dark" id="method">
        <Wrap>
          <SectionHead
            onDark
            eyebrow="How we work"
            title="Every project follows DMAIC"
            lead="Define, Measure, Analyze, Improve, Control. It keeps opinions out of the room and makes the gains stick after we leave."
          />
          <DmaicStrip
            onDark
            items={[
              ["D", "Define", "Agree the problem, the customer and the goal in one page."],
              ["M", "Measure", "Baseline the process with real data, not estimates."],
              ["A", "Analyze", "Prove the root causes with Pareto, fishbone and stats."],
              ["I", "Improve", "Pilot the fix, then roll it out with your team."],
              ["C", "Control", "Control charts and owners keep the gain in place."],
            ]}
          />
          <p className="mt-9">
            <Link className={BTN_GHOST} to="/dmaic-process-improvement">Read the full DMAIC guide</Link>
          </p>
        </Wrap>
      </Section>

      <Section id="services">
        <Wrap>
          <SectionHead eyebrow="Services" title="Three ways to start" />
          <Grid>
            <InfoCard tag="PROJECT" title="DMAIC process improvement" text="A consultant led project on one costly process, from baseline to control plan." more={{ to: "/dmaic-process-improvement", label: "DMAIC projects" }} />
            <InfoCard tag="SMALL BUSINESS" title="Lean for small teams" text="5S, Kaizen events and simple visual controls that a small team can run itself." more={{ to: "/lean-six-sigma-small-business", label: "Lean for small business" }} />
            <InfoCard tag="CAPABILITY" title="Belt training and coaching" text="Yellow Belt and Green Belt training built around a live project in your business." more={{ to: "/lean-six-sigma-training", label: "Training options" }} />
          </Grid>
        </Wrap>
      </Section>

      <Section tone="alt">
        <Split>
          <Reveal>
            <ImageSlot label="Team reviewing a process map on a whiteboard" slot="IMG-2" />
          </Reveal>
          <Reveal>
            <Eyebrow>Practical automation, measured</Eyebrow>
            <h2 className={H2}>Process first. Tools second.</h2>
            <Lead>Automating a broken process just makes the mistakes faster. We fix the flow first, then add automation where it removes a measured waste.</Lead>
            <DashList
              items={[
                "Capture measurements automatically instead of by clipboard",
                "Flag out of control points before customers notice",
                "Remove copy and paste handoffs between systems",
                "Every change tracked against the baseline from Measure",
              ]}
            />
          </Reveal>
        </Split>
      </Section>

      <Section>
        <Wrap>
          <SectionHead eyebrow="Illustrative results" title="What a finished project looks like">
            <Note>SAMPLE FIGURES FOR THIS TEST SITE, NOT REAL CLIENT RESULTS.</Note>
          </SectionHead>
          <Grid>
            <InfoCard quote="Quote turnaround cut from 4 days to 1." text="12 person contractor, Measure found 70% of delay was waiting for one approval." />
            <InfoCard quote="Order errors down 63% in 10 weeks." text="Distributor, Pareto showed two SKUs and one form field caused most defects." />
            <InfoCard quote="Clinic wait time down 28 minutes." text="Multi site clinic, Kaizen event rebuilt check in around patient flow." />
          </Grid>
        </Wrap>
      </Section>

      <FaqSection id="faq" title="Lean Six Sigma questions, answered" items={FAQ} />
      <ContactSection />
    </SiteLayout>
  );
}

