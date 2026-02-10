export function SecurityNarrative() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Security That Never Sleeps
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                At iClinic AI, we understand that healthcare data requires the
                highest level of protection. Our infrastructure is built on AWS,
                with support from the NVIDIA Inception Program, ensuring
                enterprise-grade security at every layer.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Voice data captured by our AI agents is processed in real-time
                and is not stored longer than necessary for the transaction to
                complete. All transcripts are automatically scanned for
                Protected Health Information (PHI), which is redacted before
                storage.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our data centers are located exclusively in the United States,
                with physical security measures, redundant power systems, and
                24/7 monitoring. We undergo regular third-party security audits
                to maintain our SOC2 Type 2 certification.
              </p>
            </div>
          </div>

          {/* Security Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-3xl border border-border bg-card p-8">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  {/* Animated Shield */}
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-12 w-12 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Always Protected
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    256-bit encryption active
                  </p>

                  {/* Trust indicators */}
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      HIPAA
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      SOC2
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      GDPR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
