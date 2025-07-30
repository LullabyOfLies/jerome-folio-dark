import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Tribo Pilipino",
      description: "Immersive walkthrough game showcasing Philippine tribes (capstone project). Built with Unity and C#, featuring interactive storytelling and cultural education.",
      image: "/placeholder-project-1.jpg",
      tags: ["Unity", "C#", "Game Development", "Educational"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Progreen Technologies Inc.",
      description: "E-commerce website for eco-friendly construction materials. Full-stack development with modern design and seamless user experience.",
      image: "/placeholder-project-2.jpg",
      tags: ["PHP", "Bootstrap", "MySQL", "E-commerce"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Unsolved Code",
      description: "Game with an immersive website design. Features interactive elements and engaging user interface with modern web technologies.",
      image: "/placeholder-project-3.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Web Design"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "Previous portfolio work displaying design and development style. Showcases creative approach to web design and user experience.",
      image: "/placeholder-project-4.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web development, game development, and innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-elevated group overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="btn-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="btn-secondary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <Button 
                    size="sm" 
                    className="btn-primary flex-1"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="btn-secondary flex-1"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;