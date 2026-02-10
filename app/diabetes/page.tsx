import type { Metadata } from "next"
import { Activity, Droplets, Apple, Footprints, TrendingDown, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Diabetes Care Coordination",
  description:
    "Continuous support for metabolic health. AI-powered glucose monitoring, lifestyle coaching, and care coordination for better A1C outcomes.",
}

const voiceScenarios = [
  {
    icon: Droplets,
    title: "Glucose Reading Sync",
    description:
      "Automatic collection of glucose readings via voice. Patients simply tell iClinic AI their numbers, which sync directly to the EHR and trigger alerts for out-of-range values.",
  },
  {
    icon: Apple,
    title: "Lifestyle & Diet Coaching",
    description:
      "Non-judgmental daily check-ins about meals and activity. iClinic AI provides gentle guidance based on ADA recommendations and celebrates small wins.",
  },
  {
    icon: Footprints,
    title: "Foot Check Reminders",
    description:
      "Regular prompts for diabetic foot self-exams. Guides patients through the inspection process and flags concerns for podiatry follow-up.",
  },
]

const cgmDevices = [
  { name: "Dexcom G7", logo: "D" },
  { name: "Libre 3", logo: "L" },
  { name: "Medtronic", logo: "M" },
  { name: "Eversense", logo: "E" },
]

export default function DiabetesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              <Activity className="h-4 w-4" />
              Metabolic Health
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Continuous Support for{" "}
              <span className="text-primary">Metabolic Health</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Voice AI that makes diabetes management easier for patients and
              providers. Consistent, non-judgmental daily engagement that
              improves outcomes.
            </p>
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

      {/* Impact Section */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Impact
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A1C Level Improvement
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Consistent, non-judgmental daily check-ins create accountability
                without shame. Patients using iClinic AI are expected to show measurable improvements
                in glycemic control within 90 days.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <p className="text-4xl font-bold text-primary">0.8%</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Expected A1C Reduction
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <p className="text-4xl font-bold text-primary">92%</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Target Engagement Rate
                  </p>
                </div>
              </div>
            </div>

            {/* CGM Integration */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    CGM Device Integration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Direct sync via EHR connection
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                iClinic AI integrates with Dexcom, Libre, and other CGM devices
                through your EHR connection. Real-time glucose data informs
                conversation and triggers alerts.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {cgmDevices.map((device) => (
                  <div
                    key={device.name}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-bold text-primary">
                      {device.logo}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {device.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Visualization */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Expected Results
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projected A1C Improvement
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on pilot study projections over 6 months
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-border bg-background p-8">
              {/* Simple Line Chart Visualization */}
              <div className="relative h-48">
                <div className="absolute inset-0 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    {/* Baseline */}
                    <path
                      d="M 0 30 Q 100 35, 200 40 T 400 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-red-400/50"
                      strokeDasharray="5,5"
                    />
                    {/* With iClinic AI */}
                    <path
                      d="M 0 30 Q 100 50, 200 80 T 400 120"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-primary"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-6 bg-red-400/50" style={{ borderStyle: "dashed" }} />
                  <span className="text-muted-foreground">Without iClinic AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-6 bg-primary" />
                  <span className="text-muted-foreground">With iClinic AI (Projected)</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingDown className="h-4 w-4 text-primary" />
                <span>
                  Expected <strong className="text-primary">0.8% reduction</strong> in A1C levels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transform your diabetes care program
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how iClinic AI can improve patient outcomes and reduce the burden on
            your care team.
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
