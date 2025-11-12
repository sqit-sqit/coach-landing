"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface GetStartedProps {
  className?: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section id="philosophy" className={cn(
      "w-full h-[254px] bg-green-fark max-w-[1440px] mx-auto relative overflow-hidden",
      className
    )}>
      {/* Background Image */}
      <div className="absolute top-4 md:top-8 right-0 w-auto h-[calc(100%-1rem)] md:h-[calc(100%-2rem)]">
        <Image
          src="/logo_background.png"
          alt="Logo Background"
          width={300}
          height={300}
          className="h-full w-auto object-contain opacity-60 md:opacity-80 max-w-[200px] md:max-w-[300px]"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1110px] h-[254px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Heading with absolute positioning */}
        <div className="absolute w-[742px] h-[92px] left-[16px] md:left-[32px] lg:left-[28px] top-[77px]">
          <p className="w-full h-full flex font-montserrat text-sm md:text-base lg:text-[28px] font-medium leading-[1.3] md:leading-[1.3] lg:leading-[36px] text-left text-[#fff]">
            Log in or sign up if you don't have an account, and start working with your client.
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute right-[16px] md:right-[32px] lg:right-[28px] top-1/2 transform -translate-y-1/2">
          <Button
            variant="secondary"
            size="big"
            state="default"
            href="https://self.flow-xr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('philosophy.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export { GetStarted };
