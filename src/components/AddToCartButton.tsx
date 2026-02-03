import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product'
import React, { useState } from 'react'
import { FiCheck, FiShoppingCart } from 'react-icons/fi';

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
    
    <button
    onClick={handleAddToCart}
    disabled={isAdded}
    className={`group relative w-full overflow-hidden rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-xl hover:scale[1.01] active: scale-[.99] `}
    >
      <span className='relative z-10 flex items-center justify-center gap-3'>
        {isAdded ? <>
        <FiCheck className='size-5'/>Added to Cart!
        </> : <>
        <FiShoppingCart className='size-5'/>Added to Cart
        </>}
      </span>
    </button>
  )
}

export default AddToCartButton
