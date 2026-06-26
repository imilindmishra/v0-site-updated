import type { Metadata } from "next"
import { HeartPulse, Scale, Pill, Wind, TrendingDown, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeatureList } from "@/components/feature-list"

export const metadata: Metadata = {
  title: "Heart Failure Management",
  description:
    "Remote monitoring for heart failure patients. Reduce 30-day readmissions with AI-powered daily weight checks, diuretic adherence, and symptom triage.",
}

const voiceScenarios = [
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

const stats = [
  { value: "45%", label: "Expected Reduction in 30-Day Readmissions" },
  { value: "3.2x", label: "Projected Faster Symptom Detection" },
  { value: "89%", label: "Target Patient Engagement Rate" },
]

export default function HeartFailurePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              <HeartPulse className="h-4 w-4" />
              Cardiac Care
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Remote Monitoring for{" "}
              <span className="text-primary">Heart Failure</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Proactive voice AI that monitors heart failure patients daily,
              detects warning signs early, and reduces costly readmissions
              through consistent engagement.
            </p>
          </div>

          {/* Product screenshot */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">HF Readmission Platform</span>
              </div>
              <Image
                src="/images/hf-dashboard.png"
                alt="iClinic AI Heart Failure Readmission Platform dashboard showing 15 active patients, risk scores, weight trends, and active alerts"
                width={1870}
                height={760}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Voice Scenarios */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Voice Scenarios
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How iClinic AI Helps
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {voiceScenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <scenario.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {scenario.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Value */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Clinical Value
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Reducing 30-Day Readmissions
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Heart failure readmissions cost the US healthcare system over
                $17 billion annually. iClinic AI aims to help break this cycle through
                consistent patient engagement and early intervention.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Early Warning Detection
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Weight gain of 2+ lbs in 24 hours or 5+ lbs in a week
                    triggers immediate care team notification, preventing
                    emergency admissions.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center lg:text-left"
                >
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Expected Results
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projected Emergency Hospitalizations
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on pilot study projections
            </p>
          </div>

          {/* Simple Chart Visualization */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex items-end justify-between gap-8 h-64">
                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                  <span className="text-center text-2xl font-bold text-red-400">100%</span>
                  <div className="w-full rounded-t-lg bg-red-500/50" style={{ height: "100%" }} />
                </div>
                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                  <span className="text-center text-2xl font-bold text-primary">55%</span>
                  <div className="w-full rounded-t-lg bg-primary" style={{ height: "55%" }} />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-8">
                <span className="flex-1 text-center text-sm text-muted-foreground">Without iClinic AI</span>
                <span className="flex-1 text-center text-sm text-muted-foreground">With iClinic AI (Projected)</span>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingDown className="h-4 w-4 text-primary" />
                <span><strong className="text-primary">45%</strong> expected decrease in emergency hospitalizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Platform */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Inside the Platform
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A Complete Picture of Every Patient
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Each patient record brings together readmission risk, daily weight monitoring, active clinical alerts,
                and a full medical history in one place. Care teams can initiate a voice AI call or schedule an
                appointment without leaving the chart, and every reading syncs back to the EHR.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Live readmission risk scoring with rising/falling trend
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Weight monitoring against discharge and critical thresholds
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Actionable alerts for BNP, potassium, eGFR, and weight gain
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">Patient Detail</span>
              </div>
              <Image
                src="/images/hf-patient-detail.png"
                alt="iClinic AI patient detail view for a critical heart failure patient, showing active alerts, readmission risk score, weight monitoring, and patient information"
                width={1870}
                height={880}
                className="w-full"
              />
            </div>
          </div>
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
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to improve cardiac care outcomes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how iClinic AI can help your cardiology practice reduce readmissions
            and improve patient outcomes.
          </p>
          <div className="mt-8">
            <Link href="/about#demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Watch and Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
