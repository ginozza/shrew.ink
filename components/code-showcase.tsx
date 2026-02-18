"use client"

import { useState } from "react"
import { SyntaxHighlight, type Language } from "@/components/syntax-highlight"

const tabs: { label: string; filename: string; language: Language; code: string }[] = [
  {
    label: "Tensor & Autograd",
    filename: "main.rs",
    language: "rust",
    code: `use shrew::prelude::*;

fn main() -> shrew::Result<()> {
    let dev = CpuDevice;

    // Broadcasting: [3,1] + [1,2] → [3,2]
    let a = CpuTensor::from_f64_slice(
        &[1.0, 2.0, 3.0], (3, 1), DType::F64, &dev
    )?;
    let b = CpuTensor::from_f64_slice(
        &[10.0, 20.0], (1, 2), DType::F64, &dev
    )?;
    let c = a.add(&b)?;

    // Reverse-mode autograd
    let w = CpuTensor::randn((3, 3), DType::F64, &dev)?
        .set_variable();
    let x = CpuTensor::randn((2, 3), DType::F64, &dev)?;
    let loss = x.matmul(&w)?.sum_all()?;
    let grads = loss.backward()?;
    let dw = grads.get(&w).unwrap();  // ∂loss/∂w

    Ok(())
}`,
  },
  {
    label: "Neural Networks",
    filename: "train.rs",
    language: "rust",
    code: `use shrew::prelude::*;

fn main() -> shrew::Result<()> {
    let dev = CpuDevice;

    // Transformer forward pass
    let block = TransformerBlock::<CpuBackend>::new(
        64, 4, 256, true, DType::F64, &dev
    )?;
    let x = CpuTensor::rand((2, 10, 64), DType::F64, &dev)?;
    let y = block.forward(&x)?;  // [2, 10, 64]

    // Training with Adam optimizer
    let model = Linear::<CpuBackend>::new(
        784, 10, true, DType::F32, &dev
    )?;
    let mut optimizer = Adam::new(
        model.parameters(), 3e-4, 0.9, 0.999, 1e-8
    )?;

    // LR scheduling
    let mut scheduler = CosineAnnealingLR::new(
        &optimizer, 100, 1e-6
    );

    Ok(())
}`,
  },
  {
    label: ".sw Model Spec",
    filename: "tiny_gpt.sw",
    language: "sw",
    code: `@model { name: "TinyGPT"; }

@config {
    d_model: 256;
    n_heads: 4;
    d_ff: 256 * 4;   // constant folding → 1024
}

@graph Forward {
    input tokens: Tensor<[Batch, SeqLen], i64>;
    param wte: Tensor<[50257, 256], f32>
        { init: "normal(0, 0.02)"; };
    param wpe: Tensor<[512, 256], f32>
        { init: "normal(0, 0.02)"; };

    node tok_emb { op: embedding(wte, tokens); };
    node pos_emb { op: embedding(wpe, positions); };
    node h       { op: tok_emb + pos_emb; };
    node tf_out  { op: repeat(4) {
        transformer_block(h, n_heads: 4);
    }; };
    node logits  { op: matmul(ln_out, transpose(wte)); };
    output logits;
}

@training {
    loss: cross_entropy;
    optimizer: { type: "AdamW"; lr: 3e-4; }
    epochs: 20;
    batch_size: 64;
}`,
  },
  {
    label: "Python Bindings",
    filename: "train.py",
    language: "python",
    code: `import shrew_python as shrew
import numpy as np

# Create tensors with NumPy interop
data = np.random.randn(64, 784).astype(np.float32)
t = shrew.from_numpy(data)
print(f"Tensor shape: {t.shape}")

# Load and execute .sw models
model = shrew.load("tiny_gpt.sw")
tokens = np.random.randint(0, 50257, (64, 512))
logits = model.forward(tokens=tokens)

# Train with Shrew's Rust runtime
trainer = shrew.Trainer("tiny_gpt.sw")
trainer.fit(
    train_data=dataset,
    epochs=20,
    batch_size=64,
)

# Export trained model
trainer.save("tiny_gpt.shrew")`,
  },
  {
    label: "Quantization",
    filename: "quantize.rs",
    language: "rust",
    code: `use shrew::prelude::*;

fn main() -> shrew::Result<()> {
    let dev = CpuDevice;

    // Build a model
    let model = Linear::<CpuBackend>::new(
        256, 128, true, DType::F32, &dev
    )?;

    // INT8 post-training quantization
    let config = QuantConfig::int8_per_channel();
    let quantized = quantize_named_parameters::<CpuBackend>(
        &model, &config
    )?;

    // Benchmark forward pass
    let result = benchmark_forward(
        &model,
        || CpuTensor::rand(
            (32, 256), DType::F32, &dev
        ).unwrap(),
        32, 5, 100,
    )?;
    println!("{}", result);

    // Save as safetensors (HuggingFace compatible)
    save_safetensors(&model, "model.safetensors")?;

    Ok(())
}`,
  },
]

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="examples" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Code Examples
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Real examples showing how Shrew works — from basic tensor math to training a GPT model.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border bg-[#282c34] backdrop-blur-sm">
            {/* Tab bar */}
            <div className="flex overflow-x-auto border-b border-[#3e4451] bg-[#21252b]">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`shrink-0 px-5 py-3 text-sm font-medium transition-colors ${activeTab === i
                      ? "border-b-2 border-[#61afef] bg-[#282c34] text-[#abb2bf]"
                      : "text-[#5c6370] hover:text-[#abb2bf]"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* File name bar */}
            <div className="flex items-center gap-2 border-b border-[#3e4451]/50 bg-[#21252b]/60 px-5 py-2">
              <div className="h-3 w-3 rounded-full bg-[#e06c75]/60" />
              <div className="h-3 w-3 rounded-full bg-[#e5c07b]/60" />
              <div className="h-3 w-3 rounded-full bg-[#98c379]/60" />
              <span className="ml-2 font-mono text-xs text-[#5c6370]">
                {tabs[activeTab].filename}
              </span>
            </div>

            {/* Code block */}
            <div className="overflow-x-auto p-6">
              <SyntaxHighlight
                code={tabs[activeTab].code}
                language={tabs[activeTab].language}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
