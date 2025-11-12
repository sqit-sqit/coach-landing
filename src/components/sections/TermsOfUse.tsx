"use client";

import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { cn } from '@/lib/utils';

interface TermsOfUseProps {
  className?: string;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ className }) => {
  const { t, getArray } = useTranslations();
  
  return (
    <section className={cn(
      "w-full bg-white py-8 md:py-12 lg:py-16",
      className
    )}>
      <div className="w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0">
        <div className="space-y-6 md:space-y-8">
          {/* Title */}
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-[#333333]">
            {t('termsOfUse.title')}
          </h1>
          
          {/* Welcome text */}
          <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
            <p>{t('termsOfUse.welcome')}</p>
            <p>{t('termsOfUse.intro')}</p>
          </div>
          
          {/* Last Updated */}
          <p className="font-montserrat font-normal text-sm md:text-base text-[#868686]">
            <strong>{t('termsOfUse.lastUpdated')}:</strong> {t('termsOfUse.lastUpdatedDate')}
          </p>

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {/* Section 1: Definitions */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section1.title')}
              </h2>
              <div className="space-y-2 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section1.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 2: Acceptance */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section2.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section2.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section2.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('termsOfUse.section2.footer')}</p>
              </div>
            </div>

            {/* Section 3: Description */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section3.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section3.content')}</p>
                <p>{t('termsOfUse.section3.features')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section3.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p><strong>{t('termsOfUse.section3.disclaimer')}</strong></p>
              </div>
            </div>

            {/* Section 4: User Responsibilities */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section4.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section4.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section4.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('termsOfUse.section4.footer')}</p>
              </div>
            </div>

            {/* Section 5: AI Disclaimer */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section5.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section5.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section5.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('termsOfUse.section5.footer')}</p>
              </div>
            </div>

            {/* Section 6: Account Registration */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section6.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section6.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('termsOfUse.section6.item1')}</li>
                  <li>{t('termsOfUse.section6.item2')}</li>
                </ul>
                <p>{t('termsOfUse.section6.content2')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section6.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('termsOfUse.section6.footer')}</p>
              </div>
            </div>

            {/* Section 7: Guest Users */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section7.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section7.content')}</p>
              </div>
            </div>

            {/* Section 8: Intellectual Property */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section8.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section8.content')}</p>
                <p>{t('termsOfUse.section8.content2')}</p>
              </div>
            </div>

            {/* Section 9: Privacy */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section9.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section9.content')}</p>
              </div>
            </div>

            {/* Section 10: Availability */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section10.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section10.content')}</p>
              </div>
            </div>

            {/* Section 11: Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section11.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section11.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('termsOfUse.section11.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('termsOfUse.section11.footer')}</p>
              </div>
            </div>

            {/* Section 12: Termination */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section12.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section12.content')}</p>
                <p>{t('termsOfUse.section12.content2')}</p>
              </div>
            </div>

            {/* Section 13: Governing Law */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section13.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section13.content')}</p>
              </div>
            </div>

            {/* Section 14: Contact */}
            <div className="space-y-4 pt-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('termsOfUse.section14.title')}
              </h2>
              <div className="space-y-2 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('termsOfUse.section14.content')}</p>
                <p>
                  <a href="mailto:admin@flow-xr.com" className="text-[#3D7A74] hover:underline">
                    admin@flow-xr.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TermsOfUse };
