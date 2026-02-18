"use client"

import { useEffect, useRef } from "react"

export function DysonSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const size = 600

    canvas.width = size
    canvas.height = size

    const cx = size / 2
    const cy = size / 2
    const R = 180

    function drawRing(
      angleX: number,
      angleY: number,
      segments: number,
      ringRadius: number,
      alpha: number,
      dashLen: number
    ) {
      if (!ctx) return
      ctx.beginPath()
      for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2
        const x0 = ringRadius * Math.cos(t)
        const y0 = 0
        const z0 = ringRadius * Math.sin(t)

        // Rotate around X
        const y1 = y0 * Math.cos(angleX) - z0 * Math.sin(angleX)
        const z1 = y0 * Math.sin(angleX) + z0 * Math.cos(angleX)

        // Rotate around Y
        const x2 = x0 * Math.cos(angleY) + z1 * Math.sin(angleY)

        const sx = cx + x2
        const sy = cy + y1

        if (i === 0) ctx.moveTo(sx, sy)
        else ctx.lineTo(sx, sy)
      }
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
      ctx.lineWidth = 0.6
      ctx.setLineDash([dashLen, dashLen * 0.7])
      ctx.stroke()
      ctx.setLineDash([])
    }

    let time = 0

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, size, size)

      time += 0.002

      // Core glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40)
      grd.addColorStop(0, "rgba(255, 255, 255, 0.9)")
      grd.addColorStop(0.3, "rgba(255, 255, 255, 0.3)")
      grd.addColorStop(0.7, "rgba(200, 200, 200, 0.08)")
      grd.addColorStop(1, "rgba(150, 150, 150, 0)")
      ctx.beginPath()
      ctx.arc(cx, cy, 40, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      // Soft halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.3)
      halo.addColorStop(0, "rgba(255, 255, 255, 0.015)")
      halo.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2)
      ctx.fillStyle = halo
      ctx.fill()

      // Orbital rings
      const ringCount = 8
      for (let i = 0; i < ringCount; i++) {
        const tiltX = (i / ringCount) * Math.PI + time * (0.3 + i * 0.05)
        const tiltY = (i / ringCount) * Math.PI * 0.5 + time * (0.2 + i * 0.03)
        const a = 0.08 + (i % 3) * 0.04
        drawRing(tiltX, tiltY, 120, R, a, 4 + (i % 3) * 2)
      }

      // Panel dots on the rings
      for (let ring = 0; ring < 6; ring++) {
        const rTiltX = (ring / 6) * Math.PI + time * (0.3 + ring * 0.05)
        const rTiltY = (ring / 6) * Math.PI * 0.5 + time * (0.2 + ring * 0.03)

        for (let p = 0; p < 16; p++) {
          const t = (p / 16) * Math.PI * 2 + ring * 0.5
          const x0 = R * Math.cos(t)
          const z0 = R * Math.sin(t)

          const y1 = -z0 * Math.sin(rTiltX)
          const z1 = z0 * Math.cos(rTiltX)
          const x2 = x0 * Math.cos(rTiltY) + z1 * Math.sin(rTiltY)

          const sx = cx + x2
          const sy = cy + y1

          const depth = (z1 * Math.cos(rTiltY) - x0 * Math.sin(rTiltY) + R) / (2 * R)
          const dotAlpha = 0.04 + depth * 0.12

          ctx.beginPath()
          ctx.arc(sx, sy, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={600}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
      style={{ width: "min(600px, 90vw)", height: "min(600px, 90vw)" }}
      aria-hidden="true"
    />
  )
}
