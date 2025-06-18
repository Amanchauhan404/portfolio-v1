interface ParallaxLayersProps {
  scrollY: number;
  velocity: number;
  isLowEnd: boolean;
}

export const ParallaxLayers = ({ scrollY, velocity, isLowEnd }: ParallaxLayersProps) => {
  if (isLowEnd) return null;

  const layer1Speed = scrollY * 0.1;
  const layer2Speed = scrollY * 0.2;
  const layer3Speed = scrollY * 0.3;
  const layer4Speed = scrollY * 0.4;
  
  const velocityEffect = velocity * 0.05;

  return (
    <>
      {/* Background Layer 1 - Slowest */}
      <div 
        className="absolute inset-0 opacity-20 gpu-layer"
        style={{
          transform: `translateY(${layer1Speed + velocityEffect}px) scale(1.1)`,
          background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Background Layer 2 */}
      <div 
        className="absolute inset-0 opacity-15 gpu-layer"
        style={{
          transform: `translateY(${layer2Speed - velocityEffect * 0.5}px) scale(1.05)`,
          background: 'radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.08) 0%, transparent 60%), radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
          transition: 'transform 0.15s ease-out'
        }}
      />
      
      {/* Background Layer 3 */}
      <div 
        className="absolute inset-0 opacity-10 gpu-layer"
        style={{
          transform: `translateY(${layer3Speed + velocityEffect * 0.3}px)`,
          background: 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.05) 0deg, rgba(139, 92, 246, 0.05) 120deg, rgba(236, 72, 153, 0.05) 240deg, rgba(59, 130, 246, 0.05) 360deg)',
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 opacity-5 gpu-layer"
        style={{
          transform: `translateY(${layer4Speed}px) rotate(${scrollY * 0.1}deg)`,
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div 
        className="absolute top-40 right-20 w-24 h-24 opacity-5 gpu-layer"
        style={{
          transform: `translateY(${layer3Speed * 1.2}px) rotate(${-scrollY * 0.15}deg)`,
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(34, 197, 94, 0.1))',
          borderRadius: '50%',
          transition: 'transform 0.25s ease-out'
        }}
      />
      
      <div 
        className="absolute bottom-40 left-1/4 w-20 h-20 opacity-5 gpu-layer"
        style={{
          transform: `translateY(${layer2Speed * 0.8}px) rotate(${scrollY * 0.2}deg)`,
          background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      {/* Animated Grid Lines */}
      <div 
        className="absolute inset-0 opacity-3 gpu-layer"
        style={{
          transform: `translateY(${layer1Speed * 0.5}px)`,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </>
  );
};