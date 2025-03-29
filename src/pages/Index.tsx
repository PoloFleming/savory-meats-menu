
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
              title="Antipasto Misto della Casa"
              price="14.00"
              description="Selezione di salumi tipici pugliesi, formaggi locali e verdure grigliate"
            />
            <MenuItem
              title="Burrata con Prosciutto di Parma"
              price="12.00"
              description="Cremosa burrata pugliese servita con prosciutto di Parma stagionato 24 mesi"
            />
            <MenuItem
              title="Polpette al Sugo"
              price="10.00"
              description="Polpette di carne fatte in casa con sugo di pomodoro fresco e basilico"
            />
          </MenuCategory>

          <MenuCategory title="Le Nostre Carni" className="bg-muted py-8 px-4 rounded-lg">
            <div className="flex justify-center mb-6">
              <Beef size={32} className="text-terracotta" />
            </div>

            <MenuItem
              title="Costata di Manzo (400g)"
              price="25.00"
              description="Costata di manzo alla griglia con rosmarino e sale grosso, servita con patate al forno"
            />
            <MenuItem
              title="Agnello Scottadito"
              price="22.00"
              description="Costolette di agnello marinate e grigliate, servite con verdure di stagione"
            />
            <MenuItem
              title="Bombette Pugliesi"
              price="18.00"
              description="Involtini di carne ripieni di pancetta, formaggio e prezzemolo"
            />
            <MenuItem
              title="Braciole di Maiale"
              price="16.00"
              description="Braciole di maiale marinate con erbe aromatiche e grigliate alla perfezione"
            />
            <MenuItem
              title="Misto Griglia (per 2 persone)"
              price="42.00"
              description="Selezione del macellaio con bistecca, agnello, salsiccia e bombette"
            />
            <MenuItem
              title="Bistecca alla Fiorentina (800g)"
              price="45.00"
              description="Autentica bistecca di razza Chianina cotta alla brace"
            />
            <MenuItem
              title="Salsiccia Pugliese"
              price="14.00"
              description="Salsiccia fresca alla griglia con finocchietto selvatico e peperoncino"
            />
          </MenuCategory>

          <MenuCategory title="Primi Piatti">
            <MenuItem
              title="Orecchiette alle Cime di Rapa"
              price="13.00"
              description="Pasta fatta in casa condita con cime di rapa, acciughe e peperoncino"
            />
            <MenuItem
              title="Cavatelli al Ragù di Carne"
              price="14.00"
              description="Pasta fresca condita con ragù di carne cotto lentamente"
            />
            <MenuItem
              title="Spaghetti ai Frutti di Mare"
              price="16.00"
              description="Spaghetti con frutti di mare freschi, aglio, prezzemolo e pomodorini"
            />
          </MenuCategory>

          <MenuCategory title="Contorni">
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

          <MenuCategory title="Dolci">
            <MenuItem
              title="Tiramisù della Casa"
              price="6.00"
              description="Classico tiramisù fatto in casa"
            />
            <MenuItem
              title="Panna Cotta"
              price="6.00"
              description="Panna cotta con coulis di frutti di bosco"
            />
            <MenuItem
              title="Pasticciotto Leccese"
              price="5.00"
              description="Dolce tipico pugliese con crema pasticcera"
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
