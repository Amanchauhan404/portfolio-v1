import { useState, useEffect } from "react";

interface TextAnimationsProps {
  transforms: {
    title: { transform: string; transition?: string };
    subtitle: { transform: string; transition?: string };
    description: { transform: string; opacity: number; transition?: string };
  };
}

export const TextAnimations = ({ transforms }: TextAnimationsProps) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aman Chauhan";
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, fullText]);

  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 relative">
        <span 
          className="gradient-text text-shadow-neon gpu-layer"
          style={{
            ...transforms.title,
            animation: 'glow 3s ease-in-out infinite, text-shimmer 4s ease-in-out infinite'
          }}
        >
          Hello, I'm
        </span>
      </h1>
      
      <div className="relative mb-8 gpu-layer" style={transforms.subtitle}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-fira relative">
          <span 
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{ 
              backgroundSize: '300% auto',
              animation: 'text-shimmer 3s ease-in-out infinite, scale-in 0.8s ease-out'
            }}
          >
            {displayText}
          </span>
          {isTyping && (
            <span 
              className="animate-pulse text-blue-400 ml-1"
              style={{
                animation: 'pulse 1s ease-in-out infinite',
                textShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
              }}
            >
              |
            </span>
          )}
        </h2>
        
        {/* Glowing underline effect */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          style={{
            width: `${(displayText.length / fullText.length) * 100}%`,
            transition: 'width 0.3s ease-out',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative mb-12 gpu-layer" style={transforms.description}>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <span 
            className="inline-block"
            style={{ 
              animation: 'fade-in-left 0.8s ease-out 0.5s both',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Frontend Developer
          </span>{' '}
          <span 
            className="inline-block"
            style={{ 
              animation: 'fade-in-up 0.8s ease-out 0.7s both',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            passionate about creating
          </span>{' '}
          <span 
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ 
              animation: 'fade-in-right 0.8s ease-out 0.9s both, text-shimmer 3s ease-in-out infinite 1.5s',
              backgroundSize: '200% auto'
            }}
          >
            amazing web experiences.
          </span>
        </p>
        
        {/* Floating accent dots */}
        <div className="absolute -top-2 -left-2 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping" />
        <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }} />
      </div>
    </>
  );
};