import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

import { FiX } from 'react-icons/fi';
import ProductImage from './ProductImage';
import { DiVim } from 'react-icons/di';
import { SpanStatus } from 'next/dist/trace';

interface CartSideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSideBar = ({ isOpen, onClose }: CartSideBarProps) => {
    const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
    return (
        <>
            {
                isOpen && (
                    <div onClick={onClose} className=' fixed inset-0 bg-black/50 z-40 transition-opacity' />
                )
            }

            {/* Sidebar */}

            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex items-center justify-between p-6 border-b bg-gray-200'>
                    <h2 className='text-xl font-bold text-gray-900'>Shopping Cart</h2>
                    <button onClick={onClose} className='p-2 hover:bg-gray-100 rounded-full transition-colors'><FiX className='w-6 h-6 text-gray-600' /></button>
                </div>

                {/* Card Items */}

                <div className='flex-1 overflow-y-auto p-6'>
                    {items.length === 0 ? (<p>Your Cart is empty</p>) : (<div className='space-y-4'>
                        {
                            items.map((item, index) => (
                                <div key={index}
                                    className='flex gap-4 pb-4 border-b border-gray-200 last:border-0'
                                >
                                    <Link href={`/product/${item.product.slug}`}
                                        className='shrink-0  w-20 h-20 rounded-lg overflow-hidden bg-gray-100'
                                    >
                                        <ProductImage
                                            src={item.product.image}
                                            alt={item.product.name}
                                            width={80}
                                            height={80}
                                            className='w-full h-full object-cover'
                                            fallbackText={item.product.name} />
                                    </Link>

                                    <div>
                                        <Link href={`/product/${item.product.slug}`} className="block"
                                            onClick={onClose}

                                        >
                                            <h3 className='text-sm cursor-pointer font-semibold text-gray-900 truncate'>{item.product.name}</h3>
                                        </Link>

                                        {
                                            (item.selectedColor || item.selectedSize) && (
                                                <div className='mt-1 text-xs text-gray-600'>
                                                    {
                                                        item.selectedColor && (
                                                            <span>Color: {item.     selectedColor}</span>
                                                        )
                                                    }
                                                    {
                                                        item.selectedColor && item.selectedSize && (
                                            +
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                              <span className='mx-2'>|</span>
                                                        )
                                                    }
                                                    {
                                                        item.selectedSize && (
                                                            <span>Size: {item.selectedSize                                                                                                                    }</span>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            ))
                        }
                    </div>)}
                </div>
            </div>




        </>
    )
}

export default CartSideBar
