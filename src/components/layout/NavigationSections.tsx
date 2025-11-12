"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { locales, Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface NavigationSectionsProps {
  className?: string;
  onLanguageChange?: () => void;
}

const NavigationSections: React.FC<NavigationSectionsProps> = ({ className, onLanguageChange }) => {
  const { t, locale } = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const switchLanguage = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsLanguageMenuOpen(false);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  // Handle escape key and click outside
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isLanguageMenuOpen) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('.language-selector')) {
          setIsLanguageMenuOpen(false);
        }
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  return (
    <div className={cn(
      "w-full max-w-[811.667px] h-[50px] flex items-center",
      className
    )}>
      {/* Logo 150x50 */}
      <a href={`/${locale}`} className="w-[150px] h-[50px] relative flex-shrink-0">
        <Image
          src="/logo150x50.png"
          alt="FlowXR Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </a>

      {/* Link List - For coaches & therapists + For Yourself - positioned at x:254 (80px gap from Home, but 24px actual spacing) */}
      <div className="ml-6 flex items-center space-x-6">
        <a 
          href={`/${locale}#for-coaches-therapists`} 
          className="w-auto h-[18px] font-montserrat font-normal text-lg text-grey-text hover:text-green-fark transition-colors leading-[18px] text-center whitespace-nowrap"
        >
          {t('navigation.forCoaches')}
        </a>
        <a 
          href={`/${locale}#for-yourself`} 
          className="w-auto h-[18px] font-montserrat font-normal text-lg text-grey-text hover:text-green-fark transition-colors leading-[18px] text-center whitespace-nowrap"
        >
          {t('navigation.forYourself')}
        </a>
      </div>

      {/* Contact Link - positioned at x:633 (379px gap, but 24px actual spacing) */}
      <a 
        href={`/${locale}#contact`} 
        className="ml-6 w-auto h-[18px] font-montserrat font-normal text-lg text-grey-text hover:text-green-fark transition-colors leading-[18px] text-center whitespace-nowrap"
      >
        {t('navigation.contact')}
      </a>

      {/* Language Selector - positioned at x:729 (96px gap from Contact, but 24px actual spacing) */}
      <div className="ml-6 relative language-selector">
        <button
          onClick={toggleLanguageMenu}
          className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-1 rounded-md transition-colors"
          aria-label="Select language"
        >
          <Image
            src="/globe.svg"
            alt="Language"
            width={24}
            height={24}
            className="flex-shrink-0"
          />
          <span className="w-auto h-[18px] font-montserrat font-normal text-lg text-grey-text leading-[18px] text-center">
            {locale.toUpperCase()}
          </span>
          <svg 
            width="12" 
            height="6" 
            viewBox="0 0 12 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 flex-shrink-0 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
          >
            <path d="M1 1L6 5L11 1" stroke="#333333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Language Dropdown */}
        {isLanguageMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLanguage(loc)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  loc === locale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="font-montserrat font-medium">{loc.toUpperCase()}</span>
                {loc === locale && (
                  <svg className="ml-auto w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { NavigationSections };

