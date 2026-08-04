"use client"

import { useCountUp } from "@/hooks/use-motion"

const stats = [
  { value: 125, decimals: 0, suffix: "", label: "Calls handled" },
  { value: 1.83, decimals: 2, suffix: " min", label: "Average time per call" },
  { value: 228.9, decimals: 1, suffix: " min", label: "Staff minutes saved" },
] as const

function Stat({
  value,
  decimals,
  suffix,
  label,
}: {
  value: number
  decimals: number
  suffix: string
  label: string
}) {
  const ref = useCountUp<HTMLSpanElement>(value, { decimals })
  return (
    <div className="hover-lift rounded-2xl border border-border bg-card p-8 text-center">
      <p className="text-4xl font-semibold tabular-nums text-primary">
        <span ref={ref}>{value.toFixed(decimals)}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
    </div>
  )
}

/** Live-deployment numbers — the only unhedged stats on the site. */
export function LiveStats() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
      {stats.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </div>
  )
}
