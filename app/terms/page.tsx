import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the iClinic AI website and product.",
}

const sections = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By accessing the iClinic AI website or using our product, you agree to these Terms of Service. If you do not agree, please do not use our website or services.",
    ],
  },
  {
    heading: "Use of the Website",
    body: [
      "Our website is provided for informational purposes about iClinic AI. You agree to use it lawfully and not to attempt to disrupt or gain unauthorized access to our systems.",
    ],
  },
  {
    heading: "The Product",
    body: [
      "iClinic AI is voice AI for healthcare clinics and is currently in early production, deployed and tested in a live clinical setting. Specific terms for clinical use, including service levels and handling of protected health information, are governed by a separate written agreement and Business Associate Agreement (BAA) with each clinic.",
      "iClinic AI supports clinical staff and does not replace professional medical judgment. Urgent and emergency situations are escalated to appropriate personnel according to configured protocols.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content, trademarks, and software associated with iClinic AI are owned by iClinic AI or its licensors and may not be copied or used without permission.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "The website is provided \"as is\" without warranties of any kind. Statements describing future capabilities, integrations, or outcomes are forward-looking and not guarantees.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, iClinic AI is not liable for indirect, incidental, or consequential damages arising from use of the website. Liability relating to the product is addressed in the applicable clinical agreement.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "Contact",
    body: ["Questions about these terms can be sent to Info@imedclinic.ai."],
  },
]

export default function TermsPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
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
