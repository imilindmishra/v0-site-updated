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
  suffix = "",
  unit = "",
  label,
}: {
  value: number
  decimals: number
  suffix?: string
  unit?: string
  label: string
}) {
  const ref = useCountUp<HTMLSpanElement>(value, { decimals })
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center hover-lift">
      <p className="text-4xl font-semibold tracking-tight tabular-nums text-primary md:text-5xl">
        <span ref={ref}>{value.toFixed(decimals)}</span>
        {suffix}
        {unit && <span className="ml-1 text-lg font-medium text-muted-foreground">{unit}</span>}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function ProofStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Stat value={100} decimals={0} suffix="%" label="Answering rate" />
      <Stat value={2} decimals={0} unit="min 16 s" label="Average call duration" />
      <Stat value={660} decimals={0} suffix="+" unit="min" label="Staff time saved" />
    </div>
  )
}
