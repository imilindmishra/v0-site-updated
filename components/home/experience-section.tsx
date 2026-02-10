import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Settings2,
  Shield,
  Clock,
  BarChart,
  Heart,
  Zap,
} from "lucide-react"

const experiences = [
  {
    icon: Settings2,
    title: "Flexible Platform",
    description: "Adapts to any clinic's workflow",
  },
  {
    icon: Shield,
    title: "Fully Secured",
    description: "HIPAA/GDPR compliant",
  },
  {
    icon: Clock,
    title: "Time Saver",
    description: "Automate bookings & reminders",
  },
  {
    icon: BarChart,
    title: "Keep Track",
    description: "Realtime dashboard insights",
  },
  {
    icon: Heart,
    title: "More Focus",
    description: "Staff and patient care",
  },
  {
    icon: Zap,
    title: "Easy Deploy",
    description: "Setup in minutes, no IT hassle",
  },
]

export function ExperienceSection() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Seamless User Experience
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our platform is designed to integrate naturally into your existing
              workflows, minimizing disruption while maximizing efficiency.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {experiences.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/product">
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Read More
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="absolute inset-4 rounded-2xl border border-border bg-card/80 backdrop-blur" />
              <div className="absolute inset-8 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground">
                  Enterprise Ready
                </p>
                <p className="text-sm text-muted-foreground">
                  Bank-level security meets medical-grade compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
