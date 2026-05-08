"use client"

import { ParticleField } from "@/components/particle-field"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TicketForm } from "@/components/ticket-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background noise-overlay">
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <TicketForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}
