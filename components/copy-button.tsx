"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 rounded-lg border border-border bg-secondary px-5 py-3 font-mono text-sm text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-secondary/80"
    >
      <span className="text-muted-foreground">$</span>
      <span>{text}</span>
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      )}
    </button>
  )
}
