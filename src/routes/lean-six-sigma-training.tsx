// src/routes/lean-six-sigma-training.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactSection } from "@/components/contact-section";
import { pageHead } from "@/components/seo";
import { DataTable, FaqSection, Grid, InfoCard, Note, Section, SectionHead, SubHero, Wrap, linkInline } from "@/components/site-ui";

const FAQ = [
  ["What is the difference between Yellow Belt and Green Belt?", "A Yellow Belt understands Lean Six Sigma basics and supports projects. A Green Belt leads improvement projects part time using the full DMAIC toolkit, including basic statistics."],
  ["How long does Green Belt training take?", "Our Green Belt program runs over about 8 weeks alongside a live project in your business, so the training pays for itself through the project result."],
  ["Is training delivered online or in person?", "Both. Classroom sessions can be on site or live online, and coaching happens on your real process."],
  ["Do I need statistics experience for Lean Six Sigma training?", "No. Yellow Belt needs none. Green Belt teaches the statistics you need, with templates that do the calculations."],
] as const;

export const Route = createFileRoute("/lean-six-sigma-training")({
  head: () =>
    pageHead(
      "Lean Six Sigma Training: Yellow & Green Belt | NGYN",
      "Lean Six Sigma Yellow Belt and Green Belt training built around a live project in your business. Learn DMAIC on your own data and finish with a measured result.",
      { faq: FAQ },
    ),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <SiteLayout>
      <SubHero
        eyebrow="Lean Six Sigma training"
        title="Lean Six Sigma training built around your own project"
        lead="Yellow Belt and Green Belt training where every exercise uses your real data. Your people finish with a skill, and your business finishes with a completed improvement."
        image={{
          label: "Instructor leading a training session with a small group",
          slot: "IMG-7",
        }}
      />

      <Section>
        <Wrap>
          <SectionHead eyebrow="Belt levels" title="Choose the right level" />
          <DataTable
            head={["Level", "Who it is for", "Length", "Outcome"]}
            rows={[
              ["White Belt", "Whole team awareness", "Half day", "Shared language for waste and improvement"],
              ["Yellow Belt", "Team members and supervisors", "2 days", "Can support projects and run 5S and Kaizen"],
              ["Green Belt", "Managers and process owners", "About 8 weeks with a live project", "Leads a full DMAIC project with data"],
              ["Coaching", "Internal improvement leads", "Ongoing", "Project pipeline and review support"],
            ]}
          />
          <Note className="mt-3">COURSE LENGTHS ARE SAMPLE VALUES FOR THIS TEST SITE.</Note>
        </Wrap>
      </Section>

      <Section tone="dark">
        <Wrap>
          <SectionHead onDark eyebrow="How training runs" title="Learn, apply, prove" />
          <Grid>
            <InfoCard onDark tag="01 LEARN" title="Short sessions" text="Concepts taught in focused blocks, never a week of slides." />
            <InfoCard onDark tag="02 APPLY" title="Your process" text="Each tool is used on your own data the same week." />
            <InfoCard onDark tag="03 PROVE" title="Project review" text="Completion means a measured result, not just an exam." />
          </Grid>
        </Wrap>
      </Section>

      <FaqSection
        title="Training questions"
        items={FAQ}
        footer={
          <>
            See how a full project runs in our <Link className={linkInline} to="/dmaic-process-improvement">DMAIC guide</Link>.
          </>
        }
      />
      <ContactSection heading="Build improvement skills in your own team" />
    </SiteLayout>
  );
}
