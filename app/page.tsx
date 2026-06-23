import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Mic, FileText, Shield, Calendar, Stethoscope, Clock } from "lucide-react"

const stats = [
  { label: "Calls Missed Daily", value: "47" },
  { label: "Revenue Lost/Month", value: "$25K" },
  { label: "Staff Burnout Rate", value: "68%" },
]

const solutionStats = [
  { label: "Admin Overhead Reduced", value: "40%" },
  { label: "Patient Adherence Up", value: "22%" },
  { label: "ROI Timeline", value: "90 Days" },
]

const evidenceStats = [
  { label: "Calls Handled", value: "1M+" },
  { label: "EHR Integrations", value: "15+" },
  { label: "Uptime", value: "99.9%" },
]

const specs = [
  {
    icon: Mic,
    title: "Voice AI Engine",
    value: "98.5%",
    unit: "Accuracy",
    description: "Real-time voice recognition tuned for medical terminology and clinical workflows",
  },
  {
    icon: FileText,
    title: "EHR Integration",
    value: "15+",
    unit: "Platforms",
    description: "Seamless integration with Epic, eClinicalWorks, athenahealth, and more",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    value: "100%",
    unit: "Encrypted",
    description: "End-to-end encryption, SOC 2 certified, BAA included from day one",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    value: "40%",
    unit: "Fewer No-Shows",
    description: "AI-powered appointment management with automated reminders and follow-ups",
  },
  {
    icon: Stethoscope,
    title: "Intelligent Triage",
    value: "<30s",
    unit: "Response Time",
    description: "Clinically validated protocols for accurate patient routing and prioritization",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    value: "99.9%",
    unit: "Uptime",
    description: "Always-on voice agent that never calls in sick, never takes a break",
  },
]

function StatBlock({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
      {items.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl md:text-5xl font-bold tabular-nums" style={{ color: "#2DD4BF" }}>
            {stat.value}
          </div>
          <div className="mt-2 text-sm" style={{ color: "#86868B" }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#000000" }} className="-mt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-16">
        <Image
          src="/images/voice-ai-hero.jpg"
          alt="iClinic Voice AI - Stethoscope with audio waveform"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 text-left px-6 md:px-12 lg:px-16 pt-24 md:pt-32 lg:pt-40 max-w-xl">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2DD4BF" }}>
            Introducing
          </p>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "#F5F5F7" }}
          >
            iClinic Voice AI
          </h1>
          <p className="mt-3 text-sm md:text-base max-w-sm leading-relaxed" style={{ color: "#A1A1A6" }}>
            The EHR-integrated voice agent for modern clinics. Where empathy meets algorithm.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6k7M9SJL3FDXJ79G2BNARX1RVNIqYVIxOBaEKEpurkpxXNKHfuPqEuSQqv0lkUObJcLwVz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="default"
                className="font-semibold rounded-full px-5 h-10 text-sm"
                style={{ backgroundColor: "#2DD4BF", color: "#000000" }}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://youtu.be/6Wu202Wpj7k" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="default"
                className="bg-transparent rounded-full px-5 h-10 text-sm"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#F5F5F7" }}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 px-4" style={{ borderTop: "1px solid #111111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#2DD4BF" }}>
            The Problem
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance" style={{ color: "#F5F5F7" }}>
            Your Front Desk Is Overwhelmed
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#86868B" }}>
            67% of patients who call and reach voicemail never call back. Missed calls mean missed revenue, delayed care,
            and frustrated patients. Your front desk team is burned out managing 200+ calls per day.
          </p>
          <div className="mt-12">
            <StatBlock items={stats} />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 px-4" style={{ borderTop: "1px solid #111111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#2DD4BF" }}>
            The Solution
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance" style={{ color: "#F5F5F7" }}>
            An AI Voice Agent That Never Sleeps
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#86868B" }}>
            iClinic Voice AI handles scheduling, refills, triage, and patient inquiries 24/7. It integrates directly with
            your EHR, so every interaction is documented, every appointment is booked, and every patient is heard.
          </p>
          <div className="mt-12">
            <StatBlock items={solutionStats} />
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-24 md:py-32 px-4" style={{ borderTop: "1px solid #111111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#2DD4BF" }}>
            The Evidence
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance" style={{ color: "#F5F5F7" }}>
            Clinically Validated. Enterprise Ready.
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#86868B" }}>
            Trusted by healthcare providers across the country. Our voice AI is HIPAA compliant, SOC 2 certified, and
            integrates with 15+ EHR platforms including Epic, eClinicalWorks, and athenahealth.
          </p>
          <div className="mt-12">
            <StatBlock items={evidenceStats} />
          </div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-24 md:py-32 px-4" style={{ borderTop: "1px solid #111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#2DD4BF" }}>
              Technology
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#F5F5F7" }}>
              Built for Healthcare
            </h2>
            <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#86868B" }}>
              Every component engineered for clinical precision and reliability.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec) => {
              const Icon = spec.icon
              return (
                <div
                  key={spec.title}
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: "#111111", border: "1px solid #222222" }}
                >
                  <Icon className="h-6 w-6 mb-4" style={{ color: "#2DD4BF" }} />
                  <h3 className="text-sm font-medium mb-3 tracking-wide uppercase" style={{ color: "#86868B" }}>
                    {spec.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold tracking-tight" style={{ color: "#F5F5F7" }}>
                      {spec.value}
                    </span>
                    <span className="text-sm" style={{ color: "#86868B" }}>
                      {spec.unit}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#86868B" }}>
                    {spec.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4" style={{ borderTop: "1px solid #111111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#2DD4BF" }}>
            Get Started
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            style={{ color: "#F5F5F7" }}
          >
            Experience the Future of Clinical Communication
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#86868B" }}>
            Join leading clinics using AI to reduce administrative overhead by 40% and increase patient adherence by 22%.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER6k7M9SJL3FDXJ79G2BNARX1RVNIqYVIxOBaEKEpurkpxXNKHfuPqEuSQqv0lkUObJcLwVz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-semibold rounded-full px-8 h-14 text-base"
                style={{ backgroundColor: "#2DD4BF", color: "#000000" }}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://youtu.be/6Wu202Wpj7k" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent rounded-full px-8 h-14 text-base"
                style={{ borderColor: "#333333", color: "#F5F5F7" }}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
