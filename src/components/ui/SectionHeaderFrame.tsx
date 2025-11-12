"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderFrameProps {
  tag?: string;
  title: string;
  subtitle?: string;
  tagBgColor?: string;
  tagTextColor?: string;
  className?: string;
}

/**
 * Frame 1261159529 - Section Header Frame
 * Specified from Zeplin: 1111px × 770px container (but header part is 1111px × 178px)
 * Contains Frame 1261159528 - Centered Header Container (613.67px × 178px)
 *   - tag: 310px × 42px with "For Coaches & Therapists" text
 *   - Frame 335: 613.67px × 96px with title and subtitle
 */
const SectionHeaderFrame: React.FC<SectionHeaderFrameProps> = ({
  tag,
  title,
  subtitle,
  tagBgColor = '#FFF9EF',
  tagTextColor = '#D59724',
  className
}) => {
  return (
    <div className={cn(
      "w-full max-w-[1111px] flex flex-col items-center",
      className
    )}>
      {/* Frame 1261159528 - Centered Header Container (613.67px × 178px) */}
      <div className="w-full max-w-[613.67px] h-auto lg:h-[178px] flex flex-col items-center gap-0">
        {/* Tag - 310px × 42px */}
        {tag && (
          <div className={cn(
            "w-full max-w-[310px] h-[42px] flex items-center justify-center px-6 py-2 rounded-[30px] mb-10",
            // Background color from Zeplin: rgba(255, 249, 239, 1) = #FFF9EF
            // Gap from tag to Frame 335: 40px (tag ends at y:42, Frame 335 starts at y:82)
          )} style={{ backgroundColor: tagBgColor }}>
            <span 
              className={cn(
                "w-auto h-[38px] font-montserrat font-medium text-[17px] leading-[38px] text-center",
                // Text color from Zeplin: rgba(213, 151, 36, 1) = #D59724
                // Font: Montserrat Medium, 17px, line-height 38px
              )}
              style={{ color: tagTextColor }}
            >
              {tag}
            </span>
          </div>
        )}

        {/* Frame 335 - Title and Subtitle Container (613.67px × 96px) */}
        {/* Position: y:82 from Frame 1261159528 top (gap of 40px from tag) */}
        <div className="w-full max-w-[613.67px] h-auto lg:h-[96px] flex flex-col items-center gap-0">
          {/* Heading - 613.67px × 44px */}
          <h2 className={cn(
            "w-full h-auto lg:h-[44px] font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] lg:leading-[44px] text-center text-[#333333]",
            // Font: Montserrat SemiBold, 36px, line-height 44px, center aligned
            // Color: rgba(51, 51, 51, 1) = #333333
          )}>
            {title}
          </h2>

          {/* Paragraph - 613.67px × 34px */}
          {/* Position: y:62 from heading top (18px gap from heading bottom) */}
          {subtitle && (
            <p className={cn(
              "w-full h-auto lg:h-[34px] font-montserrat font-medium text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] lg:leading-[34px] text-center text-[#333333] mt-6 lg:mt-[18px]",
              // Font: Montserrat Medium, 26px, line-height 34px, center aligned
              // Color: rgba(51, 51, 51, 1) = #333333
              // Gap from heading: 18px (62px absolute from heading top, but 44px heading height + 18px = 62px)
            )}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { SectionHeaderFrame };

