import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product'
import React, { useState } from 'react'

interface AddToCartButtonProps {
    product: Product;
    selectedColor?: string;
    selectedSize?: string;
    quantity: number
}

const AddToCartButton = ({    product,selectedColor,selectedSize,quantity
}:AddToCartButtonProps) => {

  const {addToCart} = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor,selectedSize);
    setIsAdded(true)
  }

  return (
    <button>Add To Cart</button>
  )
}

export default AddToCartButton