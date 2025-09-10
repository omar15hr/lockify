import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Shield, Clock, Wifi, Battery, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Control Remoto",
      description: "Abre y cierra tu puerta desde cualquier lugar del mundo con nuestra app móvil.",
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Encriptación de nivel militar y alertas instantáneas ante intentos de acceso no autorizado.",
    },
    {
      icon: Clock,
      title: "Acceso Temporal",
      description: "Crea códigos temporales para invitados, trabajadores o servicios de entrega.",
    },
    {
      icon: Wifi,
      title: "Conectividad WiFi",
      description: "Conexión estable y segura a tu red doméstica para control en tiempo real.",
    },
    {
      icon: Battery,
      title: "Batería Duradera",
      description: "Hasta 12 meses de autonomía con alertas de batería baja automáticas.",
    },
    {
      icon: Users,
      title: "Múltiples Usuarios",
      description: "Gestiona hasta 100 usuarios diferentes con permisos personalizados.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-[#021826]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f2f2f2]">
            Características que marcan la <span className="text-[#f2bb13]">diferencia</span>
          </h2>
          <p className="text-md text-[#f2f2f2] max-w-2xl mx-auto text-pretty">
            Lockify Pro combina seguridad, comodidad y tecnología de vanguardia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none bg-[#052440] hover:shadow-[#f2bb13]">
              <CardHeader>
                <div className="w-12 h-12 bg-[#f2bb13] text-[#052440] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-[#f2f2f2]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed text-[#f2f2f2]">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
