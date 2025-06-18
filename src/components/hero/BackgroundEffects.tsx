
interface BackgroundEffectsProps {
  transforms: {
    background: { transform: string; opacity: number };
  };
}

export const BackgroundEffects = ({ transforms }: BackgroundEffectsProps) => {
  return (
    <div 
      className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-purple-900/15 to-pink-900/15 gpu-layer"
      style={transforms.background}
    />
  );
};
