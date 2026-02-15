import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy } from "lucide-react"
import { CopyButton } from "@/components/copy-button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Written from scratch in Rust</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            The Deep Learning{" "}
            <span className="text-primary">Runtime</span>{" "}
            for Rust
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Define your model once in <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">.sw</code> files.
            Train in Python, deploy in Rust/WASM/mobile. Zero transpilation, exact reproducibility.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link href="#get-started">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <CopyButton text="cargo add shrew" />
          </div>

          {/* Mascot */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
              <Image
                src="/images/shrew-mascot.jpg"
                alt="Shrew mascot - the friendly face of the Shrew deep learning runtime"
                width={200}
                height={200}
                className="relative rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
