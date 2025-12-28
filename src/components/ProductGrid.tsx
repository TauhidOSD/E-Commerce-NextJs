import { Product } from '@/types/product'
import React from 'react'

interface ProductGrid {
    products: Product[];
    initialCategory: string;
}


const ProductGrid = ({products,initialCategory = "all"}: ProductGrid) => {
  return (
    <div>ProductGrid</div>
  )
}

export default ProductGrid