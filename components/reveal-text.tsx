"use client"

import { Children, isValidElement } from "react"

import { useReveal } from "@/hooks/use-motion"
import { cn } from "@/lib/utils"

/**
 * Heading reveal that cascades in word by word. Same mechanism as `Reveal` —
 * one IntersectionObserver on the element, `is-revealed` toggles the CSS — so
 * reduced-motion and no-JS visitors get the finished text (gate in globals.css).
 *
 * Text children are split on whitespace (no measurement, so headings reflow
 * normally at every width). A non-text child — e.g. the `<span className="text-primary">`
 * highlight several heroes use — is kept intact and animated as one unit.
 */
export function RevealText({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
}) {
  const ref = useReveal<HTMLHeadingElement>()
  let i = 0
  const word = (node: React.ReactNode, key: string) => (
    <span key={key} className="word" style={{ "--i": i++ } as React.CSSProperties}>
      {node}
    </span>
  )

  return (
    <Tag ref={ref as React.Ref<never>} className={cn("reveal-words", className)}>
      {Children.toArray(children).flatMap((child, c) => {
        if (isValidElement(child)) return word(child, `e${c}`)
        return String(child)
          .split(/(\s+)/)
          .map((part, p) => (/^\s/.test(part) || part === "" ? part : word(part, `${c}-${p}`)))
      })}
    </Tag>
  )
}
