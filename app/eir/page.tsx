"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckSquare,
  Combine,
  DollarSign,
  FileText,
  FlaskConical,
  Globe,
  Info,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Rocket,
  Search,
  Users,
  Users2,
  Target,
  BookOpenCheck,
  Sparkles,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

// Re-add necessary UI component imports
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function EirPage() {
  // Animation variants (similar to main page)
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
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const offerings = [
    {
      title: "Funding & Compensation",
      description: "Receive compensation during the program and potentially secure up to $100k via the Kickstarter Program upon successful completion.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Product Thesis Refinement",
      description: "Validate key ideas through guided market research, technical feasibility checks, and strategic positioning.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "MVP Design & Prototyping",
      description: "Quickly build and test an MVP to find product-market fit, with structured feedback from demos.",
      icon: <FlaskConical className="h-6 w-6" />,
    },
    {
      title: "Leverage the IOSG Network",
      description: "Access our global network of founders, investors, and partners for insights, collaboration, and funding.",
      icon: <Network className="h-6 w-6" />,
    },
    {
      title: "Mentorship & Guidance",
      description: "Weekly 1-on-1 sessions with senior IOSG members covering product, GTM, tokenomics, and funding.",
      icon: <Users2 className="h-6 w-6" />,
    },
    {
      title: "In-Person Collaboration",
      description: "Benefit from an immersive, in-person program based in Hong Kong and Shenzhen for deep collaboration.",
      icon: <MapPin className="h-6 w-6" />,
    },
  ];

  const whyPoints = [
    {
      title: "Learn from Experts",
      description: "Gain insights from experienced investors and operators who've worked with hundreds of Web3 projects.",
      icon: <BookOpenCheck className="h-5 w-5" />,
    },
    {
      title: "Validate Strategically",
      description: "Refine your product direction with structured research and strategic input before full commitment.",
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Inside Track to Funding",
      description: "Develop a compelling concept with a direct path to potential $100K Kickstarter funding.",
      icon: <DollarSign className="h-5 w-5" />,
    },
    { title: "Real-World Exposure", description: "Work alongside top founders and builders, immersing yourself in Web3 innovation.", icon: <Eye className="h-5 w-5" /> },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header removed - Handled by layout */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-primary text-white bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,transparent_80%)]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />
          <div className="container relative">
            <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">In-Person Founders Program</div>
              {/* <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white">IOSG Entrepreneur in Residence</h1> */}
              <h1 className="font-bold tracking-tight mb-6 text-white">
                <Image src="/eir.webp" alt="IOSG EIR Logo" width={700} height={100} className="mx-auto" priority />
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Shape your vision and build a foundation for your venture with funding, mentorship, and ecosystem support, designed for founders at the pre-idea stage.
              </p>
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href={siteConfig.links.apply.eir} target="_blank">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-background">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold tracking-tight mb-6 font-pixel tracking-wide">About the EIR Program</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  The IOSG Entrepreneur in Residence (EIR) Program is tailored for founders at the very beginning—those refining ideas, researching markets, and testing hypotheses.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Over six months in Hong Kong and Shenzhen, EIRs receive funding, mentorship, and ecosystem support to shape their vision and build a venture-scale business
                  foundation. It's a space to experiment, iterate, and validate before launching formally.
                </p>
                <p className="text-lg text-muted-foreground">
                  This program supports founders earlier than our{" "}
                  <Link href="/#about" className="text-primary underline hover:text-primary/80">
                    Kickstarter Program
                  </Link>
                  . While Kickstarter funds teams with clear product direction, EIR focuses on individuals still shaping their vision, offering resources to test, build an MVP, and
                  strengthen foundations pre-funding.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image src="/hk.webp" alt="Hong Kong skyline" fill={true} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Offerings Section */}
        <section id="offerings" className="py-20 md:py-28 bg-muted/40">
          <div className="container">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-4 font-pixel tracking-wide">What the Program Offers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive support to help you transform your initial concept into a validated product direction.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {offerings.map((item, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-background">
                    <CardHeader>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">{item.icon}</span>
                        <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why IOSG Section */}
        <section id="why" className="py-20 md:py-28 bg-primary text-white bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,transparent_80%)]">
          <div className="container">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-4 font-pixel tracking-wide">Why Build Alongside IOSG?</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Working directly with a venture firm at this stage offers unique advantages to build with the right guidance and perspective from the start.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {whyPoints.map((point, index) => (
                <motion.div key={index} variants={cardVariants} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{point.icon}</div>
                  <h4 className="font-semibold mb-1 text-black">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p className="text-center text-lg text-white/90 mt-12 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              This program is for founders who want to move fast, think critically, and build with confidence alongside a firm that deeply understands the builder mindset.
            </motion.p>
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="apply" className="py-20 md:py-28 bg-background">
          <div className="container max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">How to Apply</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The EIR program is currently invite-only, reflecting its highly selective nature. However, we welcome applications from exceptional founders who believe they are a
                strong fit for the program's goals.
              </p>
              {/* Replace with actual application link/form component when available */}
              <Button size="lg" asChild>
                <Link href={siteConfig.links.apply.eir} target="_blank">
                  Apply Here
                </Link>
              </Button>

              {/* <Alert className="mt-12 text-left">
                <Info className="h-4 w-4" />
                <AlertTitle>Please Note</AlertTitle>
                <AlertDescription>
                  Due to the limited spots and selective nature of the program, we will only reach out if we see a strong potential fit. If you don't hear back from us, it means we
                  are unable to proceed with your application at this time.
                </AlertDescription>
              </Alert> */}

              <p className="mt-8 text-muted-foreground">
                For referrals or inquiries, please contact us at:{" "}
                <a href="mailto:kickstarter@iosg.vc" className="text-primary underline hover:text-primary/80">
                  kickstarter [at] iosg.vc
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer removed - Handled by layout */}
    </div>
  );
}
