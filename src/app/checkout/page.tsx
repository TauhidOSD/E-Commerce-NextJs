"use client"


import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation'
import React from 'react'

const CheckOutPage = () => {

 const router = useRouter();

 const {items, getTotalPrice, updateQuantity, removeFromCart} = useCart();

  return (
    <div>CheckOutPage</div>
  )
}

export default CheckOutPage
