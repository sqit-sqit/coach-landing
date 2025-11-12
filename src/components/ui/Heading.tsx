"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

/**
 * Heading Component
 * Specified from Zeplin: 513px × 225px (Hero heading)
 * Font: Montserrat-Bold, 48px, line-height 56px, weight 700
 * Color: #333333 (text-grey-text)
 * Text align: left
 */
const Heading: React.FC<HeadingProps> = ({ 
  children, 
  className,
  align = 'left',
  variant = 'h1',
  size = 'xl'
}) => {
  const baseClasses = 'font-montserrat font-bold text-grey-text';
  
  const sizeClasses = {
    xl: 'text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[56px]', // Hero heading
    lg: 'text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px]', // Section heading
    md: 'text-xl md:text-2xl lg:text-[28px] leading-tight md:leading-[36px]', // Card heading
    sm: 'text-lg md:text-xl lg:text-[24px] leading-tight md:leading-[32px]', // Small heading
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    alignClasses[align],
    className
  );

  const Tag = variant;

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
};

export { Heading };






