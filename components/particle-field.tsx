"use client"

import { useRef, useEffect, useCallback, memo } from "react"

export const ParticleField = memo(function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }>>([])
  const animationId = useRef<number>(0)
  const isVisible = useRef(true)

  const initParticles = useCallback((width: number, height: number) => {
    // Reducir cantidad de particulas significativamente
    const count = Math.min(30, Math.floor((width * height) / 40000))
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Detectar preferencia de movimiento reducido
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      initParticles(window.innerWidth, window.innerHeight)
    }

    // Pausar cuando no es visible
    const handleVisibility = () => {
      isVisible.current = document.visibilityState === "visible"
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    document.addEventListener("visibilitychange", handleVisibility)

    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    const animate = (currentTime: number) => {
      animationId.current = requestAnimationFrame(animate)
      
      if (!isVisible.current) return
      
      const delta = currentTime - lastTime
      if (delta < interval) return
      lastTime = currentTime - (delta % interval)

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const len = particles.current.length
      for (let i = 0; i < len; i++) {
        const p = particles.current[i]
        
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = window.innerWidth
        else if (p.x > window.innerWidth) p.x = 0
        if (p.y < 0) p.y = window.innerHeight
        else if (p.y > window.innerHeight) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`
        ctx.fill()
      }
    }

    animationId.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId.current)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
      aria-hidden="true"
    />
  )
})
