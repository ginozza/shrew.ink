import { ArrowDown } from "lucide-react"

const crates = [
  {
    name: "shrew-core",
    description: "Tensor, Shape, DType, Layout, Backend trait, Autograd",
    color: "border-primary/40 bg-primary/5",
  },
  {
    name: "shrew-ir",
    description: ".sw DSL: Lexer, Parser, AST, Graph IR, Optimization Passes",
    color: "border-primary/40 bg-primary/5",
  },
  {
    name: "shrew-cpu",
    description: "CPU kernels, Broadcasting, SIMD-accelerated matmul",
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
    name: "shrew-data",
    description: "Dataset, DataLoader, MNIST, Transforms",
    color: "border-primary/30 bg-primary/5",
  },
]

const bindings = [
  { lang: "Python", tech: "PyO3", status: "Planned" },
  { lang: "JavaScript", tech: "wasm-bindgen", status: "Planned" },
  { lang: "C/C++", tech: "cbindgen", status: "Planned" },
  { lang: "Java", tech: "JNI", status: "Future" },
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
            The bridge between your model and every language
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Your <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs text-foreground">.sw</code> file
            flows through the Shrew pipeline, then thin bindings in each language delegate execution to the Rust runtime core.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-3">
          <PipelineStep label=".sw File" sub="Language-agnostic model spec (architecture, config, training)" />
          <ArrowDown className="h-5 w-5 text-primary" />
          <PipelineStep label="shrew-ir" sub="Lexer → Parser → AST → Graph IR → Validate → Optimize" />
          <ArrowDown className="h-5 w-5 text-primary" />
          <PipelineStep label="Runtime Core" sub="Tensor engine, autograd, NN layers, optimizers (Rust)" />
          <ArrowDown className="h-5 w-5 text-primary" />
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {bindings.map((b) => (
              <div key={b.lang} className="rounded-lg border border-border bg-card px-3 py-2.5 text-center">
                <p className="font-mono text-xs font-bold text-foreground">{b.lang}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{b.tech}</p>
              </div>
            ))}
          </div>
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
