import { Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
export const SocialNetworksSection = () => {
  return (
    <section id="social" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Conecte-se <span className="text-primary">Conosco</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Acompanhe nossos projetos e insights nas redes sociais
          </p>
          
          <div className="flex justify-center gap-8">
            <Button
              variant="nexusOutline"
              size="lg"
              onClick={() => window.open('https://instagram.com/nexuslabs', '_blank')}
              className="nexus-hover hover:scale-[1.03] transform transition-all duration-300"
            >
              <Instagram className="mr-2" size={20} />
              Instagram
            </Button>
            <Button
              variant="nexusOutline"
              size="lg"
              onClick={() => window.open('https://twitter.com/nexuslabs', '_blank')}
              className="nexus-hover hover:scale-[1.03] transform transition-all duration-300"
            >
              <Twitter className="mr-2" size={20} />
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};