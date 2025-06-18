import { Button } from "@/components/ui/button";

interface HeroButtonsProps {
  transforms: {
    buttons: { transform: string; opacity: number; transition?: string };
  };
}

export const HeroButtons = ({ transforms }: HeroButtonsProps) => {
  return (
    <div 
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center gpu-layer"
      style={transforms.buttons}
    >
      <Button
        size="lg"
        className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-500 transform hover:scale-110 neon-border overflow-hidden"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          animation: 'scale-in 0.6s ease-out 1.2s both',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)'
        }}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:text-shadow-neon">View My Work</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500" />
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        className="relative group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-500 transform hover:scale-110 neon-border overflow-hidden backdrop-blur-sm"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          animation: 'scale-in 0.6s ease-out 1.4s both',
          background: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
        }}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:text-shadow-neon">Get In Touch</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
      </Button>
    </div>
  );
};