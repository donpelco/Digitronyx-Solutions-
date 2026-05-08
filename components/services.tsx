"use client"

import { motion } from "framer-motion"
import {
  Wrench,
  Settings,
  Server,
  MonitorSmartphone,
  HardDrive,
  Wifi,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Reparacion de Equipos",
    description:
      "Diagnostico y reparacion profesional de laptops, PCs y perifericos con componentes originales.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    icon: Settings,
    title: "Mantenimiento",
    description:
      "Planes preventivos para optimizar rendimiento y extender la vida util.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    span: "",
    large: false,
  },
  {
    icon: Server,
    title: "Servidores",
    description:
      "Instalacion y administracion de servidores. AD, DNS, DHCP.",
    gradient: "from-primary/15 to-transparent",
    iconBg: "bg-primary/10",
    span: "",
    large: false,
  },
  {
    icon: MonitorSmartphone,
    title: "Soporte Remoto",
    description:
      "Asistencia inmediata via conexion remota. Sin tiempos de espera.",
    gradient: "from-accent/15 to-transparent",
    iconBg: "bg-accent/10",
    span: "md:col-span-2",
    large: false,
  },
  {
    icon: HardDrive,
    title: "Recuperacion de Datos",
    description:
      "Recuperamos informacion de discos danados o formateados.",
    gradient: "from-primary/10 to-transparent",
    iconBg: "bg-primary/10",
    span: "",
    large: false,
  },
  {
    icon: Wifi,
    title: "Redes & Infraestructura",
    description:
      "Diseno e instalacion de redes LAN/WAN, cableado estructurado y WiFi empresarial.",
    gradient: "from-accent/10 to-primary/5",
    iconBg: "bg-accent/10",
    span: "md:col-span-2",
    large: false,
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-24">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings className="h-5 w-5 text-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Servicios
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Servicios IT
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground leading-relaxed">
            Soluciones integrales de soporte tecnico con tecnologia de
            vanguardia para tu empresa.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-colors duration-200 hover:border-primary/20 ${service.span}`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className={`relative z-10 flex h-full flex-col ${service.large ? "p-8 md:p-10" : "p-6"}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} transition-all group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]`}>
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:border-primary/30 group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <h3 className={`font-semibold text-foreground ${service.large ? "text-2xl mb-3" : "text-lg mb-2"}`}>
                  {service.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${service.large ? "text-base" : "text-sm"}`}>
                  {service.description}
                </p>

                {service.large && (
                  <div className="mt-auto pt-6">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Ver mas detalles
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
