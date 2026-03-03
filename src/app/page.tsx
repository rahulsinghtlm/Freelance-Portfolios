"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MagicBurnCanvas from "@/components/ui/MagicBurnCanvas";
import ScrollAmbient from "@/components/ui/ScrollAmbient";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Software from "@/components/Software";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  useLenis();

  return (
    <motion.main
      initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
    >
      <Navbar />
      <ScrollAmbient />
      <Hero />
      <Marquee />
      <MagicBurnCanvas />
      <Work />
      <About />
      <Services />
      <Software />
      <CTA />
      <Footer />
    </motion.main>
  );
}