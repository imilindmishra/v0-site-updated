"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, Clock, Users } from "lucide-react"

export function SavingsCalculator() {
  const [providers, setProviders] = useState(5)
  const [callsPerDay, setCallsPerDay] = useState(50)

  // Calculations based on industry averages
  const missedCallRate = 0.3 // 30% of calls typically missed
  const avgRevenuePerAppointment = 250
  const missedCallsPerDay = Math.round(callsPerDay * missedCallRate)
  const recoveredCallsPerDay = Math.round(missedCallsPerDay * 0.85) // 85% capture rate
  const dailyRevenue = recoveredCallsPerDay * avgRevenuePerAppointment
  const monthlyRevenue = dailyRevenue * 22 // 22 working days
  const annualRevenue = monthlyRevenue * 12
  const hoursRecovered = Math.round(providers * 4) // 4 hours per provider per week

  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <Calculator className="h-4 w-4 text-primary" />
            Interactive Calculator
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Estimate Your Savings
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See how much revenue you could recover by eliminating missed calls
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Number of Providers
                    </label>
                    <span className="text-2xl font-bold text-primary">
                      {providers}
                    </span>
                  </div>
                  <Slider
                    value={[providers]}
                    onValueChange={(value) => setProviders(value[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="mt-4"
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Calls Per Day
                    </label>
                    <span className="text-2xl font-bold text-primary">
                      {callsPerDay}
                    </span>
                  </div>
                  <Slider
                    value={[callsPerDay]}
                    onValueChange={(value) => setCallsPerDay(value[0])}
                    min={10}
                    max={500}
                    step={10}
                    className="mt-4"
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                  <p>
                    Based on industry data: 30% of calls are typically missed,
                    and iClinic AI captures 85% of those missed opportunities.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  Estimated Recovery
                </h3>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Monthly Revenue Recovery
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        ${monthlyRevenue.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Annual Revenue Recovery
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        ${annualRevenue.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Staff Hours Saved/Week
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {hoursRecovered} hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Calls Captured Daily
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {recoveredCallsPerDay} calls
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
