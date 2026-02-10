const stats = [
  { value: "3K", label: "Trusted Customers" },
  { value: "1M", label: "Reports Generated" },
  { value: "32K", label: "Token Access" },
  { value: "10", label: "Supported Languages" },
]

export function StatsSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Glimpse into Our Growth
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center"
            >
              <span className="text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
