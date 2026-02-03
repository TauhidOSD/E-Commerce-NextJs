"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";
import { Span } from "next/dist/trace";
import { FiMinus, FiPlus } from "react-icons/fi";

interface ProductOptionsProps {
  product: Product;
  onSelectionChange?: (selections: {
    color?: string;
    size?: string;
    quantity?: number;
  }) => void;
}

const ProductOptions = ({ product, onSelectionChange }: ProductOptionsProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.sizes?.[0] || null
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes?.[0] || null
  );

  const [quantity, setQuantity] = useState<number>(1);

  const maxQuantity = product.stock ?? 99;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    notifyChange(color, selectedSize, quantity)
    
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    notifyChange(selectedColor, size, quantity);
  }

  const handleQuantityChange = (qty : number) => {
    const clampedQuantity = Math.max(1, Math.min(maxQuantity,qty));
    setQuantity(qty)
    notifyChange(selectedColor, selectedSize, clampedQuantity);
  }

  const notifyChange = (color: string | null , size: string | null, qty: number) => {
    if(onSelectionChange){
      onSelectionChange({
        color: color || undefined,
        size: size || undefined,
        quantity: qty
      })
        
      
    }
  }

  return (
    <div className="space-y-8 border-t border-gray-200 pt-8">
      {/* color options */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <div className="flex items-center justify-start mb-4">
            <label className="block text-base font-semibold text-gray-900 mr-2">
              Color
            </label>
            {selectedColor && (
              <span className="text-sm font-medium text-gray-600">
                ({selectedColor})
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => {
              const isSelected = selectedColor === color;
              const colorValue = getColorValue(color);
              
              return (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2 scale-110 shadow-lg'
                      : 'border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-md'
                  }`}
                  style={
                    colorValue
                      ? {
                          backgroundColor: colorValue,
                        }
                      : undefined
                  }
                  aria-label={`Select color ${color}`}
                  aria-pressed={isSelected}
                  title={color}
                >
                  {!colorValue && (
                    <span className={`text-xs font-semibold ${
                      isSelected ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {color.charAt(0).toUpperCase()}
                    </span>
                  )}
                  {isSelected && colorValue && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white drop-shadow-md"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}
                  {isSelected && !colorValue && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
      {/* size selection */}
      {
        product.sizes && product.sizes.length > 0 && (
          <div>
            <div className="flex items-center justify-start mb-4">
              <label className="block text-base font-semibold to-gray-900 mr-2">Sizes</label>
              {
                selectedSize && (<span className="text-sm font-medium text-gray-600">({selectedSize})</span>)
              }
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size)=>{

                const isSelected = selectedSize === size;
               
                return (
                  <button 
                  key={size}
                  onClick={()=> handleSizeChange(size)}
                  className={`group relative flex items-center justify-center w-14 h-10 rounded-md border-2 ${isSelected ? 'border-gray-900 text-white bg-gray-900'  : 'border-gray-300'} `}
                 
                  >
                    

                   {size}

                  </button>
                )
              })}
            </div>
          </div>
        )
      }
      {/* quantity selection */}
      <div>
        <div>
            <div className="flex items-center justify-start mb-4">
              <label className="block text-base font-semibold to-gray-900 mr-2">Quantity</label>
              {
                quantity && (<span className="text-sm font-medium text-gray-600">({quantity})</span>)
              }
              {
                product.stock && (
                  <span className="text-sm font-medium text-gray-600 ml-4">*{product.stock} In Stock</span>
                )
              }
            </div>
            <div className="flex items-center gap-4">
              
              <button 
                 
                  onClick={()=> handleQuantityChange(quantity - 1)}
                  disabled={quantity <=1}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-md border-2 focus:outline-none  cursor-pointer`}
                 
                  >
                   <FiMinus/>

                  </button> 

                  <input type="number"
                  min={1}
                  max={maxQuantity}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-14 h-10 text-center font-medium border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"

                  />

                  <button 
                 
                  onClick={()=> handleQuantityChange(quantity + 1)}
                  disabled={quantity >= maxQuantity}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-md border-2 focus:outline-none  cursor-pointer`}
                 
                  >
                   <FiPlus/>

                  </button> 
            </div>
          </div>
      </div>
     
    </div>
  );
};

export default ProductOptions;

// Helper function to get color values for common color names
function getColorValue(colorName: string): string | null {
  const colorMap: Record<string, string> = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#EF4444',
    blue: '#3B82F6',
    green: '#10B981',
    yellow: '#FBBF24',
    orange: '#F97316',
    purple: '#A855F7',
    pink: '#EC4899',
    gray: '#6B7280',
    grey: '#6B7280',
    navy: '#1E3A8A',
    brown: '#92400E',
    beige: '#F5F5DC',
    tan: '#D2B48C',
  };

  const normalized = colorName.toLowerCase().trim();
  return colorMap[normalized] || null;
}