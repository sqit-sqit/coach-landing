"use client";

import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { Button } from '@/components/ui';

interface LoginFormProps {
  locale: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ locale }) => {
  const { t } = useTranslations();
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-white">
      <div className="w-full max-w-[500px] mx-auto pr-4">
        {/* Main Title */}
        <div className="text-center mb-8">
            <h1 className="font-montserrat font-semibold text-3xl md:text-4xl text-blue-dark mb-2">
            {t('auth.login.title')}
          </h1>
          <p className="font-montserrat font-medium text-lg text-grey-middle">
            {t('auth.login.subtitle')}
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-[20px] p-8">
          {/* Email Field */}
          <div className="mb-6">
            <label className="block font-montserrat font-medium text-sm text-grey-text mb-2">
              {t('auth.login.emailLabel')}
            </label>
            <input
              type="email"
              className="w-full h-[70px] px-[30px] py-[20px] border border-[#E5E5E5] rounded-[44px] font-montserrat text-base text-grey-text focus:outline-none focus:ring-2 focus:ring-blue-dark focus:border-transparent"
              placeholder={t('auth.login.emailPlaceholder')}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block font-montserrat font-medium text-sm text-grey-text mb-2">
              {t('auth.login.passwordLabel')}
            </label>
            <input
              type="password"
              className="w-full h-[70px] px-[30px] py-[20px] border border-[#E5E5E5] rounded-[44px] font-montserrat text-base text-grey-text focus:outline-none focus:ring-2 focus:ring-blue-dark focus:border-transparent"
              placeholder={t('auth.login.passwordPlaceholder')}
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-6">
            <a href="#" className="font-montserrat font-medium text-sm text-blue-dark hover:underline">
              {t('auth.login.forgotPassword')}
            </a>
          </div>

          {/* Continue Button */}
          <Button
            variant="primary"
            size="md"
            state="default"
            className="w-full mb-6 rounded-[40px]"
          >
            {t('auth.login.continueButton')}
          </Button>

          {/* Separator */}
          <div className="flex items-center justify-center mb-6">
            <span className="font-montserrat text-sm text-grey-middle">{t('auth.login.orSeparator')}</span>
          </div>

          {/* Google Login Button */}
          <button className="w-full h-[70px] px-[30px] py-[20px] bg-white border border-[#E5E5E5] text-grey-text font-montserrat font-medium text-base rounded-[44px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('auth.login.googleButton')}
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="font-montserrat text-base text-grey-middle">
            {t('auth.login.signupLink')}{' '}
            <a href={`/${locale}/auth/signup`} className="font-semibold text-blue-dark hover:underline">
              {t('auth.login.signupButton')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };






