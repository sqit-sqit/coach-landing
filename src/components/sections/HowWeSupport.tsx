"use client";

import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface HowWeSupportProps {
  className?: string;
}

const HowWeSupport: React.FC<HowWeSupportProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen py-24 md:py-16 lg:py-24 bg-white",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Section Header */}
      <div className="w-full max-w-[1111px] mx-auto text-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-8 lg:px-0 flex justify-center">
        <SectionHeader 
          tag={t('howWeSupport.tag')}
          title={t('howWeSupport.title')}
          subtitle={t('howWeSupport.subtitle')}
          tagBgColor="#FFF9EF"
          tagTextColor="#D59724"
        />
      </div>

      {/* Content Container - Frame 1261159535 (1111px × 424px) */}
      <div className="w-full max-w-[1111px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-[30px] px-4 md:px-8 lg:px-0">
        {/* Left Side - Image Card/Support (350px × 424px) */}
        <div className="w-full lg:w-[350px] lg:h-[424px] rounded-[20px] bg-blue-100 overflow-hidden flex-shrink-0">
          <Image
            src="/hills.png"
            alt="How We Support Illustration"
            width={350}
            height={424}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Frame 1261159534 - Cards Grid (730.175px × 420px) */}
        <div className="w-full lg:flex-1 flex flex-col">
          {/* First Row - Cards 1 and 3 */}
          <div className="w-full flex flex-col lg:flex-row lg:gap-[30px] mb-6 lg:mb-[30px]">
          {/* Step 1 - Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 bg-[#fcf9f1] rounded-[24px] p-6">
            <div className="flex items-start gap-3">
              <Image
                src="/icon-numbers-1.svg"
                alt="Step 1"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-montserrat text-base sm:text-lg font-semibold text-[#333] mb-2">
                  {t('howWeSupport.steps.step1.title')}
                </h3>
                <p className="h-auto sm:h-[71px] self-stretch flex font-montserrat text-sm sm:text-base leading-[1.5] text-left text-[#333]">
                  {t('howWeSupport.steps.step1.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 bg-[#fcf9f1] rounded-[24px] p-6">
            <div className="flex items-start gap-3">
              <Image
                src="/icon-numbers-3.svg"
                alt="Step 3"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-montserrat text-base sm:text-lg font-semibold text-[#333] mb-2">
                  {t('howWeSupport.steps.step3.title')}
                </h3>
                <p className="h-auto sm:h-[71px] self-stretch flex font-montserrat text-sm sm:text-base leading-[1.5] text-left text-[#333]">
                  {t('howWeSupport.steps.step3.description')}
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* Second Row - Cards 2 and 4 */}
          <div className="w-full flex flex-col lg:flex-row lg:gap-[30px]">
          {/* Step 2 - Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 bg-[#fcf9f1] rounded-[24px] p-6">
            <div className="flex items-start gap-3">
              <Image
                src="/icon-numbers-2.svg"
                alt="Step 2"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-montserrat text-base sm:text-lg font-semibold text-[#333] mb-2">
                  {t('howWeSupport.steps.step2.title')}
                </h3>
                <p className="h-auto sm:h-[71px] self-stretch flex font-montserrat text-sm sm:text-base leading-[1.5] text-left text-[#333]">
                  {t('howWeSupport.steps.step2.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 bg-[#fcf9f1] rounded-[24px] p-6">
            <div className="flex items-start gap-3">
              <Image
                src="/icon-numbers-4.svg"
                alt="Step 4"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-montserrat text-base sm:text-lg font-semibold text-[#333] mb-2">
                  {t('howWeSupport.steps.step4.title')}
                </h3>
                <p className="h-auto sm:h-[71px] self-stretch flex font-montserrat text-sm sm:text-base leading-[1.5] text-left text-[#333]">
                  {t('howWeSupport.steps.step4.description')}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowWeSupport };
