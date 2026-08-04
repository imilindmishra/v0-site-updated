import type { Metadata } from "next"
import { HeartHandshake, Heart, Pill, Puzzle, Users, Bell } from "lucide-react"
import { DementiaLoop } from "@/components/graphics/DementiaLoop"
import { GraphicScroller } from "@/components/graphic-scroller"
import { FeatureList } from "@/components/feature-list"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"

export const metadata: Metadata = {
  title: "Dementia & Caregiver Support",
  description:
    "Compassionate AI for cognitive care. Support dementia patients and caregivers with medication reminders, respite support, and simple cognitive exercises.",
}

const bookingUrl =
  "https://outlook.office.com/book/iClinicDemo@imedclinic.ai/"

const ctaClasses =
  "hover-lift inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"

const voiceScenarios = [
  {
    icon: Heart,
    title: "Caregiver Respite Support",
    description:
      "Companionship calls that give caregivers much-needed breaks. The iClinic dementia agent engages patients in gentle conversation, reducing caregiver burnout.",
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

const integrations = [
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
    <div className="flex flex-col bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              Cognitive Care
            </p>
            <RevealText as="h1" className="mt-4 text-balance text-4xl tracking-tight text-foreground sm:text-5xl">
              Compassionate AI for <span className="text-primary">Cognitive Care</span>
            </RevealText>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A patient and calm voice agent designed specifically for dementia
              patients. The iClinic dementia agent handles repetitive questions
              with grace and provides reliable support for both patients and
              caregivers.
            </p>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
            <GraphicScroller minWidth={620}>
              <DementiaLoop className="h-auto w-full" />
            </GraphicScroller>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              A warm scheduled call delivers the medication reminder, and the
              family caregiver is notified — gently, every day.
            </p>
          </Reveal>

          <div className="mt-10 text-center">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={ctaClasses}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Approach</p>
            <RevealText as="h2" className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
              Patience That Never Wavers
            </RevealText>
            <div className="mt-8 rounded-2xl border border-border bg-card p-8">
              <p className="text-lg leading-relaxed text-foreground">
                The <strong className="text-primary">iClinic dementia agent</strong>{" "}
                is built for repetitive interactions. It never shows frustration,
                maintains consistent warmth, and adapts its tone and pacing to
                the patient&apos;s cognitive state in real time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Voice scenarios */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Voice Scenarios</p>
            <RevealText as="h2" className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
              How the iClinic Dementia Agent Helps
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

      {/* Care team integration */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Integration</p>
            <RevealText as="h2" className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
              Automated Alerts &amp; Communication
            </RevealText>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Keep the entire care team informed with automatic notifications
              through the EHR portal.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {integrations.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 100} className="hover-lift flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureList
        title="What You Can Do with Dementia Support"
        description="Practical, everyday support for patients, caregivers, and clinicians."
        features={[
          "Provide warm, repetitive companionship calls without frustration",
          "Deliver patient medication reminders and confirm intake",
          "Run light cognitive exercises adapted to the patient",
          "Give caregivers scheduled respite with check-in calls",
          "Alert family members when concerning patterns appear",
          "Notify the care team when appointments are missed",
          "Log every interaction to the EHR for the primary care physician",
          "Adapt tone and pacing to the patient's cognitive state",
        ]}
      />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <RevealText as="h2" className="text-3xl tracking-tight text-foreground sm:text-4xl">
              Support your dementia care practice
            </RevealText>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how iClinic AI can provide compassionate support for patients
              and relief for caregivers.
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
