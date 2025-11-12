"use client";

import React from 'react';
import Image from 'next/image';
import { Button, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface ForWhomProps {
  className?: string;
}

const ForWhom: React.FC<ForWhomProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen py-24 md:py-16 lg:py-24 bg-white",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Frame 1261159518 - Main Container (1110px × 564px) */}
      <div className="w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0 flex flex-col gap-8 md:gap-12 lg:gap-[50px]">
        {/* Frame 335 / Frame 1261159527 - Header Section (613.67px × 96px) */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[613.67px] flex flex-col items-center gap-0">
            {/* Heading (44px height) */}
            <h2 className="w-full font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] text-center text-grey-text mb-4 md:mb-6 lg:mb-0 lg:h-[44px]">
              {t('forWhom.title')}
            </h2>
            {/* Paragraph (34px height, 62px from heading top = 18px gap) */}
            <p className="w-full font-montserrat font-medium text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] lg:leading-[34px] text-center text-grey-text lg:mt-[18px] lg:h-[34px]">
              {t('forWhom.subtitle')}
            </p>
          </div>
        </div>

        {/* Frame 1261159517 - Cards Container (1110px × 418px) */}
        <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[31px] justify-center items-stretch">
          {/* Frame 1261159515 - Left Card (540px × 418px) */}
          <div className="w-full lg:w-[540px] h-auto min-h-[300px] md:min-h-[350px] lg:h-[418px] bg-[#b9daed] rounded-[20px] p-4 md:p-6 lg:p-[34px] flex flex-col">
            {/* Icon (60px × 60px, at y:40) */}
            <div className="w-[60px] h-[60px] mb-4 md:mb-6 lg:mb-[25px] flex items-center justify-center flex-shrink-0">
              <Image
                src="/icon-coaches.svg"
                alt={t('forWhom.coaches.title')}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Title (36px height, at y:125) */}
            <h3 className="font-montserrat text-xl md:text-2xl lg:text-[28px] font-semibold leading-[36px] text-grey-text mb-3 md:mb-4 flex-shrink-0">
              {t('forWhom.coaches.title')}
            </h3>

            {/* Description (flex-grow to fill remaining space) */}
            <p className="font-montserrat text-sm md:text-base lg:text-[18px] font-normal leading-[27px] text-grey-text flex-grow">
              {t('forWhom.coaches.description')}
            </p>
          </div>

          {/* Frame 1261159516 - Right Card (539px × 418px) */}
          <div className="w-full lg:w-[539px] h-auto min-h-[300px] md:min-h-[350px] lg:h-[418px] bg-[#fcf9f1] rounded-[20px] p-4 md:p-6 lg:p-[34px] flex flex-col">
            {/* Icon (60px × 60px, at y:40) */}
            <div className="w-[60px] h-[60px] mb-4 md:mb-6 lg:mb-[25px] flex items-center justify-center flex-shrink-0">
              <Image
                src="/icon-for-youself.svg"
                alt={t('forWhom.yourself.title')}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Title (36px height, at y:125) */}
            <h3 className="font-montserrat text-xl md:text-2xl lg:text-[28px] font-semibold leading-[36px] text-grey-text mb-3 md:mb-4 flex-shrink-0">
              {t('forWhom.yourself.title')}
            </h3>

            {/* Description (108px height) */}
            <p className="font-montserrat text-sm md:text-base lg:text-[18px] font-normal leading-[27px] text-grey-text mb-4 md:mb-6 flex-grow">
              {t('forWhom.yourself.description')}
            </p>

            {/* Button (66px height, at y:319) */}
            <div className="mt-auto flex-shrink-0">
              <Button
                variant="secondary"
                size="big"
                state="default"
              >
                {t('forWhom.yourself.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ForWhom };
