"use client"

import { useState, useEffect, useCallback } from "react"
import { Copy, Check } from "lucide-react"

const commands = [
  { lang: "Rust", prefix: "$", cmd: "cargo add shrew" },
  { lang: "Python", prefix: "$", cmd: "pip install shrew-python" },
  { lang: "CLI", prefix: "$", cmd: "cargo install shrew-cli" },
]

export function DynamicInstall() {
  const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % commands.length)
        setFading(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(commands[index].cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [index])

  const current = commands[index]

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 rounded-lg border border-border bg-secondary px-5 py-3 font-mono text-sm text-secondary-foreground transition-colors hover:border-foreground/20 hover:bg-secondary/80"
    >
      <span className="shrink-0 rounded bg-card px-1.5 py-0.5 text-xs text-muted-foreground">
        {current.lang}
      </span>
      <span
        className={`transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
      >
        <span className="text-muted-foreground">{current.prefix} </span>
        {current.cmd}
      </span>
      {copied ? (
        <Check className="ml-auto h-4 w-4 shrink-0 text-foreground" />
      ) : (
        <Copy className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      )}
    </button>
  )
}
