import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Vedant Raj
            </h3>
            <p className="text-muted-foreground mb-4">
              Computer Science Engineering Student & Software Developer
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">vedantraj086@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91-7352912166</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <Button variant="ghost" size="icon" asChild className="hover:shadow-glow">
                <a 
                  href="https://www.linkedin.com/in/vedant-raj-314626254/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:shadow-glow">
                <a 
                  href="https://github.com/vedantraj086" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:shadow-glow">
                <a 
                  href="mailto:vedantraj086@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Vedant Raj. Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;