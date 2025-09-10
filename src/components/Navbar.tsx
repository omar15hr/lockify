"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, Lock } from "lucide-react";

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartItemCount, onCartClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Lock className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Lockify</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Características
            </a>
            <a
              href="#gallery"
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
            </a>
            <a
              href="#product"
              className="text-foreground hover:text-primary transition-colors"
            >
              Producto
            </a>
            <a
              href="#support"
              className="text-foreground hover:text-primary transition-colors"
            >
              Soporte
            </a>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onCartClick}
            className="relative bg-transparent cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
