import { BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            Guides for the <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs font-semibold text-foreground">.sw</code> DSL syntax, language bindings, API references, and tutorials.
            Everything you need to get started with Shrew.
          </p>
          <div className="mt-6">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://docs.shrew.ink" target="_blank" rel="noopener noreferrer">
                Read the Docs
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
