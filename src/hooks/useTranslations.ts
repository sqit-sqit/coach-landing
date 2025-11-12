'use client';

import { useParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { useState, useEffect } from 'react';

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messagesModule = await import(`@/messages/${locale}.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error('Failed to load messages:', error);
        // Fallback to English
        const fallbackModule = await import('@/messages/en.json');
        setMessages(fallbackModule.default);
      }
    };
    
    loadMessages();
  }, [locale]);

  const getTranslation = (key: string): string => {
    if (!messages) return key;
    
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value === 'string') {
      return value;
    }
    return key;
  };

  const getArray = (key: string): string[] => {
    if (!messages) return [];
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return Array.isArray(value) ? value : [];
  };

  const getArrayOfObjects = (key: string): any[] => {
    if (!messages) return [];
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return Array.isArray(value) ? value : [];
  };

  return {
    t: getTranslation,
    getArray,
    getArrayOfObjects,
    messages,
    locale,
  };
}
