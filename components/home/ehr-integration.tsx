import { ArrowLeftRight, Database, Cloud, RefreshCw } from "lucide-react"

const ehrSystems = [
  { name: "Epic", logo: "E" },
  { name: "Cerner", logo: "C" },
  { name: "Athena", logo: "A" },
  { name: "Allscripts", logo: "As" },
  { name: "eClinicalWorks", logo: "eC" },
  { name: "NextGen", logo: "N" },
]

const features = [
  {
    icon: ArrowLeftRight,
    title: "Bi-directional Sync",
    description:
      "Real-time data flow between iClinic AI and your EHR. Patient updates, appointment changes, and clinical notes sync automatically.",
  },
  {
    icon: Database,
    title: "FHIR & HL7 Compatible",
    description:
      "Native support for healthcare interoperability standards ensures seamless integration with any certified EHR system.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Scalable infrastructure that grows with your practice. No on-premise servers or complex IT setup required.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    description:
      "Patient demographics, insurance info, and clinical data refresh in real-time without manual intervention.",
  },
]

export function EhrIntegration() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Integration
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            EHR Bi-directional Sync
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Connect iClinic AI to your existing EHR system in minutes. We support all
            major platforms with certified integrations.
          </p>
        </div>

        {/* EHR Logo Wall */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {ehrSystems.map((ehr) => (
            <div
              key={ehr.name}
              className="flex h-16 w-28 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <span className="text-lg font-bold text-muted-foreground">
                {ehr.name}
              </span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
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
  )
}
