import type { Metadata } from "next"
import { Brain, Heart, Pill, Puzzle, Users, Bell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dementia & Caregiver Support",
  description:
    "Compassionate AI for cognitive care. Support dementia patients and caregivers with medication reminders, respite support, and simple cognitive exercises.",
}

const voiceScenarios = [
  {
    icon: Heart,
    title: "Caregiver Respite Support",
    description:
      "Provides companionship calls that give caregivers much-needed breaks. iClinic AI engages patients in gentle conversation, reducing caregiver burnout.",
  },
  {
    icon: Pill,
    title: "Medication Reminders",
    description:
      "Patient, repetitive reminders delivered with warmth. Confirms medication intake and logs compliance for care team review.",
  },
  {
    icon: Puzzle,
    title: "Simple Cognitive Exercises",
    description:
      "Light memory games and orientation questions adapted to patient capability. Supports cognitive engagement without frustration.",
  },
]

const features = [
  {
    icon: Users,
    title: "Family Member Alerts",
    description:
      "Automated notifications sent to designated family members when concerning patterns emerge or appointments are missed.",
  },
  {
    icon: Bell,
    title: "PCP Portal Integration",
    description:
      "All interactions logged directly to the EHR, giving primary care physicians visibility into patient status between visits.",
  },
]

export default function DementiaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400">
              <Brain className="h-4 w-4" />
              Cognitive Care
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Compassionate AI for{" "}
              <span className="text-primary">Cognitive Care</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A patient and calm voice agent designed specifically for dementia
              patients. iClinic AI handles repetitive questions with grace and
              provides reliable support for both patients and caregivers.
            </p>
          </div>
        </div>
      </section>

      {/* Tone Section */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Approach
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Patience That Never Wavers
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background p-8">
              <p className="text-lg text-foreground leading-relaxed">
                iClinic AI&apos;s dementia care module is built with the{" "}
                <strong className="text-primary">iClinic dementia agent</strong>{" "}
                designed for repetitive interactions. The agent never shows
                frustration, maintains consistent warmth, and adapts to the
                patient&apos;s cognitive state in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Scenarios */}
      <section className="bg-background py-16 sm:py-20">
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
                className="rounded-2xl border border-border bg-card p-8"
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

      {/* Integration Section */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Integration
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Automated Alerts & Communication
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Keep the entire care team informed with automatic notifications
              through the EHR portal.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Support your dementia care practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how iClinic AI can provide compassionate support for patients and
            relief for caregivers.
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
