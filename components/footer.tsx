import Link from "next/link"
import { Github } from "lucide-react"
import { ShrewLogo } from "@/components/shrew-logo"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <ShrewLogo size={24} />
          <span className="text-sm font-semibold text-foreground">Shrew</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#performance" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Performance
          </Link>
          <Link href="#examples" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Examples
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </nav>

        <p className="text-sm text-muted-foreground">
          MIT / Apache-2.0
        </p>
      </div>
    </footer>
  )
}
