"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface SignUpButtonProps {
  className?: string;
  href?: string;
  state?: 'default' | 'hover' | 'focused' | 'clicked' | 'disabled';
  children?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Component 3 - Primary Button / Default / Small
 * Specified from Zeplin: 126px × 54px, green background (#3D7A74), white text
 * Font: Montserrat-SemiBold, 18px, line-height 18px
 * Border radius: 40px
 */
const SignUpButton: React.FC<SignUpButtonProps> = ({ 
  className, 
  href, 
  state = 'default',
  children = "Sign Up",
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-montserrat font-semibold text-[18px] leading-[18px] text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const stateClasses = {
    default: 'bg-green-fark text-white hover:bg-green-hover',
    hover: 'bg-green-hover text-white',
    focused: 'bg-green-hover text-white focus-visible:ring-green-hover',
    clicked: 'bg-green-fark text-white active:bg-green-fark',
    disabled: 'bg-green-fark text-white opacity-20 cursor-not-allowed pointer-events-none',
  };

  const classes = cn(
    baseClasses,
    'w-[126px] h-[54px] rounded-[40px] whitespace-nowrap',
    stateClasses[state],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {children}
    </button>
  );
};

export { SignUpButton };






