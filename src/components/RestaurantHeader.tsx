
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
            src="/lovable-uploads/0aac45ce-f81c-4a9b-8c2f-89cb29c97da2.png" 
            alt="Ristorante Macelleria da Pasqualino Logo" 
            className="h-48 md:h-64 mx-auto"
          />
        </div>
        <div className="mt-4">
          <p className="restaurant-tagline">DEGUSTAZIONI DI CARNI ALLA BRACE</p>
        </div>
      </div>
    </header>
  );
};
