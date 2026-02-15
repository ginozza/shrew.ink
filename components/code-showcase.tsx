"use client"

import { useState } from "react"

const tabs = [
  {
    label: ".sw Model Spec",
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
    label: "Use from Rust",
    filename: "main.rs",
    code: `use shrew::prelude::*;
use shrew::exec::{load_program, RuntimeConfig};

fn main() -> shrew::Result<()> {
    // Load the .sw model spec — same file used by all languages
    let config = RuntimeConfig::default()
        .with_dtype(DType::F32);
    let exec = load_program::<CpuBackend>(
        include_str!("tiny_gpt.sw"),
        CpuDevice,
        config,
    )?;

    let x = CpuTensor::rand(
        (2, 512), DType::F32, &CpuDevice
    )?;
    let mut inputs = std::collections::HashMap::new();
    inputs.insert("tokens".to_string(), x);

    let result = exec.run("Forward", &inputs)?;
    let logits = result.get("logits").unwrap();

    println!("Output shape: {:?}", logits.dims());
    Ok(())
}`,
  },
  {
    label: "Use from Python",
    filename: "train.py",
    code: `import shrew

# Load the same .sw file — zero code duplication
model = shrew.load("tiny_gpt.sw")

# Python handles the data ecosystem
import numpy as np
tokens = np.random.randint(0, 50257, (64, 512))

# The Rust runtime handles all execution
logits = model.forward(tokens=tokens)
print(f"Output shape: {logits.shape}")

# Train with Python's data, Shrew's runtime
trainer = shrew.Trainer("tiny_gpt.sw")
trainer.fit(
    train_data=dataset,
    epochs=20,
    batch_size=64,
)

# Export: deploy the same model in any language
trainer.save("tiny_gpt.shrew")`,
  },
  {
    label: "Use from JS",
    filename: "inference.js",
    code: `import { Shrew } from "shrew-wasm";

// Same .sw file — runs everywhere via WASM
const model = await Shrew.load("tiny_gpt.sw");

// Run inference in the browser or Node.js
const tokens = new Int32Array(512).fill(0);
const logits = model.forward({ tokens });

console.log("Output shape:", logits.shape);

// Deploy as a serverless function
export default async function handler(req) {
    const { tokens } = await req.json();
    const result = model.forward({ tokens });
    return Response.json({
        logits: result.toArray()
    });
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
            How It Works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Define once, use everywhere
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Write your model spec in <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs text-foreground">.sw</code> once,
            then load and run it from any language. No transpilation, no code duplication.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm">
            {/* Tab bar */}
            <div className="flex overflow-x-auto border-b border-border">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`shrink-0 px-5 py-3 text-sm font-medium transition-colors ${
                    activeTab === i
                      ? "border-b-2 border-foreground bg-secondary/50 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* File name bar */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-5 py-2">
              <div className="h-3 w-3 rounded-full bg-foreground/20" />
              <div className="h-3 w-3 rounded-full bg-foreground/15" />
              <div className="h-3 w-3 rounded-full bg-foreground/10" />
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
