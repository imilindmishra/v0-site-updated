"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ScrollFeatureProps {
  title: string
  description: string
  accent?: string
  stats?: { label: string; value: string }[]
  ctaHref?: string
  ctaLabel?: string
}

export function ScrollFeature({
  title,
  description,
  accent,
  stats,
  ctaHref,
  ctaLabel,
}: ScrollFeatureProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollableHeight =
          sectionRef.current.offsetHeight - window.innerHeight
        if (scrollableHeight <= 0) return
        const p = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1)
        setProgress(p)
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const fadeIn = Math.min(progress / 0.3, 1)
  const fadeOut = Math.max(0, 1 - (progress - 0.7) / 0.3)
  const opacity = Math.min(fadeIn, fadeOut)
  const translateY = (1 - fadeIn) * 80

  return (
    <section ref={sectionRef} className="relative h-[180vh]">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Divider line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
          style={{ opacity: fadeIn * 0.5, backgroundColor: "#222222" }}
        />

        <div
          className="text-center px-4 max-w-4xl mx-auto"
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            willChange: "transform, opacity",
          }}
        >
          {accent && (
            <p
              className="text-sm tracking-[0.3em] uppercase mb-6"
              style={{ color: "#2DD4BF" }}
            >
              {accent}
            </p>
          )}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
            style={{ color: "#F5F5F7" }}
          >
            {title}
          </h2>
          <p
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#86868B" }}
          >
            {description}
          </p>

          {stats && stats.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl md:text-5xl font-bold tabular-nums"
                    style={{ color: "#2DD4BF" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "#86868B" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {ctaHref && (
            <div className="mt-10">
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="font-semibold rounded-full px-8 h-14 text-base"
                  style={{ backgroundColor: "#2DD4BF", color: "#000000" }}
                >
                  {ctaLabel || "Learn More"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
