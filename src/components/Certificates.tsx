import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Front-End Web Developer",
      provider: "LinkedIn Learning",
      date: "Mar 2024",
      type: "Web Development"
    },
    {
      title: "Mastering Data Structure & Algorithm in C & C++",
      provider: "Udemy",
      date: "Apr 2023",
      type: "Programming"
    },
    {
      title: "Python Programming",
      provider: "Cipher School",
      date: "Jan 2023",
      type: "Programming"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certificates & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through professional courses and certifications to stay updated with industry trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const gradients = ['bg-gradient-warning', 'bg-gradient-accent', 'bg-gradient-success'];
            const currentGradient = gradients[index % gradients.length];
            
            return (
              <Card 
                key={cert.title}
                className="group hover-lift hover:shadow-colorful bg-gradient-card border-warning/20 animate-bounce-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={(e) => e.currentTarget.classList.add('animate-wiggle')}
                onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-wiggle')}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${currentGradient}`}>
                      <Award className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-gradient-secondary text-white border-0 hover:scale-105 transition-transform">
                      {cert.type}
                    </Badge>
                  </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">{cert.provider}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;