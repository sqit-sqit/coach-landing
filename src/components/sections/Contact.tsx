"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/useTranslations';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [selectedCountry, setSelectedCountry] = useState({
    code: '+48',
    flag: '🇵🇱',
    name: 'Poland'
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const countries = [
    { code: '+48', flag: '🇵🇱', name: 'Poland' },
    { code: '+93', flag: '🇦🇫', name: 'Afghanistan' },
    { code: '+355', flag: '🇦🇱', name: 'Albania' },
    { code: '+376', flag: '🇦🇩', name: 'Andorra' },
    { code: '+43', flag: '🇦🇹', name: 'Austria' },
    { code: '+375', flag: '🇧🇾', name: 'Belarus' },
    { code: '+32', flag: '🇧🇪', name: 'Belgium' },
    { code: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
    { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
    { code: '+385', flag: '🇭🇷', name: 'Croatia' },
    { code: '+357', flag: '🇨🇾', name: 'Cyprus' },
    { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
    { code: '+45', flag: '🇩🇰', name: 'Denmark' },
    { code: '+372', flag: '🇪🇪', name: 'Estonia' },
    { code: '+358', flag: '🇫🇮', name: 'Finland' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+30', flag: '🇬🇷', name: 'Greece' },
    { code: '+36', flag: '🇭🇺', name: 'Hungary' },
    { code: '+354', flag: '🇮🇸', name: 'Iceland' },
    { code: '+353', flag: '🇮🇪', name: 'Ireland' },
    { code: '+39', flag: '🇮🇹', name: 'Italy' },
    { code: '+383', flag: '🇽🇰', name: 'Kosovo' },
    { code: '+371', flag: '🇱🇻', name: 'Latvia' },
    { code: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
    { code: '+370', flag: '🇱🇹', name: 'Lithuania' },
    { code: '+352', flag: '🇱🇺', name: 'Luxembourg' },
    { code: '+389', flag: '🇲🇰', name: 'North Macedonia' },
    { code: '+356', flag: '🇲🇹', name: 'Malta' },
    { code: '+373', flag: '🇲🇩', name: 'Moldova' },
    { code: '+377', flag: '🇲🇨', name: 'Monaco' },
    { code: '+382', flag: '🇲🇪', name: 'Montenegro' },
    { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
    { code: '+47', flag: '🇳🇴', name: 'Norway' },
    { code: '+351', flag: '🇵🇹', name: 'Portugal' },
    { code: '+40', flag: '🇷🇴', name: 'Romania' },
    { code: '+7', flag: '🇷🇺', name: 'Russia' },
    { code: '+378', flag: '🇸🇲', name: 'San Marino' },
    { code: '+381', flag: '🇷🇸', name: 'Serbia' },
    { code: '+421', flag: '🇸🇰', name: 'Slovakia' },
    { code: '+386', flag: '🇸🇮', name: 'Slovenia' },
    { code: '+34', flag: '🇪🇸', name: 'Spain' },
    { code: '+46', flag: '🇸🇪', name: 'Sweden' },
    { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
    { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+379', flag: '🇻🇦', name: 'Vatican City' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={cn(
      "w-screen h-auto lg:h-[1136px] bg-gradient-to-b from-[#FCF9F1] to-[#FCF9F1] relative z-10",
      "ml-[calc((100vw-100%)/-2)] mr-[calc((100vw-100%)/-2)]",
      className
    )}>
      {/* Main Container */}
      <div className="flex flex-col items-center p-0 gap-[30px] md:gap-[50px] w-full max-w-[1111px] h-auto lg:h-[1012px] mx-auto pt-[50px] md:pt-[70px] lg:pt-[98px] px-4 md:px-8 lg:px-0">
        {/* Header Section */}
        <div className="flex flex-col items-center p-0 gap-[20px] md:gap-[30px] lg:gap-[40px] w-full max-w-[613.67px] h-auto flex-none order-0 flex-grow-0">
          {/* Tag */}
          <div className="inline-flex justify-center items-center px-6 py-1 gap-2.5 w-[162px] h-[42px] bg-[#E0F2F0] rounded-[30px]">
            <h4 className="w-[114px] h-[38px] font-montserrat font-semibold text-[17px] leading-[38px] text-center uppercase text-[#3D7A74]">
              {t('contact.title')}
            </h4>
          </div>

          {/* Frame 335 - Header Content */}
          <div className="flex flex-col items-center p-0 gap-[12px] md:gap-[18px] w-full max-w-[613.67px] h-auto flex-none order-1 self-stretch flex-grow-0">
            {/* Main Heading */}
            <h2 className="w-full h-auto font-montserrat font-semibold text-[24px] md:text-[30px] lg:text-[36px] leading-tight md:leading-[44px] text-center text-[#333333] flex-none order-0 self-stretch flex-grow-0">
              Get in touch today
            </h2>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex flex-col justify-end items-center p-[30px_20px] md:p-[45px_25px] lg:p-[60px_30px] gap-[40px] md:gap-[50px] lg:gap-[66px] w-full max-w-[928px] h-auto lg:h-[696px] bg-[#FBD346] rounded-[20px] flex-none order-1 flex-grow-0 mb-8 md:mb-12 lg:mb-0">
          {/* Form Content */}
          <div className="flex flex-col lg:flex-row justify-center items-start p-0 gap-[24px] lg:gap-[30px] w-full max-w-[868px] h-auto lg:h-[444px] flex-none order-0 flex-grow-0">
            {/* Left Column */}
            <div className="flex flex-col items-start p-0 gap-[20px] md:gap-[24px] w-full lg:w-[419px] h-auto lg:h-[444px] flex-none order-0 flex-grow-0">
              {/* Name Field */}
              <div className="flex flex-col items-start p-0 gap-[12px] w-full lg:w-[419px] h-auto flex-none order-0 flex-grow-0">
                <div className="flex flex-col items-start p-0 gap-[12px] w-full lg:w-[419px] h-auto flex-none order-0 self-stretch flex-grow-0">
                  {/* Label */}
                  <label className="w-[56px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-[#333333] flex-none order-0 flex-grow-0">
                    Name*
                  </label>

                  {/* Input Text */}
                  <div className="w-full lg:w-[419px] h-[72px] flex-none order-1 flex-grow-0">
                    <div className="box-border flex flex-col items-start p-[24px] gap-[10px] w-full lg:w-[419px] h-[72px] bg-white rounded-[20px] flex-none order-0 flex-grow-0">
                      <input
                        type="text"
                        name="name"
                        placeholder="John Carter"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full max-w-[176px] h-[24px] font-montserrat font-normal text-[16px] leading-[24px] text-[#868686] flex-none order-1 flex-grow-0 border-none outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Field */}
              <div className="flex flex-col items-start p-0 gap-[12px] w-full lg:w-[419px] h-auto flex-none order-1 flex-grow-0">
                {/* Label */}
                <label className="w-auto h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-[#333333] flex-none order-0 flex-grow-0">
                  Phone
                </label>

                <div className="flex flex-col items-start p-0 gap-[4px] w-full lg:w-[419px] h-auto flex-none order-1 self-stretch flex-grow-0">
                  {/* Input with country code */}
                  <div className="w-full lg:w-[419px] h-[72px] flex-none order-0 self-stretch flex-grow-0">
                      <div className="box-border flex flex-col items-start p-[24px] gap-[10px] w-full lg:w-[419px] h-[72px] bg-white rounded-[20px] flex-none order-0 flex-grow-0 relative">
                        <div className="flex flex-row items-center p-0 gap-[10px] w-full h-[24px] flex-none order-2 flex-grow-0">
                          <div className="box-border flex flex-row items-center p-0 gap-[8px] w-auto h-[24px] border-r border-[#CCCCCC] pr-2 flex-none order-0 flex-grow-0 relative">
                            {/* Country Selector */}
                            <button
                              type="button"
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              className="flex flex-row items-center gap-[8px] bg-transparent border-none cursor-pointer"
                            >
                              <span className="text-[20px]">{selectedCountry.flag}</span>
                              <span className="font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#333333]">
                                {selectedCountry.code}
                              </span>
                              <div className="w-[20px] h-[20px]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </button>

                            {/* Dropdown Menu */}
                            {isCountryDropdownOpen && (
                              <div className="absolute top-full left-0 mt-2 w-[180px] md:w-[200px] bg-white rounded-[12px] shadow-lg z-50 max-h-[200px] md:max-h-[300px] overflow-y-auto">
                                {countries.map((country) => (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setIsCountryDropdownOpen(false);
                                    }}
                                    className="w-full flex flex-row items-center gap-[8px] p-[12px] hover:bg-gray-100 cursor-pointer border-none bg-transparent text-left transition-colors"
                                  >
                                    <span className="text-[20px]">{country.flag}</span>
                                    <span className="font-montserrat font-normal text-[14px] text-[#333333]">
                                      {country.name} ({country.code})
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="123 456 789"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="flex-1 h-[24px] font-montserrat font-normal text-[16px] leading-[24px] text-[#868686] border-none outline-none bg-transparent"
                          />
                        </div>
                      </div>
                  </div>

                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col items-start p-0 gap-[12px] w-full h-auto flex-none order-2 flex-grow-0">
                <div className="flex flex-col items-start p-0 gap-[12px] w-full h-auto flex-none order-0 self-stretch flex-grow-0">
                  {/* Label */}
                  <label className="w-[80px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-[#333333] flex-none order-0 flex-grow-0">
                    Email*
                  </label>

                  {/* Input */}
                  <div className="w-full h-[72px] flex-none order-1 self-stretch flex-grow-0">
                    <div className="box-border flex flex-col items-start p-[24px] gap-[10px] w-full h-[72px] bg-white rounded-[20px] flex-none order-0 flex-grow-0">
                      <input
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-[24px] font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#868686] flex-none order-1 flex-grow-0 border-none outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start p-0 gap-[20px] md:gap-[24px] w-full lg:w-[419px] h-auto lg:h-[372px] flex-none order-1 flex-grow-0">
              {/* Company Field */}
              <div className="flex flex-col items-start p-0 gap-[12px] w-full lg:w-[419px] h-auto flex-none order-0 flex-grow-0">
                <div className="flex flex-col items-start p-0 gap-[12px] w-full lg:w-[419px] h-auto flex-none order-0 self-stretch flex-grow-0">
                  {/* Label */}
                  <label className="w-[54px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-[#333333] flex-none order-0 flex-grow-0">
                    Company
                  </label>

                  {/* Input */}
                  <div className="w-full lg:w-[419px] h-[72px] flex-none order-1 self-stretch flex-grow-0">
                    <div className="box-border flex flex-col items-start p-[24px] gap-[10px] w-full lg:w-[419px] h-[72px] bg-white rounded-[20px] flex-none order-0 flex-grow-0">
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full h-[24px] font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#868686] flex-none order-1 flex-grow-0 border-none outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col items-start p-0 gap-[12px] w-full h-auto flex-none order-1 flex-grow-0">
                {/* Label */}
                <label className="w-[73px] h-[24px] font-montserrat font-semibold text-[16px] leading-[24px] text-[#333333] flex-none order-0 flex-grow-0">
                  Message
                </label>

                {/* Text Area Wrapper */}
                <div className="flex flex-col items-start p-0 gap-[4px] w-full h-auto flex-none order-1 self-stretch flex-grow-0">
                  <div className="box-border flex flex-row items-start p-[18px_18px_60px] md:p-[20px_20px_80px] lg:p-[24px_24px_100px] w-full h-[191px] md:h-[203px] lg:h-[215px] bg-white rounded-[20px] flex-none order-0 flex-grow-0">
                    <textarea
                      name="message"
                      placeholder="Please type your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full h-auto font-montserrat font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#868686] flex-none order-0 flex-grow-0 border-none outline-none bg-transparent resize-none"
                      rows={6}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-row justify-center items-center p-[18px_28px] md:p-[22px_32px] lg:p-[27px_36px] gap-[8px] w-full max-w-[195px] h-[54px] md:h-[60px] lg:h-[66px] bg-[#3D7A74] rounded-[40px] flex-none order-1 flex-grow-0 hover:bg-[#2F5F5A] transition-colors cursor-pointer">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-auto h-auto font-montserrat font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] text-center text-white flex-none order-2 flex-grow-0"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
