
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/translations";

export const RestaurantFooter = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
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

      <footer className="footer">
        <p>© {new Date().getFullYear()} La Braceria di Santa Sabina | Tutti i diritti riservati</p>
      </footer>
    </div>
  );
};
