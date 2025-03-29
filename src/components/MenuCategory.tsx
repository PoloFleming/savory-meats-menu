
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MenuCategoryProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const MenuCategory = ({ title, children, className }: MenuCategoryProps) => {
  return (
    <div className={cn("menu-category", className)}>
      <h2 className="menu-category-title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};
