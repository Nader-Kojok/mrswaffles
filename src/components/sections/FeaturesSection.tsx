import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCookie, 
  faHeart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faCookie} className="h-8 w-8 text-amber-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-comfortaa">Gaufres Maison</h3>
            <p className="text-gray-600">
              Nos gaufres sont préparées avec des ingrédients frais et de qualité, pour un goût authentique et délicieux à chaque bouchée.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-amber-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-comfortaa">100% Gourmandise</h3>
            <p className="text-gray-600">
              Chaque gaufre est préparée avec amour et passion pour vous offrir un moment de pur plaisir et de bonheur gourmand.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faTruck} className="h-8 w-8 text-amber-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-comfortaa">Livraison Dakar</h3>
            <p className="text-gray-600">
              Nous livrons vos gaufres chaudes directement chez vous partout à Dakar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 