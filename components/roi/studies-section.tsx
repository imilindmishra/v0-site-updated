import { TrendingDown, TrendingUp, DollarSign } from "lucide-react"

const studies = [
  {
    icon: TrendingDown,
    stat: "38%",
    title: "Reduction in Patient Churn",
    description:
      "Study A: Practices using iClinic AI saw a 38% reduction in patient churn by eliminating hold times and ensuring every call is answered promptly.",
    highlight: "Lower patient attrition",
  },
  {
    icon: TrendingUp,
    stat: "22%",
    title: "Increase in Billable Appointments",
    description:
      "Study B: Automated follow-ups and intelligent scheduling resulted in a 22% increase in billable appointments for participating clinics.",
    highlight: "More appointments booked",
  },
  {
    icon: DollarSign,
    stat: "4.5x",
    title: "Average ROI Within 6 Months",
    description:
      "Study C: Mid-sized practices achieved an average ROI of 4.5x within the first 6 months of implementing iClinic AI.",
    highlight: "Proven financial returns",
  },
]

export function StudiesSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Clinical Study Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Data-driven evidence from healthcare practices that have implemented
            our AI platform
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {studies.map((study) => (
            <div
              key={study.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-background p-8"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10" />

              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <study.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">
                    {study.stat}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {study.title}
                </h3>

                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {study.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
