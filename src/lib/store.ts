import { create } from 'zustand';

export interface Topping {
  id: string;
  name: string;
  price: number;
}

export interface WaffleItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'waffle';
  image: string;
}

export interface CartItem extends WaffleItem {
  quantity: number;
  toppings: Topping[];
}

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: WaffleItem, toppings: Topping[]) => void;
  removeItem: (itemId: number, toppings: Topping[]) => void;
  clearCart: () => void;
}

const calculateItemPrice = (item: WaffleItem, toppings: Topping[]): number => {
  const toppingsPrice = toppings.reduce((sum, topping) => sum + topping.price, 0);
  return item.price + toppingsPrice;
};

const areArraysEqual = (a: Topping[], b: Topping[]): boolean => {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort((x, y) => x.id.localeCompare(y.id));
  const sortedB = [...b].sort((x, y) => x.id.localeCompare(y.id));
  return sortedA.every((item, index) => item.id === sortedB[index].id);
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item: WaffleItem, toppings: Topping[]) => {
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && areArraysEqual(i.toppings, toppings)
      );

      const itemPrice = calculateItemPrice(item, toppings);

      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id && areArraysEqual(i.toppings, toppings)
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
        return {
          items: updatedItems,
          total: state.total + itemPrice,
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1, toppings }],
        total: state.total + itemPrice,
      };
    });
  },
  removeItem: (itemId: number, toppings: Topping[]) => {
    set((state) => {
      const item = state.items.find((i) => i.id === itemId && areArraysEqual(i.toppings, toppings));
      if (!item) return state;

      const itemPrice = calculateItemPrice(item, item.toppings);

      if (item.quantity > 1) {
        const updatedItems = state.items.map((i) =>
          i.id === itemId && areArraysEqual(i.toppings, toppings)
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
        return {
          items: updatedItems,
          total: state.total - itemPrice,
        };
      }

      return {
        items: state.items.filter((i) => !(i.id === itemId && areArraysEqual(i.toppings, toppings))),
        total: state.total - itemPrice,
      };
    });
  },
  clearCart: () => set({ items: [], total: 0 }),
})); 