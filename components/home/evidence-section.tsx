import { FileText, TrendingDown, Users } from "lucide-react"

export function EvidenceSection() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              The Research
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Clinical Studies Underway
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:p-8">
              <blockquote className="text-lg text-foreground leading-relaxed">
                &ldquo;Based on industry research, Voice AI agents are expected to reduce administrative
                overhead by{" "}
                <span className="font-bold text-primary">40%</span> and increase
                patient adherence by{" "}
                <span className="font-bold text-primary">22%</span> compared to
                traditional patient portals.&rdquo;
              </blockquote>
              <cite className="mt-4 block text-sm text-muted-foreground">
                — Our pilot studies are currently validating these projections
              </cite>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <TrendingDown className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-bold text-primary">40%</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Expected Reduction in Admin Overhead
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Less time on phone, more time with patients
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-bold text-primary">22%</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Expected Increase in Patient Adherence
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Better outcomes through consistent engagement
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-4 text-3xl font-bold text-primary">0</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Missed Patient Calls
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                24/7 availability ensures every call is answered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
