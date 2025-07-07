import { Card } from "@/components/ui/card";
import { Brain, Zap, TrendingUp, Palette, Rocket } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Inovação AI-Powered",
      description: "Nossa abordagem combina IA para design inteligente, geração de conteúdo e otimização de SEO."
    },
    {
      icon: Zap,
      title: "Agilidade com Lovable",
      description: "Desenvolvemos e entregamos projetos com agilidade incomparável e gerenciamento simplificado."
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Foco em ROI e métricas claras para garantir que seu site converta visitantes em clientes."
    },
    {
      icon: Palette,
      title: "Design de Elite",
      description: "Criamos experiências visuais premium, focadas em UX e usabilidade impecável."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Sua Visão, Nossa <span className="text-primary">Inteligência</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              A História da Nexus Labs
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed font-light">
                Na Nexus Labs, somos uma agência digital movida pela paixão em inovar e entregar excelência. 
                Com uma equipe especializada e uma metodologia focada em resultados, combinamos a velocidade 
                e o poder visual da plataforma Lovable com a capacidade transformadora da Inteligência Artificial.
              </p>
              
              <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed font-light">
                Nossa missão é clara: descomplicar e elevar a criação web, garantindo que sua presença online 
                não apenas atraia, mas converta e impulsione seu crescimento. Acreditamos que a tecnologia deve 
                ser uma aliada estratégica, e a IA, uma ferramenta para alcançar resultados que antes eram inatingíveis.
              </p>
            </div>

            {/* Visual Element - Rocket Icon */}
            <div className="relative">
              <div className="w-full h-80 rounded-2xl nexus-glass border border-primary/10 flex items-center justify-center relative overflow-hidden">
                {/* Foguete principal */}
                <div className="relative">
                  <Rocket className="w-32 h-32 text-primary animate-nexus-pulse" />
                </div>
                
                {/* Efeitos de partículas */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/4 w-1 h-8 bg-gradient-to-t from-primary/40 to-transparent animate-nexus-float"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-8 bg-gradient-to-b from-primary/40 to-transparent animate-nexus-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/4 left-1/2 w-8 h-1 bg-gradient-to-r from-primary/40 to-transparent animate-nexus-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border-border p-8 text-center nexus-hover hover:bg-card/80 hover:border-primary/20 hover:scale-110 group nexus-transition"
              >
                <div className="text-primary mb-6 group-hover:scale-110 nexus-transition">
                  <feature.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};