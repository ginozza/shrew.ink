import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CodeShowcase } from "@/components/code-showcase"
import { Performance } from "@/components/performance"
import { Architecture } from "@/components/architecture"
import { DocsTeaser } from "@/components/docs-teaser"
import { GetStarted } from "@/components/get-started"
import { Footer } from "@/components/footer"
import { Starfield } from "@/components/starfield"

export default function Page() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CodeShowcase />
        <Performance />
        <Architecture />
        <DocsTeaser />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
