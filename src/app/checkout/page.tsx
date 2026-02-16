"use client"


import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CheckOutPage = () => {

 const router = useRouter();

 const {items, getTotalPrice, updateQuantity, removeFromCart} = useCart();

 const [loading, setLoading] = useState(false);

 const [error, setError] = useState(false);
 const total = getTotalPrice();

 useEffect(() => {
  if(items.length === 0){
    router.push("/")
  }
 },[items, router])

  return (
    <div>CheckOutPage</div>
  )
}

export default CheckOutPage
