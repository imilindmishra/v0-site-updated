import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the iClinic AI team to request a demo, ask about EHR integration, or discuss a pilot at your clinic.",
}

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "Info@imedclinic.ai",
    href: "mailto:Info@imedclinic.ai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "By request via email",
    href: "mailto:Info@imedclinic.ai",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "United States",
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Let&apos;s Talk About Your Front Desk
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Want a demo, a question about EHR integration, or interested in a pilot at your clinic? Send us a note and
            we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Reach Out Directly</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The fastest way to reach us is by email. We read every message and respond personally.
            </p>
            <ul className="mt-8 space-y-6">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold text-foreground hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
