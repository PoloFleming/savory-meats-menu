
import { MenuCategory } from "@/components/MenuCategory";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuItem } from "@/components/MenuItem";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { Beef, Coffee, Dessert, Fish, Pizza, Salad, Sandwich, Utensils, Wine } from "lucide-react";

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
          <MenuCategory title="Antipasti">
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
              title="CARPACCIO"
              price="23.00"
              description="Carne cruda condita con sedano, prezzemolo, limone, rucola, olio di oliva, pepe e grana"
            />
            <MenuItem
              title="BRESAOLA"
              price="23.00"
              description="Condita con rucola, grana, pomodorini, limone, olio di oliva, sale e pepe"
            />
            <MenuItem
              title="Tris assaggio polpette fritte al sugo e bracioline"
              price="18.00"
            />
            <MenuItem
              title="Polpette fritte"
              price="8.00"
              description="Consigliamo polpette fritte durante l'attesa"
            />
            <MenuItem
              title="Polpette al sugo"
              price="9.00"
              description="Consigliamo polpette al sugo durante l'attesa"
            />
            <MenuItem
              title="BRACIOLINE PICCANTI AL POMODORO"
              price="15.00"
            />
          </MenuCategory>

          <MenuCategory title="Le Nostre Carni" className="bg-muted py-8 px-4 rounded-lg">
            <div className="flex justify-center mb-6">
              <Beef size={32} className="text-terracotta" />
            </div>

            <MenuItem
              title="FIORENTINA"
              price="4.30"
              description="da kg 1 a kg 2 (prezzo all'etto)"
            />
            <MenuItem
              title="COSTATA DI VITELLO"
              price="4.30"
              description="minimo 600 / 800 g (prezzo all'etto)"
            />
            <MenuItem
              title="TAGLIATA DI MANZO RUCOLA E GRANA"
              price="4.30"
              description="600 / 800 g (prezzo all'etto)"
            />
            <MenuItem
              title="TAGLIATA DI LATTONE RUCOLA E GRANA"
              price="4.30"
              description="minimo 600 / 800 g (prezzo all'etto)"
            />
            <MenuItem
              title="DISOSSATA DI SCOTTONA"
              price="4.30"
              description="minimo 6 etti/ 8 etti (prezzo all'etto)"
            />
            <MenuItem
              title="CAPICOLLO DI CINGHIALE SENZA OSSO"
              price="4.30"
              description="minimo 600/800g (prezzo all'etto)"
            />
            <MenuItem
              title="AGNELLO"
              price="28.00"
            />
            <MenuItem
              title="CASTRATO"
              price="4.30"
              description="minimo 600 / 800 g (prezzo all'etto)"
            />
            <MenuItem
              title="FILETTO"
              price="30.00"
            />
            <MenuItem
              title="Mr.BEAN"
              price="18.00"
              description="Cotoletta di lattone con cascata di patate fritte"
            />
          </MenuCategory>

          <MenuCategory title="Specialità allo Spiedo">
            <MenuItem
              title="SPIEDO MISTO"
              price="17.00"
              description="Salsiccia, bombette, pezzetti misti, turcinieddi"
            />
            <MenuItem
              title="SPIEDO DI SALSICCIA MISTA"
              price="17.00"
              description="Bovino, suino, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI BOMBETTE"
              price="17.00"
              description="Prosciutto, carne macinata, bovino, suino, mozzarella, grana, aromi naturali, pane grattugiato"
            />
            <MenuItem
              title="SPIEDO DI SALSICCIA A PUNTA DI COLTELLO"
              price="17.00"
              description="Carne bovina e suina, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI BOMBETTE DI CINGHIALE"
              price="17.00"
              description="Carne bovina e suina, pezzettini arrotolati con pancetta, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI SALSICCIA PICCANTE"
              price="17.00"
              description="Carne bovina e suina, sale, pepe, aglio, peperoncino, aromi naturali, vino bianco e insaporitori E300"
            />
            <MenuItem
              title="SPIEDO DI TURCINIEDDI"
              price="17.00"
              description="Fegato, cuore e polmone di agnello, rete, budello, sale, pepe, aglio, aromi naturali, vino bianco, insaporitori E300 e prezzemolo"
            />
            <MenuItem
              title="SPIEDO DI POLPA DI CASTRATO"
              price="17.00"
              description="Pezzetti di castrato, sale, pepe, aglio, aromi naturali, vino bianco e insaporitori E300"
            />
          </MenuCategory>

          <MenuCategory title="Contorni">
            <MenuItem
              title="POLLO E PATATE"
              price="14.00"
              description="Solo nel periodo estivo"
            />
            <MenuItem
              title="Verdure Grigliate"
              price="6.00"
              description="Melanzane, zucchine, peperoni e radicchio alla griglia"
            />
            <MenuItem
              title="Patate al Forno"
              price="5.00"
              description="Patate al forno con rosmarino e aglio"
            />
            <MenuItem
              title="Insalata Mista"
              price="5.00"
              description="Insalata di stagione con pomodorini e olive"
            />
          </MenuCategory>

          <MenuCategory title="Bevande">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-serif text-xl text-olive mb-2 flex items-center">
                  <Wine size={20} className="mr-2" /> Vini Rossi
                </h3>
                <MenuItem
                  title="Primitivo di Manduria"
                  price="24.00"
                />
                <MenuItem
                  title="Negroamaro"
                  price="22.00"
                />
                <MenuItem
                  title="Nero di Troia"
                  price="26.00"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl text-olive mb-2 flex items-center">
                  <Wine size={20} className="mr-2" /> Vini Bianchi
                </h3>
                <MenuItem
                  title="Fiano di Puglia"
                  price="20.00"
                />
                <MenuItem
                  title="Chardonnay Salento"
                  price="22.00"
                />
                <MenuItem
                  title="Verdeca"
                  price="21.00"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-serif text-xl text-olive mb-2 flex items-center">
                <Coffee size={20} className="mr-2" /> Caffè e Digestivi
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MenuItem
                  title="Espresso"
                  price="1.50"
                />
                <MenuItem
                  title="Amaro del Capo"
                  price="4.00"
                />
                <MenuItem
                  title="Limoncello"
                  price="3.50"
                />
              </div>
            </div>
          </MenuCategory>
        </div>

        <div className="mt-12 py-8 border-t border-muted">
          <div className="text-center">
            <h2 className="font-serif text-2xl text-terracotta mb-2">Orari di Apertura</h2>
            <p className="text-muted-foreground">
              Da Martedì a Domenica<br />
              12:30 - 14:30 | 19:30 - 22:30<br />
              Lunedì: Chiuso
            </p>
          </div>

          <div className="text-center mt-6">
            <h2 className="font-serif text-2xl text-terracotta mb-2">Dove Siamo</h2>
            <p className="text-muted-foreground">
              Via del Mare, 42<br />
              Torre Santa Sabina, Carovigno (BR)<br />
              Tel: +39 123 456 7890
            </p>
          </div>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} La Braceria di Santa Sabina | Tutti i diritti riservati</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
