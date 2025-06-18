
import { useState, useEffect } from "react";

interface TextAnimationsProps {
  transforms: {
    title: { transform: string };
    subtitle: { transform: string };
    description: { transform: string; opacity: number };
  };
}

export const TextAnimations = ({ transforms }: TextAnimationsProps) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 relative">
        <span 
          className="gradient-text text-shadow-neon animate-glow gpu-layer"
          style={transforms.title}
        >
          Hello, I'm
        </span>
      </h1>
      
      <div className="relative mb-8 gpu-layer" style={transforms.subtitle}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-fira relative">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer"
                style={{ backgroundSize: '200% auto' }}>
            {displayText}
          </span>
          {isTyping && (
            <span className="animate-pulse text-blue-400 ml-1">|</span>
          )}
        </h2>
      </div>

      <div className="relative mb-12 gpu-layer" style={transforms.description}>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <span className="inline-block animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
            Crafting beautiful,
          </span>{' '}
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            interactive web experiences
          </span>{' '}
          <span className="inline-block animate-fade-in-right" style={{ animationDelay: '0.9s' }}>
            with modern technologies.
          </span>
        </p>
      </div>
    </>
  );
};
