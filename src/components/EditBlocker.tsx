
import { Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface EditBlockerProps {
  className?: string;
}

export const EditBlocker = ({ className }: EditBlockerProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the blocker after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={cn(
      "fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300",
      visible ? "opacity-100" : "opacity-0",
      className
    )}>
      <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg">
        <Square className="h-16 w-16 text-pasqualino-red mx-auto mb-4" />
        <h2 className="text-2xl font-serif font-medium mb-2">Edit Blocked</h2>
        <p className="text-muted-foreground mb-4">
          This application is view-only mode. Editing is currently disabled.
        </p>
      </div>
    </div>
  );
};
