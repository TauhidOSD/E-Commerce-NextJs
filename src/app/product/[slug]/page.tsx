import { getProductBySlug } from '@/data/products';
import { log } from 'console';
import { notFound } from 'next/navigation';
import React from 'react'
import NotFound from './not-found';
import Link from 'next/link';
import ProductImageGallery from '@/components/ProductImageGallery';
import { FiStar } from 'react-icons/fi';
import ProductAction from '@/components/ProductAction';

interface ProductPageProps {
    params: Promise<{slug: string}>
}

const ProductPage = async({params}: ProductPageProps) => 
    {
  const {slug} = await params;

  const product = getProductBySlug(slug)
  
  if(!product){
    notFound();
    
  }

  return (
    <>
    {/* breadcrumb navigation */}
    <div className='bg-gray-50 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 p py-4 sm:px-6 lg:px-8'>
        <nav className='flex items-center space-x-2 text-sm text-gray-600'>
          <Link href="/" className='hover:text-gray-900 transition-colors '>Home</Link>
          <svg 
          className='w-4 h-4 text-gray-400
          '
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
            <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d="M9 5l7 7-7 7"
            />
          </svg>
          <Link href={`/?category=${product.category}`} className='hover:text-gray-900 transition-colors '>{product.category}</Link>
          <svg 
          className='w-4 h-4 text-gray-400
          '
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
            <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d="M9 5l7 7-7 7"
            />
          </svg>
          <Link href={`/product/${product.slug}`} className='hover:text-gray-900 transition-colors '>{product.name}</Link>

        </nav>
      </div>
    </div>


    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='grid gap-12 lg:grid-cols-2 grid-cols-1 mb-16'>

        {/* product image */}
        <div className='sticky top-8 self-start'>

          <ProductImageGallery
          images={product.images || [product.image]}
          productName={product.name}
          />
        </div>
        
        {/* product info */}
        <div className='flex flex-col'>
          {/* product title and price */}
          <div className='mb-6'>
            <h1 className='text-4xl font-bold to-gray-900 tracking-tight mb-4  '>{product.name}</h1>
            <div className='flex items-baseline gap-1'>
              <p className='text-4xl font-bold text-gray-900'>${product.price.toFixed(2)}</p>
              <span className='text-lg font-normal to-gray-500'>{product.currency}</span>
            </div>
          </div>
          {/* rating provider */}
          <div className='flex items-center gap-2 mb-6 '>
            <div className='flex items-center'>
              {[...Array(5)].map((_,index) => (
                <FiStar key={index} className='w-6 h-6 text-amber-400 fill-amber-300 '/>
              ))}
            </div>
            <span className='text-gray-600 text-sm' >(120 review)</span>
            <span className='text-gray-300'>|</span>
            <span className='text-sm text-green-600 font-medium'>In Stoke</span>
          </div>
          {/* product description */}
          <div className='mb-8'>
            <p className='text-base leading-7 to-gray-600'>{product.description}</p>
          </div>
          {/* product action */}
          <ProductAction product={product}/>
        </div>

      </div>

    </div>
    
    </>
  )
}

export default ProductPage