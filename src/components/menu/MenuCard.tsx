import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import type { WaffleItem, Topping } from '@/lib/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MenuCardProps {
  item: WaffleItem;
  availableToppings: Topping[];
}

const MenuCard = ({ item, availableToppings }: MenuCardProps) => {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleToppingChange = (topping: Topping, checked: boolean) => {
    if (checked) {
      setSelectedToppings(prev => [...prev, topping]);
    } else {
      setSelectedToppings(prev => prev.filter(t => t.id !== topping.id));
    }
  };

  const handleAddToCart = () => {
    addItem(item, selectedToppings);
    setSelectedToppings([]);
    setIsDialogOpen(false);
  };

  const totalPrice = item.price + selectedToppings.reduce((sum, topping) => sum + topping.price, 0);

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm italic">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-amber-600">{item.price} FCFA</span>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
                aria-label={`Personnaliser ${item.name}`}
              >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                Commander
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-amber-900">Personnaliser votre {item.name}</DialogTitle>
                <DialogDescription>
                  Choisissez vos toppings préférés pour personnaliser votre gaufre
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Gaufre de base</h4>
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-bold">{item.price} FCFA</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Toppings (optionnels)</h4>
                  <div className="space-y-3">
                    {availableToppings.map((topping) => (
                      <div key={topping.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={topping.id}
                            checked={selectedToppings.some(t => t.id === topping.id)}
                            onCheckedChange={(checked: boolean) => handleToppingChange(topping, checked)}
                          />
                          <label htmlFor={topping.id} className="text-sm font-medium cursor-pointer">
                            {topping.name}
                          </label>
                        </div>
                        <span className="text-sm font-bold text-amber-600">+{topping.price} FCFA</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedToppings.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Toppings sélectionnés</h4>
                    {selectedToppings.map((topping) => (
                      <div key={topping.id} className="flex justify-between text-sm">
                        <span>{topping.name}</span>
                        <span>+{topping.price} FCFA</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-amber-600">{totalPrice} FCFA</span>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                  Ajouter au panier ({totalPrice} FCFA)
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MenuCard; 