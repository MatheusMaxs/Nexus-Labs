import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Building, Settings, Bot, Lightbulb, Shield } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Landing Pages de Alta Conversão",
      description: "Desenvolvemos landing pages focadas em resultados, com design persuasivo e otimização por IA, construídas com a agilidade do Lovable para campanhas eficazes."
    },
    {
      icon: Building,
      title: "Websites Institucionais e Corporativos",
      description: "Construímos a presença online completa da sua empresa, desde portais informativos a plataformas complexas, com Lovable e outras tecnologias complementares."
    },
    {
      icon: Settings,
      title: "Otimização de Sites Existentes",
      description: "Elevamos a performance, o ranqueamento (SEO) e a conversão do seu site atual com auditorias e implementações estratégicas baseadas em insights de IA."
    },
    {
      icon: Bot,
      title: "Integração e Automação com IA",
      description: "Implementamos soluções de IA para automação de conteúdo, análise de dados e personalização da experiência do usuário, integráveis a projetos Lovable."
    },
    {
      icon: Lightbulb,
      title: "Consultoria em Web Design e UX/UI",
      description: "Oferecemos consultoria especializada para arquitetar soluções visualmente impactantes, intuitivas e com alta usabilidade, guiando sua estratégia de design."
    },
    {
      icon: Shield,
      title: "Manutenção e Suporte Técnico",
      description: "Garantimos o funcionamento contínuo, a segurança e a atualização do seu site com nossos planos de manutenção e suporte proativos."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Soluções Digitais <span className="text-primary">Estratégicas</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              Nossos Serviços Nexus Labs
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
               <Card 
                key={index} 
                className="bg-card border-border p-8 nexus-hover hover:bg-card/80 hover:border-primary/20 hover:scale-[1.05] group h-full nexus-transition"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 group-hover:scale-110 nexus-transition text-primary">
                    <service.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed flex-grow font-light">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              variant="nexus" 
              size="xl"
              onClick={scrollToContact}
              className="nexus-hover font-semibold"
            >
              Solicite Nossos Serviços!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};