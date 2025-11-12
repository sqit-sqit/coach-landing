"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface GetStartedButtonProps {
  className?: string;
  href?: string;
  state?: 'default' | 'hover' | 'focused' | 'clicked' | 'disabled';
  children?: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
}

/**
 * Component 2 - Primary Button / Default / Big
 * Specified from Zeplin: 195px × 66px, green background (#3D7A74), white text
 * Font: Montserrat-SemiBold, 18px, line-height 18px
 * Border radius: 40px
 * Includes arrow icon on the right
 */
const GetStartedButton: React.FC<GetStartedButtonProps> = ({ 
  className, 
  href, 
  state = 'default',
  children = "Get started",
  onClick,
  showArrow = true
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-[18px] leading-[18px] text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const stateClasses = {
    default: 'bg-green-fark text-white hover:bg-green-hover',
    hover: 'bg-green-hover text-white',
    focused: 'bg-green-hover text-white focus-visible:ring-green-hover',
    clicked: 'bg-green-fark text-white active:bg-green-fark',
    disabled: 'bg-green-fark text-white opacity-20 cursor-not-allowed pointer-events-none',
  };

  // Arrow Right Icon - matching Zeplin specification
  const ArrowRightIcon = () => (
    <svg 
      className="w-[18px] h-[18px] flex-shrink-0" 
      viewBox="0 0 18 18" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M3 9H15M15 9L9 3M15 9L9 15" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const classes = cn(
    baseClasses,
    'w-[195px] h-[66px] px-[36px] py-[27px] rounded-[40px] whitespace-nowrap',
    stateClasses[state],
    className
  );

  const buttonContent = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRightIcon />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {buttonContent}
    </button>
  );
};

export { GetStartedButton };






