interface BackgroundEffectsProps {
  transforms: {
    background: { transform: string; opacity: number };
  };
}

export const BackgroundEffects = ({ transforms }: BackgroundEffectsProps) => {
  return (
    <>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 gpu-layer"
        style={{
          ...transforms.background,
          transition: 'all 0.2s ease-out'
        }}
      />
      
      {/* Enhanced gradient overlay */}
      <div 
        className="absolute inset-0 gpu-layer"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 15, 35, 0.4) 70%)',
          transform: transforms.background.transform,
          opacity: transforms.background.opacity * 0.8,
          transition: 'all 0.2s ease-out'
        }}
      />
      
      {/* Animated mesh gradient */}
      <div 
        className="absolute inset-0 opacity-30 gpu-layer"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
          `,
          transform: transforms.background.transform,
          transition: 'all 0.3s ease-out'
        }}
      />
    </>
  );
};