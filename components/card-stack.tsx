"use client"

import { useEffect, useRef } from "react"

import { onSmoothScroll } from "@/components/smooth-scroll"

const MIN_SCALE = 0.94
const TOP_BASE_REM = 1.5 // gap below the header before the first card
const TOP_STEP_PX = 12 // extra offset per card so stacked edges peek out
const STUCK_SHADOW = "0 20px 40px rgba(16, 15, 15, 0.10)"
const RESTING_SHADOW = "0 2px 8px rgba(16, 15, 15, 0.04)"

/**
 * Three compact landing-page cards (cost story → EHR flow → proof numbers)
 * stack via CSS position:sticky as the mechanism; this component only drives
 * the depth illusion (scale + shadow) as each card is covered by the next.
 * Disabled below md and under prefers-reduced-motion — both purely via the
 * `.stack-card` CSS gate, so cards simply render in normal flow there.
 * Scroll handler reads only `window.scrollY` (cached per-card offsets are
 * measured once, not per frame) and writes only transform/box-shadow. It runs
 * off Lenis's scroll tick so the scale write lands in the same frame the browser
 * lays out the sticky card; the window listener stays as a fallback.
 */
export function CardStack({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const belowMd = window.matchMedia("(max-width: 767px)")

    let cards: HTMLElement[] = []
    let naturalTops: number[] = []
    let stickyTops: number[] = []
    let rafId = 0
    let listening = false
    let unsubLenis: (() => void) | undefined

    const measure = () => {
      cards = Array.from(root.querySelectorAll<HTMLElement>("[data-stack-card]"))
      stickyTops = cards.map((_, i) => {
        const remPx = TOP_BASE_REM * parseFloat(getComputedStyle(document.documentElement).fontSize)
        const headerPx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) * 16
        return headerPx + remPx + i * TOP_STEP_PX
      })
      // A card that is already stuck reports its STUCK offset, not its natural
      // flow offset — true of getBoundingClientRect and offsetTop alike — which
      // would poison these cached offsets for the rest of the session. Sticky
      // elements still occupy their natural space in flow, so briefly forcing
      // static (and dropping the scale) makes the rects read natural without
      // moving anything else. One reflow, only on start/resize.
      const saved = cards.map((card) => [card.style.position, card.style.transform] as const)
      cards.forEach((card) => {
        card.style.position = "static"
        card.style.transform = "none"
      })
      naturalTops = cards.map((card, i) => card.getBoundingClientRect().top + window.scrollY - stickyTops[i])
      cards.forEach((card, i) => {
        card.style.position = saved[i][0]
        card.style.transform = saved[i][1]
      })
    }

    const applyResting = () => {
      cards.forEach((card) => {
        card.style.transform = ""
        card.style.boxShadow = RESTING_SHADOW
      })
    }

    const update = () => {
      rafId = 0
      const scrollY = window.scrollY
      cards.forEach((card, i) => {
        if (i === cards.length - 1) {
          card.style.transform = ""
          card.style.boxShadow = RESTING_SHADOW
          return
        }
        const stuckAt = naturalTops[i]
        const nextStuckAt = naturalTops[i + 1]
        const span = Math.max(nextStuckAt - stuckAt, 1)
        const progress = Math.min(Math.max((scrollY - stuckAt) / span, 0), 1)
        const scale = 1 - progress * (1 - MIN_SCALE)
        card.style.transform = `scale(${scale})`
        card.style.boxShadow = progress <= 0 ? RESTING_SHADOW : progress >= 1 ? STUCK_SHADOW : RESTING_SHADOW
        if (progress > 0 && progress < 1) {
          // interpolate shadow opacity/spread for a smooth deepen
          const blur = 8 + progress * 32
          const spread = 0
          const yOff = 2 + progress * 18
          const alpha = 0.04 + progress * 0.06
          card.style.boxShadow = `0 ${yOff}px ${blur}px ${spread}px rgba(16, 15, 15, ${alpha})`
        }
      })
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }

    const start = () => {
      if (listening || reducedMotion.matches || belowMd.matches) return
      measure()
      update()
      unsubLenis = onSmoothScroll(update)
      window.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", measure, { passive: true })
      listening = true
    }
    const stop = () => {
      if (!listening) return
      unsubLenis?.()
      unsubLenis = undefined
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
      cancelAnimationFrame(rafId)
      rafId = 0
      listening = false
      applyResting()
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting)
        if (visible) start()
        else stop()
      },
      { rootMargin: "200px 0px 200px 0px" },
    )
    io.observe(root)

    const onPrefChange = () => {
      stop()
      if (root.getBoundingClientRect().top < window.innerHeight && root.getBoundingClientRect().bottom > 0) start()
    }
    reducedMotion.addEventListener("change", onPrefChange)
    belowMd.addEventListener("change", onPrefChange)

    return () => {
      io.disconnect()
      stop()
      reducedMotion.removeEventListener("change", onPrefChange)
      belowMd.removeEventListener("change", onPrefChange)
    }
  }, [])

  return (
    <div ref={rootRef} className={`relative ${className ?? ""}`}>
      {children}
    </div>
  )
}

export function StackCard({
  index,
  className,
  children,
}: {
  index: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      data-stack-card
      className={`stack-card ${className ?? ""}`}
      style={{
        top: `calc(var(--header-height) + 1.5rem + ${index * TOP_STEP_PX}px)`,
        zIndex: index + 1,
      }}
    >
      {children}
    </div>
  )
}
