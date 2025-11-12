import { Header } from '@/components/layout';
import { SignUpForm } from '@/components/auth/SignUpForm';
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

  const title = isEn ? 'Create your Flow‑XR account' : 'Utwórz konto Flow‑XR';
  const description = isEn
    ? 'Sign up to start online coaching with visual methods. Quick registration with email or Google. Agree to Terms of Use and Privacy Policy.'
    : 'Zarejestruj się, aby rozpocząć coaching online z metodami wizualnymi. Szybka rejestracja e‑mailem lub przez Google. Akceptacja Warunków użytkowania i Polityki prywatności.';

  const url = `${baseUrl}/${safeLocale}/auth/signup`;

  return {
    title,
    description,
    keywords: isEn
      ? [
          'sign up', 'register', 'create account', 'Google signup', 'Flow-XR'
        ]
      : [
          'rejestracja', 'zarejestruj się', 'utwórz konto', 'rejestracja Google', 'Flow-XR'
        ],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/auth/signup`,
        pl: `${baseUrl}/pl/auth/signup`,
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
          alt: 'Create your Flow-XR account',
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

export default async function SignUp({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const url = `${baseUrl}/${safeLocale}/auth/signup`;
  
  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: safeLocale === 'en' ? 'Home' : 'Strona główna', item: `${baseUrl}/${safeLocale}` },
          { "@type": "ListItem", position: 2, name: safeLocale === 'en' ? 'Create account' : 'Rejestracja', item: url },
        ],
      }} />
      <Header />
      <SignUpForm locale={locale} />
      <Footer />
    </main>
  );
}
