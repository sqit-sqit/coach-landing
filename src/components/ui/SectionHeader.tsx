import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  tagBgColor?: string;
  tagTextColor?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  tagBgColor = '#FEF0C8',
  tagTextColor = '#A27F22',
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center gap-10 w-full max-w-[613.67px]",
      className
    )}>
      {/* Tag */}
      {tag && (
        <div 
          className="flex flex-row justify-center items-center px-6 py-[2px] gap-[10px] w-auto min-w-[185px] h-[42px] rounded-[30px]"
          style={{ backgroundColor: tagBgColor }}
        >
          <p 
            className="w-auto h-[38px] font-montserrat font-semibold text-[17px] leading-[38px] text-center uppercase whitespace-nowrap"
            style={{ color: tagTextColor }}
          >
            {tag}
          </p>
        </div>
      )}
      
      {/* Title and Subtitle */}
      <div className="flex flex-col items-center gap-[18px] w-full">
        <h2 className="w-full font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px] text-center text-[#333333]">
          {title}
        </h2>
        {subtitle && (
          <p className="w-full max-w-[648px] font-montserrat font-medium text-lg md:text-xl lg:text-[26px] leading-relaxed md:leading-[34px] text-center text-[#333333]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};






