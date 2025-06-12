import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from 'react';
import OrderForm from '../order/OrderForm';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, total, removeItem, addItem, clearCart } = useCartStore();
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-playfair text-2xl">Votre Panier</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
              <p className="text-gray-600 mb-4">Votre panier est vide.</p>
              <Link href="/menu">
                <Button className="bg-primary hover:bg-secondary" onClick={onClose}>
                  Voir le menu
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col h-[calc(100vh-200px)]">
              <ScrollArea className="flex-grow pr-4">
                <div className="space-y-4">
                  {items.map((item: import('@/lib/store').CartItem) => {
                    const itemTotal = (item.price + item.toppings.reduce((sum: number, t: import('@/lib/store').Topping) => sum + t.price, 0)) * item.quantity;
                    return (
                      <div 
                        key={`${item.id}-${item.toppings.map((t: import('@/lib/store').Topping) => t.id).join('-')}`}
                        className="flex gap-3 items-center bg-white p-3 rounded-lg shadow-sm"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="text-sm font-bold truncate">{item.name}</h3>
                          {item.toppings.length > 0 && (
                            <ul className="text-xs text-amber-700 mt-1 space-y-0.5">
                              {item.toppings.map((topping: import('@/lib/store').Topping) => (
                                <li key={topping.id}>+ {topping.name} <span className="text-amber-600 font-semibold">+{topping.price} FCFA</span></li>
                              ))}
                            </ul>
                          )}
                          <p className="text-sm text-amber-600 font-semibold mt-1">{itemTotal} FCFA</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id, item.toppings)}
                            disabled={item.quantity <= 1}
                            className="h-7 w-7 p-0"
                          >
                            -
                          </Button>
                          <span className="w-4 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem(item, item.toppings)}
                            className="h-7 w-7 p-0"
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 h-7 w-7 p-0 ml-2"
                          onClick={() => removeItem(item.id, item.toppings)}
                        >
                          <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>

              <div className="mt-8 space-y-6 border-t pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-xl text-primary">{total} F</span>
                </div>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-primary hover:bg-secondary h-12 text-base"
                    onClick={() => setIsOrderFormOpen(true)}
                  >
                    Commander
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-base"
                    onClick={clearCart}
                  >
                    Vider le panier
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
      />
    </>
  );
};

export default CartSidebar; 