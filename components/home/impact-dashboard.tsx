import { TrendingUp, DollarSign, ShieldCheck } from "lucide-react"

const metrics = [
  {
    label: "Expected Increase in Patient Retention",
    value: "38%",
    icon: TrendingUp,
    description: "Based on pilot study projections",
  },
  {
    label: "Expected ROI in 6 Months",
    value: "4.5x",
    icon: DollarSign,
    description: "Projected return on investment",
  },
  {
    label: "HIPAA Compliance",
    value: "100%",
    icon: ShieldCheck,
    description: "End-to-end encryption",
  },
]

export function ImpactDashboard() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Expected Outcomes
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projected Impact
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Based on pilot studies currently underway
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">
                    {metric.value}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold text-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {metric.description}
              </p>
              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
