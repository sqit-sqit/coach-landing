"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface HowItWorksProps {
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen pt-32 pb-8 md:py-16 lg:py-24 relative z-10",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )} style={{
      background: `linear-gradient(180deg, rgba(252, 249, 241, 0) -7.99%, #FCF9F1 25.97%, #FCF9F1 100%)`
    }}>
      {/* Main Container (1110px) */}
      <div className="w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4 flex justify-center">
          <SectionHeader title={t('howItWorks.title')} />
        </div>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-[30px] justify-center items-center">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-full max-w-[255px] h-auto md:h-[231px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="text-4xl md:text-5xl font-bold font-montserrat text-yellow-logo">01</div>
            <p className="w-full font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-center text-[#333333]">
              {t('howItWorks.step1')}
            </p>
          </div>
          
          {/* Arrow */}
          <div className="hidden md:block">
            <svg className="w-6 h-6 text-[#999999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-full max-w-[255px] h-auto md:h-[231px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="text-4xl md:text-5xl font-bold font-montserrat text-yellow-logo">02</div>
            <p className="w-full font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-center text-[#333333]">
              {t('howItWorks.step2')}
            </p>
          </div>
          
          {/* Arrow */}
          <div className="hidden md:block">
            <svg className="w-6 h-6 text-[#999999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-full max-w-[255px] h-auto md:h-[231px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="text-4xl md:text-5xl font-bold font-montserrat text-yellow-logo">03</div>
            <p className="w-full font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-center text-[#333333]">
              {t('howItWorks.step3')}
            </p>
          </div>
          
          {/* Arrow */}
          <div className="hidden md:block">
            <svg className="w-6 h-6 text-[#999999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-full max-w-[255px] h-auto md:h-[231px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-[34px] gap-4 rounded-[20px] bg-white">
            <div className="text-4xl md:text-5xl font-bold font-montserrat text-yellow-logo">04</div>
            <p className="w-full font-montserrat font-semibold text-lg md:text-[22px] leading-tight md:leading-[30px] text-center text-[#333333]">
              {t('howItWorks.step4')}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
