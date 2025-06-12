'use client';

import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export default function ContactPage() {
  const handleCall = () => {
    window.location.href = 'tel:+221771595352';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/221771595352?text=Bonjour,%20je%20souhaite%20commander%20des%20gaufres%20Mrs%20Waffles%20!';
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/mrswaffles', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-fredoka mb-4">Contactez Mrs Waffles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-comfortaa">
            Envie d&apos;une gaufre gourmande ? Notre équipe est à votre disposition pour prendre votre commande et répondre à toutes vos questions ! 🧇
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-fredoka mb-8">Nos Informations</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MdLocationOn className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 font-comfortaa">Adresse</h3>
                    <p className="text-gray-600">Livraison sur tout Dakar, Sénégal 🇸🇳</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 font-comfortaa">Téléphone</h3>
                    <p className="text-gray-600">+221 77 159 53 52</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MdEmail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 font-comfortaa">Email</h3>
                    <p className="text-gray-600">contact@mrswaffles.sn</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleCall}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-comfortaa"
                  aria-label="Appeler"
                >
                  <FaPhone className="mr-2" />
                  Appeler
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors font-comfortaa"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </button>
                <button
                  onClick={handleInstagram}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#E4405F] text-white rounded-lg hover:bg-[#E4405F]/90 transition-colors font-comfortaa"
                  aria-label="Instagram"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-fredoka mb-6">Horaires de Livraison</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-900 font-comfortaa">Lundi - Vendredi</span>
                  <span className="text-primary font-medium font-comfortaa">08h00 - 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900 font-comfortaa">Samedi - Dimanche</span>
                  <span className="text-primary font-medium font-comfortaa">09h00 - 23h00</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary font-comfortaa">
                  📱 Commandes via WhatsApp & Instagram
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold font-fredoka mb-6">Zones de Livraison</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-2 font-comfortaa">Zone 1 - 1000 FCFA</p>
                  <p className="text-sm text-gray-600">Almadies, Ngor</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-2 font-comfortaa">Zone 2 - 1500 FCFA</p>
                  <p className="text-sm text-gray-600">Yoff, Ouakam</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-2 font-comfortaa">Zone 3 - 2000 FCFA</p>
                  <p className="text-sm text-gray-600">Mermoz, Point E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.7!2d-17.5!3d14.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzA2LjgiTiAxN8KwMzAnMDAuMCJX!5e0!3m2!1sfr!2sfr!4v1710347161811!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Google Maps - Zone de livraison Mrs Waffles"
              aria-label="Carte Google Maps montrant les zones de livraison de Mrs Waffles à Dakar"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 