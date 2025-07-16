import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary opacity-30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-secondary opacity-30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-accent opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Vedant Raj
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI ML Software Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about building innovative solutions with expertise in machine learning, 
            web development, and data science. Focused on creating impactful technology that solves real-world problems.
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" asChild className="group hover-lift hover:shadow-colorful border-primary/50 hover:border-primary">
              <a href="mailto:vedantraj086@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors group-hover:animate-wiggle" />
                vedantraj086@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group hover-lift hover:shadow-success border-success/50 hover:border-success">
              <a href="tel:+917352912166" className="flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:text-success transition-colors group-hover:animate-wiggle" />
                +91-7352912166
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" asChild className="group hover-glow bg-gradient-secondary/10 hover:bg-gradient-secondary/20">
              <a 
                href="https://www.linkedin.com/in/vedant-raj-314626254/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-6 h-6 group-hover:text-secondary transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-color" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="group hover-glow bg-gradient-primary/10 hover:bg-gradient-primary/20">
              <a 
                href="https://github.com/vedantraj086" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-color" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
