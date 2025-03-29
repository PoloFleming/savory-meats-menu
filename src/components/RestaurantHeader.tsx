
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";

interface RestaurantHeaderProps {
  className?: string;
}

export const RestaurantHeader = ({ className }: RestaurantHeaderProps) => {
  return (
    <header className={cn("relative overflow-hidden py-8 md:py-12", className)}>
      {/* Colorful background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pasqualino-cream via-amber/20 to-terracotta/30 opacity-80" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-olive/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber/10 rounded-full blur-3xl translate-x-1/4" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-20 h-20 md:w-32 md:h-32 text-pasqualino-red opacity-10">
        <Flame className="w-full h-full" />
      </div>
      <div className="absolute bottom-4 right-4 w-20 h-20 md:w-32 md:h-32 text-olive opacity-10 transform rotate-45">
        <Flame className="w-full h-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
          <img 
            src="/lovable-uploads/2d6be7c8-ac4d-45ef-8b49-2f549d60ca64.png" 
            alt="Ristorante Macelleria da Pasqualino Logo" 
            className="h-64 md:h-80 mx-auto drop-shadow-lg"
          />
        </div>
        <div className="mt-4">
          <div className="restaurant-tagline relative overflow-hidden before:absolute before:inset-0 before:bg-pasqualino-red/20 before:blur-sm before:-z-10 animate-pulse">
            <p className="restaurant-tagline z-10 relative">DEGUSTAZIONI DI CARNI ALLA BRACE</p>
          </div>
        </div>
      </div>
    </header>
  );
};
