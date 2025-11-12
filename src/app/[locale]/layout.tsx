import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  return children;
}
