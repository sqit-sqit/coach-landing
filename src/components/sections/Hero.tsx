"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen h-[598px] lg:h-[599px] flex flex-col lg:flex-row justify-between items-center bg-[#FCF9F1] relative z-20",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Main Container (1110px) */}
      <div className="w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0 h-full flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section - Content */}
        <div className="flex-1 flex flex-col justify-center items-start lg:w-[610px] lg:h-[599px] lg:py-[78px] lg:pl-0 lg:pr-[48px] h-full w-full lg:w-auto">
          {/* Container with gap */}
          <div className="w-full max-w-[513px] h-auto flex flex-col justify-start items-start gap-4 md:gap-15 lg:gap-[60px]">
            {/* Main Heading */}
            <h1 className="h-auto self-stretch flex font-montserrat text-2xl md:text-3xl lg:text-[48px] font-bold leading-[1.17] lg:leading-[56px] text-left text-[#333]">
              {t('hero.title')}
            </h1>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="big"
              state="default"
              className="lg:mb-0"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="flex-1 h-full flex items-center justify-center relative w-full lg:w-[704px] lg:h-[599px]">
        <div className="w-full max-w-[830px] h-[300px] md:h-[400px] lg:h-[598px] lg:w-[704px] rounded-[20px] bg-[#F8D749] relative overflow-hidden" style={{ aspectRatio: '830 / 598' }}>
          <Image
            src="/hero-illustration.png"
            alt={t('hero.title')}
            fill
            sizes="(min-width: 1024px) 704px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Pagination Indicators - Right side, larger */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-[120px] h-[24px] flex flex-row justify-start items-center gap-4 md:gap-6">
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-logo"></div>
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-[#333]"></div>
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-[#333]"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export { Hero };
