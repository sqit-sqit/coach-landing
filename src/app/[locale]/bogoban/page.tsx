import { Header } from '@/components/layout';
import { BogobanHero, BogobanDescription, BogobanBenefits, HowItWorks, GetStarted, Footer, BreadcrumbsSection } from '@/components/sections';
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

  const enTitle = 'Online Board for Bogoban by Pavel Piskarev';
  const enDescription = 'Use online board to provide Bogoban sessions online to your customers with a simple intuitive application.';

  const title = safeLocale === 'en'
    ? enTitle
    : getTranslation(messages, 'bogoban.hero.title');
  const description = safeLocale === 'en'
    ? enDescription
    : getTranslation(messages, 'bogoban.description.text');

  const url = `${baseUrl}/${safeLocale}/bogoban`;

  return {
    title,
    description,
    keywords: safeLocale === 'pl'
      ? [
          'Bogoban Online', 'Tablica online do Bogoban', 'Coaching analityczny',
          'Tablica wizualna do coachingu', 'Pavel Piskariev'
        ]
      : [
          'Bogoban Online', 'Online Board for Bogoban', 'Analytical Coaching',
          'Visual board for Coaching', 'Pavel Piskariev'
        ],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/bogoban`,
        pl: `${baseUrl}/pl/bogoban`,
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
          url: `${baseUrl}/og/bogoban?locale=${safeLocale}`,
          width: 1200,
          height: 630,
          alt: 'Bogoban Online Board',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og/bogoban?locale=${safeLocale}`],
    },
  };
}

export default async function BogobanPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const messages = await getTranslations(safeLocale);
  const url = `${baseUrl}/${safeLocale}/bogoban`;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: safeLocale === 'en' ? 'Home' : 'Strona główna', href: `/${safeLocale}` },
    { label: getTranslation(messages, 'bogoban.breadcrumbs.coaches') },
    { label: getTranslation(messages, 'bogoban.hero.title') },
  ];

  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: safeLocale === 'en' ? 'Home' : 'Strona główna', item: `${baseUrl}/${safeLocale}` },
          { "@type": "ListItem", position: 2, name: getTranslation(messages, 'bogoban.breadcrumbs.coaches'), item: `${baseUrl}/${safeLocale}#for-coaches-therapists` },
          { "@type": "ListItem", position: 3, name: getTranslation(messages, 'bogoban.hero.title'), item: url },
        ],
      }} />
      <Header />
      <BreadcrumbsSection items={breadcrumbs} />
      <BogobanHero />
      <BogobanDescription />
      <HowItWorks />
      <GetStarted />
      <BogobanBenefits />
      <Footer />
    </main>
  );
}
