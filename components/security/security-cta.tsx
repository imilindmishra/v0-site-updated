import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function SecurityCTA() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Need More Details?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Request our security documentation or speak with our compliance team
            to learn more about our security practices.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                Contact Security Team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border text-foreground hover:bg-muted bg-transparent"
            >
              <FileText className="h-4 w-4" />
              Request BAA
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
