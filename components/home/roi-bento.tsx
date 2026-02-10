import { Phone, Calendar, Clock, Brain } from "lucide-react"

const metrics = [
  {
    icon: Phone,
    stat: "100%",
    title: "Call Answer Rate",
    description:
      "Studies show 38% of patients hang up if put on hold. iClinic AI ensures zero missed revenue opportunities.",
  },
  {
    icon: Calendar,
    stat: "35%",
    title: "Reduction in No-Shows",
    description:
      "Proactive, empathetic voice reminders recover an average of $15,000 in monthly revenue per practice.",
  },
  {
    icon: Clock,
    stat: "20+",
    title: "Hours Saved Weekly",
    description:
      "Automating intake and refills frees your staff to focus on in-person care, not phone tag.",
  },
  {
    icon: Brain,
    stat: "95%",
    title: "Clinical Accuracy",
    description:
      "Native medical terminology processing outperforms generic AI models in 30+ languages.",
  },
]

export function ROIBentoGrid() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ROI & Impact:{" "}
            <span className="text-primary">Based on Clinical Studies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real results from real practices. See how AI-powered patient
            communication transforms healthcare operations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold text-primary">
                {metric.stat}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {metric.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
