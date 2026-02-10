import { Database, Shield, FileCheck, Lock, Server, Eye } from "lucide-react"

const integrationFeatures = [
  {
    icon: Database,
    title: "HL7/FHIR Connectors",
    description: "Native support for industry-standard healthcare data exchange protocols.",
  },
  {
    icon: FileCheck,
    title: "Bi-directional Sync",
    description: "Real-time synchronization between your EHR and our AI platform.",
  },
  {
    icon: Server,
    title: "Automated Chart Notes",
    description: "AI-generated SOAP notes automatically added to patient records.",
  },
]

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "Military-grade encryption for all data at rest and in transit.",
  },
  {
    icon: Shield,
    title: "BAA Signed",
    description: "Business Associate Agreement provided with every enterprise contract.",
  },
  {
    icon: Eye,
    title: "PHI Redaction",
    description: "Automatic detection and redaction of Protected Health Information.",
  },
]

export function EHRComplianceSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            EHR & HIPAA Compliance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Deep integration with your existing systems while maintaining the highest security standards
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Deep Integration */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Deep Integration
            </h3>
            <div className="space-y-6">
              {integrationFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Enterprise Security
            </h3>
            <div className="space-y-6">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
