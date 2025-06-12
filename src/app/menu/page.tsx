'use client';

import { useState } from 'react';
import MenuCard from '@/components/menu/MenuCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { WaffleItem, Topping } from '@/lib/store';

// Available toppings
const availableToppings: Topping[] = [
  {
    id: 'biscuits-speculoos',
    name: 'Biscuits spéculoos',
    price: 500,
  },
  {
    id: 'bananes-fraiches',
    name: 'Bananes fraîches',
    price: 500,
  },
  {
    id: 'kinder-fondant',
    name: 'Kinder fondant',
    price: 1000,
  },
  {
    id: 'fruits-rouges',
    name: 'Fruits rouges',
    price: 1000,
  },
];

// Waffle menu items
const waffleItems: WaffleItem[] = [
  {
    id: 1,
    name: 'Gaufres nature',
    description: 'simple & légère',
    price: 1000,
    category: 'waffle',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
  {
    id: 2,
    name: 'Gaufres au sucre glace',
    description: 'douceur classique',
    price: 1500,
    category: 'waffle',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c',
  },
  {
    id: 3,
    name: 'Gaufres au Nutella',
    description: 'fondantes et gourmandes',
    price: 2000,
    category: 'waffle',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
  },
  {
    id: 4,
    name: 'Gaufres au caramel beurre salé',
    description: 'pour les amoureux du sucré-salé',
    price: 2000,
    category: 'waffle',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814',
  },
  {
    id: 5,
    name: 'Gaufres au spéculoos',
    description: 'douces, croquantes & épicées',
    price: 2500,
    category: 'waffle',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae',
  },
  {
    id: 6,
    name: 'Gaufres El Mordjene',
    description: 'la signature Mrs Waffles, ultra gourmande',
    price: 3000,
    category: 'waffle',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a74f0f78',
  },
];

const categories = [
  { 
    id: 'waffles',
    name: 'Gaufres',
    icon: '🧇',
    items: waffleItems
  },
  { 
    id: 'toppings',
    name: 'Toppings',
    icon: '🍓',
    items: [] // Toppings will be handled differently
  },
];

export default function MenuPage() {
  const [openCategories, setOpenCategories] = useState<string[]>(['waffles']);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Mrs. Waffles
          </h1>
          <p className="text-xl text-amber-700 font-medium">
            L&apos;art des Gaufres
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Collapsible 
                open={openCategories.includes(category.id)}
                onOpenChange={() => toggleCategory(category.id)}
              >
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-amber-50 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {category.name}
                        </h2>
                        <p className="text-gray-600">
                          {category.id === 'waffles' 
                            ? `${category.items.length} délicieuses variétés`
                            : 'Personnalisez votre gaufre'
                          }
                        </p>
                      </div>
                    </div>
                    {openCategories.includes(category.id) ? (
                      <ChevronUp className="h-6 w-6 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-amber-600" />
                    )}
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="p-6 pt-0">
                    {category.id === 'waffles' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((item) => (
                          <MenuCard key={item.id} item={item} availableToppings={availableToppings} />
                        ))}
                      </div>
                    ) : (
                      <div className="bg-amber-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-amber-900 mb-4">
                          Toppings disponibles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {availableToppings.map((topping) => (
                            <div key={topping.id} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                              <span className="font-medium text-gray-800">{topping.name}</span>
                              <span className="text-amber-600 font-bold">+{topping.price} FCFA</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-amber-700 mt-4 italic">
                          * Les toppings peuvent être ajoutés lors de la commande de votre gaufre
                        </p>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-md">
          <p className="text-gray-600 italic">
            Toutes nos gaufres sont préparées fraîches à la commande avec des ingrédients de qualité
          </p>
        </div>
      </div>
    </div>
  );
} 