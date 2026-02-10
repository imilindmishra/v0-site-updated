import { Play } from "lucide-react"

export function DemoVideoSection() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See iClinic AI in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Listen to how our agent handles a complex prescription refill and scheduling request.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Video Container */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              {/* Play Button */}
              <button
                type="button"
                className="group flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25 transition-transform hover:scale-110"
                aria-label="Play demo video"
              >
                <Play className="ml-1 h-8 w-8 text-primary-foreground" />
              </button>

              <p className="mt-6 text-lg font-medium text-foreground">
                YouTube Demo Placeholder
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Click to watch the demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
