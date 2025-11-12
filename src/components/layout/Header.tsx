"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui';
import { NavigationSections } from './NavigationSections';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';
import { locales, Locale } from '@/lib/i18n';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale } = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const switchLanguage = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={cn(
      "w-screen h-[102px] flex items-center justify-center bg-white",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      "border-b-0",
      className
    )}>
      {/* Header Content Container - Frame 407 (1110px × 54px) */}
      <div className="w-full max-w-[1110px] h-[54px] flex flex-row justify-between items-center px-4 md:px-8 lg:px-0 mx-auto">
        {/* NavigationSections Component - Contains logo, navigation links, and language selector */}
        <div className="hidden md:flex">
          <NavigationSections />
        </div>
        
        {/* Mobile Logo */}
        <div className="md:hidden flex items-center">
          <a href={`/${locale}`} className="w-[150px] h-[50px] relative block">
            <Image
              src="/logo150x50.png"
              alt="FlowXR Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </a>
        </div>

        {/* Auth Buttons Group - Frame 1261159624 (276px × 54px) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login Button */}
          <Button variant="secondary" size="small" state="default" href={`/${locale}/auth/login`}>
            {t('navigation.login')}
          </Button>

          {/* Sign Up Button */}
          <Button variant="primary" size="small" state="default" href={`/${locale}/auth/signup`}>
            {t('navigation.signUp')}
          </Button>
        </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="min-w-[44px] min-h-[44px] p-3 transition-colors duration-200 hover:bg-gray-100 rounded-md flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 animate-in fade-in duration-300" onClick={toggleMobileMenu}>
          <div 
            className="absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out animate-in slide-in-from-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Content */}
            <div className="p-6 pt-20">
              {/* Close Button */}
              <button 
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] p-3 hover:bg-gray-100 rounded-md transition-colors flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

                  {/* Navigation Links */}
                  <nav className="space-y-6 mb-8">
                    <a
                      href={`/${locale}`}
                      className="block text-lg font-montserrat font-normal text-grey-text hover:text-green-fark transition-colors py-2"
                      onClick={toggleMobileMenu}
                    >
                      {t('navigation.home')}
                    </a>
                    <a
                      href={`/${locale}#for-coaches-therapists`}
                      className="block text-lg font-montserrat font-normal text-grey-text hover:text-green-fark transition-colors py-2"
                      onClick={toggleMobileMenu}
                    >
                      {t('navigation.forCoaches')}
                    </a>
                    <a
                      href={`/${locale}#for-yourself`}
                      className="block text-lg font-montserrat font-normal text-grey-text hover:text-green-fark transition-colors py-2"
                      onClick={toggleMobileMenu}
                    >
                      {t('navigation.forYourself')}
                    </a>
                    <a
                      href={`/${locale}#contact`}
                      className="block text-lg font-montserrat font-normal text-grey-text hover:text-green-fark transition-colors py-2"
                      onClick={toggleMobileMenu}
                    >
                      {t('navigation.contact')}
                    </a>
                  </nav>

              {/* Language Selector */}
              <div className="mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <Image
                      src="/globe.svg"
                      alt="Language"
                      width={24}
                      height={24}
                    />
                    <span className="text-lg font-montserrat font-normal text-grey-text">
                      {locale.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Language Options */}
                  <div className="space-y-2">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLanguage(loc)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors ${
                          loc === locale 
                            ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                            : 'text-gray-700 hover:bg-gray-50'
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
                </div>
              </div>

                  {/* Auth Buttons */}
                  <div className="space-y-4">
                    <Button
                      variant="secondary"
                      size="small"
                      state="default"
                      className="w-full"
                      href={`/${locale}/auth/login`}
                    >
                      {t('navigation.login')}
                    </Button>
                    <Button
                      variant="primary"
                      size="small"
                      state="default"
                      className="w-full"
                      href={`/${locale}/auth/signup`}
                    >
                      {t('navigation.signUp')}
                    </Button>
                  </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export { Header };