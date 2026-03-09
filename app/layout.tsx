import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ChatbaseWidget from "../components/ChatbaseWidget";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BIZmaster Solutions | Business Development & Growth Partner",
    template: "%s | BIZmaster Solutions",
  },
  description:
    "BIZmaster Solutions is Sri Lanka's leading business development company. We help enterprises grow with AI & Tech, Sales, Branding, Finance, and Investor services. Transform your business today.",
  keywords: [
    "BIZmaster",
    "BIZmaster Solutions",
    "BIZmaster.lk",
    "business development Sri Lanka",
    "business growth partner",
    "business consulting Sri Lanka",
    "AI solutions Sri Lanka",
    "sales growth",
    "branding digital marketing",
    "investor hub",
    "business transformation",
    "BIZ Academy",
  ],
  authors: [{ name: "BIZmaster Solutions", url: "https://bizmastersolutions.lk" }],
  creator: "BIZmaster Solutions",
  publisher: "BIZmaster Solutions",
  metadataBase: new URL("https://bizmastersolutions.lk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizmastersolutions.lk",
    siteName: "BIZmaster Solutions",
    title: "BIZmaster Solutions | Business Development & Growth Partner",
    description:
      "BIZmaster Solutions transforms enterprises into industry leaders through AI, Sales, Branding, Finance, and Investor services in Sri Lanka.",
    images: [
      {
        url: "/nw_logo.png",
        width: 1200,
        height: 630,
        alt: "BIZmaster Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIZmaster Solutions | Business Development & Growth Partner",
    description:
      "Transform your business with BIZmaster Solutions — Sri Lanka's comprehensive business execution partner.",
    images: ["/nw_logo.png"],
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BIZmaster Solutions",
    alternateName: "BIZmaster",
    url: "https://bizmastersolutions.lk",
    logo: "https://bizmastersolutions.lk/nw_logo.png",
    description:
      "BIZmaster Solutions is Sri Lanka's leading business development company helping enterprises grow through AI, Sales, Branding, Finance, and Investor services.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@bizmaster.lk",
      contactType: "customer service",
    },
    sameAs: [
      "https://web.facebook.com/BIZmaster.Solutions",
    ],
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased h-full`}
      >
        <ThemeProvider>
          <Navigation />
          <div className="pt-14">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <WhatsAppButton />
        <ChatbaseWidget />
      </body>
    </html>
  );
}
