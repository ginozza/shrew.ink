import { ArrowDown } from "lucide-react"

const crates = [
  {
    name: "shrew-core",
    description: "Tensor, Shape, DType, Layout, Backend trait, Autograd",
    color: "border-primary/40 bg-primary/5",
  },
  {
    name: "shrew-cpu",
    description: "CPU kernels, Broadcasting, SIMD",
    color: "border-primary/30 bg-primary/5",
  },
  {
    name: "shrew-nn",
    description: "Linear, Conv2d, LN, BN, MHA, Transformer, Loss",
    color: "border-primary/30 bg-primary/5",
  },
  {
    name: "shrew-optim",
    description: "SGD, Adam, AdamW, Schedulers, Grad Clip",
    color: "border-primary/30 bg-primary/5",
  },
  {
    name: "shrew-ir",
    description: ".sw IR: Lexer, Parser, AST, Graph IR, Passes",
    color: "border-primary/40 bg-primary/5",
  },
  {
    name: "shrew-data",
    description: "Dataset, DataLoader, MNIST, Transforms",
    color: "border-primary/30 bg-primary/5",
  },
]

export function Architecture() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Architecture
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Modular crate workspace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Each concern lives in its own crate. Swap backends, extend layers, add optimizers — independently.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-3">
          <PipelineStep label=".sw File" sub="Declarative model spec" />
          <ArrowDown className="h-5 w-5 text-primary" />
          <PipelineStep label="shrew-ir" sub="Lexer → Parser → AST → Graph IR" />
          <ArrowDown className="h-5 w-5 text-primary" />
          <PipelineStep label="Validate & Optimize" sub="Type checks, shape propagation, DCE, CSE, const folding" />
          <ArrowDown className="h-5 w-5 text-primary" />
          <PipelineStep label="Executor" sub="Parse → Lower → Validate → Optimize → Run" />
        </div>

        {/* Crate grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {crates.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl border p-5 transition-all hover:scale-[1.02] ${c.color}`}
            >
              <p className="font-mono text-sm font-bold text-foreground">{c.name}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PipelineStep({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="w-full rounded-lg border border-border bg-card px-6 py-4 text-center">
      <p className="font-mono text-sm font-bold text-foreground">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  )
}
