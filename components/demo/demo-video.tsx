import { Play } from "lucide-react"

export function DemoVideo() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Video Container */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              {/* Play Button */}
              <button
                type="button"
                className="group flex h-20 w-20 items-center justify-center rounded-full bg-primary transition-transform hover:scale-110"
                aria-label="Play demo video"
              >
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </button>

              <p className="mt-6 text-lg font-medium text-foreground">
                Watch Demo Video
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Duration: 3 minutes
              </p>
            </div>

            {/* Placeholder for actual video embed */}
            {/* <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="iClinic AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Watch iClinic AI handle a complex multi-step patient intake
          </p>
        </div>
      </div>
    </section>
  )
}
