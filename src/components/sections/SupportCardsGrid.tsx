"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export interface SupportCardsGridItem {
  number: number;
  title: string;
  description: string;
}

interface SupportCardsGridProps {
  className?: string;
  cards: SupportCardsGridItem[];
}

/**
 * Frame 1261159534 - Support Cards Grid Container
 * Specified from Zeplin: 730.175px × 420px container
 * Contains two rows of support cards (2x2 grid layout)
 */
const SupportCardsGrid: React.FC<SupportCardsGridProps> = ({ className, cards }) => {
  if (!cards || cards.length !== 4) {
    console.warn('SupportCardsGrid requires exactly 4 cards');
    return null;
  }

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

  // Support Card Item Component
  const SupportCardItem = ({ card }: { card: SupportCardsGridItem }) => (
    <div className="w-full lg:w-[350px] lg:h-[195px] flex flex-col rounded-[24px] bg-[#FCF9F1] p-6">
      {/* Frame 1261159531 - Content (302px × 117px) */}
      <div className="w-full flex items-start gap-4">
        {/* Number Icon */}
        <NumberIcon number={card.number} />
        
        {/* Frame 1261159530 - Text Content */}
        <div className="flex-1 flex flex-col">
          {/* Heading */}
          <h3 className="w-full font-montserrat font-semibold text-lg md:text-xl lg:text-[22px] leading-[30px] text-grey-text mb-4">
            {card.title}
          </h3>
          {/* Paragraph */}
          <p className="w-full font-montserrat font-normal text-base leading-[24px] text-grey-text">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn(
      "w-full max-w-[730.175px] flex flex-col gap-4 md:gap-6 lg:gap-[30px]",
      className
    )}>
      {/* Frame 1261159532 - First Row (730.175px × 195px) */}
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[30px]">
        {/* Card 1 */}
        <SupportCardItem card={cards[0]} />
        
        {/* Card 3 */}
        <SupportCardItem card={cards[2]} />
      </div>

      {/* Frame 1261159533 - Second Row (730.175px × 195px) */}
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[30px]">
        {/* Card 2 */}
        <SupportCardItem card={cards[1]} />
        
        {/* Card 4 */}
        <SupportCardItem card={cards[3]} />
      </div>
    </div>
  );
};

export { SupportCardsGrid };

