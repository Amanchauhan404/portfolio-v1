
interface FloatingElementsProps {
  transforms: {
    floating1: { transform: string };
    floating2: { transform: string };
    floating3: { transform: string };
  };
  isLowEnd: boolean;
}

export const FloatingElements = ({ transforms, isLowEnd }: FloatingElementsProps) => {
  if (isLowEnd) return null;

  return (
    <>
      <div className="mb-8 relative">
        <div 
          className="absolute -top-5 -left-5 sm:-top-10 sm:-left-10 w-12 h-12 sm:w-20 sm:h-20 border border-blue-500/20 rounded-full animate-spin-slow gpu-layer"
          style={transforms.floating1}
        />
        <div 
          className="absolute -top-3 -right-8 sm:-top-5 sm:-right-15 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full gpu-layer"
          style={transforms.floating2}
        />
      </div>

      <div 
        className="absolute top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 gpu-layer"
        style={transforms.floating1}
      />
      <div 
        className="absolute top-40 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-xl opacity-20 gpu-layer"
        style={transforms.floating2}
      />
      <div 
        className="absolute bottom-40 left-10 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-20 gpu-layer"
        style={transforms.floating3}
      />
    </>
  );
};
