import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,148,136,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-background/50 backdrop-blur-sm">
          <div className="px-8 py-16 text-center sm:px-16 sm:py-24">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get All the Tools You Need
              <br />
              <span className="text-primary">In a Single Platform</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Ready to transform your clinic&apos;s patient communication? See how
              iClinic AI can integrate with your existing systems.
            </p>

            <div className="mt-10">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
