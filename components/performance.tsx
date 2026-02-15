const benchmarks = [
  { operation: "matmul", size: "256x256", time: "~370 \u00B5s", bar: 10 },
  { operation: "matmul", size: "512x512", time: "~3.5 ms", bar: 35 },
  { operation: "add", size: "1M elements", time: "~1.3 ms", bar: 13 },
  { operation: "exp", size: "1M elements", time: "~1.8 ms", bar: 18 },
  { operation: "relu", size: "1M elements", time: "~1.0 ms", bar: 10 },
  { operation: "linear fwd", size: "[64,512]x[512,512]+bias", time: "~3.9 ms", bar: 39 },
]

export function Performance() {
  return (
    <section id="performance" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Performance
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Fast Rust core, every language benefits
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Every language binding delegates execution to the same SIMD-accelerated Rust runtime.{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">gemm</code>{" "}
              handles AVX2/AVX-512/FMA matmul,{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">rayon</code>{" "}
              parallelizes batched ops. Python, JS, or C++ — same native speed.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-foreground">319</p>
                <p className="mt-1 text-sm text-muted-foreground">Tests passing</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">5</p>
                <p className="mt-1 text-sm text-muted-foreground">DType support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">29+</p>
                <p className="mt-1 text-sm text-muted-foreground">Tensor ops</p>
              </div>
            </div>
          </div>

          {/* Right column — benchmark bars */}
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mb-6 text-sm font-medium text-muted-foreground">
              CPU Benchmark — release mode (AMD/Intel)
            </p>
            <div className="flex flex-col gap-4">
              {benchmarks.map((b, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono text-foreground">
                      {b.operation}{" "}
                      <span className="text-muted-foreground">{b.size}</span>
                    </span>
                    <span className="font-mono text-primary">{b.time}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${Math.min(b.bar * 2.5, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
