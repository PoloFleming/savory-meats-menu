
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
  | "coverCharge"
  // Specialties
  | "monteBianco"
  | "monteBiancoDesc"
  | "nuvoleDiFiletto"
  | "nuvoleDiFilettoDesc"
  | "disossataDiScottona"
  | "disossataDiScottonaDesc"
  | "fiorentina"
  | "fiorentinaDesc"
  | "tagliataDiLattone"
  | "tagliataDiLattoneDesc"
  | "mrBean"
  | "mrBeanDesc"
  // Appetizers
  | "trisAssaggio"
  | "trisAssaggioDesc"
  | "polpetteFritte"
  | "polpetteFritteDesc"
  | "polpetteAlSugo"
  | "polpetteAlSugoDesc"
  | "braciolinePiccanti"
  | "braciolinePiccantiDesc"
  | "carpaccio"
  | "carpaccioDesc"
  | "bresaola"
  | "bresaolaDesc"
  // Grilled Meat
  | "spiedoMisto"
  | "spiedoMistoDesc"
  | "spiedoDiSalsicciaMista"
  | "spiedoDiSalsicciaMistaDesc"
  | "spiedoDiBombette"
  | "spiedoDiBombetteDesc"
  | "spiedoDiSalsicciaAPuntaDiColtello"
  | "spiedoDiSalsicciaAPuntaDiColtelloDesc"
  | "spiedoDiBombetteDiCinghiale"
  | "spiedoDiBombetteDiCinghialeDesc"
  | "spiedoDiSalsicciaPiccante"
  | "spiedoDiSalsicciaPiccanteDesc"
  | "spiedoDiTurcinieddi"
  | "spiedoDiTurcinieddiDesc"
  | "spiedoDiPolpaDiCastrato"
  | "spiedoDiPolpaDiCastratoDesc"
  | "fiorentinaGrill"
  | "fiorentinaGrillDesc"
  | "costataDiVitello"
  | "costataDiVitelloDesc"
  | "tagliataDiManzo"
  | "tagliataDiManzoDesc"
  | "tagliataDiLattoneGrill"
  | "tagliataDiLattoneGrillDesc"
  | "disossataDiScottoneGrill"
  | "disossataDiScottoneGrillDesc"
  | "capicolloDiCinghiale"
  | "capicolloDiCinghialeDesc"
  | "agnello"
  | "agnelloDesc"
  | "castrato"
  | "castratoDesc"
  | "filetto"
  | "filettoDesc"
  // Side Dishes
  | "insalataVerde"
  | "insalataVerdeDesc"
  | "patateFritteChips"
  | "patateFritteChipsDesc"
  | "patateFritteStick"
  | "patateFritteStickDesc"
  | "patateAlForno"
  | "patateAlFornoDesc"
  | "polpetteFritteSide"
  | "polpetteFritteSideDesc"
  | "polpetteAlSugoSide"
  | "polpetteAlSugoSideDesc"
  | "verdureGrigliate"
  | "verdureGrigliateDesc"
  | "freshProduct"
  // Drinks
  | "vinoLocalCaraffa"
  | "vinoLitro"
  | "birraDreherSmall"
  | "birraDreherLarge"
  | "birraHeinekenSmall"
  | "birraHeinekenLarge"
  | "aranciataSmall"
  | "aranciataLarge"
  | "cocaColaSmall"
  | "cocaColaLarge"
  | "acquaLarge"
  // Desserts
  | "sorbettoAlLimone"
  | "tartufoBianco"
  | "tartufoNero"
  | "cremaCatalana"
  | "pannaCotta"
  | "tiramisu"
  | "tortaFillyAllaCrema"
  | "tortaFillyAlCioccolato"
  | "cremaDiLimoncello"
  | "cremaDiCaffe"
  | "amaro"
  | "grappa";

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
    coverCharge: "COPERTO E PANE",
    // Specialties
    monteBianco: "MONTE BIANCO",
    monteBiancoDesc: "Lattone con rucola e grana - min. Kg 1,00",
    nuvoleDiFiletto: "NUVOLE DI FILETTO DI LATTONE",
    nuvoleDiFilettoDesc: "Condite con sale rosa, pepe e olio extravergine",
    disossataDiScottona: "DISOSSATA DI SCOTTONA",
    disossataDiScottonaDesc: "minimo 6 etti/ 8 etti (prezzo all'etto)",
    fiorentina: "FIORENTINA",
    fiorentinaDesc: "minimo 1 Kg / 2 Kg (prezzo all'etto)",
    tagliataDiLattone: "TAGLIATA DI LATTONE RUCOLA E GRANA",
    tagliataDiLattoneDesc: "minimo 600 / 800 g (prezzo all'etto)",
    mrBean: "Mr.BEAN",
    mrBeanDesc: "Cotoletta di lattone con cascata di patate fritte",
    // Appetizers
    trisAssaggio: "TRIS ASSAGGIO",
    trisAssaggioDesc: "Polpette fritte al sugo e bracioline",
    polpetteFritte: "POLPETTE FRITTE",
    polpetteFritteDesc: "Consigliamo polpette fritte durante l'attesa",
    polpetteAlSugo: "POLPETTE AL SUGO",
    polpetteAlSugoDesc: "Consigliamo polpette al sugo durante l'attesa",
    braciolinePiccanti: "BRACIOLINE PICCANTI AL POMODORO",
    braciolinePiccantiDesc: "",
    carpaccio: "CARPACCIO",
    carpaccioDesc: "Carne cruda condita con sedano, prezzemolo, limone, rucola, olio di oliva, pepe e grana",
    bresaola: "BRESAOLA",
    bresaolaDesc: "Condita con rucola, grana, pomodorini, limone, olio di oliva, sale e pepe",
    // Grilled Meat
    spiedoMisto: "SPIEDO MISTO",
    spiedoMistoDesc: "Salsiccia, bombette, pezzetti misti, turcinieddi",
    spiedoDiSalsicciaMista: "SPIEDO DI SALSICCIA MISTA",
    spiedoDiSalsicciaMistaDesc: "Bovino, suino. Ingredienti: carne bovina e suina, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300",
    spiedoDiBombette: "SPIEDO DI BOMBETTE",
    spiedoDiBombetteDesc: "Prosciutto, carne macinata, bovino, suino, mozzarella, grana, aromi naturali, pane grattugiato",
    spiedoDiSalsicciaAPuntaDiColtello: "SPIEDO DI SALSICCIA A PUNTA DI COLTELLO",
    spiedoDiSalsicciaAPuntaDiColtelloDesc: "Ingredienti: carne bovina e suina, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300",
    spiedoDiBombetteDiCinghiale: "SPIEDO DI BOMBETTE DI CINGHIALE",
    spiedoDiBombetteDiCinghialeDesc: "Ingredienti: carne bovina e suina, pezzettini arrotolati con pancetta, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300",
    spiedoDiSalsicciaPiccante: "SPIEDO DI SALSICCIA PICCANTE",
    spiedoDiSalsicciaPiccanteDesc: "Ingredienti: carne bovina e suina, sale, pepe, aglio, peperoncino, aromi naturali, vino bianco e insaporitori E300",
    spiedoDiTurcinieddi: "SPIEDO DI TURCINIEDDI",
    spiedoDiTurcinieddiDesc: "Ingredienti: fegato, cuore e polmone di agnello, rete, budello, sale, pepe, aglio, aromi naturali, vino bianco, insaporitori E300 e prezzemolo",
    spiedoDiPolpaDiCastrato: "SPIEDO DI POLPA DI CASTRATO",
    spiedoDiPolpaDiCastratoDesc: "Ingredienti: pezzetti di castrato, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300",
    fiorentinaGrill: "FIORENTINA",
    fiorentinaGrillDesc: "Da kg 1 a kg 2 (prezzo all'etto)",
    costataDiVitello: "COSTATA DI VITELLO",
    costataDiVitelloDesc: "Minimo 600/800 g (prezzo all'etto)",
    tagliataDiManzo: "TAGLIATA DI MANZO RUCOLA E GRANA",
    tagliataDiManzoDesc: "600/800 g (prezzo all'etto)",
    tagliataDiLattoneGrill: "TAGLIATA DI LATTONE RUCOLA E GRANA",
    tagliataDiLattoneGrillDesc: "600/800 g (prezzo all'etto)",
    disossataDiScottoneGrill: "DISOSSATA DI SCOTTONE",
    disossataDiScottoneGrillDesc: "Minimo 600/800 g (prezzo all'etto)",
    capicolloDiCinghiale: "CAPICOLLO DI CINGHIALE SENZA OSSO",
    capicolloDiCinghialeDesc: "Minimo 600/800 g (prezzo all'etto)",
    agnello: "AGNELLO",
    agnelloDesc: "",
    castrato: "CASTRATO",
    castratoDesc: "Minimo 600/800 g (prezzo all'etto)",
    filetto: "FILETTO",
    filettoDesc: "Prezzo all'etto",
    // Side Dishes
    insalataVerde: "INSALATA VERDE",
    insalataVerdeDesc: "",
    patateFritteChips: "PATATE FRITTE-CHIPS CROCCANTI",
    patateFritteChipsDesc: "FRESCHE *",
    patateFritteStick: "PATATE FRITTE-STICK",
    patateFritteStickDesc: "FRESCHE *",
    patateAlForno: "PATATE AL FORNO",
    patateAlFornoDesc: "",
    polpetteFritteSide: "POLPETTE FRITTE",
    polpetteFritteSideDesc: "",
    polpetteAlSugoSide: "POLPETTE AL SUGO",
    polpetteAlSugoSideDesc: "",
    verdureGrigliate: "VERDURE GRIGLIATE",
    verdureGrigliateDesc: "peperoni, melanzane, zucchine",
    freshProduct: "* in mancanza del fresco prodotto congelato",
    // Drinks
    vinoLocalCaraffa: "Vino locale in caraffa (500 ml)",
    vinoLitro: "Vino (1 lt)",
    birraDreherSmall: "Birra Dreher (33 cl)",
    birraDreherLarge: "Birra Dreher (66 cl)",
    birraHeinekenSmall: "Birra Heineken (33 cl)",
    birraHeinekenLarge: "Birra Heineken (66 cl)",
    aranciataSmall: "Aranciata (33 cl)",
    aranciataLarge: "Aranciata (1 lt)",
    cocaColaSmall: "Coca Cola (33 cl)",
    cocaColaLarge: "Coca Cola (1 lt)",
    acquaLarge: "Acqua Naturale/Frizzante (1,0 lt)",
    // Desserts
    sorbettoAlLimone: "SORBETTO AL LIMONE",
    tartufoBianco: "TARTUFO BIANCO",
    tartufoNero: "TARTUFO NERO",
    cremaCatalana: "CREMA CATALANA",
    pannaCotta: "PANNA COTTA",
    tiramisu: "TIRAMISU",
    tortaFillyAllaCrema: "TORTA FILLY ALLA CREMA",
    tortaFillyAlCioccolato: "TORTA FILLY AL CIOCCOLATO",
    cremaDiLimoncello: "CREMA DI LIMONCELLO",
    cremaDiCaffe: "CREMA DI CAFFE",
    amaro: "AMARO",
    grappa: "GRAPPA"
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
    coverCharge: "COVER CHARGE AND BREAD",
    // Specialties
    monteBianco: "MONTE BIANCO",
    monteBiancoDesc: "Milk-fed veal with arugula and parmesan - min. 1 kg",
    nuvoleDiFiletto: "MILK-FED VEAL FILLET CLOUDS",
    nuvoleDiFilettoDesc: "Seasoned with pink salt, pepper, and extra virgin olive oil",
    disossataDiScottona: "BONELESS SCOTTONA BEEF",
    disossataDiScottonaDesc: "Minimum 600/800 g (price per 100g)",
    fiorentina: "T-BONE STEAK",
    fiorentinaDesc: "Minimum 1 kg / 2 kg (price per 100g)",
    tagliataDiLattone: "MILK-FED VEAL SLICED STEAK WITH ARUGULA AND PARMESAN",
    tagliataDiLattoneDesc: "Minimum 600/800 g (price per 100g)",
    mrBean: "Mr.BEAN",
    mrBeanDesc: "Milk-fed veal cutlet with French fries",
    // Appetizers
    trisAssaggio: "TRIO SAMPLER",
    trisAssaggioDesc: "Fried meatballs, meatballs in sauce, and small beef rolls",
    polpetteFritte: "FRIED MEATBALLS",
    polpetteFritteDesc: "We recommend fried meatballs while waiting",
    polpetteAlSugo: "MEATBALLS IN SAUCE",
    polpetteAlSugoDesc: "We recommend meatballs in sauce while waiting",
    braciolinePiccanti: "SPICY BEEF ROLLS IN TOMATO SAUCE",
    braciolinePiccantiDesc: "",
    carpaccio: "CARPACCIO",
    carpaccioDesc: "Raw meat seasoned with celery, parsley, lemon, arugula, olive oil, pepper, and parmesan",
    bresaola: "BRESAOLA",
    bresaolaDesc: "Seasoned with arugula, parmesan, cherry tomatoes, lemon, olive oil, salt, and pepper",
    // Grilled Meat
    spiedoMisto: "MIXED SKEWER",
    spiedoMistoDesc: "Sausage, bombette, mixed meat pieces, turcinieddi",
    spiedoDiSalsicciaMista: "MIXED SAUSAGE SKEWER",
    spiedoDiSalsicciaMistaDesc: "Beef, pork. Ingredients: beef and pork meat, salt, pepper, garlic, natural aromas, white wine, and E300 flavorings",
    spiedoDiBombette: "BOMBETTE SKEWER",
    spiedoDiBombetteDesc: "Ham, ground meat, beef, pork, mozzarella, parmesan, natural aromas, breadcrumbs",
    spiedoDiSalsicciaAPuntaDiColtello: "KNIFE-CUT SAUSAGE SKEWER",
    spiedoDiSalsicciaAPuntaDiColtelloDesc: "Ingredients: beef and pork meat, salt, pepper, garlic, natural aromas, white wine, and E300 flavorings",
    spiedoDiBombetteDiCinghiale: "WILD BOAR BOMBETTE SKEWER",
    spiedoDiBombetteDiCinghialeDesc: "Ingredients: beef and pork meat, small pieces rolled with bacon, salt, pepper, garlic, natural aromas, white wine, and E300 flavorings",
    spiedoDiSalsicciaPiccante: "SPICY SAUSAGE SKEWER",
    spiedoDiSalsicciaPiccanteDesc: "Ingredients: beef and pork meat, salt, pepper, garlic, chili pepper, natural aromas, white wine, and E300 flavorings",
    spiedoDiTurcinieddi: "TURCINIEDDI SKEWER",
    spiedoDiTurcinieddiDesc: "Ingredients: lamb liver, heart and lung, caul fat, intestine, salt, pepper, garlic, natural aromas, white wine, E300 flavorings, and parsley",
    spiedoDiPolpaDiCastrato: "MUTTON MEAT SKEWER",
    spiedoDiPolpaDiCastratoDesc: "Ingredients: pieces of mutton, salt, pepper, garlic, natural aromas, white wine, and E300 flavorings",
    fiorentinaGrill: "T-BONE STEAK",
    fiorentinaGrillDesc: "From 1 kg to 2 kg (price per 100g)",
    costataDiVitello: "VEAL RIBEYE",
    costataDiVitelloDesc: "Minimum 600/800 g (price per 100g)",
    tagliataDiManzo: "SLICED BEEF WITH ARUGULA AND PARMESAN",
    tagliataDiManzoDesc: "600/800 g (price per 100g)",
    tagliataDiLattoneGrill: "SLICED MILK-FED VEAL WITH ARUGULA AND PARMESAN",
    tagliataDiLattoneGrillDesc: "600/800 g (price per 100g)",
    disossataDiScottoneGrill: "BONELESS SCOTTONA BEEF",
    disossataDiScottoneGrillDesc: "Minimum 600/800 g (price per 100g)",
    capicolloDiCinghiale: "BONELESS WILD BOAR CAPOCOLLO",
    capicolloDiCinghialeDesc: "Minimum 600/800 g (price per 100g)",
    agnello: "LAMB",
    agnelloDesc: "",
    castrato: "MUTTON",
    castratoDesc: "Minimum 600/800 g (price per 100g)",
    filetto: "FILLET",
    filettoDesc: "Price per 100g",
    // Side Dishes
    insalataVerde: "GREEN SALAD",
    insalataVerdeDesc: "",
    patateFritteChips: "CRISPY FRENCH FRIES-CHIPS",
    patateFritteChipsDesc: "FRESH *",
    patateFritteStick: "FRENCH FRIES-STICKS",
    patateFritteStickDesc: "FRESH *",
    patateAlForno: "BAKED POTATOES",
    patateAlFornoDesc: "",
    polpetteFritteSide: "FRIED MEATBALLS",
    polpetteFritteSideDesc: "",
    polpetteAlSugoSide: "MEATBALLS IN SAUCE",
    polpetteAlSugoSideDesc: "",
    verdureGrigliate: "GRILLED VEGETABLES",
    verdureGrigliateDesc: "bell peppers, eggplants, zucchini",
    freshProduct: "* frozen product used when fresh is unavailable",
    // Drinks
    vinoLocalCaraffa: "Local wine in carafe (500 ml)",
    vinoLitro: "Wine (1 liter)",
    birraDreherSmall: "Dreher Beer (33 cl)",
    birraDreherLarge: "Dreher Beer (66 cl)",
    birraHeinekenSmall: "Heineken Beer (33 cl)",
    birraHeinekenLarge: "Heineken Beer (66 cl)",
    aranciataSmall: "Orange Soda (33 cl)",
    aranciataLarge: "Orange Soda (1 liter)",
    cocaColaSmall: "Coca Cola (33 cl)",
    cocaColaLarge: "Coca Cola (1 liter)",
    acquaLarge: "Still/Sparkling Water (1.0 liter)",
    // Desserts
    sorbettoAlLimone: "LEMON SORBET",
    tartufoBianco: "WHITE TRUFFLE ICE CREAM",
    tartufoNero: "DARK TRUFFLE ICE CREAM",
    cremaCatalana: "CATALAN CREAM",
    pannaCotta: "PANNA COTTA",
    tiramisu: "TIRAMISU",
    tortaFillyAllaCrema: "FILLY CREAM CAKE",
    tortaFillyAlCioccolato: "FILLY CHOCOLATE CAKE",
    cremaDiLimoncello: "LIMONCELLO CREAM",
    cremaDiCaffe: "COFFEE CREAM",
    amaro: "BITTER LIQUEUR",
    grappa: "GRAPPA"
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
    coverCharge: "GEDECK UND BROT",
    // Specialties
    monteBianco: "MONTE BIANCO",
    monteBiancoDesc: "Milchkalb mit Rucola und Parmesan - min. 1 kg",
    nuvoleDiFiletto: "FILET-WOLKEN VOM MILCHKALB",
    nuvoleDiFilettoDesc: "Gewürzt mit rosa Salz, Pfeffer und nativem Olivenöl extra",
    disossataDiScottona: "AUSGELÖSTES SCOTTONA-RINDFLEISCH",
    disossataDiScottonaDesc: "Mindestens 600/800 g (Preis pro 100g)",
    fiorentina: "FLORENTINER STEAK",
    fiorentinaDesc: "Mindestens 1 kg / 2 kg (Preis pro 100g)",
    tagliataDiLattone: "GESCHNITTENES MILCHKALB MIT RUCOLA UND PARMESAN",
    tagliataDiLattoneDesc: "Mindestens 600/800 g (Preis pro 100g)",
    mrBean: "Mr.BEAN",
    mrBeanDesc: "Milchkalbschnitzel mit Pommes frites",
    // Appetizers
    trisAssaggio: "TRIO-VERKOSTUNG",
    trisAssaggioDesc: "Gebratene Fleischbällchen, Fleischbällchen in Sauce und Fleischrollen",
    polpetteFritte: "GEBRATENE FLEISCHBÄLLCHEN",
    polpetteFritteDesc: "Wir empfehlen gebratene Fleischbällchen während der Wartezeit",
    polpetteAlSugo: "FLEISCHBÄLLCHEN IN SAUCE",
    polpetteAlSugoDesc: "Wir empfehlen Fleischbällchen in Sauce während der Wartezeit",
    braciolinePiccanti: "SCHARFE FLEISCHROLLEN IN TOMATENSAUCE",
    braciolinePiccantiDesc: "",
    carpaccio: "CARPACCIO",
    carpaccioDesc: "Rohes Fleisch mit Sellerie, Petersilie, Zitrone, Rucola, Olivenöl, Pfeffer und Parmesan",
    bresaola: "BRESAOLA",
    bresaolaDesc: "Mit Rucola, Parmesan, Kirschtomaten, Zitrone, Olivenöl, Salz und Pfeffer",
    // Grilled Meat
    spiedoMisto: "GEMISCHTER SPIESS",
    spiedoMistoDesc: "Wurst, Bombette, gemischte Fleischstücke, Turcinieddi",
    spiedoDiSalsicciaMista: "SPIESS MIT GEMISCHTER WURST",
    spiedoDiSalsicciaMistaDesc: "Rind, Schwein. Zutaten: Rind- und Schweinefleisch, Salz, Pfeffer, Knoblauch, natürliche Aromen, Weißwein und E300-Geschmacksverstärker",
    spiedoDiBombette: "BOMBETTE-SPIESS",
    spiedoDiBombetteDesc: "Schinken, Hackfleisch, Rind, Schwein, Mozzarella, Parmesan, natürliche Aromen, Paniermehl",
    spiedoDiSalsicciaAPuntaDiColtello: "SPIESS MIT HANDGESCHNITTENER WURST",
    spiedoDiSalsicciaAPuntaDiColtelloDesc: "Zutaten: Rind- und Schweinefleisch, Salz, Pfeffer, Knoblauch, natürliche Aromen, Weißwein und E300-Geschmacksverstärker",
    spiedoDiBombetteDiCinghiale: "WILDSCHWEIN-BOMBETTE-SPIESS",
    spiedoDiBombetteDiCinghialeDesc: "Zutaten: Rind- und Schweinefleisch, kleine mit Speck umwickelte Stücke, Salz, Pfeffer, Knoblauch, natürliche Aromen, Weißwein und E300-Geschmacksverstärker",
    spiedoDiSalsicciaPiccante: "SPIESS MIT SCHARFER WURST",
    spiedoDiSalsicciaPiccanteDesc: "Zutaten: Rind- und Schweinefleisch, Salz, Pfeffer, Knoblauch, Chilischote, natürliche Aromen, Weißwein und E300-Geschmacksverstärker",
    spiedoDiTurcinieddi: "TURCINIEDDI-SPIESS",
    spiedoDiTurcinieddiDesc: "Zutaten: Lammleber, -herz und -lunge, Netzhaut, Darm, Salz, Pfeffer, Knoblauch, natürliche Aromen, Weißwein, E300-Geschmacksverstärker und Petersilie",
    spiedoDiPolpaDiCastrato: "HAMMELFLEISCH-SPIESS",
    spiedoDiPolpaDiCastratoDesc: "Zutaten: Hammelstücke, Salz, Pfeffer, Knoblauch, natürliche Aromen, Weißwein und E300-Geschmacksverstärker",
    fiorentinaGrill: "FLORENTINER STEAK",
    fiorentinaGrillDesc: "Von 1 kg bis 2 kg (Preis pro 100g)",
    costataDiVitello: "KALBSRIPPENSTÜCK",
    costataDiVitelloDesc: "Mindestens 600/800 g (Preis pro 100g)",
    tagliataDiManzo: "GESCHNITTENES RINDFLEISCH MIT RUCOLA UND PARMESAN",
    tagliataDiManzoDesc: "600/800 g (Preis pro 100g)",
    tagliataDiLattoneGrill: "GESCHNITTENES MILCHKALB MIT RUCOLA UND PARMESAN",
    tagliataDiLattoneGrillDesc: "600/800 g (Preis pro 100g)",
    disossataDiScottoneGrill: "AUSGELÖSTES SCOTTONA-RINDFLEISCH",
    disossataDiScottoneGrillDesc: "Mindestens 600/800 g (Preis pro 100g)",
    capicolloDiCinghiale: "AUSGELÖSTER WILDSCHWEIN-NACKEN",
    capicolloDiCinghialeDesc: "Mindestens 600/800 g (Preis pro 100g)",
    agnello: "LAMM",
    agnelloDesc: "",
    castrato: "HAMMEL",
    castratoDesc: "Mindestens 600/800 g (Preis pro 100g)",
    filetto: "FILET",
    filettoDesc: "Preis pro 100g",
    // Side Dishes
    insalataVerde: "GRÜNER SALAT",
    insalataVerdeDesc: "",
    patateFritteChips: "KNUSPRIGE POMMES FRITES-CHIPS",
    patateFritteChipsDesc: "FRISCH *",
    patateFritteStick: "POMMES FRITES-STÄBCHEN",
    patateFritteStickDesc: "FRISCH *",
    patateAlForno: "OFENKARTOFFELN",
    patateAlFornoDesc: "",
    polpetteFritteSide: "GEBRATENE FLEISCHBÄLLCHEN",
    polpetteFritteSideDesc: "",
    polpetteAlSugoSide: "FLEISCHBÄLLCHEN IN SAUCE",
    polpetteAlSugoSideDesc: "",
    verdureGrigliate: "GEGRILLTES GEMÜSE",
    verdureGrigliateDesc: "Paprika, Auberginen, Zucchini",
    freshProduct: "* bei Nichtvorhandensein von frischen Produkten tiefgekühlt",
    // Drinks
    vinoLocalCaraffa: "Lokaler Wein in Karaffe (500 ml)",
    vinoLitro: "Wein (1 Liter)",
    birraDreherSmall: "Dreher Bier (33 cl)",
    birraDreherLarge: "Dreher Bier (66 cl)",
    birraHeinekenSmall: "Heineken Bier (33 cl)",
    birraHeinekenLarge: "Heineken Bier (66 cl)",
    aranciataSmall: "Orangenlimonade (33 cl)",
    aranciataLarge: "Orangenlimonade (1 Liter)",
    cocaColaSmall: "Coca Cola (33 cl)",
    cocaColaLarge: "Coca Cola (1 Liter)",
    acquaLarge: "Stilles/Sprudel-Wasser (1,0 Liter)",
    // Desserts
    sorbettoAlLimone: "ZITRONENSORBET",
    tartufoBianco: "WEISSER TRÜFFEL-EISBECHER",
    tartufoNero: "DUNKLER TRÜFFEL-EISBECHER",
    cremaCatalana: "KATALANISCHE CREME",
    pannaCotta: "PANNA COTTA",
    tiramisu: "TIRAMISU",
    tortaFillyAllaCrema: "FILLY CREMEKUCHEN",
    tortaFillyAlCioccolato: "FILLY SCHOKOLADENKUCHEN",
    cremaDiLimoncello: "LIMONCELLO-CREME",
    cremaDiCaffe: "KAFFEECREME",
    amaro: "KRÄUTERLIKÖR",
    grappa: "GRAPPA"
  },
  fr: {
    restaurantDescription: "Au cœur de Torre Santa Sabina, notre restaurant vous offre une expérience gastronomique authentique, où la tradition des Pouilles rencontre la passion de la viande grillée.",
    specialties: "Spécialités de la Maison",
    appetizers: "Entrées",
    grillMeat: "Viande Grillée",
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
    coverCharge: "COUVERT ET PAIN",
    // Specialties
    monteBianco: "MONTE BIANCO",
    monteBiancoDesc: "Veau de lait avec roquette et parmesan - min. 1 kg",
    nuvoleDiFiletto: "NUAGES DE FILET DE VEAU DE LAIT",
    nuvoleDiFilettoDesc: "Assaisonné de sel rose, poivre et huile d'olive extra vierge",
    disossataDiScottona: "BŒUF SCOTTONA DÉSOSSÉ",
    disossataDiScottonaDesc: "Minimum 600/800 g (prix pour 100g)",
    fiorentina: "STEAK À LA FLORENTINE",
    fiorentinaDesc: "Minimum 1 kg / 2 kg (prix pour 100g)",
    tagliataDiLattone: "TRANCHES DE VEAU DE LAIT AVEC ROQUETTE ET PARMESAN",
    tagliataDiLattoneDesc: "Minimum 600/800 g (prix pour 100g)",
    mrBean: "Mr.BEAN",
    mrBeanDesc: "Escalope de veau de lait avec frites",
    // Appetizers
    trisAssaggio: "TRIO DE DÉGUSTATION",
    trisAssaggioDesc: "Boulettes de viande frites, boulettes en sauce et petits rouleaux de bœuf",
    polpetteFritte: "BOULETTES DE VIANDE FRITES",
    polpetteFritteDesc: "Nous recommandons des boulettes frites pendant l'attente",
    polpetteAlSugo: "BOULETTES DE VIANDE EN SAUCE",
    polpetteAlSugoDesc: "Nous recommandons des boulettes en sauce pendant l'attente",
    braciolinePiccanti: "ROULEAUX DE BŒUF ÉPICÉS À LA SAUCE TOMATE",
    braciolinePiccantiDesc: "",
    carpaccio: "CARPACCIO",
    carpaccioDesc: "Viande crue assaisonnée de céleri, persil, citron, roquette, huile d'olive, poivre et parmesan",
    bresaola: "BRESAOLA",
    bresaolaDesc: "Assaisonnée de roquette, parmesan, tomates cerises, citron, huile d'olive, sel et poivre",
    // Grilled Meat
    spiedoMisto: "BROCHETTE MIXTE",
    spiedoMistoDesc: "Saucisse, bombettes, morceaux de viande mixtes, turcinieddi",
    spiedoDiSalsicciaMista: "BROCHETTE DE SAUCISSES MIXTES",
    spiedoDiSalsicciaMistaDesc: "Bœuf, porc. Ingrédients: viande de bœuf et de porc, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiBombette: "BROCHETTE DE BOMBETTES",
    spiedoDiBombetteDesc: "Jambon, viande hachée, bœuf, porc, mozzarella, parmesan, arômes naturels, chapelure",
    spiedoDiSalsicciaAPuntaDiColtello: "BROCHETTE DE SAUCISSE COUPÉE AU COUTEAU",
    spiedoDiSalsicciaAPuntaDiColtelloDesc: "Ingrédients: viande de bœuf et de porc, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiBombetteDiCinghiale: "BROCHETTE DE BOMBETTES DE SANGLIER",
    spiedoDiBombetteDiCinghialeDesc: "Ingrédients: viande de bœuf et de porc, petits morceaux roulés avec du bacon, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiSalsicciaPiccante: "BROCHETTE DE SAUCISSE ÉPICÉE",
    spiedoDiSalsicciaPiccanteDesc: "Ingrédients: viande de bœuf et de porc, sel, poivre, ail, piment, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiTurcinieddi: "BROCHETTE DE TURCINIEDDI",
    spiedoDiTurcinieddiDesc: "Ingrédients: foie, cœur et poumon d'agneau, crépine, boyau, sel, poivre, ail, arômes naturels, vin blanc, exhausteurs de goût E300 et persil",
    spiedoDiPolpaDiCastrato: "BROCHETTE DE VIANDE DE MOUTON",
    spiedoDiPolpaDiCastratoDesc: "Ingrédients: morceaux de mouton, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    fiorentinaGrill: "STEAK À LA FLORENTINE",
    fiorentinaGrillDesc: "De 1 kg à 2 kg (prix pour 100g)",
    costataDiVitello: "CÔTE DE VEAU",
    costataDiVitelloDesc: "Minimum 600/800 g (prix pour 100g)",
    tagliataDiManzo: "TRANCHES DE BŒUF AVEC ROQUETTE ET PARMESAN",
    tagliataDiManzoDesc: "600/800 g (prix pour 100g)",
    tagliataDiLattoneGrill: "TRANCHES DE VEAU DE LAIT AVEC ROQUETTE ET PARMESAN",
    tagliataDiLattoneGrillDesc: "600/800 g (prix pour 100g)",
    disossataDiScottoneGrill: "BŒUF SCOTTONA DÉSOSSÉ",
    disossataDiScottoneGrillDesc: "Minimum 600/800 g (prix pour 100g)",
    capicolloDiCinghiale: "COPPA DE SANGLIER DÉSOSSÉE",
    capicolloDiCinghialeDesc: "Minimum 600/800 g (prix pour 100g)",
    agnello: "AGNEAU",
    agnelloDesc: "",
    castrato: "MOUTON",
    castratoDesc: "Minimum 600/800 g (prix pour 100g)",
    filetto: "FILET",
    filettoDesc: "Prix pour 100g",
    // Side Dishes
    insalataVerde: "SALADE VERTE",
    insalataVerdeDesc: "",
    patateFritteChips: "CHIPS DE POMMES DE TERRE CROUSTILLANTES",
    patateFritteChipsDesc: "FRAÎCHES *",
    patateFritteStick: "FRITES BÂTONNETS",
    patateFritteStickDesc: "FRAÎCHES *",
    patateAlForno: "POMMES DE TERRE AU FOUR",
    patateAlFornoDesc: "",
    polpetteFritteSide: "BOULETTES DE VIANDE FRITES",
    polpetteFritteSideDesc: "",
    polpetteAlSugoSide: "BOULETTES DE VIANDE EN SAUCE",
    polpetteAlSugoSideDesc: "",
    verdureGrigliate: "LÉGUMES GRILLÉS",
    verdureGrigliateDesc: "poivrons, aubergines, courgettes",
    freshProduct: "* produit surgelé utilisé lorsque le frais n'est pas disponible",
    // Drinks
    vinoLocalCaraffa: "Vin local en carafe (500 ml)",
    vinoLitro: "Vin (1 litre)",
    birraDreherSmall: "Bière Dreher (33 cl)",
    birraDreherLarge: "Bière Dreher (66 cl)",
    birraHeinekenSmall: "Bière Heineken (33 cl)",
    birraHeinekenLarge: "Bière Heineken (66 cl)",
    aranciataSmall: "Orangeade (33 cl)",
    aranciataLarge: "Orangeade (1 litre)",
    cocaColaSmall: "Coca Cola (33 cl)",
    cocaColaLarge: "Coca Cola (1 litre)",
    acquaLarge: "Eau Plate/Gazeuse (1,0 litre)",
    // Desserts
    sorbettoAlLimone: "SORBET AU CITRON",
    tartufoBianco: "TRUFFE GLACÉE BLANCHE",
    tartufoNero: "TRUFFE GLACÉE NOIRE",
    cremaCatalana: "CRÈME CATALANE",
    pannaCotta: "PANNA COTTA",
    tiramisu: "TIRAMISU",
    tortaFillyAllaCrema: "GÂTEAU FILLY À LA CRÈME",
    tortaFillyAlCioccolato: "GÂTEAU FILLY AU CHOCOLAT",
    cremaDiLimoncello: "CRÈME DE LIMONCELLO",
    cremaDiCaffe: "CRÈME DE CAFÉ",
    amaro: "AMARO",
    grappa: "GRAPPA"
  }
};

// Add the useTranslation hook
export const useTranslation = (language: string) => {
  return (key: TranslationKey): string => {
    // If the language doesn't exist, default to English
    if (!translations[language]) {
      return translations.en[key] || key;
    }
    
    // If the key doesn't exist for the language, try English, then fall back to the key itself
    return translations[language][key] || translations.en[key] || key;
  };
};
