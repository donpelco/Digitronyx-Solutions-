"use client"

import { motion } from "framer-motion"
import { ArrowDown, ShieldCheck, Truck, Headphones, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: ShieldCheck, label: "Garantia Oficial", desc: "2 anos completos" },
  { icon: Truck, label: "Envio Express", desc: "24-48h a todo el pais" },
  { icon: Headphones, label: "Soporte 24/7", desc: "Asistencia continua" },
]

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + i * 0.03,
      ease: "easeOut",
    },
  }),
}

export function Hero() {
  const title = "DIGITRONYX"

  return (
    <section
      id="inicio"
      className="relative min-h-screen"
    >
      {/* Static background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 aurora-bg" />
        <div className="absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 -right-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-8">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-medium text-slate-900 dark:bg-card/50 dark:border-border dark:text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-bold">Hardware Premium</span>
            <span className="text-slate-500 dark:text-slate-400">&</span>
            <span className="font-bold">Soporte IT Profesional</span>
          </div>
        </motion.div>

        {/* Title */}
        <div className="mt-8 mb-6 overflow-hidden">
          <h1 className="flex flex-wrap justify-center text-5xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-primary"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle with gradient */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Equipos de computo, componentes y servidores de las mejores marcas.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
            Soporte tecnico especializado
          </span>{" "}
          y configuracion profesional.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-3 text-primary-foreground shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            asChild
          >
            <a href="#servicios">
              Nuestros Servicios
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {features.map((feat) => (
            <div
              key={feat.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/30 px-5 py-4 transition-colors hover:border-primary/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <feat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{feat.label}</p>
                <p className="text-xs text-muted-foreground">{feat.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
