"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TicketForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", category: "", description: "" })
    }, 3000)
  }

  return (
    <section id="soporte" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto flex items-center justify-center gap-3 mb-3">
              <Headphones className="h-5 w-5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent">
                Soporte
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Soporte Tecnico
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Describe tu problema y nuestro equipo te contactara en menos de 24
              horas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Glow behind form */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 via-transparent to-accent/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-card/30 p-12 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10"
                  >
                    <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ticket Enviado</h3>
                  <p className="text-muted-foreground text-center">
                    Nuestro equipo revisara tu solicitud y te contactara pronto.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm lg:p-10"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-foreground text-sm">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="rounded-xl border-border bg-background/50 focus:border-primary/30 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-foreground text-sm">
                        Correo electronico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="rounded-xl border-border bg-background/50 focus:border-primary/30 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="category" className="text-foreground text-sm">
                      Categoria del problema
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, category: val }))
                      }
                      required
                    >
                      <SelectTrigger id="category" className="rounded-xl border-border bg-background/50">
                        <SelectValue placeholder="Selecciona una categoria" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-border bg-popover backdrop-blur-sm">
                        <SelectItem value="hardware">Problema de Hardware</SelectItem>
                        <SelectItem value="software">Problema de Software</SelectItem>
                        <SelectItem value="network">Red / Conectividad</SelectItem>
                        <SelectItem value="server">Servidores</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="description" className="text-foreground text-sm">
                      Descripcion del problema
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe tu problema tecnico con el mayor detalle posible..."
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="rounded-xl border-border bg-background/50 focus:border-primary/30 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Ticket
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
