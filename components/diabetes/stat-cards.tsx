"use client"

import { useCountUp } from "@/hooks/use-motion"

function Stat({
  value,
  decimals = 0,
  suffix,
  label,
}: {
  value: number
  decimals?: number
  suffix: string
  label: string
}) {
  const ref = useCountUp<HTMLSpanElement>(value, { decimals })
  return (
    <div className="hover-lift rounded-2xl border border-border bg-card p-6 text-center">
      <p className="text-4xl font-semibold tracking-tight text-primary">
        <span ref={ref}>{value.toFixed(decimals)}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

/** Hedged (projected/target) impact stats with count-up on scroll. */
export function DiabetesStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Stat value={0.8} decimals={1} suffix="%" label="Expected A1C Reduction" />
      <Stat value={92} suffix="%" label="Target Engagement Rate" />
    </div>
  )
}
