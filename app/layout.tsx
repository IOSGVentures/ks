import type React from "react";
import type { Metadata } from "next";
// Remove Inter if Helvetica Neue is the new default sans font
// import { Inter } from "next/font/google";
import localFont from "next/font/local"; // Import localFont
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Script from "next/script"; // Import Script

// Define Helvetica Neue using the TTF file
const helveticaNeue = localFont({
  src: "./fonts/helvetica-neue/helvetica-neue.ttf",
  variable: "--font-hn", // Assign CSS Variable name
  display: "swap",
  weight: "400", // Assuming the TTF is regular weight
  style: "normal",
});

// Define Neue Pixel Grotesk using the TTF file
const neuePixelGrotesk = localFont({
  src: "./fonts/neue-pixel-grotesk/neue-pixel-grotesk.ttf",
  variable: "--font-npg", // Assign CSS Variable name
  display: "swap",
  weight: "400", // Assuming the TTF is regular weight
  style: "normal",
});

// const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }); // Remove or keep if needed

export const metadata: Metadata = {
  metadataBase: new URL("https://kickstarter.iosg.vc"),
  title: "IOSG Kickstarter Program",
  description: "Accelerating the next generation of Web3 founders with $100K investment, expert mentorship, and access to our global network of partners.",
  openGraph: {
    title: "IOSG Kickstarter Program",
    description: "Accelerating Web3 founders with $100K investment, mentorship, and ecosystem support.",
    url: "https://kickstarter.iosg.vc",
    siteName: "IOSG Kickstarter",
    images: [
      {
        url: "/poster/ks-banner.webp",
        width: 1920,
        height: 1080,
        alt: "IOSG Kickstarter Program Poster",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IOSG Kickstarter Program",
    description: "Accelerating Web3 founders with $100K investment, mentorship, and ecosystem support.",
    images: ["/poster/ks-banner.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID; // Get ID from env

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply the font variables to the body or html tag */}
      <body className={`${helveticaNeue.variable} ${neuePixelGrotesk.variable} flex flex-col min-h-screen font-sans`}>
        {/* Conditionally render GA scripts only if ID is present */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive" // Load after page becomes interactive
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive" // Load after page becomes interactive
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {/* font-sans will use --font-hn via Tailwind config */}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import "./globals.css";
