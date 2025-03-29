
type TranslationKey = 
  | "restaurantDescription"
  | "specialties"
  | "appetizers" 
  | "grillMeat"
  | "sideDishes"
  | "drinks"
  | "desserts"
  | "wines"
  | "beers"
  | "softDrinks"
  | "water"
  | "openingHours"
  | "location"
  | "openingHoursDetail"
  | "closed"
  | "coverCharge";

type Translations = {
  [key in TranslationKey]: string;
}

type AllTranslations = {
  [lang: string]: Translations;
}

export const translations: AllTranslations = {
  it: {
    restaurantDescription: "Nel cuore di Torre Santa Sabina, il nostro ristorante vi offre un'esperienza gastronomica autentica, dove la tradizione pugliese incontra la passione per la carne alla griglia.",
    specialties: "Specialità della Casa",
    appetizers: "Antipasti",
    grillMeat: "Carne alla Brace",
    sideDishes: "Contorni",
    drinks: "Bevande",
    desserts: "Dessert",
    wines: "Vini",
    beers: "Birre",
    softDrinks: "Bevande Analcoliche",
    water: "Acqua",
    openingHours: "Orari di Apertura",
    location: "Dove Siamo",
    openingHoursDetail: "Lunedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica\n12:30 - 14:30 | 19:30 - 22:30",
    closed: "Martedì: Chiuso",
    coverCharge: "COPERTO E PANE"
  },
  en: {
    restaurantDescription: "In the heart of Torre Santa Sabina, our restaurant offers an authentic gastronomic experience, where Apulian tradition meets the passion for grilled meat.",
    specialties: "House Specialties",
    appetizers: "Appetizers",
    grillMeat: "Grilled Meat",
    sideDishes: "Side Dishes",
    drinks: "Drinks",
    desserts: "Dessert",
    wines: "Wines",
    beers: "Beers",
    softDrinks: "Soft Drinks",
    water: "Water",
    openingHours: "Opening Hours",
    location: "Where We Are",
    openingHoursDetail: "Monday, Wednesday, Thursday, Friday, Saturday, Sunday\n12:30 - 14:30 | 19:30 - 22:30",
    closed: "Tuesday: Closed",
    coverCharge: "COVER CHARGE AND BREAD"
  },
  de: {
    restaurantDescription: "Im Herzen von Torre Santa Sabina bietet unser Restaurant ein authentisches gastronomisches Erlebnis, bei dem apulische Tradition auf Leidenschaft für gegrilltes Fleisch trifft.",
    specialties: "Hausspezialitäten",
    appetizers: "Vorspeisen",
    grillMeat: "Grillfleisch",
    sideDishes: "Beilagen",
    drinks: "Getränke",
    desserts: "Dessert",
    wines: "Weine",
    beers: "Biere",
    softDrinks: "Alkoholfreie Getränke",
    water: "Wasser",
    openingHours: "Öffnungszeiten",
    location: "Wo wir sind",
    openingHoursDetail: "Montag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag\n12:30 - 14:30 | 19:30 - 22:30",
    closed: "Dienstag: Geschlossen",
    coverCharge: "GEDECK UND BROT"
  },
  fr: {
    restaurantDescription: "Au cœur de Torre Santa Sabina, notre restaurant vous offre une expérience gastronomique authentique, où la tradition des Pouilles rencontre la passion de la viande grillée.",
    specialties: "Spécialités de la Maison",
    appetizers: "Entrées",
    grillMeat: "Viandes Grillées",
    sideDishes: "Accompagnements",
    drinks: "Boissons",
    desserts: "Desserts",
    wines: "Vins",
    beers: "Bières",
    softDrinks: "Boissons Sans Alcool",
    water: "Eau",
    openingHours: "Heures d'Ouverture",
    location: "Où Nous Trouver",
    openingHoursDetail: "Lundi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche\n12:30 - 14:30 | 19:30 - 22:30",
    closed: "Mardi: Fermé",
    coverCharge: "COUVERT ET PAIN"
  },
  es: {
    restaurantDescription: "En el corazón de Torre Santa Sabina, nuestro restaurante ofrece una auténtica experiencia gastronómica, donde la tradición de Apulia se encuentra con la pasión por la carne a la parrilla.",
    specialties: "Especialidades de la Casa",
    appetizers: "Entrantes",
    grillMeat: "Carnes a la Parrilla",
    sideDishes: "Guarniciones",
    drinks: "Bebidas",
    desserts: "Postres",
    wines: "Vinos",
    beers: "Cervezas",
    softDrinks: "Refrescos",
    water: "Agua",
    openingHours: "Horario de Apertura",
    location: "Dónde Estamos",
    openingHoursDetail: "Lunes, Miércoles, Jueves, Viernes, Sábado, Domingo\n12:30 - 14:30 | 19:30 - 22:30",
    closed: "Martes: Cerrado",
    coverCharge: "CUBIERTO Y PAN"
  }
};

export function useTranslation(language: string) {
  return (key: TranslationKey): string => {
    // Fallback to Italian if language or key doesn't exist
    return translations[language]?.[key] || translations.it[key];
  };
}
