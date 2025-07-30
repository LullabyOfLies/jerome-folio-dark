import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:jeromesbaladjay@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Jerome Baladjay. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom divider with logo */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Jerome Baladjay</span> – IT Professional & Developer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;