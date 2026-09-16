"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BOOKING_URL } from "@/lib/booking"

const callCovers = [
  "Hear it answer a live patient call",
  "See the confirmation text and the chart update",
  "Get pricing for your clinic size",
]

export function BookACallCard() {
  const [opening, setOpening] = useState(false)

  // Revert 5s after the click. setOpening(true) while already true is a React
  // no-op, so a second click neither restarts nor stacks this timer.
  useEffect(() => {
    if (!opening) return
    const t = window.setTimeout(() => setOpening(false), 5000)
    return () => clearTimeout(t)
  }, [opening])

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Request a demo</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Book a Walkthrough</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Pick a time and we&apos;ll walk you through iClinic AI on a clinic like yours.
      </p>

      <ul className="mt-6 space-y-3">
        {callCovers.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-bg">
              <Check aria-hidden="true" className="h-3.5 w-3.5 text-success" />
            </span>
            <span className="text-base leading-relaxed text-foreground">{item}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        className={cn(
          // Button ships outline-none, which out-layers the site's base :focus-visible
          // rule; restate the ring here so keyboard focus reads on both states.
          "book-cta relative mt-8 w-full overflow-hidden rounded-full text-primary-foreground focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          opening ? "is-opening bg-success hover:bg-success" : "bg-primary hover:bg-primary/90",
        )}
      >
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpening(true)}>
          {opening ? "Opening your calendar" : "Book a Call"}
          {opening ? (
            <Check aria-hidden="true" className="ml-2 h-4 w-4" />
          ) : (
            <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
          )}
        </a>
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Opens our booking calendar in a new tab. No prep needed.
      </p>
      <p role="status" aria-live="polite" className="sr-only">
        {opening ? "Opening your calendar in a new tab." : ""}
      </p>
    </div>
  )
}
