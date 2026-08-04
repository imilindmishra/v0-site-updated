"use client"

import { useEffect, useRef, useState } from "react"

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mql.matches)
    onChange()
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])
  return reduced
}

/**
 * Reveal-on-scroll. Attach the returned ref to an element carrying the
 * `reveal` class; the hook adds `is-revealed` once it enters the viewport.
 * The CSS transition itself is gated on prefers-reduced-motion in globals.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed")
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-revealed")
            io.disconnect()
          }
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return ref
}

/**
 * Count up to `target` when the element scrolls into view.
 * Render the FINAL value as the element's children — the hook rewrites
 * textContent to animate 0 → target, so reduced-motion users (and no-JS
 * visitors) simply see the finished number.
 */
export function useCountUp<T extends Element = HTMLSpanElement>(
  target: number,
  { duration = 1200, decimals = 0, delay = 0 }: { duration?: number; decimals?: number; delay?: number } = {},
) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    el.textContent = (0).toFixed(decimals)
    let raf = 0
    let timer = 0
    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        el.textContent = (target * eased).toFixed(decimals)
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        if (delay) timer = window.setTimeout(run, delay)
        else run()
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      el.textContent = target.toFixed(decimals)
    }
  }, [target, duration, decimals, delay])
  return ref
}
