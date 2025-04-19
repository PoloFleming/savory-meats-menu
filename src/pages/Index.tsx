import { MenuCategory } from "@/components/MenuCategory";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuItem } from "@/components/MenuItem";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";
import { Beer, Fish, GlassWater, Utensils, Wine, CupSoda, Beef } from "lucide-react";
import { DessertsSection } from "@/components/DessertsSection";

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
          <MenuCategory title={t("specialties")}>
            <MenuItem
              title={t("monteBianco")}
              price="6.00"
              description={t("monteBiancoDesc")}
            />
            <MenuItem
              title={t("nuvoleDiFiletto")}
              price="40.00"
              description={t("nuvoleDiFilettoDesc")}
              priceDisclosure="€6.00/100g"
            />
            <MenuItem
              title={t("disossataDiScottona")}
              price="6.00"
              description={t("disossataDiScottonaDesc")}
              priceDisclosure="€6.00/100g"
            />
            <MenuItem
              title={t("fiorentina")}
              price="6.00"
              description={t("fiorentinaDesc")}
              priceDisclosure="€6.00/100g"
            />
            <MenuItem
              title={t("tagliataDiLattone")}
              price="6.00"
              description={t("tagliataDiLattoneDesc")}
              priceDisclosure="€6.00/100g"
            />
            <MenuItem
              title={t("mrBean")}
              price="23.00"
              description={t("mrBeanDesc")}
            />
          </MenuCategory>

          <MenuCategory title={t("appetizers")} className="bg-muted py-8 px-4 rounded-lg">
            <div className="flex justify-center mb-6">
              <Beef size={32} className="text-terracotta" />
            </div>

            <MenuItem
              title={t("trisAssaggio")}
              price="24.00"
              description={t("trisAssaggioDesc")}
            />
            <MenuItem
              title={t("polpetteFritte")}
              price="12.00"
              description={t("polpetteFritteDesc")}
            />
            <MenuItem
              title={t("polpetteAlSugo")}
              price="13.00"
              description={t("polpetteAlSugoDesc")}
            />
            <MenuItem
              title={t("braciolinePiccanti")}
              price="18.00"
              description={t("braciolinePiccantiDesc")}
            />
            <MenuItem
              title={t("carpaccio")}
              price="30.00"
              description={t("carpaccioDesc")}
            />
          </MenuCategory>

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
              price="22.00"
              description={t("spiedoDiPolpaDiCastratoDesc")}
            />
            <MenuItem
              title={t("fiorentinaGrill")}
              price="6.00"
              description={t("fiorentinaGrillDesc")}
            />
            <MenuItem
              title={t("costataDiVitello")}
              price="6.00"
              description={t("costataDiVitelloDesc")}
            />
            <MenuItem
              title={t("tagliataDiManzo")}
              price="6.00"
              description={t("tagliataDiManzoDesc")}
            />
            <MenuItem
              title={t("tagliataDiLattoneGrill")}
              price="6.00"
              description={t("tagliataDiLattoneGrillDesc")}
            />
            <MenuItem
              title={t("disossataDiScottoneGrill")}
              price="6.00"
              description={t("disossataDiScottoneGrillDesc")}
            />
            <MenuItem
              title={t("capicolloDiCinghiale")}
              price="6.00"
              description={t("capicolloDiCinghialeDesc")}
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
            />
            <MenuItem
              title={t("filetto")}
              price="40.00"
              description={t("filettoDesc")}
            />
          </MenuCategory>

          <MenuCategory title={t("sideDishes")}>
            <MenuItem
              title={t("insalataVerde")}
              price="5.00"
              description={t("insalataVerdeDesc")}
            />
            <MenuItem
              title={t("patateFritteChips")}
              price="5.00"
              description={t("patateFritteChipsDesc")}
            />
            <MenuItem
              title={t("patateFritteStick")}
              price="5.00"
              description={t("patateFritteStickDesc")}
            />
            <MenuItem
              title={t("patateAlForno")}
              price="5.00"
              description={t("patateAlFornoDesc")}
            />
            <MenuItem
              title={t("polpetteFritteSide")}
              price="8.00"
              description={t("polpetteFritteSideDesc")}
            />
            <MenuItem
              title={t("polpetteAlSugoSide")}
              price="9.00"
              description={t("polpetteAlSugoSideDesc")}
            />
            <MenuItem
              title={t("verdureGrigliate")}
              price="6.00"
              description={t("verdureGrigliateDesc")}
            />
            <div className="mt-4 text-sm text-muted-foreground italic">
              {t("freshProduct")}
            </div>
          </MenuCategory>

          <MenuCategory title={t("drinks")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <Wine size={20} className="mr-2" /> {t("wines")}
                </h3>
                <MenuItem
                  title={t("vinoLocalCaraffa")}
                  price="4.00"
                />
                <MenuItem
                  title={t("vinoLitro")}
                  price="8.00"
                />
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <Beer size={20} className="mr-2" /> {t("beers")}
                </h3>
                <MenuItem
                  title={t("birraDreherSmall")}
                  price="2.00"
                />
                <MenuItem
                  title={t("birraDreherLarge")}
                  price="3.00"
                />
                <MenuItem
                  title={t("birraHeinekenSmall")}
                  price="3.00"
                />
                <MenuItem
                  title={t("birraHeinekenLarge")}
                  price="4.00"
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
                  price="2.00"
                />
                <MenuItem
                  title={t("aranciataLarge")}
                  price="4.00"
                />
                <MenuItem
                  title={t("cocaColaSmall")}
                  price="2.00"
                />
                <MenuItem
                  title={t("cocaColaLarge")}
                  price="4.00"
                />
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <GlassWater size={20} className="mr-2" /> {t("water")}
                </h3>
                <MenuItem
                  title={t("acquaSmall")}
                  price="1.00"
                />
                <MenuItem
                  title={t("acquaLarge")}
                  price="2.00"
                />
              </div>
            </div>
          </MenuCategory>

          <DessertsSection />

          <div className="mt-12 py-8 border-t border-muted">
            <div className="text-center">
              <h2 className="font-serif text-2xl text-terracotta mb-2">{t("openingHours")}</h2>
              <p className="text-muted-foreground">
                {t("openingHoursDetail")}<br />
                {t("closed")}
              </p>
            </div>

            <div className="text-center mt-6">
              <h2 className="font-serif text-2xl text-terracotta mb-2">{t("location")}</h2>
              <p className="text-muted-foreground">
                Via della Torre, 60<br />
                Torre Santa Sabina, Carovigno (BR)<br />
                Tel: +39 338/7380070
              </p>
            </div>
          </div>

          <footer className="footer">
            <p>© {new Date().getFullYear()} La Braceria di Santa Sabina | Tutti i diritti riservati</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
