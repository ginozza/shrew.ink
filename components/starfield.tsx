"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let stars: { x: number; y: number; size: number; baseAlpha: number; speed: number; phase: number }[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      initStars()
    }

    function initStars() {
      if (!canvas) return
      const count = Math.floor((canvas.width * canvas.height) / 4000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        baseAlpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    let time = 0
    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.008

      for (const star of stars) {
        const drift = Math.sin(time * star.speed + star.phase) * 0.8
        const twinkle = Math.sin(time * 1.5 + star.phase) * 0.3
        const alpha = Math.max(0.05, Math.min(1, star.baseAlpha + twinkle))

        ctx.beginPath()
        ctx.arc(star.x + drift, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(document.documentElement)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
