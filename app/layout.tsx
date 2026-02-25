import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";
import Navigation from "../components/Navigation";
import ChatbaseWidget from "../components/ChatbaseWidget";

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
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
        <ChatbaseWidget />
      </body>
    </html>
  );
}
