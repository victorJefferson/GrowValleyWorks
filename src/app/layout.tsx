import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gv.works'),
  title: {
    default: "GrowValley Works",
    template: "%s | GrowValley Works"
  },
  description: "Company formation, government compliance, accounting, payroll, and international expansion. Handled by one firm.",
  keywords: ["Company Formation UAE", "PRO Services", "Business Compliance UAE", "Payroll UAE", "Accounting UAE", "Corporate Structuring", "International Expansion", "GrowValley Works", "GV Works", "GVWorks", "GrowValleyWorks"],
  authors: [{ name: "GrowValley Works" }],
  creator: "GrowValley Works",
  publisher: "GrowValley Works",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gv.works",
    siteName: "GrowValley Works",
    title: "GrowValley Works",
    description: "The operational backbone of serious businesses. Company formation, compliance, payroll, and international expansion — one firm.",
    images: [
      {
        url: "/images/growvalleyworks.png",
        width: 1200,
        height: 630,
        alt: "GrowValley Works — Operational Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowValley Works",
    description: "Company formation, government compliance, accounting, payroll, and international expansion. Handled by one firm.",
    images: ["/images/growvalleyworks.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GrowValley Works",
    "alternateName": ["GV Works", "GVWorks", "GrowValleyWorks"],
    "url": "https://gv.works",
    "logo": "https://gv.works/gv-logo-blue.png",
    "description": "Company formation, government compliance, accounting, payroll, and international expansion. Handled by one firm."
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
