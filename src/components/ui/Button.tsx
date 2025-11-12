import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'big' | 'small';
  state?: 'default' | 'hover' | 'focused' | 'clicked' | 'disabled';
  href?: string;
  asChild?: boolean;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', state = 'default', href, asChild, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-montserrat font-semibold text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none';

    // Nowe stany dla przycisku Primary Big
    const getPrimaryBigClasses = (currentState: string) => {
      const base = 'flex flex-row justify-center items-center gap-2 w-[195px] h-[66px] px-[36px] py-[27px] rounded-[40px] whitespace-nowrap';
      
      switch (currentState) {
        case 'default':
          return `${base} bg-green-fark text-white hover:bg-green-hover transition-colors duration-200`;
        case 'hover':
          return `${base} bg-green-hover text-white hover:bg-green-hover transition-colors duration-200`;
        case 'focused':
          return `${base} bg-green-hover text-white focus:bg-green-hover focus-visible:ring-green-hover transition-colors duration-200`;
        case 'clicked':
          return `${base} bg-green-fark text-white active:bg-green-fark transition-colors duration-200`;
        case 'disabled':
          return `${base} bg-green-fark text-white opacity-20 cursor-not-allowed`;
        default:
          return `${base} bg-green-fark text-white hover:bg-green-hover transition-colors duration-200`;
      }
    };

    // Nowe stany dla przycisku Primary Small
    const getPrimarySmallClasses = (currentState: string) => {
      const base = 'flex flex-row justify-center items-center gap-2 w-[160px] h-[54px] px-[36px] py-[27px] rounded-[40px] whitespace-nowrap';
      
      switch (currentState) {
        case 'default':
          return `${base} bg-green-fark text-white hover:bg-green-hover transition-colors duration-200`;
        case 'hover':
          return `${base} bg-green-hover text-white hover:bg-green-hover transition-colors duration-200`;
        case 'focused':
          return `${base} bg-green-hover text-white focus:bg-green-hover focus-visible:ring-green-hover transition-colors duration-200`;
        case 'clicked':
          return `${base} bg-green-fark text-white active:bg-green-fark transition-colors duration-200`;
        case 'disabled':
          return `${base} bg-green-hover text-white opacity-20 cursor-not-allowed`;
        default:
          return `${base} bg-green-fark text-white hover:bg-green-hover transition-colors duration-200`;
      }
    };

    // Nowe stany dla przycisku Secondary Big (biały przycisk)
    const getSecondaryBigClasses = (currentState: string) => {
      const base = 'flex flex-row justify-center items-center gap-2 w-[203px] h-[66px] px-[36px] py-[24px] rounded-[40px] whitespace-nowrap border';
      
      switch (currentState) {
        case 'default':
          return `${base} bg-white text-green-fark border-grey hover:bg-green-hover hover:text-white transition-colors duration-200`;
        case 'hover':
          return `${base} bg-green-hover text-white border-green-hover hover:bg-green-hover transition-colors duration-200`;
        case 'focused':
          return `${base} bg-green-hover text-white border-green-hover focus:bg-green-hover focus-visible:ring-green-hover transition-colors duration-200`;
        case 'clicked':
          return `${base} bg-white text-green-fark border-grey active:bg-white transition-colors duration-200`;
        case 'disabled':
          return `${base} bg-green-hover text-white border-green-hover opacity-20 cursor-not-allowed`;
        default:
          return `${base} bg-white text-green-fark border-grey hover:bg-green-hover hover:text-white transition-colors duration-200`;
      }
    };

    // Nowe stany dla przycisku Secondary Small (biały przycisk)
    const getSecondarySmallClasses = (currentState: string) => {
      const base = 'flex flex-row justify-center items-center gap-2 w-[160px] h-[54px] px-[36px] py-[24px] rounded-[40px] whitespace-nowrap border';
      
      switch (currentState) {
        case 'default':
          return `${base} bg-white text-green-fark border-grey hover:bg-green-hover hover:text-white transition-colors duration-200`;
        case 'hover':
          return `${base} bg-green-hover text-white border-green-hover hover:bg-green-hover transition-colors duration-200`;
        case 'focused':
          return `${base} bg-green-hover text-white border-green-hover focus:bg-green-hover focus-visible:ring-green-hover transition-colors duration-200`;
        case 'clicked':
          return `${base} bg-white text-green-fark border-grey active:bg-white transition-colors duration-200`;
        case 'disabled':
          return `${base} bg-green-hover text-white border-green-hover opacity-20 cursor-not-allowed`;
        default:
          return `${base} bg-white text-green-fark border-grey hover:bg-green-hover hover:text-white transition-colors duration-200`;
      }
    };

    // Nowe stany dla przycisku Link (Learn more)
    const getLinkClasses = (currentState: string) => {
      const base = 'flex flex-row items-center gap-2 min-w-[132px] min-h-[44px] px-3 py-3 font-montserrat font-medium text-[18px] leading-[18px] text-center transition-colors duration-200';
      
      switch (currentState) {
        case 'default':
          return `${base} text-grey-text hover:text-green-fark transition-colors duration-200`;
        case 'hover':
          return `${base} text-green-fark hover:text-green-fark transition-colors duration-200`;
        case 'disabled':
          return `${base} text-grey-text cursor-not-allowed opacity-30`;
        default:
          return `${base} text-grey-text hover:text-green-fark transition-colors duration-200`;
      }
    };

    const variantClasses = {
      primary: size === 'big' 
        ? getPrimaryBigClasses(state)
        : size === 'small'
        ? getPrimarySmallClasses(state)
        : 'bg-green-fark text-white hover:bg-green-dark focus-visible:ring-green-fark font-semibold text-lg leading-[18px]',
      secondary: size === 'big'
        ? getSecondaryBigClasses(state)
        : size === 'small'
        ? getSecondarySmallClasses(state)
        : 'bg-white border border-light-grey text-[#333333] hover:bg-gray-100 focus-visible:ring-light-grey font-semibold text-lg leading-[18px]',
      outline: 'border border-white/20 text-white hover:bg-white/10 focus-visible:ring-white/50',
      link: getLinkClasses(state),
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      big: variant === 'secondary' 
        ? 'w-[203px] h-[66px] px-[36px] py-[24px] text-[18px] leading-[18px]' // Specyfikacja dla Secondary Big
        : 'w-[195px] h-[66px] px-[36px] py-[27px] text-[18px] leading-[18px]', // Specyfikacja dla Primary Big
      small: 'w-[160px] h-[54px] px-[36px] py-[27px] text-[18px] leading-[18px]', // Specyfikacja dla Small
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    // Arrow Right Icon dla Big size
    const ArrowRightIcon = () => (
      <svg className="w-[18px] h-[18px] flex-none order-3 flex-grow-0" viewBox="0 0 18 18" fill="none">
        <path 
          d="M3 9H15M15 9L9 3M15 9L9 15" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );

    const buttonContent = (
      <>
        <span className={size === 'big' || variant === 'link' ? 'whitespace-nowrap' : ''}>{children}</span>
        {(size === 'big' || variant === 'link') && <ArrowRightIcon />}
      </>
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: classes,
        ...(props as any)
      });
    }

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };