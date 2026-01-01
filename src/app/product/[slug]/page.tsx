import { getProductBySlug } from '@/data/products';
import { log } from 'console';
import React from 'react'

interface ProductPageProps {
    params: Promise<{slug: string}>
}

const ProductPage = async({params}: ProductPageProps) => 
    {
  const {slug} = await params;

  const product = getProductBySlug(slug)
  console.log(product)
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage