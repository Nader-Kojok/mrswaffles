import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faHandHoldingHeart,
  faCookie,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const FreshAndLocalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-fredoka mb-4">
              Notre Démarche &ldquo;Fraîcheur & Qualité&rdquo;
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à proposer des gaufres de qualité composées d&apos;ingrédients frais et sélectionnés, pour une expérience gustative exceptionnelle à chaque bouchée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                alt="Ingrédients frais pour gaufres"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-comfortaa">Ingrédients Frais</h3>
                  <p className="text-gray-600">
                    Nous sélectionnons avec soin nos ingrédients : œufs frais, farine de qualité, beurre authentique et fruits de saison pour garantir le meilleur goût à nos gaufres.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-comfortaa">Fait Maison</h3>
                  <p className="text-gray-600">
                    Chaque gaufre est préparée à la commande avec notre pâte maison préparée chaque jour et nos garnitures fraîches selon nos recettes gourmandes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FontAwesomeIcon icon={faCookie} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-comfortaa">Cuisson Parfaite</h3>
                  <p className="text-gray-600">
                    Nos gaufres sont cuites dans nos gaufriers professionnels pour obtenir cette texture croustillante à l&apos;extérieur et moelleuse à l&apos;intérieur que nous aimons tant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 font-comfortaa"
              >
                Découvrir Notre Menu 🧇
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 