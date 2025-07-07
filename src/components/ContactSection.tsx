import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Phone, Linkedin, Github, Instagram, Twitter } from "lucide-react";
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado!"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };
  const openWhatsApp = () => {
    const phoneNumber = "556699656306"; // +55 (66) 9965-6306
    const message = "Olá! Vamos desenvolver um site incrível juntos? 🚀";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Vamos Construir Seu <span className="text-primary">Futuro Digital</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Fale Conosco!
            </h3>
            <p className="text-xl text-secondary-foreground max-w-3xl mx-auto font-light">
              Pronto para transformar sua presença online e impulsionar seus resultados? 
              Entre em contato com a Nexus Labs hoje mesmo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">
                  Entre em Contato
                </h4>
                <p className="text-gray-300 mb-8">
                  Estamos prontos para transformar sua visão em realidade digital.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="mb-8">
                <Button variant="nexus" size="xl" onClick={openWhatsApp} className="w-full nexus-hover text-lg font-semibold">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Conversar no WhatsApp Agora
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">E-mail</p>
                    <p className="text-muted-foreground">nexuslabs.devs@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(66) 9965-6306</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome Completo *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="bg-input border-border text-white placeholder-gray-400" placeholder="Seu nome" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-input border-border text-white placeholder-gray-400" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefone *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="bg-input border-border text-white placeholder-gray-400" placeholder="(66) 9965-6306" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Empresa</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="bg-input border-border text-white placeholder-gray-400" placeholder="Sua empresa (opcional)" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensagem *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="bg-input border-border text-white placeholder-gray-400 resize-none" placeholder="Conte-nos sobre seu projeto..." />
                </div>

                <Button type="submit" variant="nexus" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};