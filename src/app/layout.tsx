import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Metadata is now generated dynamically per page with locale support
// See generateMetadata() in individual page files
export const metadata: Metadata = {
  title: {
    default: "Flow-XR Interactive Workspace for Coaches, Therapists & Self-Reflection",
    template: "%s | Flow-XR",
  },
  description: "For coaches and therapists to experience real-time online sessions with their clients using visual methods. For yourself to explore processes of self-reflection for personal growth.",
  metadataBase: new URL(baseUrl),
  other: {
    'preload-hero': '/hero-illustration.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flow-XR",
    url: baseUrl,
    logo: `${baseUrl}/logo_background.png`,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flow-XR",
    url: baseUrl,
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${dmSans.variable} antialiased`}
      >
        <JsonLd data={orgJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
