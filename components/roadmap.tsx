import { Check, Clock, ArrowRight } from "lucide-react"

const phases = [
  { phase: "0", title: "Project scaffolding", status: "done" as const },
  { phase: "1", title: "Core tensor system + CPU backend", status: "done" as const },
  { phase: "2", title: "Autograd — reverse-mode AD", status: "done" as const },
  { phase: "3", title: "NN layers + Optimizers", status: "done" as const },
  { phase: "3.5", title: "CNN building blocks", status: "done" as const },
  { phase: "4", title: "Broadcasting, MHA, TransformerBlock", status: "done" as const },
  { phase: "5", title: ".sw IR format — full pipeline", status: "done" as const },
  { phase: "6", title: "Executor & Trainer", status: "done" as const },
  { phase: "7", title: "CUDA GPU backend", status: "planned" as const },
  { phase: "8", title: "Data loading, MNIST examples", status: "done" as const },
  { phase: "8.5", title: "LR schedulers, checkpoints, char-GPT", status: "done" as const },
  { phase: "8.6", title: "GEMM matmul, comparisons, parallelism", status: "done" as const },
  { phase: "9", title: "Python/JS/WASM bindings", status: "planned" as const },
  { phase: "10", title: "Quantization, ONNX, distributed", status: "future" as const },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Roadmap
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Built methodically, phase by phase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            From tensor primitives to a full training runtime — and GPU support is next.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-6" />

            <div className="flex flex-col gap-4">
              {phases.map((p) => (
                <div key={p.phase} className="group relative flex items-start gap-4 md:gap-5">
                  {/* Status icon */}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border md:h-12 md:w-12 ${
                      p.status === "done"
                        ? "border-primary/50 bg-primary/10"
                        : p.status === "planned"
                          ? "border-border bg-secondary"
                          : "border-border bg-card"
                    }`}
                  >
                    {p.status === "done" ? (
                      <Check className="h-4 w-4 text-primary md:h-5 md:w-5" />
                    ) : p.status === "planned" ? (
                      <Clock className="h-4 w-4 text-muted-foreground md:h-5 md:w-5" />
                    ) : (
                      <ArrowRight className="h-4 w-4 text-muted-foreground md:h-5 md:w-5" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex min-h-[2.5rem] flex-1 items-center justify-between rounded-lg border border-border/50 bg-card/50 px-4 py-2.5 transition-colors group-hover:border-border md:min-h-[3rem] md:px-5 md:py-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        Phase {p.phase}
                      </span>
                      <span className="text-sm font-medium text-foreground">{p.title}</span>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        p.status === "done"
                          ? "bg-primary/10 text-primary"
                          : p.status === "planned"
                            ? "bg-secondary text-muted-foreground"
                            : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {p.status === "done" ? "Done" : p.status === "planned" ? "Planned" : "Future"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
