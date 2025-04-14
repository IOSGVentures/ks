import type React from "react";
import type { Metadata } from "next";

// Metadata moved from page.tsx
export const metadata: Metadata = {
  title: "IOSG Entrepreneur in Residence Program",
  description: "Shape your vision and build a foundation for your venture with funding, mentorship, and network access, designed for founders at the pre-idea stage.",
  openGraph: {
    title: "IOSG Entrepreneur in Residence Program",
    description: "An in-person program in HK/SZ for pre-idea founders to validate concepts with funding and mentorship.",
    url: "https://kickstarter.iosg.vc/eir",
    siteName: "IOSG EIR",
    images: [
      {
        url: "/poster/eir-banner.webp",
        width: 1920,
        height: 1080,
        alt: "IOSG EIR Program Poster",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IOSG Entrepreneur in Residence Program",
    description: "An in-person program in HK/SZ for pre-idea founders to validate concepts with funding and mentorship.",
    images: ["/poster/eir-banner.webp"],
  },
};

// Basic layout component for the /eir route
export default function EirLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // Just render the page content
}
