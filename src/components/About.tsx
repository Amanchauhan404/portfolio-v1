
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const timeline = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      description: "Leading frontend development projects with modern frameworks",
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2022",
      title: "Frontend Developer",
      description: "Building responsive web applications and user interfaces",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began learning web development technologies",
      color: "from-pink-500 to-red-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative z-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-x" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 gradient-text text-shadow-neon transition-all duration-1000 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            About Me
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            I'm a passionate frontend developer who loves creating beautiful, functional, and user-friendly web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <p className="text-lg leading-relaxed relative z-10">
                With a keen eye for design and a passion for clean code, I specialize in creating
                modern web applications that not only look great but also provide exceptional user experiences.
              </p>
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-sm rounded-lg" />
            </div>
            
            <div className="relative">
              <p className="text-lg leading-relaxed relative z-10">
                I believe in the power of collaboration and continuous learning. Every project is an
                opportunity to push boundaries and explore new technologies.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-sm rounded-lg" />
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:animate-bounce">50+</div>
                  <div className="absolute inset-0 text-3xl font-bold text-primary/30 blur-sm animate-pulse">50+</div>
                </div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:animate-bounce">3+</div>
                  <div className="absolute inset-0 text-3xl font-bold text-primary/30 blur-sm animate-pulse">3+</div>
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className={`space-y-4 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            {timeline.map((item, index) => (
              <Card
                key={index}
                className={`p-6 glass-effect hover:glow-effect transition-all duration-500 transform hover:scale-105 magnetic-hover neon-border floating-card ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200 + 1000}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10 animate-glow`}>
                      {item.year}
                    </div>
                    {/* Pulse ring effect */}
                    <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full opacity-30 pulse-ring`} />
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold mb-2 text-shadow-neon">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-lg rounded-lg" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-16 h-16 border-2 border-blue-500/30 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-gradient-to-r from-green-500/30 to-blue-500/30 transform rotate-45 animate-wiggle" />
      </div>
    </section>
  );
};
