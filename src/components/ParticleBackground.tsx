import { useEffect, useState, useMemo } from "react";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: 'circle' | 'square' | 'triangle';
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { isLowEnd, isMobile, memory } = useDeviceDetection();

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      let particleCount = 50;
      
      if (isLowEnd) particleCount = 15;
      else if (isMobile) particleCount = 25;
      else if (memory <= 4) particleCount = 35;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1.5,
          delay: Math.random() * 10,
          duration: Math.random() * 6 + 8,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [isLowEnd, isMobile, memory]);

  const getParticleShape = useMemo(() => (particle: Particle) => {
    const baseClasses = "particle absolute opacity-30 gpu-layer";
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      animationDelay: `${particle.delay}s`,
      animationDuration: `${particle.duration}s`,
    };

    if (isLowEnd) {
      return (
        <div
          key={particle.id}
          className={`${baseClasses} rounded-full bg-blue-400/40`}
          style={style}
        />
      );
    }

    switch (particle.type) {
      case 'circle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-particle-float`}
            style={style}
          />
        );
      case 'square':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-r from-pink-400 to-red-500 animate-particle-float animate-spin-slow`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-r from-green-400 to-blue-500 animate-particle-float`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        );
      default:
        return null;
    }
  }, [isLowEnd]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => getParticleShape(particle))}
      
      {!isLowEnd && (
        <>
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse gpu-layer" 
                 style={{ 
                   backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)',
                   backgroundSize: '200px 1px',
                   backgroundRepeat: 'repeat-y'
                 }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse gpu-layer" 
                 style={{ 
                   backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(139, 92, 246, 0.03) 50%, transparent 100%)',
                   backgroundSize: '1px 200px',
                   backgroundRepeat: 'repeat-x'
                 }} />
          </div>

          <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-float gpu-layer" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-pink-500/15 to-red-500/15 rounded-full blur-2xl animate-bounce-slow gpu-layer" />
        </>
      )}
    </div>
  );
};
