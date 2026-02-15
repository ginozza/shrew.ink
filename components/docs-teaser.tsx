import { BookOpen, Construction } from "lucide-react"

export function DocsTeaser() {
  return (
    <section id="docs" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card/80 p-8 text-center backdrop-blur-sm md:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary">
            <BookOpen className="h-7 w-7 text-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Documentation</h2>
          <p className="mt-4 text-muted-foreground">
            Guides for the .sw DSL syntax, language bindings, API references, and tutorials are coming soon.
            In the meantime, explore the examples in the repository.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2">
            <Construction className="h-4 w-4 text-foreground/70" />
            <span className="text-sm font-medium text-foreground/70">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
