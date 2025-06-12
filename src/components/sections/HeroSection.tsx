import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center">
      <div className="absolute inset-0 z-0 pt-16">
        <Image
          src="/bg-img.jpg"
          alt="Délicieuses gaufres Mrs Waffles"
          fill
          className="object-cover brightness-60"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold font-fredoka mb-6 text-center lg:text-left">
              Mrs Waffles
            </h1>
            <h2 className="text-3xl md:text-4xl font-comfortaa mb-4 text-center lg:text-left text-secondary">
              Gaufres Gourmandes
            </h2>
            <p className="text-xl mb-8 text-center lg:text-left leading-relaxed">
              Gaufres maison 🧇 | 100% plaisir & gourmandise 😋<br/>
              Livraison sur Dakar 📍<br/>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/menu" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg w-full sm:w-[200px] h-[60px] border-2 border-primary hover:border-primary/90 flex items-center justify-center font-comfortaa">
                  Voir le Menu 🧇
                </Button>
              </Link>
              <a 
                href="https://wa.me/221771595352" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group bg-green-600/80 backdrop-blur-sm hover:bg-green-600 text-lg w-full sm:w-[200px] h-[60px] border-2 border-green-600 hover:border-green-600 text-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-comfortaa"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                  Contacter
                </Button>
              </a>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <a 
                href="https://instagram.com/mrswaffles" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors flex items-center gap-2 font-comfortaa"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                Suivez-nous sur Instagram
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};