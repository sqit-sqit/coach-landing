"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { locale } = useTranslations();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    console.log('Subscribe:', email);
  };

  return (
    <footer className={cn(
      "w-screen h-auto lg:h-[477px] bg-white relative",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Main Container */}
      <div className="w-full max-w-[1111px] h-auto mx-auto pt-[50px] md:pt-[70px] lg:pt-[98px] pb-[50px] md:pb-[70px] lg:pb-[98px] px-4 md:px-8 lg:px-0">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px] md:gap-[50px] lg:gap-[60px] w-full h-auto">
          
          {/* Left Column - Newsletter */}
          <div className="flex flex-col items-start gap-[16px] md:gap-[20px] lg:gap-[24px] w-full lg:w-[444px] h-auto order-0">
            {/* Logo */}
            <div className="w-[120px] h-[40px] md:w-[135px] md:h-[45px] lg:w-[150px] lg:h-[50px] relative flex-none">
              <Image
                src="/logo.svg"
                alt="FlowXR Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Newsletter Form */}
            <div className="flex flex-col items-start gap-[12px] w-full max-w-[419px] h-auto flex-none">
              <label className="w-auto h-auto font-montserrat font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-[#333333]">
                Subscribe to our newsletter
              </label>

              {/* Input Text */}
              <form onSubmit={handleSubscribe} className="flex flex-row items-start p-[10px] gap-[10px] w-full h-auto rounded-[50px]">
                <div className="box-border flex flex-col items-start p-[18px] md:p-[20px] lg:p-[24px] gap-[10px] w-full bg-white border border-[#333333] rounded-[20px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-[24px] font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#868686] border-none outline-none bg-transparent"
                  />
                </div>
              </form>

              {/* Hint - Hidden */}
              <div className="hidden flex flex-row items-center gap-[2px] w-auto h-[20px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#868686" strokeWidth="1"/>
                  <path d="M8 5.33333V8" stroke="#868686" strokeWidth="1" strokeLinecap="round"/>
                  <circle cx="8" cy="10.6667" r="0.5" fill="#868686"/>
                </svg>
                <span className="font-montserrat font-normal text-[12px] md:text-[13px] lg:text-[14px] leading-[20px] text-[#868686]">
                  This is a hint text to help user.
                </span>
              </div>
            </div>

            {/* Subscribe Button */}
            <button
              onClick={handleSubscribe}
              className="box-border flex flex-row justify-center items-center py-[18px] md:py-[20px] lg:py-[24px] px-[28px] md:px-[32px] lg:px-[36px] gap-[8px] w-auto h-[54px] md:h-[60px] lg:h-[66px] bg-white border border-[#CCCCCC] rounded-[40px] hover:bg-gray-50 transition-colors"
            >
              <span className="font-montserrat font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-[18px] text-center text-[#3D7A74]">
                Subscribe
              </span>
            </button>
          </div>

          {/* Right Column - Links and Contact */}
          <div className="flex flex-col md:flex-row items-start gap-[30px] md:gap-[40px] lg:gap-[50px] w-full lg:w-[616px] h-auto order-1">
            
            {/* Product Section */}
            <div className="w-full md:w-[195px] h-auto flex-none">
              <h3 className="font-montserrat font-bold text-[16px] md:text-[17px] lg:text-[18px] leading-[27px] text-[#333333] mb-[20px] md:mb-[24px] lg:mb-[30px]">
                Product
              </h3>
              <div className="flex flex-col items-start gap-[16px] md:gap-[18px] lg:gap-[20px]">
                <a href={`/${locale}#for-coaches-therapists`} className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333] hover:text-[#3D7A74] transition-colors min-h-[44px] flex items-center py-2">
                  For coaches & therapists
                </a>
                <a href={`/${locale}#for-yourself`} className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333] hover:text-[#3D7A74] transition-colors min-h-[44px] flex items-center py-2">
                  For yourself
                </a>
                <a href={`/${locale}#testimonials`} className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333] hover:text-[#3D7A74] transition-colors min-h-[44px] flex items-center py-2">
                  Reviews
                </a>
              </div>
            </div>

            {/* Company Section */}
            <div className="w-full md:w-[90px] h-auto flex-none">
              <h3 className="font-montserrat font-bold text-[16px] md:text-[17px] lg:text-[18px] leading-[27px] text-[#333333] mb-[20px] md:mb-[24px] lg:mb-[30px]">
                Company
              </h3>
              <div className="flex flex-col items-start gap-[16px] md:gap-[18px] lg:gap-[20px]">
                <a href={`/${locale}#philosophy`} className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333] hover:text-[#3D7A74] transition-colors min-h-[44px] flex items-center py-2">
                  Philosophy
                </a>
                <a href="#" className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333] hover:text-[#3D7A74] transition-colors min-h-[44px] flex items-center py-2">
                  News
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-[231px] h-auto flex-none">
              <h3 className="font-montserrat font-bold text-[16px] md:text-[17px] lg:text-[18px] leading-[27px] text-[#333333] mb-[20px] md:mb-[24px] lg:mb-[30px]">
                Contact us
              </h3>
              <div className="flex flex-col items-start gap-[16px] md:gap-[18px] lg:gap-[20px]">
                {/* Email */}
                <a href="mailto:kontakt@adamgrono.eu" className="flex flex-row items-center gap-[10px] w-full min-h-[44px] py-2 hover:text-[#3D7A74] transition-colors group">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#333333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#3D7A74]"/>
                    <path d="M22 6L12 13L2 6" stroke="#333333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#3D7A74]"/>
                  </svg>
                  <span className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333]">
                    kontakt@adamgrono.eu
                  </span>
                </a>

                {/* Phone */}
                <a href="tel:+48601130255" className="flex flex-row items-center gap-[10px] w-full min-h-[44px] py-2 hover:text-[#3D7A74] transition-colors group">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-none">
                    <path d="M22 16.92V19.92C22 20.49 21.54 20.95 20.97 20.92C10.05 20.41 3.51 13.88 3 2.97C2.97 2.4 3.43 1.94 4 1.94H7C7.55 1.94 8 2.39 8 2.94C8 4.43 8.26 5.86 8.75 7.18C8.88 7.54 8.76 7.95 8.47 8.24L6.9 9.81C8.5 13.08 10.92 15.5 14.19 17.1L15.76 15.53C16.05 15.24 16.46 15.12 16.82 15.25C18.14 15.74 19.57 16 21.06 16C21.61 16 22.06 16.45 22.06 17V19.92H22Z" stroke="#333333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#3D7A74]"/>
                  </svg>
                  <span className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333]">
                    +48 601 130 255
                  </span>
                </a>

                {/* Social Icons */}
                <div className="flex flex-row items-center gap-[16px] md:gap-[20px] w-auto min-h-[44px] mt-[8px]">
                  {/* Facebook */}
                  <a href="#" className="min-w-[44px] min-h-[44px] w-[44px] h-[44px] flex-none relative group flex items-center justify-center">
                    <div className="absolute w-[30px] h-[30px] bg-[#3D7A74] rounded-full group-hover:bg-[#2F5F5A] transition-colors"></div>
                    <Image
                      src="/social_FB_icon.svg"
                      alt="Facebook"
                      width={30}
                      height={30}
                      className="relative z-10 w-[30px] h-[30px] object-contain"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="min-w-[44px] min-h-[44px] w-[44px] h-[44px] flex-none relative group flex items-center justify-center">
                    <div className="absolute w-[30px] h-[30px] bg-[#3D7A74] rounded-full group-hover:bg-[#2F5F5A] transition-colors"></div>
                    <Image
                      src="/social_LI_icon.svg"
                      alt="LinkedIn"
                      width={30}
                      height={30}
                      className="relative z-10 w-[30px] h-[30px] object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-screen h-auto md:h-[93px] bg-[#3D7A74] flex items-center justify-center ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1225px] h-auto md:h-[30px] px-4 md:px-8 lg:px-0 py-4 md:py-0 gap-4 md:gap-0">
          {/* Copyright Text */}
          <div className="w-auto h-auto text-center md:text-left">
            <p className="font-dm-sans font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] text-white whitespace-nowrap">
              Copyright © 2025 FLOW-XR
            </p>
          </div>

          {/* Footer Right - Links */}
          <div className="w-auto h-auto flex flex-col items-center md:flex-row md:items-center md:text-right gap-2 md:gap-0">
            <p className="font-dm-sans font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] text-white whitespace-nowrap">
              All Rights Reserved
            </p>
            <div className="flex flex-row items-center gap-1 md:gap-2 text-white">
              <span className="hidden md:inline">|</span>
              <a href={`/${locale}/terms-of-use`} className="font-dm-sans font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] text-white hover:underline transition-all min-h-[44px] flex items-center px-2 py-2 md:px-0 md:py-1">
                Terms of Use
              </a>
              <span className="min-h-[44px] flex items-center">|</span>
              <a href={`/${locale}/privacy-policy`} className="font-dm-sans font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] text-white hover:underline transition-all min-h-[44px] flex items-center px-2 py-2 md:px-0 md:py-1">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

