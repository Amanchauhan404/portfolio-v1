
import { Button } from "@/components/ui/button";

interface HeroButtonsProps {
  transforms: {
    buttons: { transform: string; opacity: number };
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
        className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 neon-border overflow-hidden"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="relative z-10">View My Work</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        className="relative group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 neon-border overflow-hidden"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="relative z-10">Get In Touch</span>
      </Button>
    </div>
  );
};
