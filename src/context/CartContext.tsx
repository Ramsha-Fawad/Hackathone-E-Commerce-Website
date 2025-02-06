"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number; // Added quantity field
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateCartQuantity: (id: string, quantity: number) => void; // Added updateCartQuantity
  removeFromCart: (id: string) => void; // Added removeFromCart
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add product to cart
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      // If the product already exists, increase the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If it's a new product, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Update product quantity
  const updateCartQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
