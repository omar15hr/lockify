import { Lock, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const productLinks = [
  { href: "#features", label: "Características" },
  { href: "#gallery", label: "Galería" },
  { href: "#", label: "Especificaciones" },
  { href: "#", label: "Instalación" },
];

const supportLinks = [
  { href: "#", label: "Centro de Ayuda" },
  { href: "#", label: "Garantía" },
  { href: "#", label: "Devoluciones" },
  { href: "#", label: "FAQ" },
];

const contactInfo = [
  { icon: Mail, text: "soporte@lockify.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "San Francisco, CA" },
];

const footerLinks = [
  { href: "#", label: "Política de Privacidad" },
  { href: "#", label: "Términos de Servicio" },
];

export function Footer() {
  return (
    <footer className="bg-[#021826] border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lock className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-[#f2f2f2]">Lockify</span>
            </div>
            <p className="text-[#f2f2f2] text-sm leading-relaxed">
              La solución más avanzada en cerraduras inteligentes para tu hogar.
              Seguridad, comodidad y tecnología en un solo producto.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#f2f2f2]">Producto</h3>
            <ul className="space-y-2 text-sm">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#f2f2f2] hover:text-[#f2bb13] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#f2f2f2]">Soporte</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#f2f2f2] hover:text-[#f2bb13] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#f2f2f2]">Contacto</h3>
            <div className="space-y-3 text-sm">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-[#f2bb13]" />
                    <span className="text-[#f2f2f2]">
                      {contact.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-[#f2f2f2]">
            &copy; 2024 Lockify. Todos los derechos reservados. |
            {footerLinks.map((link, index) => (
              <span key={index}>
                <Link href={link.href} className="hover:text-[#f2bb13] transition-colors ml-1">
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && " |"}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
