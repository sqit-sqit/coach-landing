"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface TestimonialsProps {
  className?: string;
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={cn("w-6 h-6 text-yellow-400", className)} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.445a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.445a1 1 0 00-1.175 0l-3.366 2.445c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <div className={cn("relative w-[44px] h-[41px]", className)}>
    {/* Background Bubble */}
    <svg className="absolute inset-0" width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.5038 35.0075H21.2157C20.4606 35.0075 19.7136 35.1632 19.0213 35.4646C18.329 35.7661 17.7063 36.207 17.1919 36.7598L13.5394 40.6857L9.3412 36.5761C8.31374 35.5709 6.93357 35.0078 5.49615 35.0075C4.03848 35.0075 2.64051 34.4284 1.60978 33.3977C0.579057 32.367 0 30.969 0 29.5114V5.49615C0 4.03848 0.579057 2.64051 1.60978 1.60978C2.64051 0.579057 4.03848 0 5.49615 0H38.5038C39.9615 0 41.3595 0.579057 42.3902 1.60978C43.4209 2.64051 44 4.03848 44 5.49615V29.5114C44 30.969 43.4209 32.367 42.3902 33.3977C41.3595 34.4284 39.9615 35.0075 38.5038 35.0075Z" fill="#FABB46"/>
    </svg>
    {/* Foreground Quotes */}
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4762 5.77625V5.79605C12.4762 5.9913 12.4669 6.18545 12.4558 6.3774C12.4556 6.37959 12.4556 6.38181 12.4558 6.384C12.0709 12.929 6.64015 18.1128 0 18.1128C1.9635 16.2062 3.31764 13.7603 3.89125 11.0843C2.97069 10.6051 2.19353 9.89053 1.63886 9.01336C1.08419 8.1362 0.77183 7.12773 0.733559 6.09062C0.695287 5.0535 0.932475 4.02475 1.42098 3.10909C1.90949 2.19343 2.63187 1.42354 3.51461 0.877779C4.39735 0.33202 5.40892 0.0298765 6.44637 0.00210405C7.48383 -0.0256684 8.51012 0.221921 9.42079 0.71967C10.3315 1.21742 11.094 1.94756 11.6308 2.83578C12.1676 3.72399 12.4595 4.73857 12.4768 5.77625V5.79605L12.4564 6.3774C12.4561 6.37959 12.4561 6.38181 12.4564 6.384M29.6527 5.77625V5.79605C29.6527 5.9913 29.6434 6.18545 29.6324 6.3774C29.6321 6.37959 29.6321 6.38181 29.6324 6.384C29.2474 12.929 23.8167 18.1128 17.1765 18.1128C19.14 16.2062 20.4941 13.7603 21.0678 11.0843C20.1472 10.6051 19.37 9.89053 18.8154 9.01336C18.2607 8.1362 17.9483 7.12773 17.9101 6.09062C17.8718 5.0535 18.109 4.02475 18.5975 3.10909C19.086 2.19343 19.8084 1.42354 20.6911 0.877779C21.5738 0.33202 22.5854 0.0298765 23.6229 0.00210405C24.6603 -0.0256684 25.6866 0.221921 26.5973 0.71967C27.508 1.21742 28.2705 1.94756 28.8073 2.83578C29.3441 3.72399 29.636 4.73857 29.6533 5.77625V5.79605L29.6329 6.3774C29.6326 6.37959 29.6326 6.38181 29.6329 6.384" fill="#FCF9F1"/>
    </svg>
  </div>
);


const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const { t } = useTranslations();
  
  return (
    <section id="testimonials" className={cn(
      "w-screen bg-white py-24 md:py-24",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Outer container with padding */}
      <div className="w-full max-w-[1110px] mx-auto px-4 sm:px-8 lg:px-0">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="flex justify-center">
            <div className="inline-flex justify-center items-center px-6 py-1 gap-2.5 w-[261px] h-[42px] bg-[#EFF9FF] rounded-[30px]">
              <p className="w-[213px] h-[38px] font-montserrat font-semibold text-[17px] leading-[38px] text-center uppercase text-[#6997B2]">
                {t('testimonials.tag')}
              </p>
            </div>
          </div>
          <p className="h-auto self-stretch flex items-center justify-center font-montserrat text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-center text-[#192b6b] mt-[24px] md:mt-[32px] lg:mt-[42px] px-4">
            What our clients say
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="w-full max-w-[540px] h-auto min-h-[400px] lg:h-[540px] p-[24px] md:p-[30px] lg:p-[34px] bg-[#fcf9f1] rounded-[20px] flex flex-col justify-between mx-auto lg:mx-0">
            <div>
              <div className="flex mb-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <h3 className="font-montserrat font-bold text-lg md:text-xl lg:text-2xl mb-3 text-[#192b6b]">
                <span className="Heading">"My go-to practice for clarity"</span>
              </h3>
              <p className="font-montserrat text-sm md:text-base text-[#192b6b] leading-relaxed">
                <span className="Paragraph">I often turn to this process when I feel stuck. Placing the elements on the board helps me untangle thoughts and reconnect with what truly matters.</span>
              </p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <div>
                <p className="font-montserrat font-bold text-[#192b6b]">MARK J.</p>
                <p className="font-montserrat text-sm text-[#192b6b]">Leadership Consultant & Trainer.</p>
              </div>
              <QuoteIcon />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[540px] h-auto min-h-[400px] lg:h-[540px] p-[24px] md:p-[30px] lg:p-[34px] bg-[#E0F2FE] rounded-[20px] flex flex-col justify-between mx-auto lg:mx-0">
            <div>
              <div className="flex mb-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <h3 className="font-montserrat font-bold text-lg md:text-xl lg:text-2xl mb-3 text-[#192b6b]">
                <span className="Heading">"Coaching myself with ease"</span>
              </h3>
              <p className="font-montserrat text-sm md:text-base text-[#192b6b] leading-relaxed">
                <span className="Paragraph">I love that I can use it anytime — no partner needed. It's a simple yet profound way to explore decisions and emotions visually.</span>
              </p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <div>
                <p className="font-montserrat font-bold text-[#192b6b]">LAURA CH.</p>
                <p className="font-montserrat text-sm text-[#192b6b]">Personal Development Coach.</p>
              </div>
              <QuoteIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
