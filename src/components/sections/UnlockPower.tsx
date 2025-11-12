"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface UnlockPowerProps {
  className?: string;
}

const UnlockPower: React.FC<UnlockPowerProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen py-16 md:py-20 lg:h-[439px] bg-white relative flex items-center justify-center",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Main Frame */}
      <div className="w-full max-w-[1111px] h-auto lg:h-[288px] mx-auto rounded-[20px] flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-[60px] py-8 md:py-12 lg:py-0 gap-6 md:gap-8 lg:gap-[100px] z-10 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Unlock_power_of_coaching.png"
            alt="Unlock Power of Coaching Background"
            fill
            className="object-cover rounded-[20px]"
            sizes="(min-width: 1024px) 1111px, 100vw"
          />
        </div>
        
        {/* Left Side - Text Content */}
        <div className="relative z-10 flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full lg:w-[991px] lg:h-[128px] lg:flex-1">
          {/* Heading */}
          <h2 className="w-full lg:w-[564px] h-auto lg:h-[44px] font-montserrat font-semibold text-xl md:text-2xl lg:text-[36px] leading-tight md:leading-[44px] text-center lg:text-left text-[#333333]">
            {t('unlockPower.title')}
          </h2>
          
          {/* Paragraph */}
          <p className="w-full lg:w-[706.74px] h-auto lg:h-[60px] font-montserrat font-semibold text-sm md:text-base lg:text-[22px] leading-relaxed md:leading-[30px] text-center lg:text-left text-[#333333]">
            {t('unlockPower.description')}
          </p>
        </div>
        
        {/* Right Side - CTA Button */}
        <div className="relative z-10 flex-shrink-0">
          <Button
            variant="primary"
            size="big"
            state="default"
          >
            {t('unlockPower.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export { UnlockPower };
