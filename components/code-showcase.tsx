"use client"

import { useState } from "react"

const tabs = [
  {
    label: "Quick Start",
    filename: "main.rs",
    code: `use shrew::prelude::*;

fn main() -> shrew::Result<()> {
    let dev = CpuDevice;

    // Create tensors — broadcasting works automatically
    let a = CpuTensor::from_f64_slice(
        &[1.0, 2.0, 3.0], (3, 1), DType::F64, &dev
    )?;
    let b = CpuTensor::from_f64_slice(
        &[10.0, 20.0], (1, 2), DType::F64, &dev
    )?;
    let c = a.add(&b)?;  // [3,1] + [1,2] → [3,2]

    // Autograd: compute gradients
    let w = CpuTensor::rand((3, 3), DType::F64, &dev)?
        .set_variable();
    let input = CpuTensor::rand((2, 3), DType::F64, &dev)?;
    let loss = input.matmul(&w)?.sum_all()?;
    let grads = loss.backward()?;  // Reverse-mode AD

    Ok(())
}`,
  },
  {
    label: ".sw Format",
    filename: "tiny_gpt.sw",
    code: `@model {
    name: "TinyGPT";
    version: "0.1.0";
}

@config {
    vocab_size: 50257;
    d_model: 256;
    n_heads: 4;
    d_ff: 256 * 4;          // constant folding → 1024
    max_seq_len: 512;
    dropout: 0.1;
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
    model: Forward;
    loss: cross_entropy;
    optimizer: { type: "AdamW"; lr: 3e-4; }
    epochs: 20;
    batch_size: 64;
}`,
  },
  {
    label: "Transformer",
    filename: "transformer.rs",
    code: `use shrew::prelude::*;

fn main() -> shrew::Result<()> {
    let dev = CpuDevice;

    // Build a full Transformer block
    let block = TransformerBlock::<CpuBackend>::new(
        64,   // d_model
        4,    // num_heads
        256,  // d_ff
        true, // causal
        DType::F64, &dev,
    )?;

    let x = CpuTensor::rand(
        (2, 10, 64), DType::F64, &dev
    )?;
    let y = block.forward(&x)?; // [2,10,64] → [2,10,64]

    // Train with AdamW + cosine warmup
    let mut optim = AdamW::new(
        block.parameters(),
        AdamWConfig { lr: 3e-4, ..Default::default() }
    );
    let scheduler = CosineWarmupLR::new(
        &optim, 100, 1000
    );

    for epoch in 0..1000 {
        let output = block.forward(&x)?;
        let loss = cross_entropy_loss(&output, &targets)?;
        let grads = loss.backward()?;
        optim.step(&grads)?;
        scheduler.step();
    }

    Ok(())
}`,
  },
]

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="examples" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Code Examples
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Elegant API, powerful results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            From tensors to transformers, Shrew keeps your code clean and your models fast.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {/* Tab bar */}
            <div className="flex border-b border-border">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-sm font-medium transition-colors ${
                    activeTab === i
                      ? "border-b-2 border-primary bg-secondary/50 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* File name bar */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-5 py-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                {tabs[activeTab].filename}
              </span>
            </div>

            {/* Code block */}
            <div className="overflow-x-auto p-6">
              <pre className="font-mono text-sm leading-relaxed text-secondary-foreground">
                <code>{tabs[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
