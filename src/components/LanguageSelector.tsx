
import React from "react";
import { Globe } from "lucide-react";
import { useLanguage, languages } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("fixed top-4 right-4 z-50", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-pasqualino-cream">
            <Globe size={18} />
            <span>{languages[language]}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {Object.entries(languages).map(([code, name]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => setLanguage(code as any)}
              className={cn(
                "cursor-pointer",
                language === code && "font-bold bg-muted"
              )}
            >
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
