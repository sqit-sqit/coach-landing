import { Header } from '@/components/layout';
import { SystemicConstellationsHero, SystemicConstellationsDescription, SystemicConstellationsBenefits, HowItWorks, GetStarted, Footer, BreadcrumbsSection } from '@/components/sections';
import type { Metadata } from 'next';
import { Locale, defaultLocale, locales } from '@/lib/i18n';
import { getTranslations, getTranslation } from '@/lib/getTranslations';
import { JsonLd } from '@/components/seo/JsonLd';
import { BreadcrumbItem } from '@/components/ui';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://flow-xr.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const messages = await getTranslations(safeLocale);

  // Use hero title as page title and description text as meta description
  const title = getTranslation(messages, 'systemicConstellations.hero.title');
  const description = getTranslation(messages, 'systemicConstellations.description.text');
  const url = `${baseUrl}/${safeLocale}/systemic-constellations`;

  return {
    title,
    description,
    keywords: safeLocale === 'pl'
      ? [
          'Ustawienia systemowe', 'Ustawienia rodzinne', 'Ustawienia online',
          'Interaktywna tablica do ustawień', 'Bert Hellinger'
        ]
      : [
          'Systemic Constellations', 'family Constellations', 'Constellations Online',
          'interactive Board for constellations', 'Bert Hellinger'
        ],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/systemic-constellations`,
        pl: `${baseUrl}/pl/systemic-constellations`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Flow-XR',
      locale: safeLocale,
      alternateLocale: safeLocale === 'en' ? 'pl' : 'en',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og/systemic?locale=${safeLocale}`,
          width: 1200,
          height: 630,
          alt: 'Systemic and Family Constellations Online',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og/systemic?locale=${safeLocale}`],
    },
  };
}

export default async function SystemicConstellationsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const messages = await getTranslations(safeLocale);
  const url = `${baseUrl}/${safeLocale}/systemic-constellations`;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: safeLocale === 'en' ? 'Home' : 'Strona główna', href: `/${safeLocale}` },
    { label: getTranslation(messages, 'systemicConstellations.breadcrumbs.coaches') },
    { label: getTranslation(messages, 'systemicConstellations.hero.title') },
  ];

  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: safeLocale === 'en' ? 'Home' : 'Strona główna', item: `${baseUrl}/${safeLocale}` },
          { "@type": "ListItem", position: 2, name: getTranslation(messages, 'systemicConstellations.breadcrumbs.coaches'), item: `${baseUrl}/${safeLocale}#for-coaches-therapists` },
          { "@type": "ListItem", position: 3, name: getTranslation(messages, 'systemicConstellations.hero.title'), item: url },
        ],
      }} />
      <Header />
      <BreadcrumbsSection items={breadcrumbs} />
      <SystemicConstellationsHero />
      <SystemicConstellationsDescription />
      <HowItWorks />
      <GetStarted />
      <SystemicConstellationsBenefits />
      <Footer />
    </main>
  );
}
