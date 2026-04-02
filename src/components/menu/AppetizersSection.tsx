
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";
import { Beef } from "lucide-react";

export const AppetizersSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <MenuCategory title={t("appetizers")} className="bg-muted py-8 px-4 rounded-lg">
      <div className="flex justify-center mb-6">
        <Beef size={32} className="text-terracotta" />
      </div>

      <MenuItem
        title={t("trisAssaggio")}
        price="25.00"
        description={t("trisAssaggioDesc")}
      />
      <MenuItem
        title={t("polpetteFritte")}
        price="13.00"
        description={t("polpetteFritteDesc")}
      />
      <MenuItem
        title={t("polpetteAlSugo")}
        price="14.00"
        description={t("polpetteAlSugoDesc")}
      />
      <MenuItem
        title={t("braciolinePiccanti")}
        price="20.00"
      />
      <MenuItem
        title={t("carpaccio")}
        price="35.00"
        description={t("carpaccioDesc")}
      />
    </MenuCategory>
  );
};
