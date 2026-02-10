import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product",
  description:
    "Clinical Intelligence, Deeply Integrated. EHR connectivity using FHIR/HL7 standards with automatic SOAP note generation and real-time insurance verification.",
}

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.15),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Clinical Intelligence,
            <br />
            <span className="text-primary">Deeply Integrated</span>
          </h1>

          <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Detailed EHR connectivity using FHIR/HL7 standards. Automatic SOAP
            note generation, real-time insurance verification, and bi-directional
            appointment syncing.
          </p>
        </div>
      </div>
    </section>
  )
}
