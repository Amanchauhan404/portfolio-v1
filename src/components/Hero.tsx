
import { useMemo } from "react";
import { FloatingElements } from "./hero/FloatingElements";
import { TextAnimations } from "./hero/TextAnimations";
import { BackgroundEffects } from "./hero/BackgroundEffects";
import { HeroButtons } from "./hero/HeroButtons";

interface HeroProps {
  scrollY: number;
  isLowEnd: boolean;
}

export const Hero = ({ scrollY, isLowEnd }: HeroProps) => {
  const scrollFactor = scrollY * 0.001;
  const parallaxOffset = useMemo(() => scrollY * 0.3, [scrollY]);
  const fadeOpacity = useMemo(() => Math.max(0, 1 - scrollY / 800), [scrollY]);
  
  const transforms = useMemo(() => {
    if (isLowEnd) {
      return {
        background: { transform: 'none', opacity: 0.6 },
        main: { transform: 'none' },
        title: { transform: 'none' },
        subtitle: { transform: 'none' },
        description: { transform: 'none', opacity: 1 },
        buttons: { transform: 'none', opacity: 1 },
        floating1: { transform: 'none' },
        floating2: { transform: 'none' },
        floating3: { transform: 'none' }
      };
    }

    return {
      background: {
        transform: `scale(${1 + scrollFactor * 0.5}) rotate(${scrollFactor * 50}deg)`,
        opacity: 0.6 - scrollFactor * 0.5
      },
      main: { transform: `translateY(${scrollY * 0.2}px)` },
      title: { transform: `translateX(${Math.sin(scrollFactor * 5) * 2}px)` },
      subtitle: { transform: `translateY(${scrollY * 0.25}px)` },
      description: {
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: Math.max(0, 1 - scrollFactor)
      },
      buttons: {
        transform: `translateY(${scrollY * 0.35}px)`,
        opacity: Math.max(0, 1 - scrollFactor * 1.5)
      },
      floating1: { transform: `translate(${Math.sin(scrollFactor * 3) * 10}px, ${Math.cos(scrollFactor * 2) * 8}px)` },
      floating2: { transform: `translate(${Math.cos(scrollFactor * 4) * -12}px, ${Math.sin(scrollFactor * 2) * 10}px)` },
      floating3: { transform: `translate(${Math.sin(scrollFactor * 3) * 8}px, ${Math.sin(scrollFactor * 4) * -5}px)` }
    };
  }, [scrollY, scrollFactor, isLowEnd]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        opacity: fadeOpacity
      }}
    >
      <BackgroundEffects transforms={transforms} />

      <div className="container mx-auto px-6 text-center relative z-10">
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
