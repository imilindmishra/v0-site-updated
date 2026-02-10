import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ROICTA() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to See Your Actual ROI?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a personalized demo and get a custom ROI analysis based on your
            practice&apos;s specific metrics.
          </p>

          <div className="mt-10">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                Request ROI Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
