import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Shrew — The Universal Deep Learning Bridge',
  description: 'A DSL and runtime that bridges deep learning across every language. Define models once in .sw files, train in Python, deploy in Rust, JS, C++, or WASM. One spec, every ecosystem.',
  keywords: ['deep learning', 'DSL', 'multi-language', 'machine learning', 'neural network', 'interoperability', 'python', 'rust', 'javascript', 'wasm'],
  metadataBase: new URL('https://shrew.ink'),
  openGraph: {
    title: 'Shrew — The Universal Deep Learning Bridge',
    description: 'Define your model once in .sw, then train and deploy it from Python, Rust, JavaScript, C++, or any language in your stack.',
    url: 'https://shrew.ink',
    siteName: 'Shrew',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrew — The Universal Deep Learning Bridge',
    description: 'Define your model once in .sw, then train and deploy it from Python, Rust, JavaScript, C++, or any language in your stack.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
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
