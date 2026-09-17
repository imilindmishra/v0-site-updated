import type { Metadata } from "next"
import { WhistleblowerForm } from "@/components/whistleblower-form"

export const metadata: Metadata = {
  title: "Whistleblower",
  description: "Report a concern about iClinic AI confidentially. No login required, and you may remain anonymous.",
}

export default function WhistleblowerPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Company</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Report a Concern</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If you have seen something at iClinic AI that raises a safety, privacy, ethical, or legal concern, tell us.
            No account is needed, you may stay anonymous, and reports are handled confidentially. We do not tolerate
            retaliation against anyone who raises a concern in good faith.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <WhistleblowerForm />
        </div>
      </section>
    </div>
  )
}
