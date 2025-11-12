"use client";

import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';
import { ForCoachesTherapistsSystemic } from './ForCoachesTherapistsSystemic';

interface SystemicConstellationsBenefitsProps {
  className?: string;
}

const SystemicConstellationsBenefits: React.FC<SystemicConstellationsBenefitsProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <>
      <section className={cn(
        "w-screen pt-32 pb-8 md:py-16 lg:py-24 relative z-10",
        "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
        className
      )} style={{
        background: `linear-gradient(180deg, rgba(252, 249, 241, 0) -7.99%, #FCF9F1 25.97%, #FCF9F1 100%)`
      }}>
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4 flex justify-center">
          <SectionHeader title={t('benefits.title')} />
        </div>

        {/* Benefits Cards */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-[30px] px-4 md:px-8 lg:px-16 justify-center items-center">
          {/* Card 1: Boost Retention */}
          <div className="w-full max-w-[255px] h-auto md:h-[336px] flex flex-col items-start p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/icon-1.svg"
                alt="Boost Retention Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="w-full md:w-[187px] h-auto md:h-[60px] font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-[#333333]">
              {t('benefits.cards.accessibility.title')}
            </h3>
            <p className="w-full md:w-[187px] h-auto md:h-[120px] font-montserrat font-normal text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-[#333333]">
              {t('benefits.cards.accessibility.description')}
            </p>
          </div>

          {/* Card 2: Personalize the Experience */}
          <div className="w-full max-w-[255px] h-auto md:h-[336px] flex flex-col items-start p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/icon-2.svg"
                alt="Personalize Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="w-full md:w-[187px] h-auto md:h-[60px] font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-[#333333]">
              {t('benefits.cards.flexibility.title')}
            </h3>
            <p className="w-full md:w-[187px] h-auto md:h-[120px] font-montserrat font-normal text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-[#333333]">
              {t('benefits.cards.flexibility.description')}
            </p>
          </div>

          {/* Card 3: Grow Your Practice */}
          <div className="w-full max-w-[255px] h-auto md:h-[336px] flex flex-col items-start p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/icon-3.svg"
                alt="Grow Practice Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="w-full md:w-[187px] h-auto md:h-[60px] font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-[#333333]">
              {t('benefits.cards.community.title')}
            </h3>
            <p className="w-full md:w-[187px] h-auto md:h-[120px] font-montserrat font-normal text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-[#333333]">
              {t('benefits.cards.community.description')}
            </p>
          </div>

          {/* Card 4: Data-Driven Insights */}
          <div className="w-full max-w-[255px] h-auto md:h-[336px] flex flex-col items-start p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/icon-4.svg"
                alt="Data Insights Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="w-full md:w-[187px] h-auto md:h-[60px] font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-[#333333]">
              {t('benefits.cards.growth.title')}
            </h3>
            <p className="w-full md:w-[187px] h-auto md:h-[120px] font-montserrat font-normal text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-[#333333]">
              {t('benefits.cards.growth.description')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Spacer between sections */}
      <div className="h-8 md:h-10 lg:h-12"></div>
      
      {/* For Coaches & Therapists Section */}
      <ForCoachesTherapistsSystemic />
    </>
  );
};

export { SystemicConstellationsBenefits };
