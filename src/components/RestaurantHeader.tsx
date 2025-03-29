import { cn } from "@/lib/utils";

interface RestaurantHeaderProps {
  className?: string;
}

export const RestaurantHeader = ({ className }: RestaurantHeaderProps) => {
  return (
    <header className={cn("relative overflow-hidden py-8 md:py-12", className)}>
      {/* Colorful background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pasqualino-cream via-pasqualino-cream/90 to-terracotta/20 opacity-90" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-pasqualino-cream/30 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pasqualino-cream/20 rounded-full blur-3xl translate-x-1/4" />
      </div>

      {/* Main content with logo on left */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img 
            src="/lovable-uploads/47f8dfc9-0796-4485-afab-aa44b5d2151a.png" 
            alt="Bull Logo" 
            className="h-48 md:h-64 drop-shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-end justify-center md:mt-8">
          {/* Restaurant name */}
          <div className="text-center md:text-right">
            <h1 className="restaurant-name">RISTORANTE<br />MACELLERIA</h1>
            <h2 className="restaurant-subtitle">da Pasqualino</h2>
          </div>
          <div className="mt-4 flex justify-center md:justify-end w-full">
            <div className="restaurant-tagline relative overflow-hidden before:absolute before:inset-0 before:bg-pasqualino-red/20 before:blur-sm before:-z-10 max-w-xs">
              <p className="restaurant-tagline z-10 relative font-bold tracking-wider text-terracotta px-4 py-1">DEGUSTAZIONI DI CARNI ALLA BRACE</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* New grilled steak image below header */}
      <div className="relative mt-6 w-full overflow-hidden h-24 md:h-32">
        <img 
          src="/lovable-uploads/114d5a7f-16bf-47e2-9661-4b86673bca9e.png" 
          alt="Grilled steak with lemon" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pasqualino-cream to-transparent opacity-70"></div>
      </div>
    </header>
  );
};
