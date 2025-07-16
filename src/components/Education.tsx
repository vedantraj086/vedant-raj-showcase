import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "August 2022 - Present",
      cgpa: "6.29",
      current: true
    },
    {
      degree: "Intermediate",
      institution: "DAV Public School Dalmia Nagar",
      location: "Bihar, India", 
      period: "April 2018 - March 2020",
      percentage: "75%",
      current: false
    },
    {
      degree: "Matriculation",
      institution: "DAV Public School Dalmia Nagar",
      location: "Bihar, India",
      period: "April 2016 - March 2018", 
      percentage: "91%",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and educational milestones that shaped my technical foundation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
            {education.map((edu, index) => {
              const gradients = ['bg-gradient-accent', 'bg-gradient-warning', 'bg-gradient-success'];
              const currentGradient = gradients[index % gradients.length];
              
              return (
                <Card 
                  key={edu.degree}
                  className="group hover-lift hover:shadow-colorful bg-gradient-card border-accent/20 animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${currentGradient}`}>
                        <GraduationCap className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {edu.degree}
                        </CardTitle>
                        {edu.current && (
                          <Badge variant="default" className="bg-gradient-primary text-white border-0 animate-pulse-color">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {edu.institution}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">
                      {edu.cgpa ? 'CGPA:' : 'Percentage:'}
                    </span>
                    <Badge variant="secondary" className="font-bold hover:scale-105 transition-transform cursor-pointer">
                      {edu.cgpa || edu.percentage}
                    </Badge>
                  </div>
                </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;