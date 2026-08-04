import type { Metadata } from "next"
import { HeartPulse, Scale, Pill, Wind, AlertTriangle } from "lucide-react"
import { FeatureList } from "@/components/feature-list"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { HeartFailureLoop } from "@/components/graphics/HeartFailureLoop"
import { GapChart } from "@/components/gap-chart"
import { GraphicScroller } from "@/components/graphic-scroller"

export const metadata: Metadata = {
  title: "Heart Failure Management",
  description:
    "Remote monitoring for heart failure patients. Reduce 30-day readmissions with AI-powered daily weight checks, diuretic adherence, and symptom triage.",
}

const CALENDAR_URL =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const ctaClass =
  "hover-lift inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"

const scenarios = [
  {
    icon: Scale,
    title: "Daily Weight Checks",
    description:
      "Automated morning calls to collect weight measurements. iClinic AI detects concerning trends and alerts care teams before symptoms escalate.",
  },
  {
    icon: Pill,
    title: "Diuretic Adherence",
    description:
      "Gentle reminders for medication compliance with smart follow-ups. Track adherence patterns and intervene early on non-compliance.",
  },
  {
    icon: Wind,
    title: "Symptom Triage (Shortness of Breath)",
    description:
      "Intelligent symptom assessment using clinical protocols. Escalates to care team when SOB severity increases beyond baseline.",
  },
]

// All hedged — target/projected only; no live deployment for this vertical.
const stats = [
  { value: "45%", label: "Expected reduction in 30-day readmissions" },
  { value: "3.2x", label: "Projected faster symptom detection" },
  { value: "89%", label: "Target patient engagement rate" },
]

const platformPoints = [
  "Live readmission risk scoring with rising/falling trend",
  "Weight monitoring against discharge and critical thresholds",
  "Actionable alerts for BNP, potassium, eGFR, and weight gain",
]

export default function HeartFailurePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <HeartPulse className="h-4 w-4" aria-hidden />
              Cardiac Care
            </p>
            <RevealText as="h1" className="mt-4 text-balance text-4xl tracking-tight text-foreground sm:text-5xl">
              Remote Monitoring for <span className="text-primary">Heart Failure</span>
            </RevealText>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Proactive voice AI that monitors heart failure patients daily, detects warning signs
              early, and reduces costly readmissions through consistent engagement.
            </p>
            <div className="mt-8">
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className={ctaClass}>
                Book a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The monitoring loop */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Monitoring Loop
              </p>
              <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
                A Complete Picture of Every Patient
              </RevealText>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Each patient record brings together readmission risk, daily weight monitoring,
                active clinical alerts, and a full medical history in one place. Care teams can
                initiate a voice AI call or schedule an appointment without leaving the chart, and
                every reading syncs back to the EHR.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {platformPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <GraphicScroller minWidth={560}>
                <HeartFailureLoop className="h-auto w-full" />
              </GraphicScroller>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Voice scenarios */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Voice Scenarios
            </p>
            <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              How iClinic AI Helps
            </RevealText>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {scenarios.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <s.icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl text-foreground">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical value */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
            <Reveal className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Clinical Value
              </p>
              <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
                Reducing 30-Day Readmissions
              </RevealText>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Heart failure readmissions cost the US healthcare system over $17 billion annually.
                iClinic AI aims to help break this cycle through consistent patient engagement and
                early intervention.
              </p>

              {/* Amber early-warning callout — the one warn usage */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl bg-warn-bg p-6 lg:mt-auto">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card">
                  <AlertTriangle className="h-5 w-5 text-warn" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-warn">Early Warning Detection</h3>
                  <p className="mt-2 text-sm text-warn/80">
                    Weight gain of 2+ lbs in 24 hours or 5+ lbs in a week triggers immediate care
                    team notification, preventing emergency admissions.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80} className="h-full">
                  <div className="hover-lift flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-6 text-center lg:text-left">
                    <p className="text-4xl font-semibold text-primary">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected results */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Expected Results
            </p>
            <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              Projected Emergency Hospitalizations
            </RevealText>
            <p className="mt-4 text-sm text-muted-foreground">Based on pilot study projections</p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
            <GapChart
              baseline={100}
              value={55}
              baselineLabel="without monitoring"
              avoidedLabel="avoided"
              ariaLabel="Without monitoring, 100 of 100 patients are hospitalized. With iClinic AI, 55 of 100 are hospitalized — 45 admissions avoided."
            />
          </Reveal>
        </div>
      </section>

      <FeatureList
        title="What You Can Do with Heart Failure Monitoring"
        description="A clear picture of what the program does for your patients and care team."
        features={[
          "Run automated daily voice check-ins for weight and symptoms",
          "Capture daily weights and flag concerning trends automatically",
          "Send gentle medication and diuretic adherence reminders",
          "Triage shortness of breath and other symptoms with clinical protocols",
          "Alert the care team early when weight gain crosses safe thresholds",
          "Surface at-risk patients on a monitoring dashboard with vitals",
          "Log every check-in and reading back to the patient chart",
          "Reduce avoidable 30-day readmissions through early intervention",
        ]}
      />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <RevealText as="h2" className="text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              Ready to improve cardiac care outcomes?
            </RevealText>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how iClinic AI can help your cardiology practice reduce readmissions and improve
              patient outcomes.
            </p>
            <div className="mt-8">
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className={ctaClass}>
                Book a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
