import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-fredoka mb-6">
          Envie d&apos;une Gaufre Gourmande ? 🧇
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Que ce soit pour un petit-déjeuner gourmand, un goûter en famille ou un dessert entre amis, nos gaufres fraîches et délicieuses sont prêtes à vous faire plaisir ! Livraison rapide sur Dakar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="w-full sm:w-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg w-full sm:w-[200px] h-[60px] border-2 border-primary hover:border-primary/90 flex items-center justify-center font-comfortaa">
              Voir le Menu 🧇
            </Button>
          </Link>
          <a 
            href="https://wa.me/221771595352?text=Bonjour,%20je%20souhaite%20commander%20des%20gaufres%20Mrs%20Waffles%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-secondary/5 hover:bg-[#25D366] text-lg w-full sm:w-[200px] h-[60px] border-2 border-secondary hover:border-[#25D366] text-secondary hover:text-white transition-colors duration-200 flex items-center justify-center font-comfortaa"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Commander
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}; 