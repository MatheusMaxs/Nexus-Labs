
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/97f79881-a163-402e-92af-fef0b257dee4.png" 
              alt="Nexus Labs" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Nexus Labs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="nexus" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              )}></span>
              <span className={cn(
                "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              )}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-4 pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
            >
              Contato
            </button>
            <Button 
              variant="nexus" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="mt-4 w-full"
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
