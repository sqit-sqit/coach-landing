import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  await params;
  return children;
}
