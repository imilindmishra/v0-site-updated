"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ScrollHero() {
  console.log("[v0] ScrollHero component rendered")
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

  const imageScale = 1 + progress * 0.6
  const textOpacity = Math.max(0, 1 - progress * 3)
  const subtitleOpacity = Math.max(0, 1 - progress * 2.5)
  const imageOpacity = Math.max(0, 1 - Math.max(0, progress - 0.6) * 2.5)
  const blurAmount = Math.max(0, progress - 0.5) * 20

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.05) 0%, transparent 60%)",
            opacity: 1 - progress,
          }}
        />

        {/* Product image */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: imageOpacity,
            transform: `scale(${imageScale})`,
            filter: `blur(${blurAmount}px)`,
            willChange: "transform, opacity, filter",
          }}
        >
          <Image
            src="/images/voice-ai-hero.jpg"
            alt="iClinic Voice AI Interface"
            width={700}
            height={700}
            className="object-contain"
            priority
          />
        </div>

        {/* Text overlay */}
        <div className="relative z-10 text-center px-4">
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            style={{ opacity: subtitleOpacity, color: "#2DD4BF" }}
          >
            Introducing
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter"
            style={{ opacity: textOpacity, willChange: "opacity", color: "#F5F5F7" }}
          >
            iClinic Voice AI
          </h1>
          <p
            className="mt-6 text-lg md:text-xl max-w-lg mx-auto leading-relaxed"
            style={{ opacity: subtitleOpacity, color: "#86868B" }}
          >
            Where empathy meets algorithm.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - progress * 5) }}
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "#86868B" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 animate-bounce" style={{ backgroundColor: "rgba(45,212,191,0.5)" }} />
        </div>
      </div>
    </section>
  )
}
