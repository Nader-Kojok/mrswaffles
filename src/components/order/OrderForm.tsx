import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCartStore } from '@/lib/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const DELIVERY_ZONES = [
  { id: 'zone1', name: 'Almadies', price: 1000 },
  { id: 'zone2', name: 'Ngor', price: 1000 },
  { id: 'zone3', name: 'Yoff', price: 1500 },
  { id: 'zone4', name: 'Ouakam', price: 1500 },
  { id: 'zone5', name: 'Mermoz', price: 2000 },
  { id: 'zone6', name: 'Point E', price: 2000 },
];

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OrderDetails {
  name: string;
  phone: string;
  deliveryType: 'delivery' | 'pickup';
  zone: string;
  address: string;
}

const defaultOrderDetails: OrderDetails = {
  name: '',
  phone: '',
  deliveryType: 'delivery',
  zone: '',
  address: '',
};

const OrderForm = ({ isOpen, onClose }: OrderFormProps) => {
  const { items, total } = useCartStore();
  const [orderDetails, setOrderDetails] = useState<OrderDetails>(defaultOrderDetails);

  const handleClose = () => {
    setOrderDetails(defaultOrderDetails);
    onClose();
  };

  const deliveryPrice = orderDetails.deliveryType === 'delivery' && orderDetails.zone
    ? DELIVERY_ZONES.find(zone => zone.id === orderDetails.zone)?.price || 0
    : 0;

  const totalWithDelivery = total + deliveryPrice;

  const formatWhatsAppMessage = () => {
    const itemsList = items.map((item: import('@/lib/store').CartItem) => {
      const basePrice = item.price;
      const toppingsPrice = item.toppings.reduce((sum: number, t: import('@/lib/store').Topping) => sum + t.price, 0);
      const itemTotal = (basePrice + toppingsPrice) * item.quantity;
      
      let itemText = `${item.quantity}x ${item.name} - ${basePrice} FCFA`;
      
      if (item.toppings.length > 0) {
        const toppingsText = item.toppings.map((t: import('@/lib/store').Topping) => `${t.name} (+${t.price} FCFA)`).join(', ');
        itemText += `\n   Toppings: ${toppingsText}`;
      }
      
      itemText += `\n   Total: ${itemTotal} FCFA`;
      return itemText;
    }).join('\n\n');

    const deliveryInfo = orderDetails.deliveryType === 'delivery'
      ? `\nLivraison à ${DELIVERY_ZONES.find(z => z.id === orderDetails.zone)?.name}`
      + `\nAdresse: ${orderDetails.address}`
      + `\nFrais de livraison: ${deliveryPrice} FCFA`
      : '\nÀ récupérer au restaurant';

    return encodeURIComponent(
      `🧇 Nouvelle commande Mrs. Waffles :\n\n`
      + `Client: ${orderDetails.name}\n`
      + `Téléphone: ${orderDetails.phone}\n\n`
      + `Commande:\n${itemsList}\n\n`
      + `Sous-total: ${total} FCFA`
      + deliveryInfo
      + `\nTotal: ${totalWithDelivery} FCFA`
    );
  };

  const handleSubmit = () => {
    if (!orderDetails.name || !orderDetails.phone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (orderDetails.deliveryType === 'delivery' && (!orderDetails.zone || !orderDetails.address)) {
      alert('Veuillez sélectionner une zone et renseigner votre adresse');
      return;
    }

    window.open(`https://wa.me/+221771595352?text=${formatWhatsAppMessage()}`, '_blank');
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-amber-900">Finaliser la commande</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Order Summary */}
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-3">Résumé de votre commande</h3>
            <div className="space-y-2 text-sm">
              {items.map((item: import('@/lib/store').CartItem, index: number) => (
                <div key={`${item.id}-${index}`} className="border-b border-amber-200 pb-2 last:border-b-0">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.quantity}x {item.name}</span>
                    <span>{item.price * item.quantity} FCFA</span>
                  </div>
                  {item.toppings.length > 0 && (
                    <div className="ml-4 text-amber-700">
                      {item.toppings.map((topping: import('@/lib/store').Topping) => (
                        <div key={topping.id} className="flex justify-between">
                          <span>+ {topping.name}</span>
                          <span>+{topping.price * item.quantity} FCFA</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              value={orderDetails.name}
              onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
              placeholder="Votre nom"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              value={orderDetails.phone}
              onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
              placeholder="Votre numéro de téléphone"
            />
          </div>

          <div className="space-y-2">
            <Label>Type de commande *</Label>
            <RadioGroup
              value={orderDetails.deliveryType}
              onValueChange={(value: 'delivery' | 'pickup') => {
                setOrderDetails({
                  ...orderDetails,
                  deliveryType: value,
                  zone: value === 'pickup' ? '' : orderDetails.zone,
                  address: value === 'pickup' ? '' : orderDetails.address,
                });
              }}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery">Livraison</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup">À emporter</Label>
              </div>
            </RadioGroup>
          </div>

          {orderDetails.deliveryType === 'delivery' && (
            <>
              <div className="space-y-2">
                <Label>Zone de livraison *</Label>
                <Select
                  value={orderDetails.zone}
                  onValueChange={(value) => setOrderDetails({ ...orderDetails, zone: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre zone" />
                  </SelectTrigger>
                  <SelectContent>
                    {DELIVERY_ZONES.map((zone) => (
                      <SelectItem key={zone.id} value={zone.id}>
                        {zone.name} - {zone.price} FCFA
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse de livraison *</Label>
                <Input
                  id="address"
                  value={orderDetails.address}
                  onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                  placeholder="Votre adresse complète"
                />
              </div>
            </>
          )}

          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span>Sous-total</span>
              <span>{total} FCFA</span>
            </div>
            {orderDetails.deliveryType === 'delivery' && deliveryPrice > 0 && (
              <div className="flex justify-between text-sm">
                <span>Frais de livraison</span>
                <span>{deliveryPrice} FCFA</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold text-amber-600">
              <span>Total</span>
              <span>{totalWithDelivery} FCFA</span>
            </div>
          </div>

          <Button
            className="w-full bg-green-600 hover:bg-green-700 h-12"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-3 h-5 w-5" />
            Commander sur WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm; 