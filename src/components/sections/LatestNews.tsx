"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface LatestNewsProps {
  className?: string;
}

const LatestNews: React.FC<LatestNewsProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section className={cn(
      "w-screen h-auto lg:h-[720px] bg-[#FCF9F1] flex-none order-16 flex-grow-0 relative",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Frame 1261159529 - Main Content Container */}
      <div className="w-full max-w-[1110px] h-auto lg:h-[524px] mx-auto pt-[100px] md:pt-[70px] lg:pt-[98px] pb-[100px] md:pb-[70px] lg:pb-0 flex flex-col items-center p-0 gap-[30px] md:gap-[40px] lg:gap-[50px] px-4 md:px-8 lg:px-0">
        {/* Frame 1261159528 - Header Container */}
        <div className="flex flex-col items-center p-0 gap-[24px] md:gap-[32px] lg:gap-[40px] w-full max-w-[613.67px] h-auto flex-none order-0 flex-grow-0">
          {/* Tag */}
          <div className="flex flex-row justify-center items-center px-6 py-[2px] gap-[10px] w-[173px] h-[42px] bg-[#FEE8D7] rounded-[30px]">
            <h3 className="w-[125px] h-[38px] font-montserrat font-semibold text-[17px] leading-[38px] text-center uppercase text-[#C47B44]">
              {t('latestNews.tag')}
            </h3>
          </div>

          {/* Frame 335 - Main Title */}
          <div className="flex flex-col items-center p-0 gap-[12px] md:gap-[18px] w-full h-auto flex-none order-1 self-stretch flex-grow-0">
            <h2 className="w-full h-auto font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight lg:leading-[44px] text-center text-[#333333] flex-none order-0 flex-grow-0">
              The latest news from our resources
            </h2>
          </div>
        </div>

        {/* Frame 1261159517 - Content Cards */}
        <div className="flex flex-col lg:flex-row items-start p-0 gap-[31px] w-full max-w-[1109px] h-auto lg:h-[348px] flex-none order-1 flex-grow-0">
          {/* Frame 1261159539 - Cards Container */}
          <div className="flex flex-col lg:flex-row items-start p-0 w-full max-w-[1109px] h-auto lg:h-[348px] flex-none order-0 self-stretch flex-grow-1">
            {/* Frame 1261159523 - Left Card with Image */}
            <div className="box-border flex flex-col items-start p-0 gap-[24px] w-full lg:w-[554.5px] h-[300px] lg:h-[348px] rounded-[20px] lg:rounded-[20px_0px_0px_20px] flex-none order-0 flex-grow-1 relative overflow-hidden" style={{ aspectRatio: '554.5 / 348' }}>
              <Image
                src="/News_board.png"
                alt="Bogoban online board visualization"
                fill
                sizes="(min-width: 1024px) 554px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Frame 1261159521 - Right Card with Content */}
            <div className="box-border flex flex-col items-start p-[24px] md:p-[30px] lg:p-[34px] gap-[20px] md:gap-[24px] w-full lg:w-[554.5px] h-auto lg:h-[348px] bg-[#FFFFFF] rounded-[20px] lg:rounded-[0px_20px_20px_0px] flex-none order-1 flex-grow-1">
              {/* Frame 1261159524 - Content Container */}
              <div className="flex flex-col items-start p-0 gap-[24px] w-full max-w-[486.5px] h-auto lg:h-[281px] flex-none order-0 self-stretch flex-grow-0">
                {/* Frame 1261159523 - Inner Content */}
                <div className="flex flex-col items-start p-0 gap-[24px] w-full max-w-[486.5px] h-auto lg:h-[281px] flex-none order-0 self-stretch flex-grow-0">
                  {/* Frame 1261159568 - Content Layout */}
                  <div className="flex flex-col justify-between items-start p-0 gap-[16px] w-full max-w-[486.5px] h-auto lg:h-[281px] flex-none order-0 self-stretch flex-grow-1">
                    {/* Frame 1261159566 - Top Content */}
                    <div className="flex flex-col items-start p-0 gap-[16px] mx-auto w-full max-w-[486.5px] h-auto lg:h-[94px] flex-none order-0 self-stretch flex-grow-0">
                      {/* Heading */}
                      <h3 className="w-full max-w-[486.5px] h-auto lg:h-[30px] font-montserrat font-semibold text-lg lg:text-[22px] leading-tight lg:leading-[30px] text-[#333333] flex-none order-0 self-stretch flex-grow-0">
                        New board available
                      </h3>

                      {/* Paragraph */}
                      <p className="w-full max-w-[486.5px] h-auto lg:h-[48px] font-montserrat font-normal text-sm lg:text-base leading-relaxed lg:leading-[24px] text-[#333333] flex-none order-1 self-stretch flex-grow-0">
                        Please note that we have added new board for paradigmal constellation - Bogoban.
                      </p>
                    </div>

                    {/* Frame 1261159567 - Bottom Content */}
                    <div className="flex flex-col items-start p-0 gap-[16px] mx-auto w-full max-w-[486.5px] h-auto lg:h-[20px] flex-none order-1 self-stretch flex-grow-0">
                      {/* Paragraph */}
                      <p className="w-full max-w-[486.5px] h-auto lg:h-[20px] font-montserrat font-normal text-xs lg:text-sm leading-tight lg:leading-[20px] text-[#333333] flex-none order-0 self-stretch flex-grow-0">
                        17 October 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LatestNews };
