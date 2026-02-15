import { BookOpen, Construction } from "lucide-react"

export function DocsTeaser() {
  return (
    <section id="docs" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Documentation</h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive guides, API references, and tutorials are coming soon.
            In the meantime, explore the examples in the repository.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Construction className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
