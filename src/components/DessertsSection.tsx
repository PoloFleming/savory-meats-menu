
import { IceCream } from "lucide-react";
import { MenuItem } from "./MenuItem";
import { MenuCategory } from "./MenuCategory";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";

export const DessertsSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <MenuCategory title={t("desserts")} className="pt-8 pb-4">
      <div className="flex justify-center mb-6">
        <IceCream size={32} className="text-terracotta" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <MenuItem
          title={t("sorbettoAlLimone")}
          price="5.00"
        />
        <MenuItem
          title={t("tartufoBianco")}
          price="5.00"
        />
        <MenuItem
          title={t("tartufoNero")}
          price="5.00"
        />
        <MenuItem
          title={t("cremaCatalana")}
          price="6.00"
        />
        <MenuItem
          title={t("tiramisu")}
          price="6.00"
        />
        <MenuItem
          title={t("pannaCotta")}
          price="6.00"
        />
        <MenuItem
          title={t("tortaFillyAllaCrema")}
          price="6.00"
        />
        <MenuItem
          title={t("tortaFillyAlCioccolato")}
          price="6.00"
        />
        <MenuItem
          title={t("cremaDiLimoncello")}
          price="3.00"
        />
        <MenuItem
          title={t("cremaDiCaffe")}
          price="3.00"
        />
        <MenuItem
          title={t("amaro")}
          price="3.00"
        />
        <MenuItem
          title={t("grappa")}
          price="3.00"
        />
        <MenuItem
          title={t("coverCharge")}
          price="2.00"
        />
      </div>
    </MenuCategory>
  );
};

