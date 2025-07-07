import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Intense top light effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-primary/25 to-transparent opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12 animate-fade-in-up">
          {/* Main heading */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
            Nexus Labs:
            <br />
            <span className="text-primary font-black">Web Design</span> Inteligente,
            <br />
            <span className="text-primary font-black">Resultados</span> Reais
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Transformamos sua visão em uma presença online de alta performance e que converte, 
            através da Inteligência Artificial e da agilidade do Lovable.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 mb-20">
            <Button variant="nexus" size="xl" onClick={() => scrollToSection('projects')} className="nexus-hover font-semibold">
              Explore Nossos Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};