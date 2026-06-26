import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How iClinic AI collects, uses, and protects information, and our commitment to a HIPAA-compliant architecture.",
}

const sections = [
  {
    heading: "Overview",
    body: [
      "iClinic AI builds voice AI for healthcare clinics. We take the privacy and security of patient and clinic information seriously. This policy explains, in plain language, how we handle information on our website and in our product.",
      "This policy is provided for transparency. It is not a Business Associate Agreement (BAA) and is not legal advice. For agreements governing protected health information (PHI), please contact us directly.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Website: When you contact us or request a demo, we collect the information you choose to share, such as your name, email address, clinic name, and message.",
      "Product: When deployed in a clinic, iClinic AI processes call audio, transcripts, and related records strictly to provide the service, and writes structured data back to the clinic's EHR.",
      "Analytics: Our website may use privacy-conscious analytics to understand aggregate traffic. This does not include health information.",
    ],
  },
  {
    heading: "How We Use Information",
    body: [
      "We use the information we collect to respond to inquiries, schedule demos, provide and improve the product, and meet our legal and contractual obligations.",
      "We do not sell personal information, and we do not use patient information for advertising.",
    ],
  },
  {
    heading: "Security",
    body: [
      "iClinic AI is built on a HIPAA-compliant architecture, including encryption in transit and at rest and access controls scoped to authorized users.",
      "We are actively pursuing SOC 2 compliance. We will update this page as our certifications progress.",
    ],
  },
  {
    heading: "Data Sharing",
    body: [
      "We share information only with service providers necessary to operate the product, under appropriate agreements, or when required by law. In clinical deployments, PHI is governed by the BAA in place with the clinic.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You may request access to, correction of, or deletion of the information you have shared with us through our website by emailing us. Patient data held within a clinic's systems is controlled by that clinic.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy or our privacy practices can be sent to Info@imedclinic.ai.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
