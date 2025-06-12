import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faHeart, 
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'À Propos - Mrs Waffles',
  description: 'Découvrez l\'histoire de Mrs Waffles, votre gauffrerie artisanale qui réveille vos papilles avec des créations gourmandes et authentiques.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
            alt="Mrs Waffles - Gauffrerie Artisanale"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-fredoka mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl font-comfortaa">
              Depuis nos débuts, nous créons des gaufres artisanales qui réchauffent les cœurs et éveillent les papilles dans une ambiance chaleureuse et gourmande.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-fredoka mb-4">
                L&apos;Art de la Gaufre Parfaite
              </h2>
              <p className="text-xl text-gray-600 font-comfortaa">
                Mrs Waffles est née d&apos;une passion dévorante pour l&apos;art de la gaufre authentique. Notre aventure a commencé avec une simple conviction : chaque gaufre doit être un moment de pur bonheur, croustillante à l&apos;extérieur et moelleuse à l&apos;intérieur.
              </p>
              <p className="text-xl text-gray-600 font-comfortaa">
                Dans notre atelier gourmand, nous préparons chaque jour nos pâtes avec amour, sélectionnons les meilleurs ingrédients et créons des associations de saveurs qui font danser vos papilles. Chaque gaufre raconte une histoire de gourmandise !
              </p>
            </div>
            <div className="relative group overflow-hidden aspect-[4/3] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907"
                alt="Atelier de préparation des gaufres"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-fredoka mb-4">
              Nos Valeurs Gourmandes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-comfortaa">
              Notre engagement envers la gourmandise authentique se reflète dans chaque gaufre que nous créons avec passion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUtensils} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-comfortaa">Fraîcheur</h3>
              <p className="text-gray-600">
                Pâte préparée chaque matin, ingrédients frais et de saison pour des gaufres qui croustillent de bonheur.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeart} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-comfortaa">Gourmandise</h3>
              <p className="text-gray-600">
                Chaque gaufre est une invitation au plaisir, préparée avec amour pour réveiller tous vos sens.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-comfortaa">Partage</h3>
              <p className="text-gray-600">
                Un lieu chaleureux où chaque moment devient délicieux, parfait pour partager des instants gourmands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-fredoka mb-4">
              Notre Équipe Gourmande
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-comfortaa">
              Des passionnés de la gaufre qui mettent tout leur cœur dans chaque création pour vous offrir des moments de pur bonheur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                alt="Notre Chef Gaufrier"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 font-comfortaa">Notre Chef Gaufrier</h3>
                  <p className="text-sm opacity-90">Maître dans l&apos;art de la gaufre parfaite, croustillante et moelleuse</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8"
                alt="Notre Équipe Créative"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 font-comfortaa">Nos Créateurs de Saveurs</h3>
                  <p className="text-sm opacity-90">Des artistes gourmands qui inventent vos prochains coups de cœur</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[4/5] rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Notre Équipe Accueil"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 font-comfortaa">Notre Équipe Sourire</h3>
                  <p className="text-sm opacity-90">Toujours là pour vous accueillir avec le sourire et de bons conseils</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 