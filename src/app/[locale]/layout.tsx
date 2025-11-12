import type { Locale } from '@/lib/i18n';
import type { ReactNode } from 'react';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  const locale = resolvedParams.locale as Locale;

  return children;
}
