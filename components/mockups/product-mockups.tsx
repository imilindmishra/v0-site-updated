import type { ReactNode } from "react"
import {
  Phone,
  PhoneIncoming,
  PhoneCall,
  Calendar,
  Users,
  LayoutDashboard,
  Settings,
  Search,
  Bell,
  CheckCircle2,
  ArrowUpRight,
  Pill,
  Stethoscope,
  Activity,
  Droplets,
  Scale,
  HeartPulse,
  AlertTriangle,
  Clock,
  Bot,
  User,
} from "lucide-react"

/**
 * Presentational, screenshot-style mockups of the iClinic AI product.
 * These render a light "SaaS app" interface inside a window frame so visitors
 * can immediately see what the software does. Pure presentational — no state.
 */

function WindowFrame({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-2xl ring-1 ring-black/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
          <span className="h-2 w-2 rounded-full bg-teal-500" />
          {title}
        </div>
      </div>
      {children}
    </div>
  )
}

function AppSidebar({ active }: { active: string }) {
  const items = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Calls", icon: Phone },
    { label: "Schedule", icon: Calendar },
    { label: "Patients", icon: Users },
    { label: "Settings", icon: Settings },
  ]
  return (
    <aside className="hidden w-44 shrink-0 flex-col border-r border-slate-200 bg-slate-50 p-3 sm:flex">
      <div className="mb-4 flex items-center gap-2 px-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500 text-sm font-bold text-white">
          iC
        </div>
        <span className="text-sm font-semibold text-slate-800">iClinic AI</span>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = item.label === active
          return (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm ${
                isActive
                  ? "bg-teal-500/10 font-medium text-teal-700"
                  : "text-slate-500"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

function AppTopBar({ heading }: { heading: string }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
      <h3 className="text-sm font-semibold text-slate-800">{heading}</h3>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1.5 text-xs text-slate-400 md:flex">
          <Search className="h-3.5 w-3.5" />
          Search patients
        </div>
        <Bell className="h-4 w-4 text-slate-400" />
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-teal-400 to-teal-600" />
      </div>
    </div>
  )
}

/* ----------------------------- Call Dashboard ----------------------------- */

export function CallDashboardMockup() {
  const kpis = [
    { label: "Calls Today", value: "128", icon: PhoneIncoming },
    { label: "Answered", value: "100%", icon: CheckCircle2 },
    { label: "Avg. Handle Time", value: "1m 42s", icon: Clock },
    { label: "Appointments Booked", value: "37", icon: Calendar },
  ]
  const calls = [
    { name: "Maria Alvarez", reason: "Prescription refill", status: "Resolved", time: "9:42 AM", tone: "green" },
    { name: "James Whitfield", reason: "Reschedule appointment", status: "Booked", time: "9:38 AM", tone: "teal" },
    { name: "Linda Park", reason: "Shortness of breath", status: "Escalated", time: "9:31 AM", tone: "amber" },
    { name: "Robert Chen", reason: "New patient intake", status: "Resolved", time: "9:24 AM", tone: "green" },
    { name: "Deborah Hughes", reason: "Billing question", status: "Resolved", time: "9:15 AM", tone: "green" },
  ]
  const toneMap: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    teal: "bg-teal-100 text-teal-700",
    amber: "bg-amber-100 text-amber-700",
  }
  return (
    <WindowFrame title="app.iclinic.ai/dashboard">
      <div className="flex">
        <AppSidebar active="Dashboard" />
        <div className="min-w-0 flex-1">
          <AppTopBar heading="Call Dashboard" />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {kpis.map((kpi) => {
                const Icon = kpi.icon
                return (
                  <div key={kpi.label} className="rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{kpi.label}</span>
                      <Icon className="h-4 w-4 text-teal-500" />
                    </div>
                    <p className="mt-1.5 text-xl font-bold text-slate-900">{kpi.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5">
                <span className="text-sm font-semibold text-slate-800">Recent Calls</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-teal-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  Live
                </span>
              </div>
              <div className="divide-y divide-slate-100">
                {calls.map((call) => (
                  <div key={call.name} className="flex items-center gap-3 px-4 py-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                      <PhoneCall className="h-3.5 w-3.5 text-slate-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-800">{call.name}</p>
                      <p className="truncate text-xs text-slate-500">{call.reason}</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${toneMap[call.tone]}`}>
                      {call.status}
                    </span>
                    <span className="hidden w-16 text-right text-xs text-slate-400 sm:block">{call.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  )
}

/* ---------------------------- Call Summary view --------------------------- */

export function CallSummaryMockup() {
  const transcript = [
    { who: "ai", text: "Thank you for calling Riverside Clinic, this is the iClinic assistant. How can I help you today?" },
    { who: "patient", text: "Hi, I need to refill my lisinopril prescription." },
    { who: "ai", text: "Of course. I see your lisinopril 10mg with one refill remaining. Shall I send it to your pharmacy on Main Street?" },
    { who: "patient", text: "Yes please, that one works." },
    { who: "ai", text: "Done. The refill request has been sent to your provider for approval and logged to your chart." },
  ]
  return (
    <WindowFrame title="app.iclinic.ai/calls/4821">
      <div className="grid gap-0 md:grid-cols-5">
        {/* Summary panel */}
        <div className="border-b border-slate-200 p-5 md:col-span-2 md:border-b-0 md:border-r">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            <CheckCircle2 className="h-3.5 w-3.5" /> Resolved
          </span>
          <h3 className="mt-3 text-base font-semibold text-slate-900">Prescription Refill</h3>
          <p className="text-xs text-slate-500">Call #4821 · 1m 42s · 9:42 AM</p>

          <dl className="mt-4 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Patient</dt>
              <dd className="font-medium text-slate-800">Maria Alvarez</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Provider</dt>
              <dd className="font-medium text-slate-800">Dr. N. Patel</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Logged to EHR</dt>
              <dd className="flex items-center gap-1 font-medium text-teal-600">
                <CheckCircle2 className="h-3.5 w-3.5" /> Synced
              </dd>
            </div>
          </dl>

          <div className="mt-4 rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">AI Summary</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Patient requested a refill for lisinopril 10mg. Refill routed to Main Street Pharmacy and submitted for
              provider approval.
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm text-teal-700">
            <Pill className="h-4 w-4" />
            Action: Refill sent for approval
          </div>
        </div>

        {/* Transcript */}
        <div className="p-5 md:col-span-3">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Live Transcript</p>
          <div className="space-y-3">
            {transcript.map((turn, i) => (
              <div key={i} className={`flex gap-2.5 ${turn.who === "patient" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    turn.who === "ai" ? "bg-teal-500 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {turn.who === "ai" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    turn.who === "ai"
                      ? "rounded-tl-sm bg-slate-100 text-slate-700"
                      : "rounded-tr-sm bg-teal-500 text-white"
                  }`}
                >
                  {turn.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowFrame>
  )
}

/* --------------------------- Scheduling screen ---------------------------- */

export function SchedulingMockup() {
  const hours = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM"]
  const appts: Record<string, { label: string; tone: string }> = {
    "9 AM": { label: "M. Alvarez · Follow-up", tone: "bg-teal-100 text-teal-800 border-teal-300" },
    "10 AM": { label: "R. Chen · New patient", tone: "bg-blue-100 text-blue-800 border-blue-300" },
    "11 AM": { label: "L. Park · Cardiology", tone: "bg-amber-100 text-amber-800 border-amber-300" },
  }
  return (
    <WindowFrame title="app.iclinic.ai/schedule">
      <div className="flex">
        <AppSidebar active="Schedule" />
        <div className="min-w-0 flex-1">
          <AppTopBar heading="Appointment Scheduling" />
          <div className="grid gap-0 lg:grid-cols-3">
            {/* Day column */}
            <div className="border-b border-slate-200 p-5 lg:col-span-2 lg:border-b-0 lg:border-r">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800">Thursday, June 26</span>
                <span className="text-xs text-slate-400">Dr. N. Patel</span>
              </div>
              <div className="space-y-1.5">
                {hours.map((hour) => {
                  const appt = appts[hour]
                  return (
                    <div key={hour} className="flex items-stretch gap-3">
                      <span className="w-12 shrink-0 pt-1.5 text-right text-xs text-slate-400">{hour}</span>
                      {appt ? (
                        <div className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium ${appt.tone}`}>
                          {appt.label}
                        </div>
                      ) : (
                        <div className="flex-1 rounded-lg border border-dashed border-slate-200 px-3 py-2 text-xs text-slate-300">
                          Available
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* New appointment panel */}
            <div className="p-5">
              <p className="text-sm font-semibold text-slate-800">New Appointment</p>
              <p className="mt-0.5 text-xs text-slate-400">Booked by AI from inbound call</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Patient", value: "Maria Alvarez" },
                  { label: "Type", value: "Follow-up visit" },
                  { label: "Provider", value: "Dr. N. Patel" },
                  { label: "Date", value: "Jun 26, 9:00 AM" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-xs text-slate-400">{field.label}</label>
                    <div className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      {field.value}
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center gap-1.5 rounded-lg bg-teal-500 py-2.5 text-sm font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4" /> Confirm &amp; Sync to EHR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  )
}

/* ----------------------- Patient Monitoring dashboard --------------------- */

export function PatientMonitoringMockup() {
  const vitals = [
    { label: "Weight", value: "184.6 lb", delta: "+2.4 lb / 24h", icon: Scale, alert: true },
    { label: "Blood Pressure", value: "128/82", delta: "Stable", icon: Activity, alert: false },
    { label: "Heart Rate", value: "76 bpm", delta: "Normal", icon: HeartPulse, alert: false },
    { label: "Glucose", value: "112 mg/dL", delta: "In range", icon: Droplets, alert: false },
  ]
  // simple sparkline points (not geographic data — decorative trend line)
  const points = "0,34 20,30 40,32 60,26 80,28 100,18 120,20 140,12 160,8"
  return (
    <WindowFrame title="app.iclinic.ai/patients/heart-failure">
      <div className="flex">
        <AppSidebar active="Patients" />
        <div className="min-w-0 flex-1">
          <AppTopBar heading="Patient Monitoring" />
          <div className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Linda Park · 68</p>
                <p className="text-xs text-slate-500">CHF · Daily voice check-in · Dr. Patel</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {vitals.map((v) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.label}
                    className={`rounded-lg border p-3 ${
                      v.alert ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{v.label}</span>
                      <Icon className={`h-4 w-4 ${v.alert ? "text-amber-500" : "text-teal-500"}`} />
                    </div>
                    <p className="mt-1.5 text-lg font-bold text-slate-900">{v.value}</p>
                    <p className={`text-xs ${v.alert ? "font-medium text-amber-600" : "text-slate-400"}`}>{v.delta}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-5">
              {/* Trend */}
              <div className="rounded-lg border border-slate-200 p-4 lg:col-span-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">Weight Trend · 14 days</span>
                  <span className="flex items-center gap-1 text-xs font-medium text-amber-600">
                    <ArrowUpRight className="h-3.5 w-3.5" /> Rising
                  </span>
                </div>
                <svg viewBox="0 0 160 44" className="mt-3 h-20 w-full" preserveAspectRatio="none">
                  <polyline points={points} fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Alert */}
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 lg:col-span-2">
                <div className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-semibold">Care Team Alert</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-amber-700">
                  Weight up 2.4 lb in 24h. Possible fluid retention — flagged for clinician review and added to today&apos;s
                  worklist.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Stethoscope className="h-3.5 w-3.5" /> Notified: Dr. Patel · 7:14 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  )
}
