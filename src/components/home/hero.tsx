"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroBg1 from "@/assets/images/hero1.jpg";
import HeroBg2 from "@/assets/images/hero2.jpg";
import MobileHeroBg1 from "@/assets/images/mobile_hero1.jpg";
import MobileHeroBg2 from "@/assets/images/mobile_hero2.jpg";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGES = [
  { desktop: HeroBg1, mobile: MobileHeroBg1, alt: "Raphautos Hero 1" },
  { desktop: HeroBg2, mobile: MobileHeroBg2, alt: "Raphautos Hero 2" },
];

export function Hero() {
  const ref = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100vh] md:min-h-[110vh] w-full overflow-hidden bg-black text-white">
      {/* Background Slideshow */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentImageIndex].desktop}
              alt={HERO_IMAGES[currentImageIndex].alt}
              fill
              className="hidden md:block object-cover opacity-70"
              placeholder="blur"
              priority
              quality={100}
            />
            <Image
              src={HERO_IMAGES[currentImageIndex].mobile}
              alt={HERO_IMAGES[currentImageIndex].alt}
              fill
              className="block md:hidden object-cover opacity-70"
              placeholder="blur"
              priority
              quality={100}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[100vh] md:min-h-[110vh] flex-col items-center justify-center px-4 pt-16 pb-24 text-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h1 className="relative mb-5 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-2xl">
            Luxury Redefined
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-zinc-300 font-light leading-relaxed mb-8"
          >
            Discover premium vehicles where excellence meets performance.
          </motion.p>

          {/* Buttons - Auto width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Button
              size="lg"
              className="group h-10 md:h-12 px-5 md:px-8 text-xs md:text-sm lg:text-base bg-white text-black hover:bg-zinc-100 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-auto"
              asChild
            >
              <Link href="/inventory" className="flex items-center gap-2">
                View Collection
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 md:h-12 px-5 md:px-8 text-xs md:text-sm lg:text-base border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full backdrop-blur-sm transition-all duration-300 w-auto"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-400 cursor-pointer hover:text-white transition-colors z-10"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs tracking-[0.3em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
