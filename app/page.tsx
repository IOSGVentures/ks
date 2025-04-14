"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Rocket,
  Users,
  CheckSquare,
  FileText,
  Gamepad2,
  Store,
  Users2,
  BrainCircuit,
  Combine,
  ShieldCheck,
  DatabaseZap,
  Network,
  Bitcoin,
  Lightbulb,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PartnerShowcase } from "@/components/partner-showcase";
import { ProgramFeatures } from "@/components/program-features";
import { FaqSection } from "@/components/faq-section";
import { PartnerLogos } from "@/components/partner-logos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { siteConfig } from "@/lib/constants";

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-primary text-white bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,transparent_80%)]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />
        <div className="container relative">
          <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-block rounded-full bg-white/30 text-white px-3 py-1 text-sm font-medium mb-6 backdrop-blur-sm">Applications Open</div>
            <h1 className="font-bold tracking-tight mb-6 text-white">
              <Image src="/kickstarter.webp" alt="IOSG Kickstarter Logo" width={1000} height={300} className="mx-auto" priority />
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Accelerating the next generation of Web3 founders with $100K investment, expert mentorship, and access to our global network of partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90" asChild>
                <a href={siteConfig.links.apply.kickstarter} target="_blank" rel="noopener noreferrer">
                  Apply for Funding <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6 font-pixel tracking-wide">About the Program</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2017, IOSG has backed over 130+ Web3 projects globally. The Kickstarter Program is a builder-centric initiative that offers $100k and access to our network of
                experts in exchange for a small stake in your company.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                If you are about to start something in the crypto space and haven't raised any institutional funding, we want to meet you. Even if you are already part of an
                accelerator or have raised a modest amount of money from friends and families, we'd love to connect with you too.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://iosg.vc/#about" target="_blank" rel="noopener noreferrer">
                    <Users className="h-4 w-4" /> Meet Our Team
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://iosg.vc/#portfolio" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" /> Our Portfolio
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-primary text-white p-8 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,transparent_90%)]">
              <h3 className="text-2xl font-bold mb-6 ">What We Offer</h3>
              <ProgramFeatures />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-pixel tracking-wide">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each of our partners is actively seeking specific types of projects. Explore each partner to learn more about their interests and focus areas.
            </p>
          </motion.div>
          <PartnerShowcase />
        </div>
      </section>

      {/* Wishlist Section */}
      <section id="wishlist" className="pt-20 pb-16 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center rounded-full  px-3 py-1 text-sm font-medium bg-primary/10 text-primary  mb-4">
              <Rocket className="h-4 w-4 mr-2" /> Opportunities
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-pixel tracking-wide">Our Wishlist</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              While we're open to surprising ideas, here is a list of areas where we think big opportunities might lie. But we're more than happy to be surprised by your own ideas
              that we haven't considered.
            </p>
          </motion.div>

          {/* Main Content Area - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Left Column: Key Considerations */}
            <motion.div className="md:col-span-1" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-6 border-b pb-2 font-pixel tracking-wide">Key Considerations</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>MVP Feasibility (3-4 months)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Quicker Adoption Focus</span>
                </li>
                <li className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Short-Term Demonstrable Value</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Column: Focus Areas */}
            <motion.div className="md:col-span-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Consumer Focus */}
                <motion.div variants={fadeIn}>
                  <h3 className="text-xl font-semibold mb-6 border-b pb-2 font-pixel tracking-wide">Consumer-Focused Applications</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Content Monetization & NFTs</li>
                    <li>On-Chain Gaming</li>
                    <li>Web3 Marketplaces</li>
                    <li>Open Social Platforms</li>
                    <li>AI & Web3 Consumer</li>
                  </ul>
                </motion.div>

                {/* Technical Focus */}
                <motion.div variants={fadeIn}>
                  <h3 className="text-xl font-semibold mb-6 border-b pb-2 font-pixel tracking-wide">Technical & Infrastructure</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>AI & Blockchain Synergy</li>
                    <li>Advanced Proof Systems & Identity</li>
                    <li>Data & Computation Innovation</li>
                    <li>Decentralized Physical Infrastructure (DePin)</li>
                    <li>Bitcoin Ecosystem Advancement</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-pixel tracking-wide">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to know about the IOSG Kickstarter Program.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <FaqSection />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,transparent_80%)]">
        <div className="container">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-pixel tracking-wide">Ready to Level Up Your Project?</h2>
            <p className="text-xl mb-8">Applications are always open. We try out best to review submissions within two weeks.</p>
            <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90" asChild>
              <a href={siteConfig.links.apply.kickstarter} target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
