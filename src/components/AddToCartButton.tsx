import { Product } from '@/types/product'
import React from 'react'

interface AddToCartButtonProps {
    product: Product;
    selectedColor?: string;
    selectedSize?: string;
    quantity?: number
}

const AddToCartButton = ({    product,selectedColor,selectedSize,quantity
}:AddToCartButtonProps) => {
  return (
    <button>Add To Cart</button>
  )
}

export default AddToCartButton