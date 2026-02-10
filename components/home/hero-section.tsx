"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Partner Badges Bar - Fixed at top below header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-card/90 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">AWS for Startups</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#76B900]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">NVIDIA Inception Startup</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#20B8CD]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">Perplexity Business Fellow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left Content - Dark Theme */}
        <div className="relative flex items-center bg-background pt-16 pb-12 lg:pt-20">
          <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              HIPAA Compliant Voice AI
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The EHR-Integrated Voice Agent for{" "}
              <span className="text-primary">Smart Clinics</span>
            </h1>

            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed max-w-lg">
              HIPAA-compliant voice AI that handles scheduling, refills, and
              triage while syncing bi-directionally with your EHR. Reduce staff
              burnout and never miss a patient call again.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link href="/about#demo">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  Watch and Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image - Full Height */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/ai-clinic-hero.png"
            alt="AI-powered clinic reception with holographic assistant helping elderly patients"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        </div>

        {/* Mobile Image */}
        <div className="relative lg:hidden h-64 sm:h-80">
          <Image
            src="/images/ai-clinic-hero.png"
            alt="AI-powered clinic reception with holographic assistant helping elderly patients"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}
