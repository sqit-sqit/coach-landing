"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
}

/**
 * Rectangle 23814 - Product Image Container
 * Specified from Zeplin: 282px × 209.711px
 * Border radius: 12px
 * Used as image placeholder/container in product cards
 */
const ProductImage: React.FC<ProductImageProps> = ({ 
  src,
  alt,
  className,
  width = 282,
  height = 210, // 209.711 rounded to 210
  objectFit = 'cover',
  priority = false
}) => {
  return (
    <div className={cn(
      "w-full h-[209.71px] rounded-xl overflow-hidden flex-shrink-0",
      className
    )}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "w-full h-full object-cover",
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down'
        )}
        priority={priority}
      />
    </div>
  );
};

export { ProductImage };






