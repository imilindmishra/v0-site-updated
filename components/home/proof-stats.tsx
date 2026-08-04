"use client"

import { useCountUp } from "@/hooks/use-motion"

/**
 * Live-pilot proof numbers with count-up on scroll. Render the final value
 * as children — useCountUp animates textContent; reduced-motion and no-JS
 * visitors see the finished number.
 */
function Stat({
  value,
  decimals,
  unit,
  label,
}: {
  value: number
  decimals: number
  unit: string
  label: string
}) {
  const ref = useCountUp<HTMLSpanElement>(value, { decimals })
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center hover-lift">
      <p className="text-4xl font-semibold tracking-tight tabular-nums text-primary md:text-5xl">
        <span ref={ref}>{value.toFixed(decimals)}</span>
        <span className="ml-1 text-lg font-medium text-muted-foreground">{unit}</span>
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function ProofStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Stat value={125} decimals={0} unit="calls" label="Patient calls handled by the agent" />
      <Stat value={1.83} decimals={2} unit="min" label="Average call duration" />
      <Stat value={228.9} decimals={1} unit="min" label="Staff time saved" />
    </div>
  )
}
