import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Zap, TrendingUp, Users, Database } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Target,
      title: "85% Recommendation Accuracy",
      description: "Improved recommendation accuracy by 85%+ using a hybrid model combining content-based and collaborative filtering."
    },
    {
      icon: Zap,
      title: "Enhanced Filtering System", 
      description: "Implemented TF-IDF and Cosine Similarity to enhance content-based filtering, improving personalized recommendations."
    },
    {
      icon: TrendingUp,
      title: "Real-time Deployment",
      description: "Developed and deployed a real-time recommendation system using Flask/Streamlit, making it accessible via a web interface."
    },
    {
      icon: Database,
      title: "Deep Learning Integration",
      description: "Integrated deep learning (Autoencoders) to enhance collaborative filtering, boosting recommendation efficiency."
    },
    {
      icon: Users,
      title: "Scalable Architecture",
      description: "Optimized the system for scalability, handling 100,000+ movie entries and thousands of user interactions."
    },
    {
      icon: Trophy,
      title: "Cold-start Solutions",
      description: "Reduced cold-start problems by implementing user-based and item-based filtering, increasing recommendation relevance."
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notable accomplishments and technical milestones achieved through innovative problem-solving and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-center group-hover:text-primary transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;