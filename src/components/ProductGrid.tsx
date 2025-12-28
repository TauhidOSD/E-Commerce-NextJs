"use client"
import { categories } from '@/data/products';
import { Product } from '@/types/product'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';



interface ProductGrid {
    products: Product[];
    initialCategory: string;
}


const ProductGrid = ({products,initialCategory = "all"}: ProductGrid) => {

  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || initialCategory)

  useEffect(() => {
      const category = searchParams.get('category') || "all";
      setSelectedCategory(category);
  },[searchParams])


  const filteredProduct = selectedCategory ==='all' ? products : products.filter(product => product.category === selectedCategory);
  console.log(filteredProduct)

  return (
    <div>
      <div className='mb-8 flex flex-wrap gap-4 '>
        {categories.map((category) => (
          <button key={category.slug}>{category.name}</button>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid