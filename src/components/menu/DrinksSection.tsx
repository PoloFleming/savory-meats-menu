import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";
import { Beer, CupSoda, GlassWater, Wine } from "lucide-react";

export const DrinksSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <MenuCategory title={t("drinks")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
            <Wine size={20} className="mr-2" /> {t("wines")}
          </h3>
          <MenuItem
            title={t("vinoLocalCaraffa")}
            price="7.00"
          />
          <MenuItem
            title={t("vinoLitro")}
            price="13.00"
          />
        </div>
        
        <div>
          <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
            <Beer size={20} className="mr-2" /> {t("beers")}
          </h3>
          <MenuItem
            title={t("birraDreherSmall")}
            price="3.00"
          />
          <MenuItem
            title={t("birraDreherLarge")}
            price="5.00"
          />
          <MenuItem
            title={t("birraHeinekenSmall")}
            price="4.00"
          />
          <MenuItem
            title={t("birraHeinekenLarge")}
            price="6.00"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
            <CupSoda size={20} className="mr-2" /> {t("softDrinks")}
          </h3>
          <MenuItem
            title={t("aranciataSmall")}
            price="3.00"
          />
          <MenuItem
            title={t("aranciataLarge")}
            price="5.00"
          />
          <MenuItem
            title={t("cocaColaSmall")}
            price="3.00"
          />
          <MenuItem
            title={t("cocaColaLarge")}
            price="5.00"
          />
        </div>
        
        <div>
          <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
            <GlassWater size={20} className="mr-2" /> {t("water")}
          </h3>
          <MenuItem
            title={t("acquaLarge")}
            price="3.00"
          />
        </div>
      </div>
    </MenuCategory>
  );
};
