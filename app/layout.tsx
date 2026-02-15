import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Shrew — A Deep Learning Runtime for Rust',
  description: 'A modular deep learning runtime written from scratch in Rust with a declarative, multi-language Intermediate Representation. Define once in .sw, train anywhere, deploy everywhere.',
  keywords: ['deep learning', 'rust', 'machine learning', 'neural network', 'autograd', 'tensor', 'runtime'],
}

export const viewport: Viewport = {
  themeColor: '#0a0d14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
