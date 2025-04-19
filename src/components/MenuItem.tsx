
import { cn } from "@/lib/utils";

interface MenuItemProps {
  title: string;
  price: string;
  description?: string;
  className?: string;
  priceDisclosure?: string;
}

export const MenuItem = ({ 
  title, 
  price, 
  description, 
  className, 
  priceDisclosure 
}: MenuItemProps) => {
  return (
    <div className={cn("menu-item", className)}>
      <div className="menu-item-title">
        <span>{title}</span>
        <span className="menu-item-price">
          {price.includes("€") ? price : `€${price}`}
        </span>
      </div>
      {description && <p className="menu-item-description">{description}</p>}
      {priceDisclosure && (
        <p className="text-xs text-muted-foreground mt-1">
          {priceDisclosure}
        </p>
      )}
    </div>
  );
};
