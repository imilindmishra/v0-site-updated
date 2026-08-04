"use client"

import { useEffect, useRef, useState } from "react"
import { useCountUp } from "@/hooks/use-motion"
import { CountUp } from "@/components/count-up"

// Geometry (viewBox 0 0 200 246).
const TRACK_X = 54
const TRACK_W = 46
const TRACK_TOP = 42
const TRACK_H = 180
const TRACK_BOTTOM = TRACK_TOP + TRACK_H
const RX = 14
const BASELINE_X0 = TRACK_X - 14
const BASELINE_X1 = 92
const BASELINE_LEN = BASELINE_X1 - BASELINE_X0
const BRACKET_X0 = 118 // tick start (open toward the track)
const BRACKET_X1 = 126 // stem

// Sequence (~1.8s total): baseline draws in, the bar rises to the full
// reference, holds a beat, then RECEDES down to the real value — the
// admissions visibly disappearing — then the bracket and count-up land in
// the space it vacated. One property change at a time, ease-out.
// Animated purely via `transform: scaleY()/scaleX()` (anchored bottom/right) —
// far more reliably animatable across engines than raw SVG x/y/width/height.
const T_BASELINE = 300
const T_RISE_END = 800
const T_RECEDE_START = 1050
const T_RECEDE_END = 1500
const T_TOTAL = 1800

type GapChartProps = {
  baseline: number
  value: number
  total?: number
  baselineLabel: string
  avoidedLabel: string
  ariaLabel: string
}

/**
 * "The gap is the value." A slim track fills from the bottom to `value` out
 * of `baseline`; the space between the fill and the reference baseline is
 * the story, marked with a bracket and an avoided-count label. Built for
 * reduction metrics (admissions, hospitalizations) where less is the win —
 * do not reuse the concentric-ring comparison here, its grammar is inverted.
 * Reduced motion: final state only — baseline, fill at `value`, bracket and
 * numbers all shown, no motion.
 */
export function GapChart({ baseline, value, total = 100, baselineLabel, avoidedLabel, ariaLabel }: GapChartProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)
  const avoided = baseline - value
  const avoidedRef = useCountUp<SVGTSpanElement>(avoided, { delay: T_RECEDE_END, duration: 350 })

  useEffect(() => {
    const el = rootRef.current
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

  const fillRatio = value / total
  const bracketBottom = TRACK_BOTTOM - TRACK_H * fillRatio // top of the final fill = bottom of the bracket

  const pct = (ms: number) => (ms / T_TOTAL) * 100

  return (
    <div ref={rootRef} className={`rounded-2xl border border-border bg-card p-6 sm:p-8 ${run ? "gc-run" : ""}`}>
      <style>{`
        .gc-fill { transform: scaleY(${fillRatio}); transform-origin: bottom; transform-box: fill-box; }
        .gc-mask { transform: scaleX(0); transform-origin: right; transform-box: fill-box; }
        @media (prefers-reduced-motion: no-preference) {
          .gc-fill { transform: scaleY(0); }
          .gc-mask { transform: scaleX(1); }
          .gc-bracket { opacity: 0; transform: scale(0.9); transform-box: fill-box; transform-origin: center; }
          .gc-run .gc-fill { animation: gc-fill-scale ${T_TOTAL}ms var(--ease-out) 1 forwards; }
          .gc-run .gc-mask { animation: gc-mask-reveal ${T_TOTAL}ms var(--ease-out) 1 forwards; }
          .gc-run .gc-bracket { animation: gc-bracket-in ${T_TOTAL}ms var(--ease-out) 1 forwards; }
        }
        @keyframes gc-fill-scale {
          0%, ${pct(T_BASELINE)}% { transform: scaleY(0); }
          ${pct(T_RISE_END)}%, ${pct(T_RECEDE_START)}% { transform: scaleY(1); }
          ${pct(T_RECEDE_END)}%, 100% { transform: scaleY(${fillRatio}); }
        }
        @keyframes gc-mask-reveal {
          0% { transform: scaleX(1); }
          ${pct(T_BASELINE)}%, 100% { transform: scaleX(0); }
        }
        @keyframes gc-bracket-in {
          0%, ${pct(T_RECEDE_END)}% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <svg
          viewBox="0 0 200 258"
          role="img"
          aria-label={ariaLabel}
          className="h-[219px] w-[170px] shrink-0"
          fill="none"
        >
          <defs>
            <clipPath id="gc-clip">
              <rect x={TRACK_X} y={TRACK_TOP} width={TRACK_W} height={TRACK_H} rx={RX} />
            </clipPath>
          </defs>

          {/* empty-state track */}
          <rect
            x={TRACK_X}
            y={TRACK_TOP}
            width={TRACK_W}
            height={TRACK_H}
            rx={RX}
            fill="var(--muted-2)"
            stroke="var(--border)"
            strokeWidth="1.5"
          />

          {/* fill: full-height box, visually clipped by scaleY anchored at the bottom */}
          <rect
            className="gc-fill"
            clipPath="url(#gc-clip)"
            x={TRACK_X}
            y={TRACK_TOP}
            width={TRACK_W}
            height={TRACK_H}
            fill="var(--primary)"
          />

          {/* reference baseline, revealed left-to-right by a receding cover mask */}
          <line
            x1={BASELINE_X0}
            y1={TRACK_TOP}
            x2={BASELINE_X1}
            y2={TRACK_TOP}
            stroke="var(--muted-foreground)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <rect className="gc-mask" x={BASELINE_X0} y={TRACK_TOP - 6} width={BASELINE_LEN} height="12" fill="var(--card)" />
          <text x={TRACK_X + TRACK_W / 2} y={TRACK_TOP - 12} textAnchor="middle" fontSize="15" fill="var(--muted-foreground)">
            {baseline} {baselineLabel}
          </text>

          {/* value label under the base of the fill */}
          <text x={TRACK_X + TRACK_W / 2} y={TRACK_BOTTOM + 18} textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--ink)">
            {value}
          </text>

          {/* bracket marking the gap = the avoided count, appears last */}
          <g className="gc-bracket">
            <path
              d={`M ${BRACKET_X0} ${TRACK_TOP} H ${BRACKET_X1} V ${bracketBottom} H ${BRACKET_X0}`}
              stroke="var(--success)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x={BRACKET_X1 + 10} y={(TRACK_TOP + bracketBottom) / 2 - 2} fontSize="26" fontWeight="500" fill="var(--success)">
              {run ? <tspan ref={avoidedRef}>{avoided}</tspan> : <tspan>{avoided}</tspan>}
            </text>
            <text x={BRACKET_X1 + 10} y={(TRACK_TOP + bracketBottom) / 2 + 18} fontSize="15" fill="var(--muted-foreground)">
              {avoidedLabel}
            </text>
          </g>
        </svg>

        <div className="w-full flex-1">
          {run ? (
            <CountUp
              value={avoided}
              delay={T_RECEDE_END}
              duration={350}
              className="text-4xl font-medium text-primary sm:text-[40px]"
            />
          ) : (
            <span className="text-4xl font-medium text-primary sm:text-[40px]">{avoided}</span>
          )}
          <p className="mt-2 text-base font-medium text-foreground">Fewer emergency admissions</p>
          <p className="text-sm text-muted-foreground">per {total} patients</p>
          <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">Projected from pilot study.</p>
        </div>
      </div>
    </div>
  )
}
