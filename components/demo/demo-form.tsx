"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react"

const ehrProviders = [
  "Epic",
  "Cerner",
  "Athenahealth",
  "eClinicalWorks",
  "Allscripts",
  "NextGen",
  "Meditech",
  "Other",
]

const callVolumes = [
  "Less than 50",
  "50-100",
  "100-250",
  "250-500",
  "500+",
]

const benefits = [
  {
    icon: Users,
    text: "500+ clinics trust iClinic AI",
  },
  {
    icon: Clock,
    text: "Save 20+ hours of staff time per week",
  },
  {
    icon: CheckCircle,
    text: "Personalized ROI analysis included",
  },
]

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your demo request has been received. Our team will contact you
              within 24 hours to schedule your personalized ROI audit.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Request a Personalized ROI Audit
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill out the form below and our team will prepare a custom
              analysis based on your practice&apos;s metrics.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@clinic.com"
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="practice">Practice Name</Label>
                <Input
                  id="practice"
                  placeholder="ABC Medical Center"
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ehr">EHR Provider</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      {ehrProviders.map((provider) => (
                        <SelectItem key={provider} value={provider.toLowerCase()}>
                          {provider}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="volume">Monthly Call Volume</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent>
                      {callVolumes.map((volume) => (
                        <SelectItem key={volume} value={volume.toLowerCase()}>
                          {volume}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Why Talk to Us?
              </h3>

              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;iClinic AI transformed our front desk operations. We went
                  from missing 30% of calls to capturing virtually all of them.
                  The ROI was immediate.&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  - Dr. Sarah Chen, Family Medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
