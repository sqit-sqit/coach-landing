"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface PhilosophyMainProps {
  className?: string;
}

const PhilosophyMain: React.FC<PhilosophyMainProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section id="philosophy" className={cn(
      "w-screen py-8 md:py-16 lg:py-20 bg-green-fark relative overflow-hidden",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Background Image */}
      <div className="absolute top-4 md:top-8 right-0 w-auto h-[calc(100%-1rem)] md:h-[calc(100%-2rem)] lg:right-[calc((100vw-1440px)/2)]">
        <Image
          src="/logo_background.png"
          alt="Logo Background"
          width={300}
          height={300}
          className="h-full w-auto object-contain opacity-60 md:opacity-80 max-w-[200px] md:max-w-[300px]"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1110px] h-auto flex flex-col lg:flex-row justify-start items-start gap-4 md:gap-8 lg:gap-[81px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Left Side - Philosophy Title */}
        <div className="w-full lg:w-auto">
          <p className="w-full lg:w-[207px] h-auto lg:h-11 flex font-montserrat text-xl md:text-2xl lg:text-4xl font-semibold leading-[1.22] text-left text-[#fff]">
            {t('philosophy.title')}
          </p>
        </div>

        {/* Right Side - Mission Text */}
        <div className="w-full lg:w-auto">
          <p className="w-full lg:w-[822px] h-auto lg:h-27 flex font-montserrat text-sm md:text-base lg:text-[28px] font-medium leading-[1.3] md:leading-[1.3] lg:leading-[36px] text-left text-[#fff]">
            {t('philosophy.mission')}
          </p>
        </div>
      </div>
    </section>
  );
};

export { PhilosophyMain };

