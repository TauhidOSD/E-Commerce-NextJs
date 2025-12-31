import React from 'react'

interface ProductImageProps {
    src:string;
    alt:string;
    width:number;
    height:number;
    className?:string;
    fallbackText?:string;
}

const ProductImage = ({src,alt, width,height, className,fallbackText}) => {
  return (
    <div>ProductImage</div>
  )
}

export default ProductImage