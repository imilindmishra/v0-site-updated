import { Brain, BarChart3, Cog, Database, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Deep Dive Analysis in Seconds",
    label: "Revolutionize Clinics",
    description:
      "Transform the way you run your practice with our Clinic Automation solutions. We are here to help clinics streamline their managerial tasks, making operations smoother than ever by harnessing the power of AI.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    label: "Be Smart",
    description:
      "Real-time dashboards and analytics that give you instant visibility into your clinic's performance, patient flow, and revenue metrics at a glance.",
  },
  {
    icon: Cog,
    title: "Custom AI Solutions",
    label: "Seamless",
    description:
      "Tailored AI workflows designed specifically for your practice's unique needs, from appointment management to patient follow-ups.",
  },
  {
    icon: Database,
    title: "Supporting Massive Data Sets",
    label: "Boost Revenue",
    description:
      "Handle thousands of patient records and interactions efficiently with our enterprise-grade infrastructure built for scale.",
  },
  {
    icon: MessageSquare,
    title: "Chat With Your Data",
    label: "Compliant & Ready in Minutes",
    description:
      "Natural language queries to your clinic data. Ask questions about patient trends, revenue, and more without writing complex reports.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            All Your Clinical Analysis in a
            <br />
            <span className="text-primary">Single AI-Powered Workspace</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
                {feature.label}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
