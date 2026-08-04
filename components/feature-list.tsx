import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface FeatureListProps {
  eyebrow?: string
  title: string
  description?: string
  features: string[]
  /** Kept for API compatibility; the redesign always renders a white card on the blue field. */
  variant?: "background" | "card"
}

/**
 * Plain-language list of what users can actually do with a product.
 * Two-column checklist inside a white card on the blue page field.
 */
export function FeatureList({ eyebrow = "What You Can Do", title, description, features }: FeatureListProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
              <h2 className="mt-3 text-balance text-3xl tracking-tight text-foreground sm:text-4xl">{title}</h2>
              {description ? (
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
              ) : null}
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-bg">
                    <Check className="h-3.5 w-3.5 text-success" aria-hidden />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
