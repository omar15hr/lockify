"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, Lock } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const itemsLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#features", label: "Características" },
  { href: "#gallery", label: "Galería" },
  { href: "#product", label: "Producto" },
  { href: "#support", label: "Soporte" },
];

export function Navbar({ cartItemCount, onCartClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#021826]/95 text-[#f2f2f2] backdrop-blur supports-[backdrop-filter]:bg-[#021826]/60 border-b border-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Lock className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-[#f2f2f2]">Lockify</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {itemsLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#f2f2f2] hover:text-[#f2bb13] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={onCartClick}
            className="relative bg-transparent cursor-pointer border-none hover:bg-[#052440] hover:text-[#f2bb13]"
          >
            <ShoppingCart className="h-8 w-8" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#f2bb13] text-[#052440] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
