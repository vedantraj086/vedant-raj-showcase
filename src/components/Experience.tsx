import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world experience in community development and social impact initiatives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group hover-lift hover:shadow-success bg-gradient-card border-success/20 animate-bounce-in cursor-pointer">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-success rounded-full transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-color">
                  <Heart className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                    Social Work Intern
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Rise Up Community Foundation
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      June 2023
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-4 bg-gradient-success text-white border-0 hover:scale-105 transition-transform">
                    Social Impact
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributed to community development initiatives, including education, women's empowerment, and literacy programs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Assisted in organizing awareness campaigns, workshops, and events to support underprivileged communities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Engaged in fundraising, outreach, and advocacy efforts to promote social change.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;