
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";

interface RestaurantHeaderProps {
  className?: string;
}

export const RestaurantHeader = ({ className }: RestaurantHeaderProps) => {
  return (
    <header className={cn("text-center py-8 md:py-12", className)}>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <img 
            src="/lovable-uploads/2d6be7c8-ac4d-45ef-8b49-2f549d60ca64.png" 
            alt="Ristorante Macelleria da Pasqualino Logo" 
            className="h-64 md:h-80 mx-auto"
          />
        </div>
        <div className="mt-4">
          <p className="restaurant-tagline">DEGUSTAZIONI DI CARNI ALLA BRACE</p>
        </div>
      </div>
    </header>
  );
};
