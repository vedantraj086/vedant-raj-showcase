import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Film, TrendingUp, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection System",
      date: "Nov 2024",
      icon: Shield,
      description: "Advanced machine learning system for detecting fraudulent banking transactions using unsupervised learning approaches.",
      highlights: [
        "Improved fraud detection rates by 30% compared to traditional rule-based systems",
        "Developed unsupervised learning approach to detect anomalies in banking transactions", 
        "Deployed the model as an API for real-time fraud monitoring"
      ],
      technologies: ["Python", "Machine Learning", "API Development", "Anomaly Detection"]
    },
    {
      title: "Movie Recommendation System",
      date: "Mar 2024", 
      icon: Film,
      description: "Intelligent recommendation system combining content-based and collaborative filtering for personalized movie suggestions.",
      highlights: [
        "Achieved 85%+ accuracy in movie recommendations",
        "Implemented TF-IDF and Cosine Similarity for content-based filtering",
        "Built a deep learning-based recommendation model using Autoencoders",
        "Designed a user-friendly web interface for real-time recommendations"
      ],
      technologies: ["Python", "TF-IDF", "Autoencoders", "Flask", "Deep Learning"]
    },
    {
      title: "Demand Forecasting For Retail",
      date: "Apr 2023",
      icon: TrendingUp, 
      description: "Advanced forecasting system for retail inventory management using LSTM neural networks.",
      highlights: [
        "Improved inventory management by 20%, reducing stockouts and overstock",
        "Used deep learning (LSTM) for more accurate forecasting",
        "Automated reporting with a dynamic Power BI dashboard"
      ],
      technologies: ["Python", "LSTM", "Power BI", "Time Series Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in machine learning, data science, and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-primary/20 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;