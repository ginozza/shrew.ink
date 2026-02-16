import { ArrowDown } from "lucide-react"

const crates = [
  {
    name: "shrew-core",
    description: "Tensor<B>, Shape, DType, Layout, Backend trait, reverse-mode autograd, dynamic symbolic shapes",
  },
  {
    name: "shrew-ir",
    description: ".sw format: lexer, parser, AST, Graph IR, lowering, validation, shape inference, optimization passes",
  },
  {
    name: "shrew-cpu",
    description: "CPU backend: SIMD matmul via gemm (AVX2/AVX-512/FMA), parallel ops via rayon, broadcasting",
  },
  {
    name: "shrew-cuda",
    description: "NVIDIA GPU backend: cuBLAS matmul, custom PTX kernels, memory pool, mixed-precision F16/BF16",
  },
  {
    name: "shrew-nn",
    description: "Linear, Conv1d/2d, RNN/LSTM/GRU, MultiHeadAttention, Transformer, BatchNorm, LayerNorm, losses",
  },
  {
    name: "shrew-optim",
    description: "SGD, Adam, AdamW, RAdam, RMSProp, LR schedulers, gradient clipping, EMA",
  },
  {
    name: "shrew-data",
    description: "Dataset trait, DataLoader, MNIST, image transforms, async prefetch loader",
  },
  {
    name: "shrew",
    description: "Facade crate: executor, JIT compiler, trainer, distributed training, quantization, ONNX, profiling",
  },
  {
    name: "shrew-python",
    description: "Python bindings via PyO3 with NumPy interop (from_numpy, to_numpy)",
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
            Each concern is its own crate — independently swappable and extendable.
            The same <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs text-foreground">Tensor&lt;B&gt;</code> code
            runs on CPU and GPU without changes.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-3">
          <PipelineStep label=".sw File" sub="Declarative model spec (architecture, config, training)" />
          <ArrowDown className="h-5 w-5 text-foreground/40" />
          <PipelineStep label="shrew-ir" sub="Lexer → Parser → AST → Graph IR → Validate → Shape Infer → Optimize" />
          <ArrowDown className="h-5 w-5 text-foreground/40" />
          <PipelineStep label="JIT Compiler" sub="Flat instruction tape, pre-allocated memory slots, value lifetime tracking" />
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
              <p className="font-mono text-sm font-bold text-foreground">{c.name}</p>
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
