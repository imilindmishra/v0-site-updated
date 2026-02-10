import { Phone, Mail } from "lucide-react"

export function DemoSection() {
  return (
    <section id="demo" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            See It In Action
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Watch iClinic AI Handle Real Calls
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how iClinic AI seamlessly handles patient scheduling, medication
            refills, and symptom triage while updating your EHR in real-time.
          </p>
        </div>

        {/* Video Container */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              src="https://www.youtube.com/embed/6Wu202Wpj7k"
              title="iClinic AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-semibold text-foreground text-center mb-6">
              Ready to Book a Demo?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <a
                href="tel:281-454-3054"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-semibold">281-454-3054</p>
                </div>
              </a>
              <a
                href="mailto:Info@imedclinic.ai"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-semibold">Info@imedclinic.ai</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
