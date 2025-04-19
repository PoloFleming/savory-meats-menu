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
  | "acquaSmall"
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
    acquaSmall: "Acqua (0,5 lt)",
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
    acquaSmall: "Water (0.5 liter)",
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
    acquaSmall: "Wasser (0,5 Liter)",
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
    coverCharge: "COUVERT ET PAIN",
    // Specialties
    monteBianco: "MONTE BIANCO",
    monteBiancoDesc: "Veau de lait avec roquette et parmesan - min. 1 kg",
    nuvoleDiFiletto: "NUAGES DE FILET DE VEAU DE LAIT",
    nuvoleDiFilettoDesc: "Assaisonnés avec du sel rose, du poivre et de l'huile d'olive extra vierge",
    disossataDiScottona: "SCOTTONA DÉSOSSÉE",
    disossataDiScottonaDesc: "Minimum 600/800 g (prix pour 100g)",
    fiorentina: "CÔTE DE BŒUF FLORENTINE",
    fiorentinaDesc: "Minimum 1 kg / 2 kg (prix pour 100g)",
    tagliataDiLattone: "TAGLIATA DE VEAU DE LAIT AVEC ROQUETTE ET PARMESAN",
    tagliataDiLattoneDesc: "Minimum 600/800 g (prix pour 100g)",
    mrBean: "Mr.BEAN",
    mrBeanDesc: "Escalope de veau de lait avec frites",
    // Appetizers
    trisAssaggio: "TRIO DE DÉGUSTATION",
    trisAssaggioDesc: "Boulettes de viande frites, boulettes à la sauce tomate et petits rouleaux de viande",
    polpetteFritte: "BOULETTES DE VIANDE FRITES",
    polpetteFritteDesc: "Nous recommandons les boulettes frites pendant l'attente",
    polpetteAlSugo: "BOULETTES DE VIANDE À LA SAUCE",
    polpetteAlSugoDesc: "Nous recommandons les boulettes à la sauce pendant l'attente",
    braciolinePiccanti: "ROULEAUX DE VIANDE ÉPICÉS À LA TOMATE",
    braciolinePiccantiDesc: "",
    carpaccio: "CARPACCIO",
    carpaccioDesc: "Viande crue assaisonnée de céleri, persil, citron, roquette, huile d'olive, poivre et parmesan",
    bresaola: "BRESAOLA",
    bresaolaDesc: "Assaisonnée avec de la roquette, du parmesan, des tomates cerises, du citron, de l'huile d'olive, du sel et du poivre",
    // Grilled Meat
    spiedoMisto: "BROCHETTE MIXTE",
    spiedoMistoDesc: "Saucisse, bombettes, morceaux mixtes, turcinieddi",
    spiedoDiSalsicciaMista: "BROCHETTE DE SAUCISSES MIXTES",
    spiedoDiSalsicciaMistaDesc: "Bœuf, porc. Ingrédients: viande de bœuf et de porc, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiBombette: "BROCHETTE DE BOMBETTES",
    spiedoDiBombetteDesc: "Jambon, viande hachée, bœuf, porc, mozzarella, parmesan, arômes naturels, chapelure",
    spiedoDiSalsicciaAPuntaDiColtello: "BROCHETTE DE SAUCISSES COUPÉES AU COUTEAU",
    spiedoDiSalsicciaAPuntaDiColtelloDesc: "Ingrédients: viande de bœuf et de porc, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiBombetteDiCinghiale: "BROCHETTE DE BOMBETTES DE SANGLIER",
    spiedoDiBombetteDiCinghialeDesc: "Ingrédients: viande de bœuf et de porc, petits morceaux enroulés avec du bacon, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiSalsicciaPiccante: "BROCHETTE DE SAUCISSES ÉPICÉES",
    spiedoDiSalsicciaPiccanteDesc: "Ingrédients: viande de bœuf et de porc, sel, poivre, ail, piment, arômes naturels, vin blanc et exhausteurs de goût E300",
    spiedoDiTurcinieddi: "BROCHETTE DE TURCINIEDDI",
    spiedoDiTurcinieddiDesc: "Ingrédients: foie, cœur et poumon d'agneau, crépine, boyau, sel, poivre, ail, arômes naturels, vin blanc, exhausteurs de goût E300 et persil",
    spiedoDiPolpaDiCastrato: "BROCHETTE DE CHAIR DE MOUTON",
    spiedoDiPolpaDiCastratoDesc: "Ingrédients: morceaux de mouton, sel, poivre, ail, arômes naturels, vin blanc et exhausteurs de goût E300",
    fiorentinaGrill: "CÔTE DE BŒUF FLORENTINE",
    fiorentinaGrillDesc: "De 1 kg à 2 kg (prix pour 100g)",
    costataDiVitello: "CÔTE DE VEAU",
    costataDiVitelloDesc: "Minimum 600/800 g (prix pour 100g)",
    tagliataDiManzo: "TAGLIATA DE BŒUF AVEC ROQUETTE ET PARMESAN",
    tagliataDiManzoDesc: "600/800 g (prix pour 100g)",
    tagliataDiLattoneGrill: "TAGLIATA DE VEAU DE LAIT AVEC ROQUETTE ET PARMESAN",
    tagliataDiLattoneGrillDesc: "600/800 g (prix pour 100g)",
    disossataDiScottoneGrill: "SCOTTONA DÉSOSSÉE",
    disossataDiScottoneGrillDesc: "Minimum 600/800 g (prix pour 100g)",
    capicolloDiCinghiale: "ÉCHINE DE SANGLIER DÉSOSSÉE",
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
    patateFritteStick: "FRITES-BÂTONNETS",
    patateFritteStickDesc: "FRAÎCHES *",
    patateAlForno: "POMMES DE TERRE AU FOUR",
    patateAlFornoDesc: "",
    polpetteFritteSide: "BOULETTES DE VIANDE FRITES",
    polpetteFritteSideDesc: "",
    polpetteAlSugoSide: "BOULETTES DE VIANDE À LA SAUCE",
    polpetteAlSugoSideDesc: "",
    verdureGrigliate: "LÉGUMES GRILLÉS",
    verdureGrigliateDesc: "poivrons, aubergines, courgettes",
    freshProduct: "* produit surgelé en l'absence de produit frais",
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
    acquaSmall: "Eau (0,5 litre)",
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
    coverCharge: "CUBIERTO Y PAN",
    // Specialties
    monteBianco: "MONTE BIANCO",
    monteBiancoDesc: "Ternera lechal con rúcula y parmesano - mín. 1 kg",
    nuvoleDiFiletto: "NUBES DE SOLOMILLO DE TERNERA LECHAL",
    nuvoleDiFilettoDesc: "Condimentado con sal rosa, pimienta y aceite de oliva virgen extra",
    disossataDiScottona: "TERNERA SCOTTONA DESHUESADA",
    disossataDiScottonaDesc: "Mínimo 600/800 g (precio por 100g)",
    fiorentina: "BISTEC FLORENTINO",
    fiorentinaDesc: "Mínimo 1 kg / 2 kg (precio por 100g)",
    tagliataDiLattone: "TAGLIATA DE TERNERA LECHAL CON RÚCULA Y PARMESANO",
    tagliataDiLattoneDesc: "Mínimo 600/800 g (precio por 100g)",
    mrBean: "Mr.BEAN",
    mrBeanDesc: "Escalope de ternera lechal con patatas fritas",
    // Appetizers
    trisAssaggio: "TRIO DE DEGUSTACIÓN",
    trisAssaggioDesc: "Albóndigas fritas, albóndigas en salsa y rollitos de carne",
    polpetteFritte: "ALBÓNDIGAS FRITAS",
    polpetteFritteDesc: "Recomendamos albóndigas fritas durante la espera",
    polpetteAlSugo: "ALBÓNDIGAS EN SALSA",
    polpetteAlSugoDesc: "Recomendamos albóndigas en salsa durante la espera",
    braciolinePiccanti: "ROLLITOS DE CARNE PICANTES EN SALSA DE TOMATE",
    braciolinePiccantiDesc: "",
    carpaccio: "CARPACCIO",
    carpaccioDesc: "Carne cruda condimentada con apio, perejil, limón, rúcula, aceite de oliva, pimienta y parmesano",
    bresaola: "BRESAOLA",
    bresaolaDesc: "Condimentada con rúcula, parmesano, tomates cherry, limón, aceite de oliva, sal y pimienta",
    // Grilled Meat
    spiedoMisto: "BROCHETA MIXTA",
    spiedoMistoDesc: "Salchicha, bombettes, trozos mixtos, turcinieddi",
    spiedoDiSalsicciaMista: "BROCHETA DE SALCHICHAS MIXTAS",
    spiedoDiSalsicciaMistaDesc: "Vacuno, cerdo. Ingredientes: carne de vacuno y cerdo, sal, pimienta, ajo, aromas naturales, vino blanco y potenciadores de sabor E300",
    spiedoDiBombette: "BROCHETA DE BOMBETTES",
    spiedoDiBombetteDesc: "Jamón, carne picada, vacuno, cerdo, mozzarella, parmesano, aromas naturales, pan rallado",
    spiedoDiSalsicciaAPuntaDiColtello: "BROCHETA DE SALCHICHA CORTADA A CUCHILLO",
    spiedoDiSalsicciaAPuntaDiColtelloDesc: "Ingredientes: carne de vacuno y cerdo, sal, pimienta, ajo, aromas naturales, vino blanco y potenciadores de sabor E300",
    spiedoDiBombetteDiCinghiale: "BROCHETA DE BOMBETTES DE JABALÍ",
    spiedoDiBombetteDiCinghialeDesc: "Ingredientes: carne de vacuno y cerdo, trocitos enrollados con panceta, sal, pimienta, ajo, aromas naturales, vino blanco y potenciadores de sabor E300",
    spiedoDiSalsicciaPiccante: "BROCHETA DE SALCHICHA PICANTE",
    spiedoDiSalsicciaPiccanteDesc: "Ingredientes: carne de vacuno y cerdo, sal, pimienta, ajo, guindilla, aromas naturales, vino blanco y potenciadores de sabor E300",
    spiedoDiTurcinieddi: "BROCHETA DE TURCINIEDDI",
    spiedoDiTurcinieddiDesc: "Ingredientes: hígado, corazón y pulmón de cordero, redaño, tripa, sal, pimienta, ajo, aromas naturales, vino blanco, potenciadores de sabor E300 y perejil",
    spiedoDiPolpaDiCastrato: "BROCHETA DE CARNE DE CARNERO",
    spiedoDiPolpaDiCastratoDesc: "Ingredientes: trozos de carnero, sal, pimienta, ajo, aromas naturales, vino blanco y potenciadores de sabor E300",
    fiorentinaGrill: "BISTEC FLORENTINO",
    fiorentinaGrillDesc: "De 1 kg a 2 kg (precio por 100g)",
    costataDiVitello: "COSTILLA DE TERNERA",
    costataDiVitelloDesc: "Mínimo 600/800 g (precio por 100g)",
    tagliataDiManzo: "TAGLIATA DE TERNERA CON RÚCULA Y PARMESANO",
    tagliataDiManzoDesc: "600/800 g (precio por 100g)",
    tagliataDiLattoneGrill: "TAGLIATA DE TERNERA LECHAL CON RÚCULA Y PARMESANO",
    tagliataDiLattoneGrillDesc: "600/800 g (precio por 100g)",
    disossataDiScottoneGrill: "TERNERA SCOTTONA DESHUESADA",
    disossataDiScottoneGrillDesc: "Mínimo 600/800 g (precio por 100g)",
    capicolloDiCinghiale: "CABEZADA DE JABALÍ DESHUESADA",
    capicolloDiCinghialeDesc: "Mínimo 600/800 g (precio por 100g)",
    agnello: "CORDERO",
    agnelloDesc: "",
    castrato: "CARNERO",
    castratoDesc: "Mínimo 600/800 g (precio por 100g)",
    filetto: "SOLOMILLO",
    filettoDesc: "Precio por 100g",
    // Side Dishes
    insalataVerde: "ENSALADA VERDE",
    insalataVerdeDesc: "",
    patateFritteChips: "PATATAS FRITAS CRUJIENTES",
    patateFritteChipsDesc: "FRESCAS *",
    patateFritteStick: "PATATAS FRITAS TIPO BASTÓN",
    patateFritteStickDesc: "FRESCAS *",
    patateAlForno: "PATATAS AL HORNO",
    patateAlFornoDesc: "",
    polpetteFritteSide: "ALBÓNDIGAS FRITAS",
    polpetteFritteSideDesc: "",
    polpetteAlSugoSide: "ALBÓNDIGAS EN SALSA",
    polpetteAlSugoSideDesc: "",
    verdureGrigliate: "VERDURAS A LA PARRILLA",
    verdureGrigliateDesc: "pimientos, berenjenas, calabacines",
    freshProduct: "* producto congelado en ausencia de producto fresco",
    // Drinks
    vinoLocalCaraffa: "Vino local en jarra (500 ml)",
    vinoLitro: "Vino (1 litro)",
    birraDreherSmall: "Cerveza Dreher (33 cl)",
    birraDreherLarge: "Cerveza Dreher (66 cl)",
    birraHeinekenSmall: "Cerveza Heineken (33 cl)",
    birraHeinekenLarge: "Cerveza Heineken (66 cl)",
    aranciataSmall: "Naranjada (33 cl)",
    aranciataLarge: "Naranjada (1 litro)",
    cocaColaSmall: "Coca Cola (33 cl)",
    cocaColaLarge: "Coca Cola (1 litro)",
    acquaSmall: "Agua (0,5 litro)",
    acquaLarge: "Agua Sin Gas/Con Gas (1,0 litro)",
    // Desserts
    sorbettoAlLimone: "SORBETE DE LIMÓN",
    tartufoBianco: "TRUFA BLANCA HELADA",
    tartufoNero: "TRUFA NEGRA HELADA",
    cremaCatalana: "CREMA CATALANA",
    pannaCotta: "PANNA COTTA",
    tiramisu: "TIRAMISÚ",
    tortaFillyAllaCrema: "TARTA FILLY DE CREMA",
    tortaFillyAlCioccolato: "TARTA FILLY DE CHOCOLATE",
    cremaDiLimoncello: "CREMA DE LIMONCELLO",
    cremaDiCaffe: "CREMA DE CAFÉ",
    amaro: "AMARO",
    grappa: "GRAPPA"
  }
};

export function useTranslation(language: string) {
  return (key: TranslationKey): string => {
    // Fallback to Italian if language or key doesn't exist
    return translations[language]?.[key] || translations.it[key];
  };
}
