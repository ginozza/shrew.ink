import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { DynamicInstall } from "@/components/dynamic-install"

export function GetStarted() {
  return (
    <section id="get-started" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/80 p-8 backdrop-blur-sm md:p-16">
          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Ready to bridge your deep learning?
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Define your model once in .sw, and let Shrew connect it to every language in your stack. Start with the Rust core today — bindings for Python, JS, and C++ are coming next.
            </p>

            <div className="mt-8">
              <DynamicInstall />
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
                <p className="text-xs font-medium text-muted-foreground">Run all 319 tests</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo test --workspace</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">MNIST with MLP</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo run -p mnist-example</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">MNIST with CNN</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">cargo run -p mnist-cnn-example</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">Char-level GPT</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">{"cargo run --release -p char-gpt-example"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
