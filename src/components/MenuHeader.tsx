
import { Beef, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface MenuHeaderProps {
  className?: string;
}

export const MenuHeader = ({ className }: MenuHeaderProps) => {
  const { language } = useLanguage();
  
  // Simple menu title translations
  const menuTitles = {
    it: "Il Nostro Menù",
    en: "Our Menu",
    de: "Unsere Speisekarte",
    fr: "Notre Menu",
    es: "Nuestro Menú"
  };

  return (
    <div className={cn("flex items-center justify-center gap-4 my-6", className)}>
      <div className="h-[2px] w-16 bg-terracotta"></div>
      <div className="flex items-center gap-2 text-terracotta">
        <Beef size={24} />
        <span className="font-serif italic text-xl">{menuTitles[language]}</span>
        <Utensils size={24} />
      </div>
      <div className="h-[2px] w-16 bg-terracotta"></div>
    </div>
  );
};
