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
              Start building with Shrew
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Add Shrew to your Rust project, use the Python bindings, or define models in{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground">.sw</code>{" "}
              files. One runtime, every language.
            </p>

            <div className="mt-8">
              <DynamicInstall />
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://github.com/ginozza/shrew" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://docs.shrew.ink" target="_blank" rel="noopener noreferrer">
                  Read the Docs
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Quick commands */}
            <div className="mt-12 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2">
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
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <p className="text-xs font-medium text-muted-foreground">Python bindings</p>
                <p className="mt-1.5 font-mono text-sm text-foreground">pip install shrew-python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
