"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const CONTACT_EMAIL = "info@imedclinic.ai"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "")
    const clinic = String(data.get("clinic") || "")
    const email = String(data.get("email") || "")
    const ehr = String(data.get("ehr") || "")
    const message = String(data.get("message") || "")

    const subject = `iClinic AI Demo Request — ${clinic || name}`
    const body = [
      `Name: ${name}`,
      `Clinic / Organization: ${clinic}`,
      `Email: ${email}`,
      `EHR in use: ${ehr}`,
      "",
      "What we'd like to automate:",
      message,
    ].join("\n")

    // ponytail: mailto only — no backend in scope; swap for an API route when one exists
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">Request a Demo</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Tell us a little about your clinic, the EHR you use, and what you&apos;d like to automate. We&apos;ll set up a
        walkthrough of iClinic AI tailored to your workflow.
      </p>

      <div role="status" aria-live="polite">
        {submitted && (
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-success-bg p-4">
            <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <p className="text-sm text-success leading-relaxed">
              Thanks! Your email draft should have opened. If it didn&apos;t, email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {!submitted && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required placeholder="Jane Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinic">Clinic / organization</Label>
              <Input id="clinic" name="clinic" required placeholder="Riverside Family Care" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@clinic.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ehr">EHR you use</Label>
              <Input id="ehr" name="ehr" placeholder="Epic, athenahealth, etc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What would you like to automate?</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Scheduling, refills, after-hours calls, patient follow-ups..."
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Send Message
            <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            This opens a pre-filled email to our team. Prefer email directly?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </form>
      )}
    </div>
  )
}
