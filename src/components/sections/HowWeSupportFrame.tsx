"use client";

import React from 'react';
import Image from 'next/image';
import { Heading, Paragraph } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

export interface SupportCard {
  number: number;
  title: string;
  description: string;
}

interface HowWeSupportFrameProps {
  className?: string;
  cards?: SupportCard[];
}

/**
 * Frame 1261159536 - How We Support Your Journey Section
 * Specified from Zeplin: 1111px × 686px container
 * Contains header section and 4 support cards in 2x2 grid layout
 */
const HowWeSupportFrame: React.FC<HowWeSupportFrameProps> = ({ className, cards }) => {
  const { t } = useTranslations();
  
  // Default cards if not provided
  const defaultCards: SupportCard[] = [
    {
      number: 1,
      title: "Start with what is",
      description: "Every story, moment, or situation can be seen anew through images."
    },
    {
      number: 2,
      title: "See differently",
      description: "Symbols and patterns reveal hidden insights beyond logic."
    },
    {
      number: 3,
      title: "Redesign your path",
      description: "Transform scattered pieces into structure, clarity, and direction."
    },
    {
      number: 4,
      title: "Create lasting change",
      description: "Visual shifts echo in your inner world, shaping the life you want."
    }
  ];

  const supportCards = cards || defaultCards;

  // Number Icon Component
  const NumberIcon = ({ number }: { number: number }) => (
    <div className="w-[34px] h-[34px] flex items-center justify-center relative flex-shrink-0">
      {/* Gradient background circle */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(246,238,216,1) 0%, rgba(255,255,255,1) 54.81%, rgba(255,255,255,1) 100%)'
        }}
      />
      {/* Number */}
      <span className="relative z-10 font-montserrat font-semibold text-[17px] leading-[38px] text-grey-text">
        {number}
      </span>
    </div>
  );

  return (
    <div className={cn(
      "w-full max-w-[1111px] mx-auto flex flex-col",
      className
    )}>
      {/* Frame 1261159529 - Header Section (1111px × 212px) */}
      <div className="w-full flex flex-col items-center mb-8 md:mb-12 lg:mb-[50px]">
        {/* Frame 1261159528 - Centered Header Container (613.67px × 212px) */}
        <div className="w-full max-w-[613.67px] flex flex-col items-center">
          {/* Tag - "For Coaches & Therapists" */}
          <div className="w-full max-w-[310px] h-[42px] flex items-center justify-center px-6 py-2 rounded-[30px] bg-[#FFF9EF] mb-10">
            <span className="font-montserrat font-medium text-[17px] leading-[38px] text-[#D59724] text-center">
              {t('forCoachesTherapists.tag')}
            </span>
          </div>

          {/* Frame 335 - Title and Subtitle */}
          <div className="w-full flex flex-col items-center gap-0">
            {/* Heading */}
            <Heading 
              variant="h2" 
              size="lg" 
              align="center"
              className="mb-4 md:mb-6"
            >
              {t('howWeSupport.title') || 'How we support your journey'}
            </Heading>
            {/* Paragraph */}
            <Paragraph align="center">
              {t('howWeSupport.subtitle') || "You'll work with images through Flow-XR — a remote tool whose power lies in its simplicity."}
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Frame 1261159535 - Cards Container (1111px × 424px) */}
      <div className="w-full max-w-[1111px] mx-auto flex flex-col lg:flex-row lg:gap-[30px]">
        {/* Left Side - Image Card/Support (350px × 424px) */}
        <div className="w-full lg:w-[350px] lg:h-[424px] rounded-[20px] overflow-hidden flex-shrink-0 mb-6 lg:mb-0">
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
          {/* First Row - 2 Cards */}
          <div className="w-full flex flex-col lg:flex-row lg:gap-[30px] mb-6 lg:mb-[30px]">
          {/* Left Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 flex flex-col rounded-[24px] bg-[#FCF9F1] p-6">
            {/* Frame 1261159531 - Content (302px × 117px) */}
            <div className="w-full flex items-start gap-4">
              {/* Number Icon */}
              <NumberIcon number={supportCards[0].number} />
              
              {/* Frame 1261159530 - Text Content */}
              <div className="flex-1 flex flex-col">
                {/* Heading */}
                <h3 className="w-full font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-[30px] text-grey-text mb-4">
                  {supportCards[0].title}
                </h3>
                {/* Paragraph */}
                <p className="w-full font-montserrat font-normal text-base leading-[24px] text-grey-text">
                  {supportCards[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 flex flex-col rounded-[24px] bg-[#FCF9F1] p-6">
            {/* Frame 1261159531 - Content (302px × 117px) */}
            <div className="w-full flex items-start gap-4">
              {/* Number Icon */}
              <NumberIcon number={supportCards[2].number} />
              
              {/* Frame 1261159530 - Text Content */}
              <div className="flex-1 flex flex-col">
                {/* Heading */}
                <h3 className="w-full font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-[30px] text-grey-text mb-4">
                  {supportCards[2].title}
                </h3>
                {/* Paragraph */}
                <p className="w-full font-montserrat font-normal text-base leading-[24px] text-grey-text">
                  {supportCards[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 2 Cards */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-[30px]">
          {/* Left Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 flex flex-col rounded-[24px] bg-[#FCF9F1] p-6">
            {/* Frame 1261159531 - Content (302px × 117px) */}
            <div className="w-full flex items-start gap-4">
              {/* Number Icon */}
              <NumberIcon number={supportCards[1].number} />
              
              {/* Frame 1261159530 - Text Content */}
              <div className="flex-1 flex flex-col">
                {/* Heading */}
                <h3 className="w-full font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-[30px] text-grey-text mb-4">
                  {supportCards[1].title}
                </h3>
                {/* Paragraph */}
                <p className="w-full font-montserrat font-normal text-base leading-[24px] text-grey-text">
                  {supportCards[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Card (350px × 195px) */}
          <div className="w-full lg:w-[350px] lg:h-[195px] flex-shrink-0 flex flex-col rounded-[24px] bg-[#FCF9F1] p-6">
            {/* Frame 1261159531 - Content (302px × 117px) */}
            <div className="w-full flex items-start gap-4">
              {/* Number Icon */}
              <NumberIcon number={supportCards[3].number} />
              
              {/* Frame 1261159530 - Text Content */}
              <div className="flex-1 flex flex-col">
                {/* Heading */}
                <h3 className="w-full font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-[30px] text-grey-text mb-4">
                  {supportCards[3].title}
                </h3>
                {/* Paragraph */}
                <p className="w-full font-montserrat font-normal text-base leading-[24px] text-grey-text">
                  {supportCards[3].description}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HowWeSupportFrame };

