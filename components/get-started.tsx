import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { CopyButton } from "@/components/copy-button"

export function GetStarted() {
  return (
    <section id="get-started" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 md:p-16">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Ready to build with Shrew?
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Add Shrew to your Rust project and start building neural networks with a clean, modular API.
            </p>

            <div className="mt-8">
              <CopyButton text="cargo add shrew" />
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link href="#examples">
                  See Examples
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Quick commands */}
            <div className="mt-12 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">Run tests</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo test --workspace</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">MNIST example</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo run -p mnist-example</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">CNN example</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo run -p mnist-cnn-example</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">Char-level GPT</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo run --release -p char-gpt-example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
