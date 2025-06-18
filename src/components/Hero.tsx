import { useMemo } from "react";
import { FloatingElements } from "./hero/FloatingElements";
import { TextAnimations } from "./hero/TextAnimations";
import { BackgroundEffects } from "./hero/BackgroundEffects";
import { HeroButtons } from "./hero/HeroButtons";
import { ParallaxLayers } from "./hero/ParallaxLayers";

interface HeroProps {
  scrollY: number;
  velocity: number;
  isLowEnd: boolean;
}

export const Hero = ({ scrollY, velocity, isLowEnd }: HeroProps) => {
  const scrollFactor = scrollY * 0.001;
  const parallaxOffset = useMemo(() => scrollY * 0.5, [scrollY]);
  const fadeOpacity = useMemo(() => Math.max(0, 1 - scrollY / 1000), [scrollY]);
  
  const transforms = useMemo(() => {
    if (isLowEnd) {
      return {
        background: { transform: 'none', opacity: 0.8 },
        main: { transform: `translateY(${scrollY * 0.1}px)` },
        title: { transform: 'none' },
        subtitle: { transform: 'none' },
        description: { transform: 'none', opacity: fadeOpacity },
        buttons: { transform: 'none', opacity: fadeOpacity },
        floating1: { transform: 'none' },
        floating2: { transform: 'none' },
        floating3: { transform: 'none' }
      };
    }

    const smoothVelocity = velocity * 0.1;
    
    return {
      background: {
        transform: `scale(${1 + scrollFactor * 0.3}) rotate(${scrollFactor * 30}deg)`,
        opacity: 0.8 - scrollFactor * 0.3
      },
      main: { 
        transform: `translateY(${scrollY * 0.15}px) translateX(${smoothVelocity}px)`,
        transition: 'transform 0.1s ease-out'
      },
      title: { 
        transform: `translateY(${scrollY * 0.1}px) translateX(${Math.sin(scrollFactor * 3) * 3}px)`,
        transition: 'transform 0.2s ease-out'
      },
      subtitle: { 
        transform: `translateY(${scrollY * 0.2}px) translateX(${Math.cos(scrollFactor * 2) * 2}px)`,
        transition: 'transform 0.15s ease-out'
      },
      description: {
        transform: `translateY(${scrollY * 0.25}px)`,
        opacity: fadeOpacity,
        transition: 'all 0.2s ease-out'
      },
      buttons: {
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: fadeOpacity,
        transition: 'all 0.2s ease-out'
      },
      floating1: { 
        transform: `translate(${Math.sin(scrollFactor * 2) * 15 + smoothVelocity * 0.5}px, ${Math.cos(scrollFactor * 1.5) * 12}px) rotate(${scrollFactor * 45}deg)`,
        transition: 'transform 0.3s ease-out'
      },
      floating2: { 
        transform: `translate(${Math.cos(scrollFactor * 3) * -18 - smoothVelocity * 0.3}px, ${Math.sin(scrollFactor * 2.5) * 15}px) rotate(${-scrollFactor * 60}deg)`,
        transition: 'transform 0.25s ease-out'
      },
      floating3: { 
        transform: `translate(${Math.sin(scrollFactor * 2.5) * 10}px, ${Math.sin(scrollFactor * 3) * -8}px) rotate(${scrollFactor * 30}deg)`,
        transition: 'transform 0.2s ease-out'
      }
    };
  }, [scrollY, scrollFactor, isLowEnd, velocity, fadeOpacity]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        opacity: fadeOpacity,
        transition: 'opacity 0.1s ease-out'
      }}
    >
      <ParallaxLayers scrollY={scrollY} velocity={velocity} isLowEnd={isLowEnd} />
      <BackgroundEffects transforms={transforms} />

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="animate-fade-in-up gpu-layer" style={transforms.main}>
          <FloatingElements transforms={transforms} isLowEnd={isLowEnd} />
          <TextAnimations transforms={transforms} />
          <HeroButtons transforms={transforms} />
        </div>
      </div>

      <FloatingElements transforms={transforms} isLowEnd={isLowEnd} />
    </section>
  );
};