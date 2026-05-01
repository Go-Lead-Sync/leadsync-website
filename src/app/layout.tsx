import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const SITE_URL = "https://goleadsyncs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LeadSync | AI Lead Manager for Agencies, Coaches & Consultants",
    template: "%s | LeadSync",
  },
  description:
    "LeadSync is the AI lead management platform for agencies, coaches and consultants. Qualify leads instantly with Claude AI, fill your calendar 24/7, and close more clients from $97/mo.",
  keywords: [
    "AI lead management",
    "AI lead qualification",
    "AI appointment setter",
    "AI SDR",
    "Claude AI sales agent",
    "conversational AI",
    "GoHighLevel integration",
    "GHL AI",
    "chatbot lead generation",
    "CRM automation",
    "lead qualification software",
    "AI for agencies",
    "AI for coaches",
    "AI for consultants",
  ],
  applicationName: "LeadSync",
  authors: [{ name: "LeadSync" }],
  creator: "LeadSync",
  publisher: "LeadSync",
  category: "Business Software",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LeadSync | AI Lead Manager for Agencies, Coaches & Consultants",
    description:
      "Qualify leads instantly with Claude AI, fill your calendar 24/7, and close more clients. Plans from $97/mo.",
    url: SITE_URL + "/",
    siteName: "LeadSync",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "LeadSync — AI Lead Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadSync | AI Lead Manager for Agencies, Coaches & Consultants",
    description:
      "Qualify leads instantly with Claude AI, fill your calendar 24/7, and close more clients. Plans from $97/mo.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LeadSync",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "AI lead management platform that qualifies leads, books meetings, and follows up 24/7 for agencies, coaches and consultants.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LeadSync",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: { "@type": "Organization", name: "LeadSync" },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LeadSync",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "AI lead manager powered by Claude AI. Qualifies leads, books meetings and syncs with GoHighLevel 24/7.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "97",
      priceCurrency: "USD",
      url: SITE_URL + "/#pricing",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "297",
      priceCurrency: "USD",
      url: SITE_URL + "/#pricing",
    },
    {
      "@type": "Offer",
      name: "Launch Sync Unlimited",
      price: "497",
      priceCurrency: "USD",
      url: SITE_URL + "/#pricing",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
