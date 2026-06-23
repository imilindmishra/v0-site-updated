import type { Metadata } from "next"
import { PhoneCall, CalendarClock, Voicemail, PhoneForwarded, TrendingUp, Headphones } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "OmniAI - Clinic Phone Call Management",
  description:
    "OmniAI is the AI-powered phone call management system for clinics. Answer every call 24/7, book appointments, handle refills, and triage patients without overwhelming your front desk.",
}

const voiceScenarios = [
  {
    icon: PhoneCall,
    title: "Answer Every Call, 24/7",
    description:
      "OmniAI picks up every inbound call instantly, day or night. No more voicemail, no more hold music, no more missed patients or lost revenue.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling & Refills",
    description:
      "Patients can book, reschedule, or cancel appointments and request prescription refills through natural conversation, written straight into your EHR.",
  },
  {
    icon: PhoneForwarded,
    title: "Smart Routing & Triage",
    description:
      "Clinically validated protocols route urgent cases to the right staff in seconds and escalate emergencies, while routine requests are handled end to end.",
  },
]

const stats = [
  { value: "100%", label: "Calls Answered, Day or Night" },
  { value: "47", label: "Daily Missed Calls Recovered" },
  { value: "$25K", label: "Monthly Revenue Protected" },
]

export default function OmniAIPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Headphones className="h-4 w-4" />
              Phone Call Management
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Never Miss a Patient Call with{" "}
              <span className="text-primary">OmniAI</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              OmniAI is the AI voice agent that manages your clinic&apos;s entire
              phone line. It answers, schedules, triages, and documents every
              call directly in your EHR, so your front desk can focus on the
              patients in the room.
            </p>
          </div>
        </div>
      </section>

      {/* Voice Scenarios */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              What It Handles
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How OmniAI Helps
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

      {/* Operational Value */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Operational Value
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Relief for an Overwhelmed Front Desk
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                67% of patients who reach voicemail never call back. OmniAI
                ensures every call is answered and resolved, recovering lost
                revenue and reducing the burnout that drives staff turnover.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Voicemail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Zero Calls to Voicemail
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Every inbound call is answered on the first ring and either
                    resolved end to end or routed to the right person, so no
                    patient is ever left waiting.
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
              Projected Call Capture Rate
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on pilot deployment projections
            </p>
          </div>

          {/* Simple Chart Visualization */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex items-end justify-between gap-4 h-64">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-red-500/50 rounded-t-lg" style={{ height: "62%" }} />
                  <span className="text-sm text-muted-foreground">Without OmniAI</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-primary rounded-t-lg" style={{ height: "100%" }} />
                  <span className="text-sm text-muted-foreground">With OmniAI (Projected)</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span><strong className="text-primary">100%</strong> of calls answered versus an industry average of ~62%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to answer every call?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how OmniAI can take phone call management off your front
            desk&apos;s plate while improving patient access.
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
