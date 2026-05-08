"use client"

import { motion } from "framer-motion"
import { Zap, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

const footerLinks = {
  tienda: ["Laptops", "Componentes", "Servidores", "Perifericos"],
  servicios: ["Reparacion", "Mantenimiento", "Servidores", "Redes"],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <a href="#inicio" className="group flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-60 blur-sm" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">
                Digitronyx
              </span>
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Soluciones integrales en tecnologia. Hardware premium y soporte
              tecnico profesional para empresas y profesionales.
            </p>
            {/* Status indicator */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Todos los servicios operativos
            </div>
          </div>

          {/* Tienda Links */}
          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-primary">
              Tienda
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.tienda.map((item) => (
                <li key={item}>
                  <a
                    href="#tienda"
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios Links */}
          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-accent">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.servicios.map((item) => (
                <li key={item}>
                  <a
                    href="#servicios"
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-primary">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                info@digitronyx.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Av. Tecnologia 1024, Ciudad Digital
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground font-mono">
            {new Date().getFullYear()} Digitronyx Solutions. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Privacidad</a>
            <span className="text-border">|</span>
            <a href="#" className="transition-colors hover:text-foreground">Terminos</a>
            <span className="text-border">|</span>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
