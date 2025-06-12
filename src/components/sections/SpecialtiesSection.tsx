import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-fredoka mb-4">
            Nos Gaufres Irrésistibles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque gaufre est une invitation au bonheur ! Croustillantes à l&apos;extérieur, moelleuses à l&apos;intérieur, nos créations artisanales réveilleront tous vos sens et combleront vos envies les plus gourmandes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907"
              alt="Gaufres fraîches et croustillantes"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 font-comfortaa">Croustillant Irrésistible</h3>
                <p className="text-sm opacity-90">Ce petit &quot;croc&quot; magique qui révèle un cœur tout moelleux... Nos gaufres chaudes vous feront fondre de plaisir à chaque bouchée !</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
              alt="Préparation gourmande de gaufres"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 font-comfortaa">Fait Maison avec Amour</h3>
                <p className="text-sm opacity-90">Pâte onctueuse préparée chaque matin, cuisson parfaite sous vos yeux... L&apos;arôme délicieux qui s&apos;échappe vous mettra l&apos;eau à la bouche !</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7"
              alt="Garnitures gourmandes et généreuses"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 font-comfortaa">Garnitures Généreuses</h3>
                <p className="text-sm opacity-90">Chocolat fondant, fruits juteux, chantilly onctueuse... Des toppings savoureux qui transforment chaque gaufre en moment de pur bonheur !</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 font-comfortaa"
            >
              Découvrir Nos Délices 🧇
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}; 