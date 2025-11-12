"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface TitleSubtitleFrameProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

/**
 * Frame 335 - Title and Subtitle Frame
 * Specified from Zeplin: 613.671px × 96px container
 * Contains:
 *   - Heading: 613.671px × 44px - Montserrat SemiBold 36px, line-height 44px, center, #333333
 *   - Paragraph: 613.671px × 34px - Montserrat Medium 26px, line-height 34px, center, #333333
 *   - Gap between them: 18px (paragraph starts at y:62, heading height is 44px)
 */
const TitleSubtitleFrame: React.FC<TitleSubtitleFrameProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName
}) => {
  return (
    <div className={cn(
      "w-full max-w-[613.671px] h-auto lg:h-[96px] flex flex-col items-center gap-0",
      className
    )}>
      {/* Heading - 613.671px × 44px */}
      <h2 className={cn(
        "w-full h-auto lg:h-[44px] font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] lg:leading-[44px] text-center text-[#333333]",
        // Font: Montserrat SemiBold, 36px, line-height 44px, center aligned
        // Color: rgba(51, 51, 51, 1) = #333333
        titleClassName
      )}>
        {title}
      </h2>

      {/* Paragraph - 613.671px × 34px */}
      {/* Position: y:62 from container top (18px gap from heading bottom) */}
      {subtitle && (
        <p className={cn(
          "w-full h-auto lg:h-[34px] font-montserrat font-medium text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] lg:leading-[34px] text-center text-[#333333] mt-6 lg:mt-[18px]",
          // Font: Montserrat Medium, 26px, line-height 34px, center aligned
          // Color: rgba(51, 51, 51, 1) = #333333
          // Gap from heading: 18px (62px absolute from container top, but 44px heading height + 18px = 62px)
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { TitleSubtitleFrame };






