import { AllTranslations } from '../translations/types';
import { italianTranslations } from '../translations/it';
import { englishTranslations } from '../translations/en';
import { germanTranslations } from '../translations/de';
import { frenchTranslations } from '../translations/fr';
import { spanishTranslations } from '../translations/es';

const translations: AllTranslations = {
  it: italianTranslations,
  en: englishTranslations,
  de: germanTranslations,
  fr: frenchTranslations,
  es: spanishTranslations, // Add Spanish translations
};

export const useTranslation = (language: string) => {
  return (key: keyof typeof italianTranslations): string => {
    // If the language doesn't exist, default to English
    if (!translations[language]) {
      return translations.en[key] || key;
    }
    
    // If the key doesn't exist for the language, try English, then fall back to the key itself
    return translations[language][key] || translations.en[key] || key;
  };
};
