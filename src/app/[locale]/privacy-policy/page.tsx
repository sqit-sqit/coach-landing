import { Header } from '@/components/layout';
import { PrivacyPolicy, Footer } from '@/components/sections';
import type { Metadata } from 'next';
import { Locale, defaultLocale, locales } from '@/lib/i18n';
import { getTranslations } from '@/lib/getTranslations';
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

  const title = isEn ? 'Privacy Policy | Flow‑XR' : 'Polityka Prywatności | Flow‑XR';
  const description = isEn
    ? 'Learn how Flow‑XR collects, uses, and protects your data. We use localStorage, secure encryption, and Google OAuth to provide a safe experience.'
    : 'Dowiedz się, jak Flow‑XR gromadzi, wykorzystuje i chroni Twoje dane. Korzystamy z localStorage, bezpiecznego szyfrowania i Google OAuth, aby zapewnić bezpieczne korzystanie z aplikacji.';

  const url = `${baseUrl}/${safeLocale}/privacy-policy`;

  return {
    title,
    description,
    keywords: isEn
      ? [
          'privacy policy', 'GDPR', 'data protection', 'Google OAuth',
          'localStorage', 'Flow-XR privacy'
        ]
      : [
          'polityka prywatności', 'RODO', 'ochrona danych', 'Google OAuth',
          'localStorage', 'prywatność Flow-XR'
        ],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/privacy-policy`,
        pl: `${baseUrl}/pl/privacy-policy`,
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
          alt: 'Privacy Policy',
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

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const url = `${baseUrl}/${safeLocale}/privacy-policy`;
  
  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: safeLocale === 'en' ? 'Home' : 'Strona główna', item: `${baseUrl}/${safeLocale}` },
          { "@type": "ListItem", position: 2, name: safeLocale === 'en' ? 'Privacy Policy' : 'Polityka Prywatności', item: url },
        ],
      }} />
      <Header />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}

