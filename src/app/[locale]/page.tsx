import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout';
import { Hero, ForWhom, FlowXR, ForCoachesTherapists } from '@/components/sections';
import { Locale, defaultLocale, locales } from '@/lib/i18n';
import { getTranslations, getTranslation } from '@/lib/getTranslations';
import { JsonLd } from '@/components/seo/JsonLd';

// Lazy load below-the-fold components for better FID/INP
const PhilosophyMain = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.PhilosophyMain })), { ssr: true });
const HowWeSupport = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.HowWeSupport })), { ssr: true });
const Benefits = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Benefits })), { ssr: true });
const UnlockPower = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.UnlockPower })), { ssr: true });
const ForYourself = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.ForYourself })), { ssr: true });
const Testimonials = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Testimonials })), { ssr: true });
const CTA = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.CTA })), { ssr: true });
const LatestNews = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.LatestNews })), { ssr: true });
const FAQ = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.FAQ })), { ssr: true });
const Contact = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Contact })), { ssr: true });
const Footer = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Footer })), { ssr: true });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://flow-xr.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const messages = await getTranslations(safeLocale);
  
  const title = getTranslation(messages, 'metadata.home.title');
  const description = getTranslation(messages, 'metadata.home.description');
  const url = `${baseUrl}/${safeLocale}`;
  
  return {
    title,
    description,
    keywords: locale === 'pl'
      ? [
          'Interaktywna tablica online', 'Coaching Analityczny', 'Ustawienia rodzinne',
          'Ustawienia systemowe', 'Bert Hellinger', 'Autocoaching', 'autorefleksja',
          'coaching wspierany przez AI'
        ]
      : [
          'Online interactive board', 'Analytical Coaching', 'Famility constellations',
          'Systemic Constellations', 'Bert Hellinger', 'Self-coaching', 'self-reflection',
          'AI-supported coaching'
        ],
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en`,
        'pl': `${baseUrl}/pl`,
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
          url: `${baseUrl}/og/home?locale=${safeLocale}`,
          width: 1200,
          height: 630,
          alt: 'Flow-XR – Interactive workspace',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og/home?locale=${safeLocale}`],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = (locale && (locales as readonly string[]).includes(locale)) ? locale : defaultLocale;
  const messages = await getTranslations(safeLocale);
  const url = `${baseUrl}/${safeLocale}`;

  const faqQuestions = messages?.faq?.questions || {};
  const mainEntity = Object.values(faqQuestions).map((q: any) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer }
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: safeLocale === 'en' ? 'Home' : 'Strona główna',
        item: url,
      },
    ],
  };

  // Article JSON-LD for Latest News
  const articleData = {
    title: safeLocale === 'pl' ? 'Nowa plansza dostępna' : 'New board available',
    description: safeLocale === 'pl'
      ? 'Informujemy, że dodaliśmy nową planszę do konstelacji paradygmatycznej - Bogoban.'
      : 'Please note that we have added new board for paradigmal constellation - Bogoban.',
    datePublished: '2025-10-17',
    imageUrl: `${baseUrl}/News_board.png`,
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.title,
    description: articleData.description,
    image: articleData.imageUrl,
    datePublished: articleData.datePublished,
    author: {
      "@type": "Organization",
      name: "Flow-XR",
    },
    publisher: {
      "@type": "Organization",
      name: "Flow-XR",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo_background.png`,
      },
    },
  };

  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto">
        <JsonLd data={faqJsonLd} />
        <JsonLd data={breadcrumbsJsonLd} />
        <JsonLd data={articleJsonLd} />
        <Header />
      <Hero />
      <ForWhom />
      <FlowXR />
      <ForCoachesTherapists />
      <PhilosophyMain />
      <HowWeSupport />
      <Benefits />
      <UnlockPower />
      <ForYourself />
      <Testimonials />
      <CTA />
      <LatestNews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}