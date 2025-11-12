"use client";

import React from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface SystemicConstellationsDescriptionProps {
  className?: string;
}

const SystemicConstellationsDescription: React.FC<SystemicConstellationsDescriptionProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen min-h-[962px] bg-white relative py-8 md:py-16 lg:py-24",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Header Section - Tag + Title + Subtitle */}
      <div className="w-full max-w-[613.67px] mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-16 lg:mb-24 flex flex-col items-center gap-6 md:gap-8 lg:gap-[45px]">
        {/* Tag */}
        <div className="flex flex-row justify-center items-center px-6 py-[2px] gap-[10px] w-auto min-w-[310px] h-[42px] bg-[#FFF9EF] rounded-[30px]">
              <p className="w-auto h-[38px] font-montserrat font-medium text-[17px] leading-[38px] text-center uppercase text-[#D59724] whitespace-nowrap">
                {t('systemicConstellations.intro.tag')}
              </p>
        </div>
        
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[16px] w-full">
              <h2 className="w-full font-montserrat font-bold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[46px] text-center text-[#333]">
                {t('systemicConstellations.intro.title')}
              </h2>
              <p className="w-full font-montserrat font-normal text-lg md:text-xl lg:text-[24px] leading-relaxed md:leading-[30px] text-center text-[#333]">
                {t('systemicConstellations.intro.subtitle')}
              </p>
        </div>
      </div>

      {/* Main Content - Side by Side on Desktop */}
      <div className="w-full max-w-[1111px] mx-auto px-4 md:px-8 lg:px-0 flex flex-col lg:flex-row gap-8 lg:gap-[31px]">
        {/* Left Side - Video Section */}
        <div className="w-full lg:w-[540px] flex flex-col items-center gap-4 md:gap-6 lg:gap-[22px]">
          {/* Title and Subtitle */}
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[22px] w-full">
                <h3 className="w-full font-montserrat font-normal text-lg md:text-xl lg:text-[24px] leading-relaxed md:leading-[30px] text-center text-[#333]">
                  {t('systemicConstellations.video.title')}
                </h3>
                <p className="w-full font-montserrat font-normal text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-[30px] text-center text-[#333]">
                  {t('systemicConstellations.video.description')}
                </p>
          </div>

          {/* Video Frame */}
          <div className="w-full max-w-[540px] h-[250px] md:h-[350px] lg:h-[371px] relative">
            <iframe
              src="https://www.youtube.com/embed/izUgn6a1ORw"
              title="Systemic Constellations Video"
              className="w-full h-full rounded-[20px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Side - Content Section - Centered relative to video frame only */}
        <div className="w-full lg:w-[540px] flex flex-col items-start gap-6 md:gap-8 lg:gap-[16px] lg:items-center lg:justify-center">
        {/* Top Section - Text + Author */}
        <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-[16px] w-full">
          {/* Description Container */}
          <div className="w-full flex flex-col items-start gap-2 md:gap-4 lg:gap-[8px]">
            {/* Text Container */}
            <div className="w-full flex flex-row items-center gap-2 md:gap-4 lg:gap-[10px]">
              <p className="w-full font-montserrat font-normal text-sm md:text-base lg:text-[16px] leading-relaxed md:leading-[24px] text-[#333]">
                {t('systemicConstellations.description.text')}
              </p>
            </div>
          </div>
          
          {/* Author */}
          <div className="w-full">
            <p className="font-montserrat text-xs md:text-sm font-medium text-[#333]">
              {t('systemicConstellations.description.author')}
            </p>
          </div>
        </div>
        
        {/* Bottom Section - CTA Buttons */}
        <div className="w-full mt-8 md:mt-12 lg:mt-16">
          {/* CTA Buttons Container */}
        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 lg:gap-[24px] w-full">
            {/* Try it - Green Get Started style */}
            <Button
              variant="primary"
              size="big"
              state="default"
              className="w-full sm:w-[195px] h-[50px] md:h-[60px] lg:h-[66px]"
            >
              {t('systemicConstellations.description.cta1')}
            </Button>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export { SystemicConstellationsDescription };
