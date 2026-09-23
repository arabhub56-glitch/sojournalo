import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://arabhub56-glitch.github.io/sojournalo/";
const ogImage = `${siteUrl}og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SoJournalo | Web3 Awareness for the Arab World",
  description:
    "SoJournalo helps Web3 brands expand across the MENA region through localized marketing, community growth, strategic content, and culturally-native communication.",
  keywords:
    "Web3 marketing, Arabic community, MENA Web3, Arabic blockchain, community growth, Twitter X management, Telegram community, Arabic localization",
  openGraph: {
    title: "SoJournalo | Web3 Awareness for the Arab World",
    description:
      "Building strong Arabic communities for Web3 projects. MENA expansion, localized marketing, community growth.",
    siteName: "SoJournalo",
    url: siteUrl,
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "SoJournalo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoJournalo | Web3 Awareness for the Arab World",
    description:
      "Building strong Arabic communities for Web3 projects. MENA expansion, localized marketing, community growth.",
    site: "@SoJournalo",
    creator: "@SoJournalo",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SoJournalo",
  description:
    "Arabic Web3 marketing agency helping brands expand across the MENA region through localized marketing, community growth, and culturally-native communication.",
  areaServed: "MENA",
  knowsLanguage: ["ar", "en"],
  email: "sojournalo@gmail.com",
  sameAs: ["https://x.com/SoJournalo", "https://t.me/Sojournalo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
