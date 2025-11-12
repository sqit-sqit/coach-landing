"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface ForCoachesTherapistsSystemicProps {
  className?: string;
}

const ForCoachesTherapistsSystemic: React.FC<ForCoachesTherapistsSystemicProps> = ({ className }) => {
  const { t, locale } = useTranslations();
  
  return (
    <section id="for-coaches-therapists" className={cn(
      "w-screen py-8 md:py-16 lg:py-24 bg-white",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Main Container (1110px) */}
      <div className="w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
        {/* Frame 1261159528 - Main Header Container */}
        <div className="flex flex-col items-center p-0 gap-[40px] w-full max-w-[613.67px] h-auto mx-auto">
          {/* Tag */}
          <div className="flex flex-row justify-center items-center px-6 py-[2px] gap-[10px] w-auto min-w-[310px] h-[42px] bg-[#FFF9EF] rounded-[30px]">
            <p className="w-auto h-[38px] font-montserrat font-medium text-[17px] leading-[38px] text-center uppercase text-[#D59724] whitespace-nowrap">
              {t('forCoachesTherapists.tag')}
            </p>
          </div>
          
          {/* Frame 335 - Header Content */}
          <div className="flex flex-col items-center p-0 gap-[18px] w-full max-w-[613.67px] h-auto">
            {/* Main Title */}
            <p className="w-full max-w-[782px] h-auto font-montserrat font-semibold text-xl md:text-2xl lg:text-[36px] leading-tight md:leading-[1.22] lg:leading-[44px] text-center text-[#333333]">
              {t('forCoachesTherapists.title')}
            </p>
          </div>
        </div>
      </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center relative">
        {/* Left Navigation Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-logo rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors z-10 hidden lg:flex">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Card 1 - Bogoban */}
        <div className="w-full max-w-[350px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[542px] flex flex-col justify-start items-stretch gap-6 p-4 md:p-6 lg:p-[34px] rounded-[20px] bg-[#fcf9f1]">
          {/* Image */}
          <div className="h-[150px] md:h-[180px] lg:h-[209.7px] self-stretch flex rounded-xl overflow-hidden">
            <Image
              src="/bogoban.png"
              alt="Bogoban"
              width={350}
              height={192}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Title */}
          <p className="h-18 self-stretch flex font-montserrat text-[28px] font-semibold leading-[1.29] text-center text-[#333] justify-center items-center">
            {t('forCoachesTherapists.cards.bogoban.title')}
          </p>

          {/* Description */}
          <p className="h-[119px] self-stretch flex font-montserrat text-base leading-[1.5] text-left text-[#333]">
            {t('forCoachesTherapists.cards.bogoban.description')}
          </p>

          {/* Button */}
          <Button variant="link" state="default" href={`/${locale}/bogoban`}>
            {t('forCoachesTherapists.learnMore')}
          </Button>
        </div>

        {/* Card 2 - Development Pyramid */}
        <div className="w-full max-w-[350px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[542px] flex flex-col justify-start items-stretch gap-6 p-4 md:p-6 lg:p-[34px] rounded-[20px] bg-[#fcf9f1]">
          {/* Image */}
          <div className="h-[150px] md:h-[180px] lg:h-[209.7px] self-stretch flex rounded-xl overflow-hidden">
            <Image
              src="/pyramid.png"
              alt="Development Pyramid"
              width={350}
              height={192}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Title */}
          <p className="h-18 self-stretch flex font-montserrat text-[28px] font-semibold leading-[1.29] text-center text-[#333] justify-center items-center">
            {t('forCoachesTherapists.cards.development.title')}
          </p>

          {/* Coming Soon */}
          <p className="h-[119px] self-stretch flex font-montserrat text-base leading-[1.5] text-center text-[#333] justify-center items-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FFF9EF] text-[#D59724] font-montserrat font-semibold">
              {t('forCoachesTherapists.cards.development.comingSoon')}
            </span>
          </p>

          {/* Button */}
          <Button variant="link" state="default" href="#">
            {t('forCoachesTherapists.learnMore')}
          </Button>
        </div>

          {/* Right Navigation Arrow */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-logo rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors z-10 hidden lg:flex">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export { ForCoachesTherapistsSystemic };
