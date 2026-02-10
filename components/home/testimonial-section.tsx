import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Quote className="h-8 w-8 text-primary" />
          </div>

          <blockquote className="text-xl font-medium text-foreground sm:text-2xl leading-relaxed">
            &ldquo;iClinic AI didn&apos;t just replace our phone system; it saved
            our staff from burnout. Our patient satisfaction scores rose by 25%
            in the first quarter.&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="font-semibold text-foreground">Dr. Sarah Chen</p>
            <p className="text-sm text-muted-foreground">
              Chief Medical Officer at Northwell Health
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
