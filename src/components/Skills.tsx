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
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;