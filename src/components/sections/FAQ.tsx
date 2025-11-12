"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface FAQProps {
  className?: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const { t } = useTranslations();
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqData: FAQItem[] = [
    {
      id: 0,
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer')
    },
    {
      id: 1,
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer')
    },
    {
      id: 2,
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer')
    },
    {
      id: 3,
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer')
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className={cn(
      "w-screen h-auto lg:h-[896px] bg-white flex-none order-17 flex-grow-0 relative",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Frame 1261159562 - Main Content Container */}
      <div className="w-full max-w-[1111px] h-auto lg:h-[700px] mx-auto pt-[50px] md:pt-[70px] lg:pt-[98px] pb-[50px] md:pb-[70px] lg:pb-0 flex flex-col items-start p-0 gap-[40px] md:gap-[50px] lg:gap-[70px] px-4 md:px-8 lg:px-0">
        {/* Frame 1261159529 - Header Container */}
        <div className="flex flex-col items-center p-0 gap-[30px] md:gap-[40px] lg:gap-[50px] w-full h-auto flex-none order-0 self-stretch flex-grow-0">
          {/* Frame 1261159528 - Title Container */}
          <div className="flex flex-col items-center p-0 gap-[24px] md:gap-[32px] lg:gap-[40px] w-full max-w-[613.67px] h-auto flex-none order-0 flex-grow-0">
            {/* Frame 335 - Title */}
            <div className="flex flex-col items-center p-0 gap-[12px] md:gap-[18px] w-full h-auto flex-none order-0 self-stretch flex-grow-0">
              <h2 className="w-full h-auto font-montserrat font-semibold text-2xl md:text-3xl lg:text-[36px] leading-tight lg:leading-[44px] text-center text-[#333333] flex-none order-0 self-stretch flex-grow-0">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>

        {/* Frame 1261159565 - FAQ Items Container */}
        <div className="flex flex-col items-start p-0 gap-[12px] md:gap-[16px] lg:gap-[18px] w-full max-w-[1112px] h-auto lg:h-[586px] flex-none order-1 flex-grow-0">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "box-border flex flex-col items-start p-[20px] md:p-[28px] lg:p-[34px] gap-[20px] md:gap-[28px] lg:gap-[34px] w-full max-w-[1112px] border border-[#D1D5E1] rounded-[16px] md:rounded-[20px] flex-none order-" + index + " flex-grow-0 transition-all duration-300",
                openItems.includes(item.id)
                  ? "bg-[#FCF9F1] border-[#FFFDF1] h-auto"
                  : "h-auto min-h-[80px] md:min-h-[90px] lg:h-[102px]"
              )}
            >
              {/* Frame 1261159564 - Question Row */}
              <div className="flex flex-row justify-between items-start p-0 w-full h-auto flex-none order-0 self-stretch flex-grow-0">
                {/* Frame 1261159557 - Question Container */}
                <div className="flex flex-col justify-center items-start p-0 gap-[20px] md:gap-[30px] lg:gap-[73px] mx-auto w-full h-auto flex-none order-0 flex-grow min-w-0">
                  {/* Frame 1261159554 - Question Text Container */}
                  <div className="flex flex-col items-start p-0 gap-[16px] md:gap-[20px] lg:gap-[24px] w-full h-auto flex-none order-0 flex-grow-0 min-w-0">
                    {/* Frame 1261159552 - Question */}
                    <div className="flex flex-row items-center justify-between p-0 gap-[12px] md:gap-[18px] lg:gap-[23px] w-full h-auto flex-none order-0 self-stretch flex-grow-0 min-w-0">
                      <h3 className="flex-1 min-w-0 h-auto font-montserrat font-semibold text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed lg:leading-[30px] text-[#333333] break-words word-break-break-word overflow-wrap-anywhere pr-2">
                        {item.question}
                      </h3>
                      
                      {/* Icon Container */}
                      <div className="min-w-[44px] min-h-[44px] w-[44px] h-[44px] flex-none order-1 flex-grow-0 relative flex-shrink-0 flex items-center justify-center">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full h-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                          aria-label={openItems.includes(item.id) ? 'Collapse question' : 'Expand question'}
                        >
                          {openItems.includes(item.id) ? (
                            // Minus icon (expanded)
                            <div className="w-[20px] h-[2px] bg-[#1E3A8A]"></div>
                          ) : (
                            // Plus icon (collapsed)
                            <div className="relative w-[20px] h-[20px]">
                              <div className="absolute w-[20px] h-[2px] bg-[#1E3A8A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                              <div className="absolute w-[2px] h-[20px] bg-[#1E3A8A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Answer Container - Only visible when expanded */}
              {openItems.includes(item.id) && (
                <div className="flex flex-col items-start p-0 gap-[20px] md:gap-[30px] lg:gap-[73px] w-full h-auto flex-none order-1 flex-grow-0">
                  {/* Frame 1261159554 - Answer Container */}
                  <div className="flex flex-col items-start p-0 gap-[16px] md:gap-[20px] lg:gap-[24px] w-full h-auto flex-none order-0 self-stretch flex-grow-0">
                    {/* Frame 1261159552 - Answer */}
                    <div className="flex flex-col items-start p-0 gap-[16px] md:gap-[20px] lg:gap-[23px] w-full h-auto flex-none order-0 self-stretch flex-grow-0">
                      <p className="w-full h-auto font-montserrat font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-relaxed lg:leading-[30px] text-[#333333] flex-none order-0 self-stretch flex-grow-0">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
