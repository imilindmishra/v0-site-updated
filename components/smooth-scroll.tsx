"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

/**
 * Lenis smooth scroll, mounted once from the root layout.
 *
 * Runs in Lenis's default NATIVE scroll mode — no `wrapper`/`content`, because a
 * transformed wrapper becomes a containing block and would break `position: sticky`
 * on both the header and `.stack-card`. Defaults otherwise: lerp 0.1, smoothWheel
 * on, syncTouch off (touch stays native).
 */

// Subscribers register unconditionally: React runs a child's effect before a later
// sibling's, so CardStack can subscribe before this component has created Lenis.
const subscribers = new Set<() => void>()
let lenis: Lenis | null = null

/** Run `cb` on every Lenis scroll tick, in the same frame Lenis writes scroll. */
export function onSmoothScroll(cb: () => void) {
  subscribers.add(cb)
  return () => {
    subscribers.delete(cb)
  }
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    // Reduced motion keeps native scroll (CardStack is disabled there too).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    lenis = new Lenis({ autoRaf: true })
    const off = lenis.on("scroll", () => {
      for (const cb of subscribers) cb()
    })

    return () => {
      off()
      lenis?.destroy()
      lenis = null
    }
  }, [])

  // App Router resets scroll on navigation; keep Lenis's internal position in sync.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [pathname])

  return null
}
