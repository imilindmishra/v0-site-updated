import type { Metadata } from "next"
import { PhoneCall, CalendarClock, PhoneForwarded, Voicemail } from "lucide-react"
import { FeatureList } from "@/components/feature-list"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { AnsweredCall } from "@/components/graphics/AnsweredCall"
import { EhrFlow } from "@/components/graphics/EhrFlow"
import { GraphicScroller } from "@/components/graphic-scroller"
import { LiveStats } from "@/components/omniai/live-stats"
import { RingCompare } from "@/components/ring-compare"

export const metadata: Metadata = {
  title: "OmniAI - Clinic Phone Call Management",
  description:
    "OmniAI is the AI-powered phone call management system for clinics. Answer every call 24/7, book appointments, handle refills, and triage patients without overwhelming your front desk.",
}

const CALENDAR_URL =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const ctaClass =
  "hover-lift inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"

const scenarios = [
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

const coverageStats = [
  { value: "24/7", label: "Always-on call coverage" },
  { value: "0", label: "Calls sent to voicemail" },
  { value: "Instant", label: "Pickup on every ring" },
]

const transcriptPoints = [
  "Natural, human-like conversations with spell-back confirmation",
  "Full transcript and audio playback for every call",
  "Summaries and outcomes linked to the patient and doctor",
]

export default function OmniAIPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Phone Call Management
            </p>
            <RevealText as="h1" className="mt-4 text-balance text-4xl tracking-tight text-foreground sm:text-5xl">
              Never Miss a Patient Call with <span className="text-primary">OmniAI</span>
            </RevealText>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              OmniAI is the AI voice agent that manages your clinic&apos;s entire phone line. It
              answers, schedules, triages, and documents every call directly in your EHR, so your
              front desk can focus on the patients in the room.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className={ctaClass}>
                Book a Call
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
            <GraphicScroller minWidth={540}>
              <AnsweredCall className="h-auto w-full" />
            </GraphicScroller>
          </Reveal>
        </div>
      </section>

      {/* Live numbers — the only unhedged stats on the site */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              From an Early Deployment
            </p>
            <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              Real Numbers, Not Projections
            </RevealText>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Measured during an early deployment — actual usage, not projections.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <LiveStats />
          </Reveal>
        </div>
      </section>

      {/* What it handles */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What It Handles
            </p>
            <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              How OmniAI Helps
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

      {/* Connected to your EHR */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Asymmetric on purpose: EhrFlow is a 640-unit horizontal flow and a
              50/50 track (576px, minus the card's own padding) is ~80px short of
              rendering its labels at 12px. */}
          <div className="grid items-center gap-12 xl:grid-cols-[1fr_1.45fr] xl:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Connected to Your EHR
              </p>
              <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
                Every Call, Transcribed and Documented
              </RevealText>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                OmniAI captures a full transcript of every conversation, confirms details like
                patient names back to the caller, and summarizes the outcome. Each call can be
                played back, reviewed, and linked to the right doctor, with notes written into your
                EHR automatically.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {transcriptPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <GraphicScroller minWidth={591}>
                  <EhrFlow className="h-auto w-full" />
                </GraphicScroller>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Operational value */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Operational Value
              </p>
              <RevealText as="h2" className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
                Relief for an Overwhelmed Front Desk
              </RevealText>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Many patients who reach voicemail never call back. OmniAI ensures every call is
                answered and resolved, helping recover lost revenue and reducing the burnout that
                drives staff turnover.
              </p>
              <div className="hover-lift mt-8 flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Voicemail className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Zero Calls to Voicemail</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Every inbound call is answered on the first ring and either resolved end to end
                    or routed to the right person, so no patient is ever left waiting.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {coverageStats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80}>
                  <div className="hover-lift rounded-2xl border border-border bg-card p-6 text-center lg:text-left">
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
              Projected Call Capture Rate
            </RevealText>
            <p className="mt-4 text-sm text-muted-foreground">Based on pilot deployment projections</p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
            <RingCompare
              outer={{ label: "With OmniAI", value: 100, detail: "100 of 100 answered" }}
              inner={{ label: "A typical front desk", value: 62, detail: "62 of 100 answered" }}
              centerUnit="per 100 calls"
              note="Projected from early-deployment call logs."
              ariaLabel="Ring comparison: a typical front desk answers 62% of calls; with OmniAI, 100% of calls are answered."
            />
          </Reveal>
        </div>
      </section>

      <FeatureList
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
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <RevealText as="h2" className="text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              Ready to answer every call?
            </RevealText>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how OmniAI can take phone call management off your front desk&apos;s plate while
              improving patient access.
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
