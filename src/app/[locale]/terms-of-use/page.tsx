import { Header } from '@/components/layout';
import { TermsOfUse, Footer } from '@/components/sections';
import type { Metadata } from 'next';
import { Locale, defaultLocale, locales } from '@/lib/i18n';
import { JsonLd } from '@/components/seo/JsonLd';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://flow-xr.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const isEn = safeLocale === 'en';

  const title = isEn ? 'Terms of Use | Flow‑XR' : 'Warunki użytkowania | Flow‑XR';
  const description = isEn
    ? 'The rules for using Flow‑XR, including account, guest mode, AI‑generated content disclaimer, and user responsibilities.'
    : 'Zasady korzystania z Flow‑XR, w tym konto, tryb gościa, zastrzeżenia dot. treści AI oraz obowiązki użytkownika.';

  const url = `${baseUrl}/${safeLocale}/terms-of-use`;

  return {
    title,
    description,
    keywords: isEn
      ? [
          'terms of use', 'user responsibilities', 'guest mode', 'AI disclaimer',
          'account', 'Flow-XR terms'
        ]
      : [
          'warunki użytkowania', 'obowiązki użytkownika', 'tryb gościa', 'zastrzeżenia AI',
          'konto', 'regulamin Flow-XR'
        ],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/terms-of-use`,
        pl: `${baseUrl}/pl/terms-of-use`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Flow-XR',
      locale: safeLocale,
      alternateLocale: isEn ? 'pl' : 'en',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/logo_background.png`,
          width: 1200,
          height: 630,
          alt: 'Terms of Use',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/logo_background.png`],
    },
  };
}

export default async function TermsOfUsePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const url = `${baseUrl}/${safeLocale}/terms-of-use`;
  
  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: safeLocale === 'en' ? 'Home' : 'Strona główna', item: `${baseUrl}/${safeLocale}` },
          { "@type": "ListItem", position: 2, name: safeLocale === 'en' ? 'Terms of Use' : 'Warunki użytkowania', item: url },
        ],
      }} />
      <Header />
      <TermsOfUse />
      <Footer />
    </main>
  );
}





