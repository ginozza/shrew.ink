import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="hsl(25, 95%, 55%)" />
            <path
              d="M7 18C7 18 9 12 14 10C19 8 22 10 22 10L20 14C20 14 17 12 14 13C11 14 9 18 9 18H7Z"
              fill="hsl(220, 20%, 4%)"
              stroke="hsl(220, 20%, 4%)"
              strokeWidth="0.5"
            />
            <circle cx="19" cy="11" r="1.2" fill="hsl(220, 20%, 4%)" />
          </svg>
          <span className="text-sm font-semibold text-foreground">Shrew</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#performance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Performance
          </Link>
          <Link href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Examples
          </Link>
          <Link href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Roadmap
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
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
