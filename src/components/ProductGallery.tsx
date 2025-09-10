"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/images/hero-img.jpg",
      alt: "Vista frontal de Lockify Pro",
    },
    {
      src: "/images/hero-img.jpg",
      alt: "Vista lateral de instalación",
    },
    {
      src: "/images/hero-img.jpg",
      alt: "Interfaz de la aplicación móvil",
    },
    {
      src: "/images/hero-img.jpg",
      alt: "Componentes internos",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
 
  return (
    <section id="gallery" className="py-20 bg-[#021826]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f2f2f2] text-balance">
            Galería del producto
          </h2>
          <p className="text-md text-[#f2f2f2] max-w-2xl mx-auto text-pretty">
            Explora Lockify Pro desde todos los ángulos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                width={500}
                height={500}
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImage
                    ? "bg-[#f2bb13]"
                    : "bg-[#f2bb13]/30"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImage ? "border-primary" : "border-border"
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  width={200}
                  height={200}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
