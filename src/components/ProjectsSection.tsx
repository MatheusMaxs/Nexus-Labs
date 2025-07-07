import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Shirt, Laptop, Calendar, Tent } from "lucide-react";

export const ProjectsSection = () => {
  const mainProject = {
    name: "Arena Fit Training Center",
    challenge: "Elevar a presença digital de uma academia líder em Sinop-MT, otimizando design, performance e captação de leads.",
    solution: "Com a agilidade do Lovable e insights de IA para otimização de conteúdo e CTAs, redesenhamos o site para um visual premium, carregamento ultrarrápido e uma jornada de conversão aprimorada.",
    results: [
      "Potencial para aumento de +40% em agendamentos de aulas experimentais",
      "Redução de -60% no tempo de carregamento da página principal",
      "Otimização de SEO para maior visibilidade em buscas locais",
      "Aumento da percepção de marca como premium e moderna"
    ],
    demoUrl: "https://arena-fit.vercel.app",
    icon: Dumbbell
  };

  const otherProjects = [
    {
      name: "Landing Page para E-commerce de Moda Sustentável",
      challenge: "Criar uma presença online que comunicasse valores de sustentabilidade e convertesse visitantes em clientes.",
      solution: "Design minimalista com foco em storytelling visual e CTAs estratégicos.",
      results: "Aumento de 85% na taxa de conversão",
      icon: Shirt
    },
    {
      name: "Website Institucional para Startup Tech",
      challenge: "Estabelecer credibilidade e atrair investidores para uma startup em crescimento.",
      solution: "Plataforma moderna com seções dedicadas a métricas de crescimento e depoimentos.",
      results: "300% de aumento em leads qualificados",
      icon: Laptop
    },
    {
      name: "Sistema de Agendamento Online",
      challenge: "Simplificar o processo de agendamento para clínicas médicas.",
      solution: "Interface intuitiva com integração de calendário e automação de confirmações.",
      results: "Redução de 70% no tempo de agendamento",
      icon: Calendar
    },
    {
      name: "Site de Eventos Otimizado por IA",
      challenge: "Criar uma plataforma que se adaptasse às preferências dos usuários.",
      solution: "Algoritmo de recomendação personalizada e design responsivo.",
      results: "Aumento de 50% no engajamento",
      icon: Tent
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Projetos que Geram <span className="text-primary">Resultados Reais</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              Sua Visão Transformada em Sucesso
            </h3>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {otherProjects.map((project, index) => (
               <Card 
                key={index} 
                className="bg-card border-border p-6 nexus-hover hover:bg-card/80 hover:border-primary/20 hover:scale-[1.08] group h-full nexus-transition"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 group-hover:scale-110 nexus-transition text-primary">
                    <project.icon size={24} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {project.name}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-3 flex-grow font-light">
                    {project.challenge}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-primary">
                      {project.results}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA to Projects Page */}
          <div className="text-center">
            <Button 
              variant="nexus" 
              size="xl"
              onClick={() => window.location.href = '/projetos'}
              className="nexus-hover font-semibold"
            >
              Ver Todos os Nossos Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
