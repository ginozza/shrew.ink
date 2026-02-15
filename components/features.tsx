import { Cpu, Brain, Layers, Zap, GitBranch, Box } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Automatic Differentiation",
    description:
      "Eager-mode reverse AD like PyTorch. Every tensor records its graph; backward() does topological sort + chain rule across all ops.",
  },
  {
    icon: Layers,
    title: "Full NN Layer Stack",
    description:
      "Linear, Conv2d, LSTM, GRU, LayerNorm, MultiHeadAttention, TransformerBlock, Embedding, BatchNorm2d, and more.",
  },
  {
    icon: Zap,
    title: "SIMD-Accelerated CPU",
    description:
      "GEMM crate for AVX2/AVX-512/FMA matrix multiply, rayon parallelism, and contiguous fast-paths for all elementwise ops.",
  },
  {
    icon: GitBranch,
    title: "Declarative .sw IR",
    description:
      "Define models in language-agnostic .sw files. The compiler handles lexing, parsing, lowering, validation, shape inference, and optimization.",
  },
  {
    icon: Box,
    title: "Modular Crate Design",
    description:
      "shrew-core, shrew-cpu, shrew-nn, shrew-optim, shrew-ir, shrew-data — each concern is independent and swappable.",
  },
  {
    icon: Cpu,
    title: "Train & Deploy Anywhere",
    description:
      "Define a transformer in .sw once, train it in Python with its data ecosystem, deploy in Rust/WASM/mobile with zero transpilation.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Everything you need for deep learning in Rust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A complete tensor system, autograd engine, neural network layers, optimizers, schedulers, and a declarative IR — all written from scratch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
