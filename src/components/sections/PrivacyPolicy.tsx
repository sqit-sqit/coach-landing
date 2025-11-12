"use client";

import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { cn } from '@/lib/utils';

interface PrivacyPolicyProps {
  className?: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ className }) => {
  const { t, getArray, getArrayOfObjects } = useTranslations();
  
  return (
    <section className={cn(
      "w-full bg-white py-8 md:py-12 lg:py-16",
      className
    )}>
      <div className="w-full max-w-[1110px] mx-auto px-4 md:px-8 lg:px-0">
        <div className="space-y-6 md:space-y-8">
          {/* Title */}
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-[#333333]">
            {t('privacyPolicy.title')}
          </h1>
          
          {/* Intro */}
          <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
            <p>{t('privacyPolicy.intro')}</p>
            <p>{t('privacyPolicy.commitment')}</p>
          </div>
          
          {/* Last Updated */}
          <p className="font-montserrat font-normal text-sm md:text-base text-[#868686]">
            <strong>{t('privacyPolicy.lastUpdated')}:</strong> {t('privacyPolicy.lastUpdatedDate')}
          </p>

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {/* Section 1: Data Controller */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section1.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section1.content')}</p>
                <p><strong>{t('privacyPolicy.section1.company')}</strong></p>
                <p>{t('privacyPolicy.section1.address')}</p>
                <p>
                  📧 <a href="mailto:admin@flow-xr.com" className="text-[#3D7A74] hover:underline">
                    admin@flow-xr.com
                  </a>
                </p>
                <p>{t('privacyPolicy.section1.footer')}</p>
              </div>
            </div>

            {/* Section 2: Categories of Personal Data */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section2.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section2.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section2.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3: Purpose and Legal Basis */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section3.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section3.content')}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">{t('privacyPolicy.section3.tableHeader1')}</th>
                        <th className="border border-gray-300 p-3 text-left">{t('privacyPolicy.section3.tableHeader2')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getArrayOfObjects('privacyPolicy.section3.tableRows').map((row: any, index: number) => (
                        <tr key={index}>
                          <td className="border border-gray-300 p-3">{row.purpose}</td>
                          <td className="border border-gray-300 p-3">{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>{t('privacyPolicy.section3.footer')}</p>
              </div>
            </div>

            {/* Section 4: Use of AI Services */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section4.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section4.content')}</p>
                <p><strong>{t('privacyPolicy.section4.note')}</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section4.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 5: Google OAuth */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section5.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section5.content')}</p>
                <p>{t('privacyPolicy.section5.content2')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section5.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section5.footer')}</p>
              </div>
            </div>

            {/* Section 6: Use of Local Storage */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section6.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section6.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section6.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section6.footer')}</p>
              </div>
            </div>

            {/* Section 7: Data Sharing */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section7.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section7.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section7.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section7.content2')}</p>
                <p>{t('privacyPolicy.section7.footer')}</p>
              </div>
            </div>

            {/* Section 8: Data Retention */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section8.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section8.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section8.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section8.footer')}</p>
              </div>
            </div>

            {/* Section 9: Data Security */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section9.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section9.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section9.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section9.content2')}</p>
                <p>{t('privacyPolicy.section9.footer')}</p>
              </div>
            </div>

            {/* Section 10: Your Rights */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section10.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section10.content')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section10.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section10.content2')}</p>
                <p>{t('privacyPolicy.section10.footer')}</p>
              </div>
            </div>

            {/* Section 11: Cookies */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section11.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section11.content')}</p>
              </div>
            </div>

            {/* Section 12: Changes */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section12.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section12.content')}</p>
              </div>
            </div>

            {/* Section 13: Contact */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section13.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <p>{t('privacyPolicy.section13.content')}</p>
                <p>
                  📧 <a href="mailto:admin@flow-xr.com" className="text-[#3D7A74] hover:underline">
                    admin@flow-xr.com
                  </a>
                </p>
              </div>
            </div>

            {/* Section 14: Summary */}
            <div className="space-y-4">
              <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-[#333333]">
                {t('privacyPolicy.section14.title')}
              </h2>
              <div className="space-y-3 font-montserrat font-normal text-base md:text-lg leading-relaxed text-[#333333]">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {getArray('privacyPolicy.section14.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{t('privacyPolicy.section14.footer')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrivacyPolicy };

