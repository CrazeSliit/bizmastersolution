import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";
import Navigation from "../components/Navigation";

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
  title: "BizMaster Solution",
  description: "Professional business management solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased h-full`}
      >
        <Script
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
          type="module"
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <Navigation />
          {children}
          <zapier-interfaces-chatbot-embed
            is-popup="true"
            chatbot-id="cmlks1rp900iqtvqlema1qrmo"
          ></zapier-interfaces-chatbot-embed>
        </ThemeProvider>
      </body>
    </html>
  );
}
