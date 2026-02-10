import { Play } from "lucide-react"

export function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.15),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <Play className="h-4 w-4 text-primary" />
            Live Demo
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            See the Future of
            <br />
            <span className="text-primary">Patient Interaction</span>
          </h1>

          <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Experience how iClinic AI handles complex patient interactions with
            natural conversation and seamless EHR integration.
          </p>
        </div>
      </div>
    </section>
  )
}
