import {
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Mic,
  Shield,
  Stethoscope,
} from "lucide-react"
import { AiCallPhone } from "@/components/graphics/AiCallPhone"
import { EhrFlow } from "@/components/graphics/EhrFlow"
import { SecurityShield } from "@/components/graphics/SecurityShield"
import { VoicemailLeak } from "@/components/graphics/VoicemailLeak"
import { GraphicScroller } from "@/components/graphic-scroller"
import { CardStack, StackCard } from "@/components/card-stack"
import { ProofStats } from "@/components/home/proof-stats"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"

const BOOKING_URL =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const eyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-primary"

const problemStats = [
  { num: 47, prefix: "", suffix: "", label: "Calls missed per day at a typical front desk" },
  { num: 25, prefix: "~$", suffix: "K", label: "Revenue lost per month to unanswered calls" },
  { num: 68, prefix: "", suffix: "%", label: "Of front-desk staff report burnout" },
]

const techSpecs = [
  {
    icon: Mic,
    title: "Voice AI engine",
    description:
      "Real-time voice recognition tuned for medical terminology and clinical workflows.",
  },
  {
    icon: FileText,
    title: "EHR integration",
    description:
      "Built to integrate with major EHR systems via FHIR and HL7 interoperability standards.",
  },
  {
    icon: Shield,
    title: "Security & privacy",
    description:
      "HIPAA-compliant architecture with end-to-end encryption and SOC 2 Type 2 controls.",
  },
  {
    icon: Calendar,
    title: "Smart scheduling",
    description:
      "Appointments booked, rescheduled, and confirmed by voice, with automated reminders designed to reduce no-shows.",
  },
  {
    icon: Stethoscope,
    title: "Intelligent triage",
    description:
      "Clinically informed protocols route and prioritize patients, escalating urgent cases to your staff.",
  },
  {
    icon: Clock,
    title: "Always available",
    description:
      "An always-on voice agent that answers day or night, and never calls in sick.",
  },
]

const securityItems = [
  { title: "HIPAA compliant", detail: "Business Associate Agreement signed with every clinic." },
  { title: "SOC 2 Type 2", detail: "Annual third-party audits of our security controls." },
  { title: "AES-256 encryption", detail: "Data encrypted at rest and in transit." },
  { title: "PHI redaction", detail: "Automated redaction before anything is stored." },
  { title: "US-only data centers", detail: "All data stays in US AWS regions." },
  { title: "Minimal retention", detail: "Voice data kept only as long as clinically needed." },
]

function BookACall({ large = false }: { large?: boolean }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary/90 hover-lift ${
        large ? "h-12 px-8 text-base" : "h-10 px-6 text-sm"
      }`}
    >
      Book a Call
      <ArrowRight className={large ? "h-5 w-5" : "h-4 w-4"} aria-hidden />
    </a>
  )
}

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero — the thesis */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card px-6 py-14 sm:px-10 md:py-20">
          <div className="grid items-center gap-12 xl:grid-cols-2">
            <Reveal>
              <p className={eyebrow}>Voice AI for clinics</p>
              <RevealText as="h1" className="mt-4 text-4xl tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                Every patient call answered. Every call written to the EHR.
              </RevealText>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                iClinic AI answers your clinic&apos;s phone 24/7 — booking appointments,
                handling refills, and triaging by voice — then writes a structured note
                straight back into your EHR over FHIR.
              </p>
              <div className="mt-8">
                <BookACall large />
              </div>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <AiCallPhone className="mx-auto my-4 xl:my-8" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem → mechanism → proof: a stacked run of three compact cards.
          The three StackCards are direct children of CardStack — a sticky
          element can only travel within its own parent's box, so wrapping
          each one in its own same-height <section> (the old structure) gave
          it zero room to move and silently no-opped the effect. Vertical
          rhythm now lives as margin-bottom on each card (in-flow spacing
          before it pins / the mobile-and-reduced-motion fallback gap)
          instead of section padding. Sticky-stacking is md+ and
          motion-allowed only (see .stack-card in globals.css); below that,
          or under reduced motion, these are just three normal cards in flow. */}
      <CardStack className="px-4 pt-20 pb-20 sm:px-6 md:pt-28 md:pb-28 lg:px-8">
        <StackCard
          index={0}
          className="mx-auto mb-6 max-w-7xl rounded-2xl border border-border bg-card px-6 py-6 sm:px-10 md:mb-8 md:py-6"
        >
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>The cost of a missed call</p>
            <RevealText as="h2" className="mt-2 text-3xl tracking-tight text-balance text-foreground md:text-4xl">
              Nothing goes to voicemail
            </RevealText>
            <p className="mt-2 text-base leading-snug text-muted-foreground md:text-lg">
              67% of patients who reach voicemail never call back. Missed calls mean
              missed revenue, delayed care, and a front desk burned out managing 200+
              calls a day. With iClinic AI, every call gets through.
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-4 max-w-[720px]">
            <GraphicScroller minWidth={720}>
              <VoicemailLeak className="h-auto w-full" />
            </GraphicScroller>
          </Reveal>
        </StackCard>

        <StackCard
          index={1}
          className="mx-auto mb-6 max-w-7xl rounded-2xl border border-border bg-card px-6 py-8 sm:px-10 md:mb-8 md:py-8"
        >
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Connected to your EHR</p>
            <RevealText as="h2" className="mt-2 text-3xl tracking-tight text-balance text-foreground md:text-4xl">
              From conversation to chart, automatically
            </RevealText>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every call is understood, structured, and written back to the patient&apos;s
              chart over FHIR — no transcribing, no sticky notes, no follow-up data entry.
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-6 max-w-[720px]">
            <GraphicScroller minWidth={720}>
              <EhrFlow className="h-auto w-full" />
            </GraphicScroller>
          </Reveal>
        </StackCard>

        <StackCard
          index={2}
          className="mx-auto max-w-7xl rounded-2xl border border-border bg-card px-6 py-14 sm:px-10 md:py-20"
        >
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Early deployment</p>
            <RevealText as="h2" className="mt-4 text-3xl tracking-tight text-balance text-foreground md:text-4xl">
              Real numbers from an early deployment
            </RevealText>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Measured during an early deployment — not projections. Every other figure on
              this site is a target.
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-12 max-w-4xl">
            <ProofStats />
          </Reveal>
        </StackCard>
      </CardStack>

      {/* The cost, in numbers — kept out of the stacked card so it stays
          well under the 85vh sticky-stack ceiling at desktop widths. */}
      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-4xl items-stretch gap-4 sm:grid-cols-3">
          {problemStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-muted p-6 text-center hover-lift">
                <CountUp
                  value={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  delay={i * 120}
                  className="text-3xl font-semibold tracking-tight text-destructive"
                />
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech grid */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Technology</p>
            <RevealText as="h2" className="mt-4 text-3xl tracking-tight text-balance text-foreground md:text-4xl">
              Built for healthcare
            </RevealText>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every component engineered for clinical precision and reliability.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techSpecs.map((spec, i) => {
              const Icon = spec.icon
              return (
                <Reveal key={spec.title} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 hover-lift">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                    <h3 className="mt-4 text-lg tracking-tight text-foreground">{spec.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {spec.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security band — the one dark section site-wide */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 xl:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Security &amp; compliance
              </p>
              <RevealText as="h2" className="mt-4 text-3xl tracking-tight text-balance text-card md:text-4xl">
                Patient data, protected end to end
              </RevealText>
              <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {securityItems.map((item) => (
                  <div key={item.title}>
                    <dt className="text-sm font-semibold text-card">{item.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-card/60">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <GraphicScroller minWidth={580}>
                <SecurityShield className="h-auto w-full" />
              </GraphicScroller>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-10 md:py-20">
          <Reveal>
            <p className={eyebrow}>Get started</p>
            <RevealText as="h2" className="mt-4 text-3xl tracking-tight text-balance text-foreground md:text-4xl">
              Hear it answer your clinic&apos;s calls
            </RevealText>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Book a call with our team and see how a voice agent fits your front desk,
              your EHR, and your patients.
            </p>
            <div className="mt-8 flex justify-center">
              <BookACall large />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
