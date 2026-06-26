import type { Metadata } from "next"
import { PhoneCall, CalendarClock, Voicemail, PhoneForwarded, TrendingUp, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeatureList } from "@/components/feature-list"

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
  { value: "24/7", label: "Always-On Call Coverage" },
  { value: "0", label: "Calls Sent to Voicemail" },
  { value: "Instant", label: "Pickup on Every Ring" },
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
            <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Currently in early production — deployed and tested in a live clinical setting
            </p>
          </div>

          {/* Product screenshot */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">OmniAI — Calls</span>
              </div>
              <Image
                src="/images/omniai-calls-dashboard.png"
                alt="OmniAI calls dashboard showing patient call list, call summary, audio transcript, call stats, and call history for Dr. VJ's Cardiology Clinic"
                width={1870}
                height={947}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Numbers */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">From a Live Deployment</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real Numbers from the Clinic Floor
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">125</p>
              <p className="mt-2 text-sm font-medium text-foreground">Calls Handled</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">1.83 min</p>
              <p className="mt-2 text-sm font-medium text-foreground">Average Time per Call</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 text-center">
              <p className="text-4xl font-bold text-primary">228.9 min</p>
              <p className="mt-2 text-sm font-medium text-foreground">Staff Minutes Saved</p>
            </div>
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
                Many patients who reach voicemail never call back. OmniAI
                ensures every call is answered and resolved, helping recover
                lost revenue and reducing the burnout that drives staff turnover.
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
              <div className="flex items-end justify-between gap-8 h-64">
                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                  <span className="text-center text-2xl font-bold text-foreground">62%</span>
                  <div className="w-full rounded-t-lg bg-muted-foreground/40" style={{ height: "62%" }} />
                </div>
                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                  <span className="text-center text-2xl font-bold text-primary">100%</span>
                  <div className="w-full rounded-t-lg bg-primary" style={{ height: "100%" }} />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-8">
                <span className="flex-1 text-center text-sm text-muted-foreground">Without OmniAI</span>
                <span className="flex-1 text-center text-sm text-muted-foreground">With OmniAI (Projected)</span>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span><strong className="text-primary">100%</strong> of calls answered versus an industry average of ~62%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screens */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Inside OmniAI</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Every Call, Transcribed and Documented
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                OmniAI captures a full transcript of every conversation, confirms details like patient names back to the
                caller, and summarizes the outcome. Each call can be played back, reviewed, and linked to the right
                doctor, with notes written into your EHR automatically.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Natural, human-like conversations with spell-back confirmation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Full transcript and audio playback for every call
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Summaries and outcomes linked to the patient and doctor
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">Full Transcript</span>
              </div>
              <Image
                src="/images/omniai-transcript.png"
                alt="OmniAI full call transcript showing a conversation between Laura, the virtual medical assistant, and a patient booking a new visit, with audio playback"
                width={826}
                height={742}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureList
        variant="card"
        title="What You Can Do with OmniAI"
        description="Plain and simple, here is what OmniAI does for your front desk."
        features={[
          "Answer every inbound call 24/7, with no voicemail or hold music",
          "Let patients book, reschedule, or cancel appointments by voice",
          "Take prescription refill requests and route them for approval",
          "Triage symptoms and escalate urgent calls to the right staff",
          "Automatically write call notes and outcomes back to your EHR",
          "Send appointment confirmations and reminders to cut no-shows",
          "Review a live dashboard of every call and its resolution",
          "Answer common questions about hours, location, and insurance",
        ]}
      />

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
