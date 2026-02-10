import {
  Phone,
  Shield,
  Calendar,
  MessageSquare,
  TrendingUp,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "AI Call Handling",
    subtitle: "24/7 Intelligent Patient Support",
    description:
      "Never miss another patient call. iClinic AI provides an instant, natural-voiced response to every inquiry, 24/7. From booking appointments to taking detailed messages, your front desk is always open, even during holidays or after-hours.",
  },
  {
    icon: Shield,
    title: "Fully Secured",
    subtitle: "HIPAA-Compliant Infrastructure",
    description:
      "Security is our priority. Built on AWS infrastructure and supported by the NVIDIA Inception Program, our platform ensures all data is encrypted and HIPAA-compliant. We provide a secure environment for patient messaging and data handling.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    subtitle: "Seamless EHR & PMS Integration",
    description:
      "Our AI integrates directly with your existing EMR/PMS systems to manage real-time availability. Patients can book, reschedule, or cancel appointments through voice or text, with all changes instantly reflected in your clinic's primary dashboard.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Sync",
    subtitle: "Omnichannel Patient Engagement",
    description:
      "Communicate with patients where they are. iClinic AI handles voice calls, SMS text, and emails simultaneously. Automated appointment confirmations and reminders are sent across all channels to drastically reduce your no-show rates.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    subtitle: "Maximize Revenue, Minimize Costs",
    description:
      "One new patient booking per month typically covers the entire cost of the platform. By capturing missed calls—which often cost clinics $250+ per missed appointment—iClinic AI pays for itself while reducing the overhead of traditional answering services.",
  },
  {
    icon: Zap,
    title: "Easy Deploy",
    subtitle: "Setup in Minutes",
    description:
      "Get started quickly with our streamlined onboarding process. No complex IT requirements, no lengthy implementation cycles. Our team handles the integration while you focus on what matters most—your patients.",
  },
]

export function ProductFeatures() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {feature.title}
                </h2>
                <p className="mt-2 text-lg font-medium text-primary">
                  {feature.subtitle}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-background">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <feature.icon className="h-20 w-20 text-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
