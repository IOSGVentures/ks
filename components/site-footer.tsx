"use client";

import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            {/* Use Link for the logo to navigate home */}
            <Link href="/">
              <Image src="/kickstarter-color.webp" alt="IOSG Kickstarter Logo" width={180} height={40} />
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            For inquiries:{" "}
            <a href="mailto:kickstarter@iosg.vc" className="hover:text-primary">
              kickstarter@iosg.vc
            </a>
          </div>
          <div className="text-sm text-muted-foreground">© {currentYear} IOSG Ventures. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
