import { Shield, Lock, FileCheck, Eye, Server, Clock } from "lucide-react"

const complianceItems = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    subtitle: "BAA Signed",
    description:
      "Full HIPAA compliance with Business Associate Agreements available for all enterprise customers.",
  },
  {
    icon: FileCheck,
    title: "SOC2 Type 2 Certified",
    subtitle: "Annual Audits",
    description:
      "Independently audited security controls that meet the highest industry standards for data protection.",
  },
  {
    icon: Lock,
    title: "End-to-End AES-256 Encryption",
    subtitle: "Data at Rest & In Transit",
    description:
      "Military-grade encryption protects all data, whether stored in our systems or transmitted between services.",
  },
  {
    icon: Eye,
    title: "Automated PHI Redaction",
    subtitle: "Smart Data Handling",
    description:
      "AI-powered redaction automatically identifies and protects Protected Health Information in all transcripts.",
  },
  {
    icon: Server,
    title: "US-Based Medical Servers",
    subtitle: "AWS Infrastructure",
    description:
      "All data resides in encrypted, HIPAA-compliant data centers located within the United States.",
  },
  {
    icon: Clock,
    title: "Minimal Data Retention",
    subtitle: "Privacy by Design",
    description:
      "Voice data is not stored longer than necessary. We practice data minimization as a core principle.",
  },
]

export function ComplianceChecklist() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compliance Checklist
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every security measure in place to protect your practice and your
            patients
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mb-3 text-sm font-medium text-primary">
                {item.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Checkmark indicator */}
              <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-3 w-3 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
