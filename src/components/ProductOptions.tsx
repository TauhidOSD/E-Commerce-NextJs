"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";
import { Span } from "next/dist/trace";

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
    product.colors?.[0] || null
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
      {
        product.colors && product.colors.length > 0 && (
          <div>
            <div className="flex items-center justify-start mb-4">
              <label className="block text-base font-semibold to-gray-900 mr-2">color</label>
              {
                selectedColor && (<span className="text-sm font-medium text-gray-600">({selectedColor})</span>)
              }
            </div>
          </div>
        )
      }
     
    </div>
  );
};

export default ProductOptions;
