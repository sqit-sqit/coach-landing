import { Header } from '@/components/layout';
import { LoginForm } from '@/components/auth/LoginForm';
import { Footer } from '@/components/sections';
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

  const title = isEn ? 'Log in to Flow‑XR' : 'Zaloguj się do Flow‑XR';
  const description = isEn
    ? 'Access your Flow‑XR account and continue your coaching journey. Log in with email or Google.'
    : 'Uzyskaj dostęp do konta Flow‑XR i kontynuuj swoją ścieżkę rozwoju. Zaloguj się e‑mailem lub przez Google.';

  const url = `${baseUrl}/${safeLocale}/auth/login`;

  return {
    title,
    description,
    keywords: isEn
      ? [
          'login', 'sign in', 'Flow-XR account', 'Google login', 'email login'
        ]
      : [
          'logowanie', 'zaloguj się', 'konto Flow-XR', 'logowanie Google', 'logowanie e-mail'
        ],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/auth/login`,
        pl: `${baseUrl}/pl/auth/login`,
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
          alt: 'Log in to Flow-XR',
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

export default async function Login({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const url = `${baseUrl}/${safeLocale}/auth/login`;
  
  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: safeLocale === 'en' ? 'Home' : 'Strona główna', item: `${baseUrl}/${safeLocale}` },
          { "@type": "ListItem", position: 2, name: safeLocale === 'en' ? 'Log in' : 'Logowanie', item: url },
        ],
      }} />
      <Header />
      <LoginForm locale={locale} />
      <Footer />
    </main>
  );
}

