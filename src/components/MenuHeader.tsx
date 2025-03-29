
import { Beef, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuHeaderProps {
  className?: string;
}

export const MenuHeader = ({ className }: MenuHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-4 my-6", className)}>
      <div className="h-[2px] w-16 bg-terracotta"></div>
      <div className="flex items-center gap-2 text-terracotta">
        <Beef size={24} />
        <span className="font-serif italic text-xl">Il Nostro Menù</span>
        <Utensils size={24} />
      </div>
      <div className="h-[2px] w-16 bg-terracotta"></div>
    </div>
  );
};
