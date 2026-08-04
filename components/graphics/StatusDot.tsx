import { cn } from "@/lib/utils"

/**
 * G6 — the one live-status badge, reused site-wide.
 * Pulse is gated on prefers-reduced-motion via the .status-ping utility.
 */
export function StatusDot({
  label,
  tone = "success",
  className,
}: {
  label: string
  tone?: "success" | "accent"
  className?: string
}) {
  const dot = tone === "success" ? "bg-success" : "bg-accent"
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className={cn("status-ping absolute inline-flex h-full w-full rounded-full opacity-60", dot)} />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dot)} />
      </span>
      {label}
    </span>
  )
}
