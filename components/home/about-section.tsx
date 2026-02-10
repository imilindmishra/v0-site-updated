export function AboutSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built by Professionals, for Professionals
          </h2>

          <div className="mt-8 space-y-6 text-left">
            <p className="text-muted-foreground leading-relaxed">
              iClinic AI is an innovative AI-driven healthcare platform that
              automates manual processes in clinics and hospitals, streamlining
              scheduling, bookings, reminders, and more. Led by Dr. Vijaiganesh
              Nagarajan, a visionary healthcare leader with deep expertise in
              medical operations and technology, our mission is to simplify
              daily workflows and empower providers to focus on delivering
              exceptional patient care.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our compact team combines clinical insight, AI engineering, and
              healthcare operations experience to build tools that reduce
              no-shows, boost revenue, and enhance patient satisfaction without
              disrupting existing systems.
            </p>
          </div>

          {/* Team Visual */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-muted text-sm font-medium text-muted-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Our dedicated team of healthcare & AI experts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
