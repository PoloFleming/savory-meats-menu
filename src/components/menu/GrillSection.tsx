
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";

export const GrillSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <MenuCategory title={t("grillMeat")}>
      <MenuItem
        title={t("spiedoMisto")}
        price="23.00"
        description={t("spiedoMistoDesc")}
      />
      <MenuItem
        title={t("spiedoDiSalsicciaMista")}
        price="23.00"
        description={t("spiedoDiSalsicciaMistaDesc")}
      />
      <MenuItem
        title={t("spiedoDiBombette")}
        price="23.00"
        description={t("spiedoDiBombetteDesc")}
      />
      <MenuItem
        title={t("spiedoDiSalsicciaAPuntaDiColtello")}
        price="23.00"
        description={t("spiedoDiSalsicciaAPuntaDiColtelloDesc")}
      />
      <MenuItem
        title={t("spiedoDiBombetteDiCinghiale")}
        price="23.00"
        description={t("spiedoDiBombetteDiCinghialeDesc")}
      />
      <MenuItem
        title={t("spiedoDiSalsicciaPiccante")}
        price="23.00"
        description={t("spiedoDiSalsicciaPiccanteDesc")}
      />
      <MenuItem
        title={t("spiedoDiTurcinieddi")}
        price="23.00"
        description={t("spiedoDiTurcinieddiDesc")}
      />
      <MenuItem
        title={t("spiedoDiPolpaDiCastrato")}
        price="23.00"
        description={t("spiedoDiPolpaDiCastratoDesc")}
      />
      <MenuItem
        title={t("fiorentinaGrill")}
        price="6.00"
        description={t("fiorentinaGrillDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("costataDiVitello")}
        price="6.00"
        description={t("costataDiVitelloDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("tagliataDiManzo")}
        price="6.00"
        description={t("tagliataDiManzoDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("tagliataDiLattoneGrill")}
        price="6.00"
        description={t("tagliataDiLattoneGrillDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("disossataDiScottoneGrill")}
        price="6.00"
        description={t("disossataDiScottoneGrillDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("capicolloDiCinghiale")}
        price="6.00"
        description={t("capicolloDiCinghialeDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("agnello")}
        price="40.00"
        description={t("agnelloDesc")}
      />
      <MenuItem
        title={t("castrato")}
        price="6.00"
        description={t("castratoDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("filetto")}
        price="40.00"
        description={t("filettoDesc")}
      />
    </MenuCategory>
  );
};
