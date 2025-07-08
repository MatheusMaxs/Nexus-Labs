import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Dumbbell, Shirt, Laptop, Calendar, Tent, Users, Building, Zap, ArrowLeft } from "lucide-react";

export const Projects = () => {
  const allProjects = [
    {
      name: "Maxs fit Training Center",
      challenge: "Elevar a presença digital de uma academia líder em Sinop-MT, otimizando design, performance e captação de leads.",
      solution: "Com a agilidade do Lovable e insights de IA para otimização de conteúdo e CTAs, redesenhamos o site para um visual premium, carregamento ultrarrápido e uma jornada de conversão aprimorada.",
      results: [
        "Potencial para aumento de +40% em agendamentos de aulas experimentais",
        "Redução de -60% no tempo de carregamento da página principal",
        "Otimização de SEO para maior visibilidade em buscas locais",
        "Aumento da percepção de marca como premium e moderna"
      ],
      icon: Dumbbell
    },
    {
      name: "Landing Page para E-commerce de Moda Sustentável",
      challenge: "Criar uma presença online que comunicasse valores de sustentabilidade e convertesse visitantes em clientes.",
      solution: "Design minimalista com foco em storytelling visual e CTAs estratégicos.",
      results: [
        "Aumento de 85% na taxa de conversão",
        "Redução de 45% na taxa de rejeição",
        "Crescimento de 120% no tempo médio de sessão"
      ],
      demoUrl: "https://moda-sustentavel-demo.vercel.app",
      icon: Shirt
    },
    {
      name: "Website Institucional para Startup Tech",
      challenge: "Estabelecer credibilidade e atrair investidores para uma startup em crescimento.",
      solution: "Plataforma moderna com seções dedicadas a métricas de crescimento e depoimentos.",
      results: [
        "300% de aumento em leads qualificados",
        "Captação de R$ 2.5M em investimentos",
        "Melhoria de 90% na percepção da marca"
      ],
      demoUrl: "https://startup-tech-demo.vercel.app",
      icon: Laptop
    },
    {
      name: "Sistema de Agendamento Online",
      challenge: "Simplificar o processo de agendamento para clínicas médicas.",
      solution: "Interface intuitiva com integração de calendário e automação de confirmações.",
      results: [
        "Redução de 70% no tempo de agendamento",
        "Diminuição de 85% em no-shows",
        "Aumento de 55% na satisfação do paciente"
      ],
      demoUrl: "https://agendamento-clinicas-demo.vercel.app",
      icon: Calendar
    },
    {
      name: "Site de Eventos Otimizado por IA",
      challenge: "Criar uma plataforma que se adaptasse às preferências dos usuários.",
      solution: "Algoritmo de recomendação personalizada e design responsivo.",
      results: [
        "Aumento de 50% no engajamento",
        "Crescimento de 75% em inscrições",
        "Redução de 30% no custo de aquisição"
      ],
      demoUrl: "https://eventos-ia-demo.vercel.app",
      icon: Tent
    },
    {
      name: "Portal Corporativo para Multinacional",
      challenge: "Unificar comunicação interna e melhorar colaboração entre equipes globais.",
      solution: "Plataforma integrada com IA para personalização de conteúdo e dashboards inteligentes.",
      results: [
        "Melhoria de 65% na comunicação interna",
        "Redução de 40% no tempo de onboarding",
        "Aumento de 80% na produtividade das equipes"
      ],
      demoUrl: "https://portal-corporativo-demo.vercel.app",
      icon: Building
    },
    {
      name: "App de Gestão de Energia Inteligente",
      challenge: "Criar solução para monitoramento e otimização do consumo energético residencial.",
      solution: "Dashboard com IA preditiva e recomendações automáticas de economia.",
      results: [
        "Redução média de 35% no consumo energético",
        "ROI de 250% para os usuários",
        "Economia de R$ 1.2M coletivamente"
      ],
      demoUrl: "https://energia-inteligente-demo.vercel.app",
      icon: Zap
    },
    {
      name: "Plataforma de Recrutamento com IA",
      challenge: "Automatizar triagem de currículos e melhorar matching candidato-vaga.",
      solution: "Algoritmos de ML para análise semântica e scoring automático de compatibilidade.",
      results: [
        "Redução de 80% no tempo de triagem",
        "Melhoria de 60% na qualidade dos matches",
        "Aumento de 45% na retenção de talentos"
      ],
      demoUrl: "https://recrutamento-ia-demo.vercel.app",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="section-padding bg-background pt-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={20} />
                Voltar ao Início
              </Button>
            </div>

            {/* Section Header */}
            <div className="text-center mb-24">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Nossos <span className="text-primary">Projetos Completos</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Explore nossa galeria completa de cases de sucesso e descobra como transformamos desafios em resultados mensuráveis.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto space-y-12">
              {allProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-primary/20 p-12 lg:p-16 nexus-hover hover:border-primary/30 hover:scale-[1.02] nexus-transition"
                >
                  <div className="space-y-8">
                    <div className="mb-6 text-primary animate-bounce">
                      <project.icon size={48} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {project.name}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">Desafio:</h4>
                        <p className="text-secondary-foreground leading-relaxed font-light">{project.challenge}</p>
                      </div>
                      
                      {project.solution && (
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-3">Solução Nexus Labs (IA + Lovable):</h4>
                          <p className="text-secondary-foreground leading-relaxed font-light">{project.solution}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Resultados Potenciais:</h4>
                      <div className="space-y-3">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-4">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-secondary-foreground font-light">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {project.demoUrl && (
                      <Button 
                        variant="nexus" 
                        size="lg"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="nexus-hover font-semibold w-full sm:w-auto"
                      >
                        <span className="hidden sm:inline">
                          Ver Demo do Projeto {project.name.length > 25 ? project.name.substring(0, 25) + "..." : project.name}
                        </span>
                        <span className="sm:hidden">
                          Ver Demo {project.name.length > 15 ? project.name.substring(0, 15) + "..." : project.name}
                        </span>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-24">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Pronto para seu próximo projeto?
              </h3>
              <Button 
                variant="nexus" 
                size="xl"
                onClick={() => window.location.href = '/#contact'}
                className="nexus-hover font-semibold"
              >
                Vamos Conversar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider line before Footer */}
      <div className="border-t border-gray-700"></div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;