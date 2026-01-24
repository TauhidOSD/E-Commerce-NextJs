"use client"

import { CartItem } from "@/types/cart"
import { Product } from "@/types/product";
import { createContext } from "react";

interface CartContextType {
    items: CartItem[];
    addToCart: (
        product: Product,
        quantity: number,
        selectedColor?: string,
        selectedSize?: string,
     ) => void;
    removeFromCart: (productId: string, selectedColor?:string, selectedSize?:string) => void

    updateQuantity: (
        productId: string,
        quantity: number,
        selectedColor?: string,
        selectedSize?: string
    ) => void;

    clearCart:() => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined)