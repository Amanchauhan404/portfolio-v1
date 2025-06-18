interface FloatingElementsProps {
  transforms: {
    floating1: { transform: string; transition?: string };
    floating2: { transform: string; transition?: string };
    floating3: { transform: string; transition?: string };
  };
  isLowEnd: boolean;
}

export const FloatingElements = ({ transforms, isLowEnd }: FloatingElementsProps) => {
  if (isLowEnd) return null;

  return (
    <>
      <div className="mb-8 relative">
        <div 
          className="absolute -top-5 -left-5 sm:-top-10 sm:-left-10 w-12 h-12 sm:w-20 sm:h-20 border-2 border-blue-500/30 rounded-full gpu-layer"
          style={{
            ...transforms.floating1,
            animation: 'spin-slow 12s linear infinite, float 4s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)'
          }}
        />
        <div 
          className="absolute -top-3 -right-8 sm:-top-5 sm:-right-15 w-8 h-8 sm:w-12 sm:h-12 gpu-layer"
          style={{
            ...transforms.floating2,
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animation: 'morph 8s ease-in-out infinite, float 3s ease-in-out infinite reverse',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
          }}
        />
      </div>

      <div 
        className="absolute top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 gpu-layer"
        style={{
          ...transforms.floating1,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          animation: 'pulse-glow 3s ease-in-out infinite'
        }}
      />
      
      <div 
        className="absolute top-40 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 gpu-layer"
        style={{
          ...transforms.floating2,
          background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.3), rgba(239, 68, 68, 0.2), rgba(236, 72, 153, 0.3))',
          borderRadius: '50%',
          filter: 'blur(2px)',
          animation: 'spin-slow 15s linear infinite, bounce-slow 4s ease-in-out infinite'
        }}
      />
      
      <div 
        className="absolute bottom-40 left-10 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 gpu-layer"
        style={{
          ...transforms.floating3,
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.2))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(0.5px)',
          animation: 'wiggle 2s ease-in-out infinite, float 5s ease-in-out infinite'
        }}
      />

      {/* Additional floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full gpu-layer"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
            transform: `translate(${Math.sin(Date.now() * 0.001 + i) * 20}px, ${Math.cos(Date.now() * 0.001 + i) * 15}px)`,
            animation: `particle-float ${8 + i * 2}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        />
      ))}
    </>
  );
};