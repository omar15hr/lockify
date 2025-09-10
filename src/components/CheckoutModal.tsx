"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, CheckCircle } from "lucide-react"
import type { CartItem } from "@/app/page"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  totalPrice: number
  onOrderComplete: () => void
}

export function CheckoutModal({ isOpen, onClose, items, totalPrice, onOrderComplete }: CheckoutModalProps) {
  const [step, setStep] = useState<"payment" | "processing" | "success">("payment")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStep("processing")

    // Simular procesamiento de pago
    setTimeout(() => {
      setStep("success")
      setTimeout(() => {
        onOrderComplete()
        setStep("payment")
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipCode: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        })
      }, 3000)
    }, 2000)
  }

  const renderPaymentForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Información de Contacto
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Dirección de Envío</h3>
        <div>
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">Ciudad</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="zipCode">Código Postal</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Información de Pago
        </h3>
        <div>
          <Label htmlFor="cardNumber">Número de Tarjeta</Label>
          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiryDate">Fecha de Vencimiento</Label>
            <Input
              id="expiryDate"
              placeholder="MM/AA"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={(e) => handleInputChange("cvv", e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Completar Pedido - ${totalPrice.toFixed(2)}
      </Button>
    </form>
  )

  const renderProcessing = () => (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">Procesando tu pedido...</h3>
      <p className="text-muted-foreground">Por favor espera mientras procesamos tu pago</p>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center py-12">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">¡Pedido Completado!</h3>
      <p className="text-muted-foreground mb-4">
        Tu pedido ha sido procesado exitosamente. Recibirás un email de confirmación pronto.
      </p>
      <p className="text-sm text-muted-foreground">
        Número de orden: #LK{Math.random().toString(36).substr(2, 9).toUpperCase()}
      </p>
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {step === "payment" && "Finalizar Compra"}
            {step === "processing" && "Procesando Pedido"}
            {step === "success" && "Pedido Completado"}
          </DialogTitle>
          <DialogDescription>
            {step === "payment" && "Completa tu información para finalizar la compra"}
            {step === "processing" && "Estamos procesando tu pedido de forma segura"}
            {step === "success" && "Tu pedido ha sido procesado exitosamente"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            {step === "payment" && renderPaymentForm()}
            {step === "processing" && renderProcessing()}
            {step === "success" && renderSuccess()}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
                <CardDescription>Revisa tu compra</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Envío gratuito incluido</p>
                  <p>• Entrega en 2-3 días hábiles</p>
                  <p>• Garantía de 2 años</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
