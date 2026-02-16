import { Cpu, Brain, Layers, Zap, FileCode, Box, Gpu, BarChart3, Database, Settings2 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Reverse-Mode Autograd",
    description:
      "Eager automatic differentiation — every op records its graph, backward() does topological sort + chain rule. Gradient paths cover matmul, reshape, transpose, affine, cat, and 30+ ops.",
  },
  {
    icon: Layers,
    title: "Full Neural Network Stack",
    description:
      "Linear, Conv1d/2d, RNN, LSTM, GRU, MultiHeadAttention, TransformerBlock, BatchNorm2d, LayerNorm, GroupNorm, RMSNorm, Embedding, Dropout, and 7 loss functions.",
  },
  {
    icon: Zap,
    title: "CUDA GPU Backend",
    description:
      "NVIDIA GPU backend via cudarc with cuBLAS matmul, custom PTX kernels, memory pool with allocation reuse, and mixed-precision training (F16/BF16 ↔ F32).",
  },
  {
    icon: Cpu,
    title: "SIMD-Accelerated CPU",
    description:
      "gemm-accelerated matmul (AVX2/AVX-512/FMA), rayon parallel ops, contiguous fast-paths bypassing stride calculations. Same performance as hand-tuned C.",
  },
  {
    icon: FileCode,
    title: ".sw Intermediate Representation",
    description:
      "Declarative model specification format with lexer, parser, AST, Graph IR, shape inference, and optimization passes (DCE, CSE, constant folding, operator fusion).",
  },
  {
    icon: Settings2,
    title: "JIT Compiler",
    description:
      "JitExecutor compiles IR graphs into flat instruction tapes with pre-allocated memory slots and value lifetime tracking. No re-interpretation at runtime.",
  },
  {
    icon: Box,
    title: "Optimizers & Schedulers",
    description:
      "SGD (momentum, weight decay), Adam, AdamW, RAdam, RMSProp. LR schedulers: StepLR, CosineAnnealing, CosineWarmup, ReduceLROnPlateau. Gradient clipping + EMA.",
  },
  {
    icon: Database,
    title: "Quantization & ONNX",
    description:
      "INT8/INT4 post-training quantization (symmetric/asymmetric, per-tensor/per-channel). ONNX export/import (opset 17) with zero-dependency protobuf.",
  },
  {
    icon: BarChart3,
    title: "Training & Distributed",
    description:
      "Trainer with validation, early stopping, metric tracking. DataParallel, PipelineParallel, MixedPrecisionTrainer with dynamic loss scaling.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Features
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            The runtime powering the bridge
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A Rust-powered runtime with tensors, autograd, GPU acceleration, and a JIT compiler. The engine behind the .sw DSL — so your models run everywhere without being tied to any single technology.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-foreground/20 hover:bg-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary">
                <feature.icon className="h-5 w-5 text-foreground" />
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
