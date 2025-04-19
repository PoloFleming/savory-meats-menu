
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";

export const SideDishesSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <MenuCategory title={t("sideDishes")}>
      <MenuItem
        title={t("insalataVerde")}
        price="4.00"
        description={t("insalataVerdeDesc")}
      />
      <MenuItem
        title={t("patateFritteChips")}
        price="7.00"
        description={t("patateFritteChipsDesc")}
      />
      <MenuItem
        title={t("patateFritteStick")}
        price="7.00"
        description={t("patateFritteStickDesc")}
      />
      <MenuItem
        title={t("patateAlForno")}
        price="7.00"
        description={t("patateAlFornoDesc")}
      />
      <MenuItem
        title={t("polpetteFritteSide")}
        price="12.00"
        description={t("polpetteFritteSideDesc")}
      />
      <MenuItem
        title={t("polpetteAlSugoSide")}
        price="13.00"
        description={t("polpetteAlSugoSideDesc")}
      />
      <MenuItem
        title={t("verdureGrigliate")}
        price="8.00"
        description={t("verdureGrigliateDesc")}
      />
      <div className="mt-4 text-sm text-muted-foreground italic">
        {t("freshProduct")}
      </div>
    </MenuCategory>
  );
};
