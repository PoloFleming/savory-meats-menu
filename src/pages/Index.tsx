
import { MenuHeader } from "@/components/MenuHeader";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";
import { SpecialtiesSection } from "@/components/menu/SpecialtiesSection";
import { AppetizersSection } from "@/components/menu/AppetizersSection";
import { GrillSection } from "@/components/menu/GrillSection";
import { SideDishesSection } from "@/components/menu/SideDishesSection";
import { DrinksSection } from "@/components/menu/DrinksSection";
import { DessertsSection } from "@/components/DessertsSection";
import { RestaurantFooter } from "@/components/RestaurantFooter";

const Index = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-cream">
      <div className="container max-w-4xl px-4 mx-auto">
        <LanguageSelector />
        <RestaurantHeader />
        
        <div className="mt-4 md:mt-8 text-center">
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            {t("restaurantDescription")}
          </p>
        </div>

        <MenuHeader />

        <div className="relative py-6">
          <SpecialtiesSection />
          <AppetizersSection />
          <GrillSection />
          <SideDishesSection />
          <DrinksSection />
          <DessertsSection />
          <RestaurantFooter />
        </div>
      </div>
    </div>
  );
};

export default Index;
