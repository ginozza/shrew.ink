"use client"

import React from "react"

interface Token {
  type: string
  value: string
}

function tokenizeRust(code: string): Token[] {
  const tokens: Token[] = []
  const patterns: [string, RegExp][] = [
    ["comment", /^\/\/.*/],
    ["string", /^"(?:[^"\\]|\\.)*"/],
    ["string", /^'(?:[^'\\]|\\.)*'/],
    ["keyword", /^(?:use|fn|let|mut|pub|mod|struct|enum|impl|trait|for|in|if|else|match|return|self|Self|crate|super|where|type|const|static|async|await|move|ref|loop|while|break|continue|unsafe|extern|dyn|as)\b/],
    ["macro", /^[a-zA-Z_][a-zA-Z0-9_]*!/],
    ["type", /^(?:i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|f32|f64|bool|char|str|String|Vec|Box|Rc|Arc|Option|Result|Ok|Err|Some|None|HashMap|CpuTensor|CpuBackend|CpuDevice|DType|Tensor|Linear|TransformerBlock|RuntimeConfig|QuantConfig|Backend)\b/],
    ["number", /^(?:0x[0-9a-fA-F_]+|0b[01_]+|0o[0-7_]+|\d[\d_]*\.[\d_]*(?:e[+-]?\d+)?|\d[\d_]*(?:e[+-]?\d+)?)\b/],
    ["function", /^[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/],
    ["operator", /^(?:->|=>|::|&&|\|\||<<|>>|[+\-*/%&|^!<>=]=?)/],
    ["punct", /^[{}()\[\];,.:?#@]/],
    ["ident", /^[a-zA-Z_][a-zA-Z0-9_]*/],
    ["space", /^\s+/],
  ]
  let remaining = code
  while (remaining.length > 0) {
    let matched = false
    for (const [type, re] of patterns) {
      const m = remaining.match(re)
      if (m) {
        tokens.push({ type, value: m[0] })
        remaining = remaining.slice(m[0].length)
        matched = true
        break
      }
    }
    if (!matched) {
      tokens.push({ type: "plain", value: remaining[0] })
      remaining = remaining.slice(1)
    }
  }
  return tokens
}

function tokenizePython(code: string): Token[] {
  const tokens: Token[] = []
  const patterns: [string, RegExp][] = [
    ["comment", /^#.*/],
    ["string", /^"""[\s\S]*?"""/],
    ["string", /^'''[\s\S]*?'''/],
    ["string", /^f"(?:[^"\\]|\\.)*"/],
    ["string", /^f'(?:[^'\\]|\\.)*'/],
    ["string", /^"(?:[^"\\]|\\.)*"/],
    ["string", /^'(?:[^'\\]|\\.)*'/],
    ["keyword", /^(?:import|from|as|def|class|return|if|elif|else|for|in|while|break|continue|pass|raise|try|except|finally|with|yield|lambda|and|or|not|is|None|True|False|assert|del|global|nonlocal|async|await)\b/],
    ["builtin", /^(?:print|len|range|int|float|str|list|dict|set|tuple|type|isinstance|enumerate|zip|map|filter|sorted|input|open|super|property|staticmethod|classmethod|abs|sum|min|max|round|format|hasattr|getattr|setattr)\b/],
    ["type", /^(?:np|numpy|shrew|torch|Tensor)\b/],
    ["decorator", /^@[a-zA-Z_][a-zA-Z0-9_.]*/],
    ["number", /^(?:0x[0-9a-fA-F]+|0b[01]+|0o[0-7]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/],
    ["function", /^[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/],
    ["operator", /^(?:->|:=|\*\*|\/\/|[+\-*/%&|^~<>=!]=?|<<|>>)/],
    ["punct", /^[{}()\[\];,.:@]/],
    ["ident", /^[a-zA-Z_][a-zA-Z0-9_]*/],
    ["space", /^\s+/],
  ]
  let remaining = code
  while (remaining.length > 0) {
    let matched = false
    for (const [type, re] of patterns) {
      const m = remaining.match(re)
      if (m) {
        tokens.push({ type, value: m[0] })
        remaining = remaining.slice(m[0].length)
        matched = true
        break
      }
    }
    if (!matched) {
      tokens.push({ type: "plain", value: remaining[0] })
      remaining = remaining.slice(1)
    }
  }
  return tokens
}

function tokenizeSw(code: string): Token[] {
  const tokens: Token[] = []
  const patterns: [string, RegExp][] = [
    ["comment", /^\/\/.*/],
    ["string", /^"(?:[^"\\]|\\.)*"/],
    ["keyword", /^(?:@model|@config|@graph|@training|input|output|param|node)\b/],
    ["directive", /^@[a-zA-Z_]+/],
    ["type", /^(?:Tensor|f16|f32|f64|i32|i64|u8|u32|bf16)\b/],
    ["builtin", /^(?:embedding|matmul|softmax|cross_entropy|repeat|transformer_block|layer_norm|transpose|normal)\b/],
    ["number", /^(?:\d+\.?\d*(?:e[+-]?\d+)?)\b/],
    ["operator", /^[+\-*/<>=!]+/],
    ["punct", /^[{}()\[\];,.:@]/],
    ["ident", /^[a-zA-Z_][a-zA-Z0-9_]*/],
    ["space", /^\s+/],
  ]
  let remaining = code
  while (remaining.length > 0) {
    let matched = false
    for (const [type, re] of patterns) {
      const m = remaining.match(re)
      if (m) {
        tokens.push({ type, value: m[0] })
        remaining = remaining.slice(m[0].length)
        matched = true
        break
      }
    }
    if (!matched) {
      tokens.push({ type: "plain", value: remaining[0] })
      remaining = remaining.slice(1)
    }
  }
  return tokens
}

function tokenizeBash(code: string): Token[] {
  const tokens: Token[] = []
  const patterns: [string, RegExp][] = [
    ["comment", /^#.*/],
    ["string", /^"(?:[^"\\]|\\.)*"/],
    ["string", /^'(?:[^'\\]|\\.)*'/],
    ["keyword", /^(?:cargo|pip|git|cd|maturin|shrew)\b/],
    ["flag", /^--?[a-zA-Z0-9_-]+/],
    ["number", /^\d+/],
    ["operator", /^[|&;><]/],
    ["ident", /^[a-zA-Z_][a-zA-Z0-9_.-]*/],
    ["space", /^\s+/],
  ]
  let remaining = code
  while (remaining.length > 0) {
    let matched = false
    for (const [type, re] of patterns) {
      const m = remaining.match(re)
      if (m) {
        tokens.push({ type, value: m[0] })
        remaining = remaining.slice(m[0].length)
        matched = true
        break
      }
    }
    if (!matched) {
      tokens.push({ type: "plain", value: remaining[0] })
      remaining = remaining.slice(1)
    }
  }
  return tokens
}

const colorMap: Record<string, string> = {
  keyword: "text-[#c678dd]",
  type: "text-[#e5c07b]",
  string: "text-[#98c379]",
  number: "text-[#d19a66]",
  comment: "text-[#5c6370] italic",
  function: "text-[#61afef]",
  macro: "text-[#61afef]",
  builtin: "text-[#61afef]",
  decorator: "text-[#e5c07b]",
  directive: "text-[#c678dd]",
  operator: "text-[#56b6c2]",
  flag: "text-[#56b6c2]",
  punct: "text-[#abb2bf]",
  ident: "text-[#e06c75]",
  plain: "text-[#abb2bf]",
  space: "",
}

export type Language = "rust" | "python" | "sw" | "bash"

function tokenize(code: string, language: Language): Token[] {
  switch (language) {
    case "rust":
      return tokenizeRust(code)
    case "python":
      return tokenizePython(code)
    case "sw":
      return tokenizeSw(code)
    case "bash":
      return tokenizeBash(code)
    default:
      return [{ type: "plain", value: code }]
  }
}

export function SyntaxHighlight({ code, language }: { code: string; language: Language }) {
  const tokens = tokenize(code, language)
  return (
    <pre className="font-mono text-sm leading-relaxed">
      <code>
        {tokens.map((token, i) => {
          const className = colorMap[token.type] || "text-[#abb2bf]"
          if (token.type === "space") {
            return <React.Fragment key={i}>{token.value}</React.Fragment>
          }
          return (
            <span key={i} className={className}>
              {token.value}
            </span>
          )
        })}
      </code>
    </pre>
  )
}
