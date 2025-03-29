
import { cn } from "@/lib/utils";

interface RestaurantHeaderProps {
  className?: string;
}

export const RestaurantHeader = ({ className }: RestaurantHeaderProps) => {
  return (
    <header className={cn("text-center py-8 md:py-12", className)}>
      <h1 className="restaurant-name">Ristorante Macelleria Degustazione di Carni alla Brace da Paqualino</h1>
      <p className="restaurant-subtitle">Autentica Cucina Pugliese</p>
    </header>
  );
};
