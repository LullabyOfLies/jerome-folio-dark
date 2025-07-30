import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Best in Thesis",
      description: "Recognized for outstanding capstone project on Philippine tribal culture game development",
      color: "text-yellow-400"
    },
    {
      icon: Award,
      title: "Novice, Advanced & Expert Certifications",
      description: "Multiple certification levels achieved in various IT and development domains",
      color: "text-blue-400"
    },
    {
      icon: Star,
      title: "Top 1 in Project Demo Presentation",
      description: "Exceptional presentation skills demonstrated during internship project demonstrations",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Internship Recognition",
      description: "Outstanding performance and contribution during internship at Digibeacon Company",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-gradient">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and recognitions that showcase dedication to excellence in technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="card-elevated p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <achievement.icon className={`h-8 w-8 ${achievement.color} group-hover:scale-110 transition-transform`} />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;