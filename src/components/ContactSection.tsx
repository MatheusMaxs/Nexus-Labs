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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
                  Entre em Contato
                </h4>
                <p className="text-gray-300 mb-6 lg:mb-8 text-sm lg:text-base">
                  Estamos prontos para transformar sua visão em realidade digital.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="mb-6 lg:mb-8">
                <Button variant="nexus" size="xl" onClick={openWhatsApp} className="w-full nexus-hover text-base lg:text-lg font-semibold">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 lg:w-6 lg:h-6 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                  </svg>
                  <span className="hidden sm:inline">Conversar no WhatsApp Agora</span>
                  <span className="sm:hidden">WhatsApp</span>
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-foreground font-semibold text-sm lg:text-base">E-mail</p>
                    <p className="text-muted-foreground text-sm lg:text-base break-all">Nexuslabs.devs@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-foreground font-semibold text-sm lg:text-base">Telefone</p>
                    <p className="text-muted-foreground text-sm lg:text-base">(66) 9965-6306</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm lg:text-base">Nome Completo *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-input border-border text-white placeholder-gray-400 h-10 lg:h-12 text-sm lg:text-base" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm lg:text-base">E-mail *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-input border-border text-white placeholder-gray-400 h-10 lg:h-12 text-sm lg:text-base" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white text-sm lg:text-base">Telefone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-input border-border text-white placeholder-gray-400 h-10 lg:h-12 text-sm lg:text-base" 
                      placeholder="(66) 9965-6306" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white text-sm lg:text-base">Empresa</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleInputChange} 
                      className="bg-input border-border text-white placeholder-gray-400 h-10 lg:h-12 text-sm lg:text-base" 
                      placeholder="Sua empresa (opcional)" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white text-sm lg:text-base">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    rows={4}
                    className="bg-input border-border text-white placeholder-gray-400 resize-none text-sm lg:text-base min-h-[100px] lg:min-h-[120px]" 
                    placeholder="Conte-nos sobre seu projeto..." 
                  />
                </div>

                <Button type="submit" variant="nexus" size="lg" className="w-full h-12 lg:h-14 text-sm lg:text-base">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};