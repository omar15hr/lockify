"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ShoppingCart } from "lucide-react";
import type { CartItem } from "@/app/page";

interface ProductDetailsProps {
  onAddToCart: (product: Omit<CartItem, "quantity">) => void;
}

export function ProductDetails({ onAddToCart }: ProductDetailsProps) {
  const handleAddToCart = () => {
    onAddToCart({
      id: "lockify-pro",
      name: "Lockify Pro",
      price: 299.99,
      image: "/images/hero-img.jpg",
    });
  };

  const specifications = [
    "Dimensiones: 15cm x 8cm x 5cm",
    "Peso: 1.2kg",
    "Conectividad: WiFi 2.4GHz/5GHz",
    "Batería: Litio recargable 3000mAh",
    "Temperatura de operación: -20°C a 60°C",
    "Resistencia al agua: IP65",
    "Capacidad: 100 códigos de usuario",
    "Garantía: 2 años",
  ];

  const reviews = [
    {
      name: "María González",
      rating: 5,
      comment:
        "Excelente producto, muy fácil de instalar y usar. La app es intuitiva.",
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "La seguridad que buscaba para mi hogar. Recomendado 100%.",
    },
    {
      name: "Ana López",
      rating: 4,
      comment:
        "Muy buena calidad, aunque el precio es un poco alto vale la pena.",
    },
  ];

  return (
    <section id="product" className="py-20 bg-[#021826]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-[#f2bb13] text-[#021826]"
              >
                Producto Destacado
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#f2f2f2] mb-4">
                Lockify
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-[#f2f2f2]">(4.8/5 - 127 reseñas)</span>
              </div>
              <p className="text-lg text-[#f2f2f2] leading-relaxed">
                La cerradura inteligente más avanzada del mercado. Combina
                seguridad de nivel profesional con la comodidad del control
                remoto y la facilidad de instalación.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#f2f2f2]">
                Especificaciones
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f2bb13] flex-shrink-0" />
                    <span className="text-sm text-[#f2f2f2]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#052440]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-[#f2f2f2]">
                  $299.99
                </span>
                <Badge
                  variant="outline"
                  className="bg-[#f2bb13] text-[#052440] border-none"
                >
                  Envío Gratis
                </Badge>
              </div>
              <Button
                size="lg"
                className="w-full text-lg cursor-pointer bg-[#f2bb13] hover:bg-[#f2a30f] text-[#052440]"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Agregar al Carrito
              </Button>
              <p className="text-sm text-[#f2f2f2] mt-2 text-center">
                Entrega en 2-3 días hábiles
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-[#052440] border-none">
              <CardHeader>
                <CardTitle className="text-[#f2bb13] text-xl">
                  Reseñas de Clientes
                </CardTitle>
                <CardDescription className="text-[#f2f2f2]">
                  Lo que dicen nuestros usuarios sobre Lockify Pro
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-border last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-[#f2f2f2] text-lg">
                        {review.name}
                      </span>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#f2f2f2] leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#052440] border-none">
              <CardHeader>
                <CardTitle className="text-[#f2bb13]">
                  Garantía y Soporte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#f2bb13]" />
                  <span className="text-sm text-[#f2f2f2]">
                    Garantía de 2 años
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#f2bb13]" />
                  <span className="text-sm text-[#f2f2f2]">
                    Soporte técnico 24/7
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#f2bb13]" />
                  <span className="text-sm text-[#f2f2f2]">
                    Instalación gratuita disponible
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#f2bb13]" />
                  <span className="text-sm text-[#f2f2f2]">
                    30 días de devolución sin preguntas
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
