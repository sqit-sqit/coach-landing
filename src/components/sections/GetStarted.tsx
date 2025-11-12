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
    <section className={cn(
      "w-screen py-12 md:py-16 lg:py-20 bg-green-fark relative overflow-hidden",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Background Image */}
      <div className="absolute top-4 md:top-8 w-auto h-[calc(100%-1rem)] md:h-[calc(100%-2rem)] right-0 lg:right-[calc((100vw-1440px)/2)] xl:right-[calc((100vw-1440px)/2)]">
        <Image
          src="/logo_background.png"
          alt="Logo Background"
          width={300}
          height={300}
          className="h-full w-auto object-contain opacity-60 md:opacity-80 max-w-[150px] md:max-w-[200px] lg:max-w-[300px]"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden items-center text-center gap-6">
          {/* Heading */}
          <div className="w-full max-w-[320px]">
            <p className="font-montserrat text-base md:text-lg font-medium leading-[1.3] text-[#fff]">
              Log in or sign up if you don't have an account, and start working with your client.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              variant="secondary"
              size="big"
              state="default"
              href="https://self.flow-xr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('getStarted.cta')}
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between h-[180px]">
          {/* Heading */}
          <div className="w-[742px] h-[92px] flex items-center">
            <p className="font-montserrat text-[28px] font-medium leading-[36px] text-left text-[#fff]">
              Log in or sign up if you don't have an account, and start working with your client.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button
              variant="secondary"
              size="big"
              state="default"
              href="https://self.flow-xr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('getStarted.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GetStarted };
