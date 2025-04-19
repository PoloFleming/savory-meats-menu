
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";

export const SpecialtiesSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <MenuCategory title={t("specialties")}>
      <MenuItem
        title={t("monteBianco")}
        price="6.00"
        description={t("monteBiancoDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("nuvoleDiFiletto")}
        price="40.00"
        description={t("nuvoleDiFilettoDesc")}
      />
      <MenuItem
        title={t("disossataDiScottona")}
        price="6.00"
        description={t("disossataDiScottonaDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("fiorentina")}
        price="6.00"
        description={t("fiorentinaDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("tagliataDiLattone")}
        price="6.00"
        description={t("tagliataDiLattoneDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("mrBean")}
        price="23.00"
        description={t("mrBeanDesc")}
      />
    </MenuCategory>
  );
};
