"use client"

import { Button } from "@/components/ui/button"
import { Shield, Smartphone, Zap } from "lucide-react"
import type { CartItem } from "@/app/page"

interface HeroSectionProps {
  onAddToCart: (product: Omit<CartItem, "quantity">) => void
}

export function HeroSection({ onAddToCart }: HeroSectionProps) {
  const handleAddToCart = () => {
    onAddToCart({
      id: "lockify-pro",
      name: "Lockify Pro",
      price: 299.99,
      image: "/smart-electronic-door-lock.jpg",
    })
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-muted to-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Asegura tu hogar con <span className="text-primary">tecnología inteligente</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Lockify Pro es la cerradura eléctrica más avanzada del mercado. Control remoto, alertas de seguridad y
                instalación fácil en un solo dispositivo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={handleAddToCart}>
                Comprar Ahora - $299.99
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Seguridad Garantizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Control Remoto</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Instalación Rápida</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/modern-smart-door-lock-with-digital-display.jpg"
                alt="Lockify Pro Smart Lock"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
