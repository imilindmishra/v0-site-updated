"use client"

import { useCountUp } from "@/hooks/use-motion"

/**
 * Counts a number up when it scrolls into view, preserving any prefix/suffix
 * (e.g. "~$", "%", "K"). Renders the final value as children, so reduced-motion
 * and no-JS visitors see the finished figure.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0,
  duration,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useCountUp<HTMLSpanElement>(value, { decimals, delay, ...(duration ? { duration } : {}) })
  return (
    <span className={className}>
      {prefix}
      <span ref={ref} className="tabular-nums">
        {value.toFixed(decimals)}
      </span>
      {suffix}
    </span>
  )
}
