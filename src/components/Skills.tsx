import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Java", "C", "Python"]
    },
    {
      title: "Web Technologies", 
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: ["MySQL", "Git", "Flask", "Streamlit", "Power BI"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through projects, internships, and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const gradients = ['bg-gradient-primary', 'bg-gradient-secondary', 'bg-gradient-accent', 'bg-gradient-success'];
            const shadows = ['shadow-elegant', 'shadow-colorful', 'shadow-success', 'shadow-glow'];
            const currentGradient = gradients[index % gradients.length];
            const currentShadow = shadows[index % shadows.length];
            
            return (
              <Card 
                key={category.title} 
                className={`group hover-lift hover:${currentShadow} bg-gradient-card border-primary/20 animate-bounce-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={(e) => e.currentTarget.classList.add('wiggle')}
                onAnimationEnd={(e) => e.currentTarget.classList.remove('wiggle')}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-fit transition-all duration-300 group-hover:scale-110 ${currentGradient} group-hover:animate-pulse-color`}>
                    <category.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;