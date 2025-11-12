import { Locale, defaultLocale, locales } from './i18n';

export async function getTranslations(locale: Locale | undefined) {
  try {
    const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale as Locale : defaultLocale;
    const messages = await import(`@/messages/${safeLocale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Fallback to English
    const fallbackMessages = await import('@/messages/en.json');
    return fallbackMessages.default;
  }
}

export function getTranslation(messages: any, key: string): string {
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
}


