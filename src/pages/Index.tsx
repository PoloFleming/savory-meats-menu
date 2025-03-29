import { MenuCategory } from "@/components/MenuCategory";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuItem } from "@/components/MenuItem";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { Beer, Fish, GlassWater, Utensils, Wine, CupSoda, Beef } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container max-w-4xl px-4 mx-auto">
        <RestaurantHeader />
        
        <div className="mt-4 md:mt-8 text-center">
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            Nel cuore di Torre Santa Sabina, il nostro ristorante vi offre un'esperienza 
            gastronomica autentica, dove la tradizione pugliese incontra la passione per la carne alla griglia.
          </p>
        </div>

        <MenuHeader />

        <div className="relative py-6">
          <MenuCategory title="Specialità della Casa">
            <MenuItem
              title="MONTE BIANCO"
              price="4.30"
              description="Lattone con rucola e grana - min. Kg 1,00"
            />
            <MenuItem
              title="NUVOLE DI FILETTO DI LATTONE"
              price="33.00"
              description="Condite con sale rosa, pepe e olio extravergine"
            />
            <MenuItem
              title="DISOSSATA DI SCOTTONA"
              price="4.30"
              description="minimo 6 etti/ 8 etti (prezzo all'etto)"
            />
            <MenuItem
              title="FIORENTINA"
              price="4.30"
              description="minimo 1 Kg / 2 Kg (prezzo all'etto)"
            />
            <MenuItem
              title="TAGLIATA DI LATTONE RUCOLA E GRANA"
              price="4.30"
              description="minimo 600 / 800 g (prezzo all'etto)"
            />
            <MenuItem
              title="Mr.BEAN"
              price="18.00"
              description="Cotoletta di lattone con cascata di patate fritte"
            />
          </MenuCategory>

          <MenuCategory title="Antipasti" className="bg-muted py-8 px-4 rounded-lg">
            <div className="flex justify-center mb-6">
              <Beef size={32} className="text-terracotta" />
            </div>

            <MenuItem
              title="TRIS ASSAGGIO"
              price="15.00"
              description="Polpette fritte al sugo e bracioline"
            />
            <MenuItem
              title="POLPETTE FRITTE"
              price="8.00"
              description="Consigliamo polpette fritte durante l'attesa"
            />
            <MenuItem
              title="POLPETTE AL SUGO"
              price="9.00"
              description="Consigliamo polpette al sugo durante l'attesa"
            />
            <MenuItem
              title="BRACIOLINE PICCANTI AL POMODORO"
              price="12.00"
            />
            <MenuItem
              title="CARPACCIO"
              price="14.00"
              description="Carne cruda condita con sedano, prezzemolo, limone, rucola, olio di oliva, pepe e grana"
            />
            <MenuItem
              title="BRESAOLA"
              price="13.00"
              description="Condita con rucola, grana, pomodorini, limone, olio di oliva, sale e pepe"
            />
          </MenuCategory>

          <MenuCategory title="Carne alla Brace">
            <MenuItem
              title="SPIEDO MISTO"
              price="17.00"
              description="Salsiccia, bombette, pezzetti misti, turcinieddi"
            />
            <MenuItem
              title="SPIEDO DI SALSICCIA MISTA"
              price="17.00"
              description="Bovino, suino. Ingredienti: carne bovina e suina, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI BOMBETTE"
              price="17.00"
              description="Prosciutto, carne macinata, bovino, suino, mozzarella, grana, aromi naturali, pane grattugiato"
            />
            <MenuItem
              title="SPIEDO DI SALSICCIA A PUNTA DI COLTELLO"
              price="17.00"
              description="Ingredienti: carne bovina e suina, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI BOMBETTE DI CINGHIALE"
              price="17.00"
              description="Ingredienti: carne bovina e suina, pezzettini arrotolati con pancetta, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI SALSICCIA PICCANTE"
              price="17.00"
              description="Ingredienti: carne bovina e suina, sale, pepe, aglio, peperoncino, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI TURCINIEDDI"
              price="17.00"
              description="Ingredienti: fegato, cuore e polmone di agnello, rete, budello, sale, pepe, aglio, aromi naturali, vino bianco, insaporitori E300 e prezzemolo"
            />
            <MenuItem
              title="SPIEDO DI POLPA DI CASTRATO"
              price="17.00"
              description="Ingredienti: pezzetti di castrato, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="FIORENTINA"
              price="4.30"
              description="Da kg 1 a kg 2 (prezzo all'etto)"
            />
            <MenuItem
              title="COSTATA DI VITELLO"
              price="4.30"
              description="Minimo 600/800 g (prezzo all'etto)"
            />
            <MenuItem
              title="TAGLIATA DI MANZO RUCOLA E GRANA"
              price="4.30"
              description="600/800 g (prezzo all'etto)"
            />
            <MenuItem
              title="TAGLIATA DI LATTONE RUCOLA E GRANA"
              price="4.30"
              description="600/800 g (prezzo all'etto)"
            />
            <MenuItem
              title="DISOSSATA DI SCOTTONE"
              price="4.30"
              description="Minimo 600/800 g (prezzo all'etto)"
            />
            <MenuItem
              title="CAPICOLLO DI CINGHIALE SENZA OSSO"
              price="4.30"
              description="Minimo 600/800 g (prezzo all'etto)"
            />
            <MenuItem
              title="AGNELLO"
              price="17.00"
            />
            <MenuItem
              title="CASTRATO"
              price="4.30"
              description="Minimo 600/800 g (prezzo all'etto)"
            />
            <MenuItem
              title="FILETTO"
              price="4.30"
              description="Prezzo all'etto"
            />
          </MenuCategory>

          <MenuCategory title="Contorni">
            <MenuItem
              title="INSALATA VERDE"
              price="5.00"
            />
            <MenuItem
              title="PATATE FRITTE-CHIPS CROCCANTI"
              price="5.00"
              description="FRESCHE *"
            />
            <MenuItem
              title="PATATE FRITTE-STICK"
              price="5.00"
              description="FRESCHE *"
            />
            <MenuItem
              title="PATATE AL FORNO"
              price="5.00"
            />
            <MenuItem
              title="POLPETTE FRITTE"
              price="8.00"
            />
            <MenuItem
              title="POLPETTE AL SUGO"
              price="9.00"
            />
            <MenuItem
              title="VERDURE GRIGLIATE"
              price="6.00"
              description="peperoni, melanzane, zucchine"
            />
            <div className="mt-4 text-sm text-muted-foreground italic">
              * in mancanza del fresco prodotto congelato
            </div>
          </MenuCategory>

          <MenuCategory title="Bevande">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <Wine size={20} className="mr-2" /> Vini
                </h3>
                <MenuItem
                  title="Vino locale in caraffa (500 ml)"
                  price="4.00"
                />
                <MenuItem
                  title="Vino (1 lt)"
                  price="8.00"
                />
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <Beer size={20} className="mr-2" /> Birre
                </h3>
                <MenuItem
                  title="Birra Dreher (33 cl)"
                  price="2.00"
                />
                <MenuItem
                  title="Birra Dreher (66 cl)"
                  price="3.00"
                />
                <MenuItem
                  title="Birra Heineken (33 cl)"
                  price="3.00"
                />
                <MenuItem
                  title="Birra Heineken (66 cl)"
                  price="4.00"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <CupSoda size={20} className="mr-2" /> Bevande Analcoliche
                </h3>
                <MenuItem
                  title="Aranciata (33 cl)"
                  price="2.00"
                />
                <MenuItem
                  title="Aranciata (1 lt)"
                  price="4.00"
                />
                <MenuItem
                  title="Coca Cola (33 cl)"
                  price="2.00"
                />
                <MenuItem
                  title="Coca Cola (1 lt)"
                  price="4.00"
                />
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                  <GlassWater size={20} className="mr-2" /> Acqua
                </h3>
                <MenuItem
                  title="Acqua (0,5 lt)"
                  price="1.00"
                />
                <MenuItem
                  title="Acqua Naturale/Frizzante (1,0 lt)"
                  price="2.00"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-serif text-xl text-olive mb-4 flex items-center">
                <Utensils size={20} className="mr-2" /> Dessert
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MenuItem
                  title="SORBETTO AL LIMONE"
                  price="4.00"
                />
                <MenuItem
                  title="TARTUFO BIANCO"
                  price="4.00"
                />
                <MenuItem
                  title="TARTUFO NERO"
                  price="4.00"
                />
                <MenuItem
                  title="COPPA VANIGLIA E CIOCCOLATO"
                  price="4.00"
                />
                <MenuItem
                  title="SPUMONE"
                  price="4.00"
                />
                <MenuItem
                  title="TIRAMISU"
                  price="4.00"
                />
                <MenuItem
                  title="TORTA ALLA CREMA"
                  price="4.00"
                />
                <MenuItem
                  title="TORTA AL CIOCCOLATO"
                  price="4.00"
                />
                <MenuItem
                  title="TORTA AL LIMONE"
                  price="4.00"
                />
                <MenuItem
                  title="CREMA DI LIMONCELLO"
                  price="2.00"
                />
                <MenuItem
                  title="CREMA DI CAFFE"
                  price="2.00"
                />
                <MenuItem
                  title="AMARO"
                  price="2.00"
                />
                <MenuItem
                  title="GRAPPA"
                  price="3.00"
                />
                <MenuItem
                  title="COPERTO E PANE"
                  price="2.00"
                />
              </div>
            </div>
          </MenuCategory>

          <div className="mt-12 py-8 border-t border-muted">
            <div className="text-center">
              <h2 className="font-serif text-2xl text-terracotta mb-2">Orari di Apertura</h2>
              <p className="text-muted-foreground">
                Lunedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica<br />
                12:30 - 14:30 | 19:30 - 22:30<br />
                Martedì: Chiuso
              </p>
            </div>

            <div className="text-center mt-6">
              <h2 className="font-serif text-2xl text-terracotta mb-2">Dove Siamo</h2>
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
