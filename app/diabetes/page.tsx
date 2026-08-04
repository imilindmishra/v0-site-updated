import type { Metadata } from "next"
import { Droplets, Apple, Footprints, Smartphone } from "lucide-react"
import { DiabetesLoop } from "@/components/graphics/DiabetesLoop"
import { GraphicScroller } from "@/components/graphic-scroller"
import { DiabetesStats } from "@/components/diabetes/stat-cards"
import { FeatureList } from "@/components/feature-list"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"

export const metadata: Metadata = {
  title: "Diabetes Care Coordination",
  description:
    "Continuous support for metabolic health. AI-powered glucose monitoring, lifestyle coaching, and care coordination for better A1C outcomes.",
}

const bookingUrl =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const ctaClasses =
  "hover-lift inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"

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

const cgmDevices = ["Dexcom G7", "FreeStyle Libre 3", "Medtronic Guardian 4", "Eversense E3"]

export default function DiabetesPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Droplets className="h-4 w-4" aria-hidden="true" />
              Metabolic Health
            </p>
            <RevealText as="h1" className="mt-4 text-balance text-4xl tracking-tight text-foreground sm:text-5xl">
              Continuous Support for <span className="text-primary">Metabolic Health</span>
            </RevealText>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Voice AI that makes diabetes management easier for patients and
              providers. Consistent, non-judgmental daily engagement designed to
              improve outcomes.
            </p>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
            <GraphicScroller minWidth={750}>
              <DiabetesLoop className="h-auto w-full" />
            </GraphicScroller>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              A CGM reading syncs by voice and plots against the target range, the
              agent shares a bit of guidance, and the A1C goal ring advances.
            </p>
          </Reveal>

          <div className="mt-10 text-center">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={ctaClasses}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Voice scenarios */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Voice Scenarios</p>
            <RevealText as="h2" className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
              How iClinic AI Helps
            </RevealText>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {voiceScenarios.map((scenario, i) => (
              <Reveal key={scenario.title} delay={i * 100} className="hover-lift rounded-2xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <scenario.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl text-foreground">{scenario.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{scenario.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact + CGM integration */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Projected Impact</p>
              <RevealText as="h2" className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
                A1C Level Improvement
              </RevealText>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Consistent, non-judgmental daily check-ins create accountability
                without shame. Patients using iClinic AI are expected to show
                measurable improvements in glycemic control within 90 days.
              </p>
              <div className="mt-8">
                <DiabetesStats />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Targets based on pilot-study projections over six months.
              </p>
            </Reveal>

            <Reveal delay={100} className="hover-lift rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-foreground">CGM Device Integration</h3>
                  <p className="text-sm text-muted-foreground">Direct sync via EHR connection</p>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">
                iClinic AI is built to integrate with continuous glucose
                monitors through your EHR connection, so glucose data can inform
                conversation and trigger alerts.
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cgmDevices.map((device) => (
                  <li
                    key={device}
                    className="rounded-lg border border-border bg-muted px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {device}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureList
        title="What You Can Do with Diabetes Management"
        description="A straightforward look at how the program supports your patients."
        features={[
          "Run daily or scheduled glucose and symptom check-in calls",
          "Send personalized medication and insulin reminders",
          "Offer simple, non-judgmental diet and activity coaching",
          "Connect with CGM data through the EHR to inform conversations",
          "Flag dangerous highs and lows and alert the care team",
          "Track A1C goals and trends over time on a dashboard",
          "Log every reading and conversation back to the patient chart",
          "Keep patients engaged between visits to improve adherence",
        ]}
      />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <RevealText as="h2" className="text-3xl tracking-tight text-foreground sm:text-4xl">
              Transform your diabetes care program
            </RevealText>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how iClinic AI can improve patient outcomes and reduce the
              burden on your care team.
            </p>
            <div className="mt-8">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={ctaClasses}>
                Book a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
