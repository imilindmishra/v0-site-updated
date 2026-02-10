import { Phone, Brain, Database, Bell, ArrowRight } from "lucide-react"

const flowSteps = [
  {
    icon: Phone,
    title: "Patient Call",
    description: "Patient initiates contact via phone, SMS, or web",
  },
  {
    icon: Brain,
    title: "iClinic AI",
    description: "AI processes request using natural language understanding",
  },
  {
    icon: Database,
    title: "EHR Update",
    description: "Real-time sync with your EMR/PMS using FHIR/HL7",
  },
  {
    icon: Bell,
    title: "Staff Notification",
    description: "Relevant team members are notified instantly",
  },
]

const specs = [
  "Automatic SOAP note generation",
  "Real-time insurance verification",
  "Bi-directional appointment syncing",
  "FHIR/HL7 standards compliance",
]

export function IntegrationFlow() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Clinical Intelligence, Deeply Integrated
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how patient interactions flow seamlessly through our AI-powered
            system to your EHR
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-0">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-[150px] text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < flowSteps.length - 1 && (
                <ArrowRight className="mx-4 hidden h-6 w-6 text-primary lg:block" />
              )}
            </div>
          ))}
        </div>

        {/* Key Specs */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold text-foreground">
            Key Specifications
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec) => (
              <div
                key={spec}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
