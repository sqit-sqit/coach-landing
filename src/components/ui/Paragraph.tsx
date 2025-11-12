"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'large' | 'small';
}

/**
 * Paragraph Component
 * Specified from Zeplin: 613.671px × 34px
 * Font: Montserrat-Medium, 26px, line-height 34px, weight 500
 * Color: #333333 (text-grey-text)
 * Text align: center
 */
const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  className,
  align = 'center',
  variant = 'default'
}) => {
  const baseClasses = 'font-montserrat text-grey-text';
  
  const variantClasses = {
    default: 'text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] font-medium',
    large: 'text-xl md:text-2xl lg:text-[32px] leading-relaxed md:leading-[40px] font-medium',
    small: 'text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-[28px] font-medium',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    alignClasses[align],
    className
  );

  return (
    <p className={classes}>
      {children}
    </p>
  );
};

export { Paragraph };






