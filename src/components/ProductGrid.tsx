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


  const handleCategoryChange = (categorySlug : string) => {
    setSelectedCategory(categorySlug);
    const params =new URLSearchParams(searchParams.toString());
    if(categorySlug === 'all'){
      params.delete('category')
    }else{
      params.set('category',categorySlug)
    }
    router.push(`/?${params.toString()}`, {scroll: false})
  }


  const filteredProduct = selectedCategory ==='all' ? products : products.filter(product => product.category === selectedCategory);
  console.log(filteredProduct)

  return (
    <div>
      <div className='  mb-8 flex flex-wrap gap-4 border-b border-gray-200 pb-4 '>
        {categories.map((category) => (
          <button key={category.slug}

          onClick={()=> handleCategoryChange(category.slug)}
          
          className={`font-medium transition-colors cursor-pointer ${selectedCategory === category.slug ? 'text-indigo-600' : ''}`}
          >{category.name}</button>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid