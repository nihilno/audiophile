"use client";

import { CartItem } from "@/lib/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem, quantity?: number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  removeAll: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const removeAll = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export { CartProvider, useCart };
