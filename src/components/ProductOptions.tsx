"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";

interface ProductOptionsProps {
  product: Product;
  onSelectionChange?: (selections: {
    color?: string;
    size?: string;
    quantity?: number;
  }) => void;
}

const ProductOptions = ({ product, onSelectionChange }: ProductOptionsProps) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors?.[0]
  );

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );

  const [quantity, setQuantity] = useState<number>(1);

  const maxQuantity = product.stock ?? 99;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onSelectionChange?.({ color });
  };

  return (
    <div>
      <p>Product Options</p>
    </div>
  );
};

export default ProductOptions;
