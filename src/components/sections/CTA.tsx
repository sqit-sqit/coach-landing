"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface CTAProps {
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen h-auto min-h-[462px] md:h-[462px] flex-none order-15 flex-grow-0 relative",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )} style={{
      background: 'linear-gradient(96.35deg, #FABB46 1.41%, #FBD346 98.37%)'
    }}>
      {/* Outer Container - 1440px */}
      <div className="relative w-full max-w-[1440px] mx-auto h-auto min-h-[462px] md:h-[462px]">
        {/* Frame 1261159571 - Content Container - 1110px */}
        <div className="relative w-full max-w-[1110px] mx-auto h-auto min-h-[462px] md:h-[462px] px-4 md:px-8 lg:px-0 pt-8 md:pt-[98px] pb-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0">
        {/* Frame 1261159526 - Text Container */}
        <div className="relative z-10 flex flex-col items-start gap-6 p-0 w-full max-w-[707px] h-auto flex-none order-0 flex-grow-0">
          {/* Heading */}
          <h2 className="w-full max-w-[707px] h-auto md:h-[44px] font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] text-[#333333]">
            {t('cta.title')}
          </h2>
          
          {/* Paragraph */}
          <p className="w-full max-w-[706.74px] h-auto md:h-[60px] font-montserrat font-semibold text-base md:text-lg lg:text-[22px] leading-relaxed md:leading-[30px] text-[#333333]">
            {t('cta.description')}
          </p>
          
          {/* Component 2 - Button */}
          <div className="mt-6">
            <Button
              variant="primary"
              size="big"
              state="default"
            >
              {t('cta.button')}
            </Button>
          </div>
        </div>
        </div>

        {/* Image - 37305706_8288823 1 - Positioned relative to 1440px container */}
        <div className="absolute right-0 w-full max-w-[857px] h-[300px] md:h-[498px] lg:h-[498px] overflow-hidden hidden lg:block -top-9 lg:-top-9" style={{ aspectRatio: '857 / 498' }}>
          <Image
            src="/girl_with_glasses_short.png"
            alt={t('cta.title')}
            fill
            sizes="(min-width: 1024px) 857px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export { CTA };