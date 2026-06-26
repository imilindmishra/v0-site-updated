import { Check } from "lucide-react"

interface FeatureListProps {
  eyebrow?: string
  title: string
  description?: string
  features: string[]
  /** Optional background variant to alternate against neighbouring sections */
  variant?: "background" | "card"
}

/**
 * Plain-language list of what users can actually do with a product.
 * Two-column checklist that stays readable on mobile.
 */
export function FeatureList({
  eyebrow = "What You Can Do",
  title,
  description,
  features,
  variant = "background",
}: FeatureListProps) {
  return (
    <section className={`${variant === "card" ? "bg-card" : "bg-background"} py-16 sm:py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{title}</p>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>
          ) : null}
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" />
              </span>
              <span className="text-base text-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
