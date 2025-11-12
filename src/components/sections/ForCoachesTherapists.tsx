"use client";

import React from 'react';
import Image from 'next/image';
import { Button, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface ForCoachesTherapistsProps {
  className?: string;
}

const ForCoachesTherapists: React.FC<ForCoachesTherapistsProps> = ({ className }) => {
  const { t, locale } = useTranslations();
  
  return (
    <section id="for-coaches-therapists" className={cn(
      "w-screen py-24 md:py-16 lg:py-24 bg-white",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Section Header */}
      <div className="w-full max-w-[1110px] mx-auto text-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-8 lg:px-0 flex justify-center">
        <SectionHeader 
          tag={t('forCoachesTherapists.tag')}
          title={t('forCoachesTherapists.title')}
          tagBgColor="#FFF9EF"
          tagTextColor="#D59724"
        />
      </div>

      {/* Cards Container - Outer container 1310px for navigation arrows (1110px + 100px on each side) */}
      <div className="w-full max-w-[1310px] mx-auto px-4 md:px-8 lg:px-0 relative">
        {/* Left Navigation Arrow - 100px from 1110px container */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-logo rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors z-10 hidden lg:flex">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container - Inner 1110px */}
        <div className="w-full max-w-[1110px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
            {/* Card 1 - Systemic Constellations */}
            <div className="w-full max-w-[350px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[542px] flex flex-col justify-start items-stretch gap-6 p-4 md:p-6 lg:p-[34px] rounded-[20px] bg-[#fcf9f1]">
          {/* Image */}
          <div className="h-[150px] md:h-[180px] lg:h-[209.7px] self-stretch flex rounded-xl flex-shrink-0 overflow-hidden">
            <Image
              src="/constellation.png"
              alt={t('forCoachesTherapists.cards.systemic.title')}
              width={350}
              height={192}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Title */}
          <p className="h-auto min-h-[36px] md:min-h-[40px] lg:min-h-[44px] self-stretch flex font-montserrat text-lg md:text-xl lg:text-[28px] font-semibold leading-tight md:leading-[1.29] text-center text-[#333] justify-center items-center flex-shrink-0">
            {t('forCoachesTherapists.cards.systemic.title')}
          </p>

          {/* Description */}
          <p className="flex-grow flex items-start font-montserrat text-base leading-[1.5] text-left text-[#333]">
            {t('forCoachesTherapists.cards.systemic.description')}
          </p>

          {/* Button */}
          <div className="flex-shrink-0">
            <Button variant="link" state="default" href={`/${locale}/systemic-constellations`}>
              {t('forCoachesTherapists.learnMore')}
            </Button>
          </div>
        </div>

        {/* Card 2 - Bogoban */}
        <div className="w-full max-w-[350px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[542px] flex flex-col justify-start items-stretch gap-6 p-4 md:p-6 lg:p-[34px] rounded-[20px] bg-[#fcf9f1]">
          {/* Image */}
          <div className="h-[150px] md:h-[180px] lg:h-[209.7px] self-stretch flex rounded-xl flex-shrink-0 overflow-hidden">
            <Image
              src="/bogoban.png"
              alt={t('forCoachesTherapists.cards.bogoban.title')}
              width={350}
              height={192}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Title */}
          <p className="h-auto min-h-[36px] md:min-h-[40px] lg:min-h-[44px] self-stretch flex font-montserrat text-lg md:text-xl lg:text-[28px] font-semibold leading-tight md:leading-[1.29] text-center text-[#333] justify-center items-center flex-shrink-0">
            {t('forCoachesTherapists.cards.bogoban.title')}
          </p>

          {/* Description */}
          <p className="flex-grow flex items-start font-montserrat text-base leading-[1.5] text-left text-[#333]">
            {t('forCoachesTherapists.cards.bogoban.description')}
          </p>

          {/* Button */}
          <div className="flex-shrink-0">
            <Button variant="link" state="default" href={`/${locale}/bogoban`}>
              {t('forCoachesTherapists.learnMore')}
            </Button>
          </div>
        </div>

        {/* Card 3 - Development Pyramid */}
        <div className="w-full max-w-[350px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[542px] flex flex-col justify-start items-stretch gap-6 p-4 md:p-6 lg:p-[34px] rounded-[20px] bg-[#fcf9f1]">
          {/* Image */}
          <div className="h-[150px] md:h-[180px] lg:h-[209.7px] self-stretch flex rounded-xl flex-shrink-0 overflow-hidden">
            <Image
              src="/pyramid.png"
              alt={t('forCoachesTherapists.cards.development.title')}
              width={350}
              height={192}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Title */}
          <p className="h-auto min-h-[36px] md:min-h-[40px] lg:min-h-[44px] self-stretch flex font-montserrat text-lg md:text-xl lg:text-[28px] font-semibold leading-tight md:leading-[1.29] text-center text-[#333] justify-center items-center flex-shrink-0">
            {t('forCoachesTherapists.cards.development.title')}
          </p>

          {/* Coming Soon */}
          <div className="flex-grow flex items-center justify-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FFF9EF] text-[#D59724] font-montserrat font-semibold">
              {t('forCoachesTherapists.cards.development.comingSoon')}
            </span>
          </div>

          {/* Button */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Button variant="link" state="default">
              {t('forCoachesTherapists.learnMore')}
            </Button>
          </div>
            </div>
          </div>
        </div>

        {/* Right Navigation Arrow - 100px from 1110px container */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors z-10 hidden lg:flex">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export { ForCoachesTherapists };
