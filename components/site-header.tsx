"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();

  const isEirPage = pathname === "/eir";
  const applyButtonText = isEirPage ? "Apply to EIR" : "Apply";
  const applyButtonLink = isEirPage ? siteConfig.links.apply.eir : siteConfig.links.apply.kickstarter;
  const applyButtonTarget = "_blank";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Use Link for the logo to navigate home */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/kickstarter-color.webp" alt="IOSG Kickstarter Logo" width={180} height={40} priority />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {isEirPage ? (
            // EIR Page Specific Navigation
            <>
              <Link href="/eir#about" className="text-sm font-medium transition-colors hover:text-foreground/80">
                About EIR
              </Link>
              <Link href="/eir#offerings" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Offerings
              </Link>
              <Link href="/eir#why" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Why IOSG?
              </Link>
              <Link href="/eir#apply" className="text-sm font-medium transition-colors hover:text-foreground/80">
                How to Apply
              </Link>
            </>
          ) : (
            // Main Page Navigation
            <>
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="/#partners" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Partners
              </Link>
              <Link href="/#wishlist" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Wishlist
              </Link>
              <Link href="/#faq" className="text-sm font-medium transition-colors hover:text-foreground/80">
                FAQ
              </Link>
              <Link href="/eir" className="text-sm font-medium transition-colors hover:text-foreground/80">
                EIR Program
              </Link>
            </>
          )}
        </nav>
        <div>
          {/* Contextual Apply Button */}
          <Button asChild>
            {isEirPage ? (
              <Link href={applyButtonLink}>{applyButtonText}</Link>
            ) : (
              <a href={applyButtonLink} target={applyButtonTarget} rel="noopener noreferrer">
                {applyButtonText}
              </a>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
