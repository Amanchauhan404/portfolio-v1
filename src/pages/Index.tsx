// React hooks for state management and effects
import { useState, useEffect, useMemo } from "react";

// Main portfolio components
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

// Background and animation components
import { ParticleBackground } from "@/components/ParticleBackground";

// Custom hooks for performance optimization
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

const Index = () => {
  // Track if the page has finished loading for smooth animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Get scroll position and device capabilities
  const scrollY = useOptimizedScroll();
  const { isLowEnd } = useDeviceDetection();

  // Mark page as loaded after initial render
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Set up intersection observer for scroll-triggered animations
  // This creates a nice reveal effect as sections come into view
  useEffect(() => {
    const observerOptions = {
      threshold: isLowEnd ? 0.1 : 0.05, // Lower threshold for low-end devices
      rootMargin: "0px 0px -50px 0px" // Start animation slightly before element is fully visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class and remove initial hidden state
          entry.target.classList.add("animate-reveal");
          entry.target.classList.remove("opacity-0", "translate-y-20");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    // Apply initial hidden state to all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-20", "transition-all", "duration-700", "ease-out");
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [isLoaded, isLowEnd]);

  // Performance optimizations for different device capabilities
  const scrollMultiplier = isLowEnd ? 0.5 : 1; // Reduce animation intensity on low-end devices
  const roundedScrollY = Math.round(scrollY / (isLowEnd ? 10 : 1));

  // Dynamic background that changes based on scroll position
  // Creates a subtle parallax effect with gradient overlays
  const backgroundStyles = useMemo(() => {
    if (isLowEnd) {
      // Simplified background for better performance on low-end devices
      return {
        background: `linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)`,
        transform: 'none'
      };
    }
    
    // Create dynamic background with multiple gradient layers
    const scrollFactor = roundedScrollY * 0.0005;
    return {
      background: `linear-gradient(${135 + scrollFactor * 20}deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)`,
      transform: 'none'
    };
  }, [roundedScrollY, isLowEnd]);

  // Parallax transforms for different sections
  // Each section moves at a different rate for depth effect
  const transforms = useMemo(() => {
    const scroll = roundedScrollY * scrollMultiplier;
    return {
      navbar: {
        transform: `translateY(${Math.max(0, scroll * -0.15)}px)`,
        backdropFilter: `blur(${Math.min(8, scroll * 0.03)}px)`
      },
      about: { transform: `translateY(${Math.max(0, (scroll - 400) * -0.02)}px)` },
      skills: { transform: `translateY(${Math.max(0, (scroll - 800) * -0.03)}px)` },
      projects: { transform: `translateY(${Math.max(0, (scroll - 1200) * -0.04)}px)` },
      contact: { transform: `translateY(${Math.max(0, (scroll - 1600) * -0.02)}px)` }
    };
  }, [roundedScrollY, scrollMultiplier]);

  // Calculate scroll progress for the progress bar
  const progressScale = useMemo(() => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    return Math.min(1, roundedScrollY / maxScroll);
  }, [roundedScrollY]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Dynamic background with parallax effect */}
      <div 
        className="fixed inset-0 z-0 gpu-layer"
        style={backgroundStyles}
      />
      
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Navigation bar with scroll-based effects */}
      <div className="gpu-layer" style={transforms.navbar}>
        <Navbar />
      </div>
      
      {/* Main content with fade-in animation */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} relative z-10`}>
        {/* Hero section */}
        <Hero scrollY={scrollY} isLowEnd={isLowEnd} />
        
        {/* About section with parallax */}
        <div className="gpu-layer" style={transforms.about}>
          <About />
        </div>
        
        {/* Skills section with parallax */}
        <div className="gpu-layer" style={transforms.skills}>
          <Skills />
        </div>
        
        {/* Projects section with parallax */}
        <div className="gpu-layer" style={transforms.projects}>
          <Projects />
        </div>
        
        {/* Contact section with parallax */}
        <div className="gpu-layer" style={transforms.contact}>
          <Contact />
        </div>
      </div>

      {/* Scroll progress bar at the top */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left gpu-layer"
        style={{ transform: `scaleX(${progressScale})` }}
      />
    </div>
  );
};

export default Index;
