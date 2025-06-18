import { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY, velocity } = useOptimizedScroll();
  const { isLowEnd } = useDeviceDetection();

  useEffect(() => {
    setIsLoaded(true);
    
    // Add smooth scrolling CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: isLowEnd ? 0.15 : 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
          entry.target.classList.remove("opacity-0", "translate-y-20");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section:not(#home)");
    sections.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-20", "transition-all", "duration-1000", "ease-out");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isLoaded, isLowEnd]);

  const scrollMultiplier = isLowEnd ? 0.3 : 0.8;
  const smoothScrollY = useMemo(() => scrollY, [scrollY]);

  const backgroundStyles = useMemo(() => {
    if (isLowEnd) {
      return {
        background: `linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)`,
        transform: 'none'
      };
    }
    
    const scrollFactor = smoothScrollY * 0.0003;
    const velocityEffect = velocity * 0.01;
    
    return {
      background: `
        linear-gradient(${135 + scrollFactor * 15 + velocityEffect}deg, 
          #0f0f23 0%, 
          #1a1a2e 30%, 
          #16213e 60%, 
          #0f0f23 100%)
      `,
      transform: `scale(${1 + scrollFactor * 0.1})`,
      transition: 'all 0.1s ease-out'
    };
  }, [smoothScrollY, velocity, isLowEnd]);

  const transforms = useMemo(() => {
    const scroll = smoothScrollY * scrollMultiplier;
    const smoothVelocity = velocity * 0.05;
    
    return {
      navbar: {
        transform: `translateY(${Math.max(0, scroll * -0.1)}px) translateX(${smoothVelocity}px)`,
        backdropFilter: `blur(${Math.min(12, scroll * 0.02)}px)`,
        transition: 'all 0.1s ease-out'
      },
      about: { 
        transform: `translateY(${Math.max(0, (scroll - 300) * -0.15)}px) translateX(${smoothVelocity * 0.5}px)`,
        transition: 'transform 0.2s ease-out'
      },
      skills: { 
        transform: `translateY(${Math.max(0, (scroll - 600) * -0.2)}px) translateX(${-smoothVelocity * 0.3}px)`,
        transition: 'transform 0.15s ease-out'
      },
      projects: { 
        transform: `translateY(${Math.max(0, (scroll - 900) * -0.25)}px) translateX(${smoothVelocity * 0.4}px)`,
        transition: 'transform 0.1s ease-out'
      },
      contact: { 
        transform: `translateY(${Math.max(0, (scroll - 1200) * -0.1)}px)`,
        transition: 'transform 0.2s ease-out'
      }
    };
  }, [smoothScrollY, scrollMultiplier, velocity]);

  const progressScale = useMemo(() => {
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    return Math.min(1, smoothScrollY / maxScroll);
  }, [smoothScrollY]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Enhanced dynamic background */}
      <div 
        className="fixed inset-0 z-0 gpu-layer"
        style={backgroundStyles}
      />
      
      {/* Additional background layers for depth */}
      {!isLowEnd && (
        <>
          <div 
            className="fixed inset-0 z-0 opacity-30 gpu-layer"
            style={{
              background: 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              transform: `translateY(${smoothScrollY * 0.1}px) rotate(${smoothScrollY * 0.01}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
          <div 
            className="fixed inset-0 z-0 opacity-20 gpu-layer"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.05) 0deg, rgba(139, 92, 246, 0.05) 120deg, rgba(236, 72, 153, 0.05) 240deg, rgba(59, 130, 246, 0.05) 360deg)',
              transform: `translateY(${smoothScrollY * -0.05}px) rotate(${smoothScrollY * 0.02}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </>
      )}
      
      <ParticleBackground />
      
      <div className="gpu-layer" style={transforms.navbar}>
        <Navbar />
      </div>
      
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} relative z-10`}>
        <Hero scrollY={smoothScrollY} velocity={velocity} isLowEnd={isLowEnd} />
        
        <div className="gpu-layer" style={transforms.about}>
          <About />
        </div>
        
        <div className="gpu-layer" style={transforms.skills}>
          <Skills />
        </div>
        
        <div className="gpu-layer" style={transforms.projects}>
          <Projects />
        </div>
        
        <div className="gpu-layer" style={transforms.contact}>
          <Contact />
        </div>
      </div>

      {/* Enhanced scroll progress bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 z-50 origin-left gpu-layer"
        style={{ 
          background: `linear-gradient(90deg, 
            rgba(59, 130, 246, 0.8) 0%, 
            rgba(139, 92, 246, 0.9) 50%, 
            rgba(236, 72, 153, 0.8) 100%)`,
          transform: `scaleX(${progressScale})`,
          boxShadow: `0 0 10px rgba(59, 130, 246, 0.6)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Glowing progress indicator */}
      {!isLowEnd && (
        <div 
          className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full z-50 gpu-layer"
          style={{ 
            left: `${progressScale * 100}%`,
            transform: 'translateX(-50%)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
            transition: 'left 0.1s ease-out'
          }}
        />
      )}
    </div>
  );
};

export default Index;