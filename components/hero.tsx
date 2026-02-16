import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DynamicInstall } from "@/components/dynamic-install"
import { DysonSphere } from "@/components/dyson-sphere"
import { ShrewLogo } from "@/components/shrew-logo"

const languages = ["Python", "Rust", "C/C++", "JavaScript", "WASM", "Java"]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Dyson Sphere background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <DysonSphere />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="text-xs font-medium text-foreground/80">One model. Every language. Zero friction.</span>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <ShrewLogo size={72} />
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            The Universal{" "}
            <span className="text-foreground/60">Deep Learning</span>{" "}
            Bridge
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Shrew is a runtime and DSL that decouples deep learning from any single technology.
            Define your model once in{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">.sw</code>,
            then train and deploy it from Python, Rust, JavaScript, C++, or any language in your stack.
          </p>

          {/* Feature pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-secondary-foreground"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link href="#get-started">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <DynamicInstall />
          </div>
        </div>
      </div>
    </section>
  )
}
