
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, TypeScript, and modern UI components. Features include product catalog, shopping cart, and secure checkout.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    tech: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Portfolio Website",
    description: "A stunning portfolio website with advanced animations, interactive elements, and modern design principles.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop",
    tech: ["React", "Framer Motion", "Three.js", "GSAP"],
    github: "#",
    demo: "#",
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with detailed forecasts, interactive maps, and location-based recommendations.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    tech: ["React", "Chart.js", "Weather API", "CSS3"],
    github: "#",
    demo: "#",
    gradient: "from-green-500 to-blue-500"
  }
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32 relative z-10 overflow-hidden">
      {/* Dreamlike background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/10 via-cyan-900/10 to-emerald-900/10 animate-gradient-x" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className={`text-5xl md:text-7xl font-bold mb-8 relative transition-all duration-1000 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-text-shimmer" 
                    style={{ backgroundSize: '300% auto' }}>
                Featured Projects
              </span>
              {/* Subtle glow effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10 animate-pulse" />
            </h2>
            
            {/* Decorative elements around title */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border border-blue-400/30 rounded-full animate-spin-slow" />
            <div className="absolute -top-4 -right-12 w-8 h-8 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-bounce" />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            A curated showcase of my creative journey and technical expertise
          </p>
        </div>

        {/* Enhanced project grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${index * 200 + 500}ms`,
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.4))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Dynamic border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              
              {/* Image section with enhanced effects */}
              <div className="relative overflow-hidden rounded-t-lg h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient overlay with improved opacity */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500" />
                
                {/* Floating sparkles animation */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-80"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Enhanced action buttons */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl py-3 font-medium"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-xl py-3 font-medium backdrop-blur-md"
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Content section with improved typography */}
              <div className="p-8 relative">
                {/* Project title with enhanced styling */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-500">
                  {project.title}
                </h3>
                
                {/* Description with better readability */}
                <p className="text-gray-300 mb-6 leading-relaxed text-base line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tech stack with improved design */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm text-gray-200 rounded-full text-sm font-medium border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-700/60 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/40 rounded-full animate-ping" />
              </div>

              {/* Enhanced hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Enhanced floating decorative elements */}
        <div className="absolute top-32 right-16 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse" />
        
        {/* Additional ambient elements */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/5 to-red-500/5 rounded-full blur-3xl animate-bounce-slow" />
      </div>
    </section>
  );
};
