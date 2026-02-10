import { Phone, Clock, Users, AlertTriangle } from "lucide-react"

const crisisPoints = [
  {
    icon: Phone,
    stat: "67%",
    description: "of patient calls go unanswered during peak hours",
  },
  {
    icon: Clock,
    stat: "23 min",
    description: "average hold time frustrating patients daily",
  },
  {
    icon: Users,
    stat: "47%",
    description: "of front desk staff report burnout symptoms",
  },
  {
    icon: AlertTriangle,
    stat: "38%",
    description: "of patients switch providers due to poor phone experience",
  },
]

export function FrontDeskCrisis() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Problem
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Front Desk Crisis
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Every day, clinic staff are overwhelmed with phone calls. Scheduling,
            refills, triage questions, appointment reminders—the list never ends.
            Meanwhile, patients wait on hold, staff burn out, and physicians spend
            more time on paperwork than patient care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {crisisPoints.map((point) => (
            <div
              key={point.description}
              className="group rounded-2xl border border-border bg-background p-6 text-center transition-all hover:border-red-500/50 hover:bg-red-500/5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <point.icon className="h-6 w-6 text-red-400" />
              </div>
              <p className="mt-4 text-3xl font-bold text-red-400">{point.stat}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              <strong className="text-primary">iClinic AI solves this.</strong>{" "}
              Our voice agent handles the routine calls that consume your team&apos;s
              time, while maintaining the warmth and empathy that patients deserve.
              Staff can focus on complex cases. Patients get immediate answers.
              Physicians can finally practice medicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
