"use client";

import React, { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { Button } from '@/components/ui';

interface SignUpFormProps {
  locale: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ locale }) => {
  const { t } = useTranslations();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-white">
      <div className="w-full max-w-[500px] mx-auto pr-4">
        {/* Main Title */}
        <div className="text-center mb-8">
            <h1 className="font-montserrat font-semibold text-3xl md:text-4xl text-blue-dark mb-2">
            {t('auth.signup.title')}
          </h1>
          <p className="font-montserrat font-medium text-lg text-grey-middle">
            {t('auth.signup.subtitle')}
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-[20px] p-8">
          {/* Email Field */}
          <div className="mb-6">
            <label className="block font-montserrat font-medium text-sm text-grey-text mb-2">
              {t('auth.signup.emailLabel')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[70px] px-[30px] py-[20px] border border-[#E5E5E5] rounded-[44px] font-montserrat text-base text-grey-text focus:outline-none focus:ring-2 focus:ring-blue-dark focus:border-transparent"
              placeholder={t('auth.signup.emailPlaceholder')}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block font-montserrat font-medium text-sm text-grey-text mb-2">
              {t('auth.signup.passwordLabel')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[70px] px-[30px] py-[20px] border border-[#E5E5E5] rounded-[44px] font-montserrat text-base text-grey-text focus:outline-none focus:ring-2 focus:ring-blue-dark focus:border-transparent"
              placeholder={t('auth.signup.passwordPlaceholder')}
            />
          </div>

          {/* Terms and Privacy Checkbox */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-1 min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 -ml-2 -mt-2 p-2">
                <input
                  type="checkbox"
                  checked={agreeTerms && agreePrivacy}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    setAgreePrivacy(e.target.checked);
                  }}
                  className="w-5 h-5 border border-[#E5E5E5] rounded checked:bg-blue-dark checked:border-blue-dark focus:ring-2 focus:ring-blue-dark cursor-pointer"
                  required
                />
              </div>
              <span className="font-montserrat text-sm text-grey-text leading-relaxed">
                {t('auth.signup.agreeTerms')}{' '}
                <a href={`/${locale}/terms-of-use`} target="_blank" rel="noopener noreferrer" className="text-blue-dark hover:underline font-semibold">
                  {t('auth.signup.termsOfUse')}
                </a>
                {' '}{t('auth.signup.agreePrivacy')}{' '}
                <a href={`/${locale}/privacy-policy`} target="_blank" rel="noopener noreferrer" className="text-blue-dark hover:underline font-semibold">
                  {t('auth.signup.privacyPolicy')}
                </a>
              </span>
            </label>
          </div>

          {/* Continue Button */}
          <Button
            variant="primary"
            size="md"
            state={agreeTerms && agreePrivacy ? "default" : "disabled"}
            className="w-full mb-6 rounded-[40px]"
            disabled={!agreeTerms || !agreePrivacy}
          >
            {t('auth.signup.continueButton')}
          </Button>

          {/* Separator */}
          <div className="flex items-center justify-center mb-6">
            <span className="font-montserrat text-sm text-grey-middle">{t('auth.signup.orSeparator')}</span>
          </div>

          {/* Google Sign Up Button */}
          <button className="w-full h-[70px] px-[30px] py-[20px] bg-white border border-[#E5E5E5] text-grey-text font-montserrat font-medium text-base rounded-[44px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('auth.signup.googleButton')}
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="font-montserrat text-base text-grey-middle">
            {t('auth.signup.loginLink')}{' '}
            <a href={`/${locale}/auth/login`} className="font-semibold text-blue-dark hover:underline">
              {t('auth.signup.loginButton')}
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export { SignUpForm };
