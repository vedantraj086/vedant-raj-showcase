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
          {achievements.map((achievement, index) => {
            const gradients = ['bg-gradient-primary', 'bg-gradient-secondary', 'bg-gradient-accent', 'bg-gradient-success', 'bg-gradient-warning'];
            const currentGradient = gradients[index % gradients.length];
            
            return (
              <Card 
                key={achievement.title}
                className="group hover-lift hover:shadow-glow bg-gradient-card border-primary/20 animate-slide-up cursor-pointer overflow-hidden relative"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={(e) => e.currentTarget.classList.add('animate-pulse-color')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('animate-pulse-color')}
              >
                <div className="absolute inset-0 bg-gradient-x opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:animate-float ${currentGradient}`}>
                    <achievement.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-lg text-center group-hover:text-primary transition-colors font-bold">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;