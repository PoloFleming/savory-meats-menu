
import { cn } from "@/lib/utils";

interface MenuItemProps {
  title: string;
  price: string;
  description?: string;
  priceDisclosure?: string;
  className?: string;
}

export const MenuItem = ({ 
  title, 
  price, 
  description, 
  priceDisclosure, 
  className 
}: MenuItemProps) => {
  return (
    <div className={cn("menu-item", className)}>
      <div className="menu-item-title">
        <span>{title}</span>
        <span className="menu-item-price">
          {price.includes("€") ? price : `€${price}`}
          {priceDisclosure && (
            <span className="text-xs text-muted-foreground ml-1">
              {priceDisclosure}
            </span>
          )}
        </span>
      </div>
      {description && <p className="menu-item-description">{description}</p>}
    </div>
  );
};
