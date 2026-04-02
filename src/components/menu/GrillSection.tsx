
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
        price="24.00"
        description={t("spiedoMistoDesc")}
      />
      <MenuItem
        title={t("spiedoDiSalsicciaMista")}
        price="24.00"
        description={t("spiedoDiSalsicciaMistaDesc")}
      />
      <MenuItem
        title={t("spiedoDiBombette")}
        price="24.00"
        description={t("spiedoDiBombetteDesc")}
      />
      <MenuItem
        title={t("spiedoDiSalsicciaAPuntaDiColtello")}
        price="24.00"
        description={t("spiedoDiSalsicciaAPuntaDiColtelloDesc")}
      />
      <MenuItem
        title={t("spiedoDiBombetteDiCinghiale")}
        price="24.00"
        description={t("spiedoDiBombetteDiCinghialeDesc")}
      />
      <MenuItem
        title={t("spiedoDiSalsicciaPiccante")}
        price="24.00"
        description={t("spiedoDiSalsicciaPiccanteDesc")}
      />
      <MenuItem
        title={t("spiedoDiTurcinieddi")}
        price="24.00"
        description={t("spiedoDiTurcinieddiDesc")}
      />
      <MenuItem
        title={t("spiedoDiPolpaDiCastrato")}
        price="24.00"
        description={t("spiedoDiPolpaDiCastratoDesc")}
      />
      <MenuItem
        title={t("fiorentinaGrill")}
        price="6.50"
        description={t("fiorentinaGrillDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("costataDiVitello")}
        price="6.50"
        description={t("costataDiVitelloDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("tagliataDiManzo")}
        price="6.50"
        description={t("tagliataDiManzoDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("tagliataDiLattoneGrill")}
        price="6.50"
        description={t("tagliataDiLattoneGrillDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("disossataDiScottoneGrill")}
        price="6.50"
        description={t("disossataDiScottoneGrillDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("capicolloDiCinghiale")}
        price="6.50"
        description={t("capicolloDiCinghialeDesc")}
        priceDisclosure="/100g"
      />
      <MenuItem
        title={t("agnello")}
        price="45.00"
        description={t("agnelloDesc")}
      />
      <MenuItem
        title={t("castrato")}
        price="6.50"
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
