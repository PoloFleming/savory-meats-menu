
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MenuCategoryProps {
  title: string;
  children: ReactNode;
  className?: string;
  smallCaps?: boolean;
}

export const MenuCategory = ({ title, children, className, smallCaps }: MenuCategoryProps) => {
  return (
    <div className={cn("menu-category", className)}>
      <h2 className={cn("menu-category-title", smallCaps && "font-normal first-letter:uppercase first-letter:text-3xl text-2xl font-medium tracking-wider")}>{smallCaps ? title.toLowerCase() : title}</h2>
      <div>{children}</div>
    </div>
  );
};
