import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';

export const SupportSection = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-fredoka mb-6">
            Soutenez Mrs Waffles 🧇
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Votre soutien compte énormément pour nous ! Partagez votre expérience gourmande et suivez-nous sur les réseaux sociaux pour découvrir nos dernières créations et offres spéciales.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avis Google */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <FontAwesomeIcon 
                icon={faGoogle} 
                className="h-12 w-12 text-primary mb-4" 
              />
              <h3 className="text-2xl font-bold mb-4 font-comfortaa">Laissez un avis</h3>
              <p className="text-gray-600 mb-6">
                Votre avis aide d&apos;autres gourmands à découvrir nos délicieuses gaufres. Partagez votre expérience sur Google !
              </p>
              <a
                href="https://g.page/r/mrs-waffles-dakar/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-comfortaa"
                >
                  Donner votre avis ⭐
                </Button>
              </a>
            </div>

            {/* Réseaux Sociaux */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="https://facebook.com/mrswaffles.sn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com/mrswaffles.sn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E4405F] transition-colors"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
                </a>
                <a
                  href="https://wa.me/221771595352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#25D366] transition-colors"
                  aria-label="Commandez sur WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa">Suivez-nous</h3>
              <p className="text-gray-600">
                Restez informé de nos nouvelles créations, promotions spéciales et commandez directement via WhatsApp ou Instagram !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 