"use client"

import { useEffect, useRef, useState } from "react"
import { CountUp } from "@/components/count-up"

const SW = 7
const OUTER_R = 96
const INNER_R = 70
const OUTER_C = 2 * Math.PI * OUTER_R
const INNER_C = 2 * Math.PI * INNER_R

// Sequence: inner ring draws first and holds (0–550ms), then a beat of
// silence (550–850ms), then the outer ring sweeps and the center number
// counts up with it (850–1600ms). ~1.6s total, calm and ease-out throughout.
const INNER_DURATION = 550
const OUTER_DELAY = 850
const OUTER_DURATION = 750

type RingItem = { label: string; value: number; detail: string }

/**
 * The site's one before/after rate-comparison chart: two concentric rings on
 * a hairline track. The inner ring (grey, "reference") draws first and holds
 * on its gap; the outer ring (blue, "with the product") sweeps second and
 * drives the center delta count-up. Reused as-is on OmniAI and Heart Failure
 * so the two pages share one chart language.
 * Reduced motion: both rings render at their final sweep, number shown, no motion.
 */
export function RingCompare({
  outer,
  inner,
  total = 100,
  centerUnit,
  note,
  ariaLabel,
}: {
  outer: RingItem
  inner: RingItem
  total?: number
  centerUnit: string
  note: string
  ariaLabel: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const outerFinal = OUTER_C * (1 - outer.value / total)
  const innerFinal = INNER_C * (1 - inner.value / total)
  const delta = outer.value - inner.value
  const sign = delta >= 0 ? "+" : "−"

  return (
    <div ref={ref} className={`rounded-2xl border border-border bg-card p-6 sm:p-8 ${run ? "rc-run" : ""}`}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .rc-inner { stroke-dashoffset: ${INNER_C}; transition: none; }
          .rc-outer { stroke-dashoffset: ${OUTER_C}; transition: none; }
          .rc-run .rc-inner {
            stroke-dashoffset: ${innerFinal};
            transition: stroke-dashoffset ${INNER_DURATION}ms var(--ease-out);
          }
          .rc-run .rc-outer {
            stroke-dashoffset: ${outerFinal};
            transition: stroke-dashoffset ${OUTER_DURATION}ms var(--ease-out) ${OUTER_DELAY}ms;
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <div className="relative h-[180px] w-[180px] shrink-0">
          <svg viewBox="0 0 220 220" role="img" aria-label={ariaLabel} className="h-full w-full" fill="none">
            <circle cx="110" cy="110" r={OUTER_R} stroke="var(--border)" strokeWidth={SW} />
            <circle cx="110" cy="110" r={INNER_R} stroke="var(--border)" strokeWidth={SW} />
            <circle
              className="rc-inner"
              cx="110"
              cy="110"
              r={INNER_R}
              stroke="var(--chart-muted)"
              strokeWidth={SW}
              strokeLinecap="round"
              strokeDasharray={INNER_C}
              strokeDashoffset={innerFinal}
              transform="rotate(-90 110 110)"
            />
            <circle
              className="rc-outer"
              cx="110"
              cy="110"
              r={OUTER_R}
              stroke="var(--primary)"
              strokeWidth={SW}
              strokeLinecap="round"
              strokeDasharray={OUTER_C}
              strokeDashoffset={outerFinal}
              transform="rotate(-90 110 110)"
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            {run ? (
              <CountUp
                value={Math.abs(delta)}
                prefix={sign}
                delay={OUTER_DELAY}
                duration={OUTER_DURATION}
                className="text-4xl font-semibold text-primary"
              />
            ) : (
              <span className="text-4xl font-semibold text-primary tabular-nums">
                {sign}
                {Math.abs(delta)}
              </span>
            )}
            <span className="mt-1 max-w-[6rem] text-center text-xs leading-tight text-muted-foreground">
              {centerUnit}
            </span>
          </div>
        </div>

        <div className="w-full flex-1">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden />
              <span>
                <span className="block font-medium text-foreground">{outer.label}</span>
                <span className="text-muted-foreground">{outer.detail}</span>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-chart-muted" aria-hidden />
              <span>
                <span className="block font-medium text-foreground">{inner.label}</span>
                <span className="text-muted-foreground">{inner.detail}</span>
              </span>
            </li>
          </ul>
          <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">{note}</p>
        </div>
      </div>
    </div>
  )
}
