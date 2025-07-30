import { Card } from "@/components/ui/card";
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Code,
  CheckCircle
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Bachelor of Science in IT",
      description: "Eulogio \"Amang\" Rodriguez Institute of Science and Technology (2019-2024)"
    },
    {
      icon: Briefcase,
      title: "Internship at Digibeacon Company",
      description: "Project demos, ITSM & ClickUp implementation"
    },
    {
      icon: Users,
      title: "Owner of META: Place of Music Page",
      description: "Social media manager & video editor (2019–present)"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "HTML, CSS, JS, PHP, Bootstrap, Web Development, Game Development, Graphic Design, Web Design, Video Editing, Flow Optimization"
    }
  ];

  return (
    <section id="about-me" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Problem solver{" "}
                <span className="text-gradient font-mono">{"<coder>"}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Over 3 years of experience in development and IT.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="card-elevated p-6 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-96">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl transform -rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-elegant)]">
                <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;