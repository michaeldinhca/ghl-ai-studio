// src/routes/dmaic-process-improvement.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactSection } from "@/components/contact-section";
import { Reveal } from "@/components/reveal";
import { pageHead } from "@/components/seo";
import {
  DashList, DataTable, DmaicStrip, Eyebrow, FaqSection, H2, ImageSlot, Lead, Section, SectionHead, Split, SubHero, Wrap, linkInline,
} from "@/components/site-ui";

const FAQ = [
  ["What does DMAIC stand for?", "DMAIC stands for Define, Measure, Analyze, Improve and Control. It is the five phase problem solving cycle at the heart of Six Sigma, used to improve an existing process."],
  ["What is the difference between DMAIC and DMADV?", "DMAIC improves a process that already exists. DMADV (Define, Measure, Analyze, Design, Verify) is used to design a new process or product from scratch."],
  ["Which tools are used in each DMAIC phase?", "Common tools are a project charter and SIPOC in Define, value stream maps and measurement system analysis in Measure, Pareto charts, fishbone diagrams and hypothesis tests in Analyze, pilots and mistake proofing in Improve, and control charts with a control plan in Control."],
  ["How do you know a DMAIC project worked?", "We compare the controlled process to the baseline captured in Measure, using the same metric and the same data source. If the gain does not hold for at least one full cycle, the project is not closed."],
] as const;

export const Route = createFileRoute("/dmaic-process-improvement")({
  head: () =>
    pageHead(
      "DMAIC Process Improvement Consulting | NGYN AI Frontier",
      "DMAIC explained phase by phase: Define, Measure, Analyze, Improve, Control. See the tools, a 10 week timeline and what you receive from each Six Sigma phase.",
      { faq: FAQ },
    ),
  component: DmaicPage,
});

function DmaicPage() {
  return (
    <SiteLayout>
      <SubHero
        eyebrow="DMAIC process improvement"
        title="DMAIC: a five phase method to fix processes for good"
        lead="DMAIC is the Six Sigma cycle for improving an existing process: Define, Measure, Analyze, Improve, Control. Here is exactly what we do in each phase, the tools we use and what you get at the end."
        image={{
          label: "Consultant pointing at process data on a wall during a workshop",
          slot: "IMG-3",
        }}
      />

      <Section>
        <Wrap>
          <SectionHead eyebrow="The five phases" title="What happens in each phase" />
          <DataTable
            caption="Typical project: 6 to 12 weeks."
            head={["Phase", "Question answered", "Key tools", "You receive"]}
            rows={[
              ["Define", "What problem, for which customer, worth how much?", "Project charter, SIPOC, voice of the customer", "One page charter with goal and scope"],
              ["Measure", "How does the process perform today?", "Value stream map, data collection plan, measurement system analysis", "Trusted baseline and current sigma level"],
              ["Analyze", "What actually causes the problem?", "Pareto, fishbone, 5 Whys, regression, hypothesis tests", "Verified root causes, ranked by impact"],
              ["Improve", "Which fix works, proven on a pilot?", "Kaizen, mistake proofing, pilot runs, future state map", "Tested solution and rollout plan"],
              ["Control", "How do we keep the gain?", "Control charts, standard work, control plan, automated alerts", "Owned control plan and monitoring"],
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="dark">
        <Wrap>
          <SectionHead onDark eyebrow="Timeline" title="A sample 10 week DMAIC project" />
          <DmaicStrip
            onDark
            items={[
              ["1", "Week 1", "Charter signed, team and sponsor named."],
              ["2", "Weeks 2 to 3", "Process walked, mapped and baselined."],
              ["3", "Weeks 4 to 5", "Root causes tested with data."],
              ["4", "Weeks 6 to 8", "Pilot, adjust, then roll out."],
              ["5", "Weeks 9 to 10", "Control plan handed to owners."],
            ]}
          />
        </Wrap>
      </Section>

      <Section>
        <Split>
          <Reveal>
            <Eyebrow>Control phase</Eyebrow>
            <h2 className={H2}>Where automation earns its place</h2>
            <Lead>The Control phase is where most improvements quietly fade. We automate the monitoring so drift is caught in days, not quarters.</Lead>
            <DashList
              items={[
                "Live control charts fed from your existing systems",
                "Alerts when a point breaks a control limit or a run rule",
                "Monthly capability report without manual spreadsheets",
              ]}
            />
          </Reveal>
          <Reveal>
            <ImageSlot label="Dashboard with process performance charts on a laptop" slot="IMG-4" />
          </Reveal>
        </Split>
      </Section>

      <FaqSection
        title="DMAIC questions"
        items={FAQ}
        footer={
          <>
            Running a smaller team? See <Link className={linkInline} to="/lean-six-sigma-small-business">Lean Six Sigma for small business</Link>.
          </>
        }
      />
      <ContactSection heading="Pick one process. We will run DMAIC on it." />
    </SiteLayout>
  );
}
