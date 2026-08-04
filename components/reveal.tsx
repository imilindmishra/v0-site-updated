"use client"

import { useReveal } from "@/hooks/use-motion"
import { cn } from "@/lib/utils"

/** Shared reveal-on-scroll wrapper. Server pages can use this directly. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "li" | "article" | "figure"
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
