import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SO's Journal | Arabic Web3 Marketing & Community Growth",
  description:
    "SO's Journal helps Web3 brands expand across the MENA region through localized marketing, community growth, strategic content, and culturally-native communication.",
  keywords:
    "Web3 marketing, Arabic community, MENA Web3, Arabic blockchain, community growth, Twitter X management, Telegram community, Arabic localization",
  openGraph: {
    title: "SO's Journal | Arabic Web3 Marketing",
    description:
      "Building strong Arabic communities for Web3 projects. MENA expansion, localized marketing, community growth.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SO's Journal",
  description:
    "Arabic Web3 marketing agency helping brands expand across the MENA region through localized marketing, community growth, and culturally-native communication.",
  areaServed: "MENA",
  knowsLanguage: ["ar", "en"],
  sameAs: ["https://twitter.com/sosjournal", "https://t.me/sosjournal"],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0B0D] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
