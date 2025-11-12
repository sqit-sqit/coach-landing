"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface ForYourselfProps {
  className?: string;
}

const ForYourself: React.FC<ForYourselfProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section id="for-yourself" className={cn(
      "w-screen py-32 md:py-24 lg:py-32 bg-[#FCF9F1]",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Main Container */}
      <div className="w-full max-w-[1111px] mx-auto px-4 md:px-8 lg:px-0 flex flex-col items-center gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-10 w-full max-w-[613.67px]">
          {/* Tag */}
          <div className="flex flex-row justify-center items-center px-6 py-[2px] gap-[10px] w-auto min-w-[185px] h-[42px] bg-[#FEF0C8] rounded-[30px]">
            <p className="w-auto h-[38px] font-montserrat font-semibold text-[17px] leading-[38px] text-center uppercase text-[#A27F22] whitespace-nowrap">
              {t('forYourself.tag')}
            </p>
          </div>
          
          {/* Title and Subtitle */}
          <div className="flex flex-col items-center gap-[18px] w-full">
            <h2 className="w-full font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] text-center text-[#333333]">
              {t('forYourself.title')}
            </h2>
            <p className="w-full max-w-[648px] font-montserrat font-medium text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] text-center text-[#333333]">
              {t('forYourself.subtitle')}
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* Left Side - Features List */}
          <div className="w-full lg:w-[484px] flex flex-col gap-6 md:gap-8">
            {/* Feature Items */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="flex flex-row items-center gap-5 w-full">
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <Image
                    src="/icon_values-1.svg"
                    alt="Values Icon"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[30px] text-[#333333]">
                    {t('forYourself.features.values')}
                  </h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-row items-center gap-5 w-full">
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <Image
                    src="/icon_values-2.svg"
                    alt="Goals Icon"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[30px] text-[#333333]">
                    {t('forYourself.features.goals')}
                  </h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-row items-center gap-5 w-full">
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <Image
                    src="/icon_values-3.svg"
                    alt="Growth Icon"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[30px] text-[#333333]">
                    {t('forYourself.features.growth')}
                  </h3>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-row items-center gap-5 w-full">
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <Image
                    src="/icon_values-4.svg"
                    alt="Wisdom Icon"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[30px] text-[#333333]">
                    {t('forYourself.features.wisdom')}
                  </h3>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-row items-center gap-5 w-full">
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <Image
                    src="/icon_values-5.svg"
                    alt="Balance Icon"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[30px] text-[#333333]">
                    {t('forYourself.features.balance')}
                  </h3>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4 md:mt-8">
              <Button
                variant="primary"
                size="big"
                state="default"
                href="https://self.flow-xr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('forYourself.cta')}
              </Button>
            </div>
          </div>

          {/* Right Side - Image Container */}
          <div className="w-full lg:w-[540px] h-[553px] relative">
            <div className="w-full h-full bg-white rounded-[20px] p-8">
              <div className="w-full h-full bg-[#F8F8F8] rounded-[20px] relative" style={{ aspectRatio: '540 / 553' }}>
                <Image
                  src="/woman_using_laptop.jpg"
                  alt="Woman using laptop"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover rounded-[20px]"
                />
              </div>
            </div>
            
            {/* Overlay Image - positioned outside the main image container */}
            <div className="absolute bottom-[-20px] right-[-20px] w-[220px] h-[154px] md:w-[275px] md:h-[193px] lg:w-[330px] lg:h-[231px]" style={{ aspectRatio: '330 / 231' }}>
              <Image
                src="/Value_workshop.png?v=2"
                alt="Value Workshop"
                fill
                sizes="(min-width: 1024px) 330px, 50vw"
                className="object-contain rounded-[11px] shadow-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ForYourself };
