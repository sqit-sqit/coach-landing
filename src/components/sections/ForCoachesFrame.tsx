"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface ForCoachesFrameProps {
  className?: string;
}

/**
 * Frame 1261159529 - For Coaches & Therapists Section
 * Specified from Zeplin: 1111px × 770px container
 * Contains header with tag and title, plus three product cards
 */
const ForCoachesFrame: React.FC<ForCoachesFrameProps> = ({ className }) => {
  const { t, locale } = useTranslations();
  
  return (
    <div className={cn(
      "w-full max-w-[1111px] mx-auto flex flex-col",
      className
    )}>
      {/* Frame 1261159528 - Header Section (613.67px × 178px) */}
      <div className="w-full flex flex-col items-center mb-8 md:mb-12 lg:mb-[50px]">
        {/* Tag - "For Coaches & Therapists" */}
        <div className="w-full max-w-[310px] h-[42px] flex items-center justify-center px-6 py-2 rounded-[30px] bg-[#FFF9EF] mb-10">
          <span className="font-montserrat font-medium text-[17px] leading-[38px] text-[#D59724] text-center">
            {t('forCoachesTherapists.tag')}
          </span>
        </div>

        {/* Frame 335 - Title and Subtitle */}
        <div className="w-full max-w-[613.67px] flex flex-col items-center gap-0">
          {/* Heading */}
          <h2 className="w-full font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] text-center text-grey-text mb-4 md:mb-6">
            {t('forCoachesTherapists.title')}
          </h2>
          {/* Paragraph */}
          <p className="w-full font-montserrat font-medium text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] text-center text-grey-text">
            {t('forCoachesTherapists.subtitle') || t('forWhom.subtitle')}
          </p>
        </div>
      </div>

      {/* Frame 1261159517 - Cards Container (1111px × 542px) */}
      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[31px]">
        {/* Card 1 - Systemic Constellations (350px × 542px) */}
        <div className="w-full lg:w-[350px] lg:h-[542px] flex flex-col rounded-[20px] bg-[#FCF9F1] p-[34px]">
          {/* Frame 1261159524 - Content Container */}
          <div className="w-full flex flex-col flex-1">
            {/* Frame 1261159523 - Image, Title, Description */}
            <div className="w-full flex flex-col mb-[42px]">
              {/* Rectangle 23814 - Image (282px × 209.71px) */}
              <div className="w-full h-[209.71px] rounded-xl mb-[16px] overflow-hidden flex-shrink-0">
                <Image
                  src="/constellation.png"
                  alt="Systemic Constellations"
                  width={282}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading (282px × 72px) */}
              <h3 className="w-full h-auto min-h-[72px] font-montserrat font-semibold text-[28px] leading-[36px] text-center text-grey-text mb-[16px]">
                {t('forCoachesTherapists.cards.systemic.title')}
              </h3>

              {/* Paragraph (282px × 119px) */}
              <p className="w-full h-auto min-h-[119px] font-montserrat font-normal text-base leading-[24px] text-left text-grey-text">
                {t('forCoachesTherapists.cards.systemic.description')}
              </p>
            </div>

            {/* Button/Link - Learn more (132px × 18px) */}
            <div className="mt-auto">
              <Button variant="link" state="default" href={`/${locale}/systemic-constellations`}>
                {t('forCoachesTherapists.learnMore')}
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2 - Bogoban (350px × 542px) */}
        <div className="w-full lg:w-[350px] lg:h-[542px] flex flex-col rounded-[20px] bg-[#FCF9F1] p-[34px]">
          {/* Frame 1261159524 - Content Container */}
          <div className="w-full flex flex-col flex-1">
            {/* Frame 1261159523 - Image, Title, Description */}
            <div className="w-full flex flex-col mb-[42px]">
              {/* Rectangle 23814 - Image (282px × 209.71px) */}
              <div className="w-full h-[209.71px] rounded-xl mb-[16px] overflow-hidden flex-shrink-0">
                <Image
                  src="/bogoban.png"
                  alt="Bogoban"
                  width={282}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading (282px × 72px) */}
              <h3 className="w-full h-auto min-h-[72px] font-montserrat font-semibold text-[28px] leading-[36px] text-center text-grey-text mb-[16px]">
                {t('forCoachesTherapists.cards.bogoban.title')}
              </h3>

              {/* Paragraph (282px × 119px) */}
              <p className="w-full h-auto min-h-[119px] font-montserrat font-normal text-base leading-[24px] text-left text-grey-text">
                {t('forCoachesTherapists.cards.bogoban.description')}
              </p>
            </div>

            {/* Button/Link - Learn more (132px × 18px) */}
            <div className="mt-auto">
              <Button variant="link" state="default" href={`/${locale}/bogoban`}>
                {t('forCoachesTherapists.learnMore')}
              </Button>
            </div>
          </div>
        </div>

        {/* Card 3 - Development Pyramid (350px × 542px) */}
        <div className="w-full lg:w-[350px] lg:h-[542px] flex flex-col rounded-[20px] bg-[#FCF9F1] p-[34px]">
          {/* Frame 1261159524 - Content Container */}
          <div className="w-full flex flex-col flex-1">
            {/* Frame 1261159523 - Image, Title, Description */}
            <div className="w-full flex flex-col mb-[42px]">
              {/* Rectangle 23814 - Image (282px × 209.71px) */}
              <div className="w-full h-[209.71px] rounded-xl mb-[16px] overflow-hidden flex-shrink-0">
                <Image
                  src="/pyramid.png"
                  alt="Development Pyramid"
                  width={282}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading (282px × 72px) */}
              <h3 className="w-full h-auto min-h-[72px] font-montserrat font-semibold text-[28px] leading-[36px] text-center text-grey-text mb-[16px]">
                {t('forCoachesTherapists.cards.development.title')}
              </h3>

              {/* Paragraph (282px × 119px) */}
              <p className="w-full h-auto min-h-[119px] font-montserrat font-normal text-base leading-[24px] text-left text-grey-text">
                {t('forCoachesTherapists.cards.development.description') || 'A structured model of personal and team development, where each level builds a foundation for the next, ensuring sustainable growth and skills.'}
              </p>
            </div>

            {/* Button/Link - Learn more (132px × 18px) */}
            <div className="mt-auto">
              <Button variant="link" state="default">
                {t('forCoachesTherapists.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForCoachesFrame };






