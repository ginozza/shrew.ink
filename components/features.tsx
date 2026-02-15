import { Globe, Brain, Layers, Zap, FileCode, Box } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Multi-Language Bridge",
    description:
      "Define your model once in .sw, then run it from Python, Rust, JavaScript/WASM, C/C++, or Java. Thin bindings delegate all execution to the Shrew core.",
  },
  {
    icon: FileCode,
    title: "Declarative .sw Format",
    description:
      "A language-agnostic DSL that separates model specification from execution. Architecture, hyperparams, training config — all in one readable file.",
  },
  {
    icon: Brain,
    title: "Automatic Differentiation",
    description:
      "Eager-mode reverse AD. Every tensor records its graph; backward() does topological sort + chain rule across all ops, just like PyTorch.",
  },
  {
    icon: Layers,
    title: "Full NN Layer Stack",
    description:
      "Linear, Conv2d, LSTM, GRU, LayerNorm, MultiHeadAttention, TransformerBlock, Embedding, BatchNorm2d — and growing.",
  },
  {
    icon: Zap,
    title: "SIMD-Accelerated Runtime",
    description:
      "Rust core with GEMM-accelerated matmul (AVX2/AVX-512/FMA), rayon parallelism, and contiguous fast-paths for maximum CPU performance.",
  },
  {
    icon: Box,
    title: "Modular Architecture",
    description:
      "shrew-core, shrew-cpu, shrew-nn, shrew-optim, shrew-ir, shrew-data — each concern is its own crate, independently swappable and extendable.",
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
            One spec, every ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Shrew bridges the gap between languages. Write your model definition once, and let the runtime handle training and deployment across Python, Rust, JS, C++, and more.
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
