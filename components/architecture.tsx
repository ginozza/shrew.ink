import { ArrowDown } from "lucide-react"

const crates = [
  {
    name: "shrew-core",
    description: "The foundation: tensors, shapes, data types, and automatic differentiation.",
  },
  {
    name: "shrew-ir",
    description: (<>Parses <code className="font-mono font-semibold">.sw</code> model files into optimized execution graphs.</>),
  },
  {
    name: "shrew-cpu",
    description: "High-performance CPU computations with SIMD acceleration.",
  },
  {
    name: "shrew-cuda",
    description: "NVIDIA GPU acceleration with optimized memory management.",
  },
  {
    name: "shrew-nn",
    description: "Ready-to-use neural network layers: Linear, Conv, Transformer, and more.",
  },
  {
    name: "shrew-optim",
    description: "Optimizers (Adam, SGD, etc.) and learning rate schedulers.",
  },
  {
    name: "shrew-data",
    description: "Data loading utilities and built-in datasets like MNIST.",
  },
  {
    name: "shrew",
    description: "The main package: JIT compiler, trainer, quantization, ONNX export, and more.",
  },
  {
    name: "shrew-python",
    description: "Python bindings with seamless NumPy integration.",
  },
]

const serialization = [
  { format: ".shrew", description: "Native binary checkpoints" },
  { format: "Safetensors", description: "HuggingFace compatible" },
  { format: "ONNX", description: "Opset 17, zero deps" },
]

export function Architecture() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Architecture
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Modular by design
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Every component is its own independent package — use what you need, swap what you don&apos;t.
            The same code runs on CPU and GPU without changes.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-3">
          <PipelineStep label=".sw Model File" sub="Your model definition — architecture, config, and training in one place" />
          <ArrowDown className="h-5 w-5 text-foreground/40" />
          <PipelineStep label="shrew-ir" sub="Parse → Optimize → Prepare for execution" />
          <ArrowDown className="h-5 w-5 text-foreground/40" />
          <PipelineStep label="JIT Compiler" sub="Compile into fast, ready-to-run instructions" />
          <ArrowDown className="h-5 w-5 text-foreground/40" />
          <div className="grid w-full grid-cols-3 gap-2">
            <div className="rounded-lg border border-border bg-card/80 px-3 py-2.5 text-center backdrop-blur-sm">
              <p className="font-mono text-xs font-bold text-foreground">CPU</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">SIMD + rayon</p>
            </div>
            <div className="rounded-lg border border-border bg-card/80 px-3 py-2.5 text-center backdrop-blur-sm">
              <p className="font-mono text-xs font-bold text-foreground">CUDA</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">cuBLAS + PTX</p>
            </div>
            <div className="rounded-lg border border-border bg-card/80 px-3 py-2.5 text-center backdrop-blur-sm">
              <p className="font-mono text-xs font-bold text-foreground">Python</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">PyO3 + NumPy</p>
            </div>
          </div>
        </div>

        {/* Crate grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {crates.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-all hover:border-foreground/20 hover:scale-[1.02]"
            >
              <a href={`https://github.com/ginozza/${c.name}`} target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-bold text-foreground underline decoration-foreground/30 underline-offset-2 transition-colors hover:decoration-foreground">{c.name}</a>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>

        {/* Serialization formats */}
        <div className="mx-auto mt-12 max-w-2xl">
          <p className="mb-4 text-center text-sm font-medium text-muted-foreground">Serialization Formats</p>
          <div className="grid grid-cols-3 gap-3">
            {serialization.map((s) => (
              <div key={s.format} className="rounded-lg border border-border bg-card/80 px-4 py-3 text-center backdrop-blur-sm">
                <p className="font-mono text-xs font-bold text-foreground">{s.format}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PipelineStep({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="w-full rounded-lg border border-border bg-card/80 px-6 py-4 text-center backdrop-blur-sm">
      <p className="font-mono text-sm font-bold text-foreground">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  )
}
