"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface FlowXRProps {
  className?: string;
}

const FlowXR: React.FC<FlowXRProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen bg-[#fabb46]",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Content Container */}
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-[133px] pt-8 md:pt-12 lg:pt-[67px] pb-8 md:pb-12 lg:pb-[80px] px-4 md:px-8 lg:px-0">
        {/* Left Side - Title */}
        <div className="w-full lg:w-auto">
          <p className="w-full lg:w-[153px] h-auto lg:h-11 flex font-montserrat text-2xl md:text-3xl lg:text-[36px] font-semibold leading-tight lg:leading-[44px] text-left text-[#333333]">
            {t('flowXR.title')}
          </p>
        </div>

        {/* Right Side - Description */}
        <div className="w-full lg:w-auto">
          <p className="w-full lg:w-[845px] h-auto lg:h-[108px] flex font-montserrat text-base md:text-lg lg:text-[28px] font-medium leading-relaxed lg:leading-[36px] text-left text-[#333333]">
            {t('flowXR.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export { FlowXR };
