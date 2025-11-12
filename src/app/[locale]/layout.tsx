import type { LayoutProps } from 'next';
import type { Locale } from '@/lib/i18n';

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const resolvedParams = await params;

  const locale = resolvedParams.locale as Locale;

  return children;
}
