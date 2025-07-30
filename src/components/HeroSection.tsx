import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Keyboard, Mouse } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Keyboard */}
        <div className="absolute bottom-20 left-20 opacity-10 animate-pulse">
          <div className="w-80 h-32 bg-muted rounded-lg border border-border relative">
            {/* Keyboard keys simulation */}
            <div className="grid grid-cols-12 gap-1 p-3">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="h-6 bg-secondary rounded border border-border"
                  style={{ gridColumn: i % 12 === 11 ? 'span 2' : 'span 1' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Mouse */}
        <div className="absolute bottom-20 right-20 opacity-10">
          <div className="w-16 h-24 bg-muted rounded-2xl border border-border relative">
            <div className="w-1 h-8 bg-secondary rounded-full mx-auto mt-2"></div>
          </div>
        </div>

        {/* Floating Code Brackets */}
        <div className="absolute top-1/4 left-10 text-6xl font-mono text-primary/20 animate-float">
          {"{}"}
        </div>
        <div className="absolute top-1/3 right-10 text-6xl font-mono text-accent/20 animate-float" style={{ animationDelay: '1s' }}>
          {"</>"}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            IT Professional &{" "}
            <span className="text-gradient">Developer</span>
          </h1>

          {/* Tech Stack */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
            {"{ "}
            <span className="text-primary">HTML</span>,{" "}
            <span className="text-primary">CSS</span>,{" "}
            <span className="text-primary">JS</span>,{" "}
            <span className="text-primary">PHP</span>,{" "}
            <span className="text-primary">Bootstrap</span>,{" "}
            <span className="text-primary">Web Development</span>,{" "}
            <span className="text-primary">Game Development</span>
            {" }"}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed slide-up">
            An enthusiastic and detail-oriented programmer passionate about coding, learning, and building impactful projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              See My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;