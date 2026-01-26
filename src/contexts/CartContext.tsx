"use client"

import { CartItem } from "@/types/cart"
import { Product } from "@/types/product";
import { createContext, ReactNode, useState } from "react";

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

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [items, setItems]= useState<CartItem[]>([]);

    const addToCart = (
        product: Product,
        quantity: number,
        selectedColor?: string,
        selectedSize?: string

    ) => {
        setItems((PrevItems) => {
            const existingItemIndex = PrevItems.findIndex((item)=>
                item.product.id === product.id && 
                item.selectedColor === selectedColor && 
                item.selectedSize === selectedSize
            );

            if(existingItemIndex >= 0){
                const updatedItems = [...PrevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            }else {
                return [...PrevItems, {product, quantity, selectedColor, selectedSize}];
            }
        })
    }

    const removeFromCart =(
        productId: string,
        selectedColor?: string,
        selectedSize?: string
    ) => {
        setItems((prevItems) => prevItems.filter((item) => !(
            item.product.id === productId && 
            item.selectedColor === selectedColor && 
            item.selectedSize === selectedSize
        ) ))
    }

    const updateQuantity = (
        productId: string,
        quantity: number,
        selectedColor?: string,
        selectedSize?: string
    ) => {
        if(quantity <= 0){
            removeFromCart(productId, selectedColor, selectedSize);
            return;
        }
        setItems((prevItems) => prevItems.map((item) =>(
            item.product.id === productId && 
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
        ) ?
        {...item, quantity}: item
    ))

    }


}