import { Box, FileCode, Brain, Code2, Rocket, Terminal } from "lucide-react"

const features = [
  {
    icon: Box,
    title: "Modular by Design",
    description:
      "Use only what you need. Pick individual crates like shrew-core for tensors, shrew-cuda for GPU, or shrew-nn for layers — each works on its own.",
  },
  {
    icon: FileCode,
    title: "Write Once, Run Anywhere",
    description:
      "Define your model in a .sw file — a clean, human-readable format that separates architecture from code. No boilerplate, no transpilation headaches.",
  },
  {
    icon: Brain,
    title: "Rust Safety, Familiar Feel",
    description:
      "Eager-mode autograd with an intuitive API, plus Rust's type safety and fearless concurrency. Catch shape bugs at compile time, not at 3am.",
  },
  {
    icon: Code2,
    title: "Python Native, Rust Powered",
    description:
      "Research in Python, deploy in Rust — seamlessly. Zero-copy NumPy interop and a familiar API make the transition painless.",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    description:
      "Small binaries, minimal dependencies, and native quantization (INT8/INT4). From cloud servers to edge devices, Shrew goes where you need it.",
  },
  {
    icon: Terminal,
    title: "Built-in CLI Tools",
    description:
      "Inspect, validate, and benchmark your models from the command line. Run shrew dump, validate, bench, or info — no extra setup required.",
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
            Why choose Shrew
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Built from the ground up in Rust for performance, flexibility, and ease of use.
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
